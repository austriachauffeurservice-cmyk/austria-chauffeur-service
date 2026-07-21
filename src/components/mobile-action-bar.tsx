import Link from 'next/link'
import { ServiceIcon } from '@/components/service-icon'
import { contactPhone } from '@/lib/content/site'

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-brand-line bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={`tel:${contactPhone.replace(/\s+/g, '')}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-brand-line py-3.5 text-sm font-semibold text-brand-ink"
      >
        <ServiceIcon name="phone" className="h-4 w-4" />
        Call
      </a>
      <Link
        href="/booking"
        className="flex flex-1 items-center justify-center gap-2 bg-brand-gold py-3.5 text-sm font-semibold text-brand-ink"
      >
        Book Now
      </Link>
    </div>
  )
}
