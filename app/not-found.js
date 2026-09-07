"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    // Marketing/Public 404 Page
    return (
        <div className="bg-background h-screen w-screen flex flex-col justify-center items-center gap-4 p-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-2">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-muted-foreground mb-6">Could not find the requested resource</p>
                <Button asChild>
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    );
}
