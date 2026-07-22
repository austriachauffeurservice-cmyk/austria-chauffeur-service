export function LocationMap({ query, label }: { query: string; label: string }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
      <h2 className="font-display text-xl text-brand-ink">{label}</h2>
      <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-sm border border-brand-line">
        <iframe
          src={src}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={label}
        />
      </div>
    </section>
  )
}
