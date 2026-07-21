import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Wedding Chauffeur & Transfer Service',
  description:
    'Coordinated wedding transport across Austria — bridal car, guest shuttles, and multi-vehicle timing between ceremony, photos, and reception. Fixed pricing, professional drivers.',
  alternates: {
    canonical: '/wedding-transfers',
    languages: { en: '/wedding-transfers', de: '/de/wedding-transfers' },
  },
}

const features = [
  {
    title: 'Bridal Car',
    description: 'A Luxury Sedan for the wedding couple, timed precisely to your ceremony schedule.',
  },
  {
    title: 'Guest Shuttles',
    description: 'Vans or minibuses to move guests between venues without a fleet of individual cars.',
  },
  {
    title: 'Multi-Stop Coordination',
    description: 'One point of contact to sequence ceremony, photo locations, and reception pickups.',
  },
  {
    title: 'Formal Presentation',
    description: 'Professional, formally dressed drivers and immaculately presented vehicles.',
  },
]

export default function WeddingTransfersPage() {
  const pageUrl = `${siteUrl}/wedding-transfers`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Wedding Chauffeur Transport',
          name: 'Wedding Transfers',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Wedding Transfers
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            Coordinated wedding transport, start to finish
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            From the bridal car to the last guest shuttle, we plan the timing between ceremony,
            photos, and reception so you don&apos;t have to think about transport on the day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">What&apos;s Included</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{f.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{f.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Venues We Cover</h2>
        <p className="mt-3 text-sm text-brand-ink-2/80">
          Historic palaces, vineyard estates, lakeside venues, and countryside properties across
          Austria — if your ceremony and reception are at different locations, we plan the route
          and timing between them as part of the booking.
        </p>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Recommended Vehicles</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/fleet/luxury" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Luxury Sedan — bridal car
          </Link>
          <Link href="/fleet/van" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Executive Van — small guest groups
          </Link>
          <Link href="/fleet/minibus" className="rounded-sm border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Minibus — full guest shuttle
          </Link>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Planning a wedding?</h2>
          <p className="mt-2 text-brand-cream/70">
            Tell us your ceremony and reception details — we&apos;ll put together a transport plan and
            fixed quote.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Request Wedding Transport
          </Link>
        </div>
      </section>
    </>
  )
}
