import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingForm } from '@/components/booking-form'
import { ServiceIcon } from '@/components/service-icon'
import { JsonLd } from '@/components/json-ld'
import { HeroBackground } from '@/components/hero-background'
import { TrustBadges } from '@/components/trust-badges'
import { FaqAccordion } from '@/components/faq-accordion'
import { serviceTypes, vehicles } from '@/lib/content/de/services'
import { faqs } from '@/lib/content/de/faq'
import { testimonials } from '@/lib/content/de/testimonials'
import { austrianCities, borderCrossingDestinations } from '@/lib/content/de/service-areas'
import { areaServedCountries, contactEmail, siteName, siteUrl } from '@/lib/content/site'

const pageDescription =
  'Privater Chauffeurservice in Österreich für Flughafentransfers, Geschäftsfahrten und grenzüberschreitende Fahrten. Festpreise, lizenzierte Chauffeure — jetzt anfragen.'

const serviceHrefs = [
  '/de/airport-transfers',
  '/de/city-to-city-transfers',
  '/de/service-areas',
  '/de/corporate-transfers',
  '/de/wedding-transfers',
  '/de/ski-transfers',
]

const featuredDestinationSlugs = [
  'vienna',
  'salzburg',
  'innsbruck',
  'graz',
  'linz',
  'klagenfurt',
  'hallstatt',
  'wachau-region',
  'woerthersee',
  'bregenz',
]

export const metadata: Metadata = {
  title: 'Chauffeurservice Österreich | Privater Chauffeur & Fahrservice',
  description: pageDescription,
  alternates: {
    canonical: '/de',
    languages: { en: '/', de: '/de', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: `${siteUrl}/de`,
    siteName,
    title: 'Chauffeurservice Österreich | Privater Chauffeur & Fahrservice',
    description: pageDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffeurservice Österreich | Privater Chauffeur & Fahrservice',
    description: pageDescription,
  },
}

const popularRoutes: { label: string; distance: string; duration: string; href: string }[] = [
  { label: 'Wien → Salzburg', distance: '~295 km', duration: '~2 Std. 45 Min.', href: '/de/routes/vienna-to-salzburg' },
  { label: 'Wien → Bratislava', distance: '~80 km', duration: '~1 Std.', href: '/de/routes/vienna-to-bratislava' },
  { label: 'Flughafen Wien → Bratislava', distance: '~65 km', duration: '~45–60 Min.', href: '/de/routes/vienna-airport-to-bratislava' },
  { label: 'Salzburg → München', distance: '~145 km', duration: '~1 Std. 30 Min.', href: '/de/routes/salzburg-to-munich' },
  { label: 'Flughafen Innsbruck → Kitzbühel', distance: '~90 km', duration: '~1 Std.', href: '/de/routes/innsbruck-airport-to-kitzbuehel' },
  { label: 'Wien → Budapest', distance: '~245 km', duration: '~2 Std. 30 Min.–3 Std.', href: '/de/routes/vienna-to-budapest' },
  { label: 'Wien → Prag', distance: '~310 km', duration: '~3 Std. 15 Min.', href: '/de/routes/vienna-to-prague' },
  { label: 'Bregenz → Flughafen Zürich', distance: '~120 km', duration: '~1 Std. 15 Min.', href: '/de/routes/bregenz-to-zurich-airport' },
]

export default function HomePageDe() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': ['LocalBusiness', 'TaxiService'],
          '@id': `${siteUrl}/#organization`,
          name: siteName,
          url: siteUrl,
          image: `${siteUrl}/logo.webp`,
          description: pageDescription,
          areaServed: areaServedCountries.map((name) => ({ '@type': 'Country', name })),
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-line bg-brand-ink text-white">
        <HeroBackground />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Privater Fahrservice in Österreich
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Chauffeurservice in ganz Österreich.
              <br />
              Auch über die Grenze.
            </h1>
            <p className="mt-5 max-w-md text-brand-cream/80">
              Private Chauffeurtransfers ab dem Flughafen Wien (VIE) und Zielen in ganz Österreich,
              mit lizenzierter Partnerabdeckung für grenzüberschreitende Fahrten nach Deutschland,
              Tschechien, Slowakei, Ungarn, Slowenien, Italien und in die Schweiz &amp;
              Liechtenstein. Festpreise, professionelle Fahrer, inklusive Flugverfolgung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/de/booking"
                className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
              >
                Transfer anfragen
              </Link>
              <Link
                href="/de/service-areas"
                className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
              >
                Einsatzgebiet ansehen
              </Link>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cream/80 hover:text-brand-gold"
            >
              <ServiceIcon name="mail" className="h-4 w-4" />
              Heute noch nötig? E-Mail: {contactEmail}
            </a>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-brand-gold">9</dt>
                <dd className="text-brand-cream/70">Bundesländer abgedeckt</dd>
              </div>
              <div>
                <dt className="text-brand-gold">7</dt>
                <dd className="text-brand-cream/70">Nachbarländer</dd>
              </div>
              <div>
                <dt className="text-brand-gold">24/7</dt>
                <dd className="text-brand-cream/70">Buchungsanfragen</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-sm bg-white p-6 text-brand-ink sm:p-8">
            <p className="font-display text-xl">Buchung anfragen</p>
            <p className="mt-1 text-sm text-brand-ink-2/70">
              Keine Zahlung erforderlich — wir bestätigen zunächst die Verfügbarkeit.
            </p>
            <div className="mt-6">
              <BookingForm locale="de" />
            </div>
          </div>
        </div>
      </section>

      <TrustBadges locale="de" />

      {/* Service types */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Unser Angebot
          </p>
          <h2 className="font-display mt-2 text-3xl text-brand-ink">
            Ein Service, das ganze Land — und darüber hinaus
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((s, i) => (
            <Link
              key={s.title}
              href={serviceHrefs[i] ?? '/de/services'}
              className="rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur text-brand-gold shadow-sm border border-brand-line">
                  <ServiceIcon name={s.icon} />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">
                    {s.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/de/services"
            className="text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            Chauffeurservice im Detail →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Warum wir
              </p>
              <h2 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                Erstklassige Zuverlässigkeit auf jedem Kilometer
              </h2>
              <p className="mt-4 text-brand-ink-2/80 text-sm leading-relaxed max-w-xl">
                Wir verbinden professionelle Chauffeurstandards mit lokaler österreichischer
                Streckenkenntnis für zuverlässige Privattransfers in ganz Österreich und darüber
                hinaus.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="star" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Feste Pauschalpreise</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      Bestätigte Preise vor der Buchung, inklusive anfallender Mautgebühren und
                      üblicher Straßenabgaben — keine Grenzzuschläge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="plane" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base font-display">Flugverfolgung</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      Wir überwachen Ankunftszeiten automatisch. Bei Verspätung passen wir uns an.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="route" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Grenzüberschreitendes Netzwerk</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      Lizenzierte Partnerabdeckung für internationale Abholungen und Ablieferungen
                      in 7 Nachbarländern.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="briefcase" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base font-display">Professionelle Fahrer</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      Englisch- und deutschsprachige professionelle Fahrer mit Erfahrung im
                      Premium-Chauffeurservice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-cream shadow-md lg:col-span-5 group">
              <Image
                src="/images/why-choose-us.webp"
                alt="Armaturenbrett eines luxuriösen Chauffeurfahrzeugs"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-cream border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Einfacher Ablauf
              </p>
              <h2 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                So buchen Sie Ihren Privattransfer
              </h2>
              <p className="mt-4 text-brand-ink-2/80 text-sm leading-relaxed max-w-xl">
                Unser Buchungsprozess ist schnell, unkompliziert und vollständig anpassbar. Wir
                bestätigen alles, bevor es verbindlich wird.
              </p>

              <div className="mt-8 space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-line/50">
                <div className="relative flex gap-6 pl-12 group">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-gold border border-brand-line shadow-sm font-display font-semibold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-ink group-hover:scale-105 select-none">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Transfer anfragen</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed max-w-lg">
                      Geben Sie Abhol- und Zielort ein, wählen Sie Ihr gewünschtes Fahrzeug
                      (Business-Limousine, Luxus-Limousine, Executive Van oder Kleinbus) und Ihre
                      Reisedaten.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 pl-12 group">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-gold border border-brand-line shadow-sm font-display font-semibold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-ink group-hover:scale-105 select-none">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Festpreis erhalten</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed max-w-lg">
                      Wir prüfen die Fahrerverfügbarkeit und senden Ihnen ein bestätigtes
                      Festpreisangebot per E-Mail. Keine Zahlung oder Kreditkartendaten für die Anfrage nötig.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 pl-12 group">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-gold border border-brand-line shadow-sm font-display font-semibold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-ink group-hover:scale-105 select-none">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Ihren Chauffeur treffen</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed max-w-lg">
                      Ihr Fahrer empfängt Sie am Abholort und bringt Sie direkt an Ihr Ziel — ohne
                      Mitfahrgelegenheit, ohne Fahrzeugwechsel. Wir verfolgen Ihre Flugankunft
                      automatisch, sodass eine Verspätung Sie nichts extra kostet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <div className="w-full max-w-[300px] h-[520px] bg-brand-ink rounded-[40px] border-[8px] border-brand-line shadow-2xl relative overflow-hidden flex flex-col p-4 group select-none hover:shadow-brand-gold/10 hover:border-brand-gold transition-all duration-500">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-brand-ink border-b border-brand-line/30 rounded-full z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                </div>

                <div className="relative flex-grow rounded-[28px] bg-brand-ink-2 overflow-hidden flex flex-col p-4 justify-between border border-white/5">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40"></div>

                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <svg className="w-full h-full" viewBox="0 0 200 300" fill="none">
                      <style dangerouslySetInnerHTML={{__html: `
                        @keyframes dash {
                          to {
                            stroke-dashoffset: 0;
                          }
                        }
                      `}} />
                      <path
                        d="M 30,240 C 60,200 60,100 100,80 C 140,60 170,120 170,140"
                        stroke="rgba(212,175,55,0.15)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 30,240 C 60,200 60,100 100,80 C 140,60 170,120 170,140"
                        stroke="rgb(212,175,55)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="250"
                        strokeDashoffset="250"
                        style={{ animation: 'dash 6s ease-in-out infinite' }}
                      />
                      <circle cx="30" cy="240" r="6" fill="#ffffff" stroke="rgb(212,175,55)" strokeWidth="3" />
                      <circle cx="170" cy="140" r="6" fill="rgb(212,175,55)" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex justify-between items-center text-[10px] text-white/40 border-b border-white/5 pb-2">
                    <span>AUSTRIA CHAUFFEUR</span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      LIVE-STATUS
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3 mt-4 flex-grow flex flex-col justify-end">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 transform transition-all duration-500 hover:scale-105 hover:bg-white/10">
                      <p className="text-[9px] uppercase tracking-wider text-brand-gold font-medium">Schritt 1: Abholung</p>
                      <p className="text-white text-xs font-semibold mt-0.5">Flughafen Wien (VIE)</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 transform transition-all duration-500 hover:scale-105 hover:bg-white/10">
                      <p className="text-[9px] uppercase tracking-wider text-brand-gold font-medium">Schritt 2: Gewählte Flotte</p>
                      <p className="text-white text-xs font-semibold mt-0.5">Mercedes S-Klasse Limousine</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 transform transition-all duration-500 hover:scale-105 hover:bg-white/10">
                      <p className="text-[9px] uppercase tracking-wider text-emerald-400 font-medium flex justify-between">
                        <span>Schritt 3: Servicestatus</span>
                        <span className="font-semibold font-mono">FESTPREIS</span>
                      </p>
                      <p className="text-white text-xs font-semibold mt-0.5 flex justify-between">
                        <span>Chauffeur bereit</span>
                        <span className="text-brand-gold">€120,00</span>
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 pt-3 border-t border-white/5">
                    <button className="w-full py-2.5 bg-brand-gold hover:bg-brand-gold-light text-brand-ink text-xs font-bold rounded-lg tracking-wider transition-all duration-300 shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/20 flex items-center justify-center gap-1 active:scale-95">
                      <span>TRANSFER ANFRAGEN</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/coverage.webp"
                alt="Österreich und europäische grenzüberschreitende Privattransfer-Abdeckungskarte"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  Inlandsabdeckung
                </p>
                <h2 className="font-display mt-2 text-2xl text-brand-ink">
                  Beliebte österreichische Ziele
                </h2>
                <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-brand-ink-2">
                  {austrianCities
                    .filter((c) => featuredDestinationSlugs.includes(c.slug))
                    .sort((a, b) => featuredDestinationSlugs.indexOf(a.slug) - featuredDestinationSlugs.indexOf(b.slug))
                    .map((c) => (
                      <li key={c.slug} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand-gold" />
                        <Link href={`/de/service-areas/${c.slug}`} className="hover:text-brand-gold">
                          {c.city}
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link
                  href="/de/service-areas"
                  className="mt-6 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4"
                >
                  Alle österreichischen Ziele ansehen →
                </Link>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  Grenzüberschreitend
                </p>
                <h2 className="font-display mt-2 text-2xl text-brand-ink">
                  Grenzüberschreitende Chauffeurtransfers ab Österreich
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-brand-ink-2">
                  {borderCrossingDestinations.map((d) => (
                    <li key={d.slug} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                      <span>
                        <Link
                          href={`/de/service-areas/${d.slug}`}
                          className="font-semibold text-brand-ink hover:text-brand-gold"
                        >
                          {d.country}
                        </Link>{' '}
                        — {d.cities.join(', ')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-cream border-b border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-white shadow-md lg:col-span-5 group">
              <Image
                src="/images/testimonials.webp"
                alt="Gast entspannt im Fond einer luxuriösen Chauffeur-Limousine in Wien"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Was Sie erwarten können
              </p>
              <h2 className="font-display mt-2 mb-8 text-3xl text-brand-ink">
                So könnte Ihr Transfer aussehen
              </h2>

              <div className="space-y-6">
                {testimonials.slice(0, 3).map((t) => (
                  <div key={t.context} className="rounded-sm border border-brand-line bg-white p-5 shadow-sm">
                    <p className="text-sm italic leading-relaxed text-brand-ink-2/80">
                      &quot;{t.quote}&quot;
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      {t.context}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/de/reviews"
                className="mt-6 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4"
              >
                Weitere Beispiele ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Unsere Flotte
          </p>
          <h2 className="font-display mt-2 text-3xl text-brand-ink">Ein Fahrzeug für jede Fahrt</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        <p className="mt-6 max-w-2xl text-xs text-brand-ink-2/60">
          Die Gepäckkapazität variiert je nach Personenanzahl und Gepäckgröße. Geben Sie bei
          Skiausrüstung oder ungewöhnlich großem Gepäck die Details in Ihrer Anfrage an, damit wir
          das passende Fahrzeug zuweisen können.
        </p>
        <div className="mt-4">
          <Link
            href="/de/fleet"
            className="text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            Alle Fahrzeuge ansehen →
          </Link>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="bg-white border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Beliebte Strecken
            </p>
            <h2 className="font-display mt-2 text-3xl text-brand-ink">
              Beliebte Chauffeur-Strecken
            </h2>
            <p className="mt-4 text-brand-ink-2/80 text-sm leading-relaxed">
              Festpreis-Strecken, die unsere Chauffeure am häufigsten fahren. Wählen Sie eine für
              die vollständigen Streckendetails.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {popularRoutes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-sm border border-brand-line bg-brand-cream p-5 hover:border-brand-gold hover:bg-white hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-brand-ink group-hover:text-brand-gold text-sm transition-colors duration-300">
                    {r.label}
                  </h3>
                  <p className="mt-1 text-[11px] text-brand-ink-2/60 font-mono">
                    {r.distance} · {r.duration}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-brand-ink group-hover:text-brand-gold transition-colors duration-300">
                  <span>Details ansehen</span>
                  <svg className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/de/routes"
              className="text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
            >
              Alle Strecken ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-cream shadow-md lg:col-span-5 group">
              <Image
                src="/images/faq-support.webp"
                alt="Häufig gestellte Fragen - Premium-Chauffeur-Support in Österreich"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Fragen?
              </p>
              <h2 className="font-display mt-2 mb-6 text-3xl text-brand-ink">
                Häufig gestellte Fragen
              </h2>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink overflow-hidden border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Nahtlose Privatreisen
              </p>
              <h2 className="font-display mt-2 text-3xl text-white sm:text-4xl">
                Bereit für Ihre Transferbuchung?
              </h2>
              <p className="mt-4 text-brand-cream/70 max-w-md">
                Inland oder grenzüberschreitend — sagen Sie uns wohin, wir kümmern uns um den Rest.
                Keine Zahlung jetzt nötig — wir bestätigen zuerst die Verfügbarkeit.
              </p>
              <div className="mt-8">
                <Link
                  href="/de/booking"
                  className="inline-block rounded-sm bg-brand-gold px-8 py-4 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light transition-colors duration-300 shadow-md"
                >
                  Transfer anfragen
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/10 bg-brand-ink-2/50 shadow-2xl group">
              <Image
                src="/images/cta-chauffeur.webp"
                alt="Professioneller Chauffeur öffnet Tür einer Luxuslimousine in Wien, Österreich"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
