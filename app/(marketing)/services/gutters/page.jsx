import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Reviews } from "@/components/reviews";
import { GetQuoteButton } from "@/components/get-quote-button";
import {
    ArrowPathIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    ClockIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { CircleCheckBig } from "lucide-react";

export const metadata = {
    title: "Gutter Services | Premier Roofing",
    description:
        "Professional gutter installation, repair, and maintenance services. Protect your home's foundation with properly functioning gutters and downspouts.",
};

const features = [
    {
        icon: ArrowPathIcon,
        title: "Gutter Installation",
        description:
            "New seamless gutter systems custom-fitted to your home for optimal water management.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Gutter Repairs",
        description: "Expert repairs for leaks, sagging gutters, and damaged downspouts.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Gutter Guards",
        description:
            "Professional gutter guard installation to prevent clogs and reduce maintenance.",
    },
    {
        icon: ClockIcon,
        title: "Gutter Cleaning",
        description: "Thorough cleaning services to keep your gutters flowing freely year-round.",
    },
];

const benefits = [
    "Seamless aluminum gutter systems",
    "Multiple color options available",
    "Gutter guard protection systems",
    "Free estimates & consultations",
    "Financing options available",
    "Satisfaction guaranteed",
];

export default function GuttersPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title="Professional Gutter Services"
                subheading="Protect your home's foundation with properly installed and maintained gutters. From new installations to repairs and cleaning, we keep water flowing away from your property."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Professional gutter installation"
                primaryButton={{
                    label: "Get a Quote",
                    message: "I'd like to get a quote",
                }}
            />

            {/* Service Overview Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Gutters that protect your investment
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Your gutters play a crucial role in protecting your home from
                                    water damage. Properly functioning gutters channel rainwater
                                    away from your foundation, preventing costly damage to your
                                    home's structure, landscaping, and basement.
                                </p>
                                <p>
                                    At Premier Roofing, we specialize in seamless gutter
                                    installation, repairs, and maintenance. Our custom-fitted gutter
                                    systems are designed to handle your area's rainfall while
                                    complementing your home's architecture. We use premium materials
                                    that resist rust and corrosion for long-lasting performance.
                                </p>
                                <p>
                                    Whether you need new gutters, repairs to existing systems, or
                                    gutter guards to reduce maintenance, our experienced team
                                    delivers solutions that keep your home protected year after
                                    year.
                                </p>
                            </div>

                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>

                        <div className="relative">
                            {/* Placeholder for gutter image */}
                            <div className="aspect-4/3 w-full rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                                <span className="text-sm">Gutter System Image Placeholder</span>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            {/* Services We Offer Section */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Complete gutter solutions
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Everything you need to keep water flowing away from your home.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="p-8 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="space-y-4">
                                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                                                <Icon className="w-7 h-7" />
                                            </div>

                                            <h3 className="text-xl font-bold">{feature.title}</h3>

                                            <p className="text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            {/* Placeholder for quality materials image */}
                            <div className="aspect-4/3 w-full rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                                <span className="text-sm">Quality Materials Image Placeholder</span>
                            </div>
                        </div>

                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Why choose our gutter services
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We're committed to providing gutter solutions that protect your home
                                and enhance its curb appeal.
                            </p>

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

            {/* Process Section */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Simple Process
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From evaluation to installation, we make gutter services easy and
                                hassle-free.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Free Evaluation",
                                    description:
                                        "We'll assess your current gutters, measure your home, and provide a detailed estimate at no charge.",
                                },
                                {
                                    step: "02",
                                    title: "Custom Installation",
                                    description:
                                        "Our team fabricates and installs seamless gutters on-site for a perfect fit and clean appearance.",
                                },
                                {
                                    step: "03",
                                    title: "Quality Assurance",
                                    description:
                                        "We test your new gutter system and provide care instructions to ensure long-lasting performance.",
                                },
                            ].map((item, index) => (
                                <div key={index} className="space-y-4">
                                    <div className="text-5xl font-bold text-primary/20">
                                        {item.step}
                                    </div>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Reviews Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Reviews />
                </Section>
            </div>

            {/* CTA Section */}
            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to upgrade your gutters?"
                        subheading="Get your free gutter evaluation today. Our experts will assess your needs and recommend the best solution to protect your home."
                    />
                </Section>
            </div>
        </div>
    );
}
