import type { Metadata } from 'next'
import Link from 'next/link'
import { routes } from '@/lib/content/de/routes'

export const metadata: Metadata = {
  title: 'Beliebte Chauffeur-Strecken',
  description:
    'Entfernung, Fahrzeit und Streckendetails für die meistgebuchten privaten Chauffeurstrecken in Österreich und grenzüberschreitend in die Nachbarländer.',
  alternates: { canonical: '/de/routes', languages: { en: '/routes', de: '/de/routes' } },
}

export default function RoutesPageDe() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Beliebte Strecken
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
            Entfernung, Fahrzeit und Streckendetails
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Die meistangefragten Chauffeurstrecken in Österreich und in die Nachbarländer — mit
            echten Entfernungen, Fahrzeiten und was Sie unterwegs erwartet.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Link
              key={r.slug}
              href={`/de/routes/${r.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-5 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <h2 className="font-semibold text-brand-ink group-hover:text-brand-gold text-sm">
                {r.from} → {r.to}
              </h2>
              <p className="mt-1 text-xs font-mono text-brand-ink-2/60">
                {r.distance} · {r.driveTime}
              </p>
              {r.crossBorder && (
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-brand-gold">
                  Grenzüberschreitend
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-ink py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl text-white">Ihre Strecke nicht dabei?</h2>
          <p className="mt-2 text-brand-cream/70">
            Nennen Sie uns Abhol- und Zielort — wenn es auf der Straße erreichbar ist, können wir es fahren.
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
