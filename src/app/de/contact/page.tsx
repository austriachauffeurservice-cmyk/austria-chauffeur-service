import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { LocationMap } from '@/components/location-map'
import { siteName, contactAddress, contactEmail, siteUrl, whatsappLink, whatsappNumber } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Kontakt zu Austria Chauffeur Service | Privaten Transfer buchen',
  description:
    'Kontaktieren Sie Austria Chauffeur Service für private Flughafen-, Stadt-zu-Stadt-, Ski- und grenzüberschreitende Transfers. Verfügbarkeit und Festpreis per E-Mail oder WhatsApp anfragen.',
  alternates: {
    canonical: '/de/contact',
    languages: { en: '/contact', de: '/de/contact', 'x-default': '/contact' },
  },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'de_AT',
    url: `${siteUrl}/de/contact`,
    title: 'Kontakt zu Austria Chauffeur Service | Privaten Transfer buchen',
    description:
      'Kontaktieren Sie Austria Chauffeur Service für private Flughafen-, Stadt-zu-Stadt-, Ski- und grenzüberschreitende Transfers. Verfügbarkeit und Festpreis per E-Mail oder WhatsApp anfragen.',
  },
}

export default function ContactPageDe() {
  const pageUrl = `${siteUrl}/de/contact`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/de` },
            { '@type': 'ListItem', position: 2, name: 'Kontakt', item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: pageUrl,
          about: {
            '@type': 'Organization',
            name: siteName,
            url: siteUrl,
            address: { '@type': 'PostalAddress', streetAddress: contactAddress },
            contactPoint: [
              { '@type': 'ContactPoint', contactType: 'customer service', email: contactEmail },
              { '@type': 'ContactPoint', contactType: 'customer service', telephone: whatsappNumber },
            ],
          },
        }}
      />

      <section className="border-b border-brand-line bg-brand-cream overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Breadcrumbs items={[{ label: 'Startseite', href: '/de' }, { label: 'Kontakt' }]} />
          <div className="mt-6 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Kontakt
              </p>
              <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
                Kontaktieren Sie unser Dispositionsteam
              </h1>
              <p className="mt-4 max-w-xl text-brand-ink-2/80 leading-relaxed">
                Für die schnellste Antwort nutzen Sie unser Buchungsformular — Ihre Anfrage geht
                direkt an unser Dispositionsteam. Für allgemeine Fragen erreichen Sie uns direkt
                unten.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-line bg-brand-ink shadow-md lg:col-span-5 group">
              <Image
                src="/images/cta-chauffeur.webp"
                alt="Professioneller Chauffeur bereit für den Einsatz in Österreich"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white hover:border-brand-gold transition-colors duration-300">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Buchungen &amp; allgemeine Anfragen</h2>
            <a href={`mailto:${contactEmail}`} className="mt-2 block text-sm font-semibold text-brand-gold hover:underline">
              {contactEmail}
            </a>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white hover:border-[#25D366] transition-colors duration-300">
            <h2 className="font-semibold text-brand-ink font-display text-lg">WhatsApp</h2>
            <a
              href={whatsappLink('Hallo, ich möchte einen privaten Chauffeurtransfer in Österreich anfragen.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-semibold text-[#25D366] hover:underline"
            >
              {whatsappNumber}
            </a>
            <p className="mt-2 text-xs text-brand-ink-2/60">
              Für kurze Fragen — Buchungsanfragen reichen Sie am besten über das Formular ein,
              damit nichts übersehen wird.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Registrierte Adresse</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              {contactAddress}
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Einsatzgebiet</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              Ganz Österreich, plus grenzüberschreitende Transfers nach Deutschland, Tschechien,
              Slowakei, Ungarn, Slowenien, Italien und in die Schweiz &amp; Liechtenstein.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Antwortzeit</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              Bei Buchungsanfragen prüfen wir Ihre Reisedetails und bestätigen Verfügbarkeit und
              Preis per E-Mail.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Transfer für heute benötigt?</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              Senden Sie uns Abholort, Ziel, Uhrzeit und Personenanzahl per WhatsApp oder E-Mail,
              und wir prüfen die Verfügbarkeit.
            </p>
          </div>

          <div className="rounded-sm border border-brand-line p-6 sm:col-span-2 bg-white">
            <h2 className="font-semibold text-brand-ink font-display text-lg">Über unseren Service</h2>
            <p className="mt-2 text-sm text-brand-ink-2/80">
              Austria Chauffeur Service koordiniert private Chauffeurtransfers in ganz Österreich
              und auf ausgewählten grenzüberschreitenden Strecken über ein Netzwerk unabhängiger,
              lizenzierter Chauffeurpartner. Buchungsanfragen werden von unserem Team geprüft,
              Fahrzeug- und Fahrerdetails werden vor der Fahrt per E-Mail bestätigt.
            </p>
          </div>
        </div>
      </section>

      <LocationMap query={contactAddress} label="So finden Sie uns" caption={contactAddress} />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-sm bg-brand-cream p-6 text-center sm:p-10 border border-brand-line">
          <h2 className="font-display text-2xl text-brand-ink">Bereit für Ihre Transferbuchung?</h2>
          <p className="mt-2 text-sm text-brand-ink-2/80">
            Senden Sie Ihre Reisedaten und wir bestätigen per E-Mail mit einem festen, transparenten Preis.
          </p>
          <Link
            href="/de/booking"
            className="mt-6 inline-block rounded-sm bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-gold transition-colors duration-300"
          >
            Festpreis anfragen
          </Link>
        </div>
      </section>
    </>
  )
}
