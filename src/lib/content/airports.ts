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
  seoTitle?: string
  seoDescription?: string
  // Overrides the generic "Private, licensed pickup..." hero paragraph —
  // set only where the templated copy genuinely underperforms (see the
  // Aug 2026 Graz Airport audit), and phrased around the partner-network
  // model rather than a direct licensing claim.
  heroSubtitle?: string
  // Replaces the booking form's generic cross-border example text with
  // guidance relevant to this airport's own real cross-border routes.
  dropoffHint?: string
  quickFacts?: { label: string; value: string }[]
  pickupSteps?: { title: string; description: string }[]
  destinationSections?: { heading: string; description: string; linkHref?: string; linkLabel?: string }[]
  businessSection?: { heading: string; description: string }
  familyLuggageSection?: { heading: string; description: string }
  flightTrackingSection?: { heading: string; description: string }
  meetGreetSection?: { heading: string; description: string }
  winterSection?: { heading: string; description: string; linkHref?: string; linkLabel?: string }
  transferComparison?: { option: string; bestFor: string; tradeoff: string }[]
  // Distinct from useCases (scenario-based, e.g. "Business travel") — these
  // are the short "why choose us" reason cards.
  whyChooseUsPoints?: { title: string; description: string }[]
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
    destinationSections: [
      {
        heading: 'Conference & Event Arrivals',
        description:
          "Vienna hosts a steady calendar of conferences, trade fairs, and corporate events, and Vienna Airport is the usual arrival point for guests attending them. The same private transfer covers the airport-to-venue journey, whether that's a hotel, a conference centre, or an event venue directly.",
        linkHref: '/event-transportation',
        linkLabel: 'Event Transportation →',
      },
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
    seoTitle: 'Graz Airport Transfer | Private Chauffeur from GRZ',
    seoDescription:
      'Private Graz Airport transfers from GRZ to Graz, Vienna, Maribor and beyond. Meet & greet, flight tracking and fixed pricing with door-to-door chauffeur service.',
    heroSubtitle:
      'Private chauffeur pickup and drop-off at Graz Airport (GRZ), with flight tracking, meet & greet, and fixed pricing confirmed before your journey. Travel directly to Graz, Vienna, Maribor, or another destination in Austria and the surrounding region, arranged through our licensed partner network.',
    dropoffHint:
      "Continuing to Vienna, Maribor, or another destination? Enter your exact destination — we'll confirm availability and a fixed price by email.",
    quickFacts: [
      { label: 'Airport', value: 'Graz Airport (GRZ)' },
      { label: 'City centre', value: '~10 km' },
      { label: 'Typical drive', value: '~15–20 min' },
      { label: 'Service', value: 'Private chauffeur' },
      { label: 'Pickup', value: 'Arrivals hall' },
      { label: 'Flight tracking', value: 'Included' },
      { label: 'Pricing', value: 'Fixed quote' },
      { label: 'Booking', value: '24/7 requests' },
    ],
    intro: [
      "Graz Airport (GRZ) serves Austria's second-largest city and the surrounding Styria region, around 10 km south of central Graz. Whether you're arriving for a short city break, a business meeting in Graz, or continuing toward Vienna or across the border into Slovenia, the transfer is arranged around your actual destination rather than a fixed shuttle timetable.",
      'Pickup is available from the arrivals hall for a hotel, private residence, or business address, with the same private vehicle continuing on to Vienna, Maribor, or another destination without a change of transport. Both one-way and return bookings are available.',
    ],
    pickupSteps: [
      { title: 'Send Your Flight Details', description: 'Provide your flight number, arrival date, and passenger count when requesting your quote.' },
      { title: 'We Monitor the Flight', description: "We track your flight and adjust the pickup timing if it's delayed or arrives early." },
      { title: 'Chauffeur Meets You', description: 'Your chauffeur waits in the arrivals hall with a name board.' },
      { title: 'Direct Transfer', description: 'Travel directly to your destination — no shared rides, no vehicle changes.' },
    ],
    destinationSections: [
      {
        heading: 'Graz Airport to Graz City Centre',
        description:
          "Graz Airport is around 10 km south of the city center, typically 15 to 20 minutes by car depending on traffic. Your chauffeur drives directly to your hotel, business address, or private residence in Graz — including the main train station if you're connecting onward — rather than a fixed shuttle stop.",
        linkHref: '/service-areas/graz',
        linkLabel: 'Graz chauffeur service →',
      },
      {
        heading: 'Graz Airport to Vienna',
        description:
          'A direct transfer to Vienna avoids a train change with luggage, and suits business travelers heading to a meeting or a Vienna hotel straight from arrivals. The same route works in reverse for a Vienna pickup connecting to a flight from Graz Airport.',
        linkHref: '/routes/graz-airport-to-vienna',
        linkLabel: 'Graz Airport to Vienna route →',
      },
      {
        heading: 'Graz Airport to Maribor',
        description:
          'Maribor, just across the border in Slovenia, is a well-established cross-border route from Graz Airport — around 100 km and roughly 1 hour 15 minutes via the A9 and A2 through the Spielfeld crossing. The same chauffeur and vehicle stay with you for the whole journey, for business or leisure travel, with drop-off at a hotel, residence, or business address.',
        linkHref: '/routes/graz-airport-to-maribor',
        linkLabel: 'Graz Airport to Maribor route →',
      },
      {
        heading: 'Other Destinations from Graz Airport',
        description:
          'Beyond Graz, Vienna, and Maribor, transfers can also be arranged to Klagenfurt (around 1 hour 30 minutes) and to ski destinations such as Schladming in the Ennstal valley. Ljubljana, Slovenia is reachable on the same cross-border corridor as Maribor — see our Graz to Ljubljana guide below for what that crossing involves. Other Austrian or cross-border destinations can be quoted on request.',
        linkHref: '/routes/graz-airport-to-klagenfurt',
        linkLabel: 'Graz Airport to Klagenfurt route →',
      },
    ],
    businessSection: {
      heading: 'Business Transfers from Graz Airport',
      description:
        "Graz Airport is a practical arrival point for corporate travel — client meetings, conferences, and multi-stop business days. A private transfer avoids a taxi queue with a laptop bag in hand, and the same chauffeur can wait between appointments or continue to a second stop. Provide your itinerary and preferred timing when requesting a quote.",
    },
    familyLuggageSection: {
      heading: 'Families, Groups & Luggage',
      description:
        "Passenger count and luggage capacity aren't the same thing — traveling with children adds car seats, boosters, and strollers, while a group may need more space for bags than seats. Mention your passenger count, luggage, and any ski equipment when requesting a quote, and we'll recommend a suitable vehicle.",
    },
    flightTrackingSection: {
      heading: 'Flight Tracking & Delayed Arrivals',
      description:
        'Provide your flight number when booking and we monitor the scheduled arrival at Graz Airport. If your flight is delayed or arrives early, pickup timing is adjusted accordingly.',
    },
    meetGreetSection: {
      heading: 'Meet & Greet at Graz Airport',
      description:
        "Your chauffeur waits in the arrivals hall holding a name board, ready to help with luggage and guide you to your vehicle. The process is the same whether you're arriving on a short regional flight or a longer connection.",
    },
    winterSection: {
      heading: 'Winter Travel from Graz Airport',
      description:
        'Graz Airport itself is rarely affected by winter closures, but road conditions further into Styria or across the Slovenian border can be affected by snowfall, particularly during peak holiday periods. If you\'re continuing to a ski destination or traveling during a busy winter weekend, allow some extra time.',
      linkHref: '/ski-transfers/schladming',
      linkLabel: 'Schladming ski transfer →',
    },
    transferComparison: [
      { option: 'Private chauffeur', bestFor: 'Pre-arranged pickup, fixed price, and door-to-door service', tradeoff: 'Higher cost than a shared option' },
      { option: 'Taxi', bestFor: 'No advance booking needed', tradeoff: 'Fare can vary, and availability depends on the taxi rank' },
      { option: 'Public transport', bestFor: 'Budget-conscious travelers', tradeoff: 'May involve a connection and more luggage handling' },
    ],
    whyChooseUsPoints: [
      { title: 'Fixed Pricing', description: 'Your price is confirmed by email before the journey — no meter, no surprise charges.' },
      { title: 'Flight Tracking', description: 'Your arrival is monitored, with pickup timing adjusted for delays or early landings.' },
      { title: 'Meet & Greet', description: 'Your chauffeur waits in the arrivals hall with a name board.' },
      { title: 'Door-to-Door', description: 'Direct to your hotel, residence, or business address — no station change.' },
      { title: 'Private Vehicle', description: 'No shared rides or unrelated passengers.' },
      { title: 'Professional Chauffeur', description: 'Experienced local and partner chauffeur network.' },
    ],
    useCases: [
      {
        title: 'Hotel or private address in Graz',
        description: 'Direct drop-off at any hotel, residence, or business address in the city — no station or taxi rank in between.',
      },
      {
        title: 'Business and corporate travel',
        description: 'Fixed-price transfers for executives and client-facing trips in Graz or onward.',
      },
      {
        title: 'Onward to Vienna or another Austrian city',
        description: 'Continue directly to Vienna or elsewhere in Austria in the same vehicle, rather than booking the airport leg separately.',
      },
      {
        title: 'Cross-border to Maribor, Slovenia',
        description: 'A direct connection to Maribor, around 1 hour 15 minutes, with no vehicle switch at the border.',
      },
    ],
    faqs: [
      {
        question: 'How far is Graz Airport from the city centre?',
        answer: 'Graz Airport is approximately 10 km south of central Graz, with a typical drive of around 15–20 minutes depending on traffic and your exact destination.',
      },
      {
        question: 'How long does a Graz Airport transfer take?',
        answer: 'For central Graz, around 15–20 minutes in normal traffic. Longer journeys depend on the destination and road conditions.',
      },
      {
        question: 'Do you track flights at Graz Airport?',
        answer: 'Yes. Provide your flight number when booking, and the arrival time is monitored, with pickup timing adjusted for delays or early arrivals.',
      },
      {
        question: 'Where will my chauffeur meet me?',
        answer: 'In the arrivals area with a name board, who will then help with your transfer to the vehicle.',
      },
      {
        question: 'Can I book Graz Airport to Vienna?',
        answer: 'Yes, subject to availability. You can request a direct private transfer from GRZ to a Vienna hotel, residence, office, or other address.',
      },
      {
        question: 'Can I travel from Graz Airport to Maribor?',
        answer: 'Yes. Graz Airport to Maribor is available as a cross-border private transfer, subject to availability.',
      },
      {
        question: 'Can families book a Graz Airport transfer?',
        answer: 'Yes. Executive Vans and Minibuses are available for larger groups and additional luggage, with child seats or boosters available on request.',
      },
      {
        question: 'How much does a Graz Airport transfer cost?',
        answer: 'Pricing depends on the pickup, destination, passengers, vehicle, and journey requirements. A fixed price is confirmed before travel.',
      },
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
