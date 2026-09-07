"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function GoogleMap({ address, businessName, className = "" }) {
    const mapRef = useRef(null);
    const [mapError, setMapError] = useState(false);

    // Use business name if provided, otherwise fall back to address
    const searchQuery = businessName || address;
    const encodedQuery = encodeURIComponent(searchQuery);

    // Use iframe with search query (doesn't require API key)
    const mapSrc = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className={cn("w-full h-full", className)}>
            <iframe
                ref={mapRef}
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing location of ${businessName || address}`}
                onError={() => setMapError(true)}
            />
            {mapError && (
                <div className="flex items-center justify-center h-full bg-muted">
                    <p className="text-muted-foreground">Unable to load map</p>
                </div>
            )}
        </div>
    );
}
