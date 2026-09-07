require("dotenv").config();

const TEST_PLACE_ID = "ChIJkxOehaqFf4gR8gHBWFF8mqU";

const fetchGooglePlace = async (placeId) => {
    try {
        console.log(`\n=== Fetching Google Place Data ===`);
        console.log(`Place ID: ${placeId}\n`);

        const url = `https://places.googleapis.com/v1/places/${placeId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
                "X-Goog-FieldMask": "*",
            },
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Place API error ${response.status} ${response.statusText}: ${err}`);
        }

        const data = await response.json();

        console.log("=== Full Place Data ===");
        console.log(JSON.stringify(data, null, 2));

        return data;
    } catch (error) {
        console.error(`\n=== ERROR ===`);
        console.error(`Error fetching place ${placeId}:`, error.message);
        return null;
    }
};

(async () => {
    await fetchGooglePlace(TEST_PLACE_ID);
})();
