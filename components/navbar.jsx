"use client";

import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { defaultConfig } from "@/lib/default-config";

export function NavBar({
    phoneNumber = defaultConfig.phoneNumber,
    companyName = defaultConfig.companyName,
    cityName = "City",
    placeId = null,
}) {
    const navItems = useMemo(
        () => [
            {
                title: "About Us",
                href: "/about-us",
            },
            {
                title: "Services",
                children: [
                    {
                        title: "Residential",
                        href: "/services/residential",
                        description:
                            "Expert roofing solutions for homeowners and residential properties.",
                    },
                    {
                        title: "Commercial",
                        href: "/services/commercial",
                        description:
                            "Professional roofing services for businesses and commercial buildings.",
                    },
                    {
                        title: "Gutters",
                        href: "/services/gutters",
                        description:
                            "Installation, repair, and maintenance for seamless gutter systems.",
                    },
                    {
                        title: "Storm Damage",
                        href: "/services/storm-damage",
                        description:
                            "24/7 emergency response and insurance claim assistance for storm damage.",
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
                        description: "See all the cities and neighborhoods we serve in your area.",
                    },
                    {
                        title: cityName,
                        href: "/service-areas/city",
                        description: `Expert roofing services throughout ${cityName} and surrounding areas.`,
                    },
                ],
            },
            {
                title: "Contact",
                href: "/contact",
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
                        companyName={companyName}
                        placeId={placeId}
                    />
                ) : (
                    <DesktopNavbar
                        navItems={navItems}
                        phoneNumber={phoneNumber}
                        companyName={companyName}
                        placeId={placeId}
                    />
                )}
            </div>
        </motion.nav>
    );
}
