// Admin panel color tokens — mirrors the brand palette in src/app/globals.css
// (--brand-ink, --brand-gold, etc.) since the admin panel uses inline styles
// rather than Tailwind and can't reach the CSS custom properties directly.
export const adminColors = {
  bg: '#0e131a', // brand-ink
  bgPanel: '#1a212c', // brand-ink-2
  gold: '#b8934a', // brand-gold
  goldLight: '#d9bd82', // brand-gold-light
  cream: '#f6f3ee', // brand-cream
  text: '#f6f3ee',
  textMuted: 'rgba(246,243,238,0.6)',
  textFaint: 'rgba(246,243,238,0.35)',
  border: 'rgba(246,243,238,0.1)',
  borderStrong: 'rgba(246,243,238,0.16)',
  panel: 'rgba(246,243,238,0.04)',
  goldTint: 'rgba(184,147,74,0.12)',
  goldBorder: 'rgba(184,147,74,0.3)',
  green: '#7bbf8f',
  greenTint: 'rgba(123,191,143,0.15)',
  red: '#e08a7d',
  redTint: 'rgba(224,138,125,0.12)',
  redBorder: 'rgba(224,138,125,0.3)',
  blue: '#8fb3d9',
  blueTint: 'rgba(143,179,217,0.15)',
  yellow: '#e0c07d',
  yellowTint: 'rgba(224,192,125,0.15)',
} as const
