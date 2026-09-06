declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Thin wrapper around the GA4 gtag() call already loaded by AnalyticsScripts —
// silently no-ops if gtag hasn't loaded yet (e.g. cookie consent not yet
// accepted) or when called during SSR, so callers never need to guard this
// themselves. See the Sept 2026 lead-gen tracking audit for why these
// specific event names exist.
export function trackEvent(name: string, params?: Record<string, string | number | boolean | undefined>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
