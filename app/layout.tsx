import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "No. 9 Market Square | Fine Dining Letterkenny, Donegal",
  description:
    "No. 9 Market Square — Award-winning fine dining restaurant in Letterkenny, Co. Donegal. Yes Chef National Award: Best Food Destination Restaurant 2026. Chef Brian McMonagle presents an intimate dining experience rooted in local Donegal produce.",
  keywords: [
    "No 9 Market Square",
    "fine dining Letterkenny",
    "restaurant Donegal",
    "Brian McMonagle chef",
    "luxury restaurant Ireland",
    "Bluestack Farm Dexter beef",
    "award winning restaurant Donegal",
    "Yes Chef Award 2026",
  ],
  authors: [{ name: "Brian McMonagle" }],
  openGraph: {
    title: "No. 9 Market Square | Fine Dining Letterkenny",
    description:
      "Award-winning fine dining in the heart of Letterkenny, Co. Donegal. Best Food Destination Restaurant 2026.",
    type: "website",
    locale: "en_IE",
    siteName: "No. 9 Market Square",
  },
  twitter: {
    card: "summary_large_image",
    title: "No. 9 Market Square | Fine Dining Letterkenny",
    description:
      "Award-winning fine dining in the heart of Letterkenny, Co. Donegal.",
    creator: "@marketlanelk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-noir-800 antialiased overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
