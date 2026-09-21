import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { FeaturedReview } from "@/components/featured-review";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Card } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import {
    BoltIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
    title: "Standby Generators | Premier Classic Pools & Outdoors",
    description:
        "Kohler standby generator sales and installation. Keep your pool, home, and outdoor living space powered through any storm.",
};

const features = [
    {
        icon: BoltIcon,
        title: "Automatic Backup",
        description:
            "Generators detect an outage and switch on within seconds — no manual start required.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Kohler Certified",
        description:
            "We're a certified Kohler dealer and installer — factory-trained on every residential model.",
    },
    {
        icon: HomeIcon,
        title: "Whole-Home Coverage",
        description:
            "Sized to power your home, pool equipment, HVAC, and outdoor living systems simultaneously.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Full Installation",
        description:
            "Concrete pad, gas line, transfer switch, and electrical — permitted and inspected.",
    },
];

const benefits = [
    "Kohler-certified dealer and installer",
    "Automatic transfer switch — hands-free operation",
    "Sized for your home + pool + outdoor systems",
    "Natural gas or propane options",
    "Full permitting and inspection",
    "Manufacturer warranty + service plans",
];

export default function StandbyGeneratorsPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Standby Generators"
                subheading="Kohler standby generator sales and installation, so a summer storm never means a warm pool and a dark house."
                imageSrc="/professional-roofing-crew-working-on-residential-h.jpg"
                imageAlt="Standby generator installation"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote for a standby generator" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Power that doesn't quit
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Texas storms knock out power — sometimes for days. A Kohler
                                    standby generator keeps your pool equipment running, your HVAC
                                    on, and your outdoor kitchen operational while the grid is down.
                                </p>
                                <p>
                                    We size the generator for your home and pool, handle the full
                                    installation (concrete pad, gas line, transfer switch,
                                    electrical), and pull all required permits. Once it's in, it
                                    runs a weekly self-test and switches on automatically during an
                                    outage.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/gallary/medical-building-with-modern-flat-roof-and-greener.jpg"
                                    alt="Kohler standby generator"
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
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How it works</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Reliable backup power, fully installed and permitted.
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
                                    src="/professional-roofer-installing-shingles-on-house.jpg"
                                    alt="Generator installed"
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
                        title="Ready to keep the power on?"
                        subheading="Get a free consultation and quote for a Kohler standby generator sized for your home and pool."
                    />
                </Section>
            </div>
        </div>
    );
}
