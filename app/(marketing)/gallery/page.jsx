import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata = {
    title: "Gallery | Premier Roofing - Our Finest Work",
    description:
        "Explore our portfolio of completed residential and commercial roofing projects. Each one represents our commitment to exceptional craftsmanship and lasting quality.",
};

const projects = [
    {
        id: 1,
        title: "Modern Suburban Home",
        description: "Complete roof replacement with architectural shingles",
        category: "Residential",
        image: "/gallary/modern-house-with-new-dark-shingle-roof.jpg",
        imageAlt: "Modern suburban home with black architectural shingles",
    },
    {
        id: 2,
        title: "Downtown Office Complex",
        description: "TPO flat roof installation for 50,000 sq ft building",
        category: "Commercial",
        image: "/gallary/modern-commercial-building-flat-roof-aerial.jpg",
        imageAlt: "Downtown office complex with modern flat roof",
    },
    {
        id: 3,
        title: "Historic Victorian Restoration",
        description: "Cedar shake roof restoration preserving original character",
        category: "Residential",
        image: "/gallary/victorian-house-with-restored-wood-shake-roof.jpg",
        imageAlt: "Historic Victorian home with restored cedar shake roof",
    },
    {
        id: 4,
        title: "Retail Plaza Renovation",
        description: "Modified bitumen roof system with 20-year warranty",
        category: "Commercial",
        image: "/gallary/shopping-plaza-with-new-commercial-roof.jpg",
        imageAlt: "Retail plaza with renovated commercial roof",
    },
    {
        id: 5,
        title: "Lakeside Estate",
        description: "Metal standing seam roof with custom copper accents",
        category: "Residential",
        image: "/gallary/luxury-lakeside-home-with-metal-roof.jpg",
        imageAlt: "Lakeside estate with metal standing seam roof",
    },
    {
        id: 6,
        title: "Manufacturing Facility",
        description: "Industrial metal roof covering 100,000+ sq ft",
        category: "Commercial",
        image: "/gallary/large-industrial-warehouse-with-metal-roof.jpg",
        imageAlt: "Large manufacturing facility with industrial metal roof",
    },
    {
        id: 7,
        title: "Coastal Contemporary",
        description: "Impact-resistant shingles designed for coastal weather",
        category: "Residential",
        image: "/gallary/modern-coastal-home-with-hurricane-resistant-roof.jpg",
        imageAlt: "Coastal contemporary home with impact-resistant roof",
    },
    {
        id: 8,
        title: "Medical Center Expansion",
        description: "EPDM roof system with green roofing integration",
        category: "Commercial",
        image: "/gallary/medical-building-with-modern-flat-roof-and-greener.jpg",
        imageAlt: "Medical center with modern EPDM roof system",
    },
    {
        id: 9,
        title: "Mountain Cabin Retreat",
        description: "Heavy-duty architectural shingles for extreme weather",
        category: "Residential",
        image: "/gallary/mountain-cabin-with-steep-dark-shingle-roof.jpg",
        imageAlt: "Mountain cabin with heavy-duty architectural shingles",
    },
];

const stats = [
    {
        value: "5,000+",
        label: "Projects Completed",
    },
    {
        value: "25+",
        label: "Years Experience",
    },
    {
        value: "100%",
        label: "Satisfaction Rate",
    },
    {
        value: "A+",
        label: "BBB Rating",
    },
];

export default function GalleryPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <PageHero
                title="Our Finest Work"
                subheading="Explore our portfolio of completed residential and commercial roofing projects. Each one represents our commitment to exceptional craftsmanship and lasting quality."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Professional roofing work showcase"
                primaryButton={{
                    label: "Get a Quote",
                    message: "I'd like to get a quote",
                }}
            />

            {/* Projects Grid Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Card key={project.id} className="p-0 overflow-hidden group">
                                {/* Project Image */}
                                <div className="relative aspect-4/3 w-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Project Details */}
                                <div className="p-6 space-y-3">
                                    <Badge
                                        variant={
                                            project.category === "Residential"
                                                ? "default"
                                                : "secondary"
                                        }
                                    >
                                        {project.category}
                                    </Badge>

                                    <h3 className="text-xl font-bold">{project.title}</h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>
            </div>

            {/* Stats Section - "Proven Excellence" */}
            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Proven Excellence
                        </h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center space-y-2">
                                    <div className="text-4xl md:text-6xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="text-base md:text-lg text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            {/* CTA Section */}
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to start your project?"
                        subheading="Let us bring the same level of quality and craftsmanship to your home or business. Get your free estimate today."
                    />
                </Section>
            </div>
        </div>
    );
}
