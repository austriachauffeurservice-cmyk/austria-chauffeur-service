import type { Metadata } from 'next'
import Link from 'next/link'
import { skiResorts } from '@/lib/content/de/ski-resorts'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'
import { HeroQuoteCard } from '@/components/hero-quote-card'

export const metadata: Metadata = {
  title: 'Ski- & Alpintransfers in Österreich',
  description:
    'Private Flughafen-zu-Resort-Chauffeurtransfers nach Kitzbühel, St. Anton am Arlberg, Lech-Zürs, Ischgl, Zell am See-Kaprun, Saalbach-Hinterglemm und Sölden. Winterfeste Fahrzeuge, Festpreise.',
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/ski-transfers`,
    title: 'Ski- & Alpintransfers in Österreich',
    description:
      'Private Flughafen-zu-Resort-Chauffeurtransfers nach Kitzbühel, St. Anton am Arlberg, Lech-Zürs, Ischgl, Zell am See-Kaprun, Saalbach-Hinterglemm und Sölden. Winterfeste Fahrzeuge, Festpreise.',
  },
  alternates: {
    canonical: '/de/ski-transfers',
    languages: { en: '/ski-transfers', de: '/de/ski-transfers', 'x-default': '/ski-transfers' },
  },
}

// Regions ordered by how many resorts they contain (derived from the actual
// data below), so the largest, most-searched clusters (Tirol, Salzburg) lead
// and every resort — including the less-discoverable ones — gets a labelled
// section rather than being buried in one long undifferentiated grid.
const regionPriority = ['Tirol', 'Salzburg', 'Vorarlberg', 'Kärnten', 'Steiermark']

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

export default function SkiTransfersPageDe() {
  const groups = groupByRegion(skiResorts)
  return (
    <>
      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Ski- & Alpintransfers
            </p>
            <h1 className="font-display mt-2 max-w-2xl text-3xl sm:text-4xl">
              Skitransfers in Österreich
            </h1>
            <p className="mt-4 max-w-xl text-brand-cream/80">
              Private Flughafen-zu-Resort-Chauffeurtransfers den ganzen Winter über — winterfeste
              Fahrzeuge, erfahrene Alpinfahrer und Platz für Ski und Snowboards, direkt ab
              Innsbruck, Salzburg, München oder Zürich zu Ihrem Resort.
            </p>
          </div>
          <div className="lg:col-span-5">
            <HeroQuoteCard locale="de" title="Festpreisangebot anfragen" />
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
                    href={`/de/ski-transfers/${r.slug}`}
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
                      Nächster Flughafen: {r.nearestAirports[0].name} ({r.nearestAirports[0].driveTime})
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingCta
        locale="de"
        pageType="ski"
        title="Ihr Resort nicht dabei?"
        description="Nennen Sie uns Flughafen und Resort — wenn es auf der Straße erreichbar ist, können wir es fahren."
      />
    </>
  )
}
