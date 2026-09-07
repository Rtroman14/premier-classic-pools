import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { GetQuoteButton } from "@/components/get-quote-button";
import { TrophyIcon, ShieldCheckIcon, UsersIcon, BoltIcon } from "@heroicons/react/24/outline";

export const metadata = {
    title: "About Us | Premier Roofing - Built on Trust, Powered by Expertise",
    description:
        "For over 25 years, Premier Roofing has been the trusted choice for homeowners and businesses seeking exceptional craftsmanship and unwavering reliability.",
};

const values = [
    {
        icon: TrophyIcon,
        title: "Excellence",
        description:
            "We never compromise on quality, using only premium materials and proven installation methods.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Integrity",
        description:
            "Honest assessments, transparent pricing, and straightforward communication every step of the way.",
    },
    {
        icon: UsersIcon,
        title: "Partnership",
        description:
            "We build lasting relationships with our clients, supporting them long after installation.",
    },
    {
        icon: BoltIcon,
        title: "Precision",
        description:
            "Meticulous attention to detail ensures every project meets our exacting standards.",
    },
];

const team = [
    {
        name: "James Sullivan",
        title: "Founder & Master Roofer",
        description:
            "With over 30 years in the industry, James leads every major project with hands-on expertise.",
        image: "/team/professional-male-roofing-contractor-portrait.jpg",
        imageAlt: "James Sullivan, Founder & Master Roofer",
    },
    {
        name: "Maria Rodriguez",
        title: "Operations Director",
        description:
            "Maria ensures every project runs smoothly from initial estimate to final inspection.",
        image: "/team/professional-female-roofing-project-manager-portra.jpg",
        imageAlt: "Maria Rodriguez, Operations Director",
    },
    {
        name: "David Chen",
        title: "Senior Technician",
        description:
            "David's technical expertise and 20+ years of experience guarantee flawless installations.",
        image: "/team/professional-male-roofing-senior-technician-portra.jpg",
        imageAlt: "David Chen, Senior Technician",
    },
];

export default function AboutUsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title="Built On Trust, Powered By Expertise"
                subheading="For over 25 years, Premier Roofing has been the trusted choice for homeowners and businesses seeking exceptional craftsmanship and unwavering reliability."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Professional roofer installing shingles"
                primaryButton={{
                    label: "Get a Quote",
                    message: "I'd like to get a quote",
                }}
            />

            {/* Our Story Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Premier Roofing was founded in 1998 by Master Roofer James
                                    Sullivan, who saw an opportunity to bring old-world
                                    craftsmanship into modern roofing practices. What started as a
                                    small family operation has grown into one of the region's most
                                    trusted roofing companies.
                                </p>
                                <p>
                                    Our commitment has always been simple: treat every roof as if it
                                    were protecting our own family. This philosophy has earned us
                                    thousands of satisfied customers and a reputation for excellence
                                    that stands the test of time.
                                </p>
                                <p>
                                    Today, we combine traditional quality with cutting-edge
                                    materials and techniques, ensuring that your roof not only looks
                                    beautiful but provides decades of reliable protection.
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
                                    alt="Professional roofing crew working on residential home"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            {/* Our Values Section */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Our Values
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                These principles guide every project we undertake and every
                                relationship we build.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="p-8 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="space-y-4 text-center">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                                                <Icon className="w-8 h-8" />
                                            </div>

                                            <h3 className="text-xl font-bold">{value.title}</h3>

                                            <p className="text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            </div>

            {/* Expert Team Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                                Expert Team, Exceptional Results
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our certified professionals bring decades of combined experience to
                                every project.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <Card key={index} className="p-0 overflow-hidden">
                                    <div className="aspect-4/5 w-full overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.imageAlt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="p-4 space-y-2">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-primary font-semibold">{member.title}</p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {member.description}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            {/* CTA Section */}
            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to work with the best?"
                        subheading="Join thousands of satisfied customers who trust us to protect their most valuable investment. Get your free estimate today."
                    />
                </Section>
            </div>
        </div>
    );
}
