import { WhyChooseUs } from "@/components/why-choose-us";
import { Services } from "@/components/services";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import Image from "next/image";
import { CTA } from "@/components/cta";
import { defaultConfig } from "@/lib/default-config";

export default function Home({ config = defaultConfig }) {
    return (
        <div className="flex flex-col">
            <div className="relative min-h-[95vh] sm:min-h-[90vh] lg:min-h-[85vh] w-full flex items-center justify-center overflow-hidden py-24 sm:py-28 lg:py-32">
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
                    <Hero title={config.heroTitle} subheading={config.heroDescription} />
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
                    <Reviews reviews={config.reviews} />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <CTA
                    title={config.ctaTitle}
                    subheading={config.ctaDescription}
                    phoneNumber={config.phoneNumber}
                />
            </div>
        </div>
    );
}
