'use client'

import { useEffect, useState } from 'react'
import { AnalyticsScripts } from '@/components/analytics-scripts'
import type { Locale } from '@/lib/i18n'

const CONSENT_KEY = 'cookie-consent'
type Consent = 'accepted' | 'rejected'

const strings: Record<Locale, { message: string; accept: string; reject: string }> = {
  en: {
    message: 'We use cookies for analytics to understand how visitors use this site and improve it. No cookies are set until you accept.',
    accept: 'Accept',
    reject: 'Decline',
  },
  de: {
    message: 'Wir verwenden Cookies für Analysezwecke, um zu verstehen, wie Besucher diese Website nutzen, und um sie zu verbessern. Es werden keine Cookies gesetzt, bevor Sie zustimmen.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
  },
}

// Gates GA + Microsoft Clarity behind an accept/reject choice, stored in
// localStorage — nothing is sent server-side, and no cookie is set by this
// banner itself. `consent` starts as null (undecided) so the server-rendered
// markup and the first client render match; the real value is read from
// localStorage in an effect, after hydration.
export function CookieConsent({ locale = 'en' }: { locale?: Locale }) {
  const [consent, setConsent] = useState<Consent | null | 'unset'>('unset')
  const t = strings[locale]

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY)
      setConsent(stored === 'accepted' || stored === 'rejected' ? stored : null)
    } catch {
      // Storage blocked (private mode, site-data disabled) — treat as
      // undecided for this visit rather than erroring; the banner will
      // just reappear next time.
      setConsent(null)
    }
  }, [])

  function choose(value: Consent) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value)
    } catch {
      // Ignore — the choice still applies for the rest of this page view.
    }
    setConsent(value)
  }

  if (consent === 'accepted') return <AnalyticsScripts />
  if (consent !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-14 z-[60] border-t border-brand-line bg-white/98 px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] backdrop-blur sm:px-6 md:bottom-0"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-brand-ink-2/80 sm:text-sm">{t.message}</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="rounded-sm border border-brand-line px-4 py-2 text-xs font-semibold text-brand-ink hover:border-brand-gold hover:text-brand-gold sm:text-sm"
          >
            {t.reject}
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="rounded-sm bg-brand-ink px-4 py-2 text-xs font-semibold text-white hover:bg-brand-gold sm:text-sm"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
