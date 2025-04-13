import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/HeaderSection";
import Testimonials from "@/sections/Testimonials";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Modern Design Tool Landing Page",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-zinc-900 text-zinc-300`}
      >
        <HeaderSection />
        {children}
        <Testimonials />
      <CallToAction />
      <Footer />
      </body>
    </html>
  );
}
