import { WhyChooseUs } from "@/components/why-choose-us";
import { Services } from "@/components/services";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import Image from "next/image";
import { CTA } from "@/components/cta";
import { fetchPlaceData } from "@/lib/actions/fetch-place-data";
import { defaultConfig } from "@/lib/default-config";
import { notFound } from "next/navigation";
import { isValidPlaceId } from "@/lib/validators";

export default async function DemoPage({ params }) {
    const { placeId } = await params;

    // Validate Place ID format first
    if (!isValidPlaceId(placeId)) {
        console.error(`Invalid Place ID format: ${placeId}`);
        notFound();
    }

    // Fetch place data
    const config = await fetchPlaceData(placeId);

    // If place not found after validation, show 404
    if (!config) {
        console.error(`Place ${placeId} not found`);
        notFound();
    }

    const finalConfig = config;

    return (
        <div className="flex flex-col">
            <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-32 pb-20 lg:py-0">
                {/* <Image
                    src="/aerial-roof.jpg"
                    alt="Aerial view of a roof"
                    fill
                    className="object-cover"
                    priority
                /> */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/aerial-roof-3.mp4" type="video/mp4" />
                    {/* <source src="/videos/aerial-roof-6.mp4" type="video/mp4" /> */}
                </video>
                <div className="absolute inset-0 bg-black/50" />
                <Section className="relative z-10 w-full max-w-7xl">
                    <Hero title={finalConfig.heroTitle} subheading={finalConfig.heroDescription} />
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Services />
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <WhyChooseUs />
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Reviews reviews={finalConfig.reviews} />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <CTA
                    title={finalConfig.ctaTitle}
                    subheading={finalConfig.ctaDescription}
                    phoneNumber={finalConfig.phoneNumber}
                />
            </div>
        </div>
    );
}
