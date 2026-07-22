import type { Metadata } from 'next'
import { contactAddress, contactEmail, siteName, siteUrl } from '@/lib/content/site'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'Allgemeine Geschäftsbedingungen (AGB) für Buchungen bei ' + siteName + '.',
  alternates: { canonical: '/agb' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName,
    locale: 'en_US',
    url: `${siteUrl}/agb`,
    title: 'Allgemeine Geschäftsbedingungen',
    description: 'Allgemeine Geschäftsbedingungen (AGB) für Buchungen bei ' + siteName + '.',
  },
}

export default function AgbPage() {
  return (
    <section lang="de" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">AGB</p>
      <h1 className="font-display mt-2 text-3xl text-brand-ink sm:text-4xl">
        Allgemeine Geschäftsbedingungen
      </h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-ink-2/90">
        <div>
          <h2 className="font-display text-lg text-brand-ink">1. Geltungsbereich</h2>
          <p className="mt-2">
            Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung des Buchungsportals von
            {' '}{siteName} ({contactAddress}) zur Vermittlung privater Chauffeurtransfers innerhalb
            Österreichs sowie für grenzüberschreitende Fahrten in die Nachbarländer.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">2. Rolle von {siteName}</h2>
          <p className="mt-2">
            {siteName} betreibt ein Online-Buchungsportal und vermittelt Transferanfragen an
            unabhängige, eigenständig gewerberechtlich befugte Chauffeurunternehmen
            (&quot;ausführender Transportpartner&quot;). Der Beförderungsvertrag über die
            eigentliche Fahrt kommt direkt zwischen Ihnen und dem ausführenden Transportpartner
            zustande. {siteName} selbst führt keine Beförderungsleistungen durch und ist nicht
            Vertragspartner des Beförderungsvertrags, sondern vermittelt diesen sorgfältig
            ausgewählten, lizenzierten Partnern.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">3. Buchung & Vertragsabschluss</h2>
          <p className="mt-2">
            Eine Buchungsanfrage über das Formular auf dieser Website stellt ein unverbindliches
            Angebot des Kunden dar. Mit unserer schriftlichen Bestätigung von Verfügbarkeit und
            Festpreis per E-Mail bestätigen wir die erfolgreiche Vermittlung an einen
            Transportpartner; der Beförderungsvertrag selbst kommt gemäß Punkt 2 mit diesem
            Partner zustande. Für die Anfrage ist keine Zahlung erforderlich.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">4. Preise & Zahlung</h2>
          <p className="mt-2">
            Der Preis für die Fahrt wird Ihnen vor Fahrtantritt schriftlich als Festpreis
            bestätigt — es erfolgt keine Abrechnung nach Taxameter, und es fallen keine
            unangekündigten Grenz- oder Mautzuschläge an, sofern bei der Buchung keine
            abweichenden Umstände (z. B. geänderte Route, zusätzliche Stopps) vereinbart wurden.
            Die Zahlung erfolgt, sofern bei der Bestätigung nicht anders angegeben, direkt an den
            ausführenden Transportpartner.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">5. Stornierung</h2>
          <p className="mt-2">
            Stornierungen bis mindestens 24 Stunden vor dem geplanten Abholzeitpunkt sind
            kostenlos. Bei Stornierung innerhalb von 24 Stunden vor Abholung kann je nach Strecke
            und reserviertem Fahrzeug eine Stornogebühr anfallen, die vor Fahrtantritt mitgeteilt
            wird.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">6. Flugverfolgung & Wartezeit</h2>
          <p className="mt-2">
            Bei Flughafentransfers verfolgen wir bei rechtzeitiger Bekanntgabe der Flugnummer den
            Flugstatus und leiten Verspätungen an den Transportpartner weiter, damit die Abholzeit
            entsprechend angepasst wird, ohne Zusatzkosten für angemessene, flugbedingte
            Wartezeiten.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">7. Pflichten des Kunden</h2>
          <p className="mt-2">
            Der Kunde ist verpflichtet, bei der Buchung korrekte und vollständige Angaben zu
            Abhol- und Zielort, Datum, Uhrzeit, Personenzahl und Gepäck zu machen. Für Verzögerungen
            oder Mehrkosten aufgrund unrichtiger Angaben übernehmen wir keine Haftung.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">8. Haftung</h2>
          <p className="mt-2">
            {siteName} haftet für die sorgfältige Auswahl und Vermittlung des Transportpartners
            sowie für Schäden aus eigenem Verschulden nach den gesetzlichen Bestimmungen. Für die
            eigentliche Durchführung der Fahrt — insbesondere Pünktlichkeit, Fahrverhalten und
            Sicherheit während der Beförderung — haftet der ausführende Transportpartner als
            Vertragspartner des Beförderungsvertrags. Für Vorsatz oder grobe Fahrlässigkeit haften
            wir uneingeschränkt nach den gesetzlichen Bestimmungen; für leichte Fahrlässigkeit
            sowie für Verzögerungen aufgrund höherer Gewalt, Verkehrsbehinderungen oder
            behördlicher Anordnungen wird unsere Haftung, soweit gesetzlich zulässig,
            ausgeschlossen.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">9. Anwendbares Recht & Gerichtsstand</h2>
          <p className="mt-2">
            Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand für
            Streitigkeiten mit Unternehmern ist das sachlich zuständige Gericht in Wien, soweit
            zwingende gesetzliche Verbraucherschutzbestimmungen nicht entgegenstehen.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg text-brand-ink">10. Kontakt</h2>
          <p className="mt-2">
            Fragen zu diesen Bedingungen richten Sie bitte an{' '}
            <a href={`mailto:${contactEmail}`} className="text-brand-gold hover:underline">
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
