import Link from "next/link";
import {
    HomeIcon,
    FireIcon,
    WrenchScrewdriverIcon,
    BoltIcon,
} from "@heroicons/react/24/outline";
import { CircleCheckBig, Droplets } from "lucide-react";

const services = [
    {
        icon: Droplets,
        title: "Custom Pool Design & Build",
        description:
            "Gunite pools shaped around how your family actually lives outside — from geometric lap pools to freeform lagoons, sun shelves, and spas.",
        tag: "Design → Excavation → Finish",
        href: "/services/pool-design-build",
    },
    {
        icon: HomeIcon,
        title: "Outdoor Living Spaces",
        description:
            "Kitchens, pergolas, fire features, and decking that turn the area around the pool into the room your family actually spends time in.",
        tag: "Kitchens · Shade · Fire",
        href: "/services/outdoor-living",
    },
    {
        icon: CircleCheckBig,
        title: "Turf Installation",
        description:
            "Premium artificial turf and putting greens — low-maintenance, kid- and pet-friendly, and built to stay green year-round poolside.",
        tag: "Turf · Putting Greens",
        href: "/services/turf-installation",
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Pool Renovation / New Plaster",
        description:
            "Resurfacing and new plaster for pools that need a refresh rather than a full rebuild.",
        tag: "Resurfacing",
        href: "/services/pool-renovation",
    },
    {
        icon: FireIcon,
        title: "Equipment Upgrades",
        description:
            "Pump, filter, heater, and automation upgrades to make an existing pool more efficient and easier to run.",
        tag: "Pumps · Filters · Automation",
        href: "/services/equipment-upgrades",
    },
    {
        icon: BoltIcon,
        title: "Standby Generators",
        description:
            "Kohler standby generator sales and installation, so a summer storm never means a warm pool and a dark house.",
        tag: "Kohler Certified",
        href: "/services/standby-generators",
    },
];

export const Services = () => {
    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Three trades, one crew.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    From the hole in the ground to the power that keeps the lights on when the grid
                    doesn't, we handle it as one connected build — not three separate contractors.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <Link key={index} href={service.href}>
                            <div className="group relative bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    <span className="inline-block text-xs font-semibold text-primary/70 bg-primary/5 px-3 py-1 rounded-full">
                                        {service.tag}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
