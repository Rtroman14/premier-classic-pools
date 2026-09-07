import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
            <Section className="max-w-2xl text-center">
                <div className="space-y-6">
                    <h1 className="text-6xl font-bold text-neutral-900 dark:text-white">
                        404
                    </h1>
                    <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
                        Invalid Demo Link
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        The demo link you're trying to access is invalid or the Google Place ID doesn't exist.
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/">
                                Return to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}

