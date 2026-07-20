import Link from 'next/link'

interface LogoProps {
  className?: string
  iconOnly?: boolean
  lightText?: boolean
  onClick?: () => void
}

export function Logo({ className = '', iconOnly = false, lightText = false, onClick }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3.5 group ${className}`} onClick={onClick}>
      <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center">
        {/* SVG Crest */}
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d9bd82" />
              <stop offset="50%" stopColor="#b8934a" />
              <stop offset="100%" stopColor="#8a6721" />
            </linearGradient>
          </defs>

          {/* Crown */}
          <path d="M 42 22 L 40 14 L 46 17 L 50 11 L 54 17 L 60 14 L 58 22 Z" fill="url(#logo-gold-gradient)" />
          <circle cx="40" cy="13" r="1" fill="url(#logo-gold-gradient)" />
          <circle cx="50" cy="10" r="1.2" fill="url(#logo-gold-gradient)" />
          <circle cx="60" cy="13" r="1" fill="url(#logo-gold-gradient)" />

          {/* Shield Outer */}
          <path
            d="M 50 83 C 29 73 24 50 24 32 C 38 32 45 28 50 24 C 55 28 62 32 76 32 C 76 50 71 73 50 83 Z"
            stroke="url(#logo-gold-gradient)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Shield Inner */}
          <path
            d="M 50 78 C 33 69 29 49 29 35 C 40 35 46 31 50 28 C 54 31 60 35 71 35 C 71 49 67 69 50 78 Z"
            stroke="url(#logo-gold-gradient)"
            strokeWidth="1"
            opacity="0.6"
            strokeLinejoin="round"
          />

          {/* Monogram A */}
          <path d="M 50 36 L 36 68 H 42 L 50 49 L 58 68 H 64 Z" fill="url(#logo-gold-gradient)" />
          <path d="M 41 58 H 59" stroke="url(#logo-gold-gradient)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-display text-[17px] font-semibold tracking-wide transition-colors ${
              lightText ? 'text-white group-hover:text-brand-gold-light' : 'text-brand-ink group-hover:text-brand-gold'
            }`}
          >
            Austria Chauffeur Service
          </span>
          <span
            className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors ${
              lightText ? 'text-brand-cream/60' : 'text-brand-gold'
            }`}
          >
            Private Transfers · All of Austria
          </span>
        </div>
      )}
    </Link>
  )
}
