"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { GetQuoteButton } from "@/components/get-quote-button";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { defaultConfig } from "@/lib/default-config";

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-full p-3 leading-none no-underline outline-hidden transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white group",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground/80 group-hover:text-white/90">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export function DesktopNavbar({
    navItems,
    isAuthenticated = false,
    phoneNumber = defaultConfig.phoneNumber,
    companyName = defaultConfig.companyName,
    placeId = null,
}) {
    const { scrollY } = useScroll();
    const [showBackground, setShowBackground] = useState(false);

    useMotionValueEvent(scrollY, "change", (value) => {
        if (value > 100) {
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    });

    const textColor = showBackground ? "text-neutral-900" : "text-white";

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
                "w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-100",
                showBackground &&
                    "bg-neutral-50 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)]"
            )}
        >
            <AnimatePresence>
                {showBackground && (
                    <motion.div
                        key={String(showBackground)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 h-full w-full bg-neutral-100 pointer-events-none mask-[linear-gradient(to_bottom,white,transparent,white)] rounded-full"
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-row gap-2 items-center">
                <Logo
                    className={textColor}
                    companyName={companyName}
                    href={placeId ? `/${placeId}` : "/"}
                />
                <NavigationMenu delayDuration={100}>
                    <NavigationMenuList>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                {item.children ? (
                                    <>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                "rounded-full bg-transparent hover:bg-primary hover:text-white data-[state=open]:bg-primary data-[state=open]:text-white data-[state=open]:hover:bg-primary",
                                                textColor
                                            )}
                                        >
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2">
                                                {item.children.map((child) => (
                                                    <ListItem
                                                        key={child.title}
                                                        title={child.title}
                                                        href={getHref(child.href)}
                                                    >
                                                        {child.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink
                                        asChild
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "rounded-full bg-transparent hover:bg-primary hover:text-white data-active:bg-primary data-active:text-white",
                                            textColor
                                        )}
                                    >
                                        <Link href={getHref(item.href)}>{item.title}</Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex space-x-2 items-center z-50">
                {isAuthenticated ? (
                    <Button asChild className="rounded-full" variant="brand">
                        <Link href="/agent/chatbot/playground">
                            Dashboard
                            <ArrowRightIcon />
                        </Link>
                    </Button>
                ) : (
                    <>
                        <GetQuoteButton
                            variant="ghost"
                            className={cn(
                                "rounded-full hover:bg-primary hover:text-white",
                                textColor
                            )}
                        />
                        <Button asChild className="rounded-full">
                            <a href={`tel:${phoneNumber.replace(/\D/g, "")}`}>
                                <PhoneIcon />
                                {phoneNumber}
                            </a>
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
