"use server";

import { transformPlaceData } from "@/lib/site-config";
import { validatePlaceId } from "@/lib/validators";

/**
 * Fetches Google Places data and transforms it into site configuration
 * @param {string} placeId - Google Place ID
 * @returns {Promise<Object|null>} Transformed site configuration or null if error
 */
export const fetchPlaceData = async (placeId) => {
    try {
        if (!placeId) {
            console.error("No placeId provided");
            return null;
        }

        // Validate Place ID format before making API call
        const validatedPlaceId = validatePlaceId(placeId);
        if (!validatedPlaceId) {
            console.error(`Invalid Place ID format: ${placeId}`);
            return null;
        }

        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            console.error("GOOGLE_MAPS_API_KEY not found in environment variables");
            return null;
        }

        console.log(`Fetching Google Place data for: ${validatedPlaceId}`);

        const url = `https://places.googleapis.com/v1/places/${validatedPlaceId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Goog-Api-Key": apiKey,
                "X-Goog-FieldMask": "*",
            },
            // Cache for 1 hour
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Place API error ${response.status} ${response.statusText}:`, errorText);
            return null;
        }

        const data = await response.json();
        console.log(`Successfully fetched place data for: ${data.displayName?.text || validatedPlaceId}`);

        // Transform the data into our site configuration format
        const config = transformPlaceData(data);

        return config;
    } catch (error) {
        console.error(`Error fetching place:`, error.message);
        return null;
    }
};

