import CityServiceAreaPage from "@/app/(marketing)/service-areas/city/page";
import { fetchPlaceData } from "@/lib/actions/fetch-place-data";
import { isValidPlaceId } from "@/lib/validators";
import { notFound } from "next/navigation";

export default async function DemoCityServiceAreaPage({ params }) {
    const { placeId } = await params;

    // Validate Place ID format first
    if (!isValidPlaceId(placeId)) {
        notFound();
    }

    // Fetch place data
    const config = await fetchPlaceData(placeId);

    // If place not found, show 404
    if (!config) {
        notFound();
    }

    return (
        <CityServiceAreaPage
            cityName={config.city || "Your Area"}
            phoneNumber={config.phoneNumber}
            reviews={config.reviews}
        />
    );
}
