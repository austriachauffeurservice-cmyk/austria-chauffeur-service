import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { FaqAccordion } from '@/components/faq-accordion'
import { defaultOgImage, siteName, siteUrl } from '@/lib/content/site'
import { BookingCta } from '@/components/booking-cta'

export const metadata: Metadata = {
  title: 'Eventtransport Österreich | Privater Chauffeurservice',
  description:
    'Privater Chauffeurservice für Konferenzen, Messen, Firmenveranstaltungen und private Feiern in ganz Österreich. Koordinierte Fahrzeuge, Festpreisangebote.',
  alternates: {
    canonical: '/de/event-transportation',
    languages: { en: '/event-transportation', de: '/de/event-transportation', 'x-default': '/event-transportation' },
  },
  openGraph: {
    type: 'website',
    images: [defaultOgImage],
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/event-transportation`,
    title: 'Eventtransport Österreich | Privater Chauffeurservice',
    description:
      'Privater Chauffeurservice für Konferenzen, Messen, Firmenveranstaltungen und private Feiern in ganz Österreich. Koordinierte Fahrzeuge, Festpreisangebote.',
  },
}

const serviceHighlights = [
  { title: 'Tür-zu-Tür-Service', description: 'Direkte Abholung und Ablieferung am Flughafen, Hotel oder Veranstaltungsort — ohne geteilte Zwischenstopps.' },
  { title: 'Professionelle Chauffeure', description: 'Erfahrene Fahrer, die sich nach Ihrem Zeitplan richten, nicht nach einem festen Fahrplan.' },
  { title: 'Koordinierte Abholungen', description: 'Mehrere Ankünfte, Hotels oder Abholorte als eine gemeinsame Route geplant.' },
  { title: 'Rücktransport inklusive', description: 'Derselbe Service funktioniert auch für die Rückfahrt nach der Veranstaltung.' },
]

const eventTypes = [
  { title: 'Konferenzen', key: 'conf' as const, description: 'Delegiertentransport zwischen Flughafen, Hotel und Konferenzort.' },
  { title: 'Firmenveranstaltungen', key: 'corporate' as const, description: '' },
  { title: 'Messen & Ausstellungen', key: 'expo' as const, description: 'Transport für Aussteller und Besucher zu Messe- und Ausstellungsorten.' },
  { title: 'Konzerte & Festivals', key: 'concert' as const, description: 'Gruppen- und Einzeltransport zu Veranstaltungsorten und Festivalgeländen.' },
  { title: 'Sportveranstaltungen', key: 'sport' as const, description: 'Koordinierter Transport für Zuschauer, Teams oder Offizielle.' },
  { title: 'VIP-Veranstaltungen', key: 'vip' as const, description: 'Premium-Fahrzeuge für Gäste, bei denen der Auftritt zählt.' },
  { title: 'Private Feiern', key: 'private' as const, description: '' },
  { title: 'Kultur- & Geschäftsveranstaltungen', key: 'culture' as const, description: 'Ausstellungseröffnungen, Preisverleihungen und ähnliche geplante Anlässe.' },
]

const fleetTable = [
  { name: 'Business-Limousine', passengers: 'Bis zu 3', luggage: '2–3 Gepäckstücke', href: '/de/fleet/sedan' },
  { name: 'Luxus-Limousine', passengers: 'Bis zu 3', luggage: '2–3 Gepäckstücke', href: '/de/fleet/luxury' },
  { name: 'Executive-Van', passengers: 'Bis zu 7', luggage: '6–7 Gepäckstücke', href: '/de/fleet/van' },
  { name: 'Kleinbus', passengers: 'Bis zu 16', luggage: 'Große Kapazität', href: '/de/fleet/minibus' },
]

const planningPoints = [
  'Datum und Uhrzeit der Abholung',
  'Abholort (Flughafen, Hotel oder Adresse)',
  'Veranstaltungsort oder Ziel',
  'Anzahl der Passagiere',
  'Gepäck oder Ausrüstung',
  'Rückfahrtzeit, falls benötigt',
  'Anzahl der benötigten Fahrzeuge, falls mehr als eines',
  'Besondere Anforderungen, vermerkt in Ihrer Anfrage',
]

const whyChauffeur = [
  'Eine direkte Route zu Ihrem Veranstaltungsort, ohne geteilte Zwischenstopps',
  'Ein professioneller Chauffeur, abgestimmt auf Ihren Zeitplan',
  'Ein privates Fahrzeug für Ihre Gruppe, nicht geteilt mit anderen Fahrgästen',
  'Abholzeiten, geplant um Ihre Veranstaltung, nicht um einen festen Fahrplan',
  'Koordinierte Abholungen, wenn mehrere Personen getrennt anreisen',
  'Derselbe Service erneut organisiert für Ihre Rückfahrt',
]

const faqs = [
  {
    question: 'Was versteht man unter Eventtransport?',
    answer:
      'Privater Chauffeurtransport, organisiert rund um eine bestimmte geplante Veranstaltung — eine Konferenz, Messe, ein Konzert oder eine private Feier —, einschließlich Flughafenabholung, Transfers vom Hotel zur Location und der Rückfahrt.',
  },
  {
    question: 'Bieten Sie Transport für Konferenzen in Österreich an?',
    answer: 'Ja. Wir organisieren Delegiertentransport zwischen Flughafen, Hotel und Konferenzort, einschließlich koordinierter Abholungen für Gäste, die zu unterschiedlichen Zeiten ankommen.',
  },
  {
    question: 'Können Sie Flughafentransfers für Veranstaltungsgäste organisieren?',
    answer: 'Ja. Gäste können direkt an jedem von uns bedienten Flughafen abgeholt und zu ihrem Hotel oder zum Veranstaltungsort gebracht werden.',
  },
  {
    question: 'Können Sie Gruppen zu einer Veranstaltung transportieren?',
    answer: 'Ja. Executive-Vans (bis zu 7) und Kleinbusse (bis zu 16) stehen für Gruppen zur Verfügung, zusätzlich zu Limousinen für kleinere Gruppen.',
  },
  {
    question: 'Können mehrere Fahrzeuge für eine Veranstaltung organisiert werden?',
    answer: 'Ja. Mehrere Fahrzeuge können unter einer einzigen Anfrage koordiniert werden — teilen Sie uns die benötigte Anzahl und Personenzahl bei der Anfrage mit.',
  },
  {
    question: 'Bieten Sie Transfers vom Hotel zum Veranstaltungsort an?',
    answer: 'Ja. Wir planen den Transport zwischen Hotels, Konferenz- oder Messeorten und anderen Veranstaltungsorten als Teil der Buchung.',
  },
  {
    question: 'Bieten Sie Eventtransport in Wien und Salzburg an?',
    answer: 'Ja, ebenso in Innsbruck, Graz, Linz, Klagenfurt und weiteren von uns bedienten Städten — Details finden Sie in unserer vollständigen Einsatzgebietsübersicht.',
  },
  {
    question: 'Kann ich einen Chauffeur für eine private Feier buchen?',
    answer: 'Ja. Private Feiern und ähnliche geplante Anlässe werden abgedeckt — für eine Hochzeit im Speziellen empfehlen wir unseren eigenen Hochzeitstransfer-Service.',
  },
  {
    question: 'Welche Angaben brauche ich für ein Eventtransport-Angebot?',
    answer: 'Datum der Veranstaltung, Abholort, Veranstaltungsort, Personenanzahl und Gepäck — sowie die Anzahl benötigter Fahrzeuge und besondere Anforderungen, vermerkt in Ihrer Anfrage.',
  },
  {
    question: 'Können Sie den Rücktransport nach einer Veranstaltung organisieren?',
    answer: 'Ja. Rücktransfers werden genauso gebucht wie die Hinfahrt — teilen Sie uns Ihre voraussichtliche Endzeit bei der Anfrage mit.',
  },
]

export default function EventTransportationPageDe() {
  const pageUrl = `${siteUrl}/de/event-transportation`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Event Chauffeur Transportation',
          name: 'Eventtransport',
          provider: { '@type': 'LocalBusiness', name: siteName, url: siteUrl },
          areaServed: { '@type': 'Country', name: 'Austria' },
          url: pageUrl,
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

      <section className="border-b border-brand-line bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Eventtransport
          </p>
          <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
            Eventtransport in Österreich
          </h1>
          <p className="mt-4 max-w-xl text-brand-ink-2/80">
            Privater Chauffeurservice für Veranstaltungen in ganz Österreich, mit koordinierten
            Transfers zwischen Flughafen, Hotel, Veranstaltungsort und Rückfahrt für Einzelpersonen,
            VIP-Gäste und Gruppen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-xl text-brand-ink">Professioneller Chauffeurservice für Veranstaltungen</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Ein privater Chauffeur und Fahrzeug, abgestimmt auf Ihren Veranstaltungsablauf —
          Abholung am Flughafen oder Hotel, direkte Fahrt zum Veranstaltungsort und derselbe
          Service erneut für die Rückfahrt.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {serviceHighlights.map((s) => (
            <div key={s.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{s.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{s.description}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Veranstaltungen, die wir abdecken</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {eventTypes.map((e) => (
            <div key={e.title} className="rounded-sm border border-brand-line p-5">
              <p className="font-semibold text-brand-ink">{e.title}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">
                {e.key === 'corporate' ? (
                  <>
                    Produktlaunches, Firmenfeiern und einmalige Geschäftsveranstaltungen. Für
                    laufende Geschäftsreisen empfehlen wir stattdessen unsere{' '}
                    <Link href="/de/corporate-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                      Firmen- &amp; Stunden-Chauffeurbuchung
                    </Link>
                    .
                  </>
                ) : e.key === 'private' ? (
                  <>
                    Familienfeiern und private Feste. Für eine Hochzeit im Speziellen empfehlen wir
                    unseren{' '}
                    <Link href="/de/wedding-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
                      Hochzeitstransfer-Service
                    </Link>
                    .
                  </>
                ) : (
                  e.description
                )}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Flughafentransfers für Veranstaltungen</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Gäste, die in Österreich ankommen, können direkt am Flughafen abgeholt und zu ihrem
          Hotel, zum Kongresszentrum oder zum Veranstaltungsort gebracht werden — mit demselben
          privaten Fahrzeug, das auch für weitere Transfers vom Hotel zur Location während der
          Veranstaltung genutzt wird.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/de/airport-transfers/vienna-airport" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Flughafen Wien
          </Link>
          <Link href="/de/airport-transfers/salzburg-airport" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Flughafen Salzburg
          </Link>
          <Link href="/de/airport-transfers/innsbruck-airport" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">
            Flughafen Innsbruck
          </Link>
        </div>
        <Link href="/de/airport-transfers" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
          Alle Flughafentransfers →
        </Link>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Transfers vom Hotel zum Veranstaltungsort</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Zwischen Hotel und Konferenzort, Messehalle, Restaurant oder Besprechungsort macht ein
          geplanter privater Transfer eine eigene Taxifahrt für jede Etappe überflüssig.
          Abholzeiten werden nach dem tatsächlichen Ablauf der Veranstaltung geplant, statt erst
          am Tag selbst angefragt zu werden.
        </p>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Gruppentransport für Veranstaltungen</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Die Fahrzeugwahl hängt von Personenanzahl, Gepäck oder Ausrüstung ab, sowie davon, ob
          ein Fahrzeug ausreicht oder mehrere für eine größere Gruppe benötigt werden.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-brand-line text-xs uppercase tracking-wide text-brand-ink-2/60">
                <th className="py-2 pr-4 font-semibold">Fahrzeug</th>
                <th className="py-2 pr-4 font-semibold">Passagiere</th>
                <th className="py-2 font-semibold">Gepäck</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-line">
              {fleetTable.map((v) => (
                <tr key={v.name}>
                  <td className="py-3 pr-4 font-semibold text-brand-ink">
                    <Link href={v.href} className="hover:text-brand-gold hover:underline">
                      {v.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-brand-ink-2/80">{v.passengers}</td>
                  <td className="py-3 text-brand-ink-2/80">{v.luggage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/de/fleet" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
          Gesamten Fuhrpark ansehen →
        </Link>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Mehrere Fahrzeuge &amp; koordinierte Transfers</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Größere Veranstaltungen benötigen oft mehrere gemeinsam geplante Abholungen — das ist
          Transportkoordination, also die Planung von Fahrzeugen und Zeiten rund um Ihre
          Veranstaltung, nicht vollständige Eventplanung oder Vor-Ort-Betreuung.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            'Gäste, die mit unterschiedlichen Flügen oder zu unterschiedlichen Zeiten ankommen',
            'Abholungen von mehr als einem Hotel',
            'Unterschiedliche Abholorte für dieselbe Veranstaltung',
            'Transfers zum Veranstaltungsort, abgestimmt auf den Ablauf',
            'Rückfahrten für die gesamte Gruppe am Ende der Veranstaltung',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-sm border border-brand-line bg-brand-cream p-6">
          <p className="font-semibold text-brand-ink">Planen Sie den Transport für eine größere Veranstaltung?</p>
          <p className="mt-1.5 text-sm text-brand-ink-2/70">
            Teilen Sie uns Ihre Gästeliste, Ankunftszeiten und Abholorte mit, und wir erstellen
            einen Fahrzeugplan und einen Festpreis per E-Mail.
          </p>
          <Link
            href="/de/booking"
            className="mt-3 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
          >
            Eventtransport-Angebot anfragen →
          </Link>
        </div>

        <h2 className="font-display mt-12 text-xl text-brand-ink">VIP-Eventtransport</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Für Führungskräfte, Vortragende, Künstler oder andere Gäste, bei denen der Auftritt
          zählt, kann eine{' '}
          <Link href="/de/fleet/luxury" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
            Luxus-Limousine
          </Link>{' '}
          mit demselben Tür-zu-Tür-Service und professionellem Chauffeur gebucht werden. Für
          diplomatische Missionen, Botschaften oder offizielle Delegationen im Speziellen
          empfehlen wir unseren eigenen{' '}
          <Link href="/de/diplomatic-transfers" className="font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
            Diplomaten- &amp; Botschaftstransport
          </Link>
          .
        </p>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Eventtransport in ganz Österreich</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Die Abdeckung erstreckt sich über die von uns bereits bedienten Städte und Regionen,
          einschließlich Wien, Salzburg, Innsbruck, Graz, Linz und Klagenfurt.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/de/service-areas/vienna" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Wien</Link>
          <Link href="/de/service-areas/salzburg" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Salzburg</Link>
          <Link href="/de/service-areas/innsbruck" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Innsbruck</Link>
          <Link href="/de/service-areas/graz" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Graz</Link>
          <Link href="/de/service-areas/linz" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Linz</Link>
          <Link href="/de/service-areas/klagenfurt" className="rounded-sm border border-brand-line px-3 py-1.5 text-sm text-brand-ink hover:border-brand-gold hover:text-brand-gold">Klagenfurt</Link>
        </div>
        <Link href="/de/service-areas" className="mt-4 inline-block text-sm font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold">
          Alle Einsatzgebiete →
        </Link>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Eventtransport planen</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink-2/80">
          Ein paar Angaben genügen, um ein Festpreisangebot per E-Mail zu erhalten:
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {planningPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {point}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-12 text-xl text-brand-ink">Warum ein privater Chauffeur für Ihre Veranstaltung?</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {whyChauffeur.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-brand-ink-2/80">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              {point}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-12 mb-6 text-xl text-brand-ink">Häufig gestellte Fragen zum Eventtransport</h2>
        <FaqAccordion items={faqs} />
      </section>

      <BookingCta
        locale="de"
        pageType="event"
        title="Planen Sie Ihren Eventtransport"
        description="Teilen Sie uns Ihr Veranstaltungsdatum, den Veranstaltungsort und Ihre Gästedetails mit, und wir bestätigen einen Fahrzeugplan und Festpreis per E-Mail."
      />
    </>
  )
}
