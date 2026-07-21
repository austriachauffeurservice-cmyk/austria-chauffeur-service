export type Locale = 'en' | 'de'

export function localizedHref(path: string, locale: Locale): string {
  if (locale === 'en') return path
  return path === '/' ? '/de' : `/de${path}`
}

export function delocalizePath(pathname: string): string {
  if (pathname === '/de') return '/'
  if (pathname.startsWith('/de/')) return pathname.slice(3)
  return pathname
}
