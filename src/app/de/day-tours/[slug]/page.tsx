import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { dayTours } from '@/lib/content/de/day-tours'
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

  return {
    title: `Tagesausflug ${tour.name} ab ${tour.startingPoints[0].from}`,
    description: `${tour.tagline} Privater Chauffeur-Tagesausflug, ${tour.startingPoints[0].driveTime} ab ${tour.startingPoints[0].from}, Festpreise.`,
    alternates: {
      canonical: `/de/day-tours/${slug}`,
      languages: { en: `/day-tours/${slug}`, de: `/de/day-tours/${slug}` },
    },
  }
}

export default async function DayTourPageDe({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const tour = dayTours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const pageUrl = `${siteUrl}/de/day-tours/${slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/de` },
            { '@type': 'ListItem', position: 2, name: 'Tagesausflüge', item: `${siteUrl}/de/day-tours` },
            { '@type': 'ListItem', position: 3, name: tour.name, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: `Tagesausflug ${tour.name}`,
          description: tour.tagline,
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          url: pageUrl,
          touristType: 'Day Trip',
        }}
      />

      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            {tour.region} · Tagesausflug
          </p>
          <h1 className="font-display mt-2 text-3xl sm:text-4xl">Tagesausflug {tour.name}</h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">{tour.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-brand-ink">Ausgangspunkte</h2>
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
          <h2 className="font-display text-xl text-brand-ink">Vorgeschlagener Ablauf</h2>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Beste Reisezeit</p>
          <p className="mt-2 text-sm text-brand-ink-2/80">{tour.bestTime}</p>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Sehenswertes vor Ort</h2>
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
              Buchen Sie Ihren {tour.name}-Tagesausflug
            </h2>
            <p className="mt-2 text-brand-ink-2/80">
              Senden Sie Wunschtermin und Ausgangspunkt — wir bestätigen Ablauf und Festpreis per
              E-Mail.
            </p>
          </div>
          <Link
            href={`/de/booking?to=${encodeURIComponent(`Tagesausflug ${tour.name}`)}`}
            className="shrink-0 rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
