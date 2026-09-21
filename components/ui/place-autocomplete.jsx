"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SCRIPT_ID = "google-maps-places";

let mapsPromise = null;

const loadGoogleMaps = async () => {
    if (typeof window === "undefined") return null;
    if (window.google?.maps?.places) return window.google.maps;
    if (mapsPromise) return mapsPromise;

    mapsPromise = (async () => {
        const res = await fetch("/api/google-maps-key");
        const data = await res.json();
        if (!data?.apiKey) throw new Error("Maps unavailable");

        await new Promise((resolve, reject) => {
            const existing = document.getElementById(SCRIPT_ID);
            if (existing) {
                existing.addEventListener("load", resolve);
                existing.addEventListener("error", reject);
                return;
            }
            const script = document.createElement("script");
            script.id = SCRIPT_ID;
            script.async = true;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${data.apiKey}&libraries=places&v=weekly&loading=async`;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });

        // The script URL already requests the places library. importLibrary only
        // exists on the newer bootstrap loader, so call it opportunistically.
        if (typeof window.google.maps.importLibrary === "function") {
            await window.google.maps.importLibrary("places");
        }
        return window.google.maps;
    })().catch((err) => {
        mapsPromise = null;
        throw err;
    });

    return mapsPromise;
};

// Flatten Google's addressComponents array into the fields we care about.
const parseAddressComponents = (components = []) => {
    const get = (type) => components.find((c) => c.types?.includes(type));
    const streetNumber = get("street_number")?.longText || "";
    const route = get("route")?.longText || "";

    return {
        street: [streetNumber, route].filter(Boolean).join(" "),
        city: get("locality")?.longText || get("sublocality")?.longText || "",
        state: get("administrative_area_level_1")?.shortText || "",
        zip: get("postal_code")?.longText || "",
    };
};

export function PlaceAutocomplete({
    id = "address",
    value = "",
    onSelect,
    onChange,
    placeholder = "Start typing your address...",
    disabled = false,
    required = false,
}) {
    const sessionTokenRef = useRef(null);
    const newestRequestIdRef = useRef(0);
    const debounceRef = useRef(null);

    const [ready, setReady] = useState(false);
    const [loadFailed, setLoadFailed] = useState(false);
    const [predictions, setPredictions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        let mounted = true;
        loadGoogleMaps()
            .then(() => {
                if (!mounted) return;
                setReady(true);
                refreshSessionToken();
            })
            .catch((err) => {
                console.error("Address autocomplete unavailable:", err);
                if (mounted) setLoadFailed(true);
            });

        return () => {
            mounted = false;
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, []);

    const refreshSessionToken = () => {
        try {
            sessionTokenRef.current =
                new window.google.maps.places.AutocompleteSessionToken();
        } catch {
            sessionTokenRef.current = null;
        }
    };

    const fetchPredictions = async (input) => {
        const trimmed = (input || "").trim();
        if (!trimmed || !window.google?.maps?.places) {
            setPredictions([]);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        const requestId = ++newestRequestIdRef.current;

        const request = { input: trimmed, includedRegionCodes: ["us"] };
        if (sessionTokenRef.current) request.sessionToken = sessionTokenRef.current;

        try {
            const { suggestions } =
                await window.google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
                    request
                );
            if (requestId !== newestRequestIdRef.current) return;
            setPredictions(suggestions || []);
        } catch (err) {
            console.error("Address autocomplete failed:", err);
            if (requestId === newestRequestIdRef.current) setPredictions([]);
        } finally {
            if (requestId === newestRequestIdRef.current) setIsSearching(false);
        }
    };

    const handleChange = (e) => {
        const next = e.target.value;
        onChange?.(next);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => fetchPredictions(next), 350);
    };

    const handleSelect = async (placePrediction) => {
        if (!placePrediction) return;

        try {
            const place = placePrediction.toPlace();
            await place.fetchFields({
                fields: ["location", "formattedAddress", "addressComponents", "id"],
            });

            const label = place.formattedAddress || placePrediction.text?.toString?.() || "";
            const location = place.location;

            setPredictions([]);
            onChange?.(label);
            onSelect?.({
                address: label,
                placeId: place.id || null,
                lat: typeof location?.lat === "function" ? location.lat() : null,
                lng: typeof location?.lng === "function" ? location.lng() : null,
                ...parseAddressComponents(place.addressComponents),
            });

            refreshSessionToken();
        } catch (err) {
            console.error("Failed to resolve place:", err);
        }
    };

    return (
        <div className="relative w-full">
            <Input
                id={id}
                name={id}
                type="text"
                autoComplete="off"
                value={value}
                onChange={handleChange}
                placeholder={ready || loadFailed ? placeholder : "Loading address lookup..."}
                disabled={disabled}
                required={required}
            />

            {(isSearching || predictions.length > 0) && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 overflow-hidden rounded-lg border border-border bg-popover shadow-lg">
                    {isSearching && predictions.length === 0 && (
                        <div className="px-3 py-2 text-xs text-muted-foreground">Searching...</div>
                    )}
                    {predictions.length > 0 && (
                        <ul className="max-h-72 overflow-y-auto">
                            {predictions.map((suggestion, index) => {
                                const prediction = suggestion?.placePrediction;
                                const label = prediction?.text?.toString?.() || "";

                                return (
                                    <li key={`${label}-${index}`}>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleSelect(prediction)}
                                            className={cn(
                                                "h-auto w-full justify-start rounded-none px-3 py-2 text-left text-xs font-normal",
                                                index !== 0 && "border-t border-border"
                                            )}
                                        >
                                            {label}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
