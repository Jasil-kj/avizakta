import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Preloader from "@/components/ui/Preloader";

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <filter id="remove-black" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                1.5 1.5 1.5 0 0" />
            </filter>
          </defs>
        </svg>

        <Preloader />

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
