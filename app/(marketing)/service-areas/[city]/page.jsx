import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { Card } from "@/components/ui/card";
import { GetQuoteButton } from "@/components/get-quote-button";
import { serviceAreas, getServiceAreaBySlug } from "@/lib/service-areas";
import { defaultConfig } from "@/lib/default-config";
import { notFound } from "next/navigation";
import { CircleCheckBig, Droplets } from "lucide-react";
import {
    HomeIcon,
    WrenchScrewdriverIcon,
    BoltIcon,
} from "@heroicons/react/24/outline";

export const generateStaticParams = () => {
    return serviceAreas.map((area) => ({
        city: area.slug,
    }));
};

export const generateMetadata = async ({ params }) => {
    const { city } = await params;
    const area = getServiceAreaBySlug(city);
    if (!area) return {};
    return {
        title: `Pool Builder in ${area.name}, TX | Premier Classic Pools & Outdoors`,
        description: `Custom pool design & build, outdoor living spaces, and standby generators in ${area.name}, TX. Licensed & insured Texas builder. Free consultations.`,
    };
};

export default async function CityServiceAreaPage({ params }) {
    const { city } = await params;
    const area = getServiceAreaBySlug(city);
    if (!area) notFound();

    const cityName = area.name;

    const services = [
        {
            icon: Droplets,
            title: "Custom Pools",
            description: `Gunite pool design and construction for ${cityName} homeowners — geometric, freeform, spas, and sun shelves.`,
        },
        {
            icon: HomeIcon,
            title: "Outdoor Living",
            description: `Kitchens, pergolas, fire features, and decking built alongside your ${cityName} pool.`,
        },
        {
            icon: WrenchScrewdriverIcon,
            title: "Renovation & Equipment",
            description: `Pool resurfacing, new plaster, and equipment upgrades for existing ${cityName} pools.`,
        },
        {
            icon: BoltIcon,
            title: "Standby Generators",
            description: `Kohler standby generator installation for ${cityName} homes — keep your pool and home powered through any storm.`,
        },
    ];

    const localExpertise = [
        {
            icon: CircleCheckBig,
            title: "Local Climate Expertise",
            description: `We understand ${cityName}'s weather — our pools, decking, and outdoor structures are built for Texas heat, humidity, and storms.`,
        },
        {
            icon: CircleCheckBig,
            title: "Permitting & Code Compliance",
            description: `Full compliance with ${cityName} building codes and HOA requirements. We handle all permits and inspections.`,
        },
        {
            icon: CircleCheckBig,
            title: "On-Site Every Build",
            description: `Family-owned and hands-on. We're on your ${cityName} job site throughout construction — not managing from a desk.`,
        },
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                title={`Pool Builder in ${cityName}, TX`}
                subheading={`Premier Classic Pools & Outdoors designs and builds custom pools, outdoor living spaces, and standby power systems in ${cityName} and surrounding areas.`}
                imageSrc="/professional-roofing-crew-working-on-residential-h.jpg"
                imageAlt={`Pool construction in ${cityName}, TX`}
                primaryButton={{ label: "Get a Quote", message: `I'd like a quote for a pool in ${cityName}` }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Services in {cityName}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Three trades, one crew — custom pools, outdoor living, and backup power for {cityName} homeowners.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                                        <div className="space-y-4 text-center">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            </div>

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
                                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
                                    alt={`Pool builder in ${cityName}, TX`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
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
                        title={`Ready to Start Your ${cityName} Pool Project?`}
                        subheading={`Get a free, no-obligation consultation from ${cityName}'s trusted pool builder. We're here to help design and build your dream backyard.`}
                        phoneNumber={defaultConfig.phoneNumber}
                    />
                </Section>
            </div>
        </div>
    );
}
