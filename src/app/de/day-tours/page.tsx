import type { Metadata } from 'next'
import Link from 'next/link'
import { dayTours } from '@/lib/content/de/day-tours'
import { siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Private Tagesausflüge ab Wien & Salzburg',
  description:
    'Chauffeurgeführte Tagesausflüge nach Hallstatt, in die Wachau und nach Salzburg — Privatfahrzeug, flexible Zeitplanung, im Voraus vereinbarter Festpreis.',
  alternates: { canonical: '/de/day-tours', languages: { en: '/day-tours', de: '/de/day-tours', 'x-default': '/day-tours' } },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/day-tours`,
    title: 'Private Tagesausflüge ab Wien & Salzburg',
    description:
      'Chauffeurgeführte Tagesausflüge nach Hallstatt, in die Wachau und nach Salzburg — Privatfahrzeug, flexible Zeitplanung, im Voraus vereinbarter Festpreis.',
  },
}

export default function DayToursPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Tagesausflüge
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Erleben Sie mehr von Österreich an einem einzigen Tag
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Ein privates Fahrzeug mit Fahrer für den ganzen Tag — kein fester Reisebus-Fahrplan,
            keine Gruppengröße zum Abstimmen. Wir warten, während Sie erkunden, und fahren Sie
            zurück, wenn Sie bereit sind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dayTours.map((tour) => (
            <Link
              key={tour.slug}
              href={`/de/day-tours/${tour.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {tour.region}
              </p>
              <h2 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {tour.name}
              </h2>
              <p className="mt-2 text-sm text-brand-ink-2/70">{tour.tagline}</p>
              <p className="mt-4 text-xs font-semibold text-brand-ink-2/60">
                Ab {tour.startingPoints[0].from} — {tour.startingPoints[0].driveTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Haben Sie ein anderes Ziel im Sinn?</h2>
          <p className="mt-2 text-brand-cream/70">
            Sagen Sie uns, wohin Sie möchten und wie lange — wir erstellen einen Tagesplan und
            einen Festpreis.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Tagesausflug anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
