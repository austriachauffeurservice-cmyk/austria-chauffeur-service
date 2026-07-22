import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { siteDescription, siteName, siteUrl } from "@/lib/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Private Transfers Across Austria`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "chauffeur service Austria",
    "private transfer Austria",
    "airport transfer Vienna",
    "cross-border chauffeur Austria",
    "Vienna to Bratislava transfer",
    "Salzburg to Munich transfer",
    "chauffeur service Vienna",
    "chauffeur service Salzburg",
    "chauffeur service Graz",
    "chauffeur service Innsbruck",
    "chauffeur service Linz",
    "Vienna airport transfer VIE",
    "Salzburg airport transfer",
    "Innsbruck ski transfer",
    "luxury car service Austria",
    "cross-border transfer Vienna Prague",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", de: "/de", "x-default": "/" },
  },
  verification: {
    google: "_pBWPR8VXtw3eiSGw3MM3_pm7VKDXklp-ud2u4PpfCk",
  },
  other: {
    "geo.region": "AT",
    "geo.placename": "Vienna, Austria",
    "geo.position": "48.2082;16.3738",
    ICBM: "48.2082, 16.3738",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Private Transfers Across Austria`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Private Transfers Across Austria`,
    description: siteDescription,
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="flex min-h-full flex-1 flex-col">
          <SiteHeader />
          <main className="flex-1 pb-14 md:pb-0">{children}</main>
          <SiteFooter />
          <MobileActionBar />
        </div>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
