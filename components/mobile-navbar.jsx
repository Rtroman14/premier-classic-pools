"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { GetQuoteButton } from "@/components/get-quote-button";
import { Logo } from "./logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
// import { ModeToggle } from "../mode-toggle";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { defaultConfig } from "@/lib/default-config";

export const MobileNavbar = ({
    navItems,
    phoneNumber = defaultConfig.phoneNumber,
    companyName = defaultConfig.companyName,
    placeId = null,
}) => {
    const [open, setOpen] = useState(false);

    const { scrollY } = useScroll();

    const [showBackground, setShowBackground] = useState(false);

    useMotionValueEvent(scrollY, "change", (value) => {
        if (value > 100) {
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    });

    // Helper function to prefix href with placeId if on demo site
    const getHref = (href) => {
        if (placeId) {
            return `/${placeId}${href}`;
        }
        return href;
    };

    return (
        <div
            className={cn(
                "flex justify-between bg-white dark:bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200",
                showBackground &&
                    "bg-neutral-50 dark:bg-neutral-900 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] dark:shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
            )}
        >
            <Logo companyName={companyName} href={placeId ? `/${placeId}` : "/"} />
            <Bars3Icon
                className="text-black dark:text-white h-6 w-6 mr-2"
                onClick={() => setOpen(!open)}
            />

            {open && (
                <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-5  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800">
                    <div className="flex items-center justify-between w-full px-5">
                        <Logo companyName={companyName} href={placeId ? `/${placeId}` : "/"} />
                        <div className="flex items-center space-x-2">
                            <XMarkIcon
                                className="h-8 w-8 text-black dark:text-white"
                                onClick={() => setOpen(!open)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-5 px-8">
                        {navItems.map((navItem, idx) => (
                            <div key={`mobile-nav-${idx}`}>
                                {navItem.children && navItem.children.length > 0 ? (
                                    <>
                                        <span className="block text-sm text-black dark:text-muted-foreground mb-2">
                                            {navItem.title}
                                        </span>
                                        {navItem.children.map((childNavItem, idx) => (
                                            <Link
                                                key={`link=${idx}`}
                                                href={getHref(childNavItem.href)}
                                                onClick={() => setOpen(false)}
                                                className="relative max-w-[15rem] text-left text-2xl"
                                            >
                                                <span className="block text-black dark:text-white">
                                                    {childNavItem.title}
                                                </span>
                                            </Link>
                                        ))}
                                    </>
                                ) : (
                                    <Link
                                        key={`link=${idx}`}
                                        href={getHref(navItem.href)}
                                        onClick={() => setOpen(false)}
                                        className="relative"
                                    >
                                        <span className="block text-[26px] text-black dark:text-white">
                                            {navItem.title}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row w-full items-start gap-2.5 px-8">
                        <div onClick={() => setOpen(false)}>
                            <GetQuoteButton
                                variant="outline"
                                className="rounded-full text-black dark:text-gray-200 border-black dark:border-gray-200"
                            />
                        </div>
                        <Button asChild className="rounded-full">
                            <a href={`tel:${phoneNumber.replace(/\D/g, "")}`}>
                                <PhoneIcon className="size-3" />
                                {phoneNumber}
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
