import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { defaultConfig } from "@/lib/default-config";
import Script from "next/script";

export const metadata = {
    title: "ACME Roofing",
    description:
        "Professional roofing installation, repair, and maintenance for residential and commercial properties.",
};

export default function RootLayout({ children, config = defaultConfig }) {
    return (
        <>
            <Script src="https://roofera.ai/api/chatbot/85bd9560-1d94-407c-a337-2c45f32124c9/widget" />

            <NavBar phoneNumber={config.phoneNumber} companyName={config.companyName} />
            <main className="h-full">{children}</main>
            <Footer companyName={config.companyName} />
        </>
    );
}
