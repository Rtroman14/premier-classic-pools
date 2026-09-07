import ContactPage from "@/app/(marketing)/contact/page";
import { fetchPlaceData } from "@/lib/actions/fetch-place-data";
import { isValidPlaceId } from "@/lib/validators";
import { notFound } from "next/navigation";

export default async function DemoContactPage({ params }) {
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
        <ContactPage
            companyName={config.companyName}
            phoneNumber={config.phoneNumber}
            address={config.address}
            email={config.email}
        />
    );
}
