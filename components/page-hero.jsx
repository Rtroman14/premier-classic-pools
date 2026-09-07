"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/section";
import { sendMessageToChatbot } from "@/lib/chatbot-utils";

export const PageHero = ({
    title,
    subheading,
    primaryButton = null,
    secondaryButton = null,
    imageSrc,
    imageAlt,
    className,
    titleClassName,
    subheadingClassName,
}) => {
    const handleButtonClick = () => {
        if (primaryButton?.onClick) {
            primaryButton.onClick();
        } else if (primaryButton?.message) {
            sendMessageToChatbot(primaryButton.message);
        }
    };
    return (
        <div className="relative min-h-[70vh] sm:min-h-[65vh] lg:min-h-[60vh] w-full flex items-center justify-center overflow-hidden py-24 sm:py-28 lg:py-32">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/65" />
            <Section className="relative z-10 w-full max-w-7xl">
                <div className={cn("flex flex-col overflow-visible", className)}>
                    <motion.div
                        initial={{
                            y: 40,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                        className="flex justify-center"
                    ></motion.div>
                    <motion.h1
                        initial={{
                            y: 40,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                        className={cn(
                            "text-5xl tracking-tight lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 text-balance text-white",
                            titleClassName
                        )}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{
                            y: 40,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className={cn(
                            "text-center mt-6 text-base md:text-xl text-neutral-200 max-w-3xl mx-auto relative z-10 text-balance",
                            subheadingClassName
                        )}
                    >
                        {subheading}
                    </motion.p>
                    {(primaryButton || secondaryButton) && (
                        <motion.div
                            initial={{
                                y: 80,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                ease: "easeOut",
                                duration: 0.5,
                                delay: 0.4,
                            }}
                            className="flex items-center gap-4 justify-center mt-6 relative z-10"
                        >
                            {primaryButton &&
                                (primaryButton.href ? (
                                    <Button asChild className="rounded-full" size="lg">
                                        <Link href={primaryButton.href}>{primaryButton.label}</Link>
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleButtonClick}
                                        className="rounded-full cursor-pointer"
                                        size="lg"
                                    >
                                        {primaryButton.label}
                                    </Button>
                                ))}
                        </motion.div>
                    )}
                </div>
            </Section>
        </div>
    );
};
