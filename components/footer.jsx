import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { defaultConfig } from "@/lib/default-config";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

export const Footer = ({
    companyName = defaultConfig.companyName,
    phoneNumber = defaultConfig.phoneNumber,
    address = defaultConfig.address,
    placeId = null,
}) => {
    const getHref = (href) => {
        if (placeId) {
            return `/${placeId}${href}`;
        }
        return href;
    };
    const services = [
        {
            name: "Custom Pool Design & Build",
            href: "/services/pool-design-build",
        },
        {
            name: "Outdoor Living Spaces",
            href: "/services/outdoor-living",
        },
        {
            name: "Turf Installation",
            href: "/services/turf-installation",
        },
        {
            name: "Pool Renovation",
            href: "/services/pool-renovation",
        },
        {
            name: "Equipment Upgrades",
            href: "/services/equipment-upgrades",
        },
        {
            name: "Standby Generators",
            href: "/services/standby-generators",
        },
    ];

    const quickLinks = [
        {
            name: "Service Areas",
            href: "/service-areas",
        },
        {
            name: "About Us",
            href: "/about-us",
        },
        {
            name: "Gallery",
            href: "/gallery",
        },
        {
            name: "Get a Quote",
            href: "/get-a-quote",
        },
    ];

    const socials = [
        {
            name: "Facebook",
            href: defaultConfig.socials.facebook,
            icon: FaFacebook,
        },
        {
            name: "Instagram",
            href: defaultConfig.socials.instagram,
            icon: FaInstagram,
        },
        {
            name: "Google",
            href: defaultConfig.socials.google,
            icon: FaGoogle,
        },
    ];

    return (
        <footer className="relative max-w-7xl mx-auto">
            <div className="border-t border-neutral-100 relative bg-white">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-12">
                    {/* Company Info Section */}
                    <div className="space-y-6">
                        <div className="mb-4">
                            <Logo name={defaultConfig.logoName} />
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="size-6" />
                                </Link>
                            ))}
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {companyName} designs and builds custom pools, outdoor living spaces,
                            and standby power systems for homes across Texas. Licensed & insured
                            Texas contractor.
                        </p>
                    </div>

                    {/* Our Services Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={getHref(service.href)}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={getHref(link.href)}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                            Contact Info
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="size-5 text-muted-foreground shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm">
                                    {address || "2310 Windmill Dr, Richmond, TX 77406"}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="size-5 text-muted-foreground shrink-0" />
                                <a
                                    href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {phoneNumber}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="size-5 text-muted-foreground shrink-0" />
                                <a
                                    href={`mailto:${defaultConfig.email}`}
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {defaultConfig.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright Row */}
                <div className="border-t border-muted p-6 text-center text-sm text-muted-foreground">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} {companyName}. All rights
                        reserved. | Website designed by{" "}
                        <a
                            href="https://roofera.ai?utm_source=client_website&utm_medium=footer&utm_campaign=branding"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity logo-font"
                        >
                            <span className="text-black">Roof</span>
                            <span style={{ color: "#3DCF8E" }}>Era</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
