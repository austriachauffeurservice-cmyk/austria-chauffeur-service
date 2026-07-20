export type CityArea = {
  slug: string
  city: string
  region: string
  airport?: string
  popularRoutes: string[]
  note?: string
}

export type BorderArea = {
  slug: string
  country: string
  cities: string[]
  via: string
  popularRoutes: string[]
  note: string
}

export const austrianCities: CityArea[] = [
  {
    slug: 'vienna',
    city: 'Vienna',
    region: 'Vienna',
    airport: 'Vienna International Airport (VIE)',
    popularRoutes: [
      'Vienna Airport ↔ City Center',
      'Vienna → Salzburg',
      'Vienna → Bratislava, Slovakia (cross-border)',
      'Vienna → Budapest, Hungary (cross-border)',
    ],
    note: 'Head office & primary base',
  },
  {
    slug: 'graz',
    city: 'Graz',
    region: 'Styria',
    airport: 'Graz Airport (GRZ)',
    popularRoutes: [
      'Graz Airport ↔ City Center',
      'Graz → Vienna',
      'Graz → Maribor, Slovenia (cross-border)',
      'Graz → Ljubljana, Slovenia (cross-border)',
    ],
  },
  {
    slug: 'linz',
    city: 'Linz',
    region: 'Upper Austria',
    airport: 'Linz Airport (LNZ)',
    popularRoutes: [
      'Linz → Vienna',
      'Linz → Salzburg',
      'Linz → Prague, Czech Republic (cross-border)',
      'Linz → České Budějovice, Czech Republic (cross-border)',
    ],
  },
  {
    slug: 'salzburg',
    city: 'Salzburg',
    region: 'Salzburg',
    airport: 'Salzburg Airport (SZG)',
    popularRoutes: [
      'Salzburg Airport ↔ City Center',
      'Salzburg → Munich, Germany (cross-border)',
      'Salzburg → Innsbruck',
      'Salzburg → Vienna',
    ],
  },
  {
    slug: 'innsbruck',
    city: 'Innsbruck',
    region: 'Tyrol',
    airport: 'Innsbruck Airport (INN)',
    popularRoutes: [
      'Innsbruck Airport ↔ City Center',
      'Innsbruck → Bolzano / Venice, Italy (Brenner Pass, cross-border)',
      'Innsbruck → Munich, Germany (cross-border)',
      'Innsbruck → Salzburg',
    ],
  },
  {
    slug: 'klagenfurt',
    city: 'Klagenfurt',
    region: 'Carinthia',
    airport: 'Klagenfurt Airport (KLU)',
    popularRoutes: [
      'Klagenfurt → Ljubljana, Slovenia (cross-border)',
      'Klagenfurt → Graz',
      'Klagenfurt → Villach',
    ],
  },
  {
    slug: 'villach',
    city: 'Villach',
    region: 'Carinthia',
    airport: 'Klagenfurt Airport (KLU)',
    popularRoutes: [
      'Villach → Ljubljana, Slovenia (cross-border)',
      'Villach → Venice, Italy (cross-border)',
      'Villach → Klagenfurt',
    ],
  },
  {
    slug: 'wels',
    city: 'Wels',
    region: 'Upper Austria',
    airport: 'Linz Airport (LNZ)',
    popularRoutes: ['Wels → Linz', 'Wels → Salzburg', 'Wels → Munich, Germany (cross-border)'],
  },
  {
    slug: 'st-poelten',
    city: 'St. Pölten',
    region: 'Lower Austria',
    airport: 'Vienna International Airport (VIE)',
    popularRoutes: ['St. Pölten → Vienna', 'St. Pölten → Vienna Airport', 'St. Pölten → Linz'],
  },
  {
    slug: 'wiener-neustadt',
    city: 'Wiener Neustadt',
    region: 'Lower Austria',
    airport: 'Vienna International Airport (VIE)',
    popularRoutes: [
      'Wiener Neustadt → Vienna',
      'Wiener Neustadt → Vienna Airport',
      'Wiener Neustadt → Sopron, Hungary (cross-border)',
    ],
  },
  {
    slug: 'bregenz',
    city: 'Bregenz',
    region: 'Vorarlberg',
    airport: 'Zurich Airport (ZRH, cross-border)',
    popularRoutes: [
      'Bregenz → Zurich, Switzerland (cross-border)',
      'Bregenz → St. Gallen, Switzerland (cross-border)',
      'Bregenz → Innsbruck',
    ],
  },
  {
    slug: 'eisenstadt',
    city: 'Eisenstadt',
    region: 'Burgenland',
    airport: 'Vienna International Airport (VIE)',
    popularRoutes: [
      'Eisenstadt → Vienna',
      'Eisenstadt → Sopron, Hungary (cross-border)',
      'Eisenstadt → Vienna Airport',
    ],
  },
]

export const borderCrossingDestinations: BorderArea[] = [
  {
    slug: 'germany',
    country: 'Germany',
    cities: ['Munich', 'Passau', 'Rosenheim'],
    via: 'via A8 / A93',
    popularRoutes: ['Salzburg → Munich', 'Innsbruck → Munich', 'Vienna → Munich'],
    note: 'Popular for Salzburg & Innsbruck pickups',
  },
  {
    slug: 'czech-republic',
    country: 'Czech Republic',
    cities: ['Prague', 'České Budějovice'],
    via: 'via Linz or Vienna',
    popularRoutes: ['Linz → Prague', 'Vienna → Prague', 'Linz → České Budějovice'],
    note: 'Via Linz or Vienna',
  },
  {
    slug: 'slovakia',
    country: 'Slovakia',
    cities: ['Bratislava'],
    via: 'via A6 motorway',
    popularRoutes: ['Vienna → Bratislava', 'Vienna Airport → Bratislava'],
    note: 'Under an hour from central Vienna',
  },
  {
    slug: 'hungary',
    country: 'Hungary',
    cities: ['Budapest', 'Sopron'],
    via: 'via Vienna or Burgenland',
    popularRoutes: ['Vienna → Budapest', 'Eisenstadt → Sopron', 'Wiener Neustadt → Sopron'],
    note: 'Via Vienna or Burgenland',
  },
  {
    slug: 'slovenia',
    country: 'Slovenia',
    cities: ['Ljubljana', 'Maribor'],
    via: 'via Graz or Klagenfurt',
    popularRoutes: ['Graz → Ljubljana', 'Klagenfurt → Ljubljana', 'Villach → Ljubljana'],
    note: 'Via Graz or Klagenfurt',
  },
  {
    slug: 'italy',
    country: 'Italy',
    cities: ['Venice', 'Bolzano', 'Milan'],
    via: 'via Innsbruck / Brenner Pass',
    popularRoutes: ['Innsbruck → Bolzano', 'Innsbruck → Venice', 'Villach → Venice'],
    note: 'Via Innsbruck / Brenner Pass',
  },
  {
    slug: 'switzerland-liechtenstein',
    country: 'Switzerland & Liechtenstein',
    cities: ['Zurich', 'St. Gallen', 'Vaduz'],
    via: 'via Bregenz / Vorarlberg',
    popularRoutes: ['Bregenz → Zurich', 'Bregenz → St. Gallen', 'Bregenz → Vaduz'],
    note: 'Via Bregenz / Vorarlberg',
  },
]
