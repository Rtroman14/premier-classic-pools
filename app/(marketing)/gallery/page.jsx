import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CTA } from "@/components/cta";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata = {
    title: "Gallery | Premier Classic Pools & Outdoors",
    description:
        "Explore our portfolio of custom pools, outdoor living spaces, and completed projects across the Houston area.",
};

const projects = [
    {
        id: 1,
        title: "Freeform Lagoon Pool",
        description: "Custom freeform pool with sun shelf, spa, and travertine decking",
        category: "Pool",
        image: "/gallary/luxury-lakeside-home-with-metal-roof.jpg",
        imageAlt: "Freeform lagoon pool with spa",
    },
    {
        id: 2,
        title: "Geometric Lap Pool",
        description: "Clean-lined geometric pool with raised wall and sheer descent water feature",
        category: "Pool",
        image: "/gallary/modern-house-with-new-dark-shingle-roof.jpg",
        imageAlt: "Geometric lap pool",
    },
    {
        id: 3,
        title: "Outdoor Kitchen & Pergola",
        description: "Full outdoor kitchen with built-in grill, pergola, and fire pit area",
        category: "Outdoor Living",
        image: "/gallary/victorian-house-with-restored-wood-shake-roof.jpg",
        imageAlt: "Outdoor kitchen and pergola",
    },
    {
        id: 4,
        title: "Pool & Spa Combo",
        description: "Gunite pool with attached spa, LED lighting, and automation system",
        category: "Pool",
        image: "/gallary/modern-coastal-home-with-hurricane-resistant-roof.jpg",
        imageAlt: "Pool and spa combo",
    },
    {
        id: 5,
        title: "Fire Feature & Decking",
        description: "Custom fire bowls, stamped concrete decking, and landscape lighting",
        category: "Outdoor Living",
        image: "/gallary/mountain-cabin-with-steep-dark-shingle-roof.jpg",
        imageAlt: "Fire feature and pool decking",
    },
    {
        id: 6,
        title: "Pool Renovation",
        description: "Complete resurface with pebble finish, new tile, coping, and deck overlay",
        category: "Renovation",
        image: "/gallary/shopping-plaza-with-new-commercial-roof.jpg",
        imageAlt: "Pool renovation project",
    },
    {
        id: 7,
        title: "Turf & Putting Green",
        description: "Artificial turf installation with custom putting green around pool area",
        category: "Turf",
        image: "/gallary/modern-commercial-building-flat-roof-aerial.jpg",
        imageAlt: "Turf and putting green",
    },
    {
        id: 8,
        title: "Kohler Generator Install",
        description: "Whole-home Kohler standby generator with automatic transfer switch",
        category: "Generator",
        image: "/gallary/medical-building-with-modern-flat-roof-and-greener.jpg",
        imageAlt: "Kohler standby generator installation",
    },
    {
        id: 9,
        title: "Complete Backyard Build",
        description: "Pool, outdoor kitchen, pergola, turf, and fire pit — full backyard transformation",
        category: "Pool",
        image: "/gallary/large-industrial-warehouse-with-metal-roof.jpg",
        imageAlt: "Complete backyard build",
    },
];

const stats = [
    { value: "200+", label: "Pools Built" },
    { value: "10–14 wks", label: "Avg. Build Time" },
    { value: "5★", label: "Google Rating" },
    { value: "100%", label: "Licensed & Insured" },
];

export default function GalleryPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="A Few Backyards We've Finished"
                subheading="Freeform and geometric pools, outdoor kitchens, and shade structures across the Houston area."
                imageSrc="/professional-roofer-installing-shingles-on-house.jpg"
                imageAlt="Pool project showcase"
                primaryButton={{ label: "Get a Quote", message: "I'd like to get a quote" }}
            />

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Card key={project.id} className="p-0 overflow-hidden group">
                                <div className="relative aspect-4/3 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    <Badge
                                        variant={project.category === "Pool" ? "default" : "secondary"}
                                    >
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                            Proven Results
                        </h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center space-y-2">
                                    <div className="text-4xl md:text-6xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-base md:text-lg text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <CTA
                        title="Ready to see what your backyard could look like?"
                        subheading="Get a free consultation and we'll walk your yard, talk through your vision, and show you what's possible."
                    />
                </Section>
            </div>
        </div>
    );
}
