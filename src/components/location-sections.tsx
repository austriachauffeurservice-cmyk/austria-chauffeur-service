import Link from 'next/link'

export function HotelsSection({
  place,
  hotels,
  hotelNote,
}: {
  place: string
  hotels?: { name: string; area?: string }[]
  hotelNote?: string
}) {
  if ((!hotels || hotels.length === 0) && !hotelNote) return null
  return (
    <section className="border-t border-brand-line bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          Hotel Transfers
        </p>
        <h2 className="font-display mt-2 text-2xl text-brand-ink">
          Hotel Pickup &amp; Drop-off in {place}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-brand-ink-2/80">
          {hotelNote ||
            `Direct pickup and drop-off at hotels throughout ${place} — just share your hotel name and address when booking.`}
        </p>
        {hotels && hotels.length > 0 && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hotels.map((hotel) => (
              <Link
                key={hotel.name}
                href={`/booking?to=${encodeURIComponent(`${hotel.name}, ${place}`)}`}
                className="group flex items-center justify-between gap-3 rounded-sm border border-brand-line p-4 text-sm transition-colors hover:border-brand-gold"
              >
                <span>
                  <span className="font-semibold text-brand-ink group-hover:text-brand-gold">
                    {hotel.name}
                  </span>
                  {hotel.area && (
                    <span className="block text-xs text-brand-ink-2/60">{hotel.area}</span>
                  )}
                </span>
                <span className="shrink-0 text-xs font-semibold text-brand-ink-2/50 group-hover:text-brand-gold">
                  Book →
                </span>
              </Link>
            ))}
          </div>
        )}
        <p className="mt-4 text-xs text-brand-ink-2/60">
          Staying somewhere not listed? We serve every hotel, chalet, and private address in{' '}
          {place} — just enter it as your pickup or drop-off.
        </p>
      </div>
    </section>
  )
}

export function AttractionsSection({
  place,
  attractions,
  heading = 'Top Tourist Attractions',
}: {
  place: string
  attractions?: { name: string; description: string }[]
  heading?: string
}) {
  if (!attractions || attractions.length === 0) return null
  return (
    <section className="border-t border-brand-line bg-brand-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
          Places to See
        </p>
        <h2 className="font-display mt-2 text-2xl text-brand-ink">
          {heading} in {place}
        </h2>
        <p className="mt-3 max-w-xl text-sm text-brand-ink-2/80">
          Add a stop, book a return transfer, or arrange an hourly chauffeur to see {place}&apos;s
          landmarks at your own pace.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {attractions.map((item) => (
            <div key={item.name} className="rounded-sm border border-brand-line bg-white p-5">
              <p className="font-semibold text-brand-ink">{item.name}</p>
              <p className="mt-1.5 text-sm text-brand-ink-2/70">{item.description}</p>
              <Link
                href={`/booking?to=${encodeURIComponent(`${item.name}, ${place}`)}`}
                className="mt-3 inline-block text-xs font-semibold text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-gold"
              >
                Request a transfer here →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
