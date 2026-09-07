import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Reviews } from "@/components/reviews";
import { GetQuoteButton } from "@/components/get-quote-button";
import {
    BoltIcon,
    ShieldCheckIcon,
    DocumentTextIcon,
    ClockIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { CircleCheckBig } from "lucide-react";

export const metadata = {
    title: "Storm Damage Roofing Services | Premier Roofing",
    description:
        "Emergency storm damage repair and restoration services. Fast response, insurance claim assistance, and expert repairs to protect your property after severe weather.",
};

const features = [
    {
        icon: ClockIcon,
        title: "Emergency Response",
        description:
            "24/7 emergency services to secure your property and prevent further damage after storms.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Storm Damage Assessment",
        description: "Thorough inspections to document all storm damage for insurance claims.",
    },
    {
        icon: DocumentTextIcon,
        title: "Insurance Assistance",
        description:
            "We work directly with your insurance company to streamline the claims process.",
    },
    {
        icon: BoltIcon,
        title: "Complete Restoration",
        description:
            "Full roof restoration services to return your property to pre-storm condition.",
    },
];

const benefits = [
    "24/7 emergency response team",
    "Direct insurance billing available",
    "Licensed & fully insured",
    "Free storm damage inspections",
    "Temporary repairs & tarping",
    "Complete documentation for claims",
];

export default function StormDamagePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title="Storm Damage Restoration"
                subheading="Fast, reliable storm damage repairs when you need them most. Our emergency response team is available 24/7 to secure your property and restore your roof after severe weather."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Storm damage roof repair"
                primaryButton={{
                    label: "Get Emergency Help",
                    message: "I need emergency help with storm damage",
                }}
            />

            {/* Service Overview Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Rapid response when storms strike
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Storm damage can happen in an instant, leaving your property
                                    vulnerable to further damage from water intrusion. At Premier
                                    Roofing, we understand the urgency of storm damage repairs and
                                    provide rapid response services to protect your home or
                                    business.
                                </p>
                                <p>
                                    Our experienced team is available 24/7 to assess storm damage,
                                    perform emergency repairs, and begin the restoration process. We
                                    work directly with insurance companies to document damage and
                                    streamline your claim, making the process as stress-free as
                                    possible during a difficult time.
                                </p>
                                <p>
                                    From wind damage and hail impact to fallen trees and water
                                    intrusion, we have the expertise and equipment to handle any
                                    storm-related roofing emergency and restore your property
                                    quickly and professionally.
                                </p>
                            </div>

                            <div className="mt-8">
                                <GetQuoteButton
                                    label="Get Emergency Help"
                                    message="I need emergency help with storm damage"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            {/* Placeholder for storm damage image */}
                            <div className="aspect-4/3 w-full rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-muted-foreground">
                                <span className="text-sm">Storm Damage Image Placeholder</span>
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
                                Complete storm damage services
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From emergency response to full restoration, we're here to help.
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
                                Why choose us for storm damage
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We're committed to helping you recover quickly with expert repairs
                                and hassle-free insurance claim support.
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
                                Our Storm Damage Process
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From emergency response to complete restoration, we guide you
                                through every step.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Emergency Response",
                                    description:
                                        "We respond quickly to secure your property, perform temporary repairs, and document all damage.",
                                },
                                {
                                    step: "02",
                                    title: "Insurance Coordination",
                                    description:
                                        "We work with your insurance adjuster, provide detailed documentation, and handle all claim paperwork.",
                                },
                                {
                                    step: "03",
                                    title: "Complete Restoration",
                                    description:
                                        "Once approved, we complete permanent repairs or full replacement to restore your property.",
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
                        title="Need emergency storm damage help?"
                        subheading="Don't wait - contact us immediately for 24/7 emergency response. We'll secure your property and begin the restoration process right away."
                    />
                </Section>
            </div>
        </div>
    );
}
