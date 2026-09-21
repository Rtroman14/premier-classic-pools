"use client";

import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { defaultConfig } from "@/lib/default-config";

export function NavBar({
    phoneNumber = defaultConfig.phoneNumber,
    logoName = defaultConfig.logoName,
    cityName = "City",
    placeId = null,
}) {
    const navItems = useMemo(
        () => [
            {
                title: "Services",
                children: [
                    {
                        title: "Custom Pool Design & Build",
                        href: "/services/pool-design-build",
                        description:
                            "Gunite pools shaped around how your family actually lives outside.",
                    },
                    {
                        title: "Outdoor Living Spaces",
                        href: "/services/outdoor-living",
                        description:
                            "Kitchens, pergolas, fire features, and decking around the pool.",
                    },
                    {
                        title: "Turf Installation",
                        href: "/services/turf-installation",
                        description:
                            "Premium artificial turf and putting greens — low-maintenance and poolside-ready.",
                    },
                    {
                        title: "Pool Renovation",
                        href: "/services/pool-renovation",
                        description:
                            "Resurfacing, new plaster, tile, and coping for existing pools.",
                    },
                    {
                        title: "Equipment Upgrades",
                        href: "/services/equipment-upgrades",
                        description:
                            "Pumps, filters, heaters, and automation to modernize your pool.",
                    },
                    {
                        title: "Standby Generators",
                        href: "/services/standby-generators",
                        description:
                            "Kohler standby generator sales and installation.",
                    },
                ],
            },
            {
                title: "Gallery",
                href: "/gallery",
            },
            {
                title: "Service Areas",
                children: [
                    {
                        title: "View All Areas",
                        href: "/service-areas",
                        description:
                            "See all the cities we serve across the Houston area.",
                    },
                    {
                        title: "Houston",
                        href: "/service-areas/houston",
                        description: "Custom pools and outdoor living in Houston, TX.",
                    },
                    {
                        title: "Katy",
                        href: "/service-areas/katy",
                        description: "Pool construction in Katy, TX.",
                    },
                    {
                        title: "Sugar Land",
                        href: "/service-areas/sugar-land",
                        description: "Pool building in Sugar Land, TX.",
                    },
                    {
                        title: "Cypress",
                        href: "/service-areas/cypress",
                        description: "Pool construction in Cypress, TX.",
                    },
                ],
            },
        ],
        [cityName]
    );
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    return (
        <motion.nav
            initial={{
                y: -80,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                ease: [0.6, 0.05, 0.1, 0.9],
                duration: 0.8,
            }}
            className="md:max-w-7xl fixed top-4 mx-auto inset-x-0 z-99999 w-[90vw] lg:w-full"
        >
            <div className="w-full">
                {isMobile ? (
                    <MobileNavbar
                        navItems={navItems}
                        phoneNumber={phoneNumber}
                        logoName={logoName}
                        placeId={placeId}
                    />
                ) : (
                    <DesktopNavbar
                        navItems={navItems}
                        phoneNumber={phoneNumber}
                        logoName={logoName}
                        placeId={placeId}
                    />
                )}
            </div>
        </motion.nav>
    );
}
