import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { defaultConfig } from "@/lib/default-config";
import Script from "next/script";

export const metadata = {
    title: "Premier Classic Pools & Outdoors | Custom Pool Builder in Texas",
    description:
        "Premier Classic Pools & Outdoors designs and builds custom gunite pools, outdoor living spaces, and standby power systems across the Houston area.",
};

export default function RootLayout({ children, config = defaultConfig }) {
    return (
        <>
            <Script src="https://romey.ai/api/chatbot/5aa5ef04-b808-4c7b-ac84-db65ce03f04c/widget" />

            <NavBar phoneNumber={config.phoneNumber} />
            <main className="h-full">{children}</main>
            <Footer companyName={config.companyName} />
        </>
    );
}
