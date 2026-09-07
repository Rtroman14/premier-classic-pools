import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Reviews } from "@/components/reviews";
import { Card } from "@/components/ui/card";
import { GetQuoteButton } from "@/components/get-quote-button";
import {
    HomeIcon,
    BuildingOfficeIcon,
    WrenchScrewdriverIcon,
    BoltIcon,
} from "@heroicons/react/24/outline";
import { CircleCheckBig } from "lucide-react";

export const metadata = {
    title: "City Roofing Services | Premier Roofing - Expert Local Roofers",
    description:
        "Premier Roofing provides expert roofing services throughout City. Residential & commercial roofing, repairs, installations. Licensed, insured, and locally trusted.",
};

const neighborhoods = [
    "Downtown",
    "North Side",
    "South Side",
    "East Side",
    "West Side",
    "Historic District",
    "Lakeside",
    "Hillside",
    "Park View",
    "Riverside",
    "Meadowbrook",
    "Oak Hills",
    "Sunset",
    "Garden District",
    "University Area",
    "Industrial District",
];

export default function CityServiceAreaPage({
    cityName = "Your Area",
    phoneNumber,
    reviews = [],
} = {}) {
    const services = [
        {
            icon: HomeIcon,
            title: "Residential Roofing",
            description: `Complete roofing solutions for ${cityName} homes, from traditional shingles to modern metal roofing systems.`,
        },
        {
            icon: BuildingOfficeIcon,
            title: "Commercial Roofing",
            description: `Professional commercial roofing for ${cityName} businesses, including flat roofs and industrial systems.`,
        },
        {
            icon: WrenchScrewdriverIcon,
            title: "Roof Repairs",
            description: `Fast, reliable roof repair services to address leaks, storm damage, and wear throughout ${cityName}.`,
        },
        {
            icon: BoltIcon,
            title: "Emergency Services",
            description: `24/7 emergency roofing response for ${cityName} residents facing urgent roofing issues.`,
        },
    ];

    const localExpertise = [
        {
            icon: CircleCheckBig,
            title: "Local Climate Expertise",
            description: `We understand ${cityName}'s unique weather challenges and climate conditions. Our roofing solutions are designed to withstand local weather patterns.`,
        },
        {
            icon: CircleCheckBig,
            title: "Local Building Codes",
            description:
                "Full compliance with local building codes and regulations. We handle all permits and inspections for your peace of mind.",
        },
        {
            icon: CircleCheckBig,
            title: "Fast Local Response",
            description: `Serving ${cityName} and surrounding areas, we provide quick response times for estimates, repairs, and emergency services.`,
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title={`Expert Roofing Services in ${cityName}`}
                subheading={`Serving ${cityName} and surrounding areas with premium residential and commercial roofing solutions. Local expertise meets industry-leading quality.`}
                imageSrc="/professional-roofing-crew-working-on-residential-h.jpg"
                imageAlt={`Professional roofing crew working in ${cityName}`}
                primaryButton={{
                    label: "Get a Quote",
                    message: "I'd like to get a quote",
                }}
            />

            {/* Services Overview */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Services in {cityName}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Comprehensive roofing solutions tailored to {cityName}'s unique
                                climate and architectural styles.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="p-8 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="space-y-4 text-center">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                                                <Icon className="w-8 h-8" />
                                            </div>

                                            <h3 className="text-xl font-bold">{service.title}</h3>

                                            <p className="text-muted-foreground leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Local Expertise Section */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Why {cityName} Trusts Us
                            </h2>
                            <div className="space-y-6">
                                {localExpertise.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="shrink-0">
                                                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                                                    <Icon className="size-5" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-4/5 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/professional-roofer-installing-shingles-on-house.jpg"
                                    alt={`Professional roofer working in ${cityName}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            {/* Neighborhoods Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Neighborhoods We Serve in {cityName}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We provide expert roofing services throughout all {cityName}{" "}
                                neighborhoods and surrounding areas.
                            </p>
                        </div>

                        <Card className="p-8">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {neighborhoods.map((neighborhood, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-muted-foreground"
                                    >
                                        <CircleCheckBig className="size-4 text-primary shrink-0" />
                                        <span>{neighborhood}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </Section>
            </div>

            {/* Reviews Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Reviews reviews={reviews} />
                </Section>
            </div>

            {/* CTA Section */}
            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title={`Ready to Start Your ${cityName} Roofing Project?`}
                        subheading={`Get a free, no-obligation estimate from ${cityName}'s trusted roofing experts. We're here to help protect your home or business.`}
                        phoneNumber={phoneNumber}
                    />
                </Section>
            </div>
        </div>
    );
}
