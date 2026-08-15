import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TWC Express LLC | Licensed Carrier & Logistics",
  description:
    "TWC Express LLC is a licensed carrier offering reliable LTL and FTL freight delivery nationwide. We work with shippers and brokers alike.",
  keywords: "freight carrier, direct carrier, logistics, TWC Express, trucking company",
  openGraph: {
    title: "TWC Express LLC | Licensed Carrier & Logistics",
    description:
      "Licensed and insured LTL/FTL freight carrier serving shippers and brokers nationwide.",
    siteName: "TWC Express LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} font-sans flex flex-col min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand-orange focus:text-white focus:font-bold focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
