import Link from 'next/link'
import { ServiceIcon } from '@/components/service-icon'
import { contactEmail } from '@/lib/content/site'
import { localizedHref, type Locale } from '@/lib/i18n'

const strings: Record<Locale, { email: string; book: string }> = {
  en: { email: 'Email', book: 'Book Now' },
  de: { email: 'E-Mail', book: 'Jetzt buchen' },
}

export function MobileActionBar({ locale = 'en' }: { locale?: Locale }) {
  const t = strings[locale]
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-brand-line bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={`mailto:${contactEmail}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-brand-line py-3.5 text-sm font-semibold text-brand-ink"
      >
        <ServiceIcon name="mail" className="h-4 w-4" />
        {t.email}
      </a>
      <Link
        href={localizedHref('/booking', locale)}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-gold py-3.5 text-sm font-semibold text-brand-ink"
      >
        {t.book}
      </Link>
    </div>
  )
}
