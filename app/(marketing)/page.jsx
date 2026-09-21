import { WhyChooseUs } from "@/components/why-choose-us";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { FeaturedReview } from "@/components/featured-review";
import { CTA } from "@/components/cta";
import { LiquidHeroBackground } from "@/components/liquid-hero-background";
import { defaultConfig } from "@/lib/default-config";
import Image from "next/image";

export default function Home({ config = defaultConfig }) {
    return (
        <div className="flex flex-col">
            <div className="relative min-h-[95vh] sm:min-h-[90vh] lg:min-h-[85vh] w-full flex items-center justify-center overflow-hidden py-24 sm:py-28 lg:py-32">
                <Image
                    src="/gallary/pool-background-4.jpg"
                    alt="Custom geometric pool with outdoor kitchen and turf"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <LiquidHeroBackground />
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
                    <Process />
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <FeaturedReview />
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
