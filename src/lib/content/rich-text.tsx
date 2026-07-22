import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

// Content strings may embed `[anchor text](/href)` markdown-style links for
// in-body internal linking. Anything outside that pattern renders as plain text.
export function renderRichText(text: string): ReactNode {
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  linkPattern.lastIndex = 0

  while ((match = linkPattern.exec(text))) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>)
    }
    const href = match[2]
    const linkClass =
      'font-semibold text-brand-gold underline decoration-brand-gold/40 underline-offset-2 hover:decoration-brand-gold'
    parts.push(
      /^https?:\/\//.test(href) ? (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {match[1]}
        </a>
      ) : (
        <Link key={key++} href={href} className={linkClass}>
          {match[1]}
        </Link>
      )
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>)
  }
  return parts
}
