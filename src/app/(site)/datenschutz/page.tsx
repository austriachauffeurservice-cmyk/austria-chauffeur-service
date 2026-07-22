import type { Metadata } from 'next'
import { contactAddress, contactEmail, siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/datenschutz`,
    title: 'Datenschutzerklärung',
    description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
  },
}

export default function DatenschutzPage() {
  return (
    <section lang="de" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
        Datenschutz
      </p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 text-sm text-brand-ink-2/70">
        Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-ink-2/90">
        <div>
          <h2 className="font-display text-lg text-brand-ink">1. Verantwortlicher</h2>
          <p className="mt-2">
            Verantwortlicher im Sinne der DSGVO ist {siteName} (GesbR), {contactAddress}, erreichbar
            unter{' '}
            <a href={`mailto:${contactEmail}`} className="text-brand-gold hover:underline">
              {contactEmail}
            </a>
            . Details zu den Gesellschaftern finden Sie im{' '}
            <a href="/impressum" className="text-brand-gold hover:underline">
              Impressum
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">2. Welche Daten wir verarbeiten</h2>
          <p className="mt-2">
            Wenn Sie unser Buchungsformular ausfüllen, verarbeiten wir: Name, E-Mail-Adresse,
            Telefonnummer, Abhol- und Zielort, Reisedatum und -uhrzeit, Anzahl der Fahrgäste,
            gewählte Fahrzeugklasse sowie optional Flugnummer und Ihre Notizen. Diese Angaben sind
            zur Bearbeitung Ihrer Transferanfrage erforderlich.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">3. Zweck und Rechtsgrundlage</h2>
          <p className="mt-2">
            Die Verarbeitung erfolgt zur Bearbeitung Ihrer Buchungsanfrage und zur Vermittlung an
            einen ausführenden Transportpartner, mit dem der eigentliche Beförderungsvertrag
            zustande kommt (Art. 6 Abs. 1 lit. b DSGVO). Soweit wir Ihnen nach Abschluss der Fahrt
            Informationen zusenden, stützt sich dies auf unser berechtigtes Interesse an der
            Kundenkommunikation (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">4. Empfänger Ihrer Daten</h2>
          <p className="mt-2">
            Zur Abwicklung Ihrer Anfrage setzen wir folgende Auftragsverarbeiter bzw. Empfänger ein:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              <span><strong>Supabase</strong> — Speicherung Ihrer Buchungsanfrage in unserer Datenbank.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              <span><strong>Resend</strong> — Versand der Bestätigungs- und Benachrichtigungs-E-Mails.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
              <span>
                <strong>Ausführender Transportpartner</strong> — Ihre Buchungsdaten können an den
                Chauffeurbetrieb weitergeleitet werden, der Ihren Transfer tatsächlich durchführt,
                damit dieser die Fahrt disponieren kann.
              </span>
            </li>
          </ul>
          <p className="mt-3">
            Diese Dienstleister können Server außerhalb der EU/des EWR betreiben. In diesem Fall
            achten wir darauf, dass geeignete Garantien (z. B. EU-Standardvertragsklauseln)
            bestehen.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">5. Speicherdauer</h2>
          <p className="mt-2">
            Wir speichern Ihre Buchungsdaten so lange, wie dies zur Abwicklung Ihrer Anfrage und
            zur Erfüllung gesetzlicher Aufbewahrungspflichten (insbesondere handels- und
            steuerrechtlicher Vorgaben) erforderlich ist.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">6. Cookies</h2>
          <p className="mt-2">
            Unsere Website selbst setzt keine Marketing- oder Analyse-Cookies ein. Im
            geschützten Administrationsbereich verwenden wir ein technisch notwendiges
            Session-Cookie zur Anmeldung, das keiner Einwilligung bedarf (Art. 6 Abs. 1 lit. f
            DSGVO, berechtigtes Interesse am sicheren Betrieb).
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">7. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
            personenbezogenen Daten. Wenden Sie sich dazu an{' '}
            <a href={`mailto:${contactEmail}`} className="text-brand-gold hover:underline">
              {contactEmail}
            </a>
            . Zudem steht Ihnen ein Beschwerderecht bei der österreichischen Datenschutzbehörde
            (www.dsb.gv.at) zu.
          </p>
        </div>
      </div>
    </section>
  )
}
