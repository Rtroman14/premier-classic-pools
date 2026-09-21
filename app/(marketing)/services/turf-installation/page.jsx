import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import {
    SunIcon,
    ShieldCheckIcon,
    SparklesIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
    title: "Turf Installation | Premier Classic Pools & Outdoors",
    description:
        "Premium artificial turf and putting greens — low-maintenance, kid- and pet-friendly, built to stay green year-round poolside.",
};

const features = [
    {
        icon: SunIcon,
        title: "Poolside Turf",
        description:
            "Synthetic grass that drains fast, stays cool underfoot, and never turns brown around the pool deck.",
    },
    {
        icon: HomeIcon,
        title: "Putting Greens",
        description:
            "Custom putting greens with realistic roll and undulation for your backyard.",
    },
    {
        icon: SparklesIcon,
        title: "Pet & Kid Friendly",
        description:
            "Non-toxic, antimicrobial backing that's safe for pets and children to play on every day.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Low Maintenance",
        description:
            "No mowing, watering, or fertilizing — looks perfect year-round with minimal upkeep.",
    },
];

const benefits = [
    "Premium turf products with realistic look and feel",
    "Proper drainage and base preparation",
    "Kid- and pet-friendly materials",
    "No watering, mowing, or chemicals",
    "Seamless integration with pool and outdoor living areas",
    "Backed by manufacturer warranty",
];

export default function TurfInstallationPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Turf Installation"
                subheading="Premium artificial turf and putting greens — low-maintenance, kid- and pet-friendly, and built to stay green year-round poolside."
                imageSrc="/aerial-roof.jpg"
                imageAlt="Artificial turf installation"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote for turf installation" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Green all year, zero upkeep
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Texas heat is hard on natural grass — especially around a pool.
                                    Our artificial turf stays lush, drains properly, and keeps your
                                    yard looking finished without the endless mowing and watering.
                                </p>
                                <p>
                                    We install turf as part of a full pool and outdoor living build,
                                    or as a standalone upgrade for existing backyards. Either way,
                                    we handle grading, drainage, base prep, and final seaming.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/gallary/modern-coastal-home-with-hurricane-resistant-roof.jpg"
                                    alt="Turf installation"
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
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What we offer</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Turf solutions designed for Texas backyards and poolside environments.
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
                                    src="/gallary/mountain-cabin-with-steep-dark-shingle-roof.jpg"
                                    alt="Turf project complete"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why choose us</h2>
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
                        title="Ready for a maintenance-free yard?"
                        subheading="Get a free consultation for artificial turf, putting greens, or a full backyard transformation."
                    />
                </Section>
            </div>
        </div>
    );
}
