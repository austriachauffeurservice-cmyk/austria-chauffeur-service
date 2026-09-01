import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { WeatherWidget } from '@/components/weather-widget'
import { AustriaTimeWidget } from '@/components/austria-time-widget'
import { airports } from '@/lib/content/de/airports'
import { routes } from '@/lib/content/de/routes'
import { skiResorts } from '@/lib/content/de/ski-resorts'
import { vehicles } from '@/lib/content/de/services'
import { siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'
import { matchPopularRoute, normalizeLabel } from '@/lib/content/link-match'
import { localizedHref } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Flughafentransfers in Österreich | Privater Chauffeurservice',
  description:
    'Private Flughafentransfers in ganz Österreich mit Empfangsservice, Flugverfolgung und Festpreisen. Wien, Salzburg, Innsbruck, Graz, Linz und Klagenfurt, plus München und Zürich für grenzüberschreitende Ankünfte.',
  alternates: {
    canonical: '/de/airport-transfers',
    languages: { en: '/airport-transfers', de: '/de/airport-transfers', 'x-default': '/airport-transfers' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/airport-transfers`,
    title: 'Flughafentransfers in Österreich | Privater Chauffeurservice',
    description:
      'Private Flughafentransfers in ganz Österreich mit Empfangsservice, Flugverfolgung und Festpreisen. Wien, Salzburg, Innsbruck, Graz, Linz und Klagenfurt, plus München und Zürich für grenzüberschreitende Ankünfte.',
  },
}

const austrianAirports = airports.filter((a) => !a.crossBorder)
const crossBorderAirports = airports.filter((a) => a.crossBorder)
const munichAirport = crossBorderAirports.find((a) => a.slug === 'munich-airport')
const zurichAirport = crossBorderAirports.find((a) => a.slug === 'zurich-airport')

function destinationLabel(route: string, city: string): string {
  const destination = route.split('→')[1]?.trim() ?? route
  const clean = normalizeLabel(destination)
  return clean.toLowerCase() === 'stadtzentrum' ? `${city} Stadtzentrum` : clean
}

function resortsNearest(airportFragment: string) {
  return skiResorts.filter((r) => r.nearestAirports[0]?.name.includes(airportFragment))
}
function resortsAlsoServedBy(airportFragment: string) {
  return skiResorts.filter(
    (r) => !r.nearestAirports[0]?.name.includes(airportFragment) && r.nearestAirports.some((a) => a.name.includes(airportFragment))
  )
}

const innsbruckResorts = resortsNearest('Innsbruck').slice(0, 5)
const salzburgResorts = resortsNearest('Salzburg').slice(0, 5)
const zurichResorts = resortsNearest('Zürich').slice(0, 4)
const munichResorts = resortsAlsoServedBy('München').slice(0, 5)

const whyChooseUs = [
  {
    icon: '🤝',
    title: 'Persönlicher Empfang',
    description: 'Ihr Chauffeur wartet in der Ankunftshalle mit Ihrem Namensschild — kein Suchen nach einem Taxistand.',
  },
  {
    icon: '✈️',
    title: 'Flugverfolgung',
    description: 'Wir verfolgen Ihren Flug und passen die Abholzeit bei Verspätung oder frühzeitiger Landung an, ohne Aufpreis.',
  },
  {
    icon: '💶',
    title: 'Festpreise',
    description: 'Ihr Preis wird vor der Fahrt per E-Mail bestätigt — kein Taxameter, keine versteckten Kosten.',
  },
  {
    icon: '🚪',
    title: 'Tür-zu-Tür-Service',
    description: 'Fahren Sie direkt vom Flughafen zu Ihrem Hotel, Ihrer Wohnadresse, Ihrem Büro oder Resort im selben Fahrzeug.',
  },
  {
    icon: '🚗',
    title: 'Premium-Fahrzeuge',
    description: 'Wählen Sie zwischen Business-Limousine, Luxus-Limousine, Executive Van oder Kleinbus je nach Gruppe und Gepäck.',
  },
  {
    icon: '🌍',
    title: 'Grenzüberschreitende Fahrten',
    description: 'Weiterfahrt direkt nach Deutschland, Tschechien, in die Slowakei, nach Ungarn, Slowenien, Italien oder in die Schweiz — kein Fahrzeugwechsel an der Grenze.',
  },
]

const airportComparison = [
  { code: 'VIE', name: 'Flughafen Wien', bestFor: 'Wien und Ostösterreich' },
  { code: 'SZG', name: 'Flughafen Salzburg', bestFor: 'Salzburg und die nördlichen Alpenresorts' },
  { code: 'INN', name: 'Flughafen Innsbruck', bestFor: 'Tiroler Skigebiete' },
  { code: 'GRZ', name: 'Flughafen Graz', bestFor: 'Steiermark' },
  { code: 'LNZ', name: 'Flughafen Linz', bestFor: 'Oberösterreich' },
  { code: 'KLU', name: 'Flughafen Klagenfurt', bestFor: 'Kärnten' },
]

const bookingChecklist = [
  'Flughafen und Flugnummer',
  'Reisedatum und Ankunftszeit',
  'Personenanzahl',
  'Zielort — Hotel, Resort oder genaue Adresse',
  'Gepäck, einschließlich Ski- oder Snowboardtaschen',
  'Kindersitzbedarf, falls zutreffend',
  'Ob Sie auch einen Rücktransfer benötigen',
]

const useCases = [
  {
    title: 'Flughafen → Hotel oder Privatadresse',
    description: 'Direkte Ablieferung an jedem Hotel, Chalet oder jeder Privatadresse — geben Sie den Ort einfach bei der Buchung an.',
  },
  {
    title: 'Flughafen → Geschäftsadresse',
    description: 'Festpreis-Transfers für Führungskräfte und Kundentermine, mit Firmenkonten für Unternehmen, die regelmäßig reisen.',
  },
  {
    title: 'Flughafen → Andere österreichische Stadt',
    description: 'Direkte Weiterfahrt in eine zweite österreichische Stadt im selben Fahrzeug, statt die Flughafenstrecke separat zu buchen.',
  },
  {
    title: 'Familien- und Gruppenreisen',
    description: 'Executive Vans und Kleinbusse für größere Gruppen und mehr Gepäck, mit Kindersitzen auf Anfrage ohne Aufpreis.',
  },
]

const faqs = [
  {
    question: 'Welche Flughäfen in Österreich decken Sie ab?',
    answer:
      'Wien, Salzburg, Innsbruck, Graz, Linz und Klagenfurt — Österreichs sechs große Flughäfen, jeweils mit Empfangsservice und einer eigenen Transferseite.',
  },
  {
    question: 'Bieten Sie Flughafentransfers ab dem Flughafen Wien an?',
    answer:
      'Ja — der Flughafen Wien-Schwechat (VIE) ist unser Hauptsitz und der Flughafen, an dem wir die meisten Abholungen durchführen, mit direkten Transfers in die Stadt und weiter durch Österreich oder über die Grenze.',
  },
  {
    question: 'Verfolgen Sie Flüge bei Verspätung oder frühzeitiger Landung?',
    answer:
      'Ja. Geben Sie Ihre Flugnummer bei der Buchung an, und wir verfolgen sie — Ihre Abholzeit wird bei Planänderungen angepasst, ohne Aufpreis.',
  },
  {
    question: 'Wo trifft mich mein Chauffeur am Flughafen?',
    answer: 'In der Ankunftshalle, mit einem Namensschild — derselbe Ablauf an jedem von uns bedienten Flughafen.',
  },
  {
    question: 'Kann ich einen Flughafentransfer in eine andere österreichische Stadt buchen?',
    answer:
      'Ja — eine Flughafenabholung kann direkt in eine zweite Stadt oder Region weitergehen, im selben Fahrzeug, statt als separate Etappe gebucht zu werden.',
  },
  {
    question: 'Bieten Sie Transfers vom Flughafen München oder Zürich nach Österreich an?',
    answer:
      'Ja — München und Zürich sind beides etablierte grenzüberschreitende Abholpunkte, hauptsächlich für Tirol, das Land Salzburg sowie Vorarlberg/Arlberg-Resorts.',
  },
  {
    question: 'Kann ich einen Flughafentransfer für eine Familie oder Gruppe buchen?',
    answer:
      'Ja. Der Executive Van (bis zu 7) und der Kleinbus (bis zu 16) eignen sich für größere Gruppen und mehr Gepäck, und Kindersitze oder Sitzerhöhungen sind auf Anfrage ohne Aufpreis verfügbar.',
  },
  {
    question: 'Was kostet ein Flughafentransfer in Österreich?',
    answer:
      'Das hängt von Flughafen, Ziel, Fahrzeug und Personenzahl ab. Senden Sie uns Ihre Flug- und Zieldaten, und wir bestätigen einen Festpreis vor Ihrer Fahrt.',
  },
  {
    question: 'Wie weit im Voraus sollte ich einen Flughafentransfer buchen?',
    answer:
      'Wir empfehlen mindestens 24 Stunden im Voraus, besonders bei größeren Fahrzeugen oder grenzüberschreitenden Strecken — aber auch kurzfristige Anfragen lohnen sich.',
  },
  {
    question: 'Welches Fahrzeug eignet sich für Gepäck oder Skiausrüstung?',
    answer:
      'Die Fahrzeugwahl hängt von Personenanzahl, Gepäck und Ski- oder Snowboardausrüstung zusammen ab — die Personenzahl allein garantiert keine ausreichende Gepäckkapazität. Teilen Sie uns bei der Buchung mit, was Sie mitführen, und wir empfehlen ein passendes Fahrzeug.',
  },
  {
    question: 'Können Sie mich direkt vom Flughafen zu einem Skigebiet bringen?',
    answer:
      'Ja. Viele unserer Flughafentransfers führen direkt zu Österreichs Skigebieten weiter — siehe unsere Skitransfer-Strecken für konkrete Flughafen-zu-Resort-Verbindungen.',
  },
  {
    question: 'Kann ich einen Rücktransfer zum Flughafen buchen?',
    answer:
      'Ja. Einfache Fahrten und Rücktransfers sind beide buchbar — geben Sie bei der Anfrage die Flughafen- und Unterkunftsdaten für beide Etappen an.',
  },
]

export default function AirportTransfersPageDe() {
  return (
    <>
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

      <div className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Startseite', href: '/de' }, { label: 'Flughafentransfers' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-line">
        <Image
          src="/images/hero/airport-transfer.webp"
          alt="Privater Chauffeur-Flughafentransfer in Österreich"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/80 to-brand-ink/55" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Flughafentransfers
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-3xl text-white sm:text-4xl">
            Flughafentransfers in Österreich
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Private Chauffeur-Flughafentransfers in ganz Österreich, mit Empfangsservice,
            Flugverfolgung und einem vor der Fahrt bestätigten Festpreis. Ihr Chauffeur wartet in
            der Ankunftshalle mit einem Namensschild und bringt Sie direkt zu Ihrem Hotel, Ihrer
            Wohnadresse, Geschäftsadresse oder Ihrem Anschlussziel.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {['Persönlicher Empfang', 'Flugverfolgung', 'Festpreis', 'Privates Fahrzeug', 'Tür-zu-Tür'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-brand-cream/90">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#angebot"
              className="rounded-sm bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold-light"
            >
              Transfer anfragen
            </Link>
            <Link
              href="#flughaefen"
              className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
            >
              Österreichische Flughäfen entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* Große österreichische Flughäfen */}
      <section id="flughaefen" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl text-brand-ink">Große österreichische Flughäfen</h2>
        <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/70">
          Unser österreichisches Flughafennetz umfasst Wien, Salzburg, Innsbruck, Graz, Linz und Klagenfurt.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {austrianAirports.map((a) => (
            <Link
              key={a.slug}
              href={`/de/airport-transfers/${a.slug}`}
              className="group rounded-sm border border-brand-line bg-white p-6 transition-colors hover:border-brand-gold hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                {a.code} · {a.region}
              </p>
              <h3 className="font-display mt-1 text-xl text-brand-ink group-hover:text-brand-gold">
                {a.name}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-2/70">{a.distanceFromCity}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcher Flughafen passt zu Ihnen */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Welcher österreichische Flughafen passt zu Ihrer Reise?</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Wenn Sie die Wahl zwischen mehreren Flughäfen haben, ist meist der Ihrem Ziel nächstgelegene
            am praktischsten — aber Flugverfügbarkeit und Anschlüsse spielen oft ebenso eine Rolle.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Flughafen</th>
                  <th className="pb-3">Am besten für</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {airportComparison.map((a) => (
                  <tr key={a.code}>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">{a.name} ({a.code})</td>
                    <td className="py-3 text-brand-ink-2/80">{a.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Warum uns wählen */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Warum einen privaten Flughafentransfer buchen?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-sm border border-brand-line bg-white p-5">
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <p className="mt-3 font-semibold text-brand-ink">{item.title}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">So funktioniert die Flughafenabholung</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Buchen', body: 'Teilen Sie uns Flug, Ziel, Datum und Personenzahl mit.' },
              { title: 'Wir verfolgen', body: 'Ihre Flugnummer wird von der Buchung bis zur Ankunft überwacht.' },
              { title: 'Treffen', body: 'Ihr Chauffeur wartet in der Ankunftshalle mit einem Namensschild.' },
              { title: 'Fahrt', body: 'Direkt, Tür zu Tür — keine Mitfahrgelegenheit, kein Fahrzeugwechsel.' },
            ].map((step, i) => (
              <li key={step.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
                <span className="font-display text-xs font-semibold text-brand-gold">
                  {String(i + 1).padStart(2, '0')} — {step.title}
                </span>
                <p className="mt-1.5 text-sm text-brand-ink-2/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Flugverfolgung */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Flugverfolgung &amp; Verspätete Ankünfte</h2>
          <p className="mt-4 max-w-2xl text-brand-ink-2/90">
            Die Flugverfolgung ist bei jedem Flughafentransfer ohne Aufpreis inbegriffen. Wir
            verfolgen Ihren Flug und passen die Abholzeit bei Verspätung oder frühzeitiger Landung
            an, sodass Sie wegen einer Änderung im Flugplan nicht neu buchen müssen.
          </p>
        </div>
      </section>

      {/* Beliebte Flughafentransfer-Strecken */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Beliebte Flughafentransfer-Strecken in Österreich</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Wohin unsere Flughafentransfers tatsächlich gehen — die meistgefragten Ziele ab jedem
            österreichischen Flughafen.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Flughafen</th>
                  <th className="pb-3">Beliebte Ziele</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {austrianAirports.map((a) => (
                  <tr key={a.slug}>
                    <td className="py-4 pr-4 align-top">
                      <Link href={`/de/airport-transfers/${a.slug}`} className="font-semibold text-brand-ink hover:text-brand-gold hover:underline">
                        {a.name}
                      </Link>
                    </td>
                    <td className="py-4 text-brand-ink-2/80">
                      {a.popularRoutes.map((route, i) => {
                        const match = matchPopularRoute(route, routes, airports, a.slug)
                        const label = destinationLabel(route, a.city)
                        return (
                          <span key={route}>
                            {match ? (
                              <Link href={localizedHref(match.href, 'de')} className="hover:text-brand-gold hover:underline">
                                {label}
                              </Link>
                            ) : (
                              label
                            )}
                            {i < a.popularRoutes.length - 1 ? ', ' : ''}
                          </span>
                        )
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ski-Flughafentransfers */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-brand-ink">Flughafentransfers zu österreichischen Skigebieten</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-ink-2/80">
            Winterfeste Fahrzeuge mit Platz für Ski und Boards, direkt vom Flughafen zum Resort —
            kein Zugwechsel, kein Ortsshuttle. Ab österreichischen Flughäfen, sowie den
            internationalen Flughäfen München und Zürich, die ebenfalls österreichische Resorts bedienen.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { heading: 'Ab Flughafen Innsbruck (Österreich)', resorts: innsbruckResorts },
              { heading: 'Ab Flughafen Salzburg (Österreich)', resorts: salzburgResorts },
              { heading: 'Ab Flughafen München (Deutschland)', resorts: munichResorts },
              { heading: 'Ab Flughafen Zürich (Schweiz)', resorts: zurichResorts },
            ].map((group) => (
              <div key={group.heading}>
                <h3 className="font-display text-sm text-brand-ink">{group.heading}</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-ink-2/80">
                  {group.resorts.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/de/ski-transfers/${r.slug}`} className="hover:text-brand-gold hover:underline">
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-ink-2/70">
            <Link href="/de/ski-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Alle österreichischen Skitransfers ansehen →
            </Link>
          </p>
        </div>
      </section>

      {/* Geschäft, Familien & Gruppen */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">
            Private Flughafentransfers für Geschäft, Familien &amp; Gruppen
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-sm border border-brand-line bg-brand-cream p-5">
                <p className="font-semibold text-brand-ink">{u.title}</p>
                <p className="mt-1.5 text-sm text-brand-ink-2/70">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fahrzeug- & Gepäckleitfaden */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Fahrzeug- &amp; Gepäckleitfaden</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Personenanzahl und Gepäckkapazität sind zwei unterschiedliche Dinge — teilen Sie uns
            mit, was Sie mitführen, einschließlich Ski- oder Snowboardtaschen, und wir empfehlen
            das passende Fahrzeug.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-line text-xs font-semibold uppercase tracking-wide text-brand-ink-2/60">
                  <th className="pb-3 pr-4">Fahrzeug</th>
                  <th className="pb-3 pr-4">Personen</th>
                  <th className="pb-3">Gepäck</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {vehicles.map((v) => (
                  <tr key={v.type}>
                    <td className="py-3 pr-4 font-semibold text-brand-ink">{v.name}</td>
                    <td className="py-3 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                    <td className="py-3 text-brand-ink-2/80">{v.luggage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-brand-ink-2/70">
            <Link href="/de/fleet" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Zur vollständigen Flotte →
            </Link>
          </p>
        </div>
      </section>

      {/* Was Sie uns bei der Buchung mitteilen sollten */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Was Sie uns bei der Buchung mitteilen sollten</h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-ink-2/80">
            Je mehr wir im Voraus wissen, desto genauer können wir das Angebot kalkulieren und das
            passende Fahrzeug zuweisen:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-brand-ink-2 sm:grid-cols-2">
            {bookingChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* München & Zürich nach Österreich */}
      <section className="border-t border-brand-line bg-brand-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-2xl text-white">München &amp; Zürich: Internationale Flughäfen für österreichische Ziele</h2>
          <p className="mt-3 max-w-2xl text-brand-cream/70">
            München (Deutschland) und Zürich (Schweiz) sind keine österreichischen Flughäfen,
            aber beide sind etablierte grenzüberschreitende Abholpunkte. Ankunft in einem der
            beiden? Wir organisieren private Chauffeurtransfers vom Flughafen direkt nach
            Österreich, in einem Fahrzeug, ohne Grenzstopp.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {munichAirport && (
              <Link
                href={`/de/airport-transfers/${munichAirport.slug}`}
                className="group rounded-sm border border-white/15 bg-white/5 p-6 transition-colors hover:border-brand-gold"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {munichAirport.code} · {munichAirport.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-white group-hover:text-brand-gold">
                  Flughafen München → Österreich
                </h3>
                <p className="mt-2 text-sm text-brand-cream/70">
                  Direkte Chauffeurtransfers nach Tirol, ins Land Salzburg und in umliegende
                  Alpendestinationen.
                </p>
              </Link>
            )}
            {zurichAirport && (
              <Link
                href={`/de/airport-transfers/${zurichAirport.slug}`}
                className="group rounded-sm border border-white/15 bg-white/5 p-6 transition-colors hover:border-brand-gold"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                  {zurichAirport.code} · {zurichAirport.region}
                </p>
                <h3 className="font-display mt-1 text-xl text-white group-hover:text-brand-gold">
                  Flughafen Zürich → Österreich
                </h3>
                <p className="mt-2 text-sm text-brand-cream/70">
                  Private Transfers nach Vorarlberg, ins Arlberggebiet und nach Westösterreich.
                </p>
              </Link>
            )}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-brand-cream/70">
            Ankunft am Flughafen{' '}
            <Link href="/de/service-areas/bratislava" className="font-semibold text-white underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Bratislava
            </Link>{' '}
            oder{' '}
            <Link href="/de/service-areas/budapest" className="font-semibold text-white underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
              Budapest
            </Link>
            ? Geben Sie Ihre Abholdaten im Buchungsformular an — wir prüfen dann, ob ein
            grenzüberschreitender Transfer nach Österreich arrangiert werden kann.
          </p>
        </div>
      </section>

      {/* Aktuelle Bedingungen */}
      <section className="border-t border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <WeatherWidget locale="de" />
            <AustriaTimeWidget locale="de" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-xl text-brand-ink">Häufig gestellte Fragen</h2>
          <dl className="mt-6 divide-y divide-brand-line">
            {faqs.map((f) => (
              <div key={f.question} className="py-6 first:pt-0">
                <dt className="font-display text-base text-brand-ink">{f.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-brand-ink-2/80">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <BookingCta
        id="angebot"
        locale="de"
        pageType="airport"
        title="Bereit für Ihre Flughafenabholung?"
        description="Fordern Sie ein Festpreisangebot an — senden Sie Ihre Flugdaten und wir bestätigen Verfügbarkeit und Preis per E-Mail."
      />
    </>
  )
}
