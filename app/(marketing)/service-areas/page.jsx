import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Reviews } from "@/components/reviews";
import { Card } from "@/components/ui/card";
import { MapPinIcon, ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Service Areas | Premier Roofing - Serving Your Community",
    description:
        "Premier Roofing proudly serves your community and surrounding areas with expert roofing services. Find your local roofing experts today.",
};

const whyLocal = [
    {
        icon: MapPinIcon,
        title: "Local Expertise",
        description:
            "Deep understanding of local building codes, weather patterns, and architectural styles unique to Central Texas.",
    },
    {
        icon: ClockIcon,
        title: "Fast Response",
        description:
            "Quick emergency response times and flexible scheduling to serve your local community efficiently.",
    },
    {
        icon: PhoneIcon,
        title: "Community Focused",
        description:
            "We're your neighbors, committed to building lasting relationships and supporting our local communities.",
    },
    {
        icon: CircleCheckBig,
        title: "Proven Track Record",
        description:
            "Thousands of satisfied customers across your area trust us for their roofing needs.",
    },
];

export default function ServiceAreasPage({
    cityName = "Your Area",
    companyName = defaultConfig.companyName,
    phoneNumber = defaultConfig.phoneNumber,
    reviews = [],
} = {}) {
    const serviceAreas = [
        {
            name: cityName,
            href: "/service-areas/city",
            description: `Expert roofing services throughout ${cityName} and surrounding areas with comprehensive residential and commercial solutions.`,
            neighborhoods: ["Downtown", "North Side", "South Side", "East Side", "West Side"],
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title="Serving Your Community"
                subheading={`${companyName} proudly serves ${cityName} and surrounding communities with expert roofing solutions. Local expertise meets industry-leading quality.`}
                imageSrc="/aerial-roof.jpg"
                imageAlt="Aerial view of roofing service area"
                primaryButton={{
                    label: "Get a Quote",
                    message: "I'd like to get a quote",
                }}
            />

            {/* Service Areas Grid */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Service Areas
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We're proud to serve homeowners and businesses throughout {cityName}{" "}
                                with exceptional roofing services.
                            </p>
                        </div>

                        <div
                            className={cn(
                                "grid gap-8 justify-center",
                                serviceAreas.length === 1 && "max-w-2xl mx-auto",
                                serviceAreas.length === 2 && "md:grid-cols-2 max-w-5xl mx-auto",
                                serviceAreas.length >= 3 && "md:grid-cols-2 lg:grid-cols-3 w-full"
                            )}
                        >
                            {serviceAreas.map((area, index) => (
                                <Link key={index} href={area.href}>
                                    <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                                        <div className="space-y-4">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                    {area.name}
                                                </h3>
                                                <MapPinIcon className="w-6 h-6 text-primary shrink-0" />
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed">
                                                {area.description}
                                            </p>

                                            <div className="pt-4 border-t">
                                                <p className="text-sm font-semibold mb-2">
                                                    Neighborhoods:
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {area.neighborhoods.map((neighborhood, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-xs bg-secondary px-2 py-1 rounded-full"
                                                        >
                                                            {neighborhood}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Why Choose Local Section */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Why Choose a Local Roofer?
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Working with a local roofing company means personalized service,
                                faster response times, and a trusted partner invested in your
                                community.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whyLocal.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="p-8 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="space-y-4 text-center">
                                            <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mx-auto">
                                                <Icon className="size-7" />
                                            </div>

                                            <h3 className="text-xl font-bold">{item.title}</h3>

                                            <p className="text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
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
                        title="Ready to Get Started?"
                        subheading="Contact us today for a free, no-obligation estimate. Our local experts are ready to help with your roofing project."
                        phoneNumber={phoneNumber}
                    />
                </Section>
            </div>
        </div>
    );
}
