import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
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

export const metadata: Metadata = {
  title: "AVIZAKTA | Modern Industrial Excellence",
  description: "Avizakta Enterprises stands at the vanguard of industrial design and technical manufacturing. We build the substrate of tomorrow's technology.",
  keywords: ["Industrial Engineering", "OEM Manufacturing", "Decobox", "Bovex", "Luxury Lighting", "Aerospace Manufacturing", "Precision Engineering", "Avizakta"],
  authors: [{ name: "Avizakta Enterprises" }],
  openGraph: {
    title: "AVIZAKTA | Modern Industrial Excellence",
    description: "Avizakta Enterprises stands at the vanguard of industrial design and technical manufacturing.",
    url: "https://avizakta.com",
    siteName: "Avizakta Enterprises",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVIZAKTA | Modern Industrial Excellence",
    description: "Avizakta Enterprises stands at the vanguard of industrial design and technical manufacturing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
