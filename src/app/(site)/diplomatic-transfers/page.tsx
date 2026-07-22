import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Diplomatic & Embassy Transport in Vienna',
  description:
    'Discreet, punctual chauffeur transport for diplomatic missions, international organizations, and conference delegations in Vienna. Multilingual drivers, fixed pricing.',
  alternates: {
    canonical: '/diplomatic-transfers',
    languages: { en: '/diplomatic-transfers', de: '/de/diplomatic-transfers', 'x-default': '/diplomatic-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/diplomatic-transfers`,
    title: 'Diplomatic & Embassy Transport in Vienna',
    description:
      'Discreet, punctual chauffeur transport for diplomatic missions, international organizations, and conference delegations in Vienna. Multilingual drivers, fixed pricing.',
  },
}

const audiences = [
  'Embassies and diplomatic missions in Vienna',
  'Delegates attending conferences at the Vienna International Centre (UN Vienna), OPEC, or OSCE',
  'International organization staff needing recurring transport',
  'Visiting officials and delegations requiring discreet, scheduled transfers',
]

const features = [
  {
    title: 'Discretion',
    description: 'No branding on request, direct routing, and drivers accustomed to confidential itineraries.',
  },
  {
    title: 'Punctuality',
    description: 'Fixed pickup times with flight tracking for arrivals, so schedules built around your transfer hold.',
  },
  {
    title: 'Multilingual Drivers',
    description: 'English and German as standard, with additional languages available on request.',
  },
  {
    title: 'Recurring Bookings',
    description: 'Set up a corporate account for missions or organizations booking transport regularly.',
  },
]

export default function DiplomaticTransfersPage() {
  const pageUrl = `${siteUrl}/diplomatic-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Diplomatic Chauffeur Transport',
          name: 'Diplomatic & Embassy Transport',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'City', name: 'Vienna' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Diplomatic & Embassy Transport
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">
            Discreet transport for Vienna&apos;s diplomatic community
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Vienna is home to the Vienna International Centre — one of four United Nations
            headquarters — along with OPEC, the OSCE, and dozens of embassies. That makes
            reliable, discreet transport a routine need, not a special request.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Who This Is For</h2>
        <ul className="mt-4 space-y-2 text-sm text-brand-ink-2">
          {audiences.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {a}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-12 text-xl text-brand-ink">What to Expect</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{f.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-sm border border-brand-line bg-brand-cream p-6">
          <p className="font-semibold text-brand-ink">Booking regularly for a mission or organization?</p>
          <p className="mt-1.5 text-sm text-brand-ink-2/70">
            Set up a corporate account for consolidated invoicing and a single point of contact.
          </p>
          <Link
            href="/corporate-accounts"
            className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            View corporate accounts →
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Arrange a transfer</h2>
          <p className="mt-2 text-brand-ink-2/80">
            Submit your details and we&apos;ll confirm availability, routing, and a fixed price by email.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
