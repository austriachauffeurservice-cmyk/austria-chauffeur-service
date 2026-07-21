import type { Metadata } from 'next'
import Link from 'next/link'
import { austrianCities, borderCities, borderCrossingDestinations } from '@/lib/content/de/service-areas'

export const metadata: Metadata = {
  title: 'Einsatzgebiete — Ganz Österreich & grenzüberschreitende Transfers',
  description:
    'Private Chauffeurabdeckung in allen neun österreichischen Bundesländern, plus lizenzierte grenzüberschreitende Transfers nach Deutschland, Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz.',
  alternates: {
    canonical: '/de/service-areas',
    languages: { en: '/service-areas', de: '/de/service-areas' },
  },
}

export default function ServiceAreasPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Einsatzgebiete
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Ganz Österreich — und über die Grenze hinaus
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Wir fahren landesweit, von Vorarlberg bis Burgenland, und verfügen über die
            Lizenzierung für alle sieben Nachbarländer Österreichs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Österreich — Inlandsabdeckung</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {austrianCities.map((c) => (
            <Link
              key={c.slug}
              href={`/de/service-areas/${c.slug}`}
              className="rounded-sm border border-brand-line p-5 transition-colors hover:border-brand-gold"
            >
              <p className="font-semibold text-brand-ink">{c.city}</p>
              <p className="text-sm text-brand-ink-2/70">{c.region}</p>
              {c.note && <p className="mt-1 text-xs text-brand-gold">{c.note}</p>}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Über Österreich hinaus
          </p>
          <h2 className="font-display mt-2 text-2xl text-white">Grenzüberschreitende Transfers</h2>
          <p className="mt-3 max-w-xl text-brand-cream/70">
            Lizenziert für internationale Abholungen und Ablieferungen — kein Fahrzeugwechsel an
            der Grenze notwendig.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {borderCrossingDestinations.map((d) => {
              const cities = borderCities.filter((c) => c.countrySlug === d.slug)
              return (
                <div
                  key={d.slug}
                  className="rounded-sm border border-white/15 bg-white/5 p-5"
                >
                  <Link
                    href={`/de/service-areas/${d.slug}`}
                    className="font-display text-lg text-white hover:text-brand-gold"
                  >
                    {d.country}
                  </Link>
                  <p className="mt-1 flex flex-wrap gap-x-1.5 text-sm text-brand-cream/80">
                    {cities.map((c, i) => (
                      <span key={c.slug}>
                        <Link href={`/de/service-areas/${c.slug}`} className="hover:text-brand-gold">
                          {c.city}
                        </Link>
                        {i < cities.length - 1 && ','}
                      </span>
                    ))}
                  </p>
                  <p className="mt-2 text-xs text-brand-gold">{d.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Ihre Strecke nicht dabei?</h2>
        <p className="mx-auto mt-2 max-w-md text-brand-ink-2/80">
          Nennen Sie uns Abhol- und Zielort — wenn es auf der Straße erreichbar ist, können wir es
          wahrscheinlich fahren.
        </p>
        <Link
          href="/de/booking"
          className="mt-6 inline-block rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Transfer anfragen
        </Link>
      </section>
    </>
  )
}
