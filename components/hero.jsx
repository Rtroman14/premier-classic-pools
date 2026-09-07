"use client";

import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GetQuoteButton } from "@/components/get-quote-button";
import { ContactForm } from "@/components/contact-form";

export function Hero({ title, subheading, className }) {
    return (
        <div
            className={cn(
                "w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                className
            )}
        >
            {/* Column 1: Content */}
            <div className="flex flex-col text-center lg:text-left">
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
                        "text-5xl tracking-tight lg:text-7xl font-semibold relative z-10 text-white"
                    )}
                >
                    <Balancer>{title}</Balancer>
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
                    className={cn("mt-6 text-lg md:text-xl relative z-10 text-neutral-200")}
                >
                    <Balancer>{subheading}</Balancer>
                </motion.p>

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
                        delay: 0.4,
                    }}
                    className="mt-8 relative z-10 flex justify-center lg:justify-start"
                >
                    <GetQuoteButton className="rounded-full" />
                </motion.div>
            </div>

            {/* Column 2: Form */}
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
                    delay: 0.3,
                }}
                className="relative z-10"
            >
                <ContactForm />
            </motion.div>
        </div>
    );
}
