"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { defaultConfig } from "@/lib/default-config";

export const Logo = ({
    href = "/",
    textSize = "text-3xl",
    className,
    name = defaultConfig.logoName,
}) => {
    const MAX_LENGTH = 40;
    const displayName = name.length > MAX_LENGTH ? `${name.substring(0, MAX_LENGTH)}...` : name;
    const isTruncated = name.length > MAX_LENGTH;

    return (
        <Link
            href={href}
            className={cn(
                "font-normal flex space-x-2 items-center text-sm px-2 py-1 relative z-20",
                className
            )}
            title={isTruncated ? name : undefined}
        >
            <span className={cn("font-medium logo-font", textSize)}>{displayName}</span>
        </Link>
    );
};
