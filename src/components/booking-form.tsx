'use client'

import { Suspense, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import type { VehicleType } from '@/lib/content/services'
import type { Locale } from '@/lib/i18n'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-sm border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-ink-2/40 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-ink-2'

const strings: Record<
  Locale,
  {
    crossBorderHint: (a: string, b: string) => ReactNode
    hourlyHint: string
    fullName: string
    phone: string
    email: string
    pickupLocation: string
    pickupPlaceholder: string
    dropoffLocation: string
    dropoffPlaceholder: string
    date: string
    time: string
    passengers: string
    vehicle: string
    vehicleOptions: { value: VehicleType; label: string }[]
    flightNumber: string
    notes: string
    notesPlaceholder: string
    submit: string
    submitting: string
    genericError: string
    networkError: string
    successTitle: string
    successBody: string
    reference: string
    submitAnother: string
  }
> = {
  en: {
    crossBorderHint: (a, b) => (
      <>
        Cross-border trip? Just enter the destination — e.g. <span className="italic">&quot;{a}&quot;</span> or{' '}
        <span className="italic">&quot;{b}&quot;</span> — as your drop-off.
      </>
    ),
    hourlyHint:
      'Need an hourly or multi-stop booking instead of a single transfer? Enter your first pickup point and note the hourly hire under Notes below — we’ll quote it separately.',
    fullName: 'Full Name',
    phone: 'Phone',
    email: 'Email',
    pickupLocation: 'Pickup Location',
    pickupPlaceholder: 'e.g. Vienna Airport',
    dropoffLocation: 'Drop-off Location',
    dropoffPlaceholder: 'e.g. Salzburg City Center',
    date: 'Date',
    time: 'Time',
    passengers: 'Passengers',
    vehicle: 'Vehicle',
    vehicleOptions: [
      { value: 'sedan', label: 'Business Sedan' },
      { value: 'luxury', label: 'Luxury Sedan' },
      { value: 'van', label: 'Executive Van' },
      { value: 'minibus', label: 'Minibus' },
    ],
    flightNumber: 'Flight Number (optional)',
    notes: 'Notes (optional)',
    notesPlaceholder: 'Child seats, extra stops, border-crossing details, etc.',
    submit: 'Request Booking',
    submitting: 'Submitting...',
    genericError: 'Something went wrong. Please try again.',
    networkError: 'Network error. Please check your connection and try again.',
    successTitle: 'Request received',
    successBody:
      'Thank you — we’ve emailed you a confirmation. Our team will follow up shortly with availability and pricing.',
    reference: 'Reference',
    submitAnother: 'Submit another request',
  },
  de: {
    crossBorderHint: (a, b) => (
      <>
        Grenzüberschreitende Fahrt? Geben Sie einfach das Ziel ein — z. B. <span className="italic">&quot;{a}&quot;</span> oder{' '}
        <span className="italic">&quot;{b}&quot;</span> — als Ablieferort.
      </>
    ),
    hourlyHint:
      'Benötigen Sie eine Stunden- oder Mehrfachstopp-Buchung statt eines einzelnen Transfers? Geben Sie Ihren ersten Abholort ein und vermerken Sie die Stundenbuchung unten im Notizfeld — wir erstellen ein separates Angebot.',
    fullName: 'Vollständiger Name',
    phone: 'Telefon',
    email: 'E-Mail',
    pickupLocation: 'Abholort',
    pickupPlaceholder: 'z. B. Flughafen Wien',
    dropoffLocation: 'Zielort',
    dropoffPlaceholder: 'z. B. Salzburg Stadtzentrum',
    date: 'Datum',
    time: 'Uhrzeit',
    passengers: 'Fahrgäste',
    vehicle: 'Fahrzeug',
    vehicleOptions: [
      { value: 'sedan', label: 'Business-Limousine' },
      { value: 'luxury', label: 'Luxus-Limousine' },
      { value: 'van', label: 'Executive Van' },
      { value: 'minibus', label: 'Kleinbus' },
    ],
    flightNumber: 'Flugnummer (optional)',
    notes: 'Notizen (optional)',
    notesPlaceholder: 'Kindersitze, zusätzliche Stopps, Details zum Grenzübertritt usw.',
    submit: 'Buchung anfragen',
    submitting: 'Wird gesendet...',
    genericError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    networkError: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    successTitle: 'Anfrage erhalten',
    successBody:
      'Vielen Dank — wir haben Ihnen eine Bestätigung per E-Mail gesendet. Unser Team meldet sich in Kürze mit Verfügbarkeit und Preis.',
    reference: 'Referenz',
    submitAnother: 'Weitere Anfrage senden',
  },
}

export function BookingForm({ locale = 'en' }: { locale?: Locale }) {
  return (
    <Suspense fallback={null}>
      <BookingFormInner locale={locale} />
    </Suspense>
  )
}

function BookingFormInner({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams()
  const prefillDropoff = searchParams.get('to') || ''
  const t = strings[locale]

  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [referenceId, setReferenceId] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      fullName: String(formData.get('fullName') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      pickupLocation: String(formData.get('pickupLocation') || ''),
      dropoffLocation: String(formData.get('dropoffLocation') || ''),
      pickupDate: String(formData.get('pickupDate') || ''),
      pickupTime: String(formData.get('pickupTime') || ''),
      passengers: Number(formData.get('passengers') || 1),
      vehicleType: String(formData.get('vehicleType') || 'sedan') as VehicleType,
      flightNumber: String(formData.get('flightNumber') || ''),
      notes: String(formData.get('notes') || ''),
      locale,
    }

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorMessage(data?.issues?.[0]?.message || data?.error || t.genericError)
        setStatus('error')
        return
      }

      const data = await res.json()
      setReferenceId(data.id)
      setStatus('success')
      form.reset()
    } catch {
      setErrorMessage(t.networkError)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-sm border border-brand-gold/40 bg-brand-cream p-8 text-center">
        <p className="font-display text-xl text-brand-ink">{t.successTitle}</p>
        <p className="mt-2 text-sm text-brand-ink-2">{t.successBody}</p>
        {referenceId && (
          <p className="mt-3 text-xs text-brand-ink-2/60">{t.reference}: {referenceId}</p>
        )}
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-sm bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          {t.submitAnother}
        </button>
      </div>
    )
  }

  const today = new Date().toISOString().slice(0, 10)

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <p className="text-xs text-brand-ink-2/70">
          {t.crossBorderHint('Bratislava, Slovakia', 'Munich, Germany')}
        </p>
        <p className="mt-1 text-xs text-brand-ink-2/70">{t.hourlyHint}</p>
      </div>

      <div>
        <label className={labelClass} htmlFor="fullName">{t.fullName}</label>
        <input id="fullName" name="fullName" required minLength={2} className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">{t.phone}</label>
        <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="+43 ..." />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="email">{t.email}</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="pickupLocation">{t.pickupLocation}</label>
        <input id="pickupLocation" name="pickupLocation" required className={inputClass} placeholder={t.pickupPlaceholder} />
      </div>
      <div>
        <label className={labelClass} htmlFor="dropoffLocation">{t.dropoffLocation}</label>
        <input
          id="dropoffLocation"
          name="dropoffLocation"
          required
          defaultValue={prefillDropoff}
          className={inputClass}
          placeholder={t.dropoffPlaceholder}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="pickupDate">{t.date}</label>
        <input id="pickupDate" name="pickupDate" type="date" required min={today} className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="pickupTime">{t.time}</label>
        <input id="pickupTime" name="pickupTime" type="time" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="passengers">{t.passengers}</label>
        <input id="passengers" name="passengers" type="number" min={1} max={50} defaultValue={1} required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="vehicleType">{t.vehicle}</label>
        <select id="vehicleType" name="vehicleType" defaultValue="sedan" className={inputClass}>
          {t.vehicleOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="flightNumber">{t.flightNumber}</label>
        <input id="flightNumber" name="flightNumber" className={inputClass} placeholder="e.g. OS 123" />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="notes">{t.notes}</label>
        <textarea id="notes" name="notes" rows={3} className={inputClass} placeholder={t.notesPlaceholder} />
      </div>

      {status === 'error' && errorMessage && (
        <p className="sm:col-span-2 text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-gold disabled:opacity-60"
        >
          {status === 'submitting' ? t.submitting : t.submit}
        </button>
      </div>
    </form>
  )
}
