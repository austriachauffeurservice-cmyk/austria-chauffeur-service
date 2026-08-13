import Link from 'next/link'
import { ServiceIcon } from '@/components/service-icon'
import { contactEmail, whatsappLink } from '@/lib/content/site'
import { localizedHref, type Locale } from '@/lib/i18n'

const strings: Record<Locale, { email: string; book: string; whatsapp: string; whatsappMessage: string }> = {
  en: {
    email: 'Email',
    book: 'Book Now',
    whatsapp: 'WhatsApp',
    whatsappMessage: "Hi, I'd like to request a private transfer in Austria.",
  },
  de: {
    email: 'E-Mail',
    book: 'Jetzt buchen',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Hallo, ich möchte einen privaten Transfer in Österreich anfragen.',
  },
}

export function MobileActionBar({ locale = 'en' }: { locale?: Locale }) {
  const t = strings[locale]
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-brand-line bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={`mailto:${contactEmail}`}
        className="flex flex-1 items-center justify-center gap-1.5 border-r border-brand-line py-3.5 text-xs font-semibold text-brand-ink sm:text-sm sm:gap-2"
      >
        <ServiceIcon name="mail" className="h-4 w-4" />
        {t.email}
      </a>
      <a
        href={whatsappLink(t.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-1.5 border-r border-brand-line bg-[#25D366] py-3.5 text-xs font-semibold text-white sm:text-sm sm:gap-2"
      >
        <ServiceIcon name="message" className="h-4 w-4" />
        {t.whatsapp}
      </a>
      <Link
        href={localizedHref('/booking', locale)}
        className="flex flex-1 items-center justify-center gap-1.5 bg-brand-gold py-3.5 text-xs font-semibold text-brand-ink sm:text-sm sm:gap-2"
      >
        {t.book}
      </Link>
    </div>
  )
}
