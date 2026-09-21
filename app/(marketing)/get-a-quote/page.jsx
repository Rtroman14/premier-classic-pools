import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { GoogleMap } from "@/components/google-map";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { defaultConfig } from "@/lib/default-config";

export const metadata = {
    title: "Get a Quote | Premier Classic Pools & Outdoors",
    description:
        "Request a free consultation from Premier Classic Pools & Outdoors. Custom pools, outdoor living, and standby generators across the Houston area.",
};

export default function GetAQuotePage({
    companyName = defaultConfig.companyName,
    phoneNumber = defaultConfig.phoneNumber,
    address = defaultConfig.address,
    email = defaultConfig.email,
} = {}) {
    const contactInfo = [
        {
            icon: MapPinIcon,
            title: "Address",
            content: address,
        },
        {
            icon: PhoneIcon,
            title: "Call Us",
            content: phoneNumber,
            href: `tel:${phoneNumber.replace(/\D/g, "")}`,
        },
        {
            icon: EnvelopeIcon,
            title: "Email",
            content: email,
            href: `mailto:${email}`,
        },
    ];
    return (
        <div className="flex flex-col">
            <PageHero
                title={
                    <span>
                        Get a <span className="text-primary">Quote</span>
                    </span>
                }
                subheading="Request a free consultation. Our team is ready to walk your yard, answer your questions, and help you design the perfect backyard."
                imageSrc="/aerial-roof.jpg"
                imageAlt="Get a quote from Premier Classic Pools"
            />
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                    Request Your Free Consultation
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our pool and outdoor living experts are here to help. Reach out
                                    and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    const content = item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-lg text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p className="text-lg text-muted-foreground">
                                            {item.content}
                                        </p>
                                    );

                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="shrink-0">
                                                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                                                    <Icon className="size-5" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {item.title}
                                                </h3>
                                                {content}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <Section className="max-w-7xl">
                    <div className="space-y-8 mb-6">
                        <div className="space-y-3 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Visit Our Location
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Find us on the map or stop by our office
                            </p>
                        </div>
                    </div>
                    <div className="w-full bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
                        <div className="w-full h-[400px] md:h-[500px]">
                            <GoogleMap businessName={companyName} address={address} />
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}
