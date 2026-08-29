export type Airport = {
  slug: string
  name: string
  code: string
  city: string
  region: string
  distanceFromCity: string
  popularRoutes: string[]
  note?: string
  // Marks a foreign airport served for cross-border pickups into Austria —
  // used to group the hub page into Austrian vs. cross-border sections.
  crossBorder?: boolean
  // Rich, airport-specific content for the flagship/most-differentiated pages —
  // optional so other airport pages keep the original compact layout rather
  // than reusing another airport's copy with the name swapped.
  intro?: string[]
  useCases?: { title: string; description: string }[]
  faqs?: { question: string; answer: string }[]
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
    intro: [
      "Vienna International Airport (VIE) is Austria's main international gateway and our head-office base, so it's the airport we handle the most pickups from — arrivals from long-haul, European, and regional flights, met the same way regardless of terminal.",
      "Most bookings are a direct transfer into central Vienna, but the airport also connects straight onward: to Salzburg, to other Austrian cities, and across the border to Bratislava or Budapest without changing vehicles.",
    ],
    useCases: [
      {
        title: 'Hotel or private address in Vienna',
        description: 'Direct drop-off at any hotel, residence, or business address in the city — no station or taxi rank in between.',
      },
      {
        title: 'Business and corporate travel',
        description: 'Fixed-price transfers for executives and client-facing trips, with corporate accounts available for companies that travel regularly.',
      },
      {
        title: 'Onward to another Austrian city',
        description: 'Continue straight to Salzburg, Graz, Linz, or elsewhere in Austria in the same vehicle, rather than booking the airport leg separately.',
      },
      {
        title: 'Cross-border to Slovakia or Hungary',
        description: 'A direct connection to Bratislava (about 45 minutes) or Budapest, with no vehicle switch at the border.',
      },
    ],
    faqs: [
      {
        question: 'Where does the chauffeur meet me at Vienna Airport?',
        answer: 'In the arrivals hall, holding a name board — the same meeting process regardless of which terminal or airline you land with.',
      },
      {
        question: 'How long does the transfer from Vienna Airport to the city center take?',
        answer: 'Roughly 20–30 minutes under normal traffic, for the ~18km drive into central Vienna.',
      },
      {
        question: 'What happens if my flight is delayed or lands early?',
        answer: 'We monitor your flight and adjust the pickup timing for delays or early arrivals, so you don\'t need to rebook because your flight schedule changes.',
      },
      {
        question: 'Can I book a transfer from Vienna Airport straight to Bratislava or Budapest?',
        answer: 'Yes — both are direct, one-vehicle transfers with no border stop: about 45 minutes to Bratislava, and roughly 2 hours 15 minutes to Budapest.',
      },
      {
        question: 'Can I book a return transfer from the city back to Vienna Airport?',
        answer: 'Yes — one-way and return bookings are both available; just provide your outbound flight details when booking the return leg.',
      },
      {
        question: 'Is this transfer suitable for a family or group with luggage?',
        answer: 'Yes. The Executive Van and Minibus handle larger groups and extra luggage, and child seats or booster seats are available on request at no extra charge.',
      },
    ],
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
  {
    slug: 'munich-airport',
    name: 'Munich Airport (Franz Josef Strauß)',
    code: 'MUC',
    city: 'Munich',
    region: 'Munich, Germany',
    distanceFromCity: '~38km northeast of Munich center, main long-haul hub for Western/Central Austria',
    popularRoutes: [
      'Munich Airport → Innsbruck',
      'Munich Airport → Salzburg',
      'Munich Airport → Kitzbühel',
      'Munich Airport → St. Anton am Arlberg',
    ],
    note: 'Major international long-haul hub for transfers into Tyrol and Salzburg state.',
    crossBorder: true,
  },
  {
    slug: 'zurich-airport',
    name: 'Zurich Airport (Kloten)',
    code: 'ZRH',
    city: 'Zurich',
    region: 'Zurich, Switzerland',
    distanceFromCity: '~13km north of central Zurich, primary entry hub for Vorarlberg & Arlberg resorts',
    popularRoutes: [
      'Zurich Airport → Lech am Arlberg',
      'Zurich Airport → St. Anton am Arlberg',
      'Zurich Airport → Ischgl',
      'Zurich Airport → Bregenz',
    ],
    note: 'Primary entry gateway for luxury transfers to Lech, Zürs, and St. Anton.',
    crossBorder: true,
  },
]
