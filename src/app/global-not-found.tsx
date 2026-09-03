import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Used for any URL that doesn't match a route in *any* of this app's three
// independent root layouts — (site), de, and admin each define their own
// <html>, so there's no single layout for a normal not-found.tsx to compose
// into. See node_modules/next/dist/docs/.../file-conventions/not-found.md
// ("multiple root layouts") and the matching `experimental.globalNotFound`
// flag in next.config.ts. Next.js injects `<meta name="robots" content="noindex">`
// on this page automatically.
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page Not Found | Austria Chauffeur Service",
  description: "The page you're looking for doesn't exist or may have moved.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <section className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
          <p className="font-display text-6xl text-brand-gold">404</p>
          <h1 className="font-display mt-4 text-2xl text-brand-ink sm:text-3xl">
            This page took a wrong turn
          </h1>
          <p className="mt-3 max-w-md text-sm text-brand-ink-2/80">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
            >
              Back to Home
            </Link>
            <Link
              href="/de"
              className="rounded-sm border border-brand-line px-6 py-3 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold"
            >
              Zur deutschen Startseite
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
