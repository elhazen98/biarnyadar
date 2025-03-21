import { Funnel_Display, Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const addfont = DM_Sans({
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "biarnyadar",
    description: "Created by chronix",
    icons: {
        icon: "/biarnyadar.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${addfont.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
