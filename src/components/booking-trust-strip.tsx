import { ServiceIcon } from '@/components/service-icon'
import type { Locale } from '@/lib/i18n'

const copy: Record<Locale, { icon: string; text: string }[]> = {
  en: [
    { icon: 'clock', text: 'Free cancellation up to 24h before pickup' },
    { icon: 'shield', text: 'No payment required to request a quote' },
    { icon: 'star', text: 'Fixed price confirmed by email before you travel' },
  ],
  de: [
    { icon: 'clock', text: 'Kostenlose Stornierung bis 24 Std. vor Abholung' },
    { icon: 'shield', text: 'Keine Zahlung für eine Anfrage erforderlich' },
    { icon: 'star', text: 'Festpreis vor der Fahrt per E-Mail bestätigt' },
  ],
}

export function BookingTrustStrip({ locale = 'en' }: { locale?: Locale }) {
  const items = copy[locale]
  return (
    <div className="grid gap-3 border-t border-brand-line pt-5 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.text} className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold">
            <ServiceIcon name={item.icon} className="h-3.5 w-3.5" />
          </span>
          <p className="text-xs leading-relaxed text-brand-ink-2/80">{item.text}</p>
        </div>
      ))}
    </div>
  )
}
