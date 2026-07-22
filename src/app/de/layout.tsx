import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { siteName, siteUrl } from "@/lib/content/site";

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

const deDescription =
  "Buchen Sie private Chauffeurtransfers in ganz Österreich, einschließlich Flughafentransfers, Stadt-zu-Stadt-Fahrten und grenzüberschreitenden Transfers in die Nachbarländer — jede Fahrt durchgeführt von einem lizenzierten, geprüften Chauffeurpartner.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Private Transfers in ganz Österreich`,
    template: `%s | ${siteName}`,
  },
  description: deDescription,
  alternates: {
    canonical: "/de",
    languages: { en: "/", de: "/de", "x-default": "/" },
  },
  verification: {
    google: "_pBWPR8VXtw3eiSGw3MM3_pm7VKDXklp-ud2u4PpfCk",
  },
  other: {
    "geo.region": "AT",
    "geo.placename": "Wien, Österreich",
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
    locale: "de_AT",
    url: `${siteUrl}/de`,
    siteName,
    title: `${siteName} | Private Transfers in ganz Österreich`,
    description: deDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Private Transfers in ganz Österreich`,
    description: deDescription,
  },
};

export default function GermanSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="flex min-h-full flex-1 flex-col">
          <SiteHeader locale="de" />
          <main className="flex-1 pb-14 md:pb-0">{children}</main>
          <SiteFooter locale="de" />
          <MobileActionBar locale="de" />
        </div>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
