import type { Metadata } from 'next'
import Link from 'next/link'
import { skiResorts } from '@/lib/content/ski-resorts'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'
import { HeroQuoteCard } from '@/components/hero-quote-card'

export const metadata: Metadata = {
  title: 'Ski & Alpine Transfers in Austria',
  description:
    'Private airport-to-resort chauffeur transfers to Kitzbühel, St. Anton am Arlberg, Lech-Zürs, Ischgl, Zell am See-Kaprun, Saalbach-Hinterglemm, and Sölden. Winter-ready vehicles, fixed pricing.',
  alternates: { canonical: '/ski-transfers', languages: { en: '/ski-transfers', de: '/de/ski-transfers', 'x-default': '/ski-transfers' } },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/ski-transfers`,
    title: 'Ski & Alpine Transfers in Austria',
    description:
      'Private airport-to-resort chauffeur transfers to Kitzbühel, St. Anton am Arlberg, Lech-Zürs, Ischgl, Zell am See-Kaprun, Saalbach-Hinterglemm, and Sölden. Winter-ready vehicles, fixed pricing.',
  },
}

// Regions ordered by how many resorts they contain (derived from the actual
// data below), so the largest, most-searched clusters (Tyrol, Salzburg) lead
// and every resort — including the less-discoverable ones — gets a labelled
// section rather than being buried in one long undifferentiated grid.
const regionPriority = ['Tyrol', 'Salzburg', 'Vorarlberg', 'Carinthia', 'Styria']

function groupByRegion<T extends { region: string }>(items: T[]): { region: string; items: T[] }[] {
  const regions = Array.from(new Set(items.map((r) => r.region))).sort((a, b) => {
    const ai = regionPriority.indexOf(a)
    const bi = regionPriority.indexOf(b)
    if (ai !== -1 && bi !== -1) return ai - bi
    if (ai !== -1) return -1
    if (bi !== -1) return 1
    return a.localeCompare(b)
  })
  return regions.map((region) => ({ region, items: items.filter((r) => r.region === region) }))
}

export default function SkiTransfersPage() {
  const groups = groupByRegion(skiResorts)
  return (
    <>
      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Ski & Alpine Transfers
            </p>
            <h1 className="font-display mt-2 max-w-2xl text-3xl sm:text-4xl">
              Austria Ski Transfers
            </h1>
            <p className="mt-4 max-w-xl text-brand-cream/80">
              Private, airport-to-resort chauffeur transfers all winter long — winter-ready
              vehicles, experienced alpine drivers, and space for skis and boards, direct from
              Innsbruck, Salzburg, Munich, or Zurich to your resort.
            </p>
          </div>
          <div className="lg:col-span-5">
            <HeroQuoteCard title="Request a Fixed Quote" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.region}>
              <h2 className="font-display text-xl text-brand-ink border-b border-brand-line pb-3">
                {group.region}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/ski-transfers/${r.slug}`}
                    className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      {r.region}
                    </p>
                    <h3 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-ink-2/70">{r.skiArea}</p>
                    <p className="mt-4 text-xs font-semibold text-brand-ink-2/60">
                      Nearest airport: {r.nearestAirports[0].name} ({r.nearestAirports[0].driveTime})
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingCta
        pageType="ski"
        title="Heading to a resort not listed?"
        description="Tell us your airport and resort — if it's reachable by road, we can drive it."
      />
    </>
  )
}
