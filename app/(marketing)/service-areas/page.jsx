import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { Card } from "@/components/ui/card";
import { MapPinIcon, ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { serviceAreas } from "@/lib/service-areas";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Service Areas | Premier Classic Pools & Outdoors",
    description:
        "Premier Classic Pools & Outdoors serves Houston, Katy, Sugar Land, Cypress, Spring, Richmond, Montgomery, Rosharon, Hockley, and Waller with custom pool building.",
};

const whyLocal = [
    {
        icon: MapPinIcon,
        title: "Local Expertise",
        description:
            "Deep understanding of local building codes, HOA requirements, and soil conditions unique to the Houston area.",
    },
    {
        icon: ClockIcon,
        title: "Fast Response",
        description:
            "Quick consultation scheduling and flexible timelines to serve your community efficiently.",
    },
    {
        icon: PhoneIcon,
        title: "Community Focused",
        description:
            "We're your neighbors, committed to building lasting relationships and quality backyards.",
    },
    {
        icon: CircleCheckBig,
        title: "Proven Track Record",
        description:
            "200+ pools built across the Houston area. Licensed & insured Texas builder.",
    },
];

export default function ServiceAreasPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Serving the Houston Area"
                subheading="Premier Classic Pools & Outdoors proudly builds custom pools, outdoor living spaces, and standby generators across the greater Houston area."
                imageSrc="/aerial-roof.jpg"
                imageAlt="Houston area service map"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Cities We Serve
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Custom pool construction and outdoor living across the greater Houston area.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {serviceAreas.map((area, index) => (
                                <Link key={index} href={`/service-areas/${area.slug}`}>
                                    <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group text-center">
                                        <div className="space-y-2">
                                            <MapPinIcon className="w-6 h-6 text-primary mx-auto" />
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                                {area.name}, TX
                                            </h3>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Why Choose a Local Pool Builder?
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Working with a local builder means personalized service, faster
                                timelines, and a team invested in your community.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whyLocal.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                                        <div className="space-y-4 text-center">
                                            <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mx-auto">
                                                <Icon className="size-7" />
                                            </div>
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <FeaturedReview />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to Get Started?"
                        subheading="Contact us today for a free, no-obligation consultation. Our local experts are ready to help design your dream backyard."
                        phoneNumber={defaultConfig.phoneNumber}
                    />
                </Section>
            </div>
        </div>
    );
}
