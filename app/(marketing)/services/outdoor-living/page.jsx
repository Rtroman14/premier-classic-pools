import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import {
    HomeIcon,
    FireIcon,
    SunIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
    title: "Outdoor Living Spaces | Premier Classic Pools & Outdoors",
    description:
        "Outdoor kitchens, pergolas, fire features, and decking that turn the area around your pool into the room your family actually spends time in.",
};

const features = [
    {
        icon: HomeIcon,
        title: "Outdoor Kitchens",
        description:
            "Built-in grills, countertops, sinks, and storage designed for Texas-style entertaining.",
    },
    {
        icon: SunIcon,
        title: "Pergolas & Shade Structures",
        description:
            "Custom pergolas, pavilions, and shade sails that make poolside comfortable year-round.",
    },
    {
        icon: FireIcon,
        title: "Fire Features",
        description:
            "Fire pits, fireplaces, and fire bowls that extend your outdoor season into cooler months.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Decking & Hardscape",
        description:
            "Travertine, pavers, and stamped concrete that complement your pool and withstand Houston's climate.",
    },
];

const benefits = [
    "Designed alongside your pool for seamless integration",
    "Premium stone, brick, and stainless-steel materials",
    "Electrical and plumbing handled in-house",
    "Custom lighting packages available",
    "Built to code with full permitting",
    "One crew, one timeline, one point of contact",
];

export default function OutdoorLivingPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Outdoor Living Spaces"
                subheading="Kitchens, pergolas, fire features, and decking that turn the area around the pool into the room your family actually spends time in."
                imageSrc="/professional-roofing-crew-working-on-residential-h.jpg"
                imageAlt="Outdoor living space"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote for an outdoor living space" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Your backyard, fully finished
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    A great pool deserves a great space around it. We design and
                                    build outdoor kitchens, shade structures, fire features, and
                                    hardscaping as part of the same project — so everything matches,
                                    connects, and gets done on one timeline.
                                </p>
                                <p>
                                    Whether you're adding an outdoor kitchen to an existing pool or
                                    building everything from scratch, our team handles design,
                                    permitting, electrical, plumbing, and construction.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/gallary/modern-house-with-new-dark-shingle-roof.jpg"
                                    alt="Outdoor living space"
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
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What we build</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every outdoor living project is tailored to your space and lifestyle.
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
                                    alt="Completed outdoor space"
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
                        title="Ready to complete your outdoor space?"
                        subheading="Get a free consultation for your outdoor kitchen, pergola, fire feature, or full backyard build."
                    />
                </Section>
            </div>
        </div>
    );
}
