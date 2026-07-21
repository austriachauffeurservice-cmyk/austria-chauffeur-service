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
import { austrianCities, borderCrossingDestinations } from '@/lib/content/de/service-areas'
import { areaServedCountries, contactPhone, siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: `${siteName} | Private Transfers in ganz Österreich`,
  description:
    'Buchen Sie private Chauffeurtransfers in ganz Österreich, einschließlich Flughafentransfers, Stadt-zu-Stadt-Fahrten und grenzüberschreitenden Transfers in die Nachbarländer — jede Fahrt durchgeführt von einem lizenzierten, geprüften Chauffeurpartner.',
  alternates: {
    canonical: '/de',
    languages: { en: '/', de: '/de' },
  },
}

const popularRouteCards: { label: string; slug: string; route: string; href?: string }[] = [
  { label: 'Chauffeurservice Wien', slug: 'vienna', route: 'Flughafen Wien ↔ Stadtzentrum' },
  { label: 'Chauffeurservice Salzburg', slug: 'salzburg', route: 'Salzburg ↔ Wien / München' },
  { label: 'Flughafentransfer Innsbruck', slug: 'innsbruck', route: 'Innsbruck ↔ Kitzbühel / München' },
  { label: 'Chauffeurservice Graz', slug: 'graz', route: 'Graz ↔ Wien / Ljubljana' },
  { label: 'Privattransfer Linz', slug: 'linz', route: 'Linz ↔ Wien / Prag' },
  { label: 'Privattransfer München', slug: 'munich', route: 'Österreich ↔ München (Deutschland)' },
  { label: 'Chauffeur Prag', slug: 'prague', route: 'Österreich ↔ Prag (Tschechien)' },
  { label: 'Chauffeurservice Bratislava', slug: 'bratislava', route: 'Wien ↔ Bratislava (Slowakei)' },
  { label: 'Chauffeur Budapest', slug: 'budapest', route: 'Wien ↔ Budapest (Ungarn)' },
  { label: 'Privatfahrer Zürich', slug: 'zurich', route: 'Bregenz ↔ Zürich (Schweiz)' },
  { label: 'Privatfahrer Klagenfurt', slug: 'klagenfurt', route: 'Klagenfurt ↔ Graz / Ljubljana' },
  { label: 'Chauffeurservice Bregenz', slug: 'bregenz', route: 'Bregenz ↔ Zürich / Vaduz' },
  {
    label: 'Flughafentransfer Wien',
    slug: 'vienna-airport-transfer',
    route: 'Flughafen Wien (VIE) ↔ Stadtzentrum',
    href: '/de/airport-transfers/vienna-airport',
  },
  {
    label: 'Skitransfer Kitzbühel',
    slug: 'kitzbuehel-ski-transfer',
    route: 'Flughafen Innsbruck / Salzburg → Kitzbühel',
    href: '/de/ski-transfers/kitzbuehel',
  },
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
          description:
            'Buchen Sie private Chauffeurtransfers in ganz Österreich, einschließlich Flughafentransfers, Stadt-zu-Stadt-Fahrten und grenzüberschreitenden Transfers in die Nachbarländer — jede Fahrt durchgeführt von einem lizenzierten, geprüften Chauffeurpartner.',
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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-line bg-brand-ink text-white">
        <HeroBackground />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Privater Chauffeurservice
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Überall in Österreich.
              <br />
              Auch über die Grenze.
            </h1>
            <p className="mt-5 max-w-md text-brand-cream/80">
              Lizenzierte Privattransfers ab dem Flughafen Wien (VIE) und jeder österreichischen
              Stadt, plus grenzüberschreitender Service nach Deutschland, Tschechien, Slowakei,
              Ungarn, Slowenien, Italien und in die Schweiz. Festpreise, professionelle Fahrer,
              inklusive Flugverfolgung.
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
              href={`tel:${contactPhone.replace(/\s+/g, '')}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cream/80 hover:text-brand-gold"
            >
              <ServiceIcon name="phone" className="h-4 w-4" />
              Heute noch nötig? Rufen Sie an: {contactPhone}
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
                <dd className="text-brand-cream/70">Buchung verfügbar</dd>
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
          {serviceTypes.map((s) => (
            <div key={s.title} className="rounded-sm border border-brand-line bg-white overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">
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
            </div>
          ))}
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
                Wir verbinden die Standards eines internationalen Premium-Geschäftsreiseservices
                mit lokaler österreichischer Erfahrung für nahtlose Transfers.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold border border-brand-line">
                    <ServiceIcon name="star" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink text-base">Feste Pauschalpreise</h3>
                    <p className="mt-1 text-xs text-brand-ink-2/70 leading-relaxed">
                      Bestätigte Preise vor der Buchung. Keine überraschenden Mautgebühren oder Grenzzuschläge.
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
                      Lizenzierte Partnerfahrer für Abholungen und Ablieferungen in 7 europäischen Ländern.
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
                      Englisch- und deutschsprachige professionelle Fahrer, geschult für Luxusservice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-cream shadow-md lg:col-span-5 group">
              <Image
                src="/images/why-choose-us.webp"
                alt="Chauffeur-Navigation und luxuriöses Armaturenbrett in Österreich"
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
                Unser Buchungsprozess ist schnell, sicher und vollständig anpassbar. Wir
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
                      Geben Sie Abhol- und Zielort ein, wählen Sie die gewünschte Fahrzeugklasse
                      (Limousine, SUV oder Van) und Ihre Reisedaten.
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
                      Wir prüfen die Fahrerverfügbarkeit und senden Ihnen ein garantiertes
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
                      Ihr Fahrer empfängt Sie am Abholort. Wir verfolgen Ihre Flugankunft
                      automatisch — Verspätungen kosten nie extra.
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
                  Jede größere österreichische Stadt
                </h2>
                <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-brand-ink-2">
                  {austrianCities.map((c) => (
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
                  Vollständige Abdeckungskarte ansehen →
                </Link>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  Grenzüberschreitend
                </p>
                <h2 className="font-display mt-2 text-2xl text-brand-ink">
                  Über Österreichs Grenzen hinaus
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
                alt="Gast entspannt auf dem Rücksitz einer luxuriösen Mercedes-Limousine mit Chauffeur in Wien, Österreich"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Kundenstimmen
              </p>
              <h2 className="font-display mt-2 mb-8 text-3xl text-brand-ink">
                Was unsere Gäste über uns sagen
              </h2>

              <div className="space-y-6">
                <div className="rounded-sm border border-brand-line bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-brand-gold text-sm">
                    {"★".repeat(5)}
                  </div>
                  <p className="mt-2 text-sm italic leading-relaxed text-brand-ink-2/80">
                    &quot;Hervorragender Service. Der Fahrer hat uns bei der Ankunft mit einem
                    Namensschild empfangen, unser schweres Skigepäck übernommen und uns sicher zu
                    unserem Resort in Lech gebracht. Wirklich erstklassig!&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-brand-ink">
                    Sarah Jenkins · Transfer London nach Lech
                  </p>
                </div>

                <div className="rounded-sm border border-brand-line bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-brand-gold text-sm">
                    {"★".repeat(5)}
                  </div>
                  <p className="mt-2 text-sm italic leading-relaxed text-brand-ink-2/80">
                    &quot;Wir haben einen Executive-Transfer für unsere Geschäftsgäste von Wien
                    nach München gebucht. Pünktlicher Fahrer, makellose Mercedes V-Klasse und
                    ausgezeichnete Kommunikation.&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-brand-ink">
                    Dr. Marcus Weber · Firmenstrecke (Wien nach München)
                  </p>
                </div>

                <div className="rounded-sm border border-brand-line bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-brand-gold text-sm">
                    {"★".repeat(5)}
                  </div>
                  <p className="mt-2 text-sm italic leading-relaxed text-brand-ink-2/80">
                    &quot;Wir brauchten einen grenzüberschreitenden Transfer von Wien nach Prag.
                    Der Chauffeur war sehr professionell, sprach ausgezeichnetes Englisch und
                    sorgte für eine sichere, ruhige und komfortable Fahrt.&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold text-brand-ink">
                    Elena Rostova · Grenzüberschreitende Strecke (Wien nach Prag)
                  </p>
                </div>
              </div>
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
      </section>

      {/* Popular Routes */}
      <section className="bg-white border-t border-brand-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Beliebte Strecken
            </p>
            <h2 className="font-display mt-2 text-3xl text-brand-ink">
              Top-Chauffeurziele
            </h2>
            <p className="mt-4 text-brand-ink-2/80 text-sm leading-relaxed">
              Wir bieten Festpreis-Privattransfers auf diesen beliebten Strecken. Wählen Sie Ihr
              Ziel für Details und Abdeckung.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {popularRouteCards.map((r) => (
              <Link
                key={r.slug}
                href={r.href ?? `/de/service-areas/${r.slug}`}
                className="group rounded-sm border border-brand-line bg-brand-cream p-5 hover:border-brand-gold hover:bg-white hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-brand-ink group-hover:text-brand-gold text-sm transition-colors duration-300">
                    {r.label}
                  </h3>
                  <p className="mt-1 text-[11px] text-brand-ink-2/60 font-mono">
                    {r.route}
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
