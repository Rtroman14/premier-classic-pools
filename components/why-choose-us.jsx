import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { GetQuoteButton } from "@/components/get-quote-button";

const benefits = [
    "Licensed & fully insured contractors",
    "Premium materials from trusted brands",
    "Comprehensive warranty coverage",
    "Free estimates & consultations",
    "Emergency repair services",
    "Financing options available",
];

export const WhyChooseUs = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Why homeowners trust us with their roofs
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        For over 25 years, we've been protecting families and their homes with
                        exceptional roofing services. Our commitment to quality craftsmanship and
                        customer satisfaction has made us the leading roofing contractor in the
                        region.
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
                        src="/professional-roofer-installing-shingles-on-house.jpg"
                        alt="Professional roofer installing shingles on house"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="absolute bottom-8 left-8 sm:bottom-12 sm:-left-12 bg-primary text-white p-8 rounded-xl shadow-xl max-w-xs">
                    <div className="text-4xl font-bold mb-1">50+ Years</div>
                    <div className="text-blue-100 font-medium">Combined team experience</div>
                </div>
            </div>
        </div>
    );
};
