import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import {
    CogIcon,
    BoltIcon,
    WrenchScrewdriverIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
    title: "Pool Equipment Upgrades | Premier Classic Pools & Outdoors",
    description:
        "Pump, filter, heater, and automation upgrades to make your existing pool more efficient and easier to run.",
};

const features = [
    {
        icon: CogIcon,
        title: "Variable-Speed Pumps",
        description:
            "Energy-efficient pumps that cut electricity costs while keeping your pool water pristine.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Filters & Heaters",
        description:
            "Cartridge, DE, and sand filter replacements plus gas and heat-pump heater installs.",
    },
    {
        icon: DevicePhoneMobileIcon,
        title: "Pool Automation",
        description:
            "Control your pump, lights, heater, and water features from your phone with smart automation.",
    },
    {
        icon: BoltIcon,
        title: "Salt Systems & Sanitizers",
        description:
            "Salt chlorine generators, UV, and ozone systems for easier, gentler water chemistry.",
    },
];

const benefits = [
    "Lower energy bills with modern equipment",
    "Control your pool from your phone",
    "Extend the life of your existing pool",
    "All major equipment brands serviced",
    "Licensed electrical and plumbing work",
    "Warranty on all installations",
];

export default function EquipmentUpgradesPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Equipment Upgrades"
                subheading="Pump, filter, heater, and automation upgrades to make an existing pool more efficient and easier to run."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Pool equipment"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote for pool equipment upgrades" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Make your pool work smarter
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Older pool equipment wastes energy and makes maintenance harder
                                    than it needs to be. Upgrading your pump, filter, heater, or
                                    automation system can cut operating costs and simplify your
                                    daily routine.
                                </p>
                                <p>
                                    We assess your current setup, recommend the right equipment for
                                    your pool size and usage, and handle the full installation —
                                    electrical, plumbing, and programming included.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/gallary/large-industrial-warehouse-with-metal-roof.jpg"
                                    alt="Pool equipment installation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Upgrade options</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Modern equipment that saves energy and simplifies pool ownership.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                                        <div className="space-y-4">
                                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-xl font-bold">{feature.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/gallary/modern-commercial-building-flat-roof-aerial.jpg"
                                    alt="Equipment upgrade"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why upgrade with us</h2>
                            <div className="grid gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CircleCheckBig className="size-5 text-primary shrink-0 mt-1" />
                                        <span className="text-lg font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl"><FeaturedReview /></Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to upgrade your pool equipment?"
                        subheading="Get a free assessment and quote for pumps, filters, heaters, automation, or a full equipment overhaul."
                    />
                </Section>
            </div>
        </div>
    );
}
