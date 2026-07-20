import React from 'react'
import Image from 'next/image'

export function TrustBadges() {
  return (
    <section className="border-b border-brand-line bg-brand-cream py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center text-center">
          
          {/* Badge 1: Google Reviews */}
          <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-14 w-14 mb-2">
              <Image
                src="/images/badges/google-review.webp"
                alt="Google 5.0 Star Reviews - Austria Chauffeur Service Vienna"
                fill
                className="object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300"
                sizes="56px"
              />
            </div>
            <p className="text-xs font-semibold text-brand-ink uppercase tracking-wider">Google Reviews</p>
            <p className="text-[11px] font-medium text-brand-ink-2/65 mt-0.5">5.0 Star Rating</p>
          </div>

          {/* Badge 2: Trustpilot */}
          <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-14 w-14 mb-2">
              <Image
                src="/images/badges/trustpilot.webp"
                alt="Trustpilot Excellent - Austria Chauffeur Service"
                fill
                className="object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300"
                sizes="56px"
              />
            </div>
            <p className="text-xs font-semibold text-brand-ink uppercase tracking-wider">Rated Excellent</p>
            <p className="text-[11px] font-medium text-brand-ink-2/65 mt-0.5">Verified on Trustpilot</p>
          </div>

          {/* Badge 3: TripAdvisor */}
          <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-14 w-14 mb-2">
              <Image
                src="/images/badges/tripadvisor.webp"
                alt="TripAdvisor Travellers Choice - Austria Chauffeur Service"
                fill
                className="object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300"
                sizes="56px"
              />
            </div>
            <p className="text-xs font-semibold text-brand-ink uppercase tracking-wider">TripAdvisor</p>
            <p className="text-[11px] font-medium text-brand-ink-2/65 mt-0.5">Travellers&apos; Choice</p>
          </div>

          {/* Badge 4: Licensed & Insured */}
          <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-14 w-14 mb-2">
              <Image
                src="/images/badges/licensed-shield.webp"
                alt="100% Licensed & Insured Chauffeur Service in Austria"
                fill
                className="object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300"
                sizes="56px"
              />
            </div>
            <p className="text-xs font-semibold text-brand-ink uppercase tracking-wider">100% Licensed</p>
            <p className="text-[11px] font-medium text-brand-ink-2/65 mt-0.5">Fully Insured Passengers</p>
          </div>

          {/* Badge 5: Chauffeur Quality Award */}
          <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-14 w-14 mb-2">
              <Image
                src="/images/badges/austria-quality.webp"
                alt="Premium Quality Chauffeur Award - Austria"
                fill
                className="object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-300"
                sizes="56px"
              />
            </div>
            <p className="text-xs font-semibold text-brand-ink uppercase tracking-wider">Premium Choice</p>
            <p className="text-[11px] font-medium text-brand-ink-2/65 mt-0.5">Chauffeur Approved</p>
          </div>

        </div>
      </div>
    </section>
  )
}
