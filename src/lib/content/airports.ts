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
    name: 'Vienna International Airport',
    code: 'VIE',
    city: 'Vienna',
    region: 'Vienna',
    distanceFromCity: '~18km southeast of the city center, roughly 20–30 minutes by car',
    popularRoutes: [
      'Vienna Airport → City Center (Innere Stadt)',
      'Vienna Airport → Salzburg',
      'Vienna Airport → Bratislava, Slovakia (cross-border)',
      'Vienna Airport → Budapest, Hungary (cross-border)',
    ],
    note: "Austria's main international gateway and our head-office base.",
  },
  {
    slug: 'salzburg-airport',
    name: 'Salzburg Airport (W. A. Mozart)',
    code: 'SZG',
    city: 'Salzburg',
    region: 'Salzburg',
    distanceFromCity: '~4km west of the city center, roughly 10–15 minutes by car',
    popularRoutes: [
      'Salzburg Airport → City Center',
      'Salzburg Airport → Munich, Germany (cross-border)',
      'Salzburg Airport → Zell am See-Kaprun',
      'Salzburg Airport → Kitzbühel',
    ],
    note: 'Close to the city center — one of the shortest airport-to-hotel drives in Austria.',
  },
  {
    slug: 'innsbruck-airport',
    name: 'Innsbruck Airport (Kranebitten)',
    code: 'INN',
    city: 'Innsbruck',
    region: 'Tyrol',
    distanceFromCity: '~4km west of the city center, roughly 10–15 minutes by car',
    popularRoutes: [
      'Innsbruck Airport → City Center',
      'Innsbruck Airport → St. Anton am Arlberg',
      'Innsbruck Airport → Kitzbühel',
      'Innsbruck Airport → Sölden',
    ],
    note: "Tyrol's main gateway for both city visits and alpine resort transfers.",
  },
  {
    slug: 'graz-airport',
    name: 'Graz Airport',
    code: 'GRZ',
    city: 'Graz',
    region: 'Styria',
    distanceFromCity: '~10km south of the city center, roughly 15–20 minutes by car',
    popularRoutes: [
      'Graz Airport → City Center',
      'Graz Airport → Vienna',
      'Graz Airport → Maribor, Slovenia (cross-border)',
    ],
  },
  {
    slug: 'linz-airport',
    name: 'Linz Airport (Blue Danube Airport)',
    code: 'LNZ',
    city: 'Linz',
    region: 'Upper Austria',
    distanceFromCity: '~12km southwest of the city center, roughly 15–20 minutes by car',
    popularRoutes: [
      'Linz Airport → City Center',
      'Linz Airport → Salzburg',
      'Linz Airport → Prague, Czech Republic (cross-border)',
    ],
  },
  {
    slug: 'klagenfurt-airport',
    name: 'Klagenfurt Airport',
    code: 'KLU',
    city: 'Klagenfurt',
    region: 'Carinthia',
    distanceFromCity: '~4km north of the city center, roughly 10 minutes by car',
    popularRoutes: [
      'Klagenfurt Airport → City Center',
      'Klagenfurt Airport → Wörthersee',
      'Klagenfurt Airport → Ljubljana, Slovenia (cross-border)',
    ],
  },
]
