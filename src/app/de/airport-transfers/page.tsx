import type { Metadata } from 'next'
import Link from 'next/link'
import { airports } from '@/lib/content/de/airports'

export const metadata: Metadata = {
  title: 'Flughafentransfers — Privater Chauffeur in ganz Österreich',
  description:
    'Private Empfangsservice-Abholung an den Flughäfen Wien, Salzburg, Innsbruck, Graz, Linz und Klagenfurt. Flugverfolgung, Festpreise, kein Warten in der Taxischlange.',
  alternates: {
    canonical: '/de/airport-transfers',
    languages: { en: '/airport-transfers', de: '/de/airport-transfers' },
  },
}

export default function AirportTransfersPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Flughafentransfers
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Persönlicher Empfang an jedem großen österreichischen Flughafen
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Inklusive Flugverfolgung, sodass wir uns automatisch an Verspätungen anpassen. Ihr
            Chauffeur wartet in der Ankunftshalle mit einem Namensschild — keine Taxischlange,
            keine Mitfahr-App.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {airports.map((a) => (
            <Link
              key={a.slug}
              href={`/de/airport-transfers/${a.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {a.code} · {a.region}
              </p>
              <h2 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {a.name}
              </h2>
              <p className="mt-2 text-sm text-brand-ink-2/70">{a.distanceFromCity}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Ankunft an einem anderen Flughafen?</h2>
          <p className="mt-2 text-brand-cream/70">
            Wir holen auch von den Flughäfen München, Zürich, Bratislava und Budapest für
            grenzüberschreitende Fahrten nach Österreich ab.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
          >
            Transfer anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
