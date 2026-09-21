import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { GetQuoteButton } from "@/components/get-quote-button";
import { TrophyIcon, ShieldCheckIcon, UsersIcon, BoltIcon } from "@heroicons/react/24/outline";

export const metadata = {
    title: "About Us | Premier Classic Pools & Outdoors",
    description:
        "Family-owned Texas pool builder. 200+ pools built across the Houston area. Three trades, one crew — custom pools, outdoor living, and standby generators.",
};

const values = [
    {
        icon: TrophyIcon,
        title: "Craftsmanship",
        description:
            "Every pool is built with gunite, structural steel, and premium finishes — engineered to last decades.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Transparency",
        description:
            "Fixed-price proposals, weekly progress updates, and honest communication at every stage.",
    },
    {
        icon: UsersIcon,
        title: "Ownership",
        description:
            "Family-owned and on-site every build. We don't hand your project off to subcontractors.",
    },
    {
        icon: BoltIcon,
        title: "Full-Service",
        description:
            "Pool, outdoor living, and backup power — three trades handled by one crew, one timeline.",
    },
];

export default function AboutUsPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Three Trades, One Crew"
                subheading="Premier Classic Pools & Outdoors is a family-owned Texas builder. We design and construct custom pools, outdoor living spaces, and standby power systems — all under one roof."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Premier Classic Pools team"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Premier Classic Pools & Outdoors was built on a simple idea:
                                    homeowners shouldn't need three separate contractors to finish
                                    their backyard. We handle pool construction, outdoor living, and
                                    standby generators as one connected project — same crew, same
                                    timeline, same accountability.
                                </p>
                                <p>
                                    With 200+ pools built across the Houston area, we bring
                                    hands-on ownership to every project. We're not managing from a
                                    desk — we're on your job site, making sure every detail meets
                                    our standard.
                                </p>
                                <p>
                                    As a Kohler-certified generator installer, we also keep your
                                    pool, home, and outdoor space powered when the Texas grid goes
                                    down. It's all part of building a backyard that actually works.
                                </p>
                            </div>
                            <div className="mt-8">
                                <GetQuoteButton />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-4/5 w-full rounded-2xl overflow-hidden">
                                <img
                                    src="/professional-roofing-crew-working-on-residential-h.jpg"
                                    alt="Premier Classic Pools team on site"
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
                                What We Stand For
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                These principles guide every project we take on.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                                        <div className="space-y-4 text-center">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold">{value.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                                By the Numbers
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {[
                                { value: "200+", label: "Pools Built" },
                                { value: "10–14", label: "Week Avg. Build" },
                                { value: "3'–8'", label: "Water Depth Range" },
                                { value: "5★", label: "Google Rating" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center space-y-2">
                                    <div className="text-4xl md:text-6xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-base md:text-lg text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to build with us?"
                        subheading="Get a free consultation and see what your backyard could look like. Custom pools, outdoor living, and backup power — all from one crew."
                    />
                </Section>
            </div>
        </div>
    );
}
