import { Geist, Geist_Mono, Audiowide, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const audiowide = Audiowide({
    variable: "--font-audiowide",
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const clashDisplay = localFont({
    src: [
        {
            path: "./fonts/ClashDisplay-Variable.woff2",
            style: "normal",
        },
    ],
    variable: "--font-clash-display",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                className={cn(
                    inter.variable,
                    audiowide.variable,
                    clashDisplay.variable,
                    "antialiased"
                )}
            >
                <Providers color="#3DCF8E">{children}</Providers>
            </body>
        </html>
    );
}
