export type Airport = {
  slug: string
  name: string
  code: string
  city: string
  region: string
  distanceFromCity: string
  popularRoutes: string[]
  note?: string
}

export const airports: Airport[] = [
  {
    slug: 'vienna-airport',
    name: 'Flughafen Wien-Schwechat',
    code: 'VIE',
    city: 'Wien',
    region: 'Wien',
    distanceFromCity: '~18 km südöstlich des Stadtzentrums, etwa 20–30 Minuten mit dem Auto',
    popularRoutes: [
      'Flughafen Wien → Stadtzentrum (Innere Stadt)',
      'Flughafen Wien → Salzburg',
      'Flughafen Wien → Bratislava, Slowakei (grenzüberschreitend)',
      'Flughafen Wien → Budapest, Ungarn (grenzüberschreitend)',
    ],
    note: 'Österreichs wichtigstes internationales Tor und unser Hauptsitz.',
  },
  {
    slug: 'salzburg-airport',
    name: 'Flughafen Salzburg (W. A. Mozart)',
    code: 'SZG',
    city: 'Salzburg',
    region: 'Salzburg',
    distanceFromCity: '~4 km westlich des Stadtzentrums, etwa 10–15 Minuten mit dem Auto',
    popularRoutes: [
      'Flughafen Salzburg → Stadtzentrum',
      'Flughafen Salzburg → München, Deutschland (grenzüberschreitend)',
      'Flughafen Salzburg → Zell am See-Kaprun',
      'Flughafen Salzburg → Kitzbühel',
    ],
    note: 'Nahe am Stadtzentrum — eine der kürzesten Flughafen-zu-Hotel-Fahrten Österreichs.',
  },
  {
    slug: 'innsbruck-airport',
    name: 'Flughafen Innsbruck (Kranebitten)',
    code: 'INN',
    city: 'Innsbruck',
    region: 'Tirol',
    distanceFromCity: '~4 km westlich des Stadtzentrums, etwa 10–15 Minuten mit dem Auto',
    popularRoutes: [
      'Flughafen Innsbruck → Stadtzentrum',
      'Flughafen Innsbruck → St. Anton am Arlberg',
      'Flughafen Innsbruck → Kitzbühel',
      'Flughafen Innsbruck → Sölden',
    ],
    note: 'Tirols wichtigstes Tor für Stadtbesuche und Transfers zu Alpinresorts.',
  },
  {
    slug: 'graz-airport',
    name: 'Flughafen Graz',
    code: 'GRZ',
    city: 'Graz',
    region: 'Steiermark',
    distanceFromCity: '~10 km südlich des Stadtzentrums, etwa 15–20 Minuten mit dem Auto',
    popularRoutes: [
      'Flughafen Graz → Stadtzentrum',
      'Flughafen Graz → Wien',
      'Flughafen Graz → Maribor, Slowenien (grenzüberschreitend)',
    ],
  },
  {
    slug: 'linz-airport',
    name: 'Flughafen Linz (Blue Danube Airport)',
    code: 'LNZ',
    city: 'Linz',
    region: 'Oberösterreich',
    distanceFromCity: '~12 km südwestlich des Stadtzentrums, etwa 15–20 Minuten mit dem Auto',
    popularRoutes: [
      'Flughafen Linz → Stadtzentrum',
      'Flughafen Linz → Salzburg',
      'Flughafen Linz → Prag, Tschechien (grenzüberschreitend)',
    ],
  },
  {
    slug: 'klagenfurt-airport',
    name: 'Flughafen Klagenfurt',
    code: 'KLU',
    city: 'Klagenfurt',
    region: 'Kärnten',
    distanceFromCity: '~4 km nördlich des Stadtzentrums, etwa 10 Minuten mit dem Auto',
    popularRoutes: [
      'Flughafen Klagenfurt → Stadtzentrum',
      'Flughafen Klagenfurt → Wörthersee',
      'Flughafen Klagenfurt → Ljubljana, Slowenien (grenzüberschreitend)',
    ],
  },
]
