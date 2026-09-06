import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/lib/content/de/services'
import { routes } from '@/lib/content/de/routes'
import { borderCrossingDestinations } from '@/lib/content/de/service-areas'
import { skiResorts } from '@/lib/content/de/ski-resorts'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'
import { HeroQuoteCard } from '@/components/hero-quote-card'

const servicesTitle = 'Chauffeurservice-Leistungen | Flughafen-, Firmen- & Skitransfers'
const servicesDescription =
  'Unser Chauffeurservice in Österreich im Überblick: Flughafenabholungen, Stadt-zu-Stadt-Fahrten, grenzüberschreitende Fahrten und Stundenbuchung. Festpreise, professionelle Fahrer, Fuhrpark vom Sedan bis zum Kleinbus.'

export const metadata: Metadata = {
  title: servicesTitle,
  description: servicesDescription,
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/services`,
    title: servicesTitle,
    description: servicesDescription,
  },
  alternates: {
    canonical: '/de/services',
    languages: { en: '/services', de: '/de/services', 'x-default': '/services' },
  },
}

const featuredAirports = [
  { label: 'Flughafen Wien', href: '/de/airport-transfers/vienna-airport' },
  { label: 'Flughafen Salzburg', href: '/de/airport-transfers/salzburg-airport' },
  { label: 'Flughafen Innsbruck', href: '/de/airport-transfers/innsbruck-airport' },
  { label: 'Flughafen Graz', href: '/de/airport-transfers/graz-airport' },
]

const featuredRouteSlugs = ['vienna-to-salzburg', 'vienna-to-graz', 'salzburg-to-innsbruck']

const corporateUseCases = [
  'Fahrer und Fahrzeug den ganzen Tag auf Abruf, zwischen Meetings nach Ihrem Zeitplan',
  'Eine Buchung deckt Abholung, Wartezeit beim Meeting und die Rückfahrt zum Flughafen ab',
  'Luxus-Limousine für kundenorientierte Fahrten, bei denen das Auftreten zählt',
  'Vans und Kleinbusse für Teams zwischen Büros, Hotels und Veranstaltungsorten',
]

const weddingFeatures = [
  'Eine Luxus-Limousine für das Brautpaar, präzise auf Ihren Trauungsablauf abgestimmt',
  'Vans oder Kleinbusse, um Gäste zwischen den Locations zu bewegen, ohne eine Kolonne von Einzelfahrzeugen',
  'Ein Ansprechpartner für die Abfolge von Trauung, Fotolocations und Abholung zur Feier',
  'Professionelle, formell gekleidete Fahrer und makellos präsentierte Fahrzeuge',
]

const featuredResortSlugs = ['kitzbuehel', 'st-anton-am-arlberg', 'lech-zuers', 'ischgl']

const decisionTable = [
  { trip: 'Ankunft an einem österreichischen Flughafen', service: 'Flughafentransfers', href: '/de/airport-transfers' },
  { trip: 'Reisen zwischen österreichischen Städten', service: 'Stadt-zu-Stadt-Transfers', href: '/de/city-to-city-transfers' },
  { trip: 'Wien → Bratislava, Budapest oder weiter', service: 'Grenzüberschreitende Transfers', href: '/de/service-areas' },
  { trip: 'Mehrere Meetings an einem Tag', service: 'Firmenbuchung', href: '/de/corporate-transfers' },
  { trip: 'Hochzeitstransport', service: 'Veranstaltungen & Hochzeiten', href: '/de/wedding-transfers' },
  { trip: 'Flughafen → Skigebiet', service: 'Ski- & Alpintransfers', href: '/de/ski-transfers' },
]

export default function ServicesPageDe() {
  const featuredRoutes = featuredRouteSlugs
    .map((slug) => routes.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))
  const featuredResorts = featuredResortSlugs
    .map((slug) => skiResorts.find((r) => r.slug === slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))

  return (
    <>
      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Unsere Leistungen
            </p>
            <h1 className="font-display mt-2 max-w-2xl text-3xl text-brand-ink sm:text-4xl">
              Chauffeurservice für Flughafentransfers, Geschäftsfahrten &amp; individuelle Fahrten
            </h1>
            <p className="mt-4 max-w-xl text-brand-ink-2/80">
              Flughafentransfers, Stadt-zu-Stadt-Fahrten, grenzüberschreitende Reisen,
              Firmenbuchung, Veranstaltungen und Hochzeiten sowie Skitransfers in ganz Österreich
              und den Nachbarländern — ein Anbieter, ein Festpreis, unabhängig vom Service.
            </p>
          </div>
          <div className="lg:col-span-5">
            <HeroQuoteCard locale="de" title="Festpreisangebot anfragen" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-14">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">Flughafentransfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Persönlicher Empfang an jedem großen österreichischen Flughafen, inklusive
              Flugverfolgung und direkter Weiterfahrt zu Ihrem Hotel, Ihrer Wohnadresse oder
              Ihrem Anschlussziel — keine Taxischlange, keine Mitfahr-App.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Beliebte Flughafenservices
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredAirports.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {a.label}
                </Link>
              ))}
            </div>
            <Link
              href="/de/airport-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Alle Flughafentransfers →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Stadt-zu-Stadt-Transfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Direkte, private Fahrten zwischen österreichischen Städten in einem Fahrzeug — kein
              Umsteigen, keine Mitfahrgelegenheit und kein fester Fahrplan.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Beliebte Strecken
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/de/routes/${r.slug}`}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {r.from} → {r.to}
                </Link>
              ))}
            </div>
            <Link
              href="/de/city-to-city-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Alle Stadt-zu-Stadt-Strecken →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Grenzüberschreitende Transfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Lizenzierte Abholungen und Ablieferungen in Österreichs Nachbarländer, im selben
              Fahrzeug die ganze Fahrt über — kein Fahrzeugwechsel an der Grenze.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Abgedeckte Länder
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {borderCrossingDestinations.map((d) => (
                <Link
                  key={d.slug}
                  href={`/de/service-areas/${d.slug}`}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {d.country}
                </Link>
              ))}
            </div>
            <Link
              href="/de/service-areas"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Vollständige Abdeckungskarte →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Stunden- &amp; Firmenbuchung</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Ein professioneller Chauffeur und Fahrzeug den ganzen Geschäftstag über verfügbar —
              Meetings, Flughafenabholungen, Kundenbesuche und mehrere Stopps in einer Buchung.
              Stundenweise Buchung ist für einen einzelnen Tag oder wiederkehrende
              Firmenanforderungen möglich.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {corporateUseCases.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/de/corporate-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Details zur Firmen- &amp; Stundenbuchung →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Veranstaltungen &amp; Hochzeitstransport</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Pünktlicher, diskreter Transport für Hochzeiten, Konferenzen und private
              Veranstaltungen, mit einem Ansprechpartner für alle Fahrzeuge.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {weddingFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/de/wedding-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Details zum Hochzeitstransfer →
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-brand-ink">Ski- &amp; Alpintransfers</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
              Winterfeste Fahrzeuge und erfahrene Alpin-Fahrer, direkt ab dem Flughafen
              Innsbruck, Salzburg, München oder Zürich zu Ihrem Resort — mit Platz für Ski und
              Snowboards.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Beliebte Skigebiete
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredResorts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/de/ski-transfers/${r.slug}`}
                  className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold"
                >
                  {r.name}
                </Link>
              ))}
            </div>
            <Link
              href="/de/ski-transfers"
              className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Alle Skigebiete →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Den richtigen Service wählen</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Ihre Reise</th>
                  <th className="pb-3">Bester Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {decisionTable.map((row) => (
                  <tr key={row.trip}>
                    <td className="py-3 pr-4 text-brand-ink-2/80">{row.trip}</td>
                    <td className="py-3">
                      <Link href={row.href} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                        {row.service}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Unser Premium-Fuhrpark</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((v) => (
              <div key={v.type} className="rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                  <Image
                    src={`/images/fleet/${v.type}.webp`}
                    alt={v.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                      {v.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-brand-gold font-medium">
                      {v.passengers} · {v.luggage}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-ink-2/80">
                      {v.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCta
        locale="de"
        pageType="general"
        title="Individuelle Reise benötigt?"
        description="Mehrstufige Reiserouten, Roadshows, wiederkehrende Firmentransfers und weitere individuelle Anfragen können organisiert werden. Nicht sicher, welcher Service zu Ihrer Reise passt? Nennen Sie uns Abholort, Ziel und Reisedaten — wir empfehlen das passende Fahrzeug und den passenden Service."
      />
    </>
  )
}
