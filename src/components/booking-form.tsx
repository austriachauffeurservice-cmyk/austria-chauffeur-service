'use client'

import { Suspense, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import type { VehicleType } from '@/lib/content/services'
import type { Locale } from '@/lib/i18n'
import { trackEvent } from '@/lib/analytics'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type JourneyType = 'one_way' | 'return'

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
    journeyType: string
    oneWay: string
    return: string
    date: string
    time: string
    returnDate: string
    returnTime: string
    passengers: string
    vehicle: string
    vehicleOptions: { value: VehicleType; label: string }[]
    luggage: string
    luggageOptions: { value: string; label: string }[]
    skiEquipment: string
    childSeat: string
    childSeatOptions: { value: string; label: string }[]
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
        For a cross-border journey, simply enter your destination — for example{' '}
        <span className="italic">&quot;{a}&quot;</span> or <span className="italic">&quot;{b}&quot;</span> — as your
        drop-off.
      </>
    ),
    hourlyHint:
      'Need an hourly chauffeur or multi-stop journey? Mention it in the notes and we’ll quote it separately.',
    fullName: 'Full Name',
    phone: 'Phone',
    email: 'Email',
    pickupLocation: 'Pickup Location',
    pickupPlaceholder: 'e.g. Vienna Airport',
    dropoffLocation: 'Drop-off Location',
    dropoffPlaceholder: 'e.g. Salzburg City Center',
    journeyType: 'Journey Type',
    oneWay: 'One Way',
    return: 'Return',
    date: 'Date',
    time: 'Time',
    returnDate: 'Return Date',
    returnTime: 'Return Time',
    passengers: 'Passengers',
    vehicle: 'Vehicle',
    vehicleOptions: [
      { value: 'sedan', label: 'Business Sedan — up to 3 passengers' },
      { value: 'luxury', label: 'Luxury Sedan — up to 3 passengers' },
      { value: 'van', label: 'Executive Van — up to 7 passengers' },
      { value: 'minibus', label: 'Minibus — up to 16 passengers' },
    ],
    luggage: 'Luggage (optional)',
    luggageOptions: [
      { value: '', label: 'Not sure / prefer to specify in notes' },
      { value: 'none', label: 'None / hand luggage only' },
      { value: '1-3', label: '1–3 bags' },
      { value: '4-6', label: '4–6 bags' },
      { value: '7+', label: '7+ bags' },
    ],
    skiEquipment: 'Traveling with ski or snowboard equipment',
    childSeat: 'Child Seat / Booster (optional)',
    childSeatOptions: [
      { value: '', label: 'Not needed' },
      { value: 'child_seat', label: 'Child seat' },
      { value: 'booster_seat', label: 'Booster seat' },
      { value: 'both', label: 'Both' },
    ],
    flightNumber: 'Flight Number (if applicable)',
    notes: 'Notes (optional)',
    notesPlaceholder: 'Children\'s ages/heights, extra stops, accessibility requirements, special requests, etc.',
    submit: 'Request a Fixed Quote',
    submitting: 'Sending...',
    genericError: 'Something went wrong. Please try again.',
    networkError: 'Network error. Please check your connection and try again.',
    successTitle: 'Request received',
    successBody:
      'Thank you — we’ve emailed you a confirmation. Our team will follow up shortly with availability and pricing. Please check your inbox and spam folder if you don’t see our reply.',
    reference: 'Reference',
    submitAnother: 'Submit another request',
  },
  de: {
    crossBorderHint: (a, b) => (
      <>
        Für eine grenzüberschreitende Fahrt geben Sie einfach Ihr Ziel ein — z. B.{' '}
        <span className="italic">&quot;{a}&quot;</span> oder <span className="italic">&quot;{b}&quot;</span> — als
        Ablieferort.
      </>
    ),
    hourlyHint:
      'Benötigen Sie einen Stundenchauffeur oder eine Mehrfachstopp-Fahrt? Vermerken Sie das im Notizfeld — wir erstellen ein separates Angebot.',
    fullName: 'Vollständiger Name',
    phone: 'Telefon',
    email: 'E-Mail',
    pickupLocation: 'Abholort',
    pickupPlaceholder: 'z. B. Flughafen Wien',
    dropoffLocation: 'Zielort',
    dropoffPlaceholder: 'z. B. Salzburg Stadtzentrum',
    journeyType: 'Fahrtart',
    oneWay: 'Einfache Fahrt',
    return: 'Hin- und Rückfahrt',
    date: 'Datum',
    time: 'Uhrzeit',
    returnDate: 'Rückfahrt-Datum',
    returnTime: 'Rückfahrt-Uhrzeit',
    passengers: 'Fahrgäste',
    vehicle: 'Fahrzeug',
    vehicleOptions: [
      { value: 'sedan', label: 'Business-Limousine — bis zu 3 Personen' },
      { value: 'luxury', label: 'Luxus-Limousine — bis zu 3 Personen' },
      { value: 'van', label: 'Executive Van — bis zu 7 Personen' },
      { value: 'minibus', label: 'Kleinbus — bis zu 16 Personen' },
    ],
    luggage: 'Gepäck (optional)',
    luggageOptions: [
      { value: '', label: 'Nicht sicher / lieber im Notizfeld angeben' },
      { value: 'none', label: 'Keines / nur Handgepäck' },
      { value: '1-3', label: '1–3 Koffer' },
      { value: '4-6', label: '4–6 Koffer' },
      { value: '7+', label: '7+ Koffer' },
    ],
    skiEquipment: 'Reise mit Ski- oder Snowboardausrüstung',
    childSeat: 'Kindersitz / Sitzerhöhung (optional)',
    childSeatOptions: [
      { value: '', label: 'Nicht benötigt' },
      { value: 'child_seat', label: 'Kindersitz' },
      { value: 'booster_seat', label: 'Sitzerhöhung' },
      { value: 'both', label: 'Beides' },
    ],
    flightNumber: 'Flugnummer (falls zutreffend)',
    notes: 'Notizen (optional)',
    notesPlaceholder: 'Alter/Größe der Kinder, zusätzliche Stopps, Barrierefreiheit, besondere Wünsche usw.',
    submit: 'Festpreis anfragen',
    submitting: 'Wird gesendet...',
    genericError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    networkError: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    successTitle: 'Anfrage erhalten',
    successBody:
      'Vielen Dank — wir haben Ihnen eine Bestätigung per E-Mail gesendet. Unser Team meldet sich in Kürze mit Verfügbarkeit und Preis. Bitte prüfen Sie auch Ihren Spam-Ordner, falls Sie unsere Antwort nicht sehen.',
    reference: 'Referenz',
    submitAnother: 'Weitere Anfrage senden',
  },
}

export function BookingForm({
  locale = 'en',
  defaultPickup,
  defaultDropoff,
  showCrossBorderHint = true,
  dropoffHint,
}: {
  locale?: Locale
  // Initial values only (rendered as defaultValue, never overwrites what the
  // visitor types) — used when this form is embedded directly on a
  // commercial page, as opposed to the ?to= param used when linking to
  // /booking from elsewhere.
  defaultPickup?: string
  defaultDropoff?: string
  // False on pages that are definitively domestic (e.g. a non-cross-border
  // route page) so the Bratislava/Munich example doesn't confuse a Seefeld
  // customer — see the Aug 2026 route-page audit.
  showCrossBorderHint?: boolean
  // Replaces the generic cross-border example text with route-specific
  // drop-off guidance, for a flagship route page that already knows its own
  // destination (e.g. "Your destination is Bratislava...").
  dropoffHint?: string
}) {
  return (
    <Suspense fallback={null}>
      <BookingFormInner
        locale={locale}
        defaultPickup={defaultPickup}
        defaultDropoff={defaultDropoff}
        showCrossBorderHint={showCrossBorderHint}
        dropoffHint={dropoffHint}
      />
    </Suspense>
  )
}

function BookingFormInner({
  locale,
  defaultPickup,
  defaultDropoff,
  showCrossBorderHint,
  dropoffHint,
}: {
  locale: Locale
  defaultPickup?: string
  defaultDropoff?: string
  showCrossBorderHint: boolean
  dropoffHint?: string
}) {
  const searchParams = useSearchParams()
  const prefillPickup = defaultPickup || ''
  const prefillDropoff = defaultDropoff || searchParams.get('to') || ''
  const t = strings[locale]

  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [referenceId, setReferenceId] = useState<string | null>(null)
  const [journeyType, setJourneyType] = useState<JourneyType>('one_way')
  const hasTrackedStart = useRef(false)

  function handleFormFocus() {
    if (hasTrackedStart.current) return
    hasTrackedStart.current = true
    trackEvent('form_start', { form_name: 'booking' })
  }

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
      journeyType,
      returnDate: journeyType === 'return' ? String(formData.get('returnDate') || '') : '',
      returnTime: journeyType === 'return' ? String(formData.get('returnTime') || '') : '',
      luggage: String(formData.get('luggage') || ''),
      skiEquipment: formData.get('skiEquipment') === 'on',
      childSeat: String(formData.get('childSeat') || ''),
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
        trackEvent('form_submit_error', { form_name: 'booking', reason: 'validation_or_server' })
        return
      }

      const data = await res.json()
      setReferenceId(data.id)
      setStatus('success')
      form.reset()
      setJourneyType('one_way')
      trackEvent('form_submit', { form_name: 'booking', vehicle_type: payload.vehicleType, journey_type: payload.journeyType })
    } catch {
      setErrorMessage(t.networkError)
      setStatus('error')
      trackEvent('form_submit_error', { form_name: 'booking', reason: 'network' })
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
    <form onSubmit={handleSubmit} onFocusCapture={handleFormFocus} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        {dropoffHint ? (
          <p className="text-xs text-brand-ink-2/70">{dropoffHint}</p>
        ) : (
          showCrossBorderHint && (
            <p className="text-xs text-brand-ink-2/70">
              {t.crossBorderHint('Bratislava, Slovakia', 'Munich, Germany')}
            </p>
          )
        )}
        <p className={dropoffHint || showCrossBorderHint ? 'mt-1 text-xs text-brand-ink-2/70' : 'text-xs text-brand-ink-2/70'}>{t.hourlyHint}</p>
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
        <input
          id="pickupLocation"
          name="pickupLocation"
          required
          defaultValue={prefillPickup}
          className={inputClass}
          placeholder={t.pickupPlaceholder}
        />
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

      <div className="sm:col-span-2">
        <label className={labelClass}>{t.journeyType}</label>
        <div className="flex gap-2">
          {(['one_way', 'return'] as const).map((jt) => (
            <button
              key={jt}
              type="button"
              onClick={() => setJourneyType(jt)}
              className={`rounded-sm border px-4 py-2 text-sm font-semibold transition-colors ${
                journeyType === jt
                  ? 'border-brand-gold bg-brand-gold/10 text-brand-ink'
                  : 'border-brand-line bg-white text-brand-ink-2/70 hover:border-brand-gold'
              }`}
            >
              {jt === 'one_way' ? t.oneWay : t.return}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="pickupDate">{t.date}</label>
        <input id="pickupDate" name="pickupDate" type="date" required min={today} className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="pickupTime">{t.time}</label>
        <input id="pickupTime" name="pickupTime" type="time" required className={inputClass} />
      </div>

      {journeyType === 'return' && (
        <>
          <div>
            <label className={labelClass} htmlFor="returnDate">{t.returnDate}</label>
            <input id="returnDate" name="returnDate" type="date" required min={today} className={inputClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="returnTime">{t.returnTime}</label>
            <input id="returnTime" name="returnTime" type="time" required className={inputClass} />
          </div>
        </>
      )}

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

      <div>
        <label className={labelClass} htmlFor="luggage">{t.luggage}</label>
        <select id="luggage" name="luggage" defaultValue="" className={inputClass}>
          {t.luggageOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="childSeat">{t.childSeat}</label>
        <select id="childSeat" name="childSeat" defaultValue="" className={inputClass}>
          {t.childSeatOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2 flex items-center gap-2">
        <input
          id="skiEquipment"
          name="skiEquipment"
          type="checkbox"
          className="h-4 w-4 rounded-sm border-brand-line text-brand-gold focus:ring-brand-gold"
        />
        <label htmlFor="skiEquipment" className="text-sm text-brand-ink-2">{t.skiEquipment}</label>
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
