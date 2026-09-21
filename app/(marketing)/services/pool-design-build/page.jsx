import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { GetQuoteButton } from "@/components/get-quote-button";
import { CircleCheckBig, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
    HomeIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
    title: "Custom Pool Design & Build | Premier Classic Pools & Outdoors",
    description:
        "Custom gunite pool design and construction across the Houston area. From geometric lap pools to freeform lagoons, sun shelves, and spas — engineered to last.",
};

const features = [
    {
        icon: Droplets,
        title: "Gunite Construction",
        description:
            "Structural steel and pneumatically applied concrete — the strongest pool shell on the market.",
    },
    {
        icon: HomeIcon,
        title: "Custom Shapes",
        description:
            "Geometric, freeform, or lagoon — every pool is designed to fit your yard and your family.",
    },
    {
        icon: SparklesIcon,
        title: "Premium Finishes",
        description:
            "Pebble, quartz, and plaster finishes in a range of colors to match your outdoor aesthetic.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Full Warranty",
        description:
            "Structural and surface warranties so your investment is protected from day one.",
    },
];

const benefits = [
    "3D renderings before construction starts",
    "Fixed-price proposals — no change-order surprises",
    "Sun shelves, tanning ledges, and spa add-ons",
    "Water and fire features available",
    "LED lighting and automation packages",
    "Typical build time: 10–14 weeks",
];

export default function PoolDesignBuildPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Custom Pool Design & Build"
                subheading="Gunite pools shaped around how your family actually lives outside — from geometric lap pools to freeform lagoons, sun shelves, and spas."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Custom pool construction"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote for a custom pool" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Your pool, built from the ground up
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Every pool we build starts with an on-site consultation where we
                                    walk your yard, understand how your family uses the space, and
                                    talk through what matters most — depth, shape, features, budget.
                                </p>
                                <p>
                                    From there, we produce 3D renderings and a fixed-price proposal
                                    so you know exactly what you're getting before a single shovel
                                    breaks ground. Our crew handles excavation, steel, plumbing,
                                    gunite, tile, coping, decking, and equipment — start to finish.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/professional-roofing-crew-working-on-residential-h.jpg"
                                    alt="Pool construction in progress"
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
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                What's included
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every custom pool build comes with the features and craftsmanship
                                your backyard deserves.
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
                                    src="/gallary/luxury-lakeside-home-with-metal-roof.jpg"
                                    alt="Completed pool project"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Why homeowners choose us
                            </h2>
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
                <Section className="max-w-7xl">
                    <FeaturedReview />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to design your dream pool?"
                        subheading="Get a free, no-obligation consultation. We'll walk your yard, talk through your vision, and deliver a fixed-price proposal."
                    />
                </Section>
            </div>
        </div>
    );
}
