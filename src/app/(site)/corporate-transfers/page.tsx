import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Corporate & Hourly Chauffeur Hire',
  description:
    'Hourly and day-rate chauffeur hire for meetings, roadshows, and multi-stop business days across Austria. Fixed pricing, professional drivers, corporate accounts available.',
  alternates: {
    canonical: '/corporate-transfers',
    languages: { en: '/corporate-transfers', de: '/de/corporate-transfers', 'x-default': '/corporate-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/corporate-transfers`,
    title: 'Corporate & Hourly Chauffeur Hire',
    description:
      'Hourly and day-rate chauffeur hire for meetings, roadshows, and multi-stop business days across Austria. Fixed pricing, professional drivers, corporate accounts available.',
  },
}

const useCases = [
  {
    title: 'Roadshows & Multi-Stop Days',
    description: 'A driver and vehicle on standby all day, moving between meetings on your schedule.',
  },
  {
    title: 'Airport-to-Meeting-to-Airport',
    description: 'One booking covers pickup, waiting time at the meeting, and the return airport run.',
  },
  {
    title: 'Executive & Client Travel',
    description: 'Luxury Sedan options for client-facing trips where presentation matters.',
  },
  {
    title: 'Team & Conference Transport',
    description: 'Vans and minibuses for moving teams between offices, hotels, and event venues.',
  },
]

export default function CorporateTransfersPage() {
  const pageUrl = `${siteUrl}/corporate-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Corporate Chauffeur Hire',
          name: 'Corporate & Hourly Chauffeur Hire',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Corporate & Hourly Hire
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            A driver on standby for your business day
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Billed by the hour instead of per trip — ideal when your schedule has multiple stops,
            waiting time, or last-minute changes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Common Use Cases</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {useCases.map((u) => (
            <div key={u.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{u.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{u.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Recommended Vehicles</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/fleet/sedan" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Business Sedan
          </Link>
          <Link href="/fleet/luxury" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Luxury Sedan
          </Link>
          <Link href="/fleet/minibus" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Minibus for teams
          </Link>
        </div>

        <div className="mt-10 rounded-sm border border-brand-line bg-brand-cream p-6">
          <p className="font-semibold text-brand-ink">Booking regularly for your company?</p>
          <p className="mt-1.5 text-sm text-brand-ink-2/70">
            Set up a corporate account for consolidated invoicing and priority dispatch.
          </p>
          <Link
            href="/corporate-accounts"
            className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            View corporate accounts →
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Need a driver for the day?</h2>
          <p className="mt-2 text-brand-cream/70">
            Note your hourly hire needs in the booking form and we&apos;ll quote it separately.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Request Hourly Hire
          </Link>
        </div>
      </section>
    </>
  )
}
