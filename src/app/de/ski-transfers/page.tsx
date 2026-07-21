import type { Metadata } from 'next'
import Link from 'next/link'
import { skiResorts } from '@/lib/content/de/ski-resorts'

export const metadata: Metadata = {
  title: 'Ski- & Alpintransfers in Österreich',
  description:
    'Private Flughafen-zu-Resort-Chauffeurtransfers nach Kitzbühel, St. Anton am Arlberg, Lech-Zürs, Ischgl, Zell am See-Kaprun, Saalbach-Hinterglemm und Sölden. Winterfeste Fahrzeuge, Festpreise.',
  alternates: {
    canonical: '/de/ski-transfers',
    languages: { en: '/ski-transfers', de: '/de/ski-transfers' },
  },
}

export default function SkiTransfersPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Ski- & Alpintransfers
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl sm:text-4xl">
            Private Flughafen-zu-Resort-Transfers, den ganzen Winter über
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Winterfeste Fahrzeuge, erfahrene Alpinfahrer und Platz für Ski und Snowboards — direkt
            ab Innsbruck, Salzburg, München oder Zürich zu Ihrem Resort.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skiResorts.map((r) => (
            <Link
              key={r.slug}
              href={`/de/ski-transfers/${r.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {r.region}
              </p>
              <h2 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {r.name}
              </h2>
              <p className="mt-2 text-sm text-brand-ink-2/70">{r.skiArea}</p>
              <p className="mt-4 text-xs font-semibold text-brand-ink-2/60">
                Nächster Flughafen: {r.nearestAirports[0].name} ({r.nearestAirports[0].driveTime})
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Ihr Resort nicht dabei?</h2>
          <p className="mt-2 text-brand-ink-2/80">
            Nennen Sie uns Flughafen und Resort — wenn es auf der Straße erreichbar ist, können wir es fahren.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
