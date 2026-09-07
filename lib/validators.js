import { z } from "zod";

/**
 * Google Place ID validation schema
 * Place IDs typically start with "ChIJ" and contain alphanumeric characters, hyphens, and underscores
 * Format: ChIJ followed by base64-like characters
 */
export const placeIdSchema = z
    .string()
    .regex(
        /^ChIJ[A-Za-z0-9_-]+$/,
        "Invalid Google Place ID format. Place IDs must start with 'ChIJ' followed by alphanumeric characters."
    )
    .min(20, "Place ID is too short")
    .max(100, "Place ID is too long");

/**
 * Validates if a string is a valid Google Place ID
 * @param {string} placeId - The Place ID to validate
 * @returns {boolean} True if valid, false otherwise
 */
export const isValidPlaceId = (placeId) => {
    try {
        placeIdSchema.parse(placeId);
        return true;
    } catch {
        return false;
    }
};

/**
 * Safely validates and returns a Place ID, or null if invalid
 * @param {string} placeId - The Place ID to validate
 * @returns {string|null} The Place ID if valid, null otherwise
 */
export const validatePlaceId = (placeId) => {
    try {
        return placeIdSchema.parse(placeId);
    } catch (error) {
        console.error(`Invalid Place ID: ${placeId}`, error.errors);
        return null;
    }
};
