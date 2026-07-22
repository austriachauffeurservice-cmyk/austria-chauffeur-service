import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { dayTours } from '@/lib/content/day-tours'
import { siteName, siteUrl } from '@/lib/content/site'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return dayTours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const tour = dayTours.find((t) => t.slug === slug)
  if (!tour) return {}

  const canonical = `/day-tours/${slug}`
  const title = `${tour.name} Day Trip from ${tour.startingPoints[0].from}`
  const description = `${tour.tagline} Private chauffeur day tour, ${tour.startingPoints[0].driveTime} from ${tour.startingPoints[0].from}, fixed pricing.`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { en: canonical, de: `/de/day-tours/${slug}`, 'x-default': canonical },
    },
    openGraph: { type: 'website', siteName, locale: 'en_US', url: `${siteUrl}${canonical}`, title, description },
  }
}

export default async function DayTourPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const tour = dayTours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const pageUrl = `${siteUrl}/day-tours/${slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Day Tours', item: `${siteUrl}/day-tours` },
            { '@type': 'ListItem', position: 3, name: tour.name, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: `${tour.name} Day Trip`,
          description: tour.tagline,
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          url: pageUrl,
          touristType: 'Day Trip',
        }}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            {tour.region} · Day Tour
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">{tour.name} Day Trip</h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">{tour.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Starting Points</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {tour.startingPoints.map((sp) => (
                <li key={sp.from} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {sp.from} — {sp.distance}, {sp.driveTime}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-brand-ink">Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-ink-2">
              {tour.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-xl text-brand-ink">Suggested Itinerary</h2>
          <ol className="mt-3 space-y-3 text-sm text-brand-ink-2">
            {tour.itinerary.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cream text-[10px] font-semibold text-brand-gold border border-brand-line">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 rounded-sm border border-brand-line bg-brand-cream p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Best Time to Visit</p>
          <p className="mt-2 text-sm text-brand-ink-2/80">{tour.bestTime}</p>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">What to See There</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tour.attractions.map((a) => (
              <div key={a.name} className="rounded-sm border border-brand-line p-5">
                <p className="font-semibold text-brand-ink">{a.name}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">
              Book your {tour.name} day tour
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Submit your preferred date and starting point — we&apos;ll confirm the itinerary and
              a fixed price by email.
            </p>
          </div>
          <Link
            href={`/booking?to=${encodeURIComponent(`${tour.name} Day Tour`)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Request a Transfer
          </Link>
        </div>
      </section>
    </>
  )
}
