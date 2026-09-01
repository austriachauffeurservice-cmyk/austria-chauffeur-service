'use client'

import { useEffect, useState } from 'react'

// Renders only after mount so the server-rendered markup never contains a
// time value — avoids any SSR/client hydration mismatch.
export function AustriaTimeWidget({ locale = 'en' }: { locale?: 'en' | 'de' }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat(locale === 'de' ? 'de-AT' : 'en-GB', {
          timeZone: 'Europe/Vienna',
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date())
      )
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [locale])

  const label = locale === 'de' ? 'Uhrzeit in Österreich' : 'Time in Austria'

  return (
    <div className="inline-flex items-center gap-2 rounded-sm border border-brand-line bg-white px-4 py-2.5 text-sm">
      <span aria-hidden="true">🕐</span>
      <span className="font-semibold text-brand-ink">{label}:</span>
      <span className="text-brand-ink-2/80">{time ?? '—:—'}</span>
    </div>
  )
}
