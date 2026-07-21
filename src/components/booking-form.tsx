'use client'

import { Suspense, useState, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import type { VehicleType } from '@/lib/content/services'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-sm border border-brand-line bg-white px-3.5 py-2.5 text-sm text-brand-ink placeholder:text-brand-ink-2/40 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-ink-2'

export function BookingForm() {
  return (
    <Suspense fallback={null}>
      <BookingFormInner />
    </Suspense>
  )
}

function BookingFormInner() {
  const searchParams = useSearchParams()
  const prefillDropoff = searchParams.get('to') || ''

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
    }

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorMessage(
          data?.issues?.[0]?.message || data?.error || 'Something went wrong. Please try again.'
        )
        setStatus('error')
        return
      }

      const data = await res.json()
      setReferenceId(data.id)
      setStatus('success')
      form.reset()
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-sm border border-brand-gold/40 bg-brand-cream p-8 text-center">
        <p className="font-display text-xl text-brand-ink">Request received</p>
        <p className="mt-2 text-sm text-brand-ink-2">
          Thank you — we&apos;ve emailed you a confirmation. Our team will follow up shortly with
          availability and pricing.
        </p>
        {referenceId && (
          <p className="mt-3 text-xs text-brand-ink-2/60">Reference: {referenceId}</p>
        )}
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-sm bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-gold"
        >
          Submit another request
        </button>
      </div>
    )
  }

  const today = new Date().toISOString().slice(0, 10)

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <p className="text-xs text-brand-ink-2/70">
          Cross-border trip? Just enter the destination — e.g.{' '}
          <span className="italic">&quot;Bratislava, Slovakia&quot;</span> or{' '}
          <span className="italic">&quot;Munich, Germany&quot;</span> — as your drop-off.
        </p>
        <p className="mt-1 text-xs text-brand-ink-2/70">
          Need an hourly or multi-stop booking instead of a single transfer? Enter your first
          pickup point and note the hourly hire under Notes below — we&apos;ll quote it separately.
        </p>
      </div>

      <div>
        <label className={labelClass} htmlFor="fullName">Full Name</label>
        <input id="fullName" name="fullName" required minLength={2} className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="+43 ..." />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="pickupLocation">Pickup Location</label>
        <input id="pickupLocation" name="pickupLocation" required className={inputClass} placeholder="e.g. Vienna Airport" />
      </div>
      <div>
        <label className={labelClass} htmlFor="dropoffLocation">Drop-off Location</label>
        <input
          id="dropoffLocation"
          name="dropoffLocation"
          required
          defaultValue={prefillDropoff}
          className={inputClass}
          placeholder="e.g. Salzburg City Center"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="pickupDate">Date</label>
        <input id="pickupDate" name="pickupDate" type="date" required min={today} className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="pickupTime">Time</label>
        <input id="pickupTime" name="pickupTime" type="time" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="passengers">Passengers</label>
        <input id="passengers" name="passengers" type="number" min={1} max={50} defaultValue={1} required className={inputClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="vehicleType">Vehicle</label>
        <select id="vehicleType" name="vehicleType" defaultValue="sedan" className={inputClass}>
          <option value="sedan">Business Sedan</option>
          <option value="luxury">Luxury Sedan</option>
          <option value="van">Executive Van</option>
          <option value="minibus">Minibus</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="flightNumber">Flight Number (optional)</label>
        <input id="flightNumber" name="flightNumber" className={inputClass} placeholder="e.g. OS 123" />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="notes">Notes (optional)</label>
        <textarea id="notes" name="notes" rows={3} className={inputClass} placeholder="Child seats, extra stops, border-crossing details, etc." />
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
          {status === 'submitting' ? 'Submitting...' : 'Request Booking'}
        </button>
      </div>
    </form>
  )
}
