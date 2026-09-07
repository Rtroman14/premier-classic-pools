import React from "react";
import { GetQuoteButton } from "@/components/get-quote-button";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { defaultConfig } from "@/lib/default-config";

export const CTA = ({ title, subheading, phoneNumber = defaultConfig.phoneNumber }) => {
    return (
        <div className="w-full overflow-hidden relative z-30">
            <div className="mx-auto w-full relative z-20 sm:max-w-160 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl bg-primary rounded-xl sm:rounded-2xl">
                <div className="relative -mx-6 sm:mx-0 sm:rounded-2xl overflow-hidden px-6 md:px-8">
                    <div
                        className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette mask-[radial-gradient(#fff,transparent,75%)]"
                        style={{
                            backgroundImage: "url(/noise.webp)",
                            backgroundSize: "30%",
                        }}
                    ></div>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
                        style={{
                            mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
                        }}
                    ></div>

                    <div className="relative px-6 py-14 sm:px-10 sm:pb-20 lg:px-18">
                        <h2 className="  text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                            {title}
                        </h2>
                        <p className="mt-4 max-w-2xl text-balance text-center mx-auto text-base/6 text-neutral-200">
                            {subheading}
                        </p>

                        <div className="relative z-10 mx-auto flex justify-center mt-6 gap-3">
                            <GetQuoteButton variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
