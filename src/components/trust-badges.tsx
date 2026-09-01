import { ServiceIcon } from '@/components/service-icon'
import type { Locale } from '@/lib/i18n'

// Genuine, verifiable-by-nature operational facts only — no third-party
// platform ratings/awards here unless they are real and currently held.
const copy: Record<
  Locale,
  { icon: string; title: string; subtitle: string }[]
> = {
  en: [
    { icon: 'shield', title: 'Licensed Partner Network', subtitle: 'Passengers Covered by Insurance' },
    { icon: 'mail', title: 'No Payment Required to Request a Quote', subtitle: 'Confirmed by Email First' },
    { icon: 'clock', title: '24/7 Availability', subtitle: 'Booking & Support' },
  ],
  de: [
    { icon: 'shield', title: 'Lizenziertes Partnernetzwerk', subtitle: 'Fahrgäste sind versichert' },
    { icon: 'mail', title: 'Keine Zahlung für die Anfrage nötig', subtitle: 'Erst Bestätigung per E-Mail' },
    { icon: 'clock', title: '24/7 Verfügbarkeit', subtitle: 'Buchung & Support' },
  ],
}

export function TrustBadges({ locale = 'en' }: { locale?: Locale }) {
  const t = copy[locale]
  return (
    <section className="border-b border-brand-line bg-brand-cream py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-3 items-center justify-items-center text-center">
          {t.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-gold border border-brand-line mb-2 shadow-sm">
                <ServiceIcon name={badge.icon} className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold text-brand-ink uppercase tracking-wider">{badge.title}</p>
              <p className="text-[11px] font-medium text-brand-ink-2/65 mt-0.5">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
