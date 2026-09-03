import type { NextConfig } from "next";

// Third-party origins actually loaded by this site (verified against the
// codebase — src/components/analytics-scripts.tsx and location-map.tsx —
// rather than a generic template), so the CSP below only allowlists what's
// really in use:
//   - Google Tag Manager / Analytics (analytics-scripts.tsx)
//   - Microsoft Clarity (analytics-scripts.tsx)
//   - Google Maps embed iframe (location-map.tsx, contact + service-area pages)
// Fonts (Geist, Geist Mono, Playfair Display) are next/font/google — Next.js
// downloads and self-hosts these at build time, so no external font-src is
// needed. Supabase is only called from server code (src/lib/supabase/server.ts),
// never from the browser, so no connect-src entry is needed for it either.
//
// script-src/style-src need 'unsafe-inline': this site is fully statically
// generated (next build produces almost entirely ○ Static / ● SSG pages),
// which is incompatible with Next.js's nonce-based CSP approach (nonces
// require dynamic rendering on every request — see
// node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md).
// Inline usage that would otherwise be blocked: the JSON-LD schema blocks
// rendered by src/components/json-ld.tsx on nearly every page, the two
// inline <Script> blocks in analytics-scripts.tsx, and inline style={{}}
// attributes used throughout the admin dashboard. This is the same
// "Without Nonces" pattern shown in Next's own CSP guide for statically
// generated apps.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.google-analytics.com;
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.clarity.ms https://*.clarity.ms;
  frame-src 'self' https://*.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, ' ')
  .trim();

const nextConfig: NextConfig = {
  // Next.js sends `X-Powered-By: Next.js` by default; strip it so the
  // response doesn't advertise the framework/version to a would-be attacker.
  poweredByHeader: false,

  // This app has three independent root layouts — (site), de, and admin —
  // so a plain app/not-found.tsx has no single layout to compose into for a
  // URL that doesn't match any of them. app/global-not-found.tsx covers that
  // case; it needs this flag until the feature graduates out of experimental.
  experimental: {
    globalNotFound: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Modern clickjacking control (works alongside frame-ancestors
          // above); kept as SAMEORIGIN rather than DENY since same-origin
          // framing isn't something this site needs to categorically block.
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Content-Security-Policy', value: cspHeader },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // No booking/contact/admin feature on this site touches camera,
          // microphone, geolocation, or payment — safe to disable outright.
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
