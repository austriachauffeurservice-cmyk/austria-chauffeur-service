import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://austriachauffeurservice.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Austria Chauffeur Service | Private Transfers Across Austria",
    template: "%s | Austria Chauffeur Service",
  },
  description:
    "Licensed private chauffeur service covering all of Austria, including airport transfers, city-to-city travel, and cross-border transfers to Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, and Switzerland.",
  keywords: [
    "chauffeur service Austria",
    "private transfer Austria",
    "airport transfer Vienna",
    "cross-border chauffeur Austria",
    "Vienna to Bratislava transfer",
    "Salzburg to Munich transfer",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Austria Chauffeur Service",
    title: "Austria Chauffeur Service | Private Transfers Across Austria",
    description:
      "Licensed private chauffeur service covering all of Austria, including cross-border transfers to neighboring countries.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
