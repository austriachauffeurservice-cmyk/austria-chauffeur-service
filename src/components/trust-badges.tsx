import Image from 'next/image'
import type { Locale } from '@/lib/i18n'

const copy: Record<
  Locale,
  { title: string; subtitle: string }[]
> = {
  en: [
    { title: 'Google Reviews', subtitle: '5.0 Star Rating' },
    { title: 'Rated Excellent', subtitle: 'Verified on Trustpilot' },
    { title: 'TripAdvisor', subtitle: "Travellers' Choice" },
    { title: '100% Licensed', subtitle: 'Fully Insured Passengers' },
    { title: 'Premium Choice', subtitle: 'Chauffeur Approved' },
  ],
  de: [
    { title: 'Google Rezensionen', subtitle: '5,0 Sterne Bewertung' },
    { title: 'Ausgezeichnet bewertet', subtitle: 'Verifiziert auf Trustpilot' },
    { title: 'TripAdvisor', subtitle: 'Travellers’ Choice' },
    { title: '100% lizenziert', subtitle: 'Vollversicherte Fahrgäste' },
    { title: 'Premium-Wahl', subtitle: 'Chauffeur-geprüft' },
  ],
}

const badgeImages = [
  { src: '/images/badges/google-review.webp', alt: 'Google 5.0 Star Reviews - Austria Chauffeur Service Vienna' },
  { src: '/images/badges/trustpilot.webp', alt: 'Trustpilot Excellent - Austria Chauffeur Service' },
  { src: '/images/badges/tripadvisor.webp', alt: 'TripAdvisor Travellers Choice - Austria Chauffeur Service' },
  { src: '/images/badges/licensed-shield.webp', alt: '100% Licensed & Insured Chauffeur Service in Austria' },
  { src: '/images/badges/austria-quality.webp', alt: 'Premium Quality Chauffeur Award - Austria' },
]

export function TrustBadges({ locale = 'en' }: { locale?: Locale }) {
  const t = copy[locale]
  return (
    <section className="border-b border-brand-line bg-brand-cream py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center text-center">
          {badgeImages.map((badge, i) => (
            <div key={badge.src} className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-14 w-14 mb-2">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300"
                  sizes="56px"
                />
              </div>
              <p className="text-xs font-semibold text-brand-ink uppercase tracking-wider">{t[i].title}</p>
              <p className="text-[11px] font-medium text-brand-ink-2/65 mt-0.5">{t[i].subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
