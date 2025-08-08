import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Şarjet - Find EV Charging Stations Instantly",
  description: "Discover nearby electric vehicle charging stations, check real-time availability, and power up your EV journey across Istanbul. Free mobile app for all EV drivers.",
  keywords: "electric vehicle, EV charging, charging stations, Istanbul, mobile app, electric car, sustainable transport",
  authors: [{ name: "Şarjet Team" }],
  openGraph: {
    title: "Şarjet - Find EV Charging Stations Instantly",
    description: "Discover nearby electric vehicle charging stations, check real-time availability, and power up your EV journey across Istanbul.",
    url: "https://sarjet.com",
    siteName: "Şarjet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Şarjet - EV Charging Station Finder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Şarjet - Find EV Charging Stations Instantly",
    description: "Discover nearby electric vehicle charging stations, check real-time availability, and power up your EV journey across Istanbul.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
