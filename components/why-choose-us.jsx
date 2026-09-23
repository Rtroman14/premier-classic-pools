import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { GetQuoteButton } from "@/components/get-quote-button";

const benefits = [
    "200+ pools built across the Houston area",
    "Licensed & insured Texas builder",
    "Kohler-certified standby generator installer",
    "Family owned, on-site every build",
    "Fixed-price proposals — no surprises",
    "Weekly progress updates throughout construction",
];

export const WhyChooseUs = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Why homeowners trust us with their backyards
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We build custom pools, outdoor living spaces, and standby power systems as
                        one connected project — not three separate contractors. Our commitment to
                        quality craftsmanship and on-site ownership has made us a trusted pool
                        builder across the Houston area.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CircleCheckBig className="size-5 text-primary shrink-0 mt-0.5" />
                            <span className="font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <GetQuoteButton />
                </div>
            </div>

            <div className="relative">
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden">
                    <Image
                        src="/gallary/backyard-pool-2.jpg"
                        alt="Custom backyard pool"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:-left-12 bg-primary text-white p-8 rounded-xl shadow-xl max-w-xs">
                    <div className="text-4xl font-bold mb-1">200+</div>
                    <div className="text-blue-100 font-medium">Pools built across Houston</div>
                </div>
            </div>
        </div>
    );
};
