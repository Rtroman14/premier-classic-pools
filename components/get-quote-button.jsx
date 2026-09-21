"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GetQuoteButton({
    label = "Get a Quote",
    size = "lg",
    variant = "default",
    className = "",
}) {
    return (
        <Button asChild size={size} variant={variant} className={`cursor-pointer ${className}`}>
            <Link href="/get-a-quote">{label}</Link>
        </Button>
    );
}
