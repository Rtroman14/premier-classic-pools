import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Reviews } from "@/components/reviews";
import { GetQuoteButton } from "@/components/get-quote-button";
import {
    BuildingOfficeIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    ClockIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { CircleCheckBig } from "lucide-react";

export const metadata = {
    title: "Commercial Roofing Services | Premier Roofing",
    description:
        "Professional commercial roofing services for businesses. Minimize downtime with expert installations, repairs, and maintenance for all commercial roofing systems.",
};

const features = [
    {
        icon: BuildingOfficeIcon,
        title: "New Commercial Roofs",
        description:
            "Complete commercial roof installations with minimal disruption to your business operations.",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Roof Maintenance",
        description: "Preventive maintenance programs to extend the life of your commercial roof.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Roof Inspections",
        description:
            "Comprehensive commercial roof inspections to identify issues and prevent costly repairs.",
    },
    {
        icon: ClockIcon,
        title: "Emergency Repairs",
        description: "24/7 emergency commercial roofing services to protect your business assets.",
    },
];

const benefits = [
    "TPO, EPDM, and metal roofing systems",
    "Minimal business disruption",
    "Licensed & fully insured",
    "Free commercial roof assessments",
    "Flexible financing options",
    "Preventive maintenance plans",
];

export default function CommercialRoofingPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title="Commercial Roofing Solutions"
                subheading="Protect your business with reliable commercial roofing. We specialize in installations, repairs, and maintenance that minimize downtime and maximize roof longevity."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Commercial roofing installation"
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
                                Your business deserves reliable protection
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    A properly maintained commercial roof is essential to protecting
                                    your business assets, employees, and operations. At Premier
                                    Roofing, we understand the unique challenges of commercial
                                    roofing and deliver solutions that minimize downtime while
                                    maximizing performance.
                                </p>
                                <p>
                                    Whether you need a new roof installation, emergency repairs, or
                                    a preventive maintenance program, our experienced commercial
                                    roofing team works efficiently to keep your business running
                                    smoothly. We specialize in all major commercial roofing systems
                                    including TPO, EPDM, metal, and built-up roofing.
                                </p>
                                <p>
                                    We work around your schedule to minimize disruption and can
                                    provide after-hours and weekend services to accommodate your
                                    business needs.
                                </p>
                            </div>

                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>

                        <div className="relative">
                            {/* Placeholder for commercial roof image */}
                            <div className="aspect-4/3 w-full rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                                <span className="text-sm">Commercial Roof Image Placeholder</span>
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
                                Comprehensive commercial services
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Complete roofing solutions designed for businesses of all sizes.
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
                                Why businesses choose us
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We're committed to providing commercial roofing solutions that
                                protect your investment and keep your business running smoothly.
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
                                From assessment to completion, we make commercial roofing
                                straightforward and hassle-free.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Commercial Assessment",
                                    description:
                                        "We'll evaluate your roof, discuss your business needs, and provide a detailed proposal with timeline.",
                                },
                                {
                                    step: "02",
                                    title: "Professional Installation",
                                    description:
                                        "Our certified team completes your project on schedule with minimal disruption to your operations.",
                                },
                                {
                                    step: "03",
                                    title: "Ongoing Support",
                                    description:
                                        "We provide comprehensive warranties and optional maintenance plans to protect your investment.",
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
                        title="Ready to protect your business?"
                        subheading="Get your free commercial roofing assessment today. Our experts will evaluate your needs and provide a comprehensive solution that works for your business."
                    />
                </Section>
            </div>
        </div>
    );
}
