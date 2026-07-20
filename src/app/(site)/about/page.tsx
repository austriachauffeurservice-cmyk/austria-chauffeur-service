import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Austria Chauffeur Service provides licensed, professional private transfers across Austria and across its borders.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    title: 'Licensed & Insured',
    description:
      'Every vehicle and driver operates under full commercial licensing for domestic and cross-border passenger transport.',
  },
  {
    title: 'Punctual by Default',
    description:
      'Flights are tracked automatically for airport transfers, and drivers plan routes around real-time traffic.',
  },
  {
    title: 'Fixed, Transparent Pricing',
    description:
      'You know the price before you travel — no meters, no surprise cross-border surcharges.',
  },
  {
    title: 'Multilingual Drivers',
    description:
      'German and English spoken on every route, with additional languages available on request.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              About Us
            </p>
            <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
              Built for Austria, ready for the border
            </h1>
            <p className="mt-5 text-brand-ink-2/80 leading-relaxed">
              Austria Chauffeur Service was founded to give travelers, executives, and event
              organizers one dependable way to move around the country — and into its neighbors —
              without switching providers.
            </p>
            <p className="mt-4 text-brand-ink-2/70 text-sm leading-relaxed">
              Our fleet is fully licensed and winter-ready, operated by professional drivers who speak English and German, ensuring premium security, comfort, and luxury on every route.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-lg">
            <Image
              src="/images/hero/vienna-palace.png"
              alt="Premium Private Chauffeur in Vienna, Austria"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-sm border border-brand-line p-6">
              <h3 className="font-semibold text-brand-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Questions before you book?
            </h2>
            <p className="mt-2 text-brand-cream/70">We&apos;re happy to plan the route with you.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-sm bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
