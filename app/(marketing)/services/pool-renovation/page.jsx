import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import {
    WrenchScrewdriverIcon,
    SparklesIcon,
    ShieldCheckIcon,
    PaintBrushIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
    title: "Pool Renovation & New Plaster | Premier Classic Pools & Outdoors",
    description:
        "Pool resurfacing and new plaster for pools that need a refresh. Restore your pool's beauty without a full rebuild.",
};

const features = [
    {
        icon: PaintBrushIcon,
        title: "New Plaster & Finishes",
        description:
            "Pebble, quartz, and traditional plaster options to restore your pool's interior surface.",
    },
    {
        icon: SparklesIcon,
        title: "Tile & Coping",
        description:
            "Replace worn waterline tile and coping to give your pool a modern, refreshed look.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Deck Resurfacing",
        description:
            "Overlay or replace aging pool decks with new pavers, travertine, or cool-deck coatings.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Structural Repairs",
        description:
            "Fix cracks, leaks, and settling before resurfacing to ensure a long-lasting result.",
    },
];

const benefits = [
    "Extend your pool's life without a full rebuild",
    "Multiple finish options and color palettes",
    "Tile, coping, and deck work available",
    "Structural assessment before resurfacing",
    "Typical renovation: 2–4 weeks",
    "Fixed-price proposals",
];

export default function PoolRenovationPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Pool Renovation & New Plaster"
                subheading="Resurfacing and new plaster for pools that need a refresh rather than a full rebuild."
                imageSrc="/aerial-roof.jpg"
                imageAlt="Pool renovation"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote for pool renovation" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Give your pool a second life
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Pool surfaces wear down over time — rough plaster, stained tile,
                                    cracked coping. A renovation restores the look and feel of your
                                    pool without the cost and timeline of a full rebuild.
                                </p>
                                <p>
                                    We start with a structural assessment, repair anything that
                                    needs fixing underneath, then resurface with premium plaster,
                                    quartz, or pebble finishes. Tile, coping, and deck work are
                                    bundled into a single project.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/gallary/victorian-house-with-restored-wood-shake-roof.jpg"
                                    alt="Pool renovation project"
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
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Renovation services</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Everything you need to bring your pool back to life.
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
                                    src="/gallary/shopping-plaza-with-new-commercial-roof.jpg"
                                    alt="Renovated pool"
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
                        title="Ready to refresh your pool?"
                        subheading="Get a free assessment and fixed-price proposal for your pool renovation."
                    />
                </Section>
            </div>
        </div>
    );
}
