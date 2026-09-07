import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Reviews } from "@/components/reviews";
import { GetQuoteButton } from "@/components/get-quote-button";
import {
    HomeIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    ClockIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { CircleCheckBig } from "lucide-react";

export const metadata = {
    title: "Residential Roofing Services | Premier Roofing",
    description:
        "Expert residential roofing services for homeowners. From new installations to repairs, we protect your home with quality materials and craftsmanship.",
};

const features = [
    {
        icon: HomeIcon,
        title: "Complete Roof Replacement",
        description:
            "Full roof replacement with premium materials backed by comprehensive warranties.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Roof Repairs",
        description: "Quick, reliable repairs for leaks, storm damage, and general wear and tear.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Roof Inspections",
        description:
            "Thorough inspections to identify potential issues before they become major problems.",
    },
    {
        icon: ClockIcon,
        title: "Emergency Services",
        description: "24/7 emergency repair services when you need us most.",
    },
];

const benefits = [
    "Premium asphalt shingle options",
    "Comprehensive warranty coverage",
    "Licensed & insured professionals",
    "Free estimates & consultations",
    "Financing options available",
    "Clean job site guarantee",
];

export default function ResidentialRoofingPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title="Residential Roofing Excellence"
                subheading="Protect your home with expert roofing solutions. From new installations to repairs and maintenance, we deliver quality craftsmanship that lasts for decades."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Professional roofer working on residential roof"
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
                                Your home deserves the best protection
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Your roof is your home's first line of defense against the
                                    elements. At Premier Roofing, we understand the importance of a
                                    reliable, well-built roof, and we're committed to delivering
                                    solutions that protect your family and your investment.
                                </p>
                                <p>
                                    Whether you need a complete roof replacement, repairs after
                                    storm damage, or routine maintenance, our experienced team uses
                                    only premium materials and proven installation techniques to
                                    ensure your roof performs beautifully for years to come.
                                </p>
                                <p>
                                    We work with all major roofing material manufacturers and can
                                    help you select the perfect option for your home's style,
                                    budget, and climate requirements.
                                </p>
                            </div>

                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>

                        <div className="relative">
                            {/* Placeholder for residential roof image */}
                            <div className="aspect-4/3 w-full rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                                <span className="text-sm">Residential Roof Image Placeholder</span>
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
                                Comprehensive residential services
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Everything you need to keep your home protected under one roof.
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
                                Why homeowners choose us
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We're committed to providing the highest quality roofing services
                                with materials and workmanship you can trust.
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
                                From initial consultation to final inspection, we make the process
                                easy and stress-free.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Free Consultation",
                                    description:
                                        "We'll inspect your roof, discuss your needs, and provide a detailed estimate with no obligation.",
                                },
                                {
                                    step: "02",
                                    title: "Expert Installation",
                                    description:
                                        "Our certified team completes your project efficiently using premium materials and proven techniques.",
                                },
                                {
                                    step: "03",
                                    title: "Quality Guarantee",
                                    description:
                                        "We conduct a final inspection and provide comprehensive warranty coverage for your peace of mind.",
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
                        title="Ready to protect your home?"
                        subheading="Get your free, no-obligation estimate today. Our experts are ready to answer your questions and provide the perfect roofing solution for your home."
                    />
                </Section>
            </div>
        </div>
    );
}
