export type Hotel = {
  name: string
  area?: string
}

export type Attraction = {
  name: string
  description: string
}

export type CityArea = {
  slug: string
  city: string
  region: string
  airport?: string
  popularRoutes: string[]
  note?: string
  hotels?: Hotel[]
  hotelNote?: string
  attractions?: Attraction[]
  // Overrides the generated <title>/description in generateMetadata — only
  // set this where the templated copy genuinely underperforms (see the GSC
  // signal audit); leave unset everywhere else so the template stays DRY.
  seoTitle?: string
  seoDescription?: string
  // Only set where a /day-tours page for the same place also exists — that
  // page is a same-day round-trip excursion; this one is a one-way/overnight
  // transfer. Cross-linking keeps the two from reading as unlinked duplicates.
  relatedDayTour?: { slug: string; label: string }
  // Optional hero photo — set only for flagship pages with a real, sourced
  // image; other cities keep the plain text hero rather than a stock photo.
  heroImage?: { src: string; alt: string; title?: string; description?: string }
  // Per-vehicle photo overrides for the "Choose Your Vehicle" section — keyed
  // by the real fleet types in lib/content/services.ts. Only set where a real
  // sourced photo exists; the section itself only renders when this is set,
  // so other cities are unaffected. Falls back to the generic sitewide fleet
  // photo (images/fleet/{type}.webp) for any type left out of the map.
  fleetImages?: Partial<Record<'sedan' | 'luxury' | 'van' | 'minibus', string>>
  // Flagship enrichment fields — optional so only specifically differentiated
  // city pages (see the Sept 2026 Klagenfurt commercial-depth audit) render
  // the expanded sections; other cities keep the original compact layout.
  intro?: string[]
  airportNote?: string
  journeys?: Journey[]
  whyChauffeur?: WhyChauffeurPoint[]
  bookingSteps?: string[]
  faqs?: { question: string; answer: string }[]
  dropoffHint?: string
}

export type Journey = {
  heading: string
  distance: string
  duration: string
  description: string
  routeHref: string
}

export type WhyChauffeurPoint = { title: string; description: string }

export type BorderArea = {
  slug: string
  country: string
  cities: string[]
  via: string
  popularRoutes: string[]
  note: string
  seoTitle?: string
  seoDescription?: string
  // Rich, country-specific content — optional so only pages with genuinely
  // unique content (see the Aug 2026 thin-content audit) render the expanded
  // sections; countries without these fields keep the original compact layout
  // rather than reusing another country's copy with the name swapped.
  intro?: string[]
  serviceIntro?: string
  // Overrides the default "Popular {country} Destinations" heading — use
  // when only one destination is genuinely established, so the page doesn't
  // imply broader coverage than it actually has.
  destinationsHeading?: string
  destinationsIntro?: string
  borderInfo?: string
  whyChauffeur?: WhyChauffeurPoint[]
  journeys?: Journey[]
  bookingSteps?: string[]
  trust?: string
  faqs?: { question: string; answer: string }[]
  // Replaces the booking form's generic cross-border example text (e.g.
  // "Bratislava, Slovakia or Munich, Germany") with country-specific
  // guidance, since a flagship country page already knows its own destination.
  dropoffHint?: string
  // A short note connecting to the destination-side airport, where the
  // primary destination city has one worth mentioning separately from the
  // route cards in `journeys`.
  destinationAirportNote?: { heading: string; description: string; linkHref: string; linkLabel: string }
}

export type BorderCity = {
  slug: string
  city: string
  countrySlug: string
  country: string
  via: string
  popularRoutes: string[]
  seoTitle?: string
  seoDescription?: string
  // Shown in the parent country page's Destinations section when present.
  description?: string
  // Rich, destination-specific content for the flagship/most-differentiated
  // pages — optional so other border cities (Munich, Budapest, Prague, ...)
  // keep the original compact layout rather than reusing another city's
  // copy with the name swapped. See the Aug 2026 thin-content audit.
  intro?: string
  routeOverview?: { route: string; distance?: string; duration: string }[]
  pickupIntro?: string
  pickupLocations?: string[]
  destinationsServed?: { title: string; description: string }[]
  airportSection?: { heading: string; description: string; routeHref: string; routeLabel: string }
  // The destination-side airport (e.g. Bratislava Airport/BTS) — distinct
  // from airportSection, which covers the Austrian departure-side airport.
  destinationAirportSection?: {
    heading: string
    description: string
    routes: { label: string; description: string; href?: string }[]
  }
  extraRoutes?: { label: string; description: string; href?: string }[]
  whyChauffeur?: WhyChauffeurPoint[]
  borderInfo?: string
  returnInfo?: string
  businessSection?: { heading: string; description: string }
  dayTripSection?: { heading: string; description: string; linkHref?: string; linkLabel?: string }
  // Only set where a dedicated wedding-transfer guide exists for this city —
  // /wedding-transfers itself stays Austria-domestic in framing, so a flagship
  // destination with real cross-border wedding demand gets its own pointer
  // rather than that page trying to cover every border city's specifics.
  weddingSection?: { heading: string; description: string; linkHref?: string; linkLabel?: string }
  faqs?: { question: string; answer: string }[]
  // Replaces the booking form's generic cross-border example text (e.g.
  // "Bratislava, Slovakia or Munich, Germany") with destination-specific
  // guidance, since a flagship destination page already knows its own city.
  dropoffHint?: string
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
    seoTitle: 'Private Chauffeur Service Vienna | Airport & City Transfers',
    seoDescription:
      'Private chauffeur service in Vienna — airport pickups, city travel, and cross-border trips to Bratislava, Budapest, and beyond. Fixed pricing, professional drivers.',
    heroImage: {
      src: '/images/hero/vienna-austria-cityscape-chauffeur-service.webp',
      alt: "Vienna Austria cityscape with St. Stephen's Cathedral",
      title: 'Vienna Austria Cityscape – Chauffeur Service',
      description:
        "Panoramic Vienna cityscape at sunset with St. Stephen's Cathedral and historic Austrian architecture.",
    },
    fleetImages: {
      sedan: '/images/fleet/business-class.webp',
      luxury: '/images/fleet/first-class.webp',
      van: '/images/fleet/business-van.webp',
      minibus: '/images/fleet/business-electric.webp',
    },
    hotels: [
      { name: 'Hotel Sacher Wien', area: 'Innere Stadt' },
      { name: 'Hotel Imperial', area: 'Kärntner Ring' },
      { name: 'The Ritz-Carlton Vienna', area: 'Schubertring' },
      { name: 'Grand Hotel Wien', area: 'Kärntner Ring' },
      { name: 'Hotel Bristol Vienna', area: 'Kärntner Ring' },
      { name: 'Palais Hansen Kempinski Vienna', area: 'Ringstraße' },
      { name: 'Park Hyatt Vienna', area: 'Am Hof' },
    ],
    attractions: [
      {
        name: 'Schönbrunn Palace',
        description: 'Former imperial summer residence with formal gardens and the Gloriette.',
      },
      {
        name: "St. Stephen's Cathedral",
        description: "Vienna's Gothic cathedral and the symbolic heart of the Innere Stadt.",
      },
      {
        name: 'Hofburg Palace',
        description: 'The former imperial palace, now home to the Spanish Riding School and museums.',
      },
      {
        name: 'Belvedere Palace',
        description: 'Baroque palace complex housing Klimt\'s "The Kiss" and other Austrian art.',
      },
      {
        name: 'Vienna State Opera',
        description: 'One of the world\'s leading opera houses, on the Ringstraße.',
      },
      {
        name: 'Prater & Giant Ferris Wheel',
        description: "Vienna's historic amusement park and the iconic Wiener Riesenrad.",
      },
    ],
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
    hotels: [
      { name: 'Hotel Wiesler', area: 'Mur riverfront / Lend' },
      { name: 'Schlossberg Hotel Graz', area: 'Below the Schlossberg' },
      { name: 'Hotel Daniel Graz', area: 'Near Hauptbahnhof' },
    ],
    hotelNote: 'Pickup and drop-off at hotels across the Altstadt and Mur riverfront.',
    attractions: [
      {
        name: 'Schlossberg & Uhrturm (Clock Tower)',
        description: "Graz's hilltop landmark, reached by funicular, with the city's iconic clock tower.",
      },
      {
        name: 'Kunsthaus Graz',
        description: 'A striking contemporary art museum known for its biomorphic "friendly alien" facade.',
      },
      {
        name: 'Eggenberg Palace',
        description: 'A UNESCO-listed Baroque palace with planetary rooms and landscaped gardens.',
      },
      {
        name: 'Graz Armoury (Landeszeughaus)',
        description: "The world's largest historic armory still at its original location.",
      },
      {
        name: 'Graz Cathedral & Mausoleum',
        description: "The city's Gothic cathedral beside Emperor Ferdinand II's Mausoleum.",
      },
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
    hotels: [
      { name: 'ARCOTEL Nike Linz', area: 'Danube riverfront' },
      { name: 'Hotel Schillerpark Linz', area: 'City center' },
    ],
    hotelNote: 'Pickup and drop-off at hotels across the Altstadt and Danube riverfront.',
    attractions: [
      {
        name: 'Ars Electronica Center',
        description: 'A museum of the future exploring digital art, science, and technology.',
      },
      {
        name: 'Pöstlingberg & Pöstlingbergbahn',
        description: "Linz's landmark hill, reached by one of the steepest adhesion railways in the world.",
      },
      {
        name: 'Linz Castle (Schlossmuseum)',
        description: "The city's historic hilltop castle, now home to the Upper Austrian state museum.",
      },
      {
        name: 'Lentos Art Museum',
        description: 'A glass-fronted modern art museum on the banks of the Danube.',
      },
      {
        name: 'Mariendom (New Cathedral)',
        description: "Austria's largest church, with a Gothic Revival spire overlooking the city.",
      },
    ],
  },
  {
    slug: 'salzburg',
    city: 'Salzburg',
    region: 'Salzburg',
    airport: 'Salzburg Airport (SZG)',
    relatedDayTour: { slug: 'salzburg-day-trip', label: 'Salzburg day tour from Vienna' },
    popularRoutes: [
      'Salzburg Airport ↔ City Center',
      'Salzburg → Munich, Germany (cross-border)',
      'Salzburg → Innsbruck',
      'Salzburg → Vienna',
    ],
    hotels: [
      { name: 'Hotel Sacher Salzburg', area: 'Salzach riverfront' },
      { name: 'Hotel Goldener Hirsch', area: 'Getreidegasse, Altstadt' },
      { name: 'Hotel Bristol Salzburg', area: 'Makartplatz' },
      { name: 'Sheraton Grand Salzburg', area: 'Mirabellplatz' },
      { name: 'Hotel Schloss Mönchstein', area: 'Mönchsberg' },
    ],
    attractions: [
      {
        name: 'Hohensalzburg Fortress',
        description: "One of Europe's largest medieval castles, overlooking the Altstadt.",
      },
      {
        name: 'Mirabell Palace & Gardens',
        description: 'Baroque palace gardens famous from "The Sound of Music," with views of the fortress.',
      },
      {
        name: 'Getreidegasse',
        description: "Salzburg's historic shopping street, with wrought-iron guild signs and Mozart's birthplace.",
      },
      {
        name: 'Salzburg Cathedral (Dom)',
        description: "The city's Baroque cathedral at the heart of the Altstadt.",
      },
      {
        name: "Mozart's Birthplace",
        description: 'The house where Wolfgang Amadeus Mozart was born in 1756, now a museum.',
      },
      {
        name: '"Sound of Music" Filming Locations',
        description: 'Mirabell Gardens, Leopoldskron Palace, and other sites from the classic film.',
      },
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
    hotels: [
      { name: 'Grand Hotel Europa Innsbruck', area: 'Opposite the Hauptbahnhof' },
      { name: 'Hotel Grauer Bär', area: 'Altstadt' },
      { name: 'ADLERS Hotel Innsbruck', area: 'City center' },
    ],
    hotelNote: 'Pickup and drop-off at hotels across the Altstadt and around the Hauptbahnhof.',
    attractions: [
      {
        name: 'Golden Roof (Goldenes Dachl)',
        description: "Innsbruck's best-known landmark, a late-Gothic oriel with 2,657 gilded copper tiles.",
      },
      {
        name: 'Swarovski Crystal Worlds (Wattens)',
        description: 'A museum and crystal wonderland a short drive east of the city.',
      },
      {
        name: 'Nordkette Cable Car',
        description: 'A cable car climbing from the city center to alpine terrain above 2,000m.',
      },
      {
        name: 'Imperial Palace (Hofburg Innsbruck)',
        description: "The former Habsburg residence, with Rococo state rooms open to visitors.",
      },
      {
        name: 'Ambras Castle',
        description: "A Renaissance castle above the city housing Archduke Ferdinand II's collections.",
      },
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
    hotelNote: 'Pickup and drop-off at hotels across the Altstadt and along the Wörthersee lakefront.',
    seoTitle: 'Chauffeur Service in Klagenfurt | Airport, City & Cross-Border Transfers',
    seoDescription:
      'Private chauffeur service in Klagenfurt — airport transfers, Wörthersee, Villach and Graz routes, and cross-border transfers to Ljubljana. Fixed pricing, flight tracking.',
    dropoffHint:
      "Enter your Klagenfurt hotel, Wörthersee address, or another destination — we'll confirm availability and a fixed price by email.",
    intro: [
      "Klagenfurt sits at the eastern end of the Wörthersee, close enough to the Slovenian border that a private transfer to Ljubljana is a same-day option rather than a long-haul trip. That geography is what makes this more than a standalone city stop — most journeys through Klagenfurt connect it to the lake, to Villach and Graz, or across the border into Slovenia.",
      'A private chauffeur transfer covers all of it as one booking: airport pickup, a direct hotel or lakefront drop-off, an onward domestic route, or a cross-border trip — in the same vehicle, with a fixed price agreed before you travel.',
    ],
    airportNote:
      'Klagenfurt Airport (KLU) is around 4 km north of the city center, roughly 10 minutes by car depending on your exact destination. Flight tracking is included for airport pickups, so a delayed arrival adjusts the pickup time automatically at no extra charge.',
    journeys: [
      {
        heading: 'Klagenfurt to Ljubljana, Slovenia',
        distance: '~85km',
        duration: '~1h',
        description:
          "Klagenfurt's closest major cross-border route. A private transfer goes directly from your Klagenfurt hotel or the airport to Ljubljana in one vehicle — no shared ride, no station change, and the same fixed price agreed before you travel.",
        routeHref: '/routes/klagenfurt-to-ljubljana',
      },
      {
        heading: 'Klagenfurt to Villach',
        distance: '~40km',
        duration: '~30m',
        description:
          'A short, direct run across the Carinthian lake district — practical for connecting onward to the Faaker See area or Italy.',
        routeHref: '/routes/klagenfurt-airport-to-villach',
      },
      {
        heading: 'Klagenfurt to Graz',
        distance: '~140km',
        duration: '~1h 30m',
        description: "A direct cross-region run between Austria's second- and sixth-largest cities via the A2 Süd Autobahn.",
        routeHref: '/routes/graz-to-klagenfurt',
      },
      {
        heading: 'Klagenfurt to Velden am Wörthersee',
        distance: '~20km',
        duration: '~20m',
        description:
          'The classic Wörthersee lakefront run — a short private transfer for a hotel stay, a lakeside dinner, or an onward pickup along the lake.',
        routeHref: '/routes/klagenfurt-to-velden',
      },
      {
        heading: 'Klagenfurt Airport to Bad Kleinkirchheim',
        distance: '~55km',
        duration: '~55m',
        description: 'West via the A2 and B93 through the Nockberge mountains — a direct ski transfer without a shuttle change.',
        routeHref: '/routes/klagenfurt-airport-to-bad-kleinkirchheim',
      },
      {
        heading: 'Klagenfurt Airport to Nassfeld',
        distance: '~65km',
        duration: '~1h',
        description: 'West via the A2 and the Gailtal valley — a direct transfer for skiers with equipment and luggage.',
        routeHref: '/routes/klagenfurt-airport-to-nassfeld',
      },
      {
        heading: 'Klagenfurt Airport to Turracher Höhe',
        distance: '~75km',
        duration: '~1h 15m',
        description: 'Northwest up to the pass-top village of Turracher Höhe — one of the longer regional ski transfers from KLU.',
        routeHref: '/routes/klagenfurt-airport-to-turracher-hoehe',
      },
    ],
    whyChauffeur: [
      {
        title: 'Fixed Price',
        description: 'Confirmed by email before you travel, whether the trip is a short airport run or a cross-border transfer to Ljubljana.',
      },
      {
        title: 'Flight Tracking',
        description: 'Airport pickups are timed against your actual flight, not the scheduled arrival — a delay adjusts the pickup automatically.',
      },
      {
        title: 'Door-to-Door',
        description: 'Direct pickup and drop-off at your hotel, a Wörthersee address, or any private address across Klagenfurt and Carinthia.',
      },
      {
        title: 'Cross-Border Capability',
        description: 'The same vehicle continues into Slovenia for a Ljubljana transfer — no vehicle change or shared ride at the border.',
      },
      {
        title: 'Ski & Luggage Space',
        description: 'Executive Van and Minibus options cover ski equipment and extra luggage for trips to the regional ski resorts.',
      },
      {
        title: 'Hourly & Multi-Stop Hire',
        description: 'A vehicle and driver on standby for meetings, sightseeing, or a multi-stop day around Carinthia — billed by the hour.',
      },
    ],
    bookingSteps: [
      'Tell us your pickup and destination — the airport, a Klagenfurt hotel, a Wörthersee address, or an onward city — plus your date, time, and passenger count.',
      "We check availability and confirm a fixed price by email. No payment or card details are needed to request a quote.",
      'Your chauffeur meets you at the agreed pickup point and drives you directly to your destination.',
    ],
    faqs: [
      {
        question: 'Do you offer Klagenfurt Airport transfers?',
        answer:
          'Yes. Private transfers can be arranged to and from Klagenfurt Airport (KLU), around 4 km from the city center, with flight tracking included for airport pickups.',
      },
      {
        question: 'Can I book a transfer from Klagenfurt to Ljubljana?',
        answer: 'Yes — a private cross-border transfer to Ljubljana is around 85 km and typically takes about an hour.',
      },
      {
        question: 'Can you pick me up from my Klagenfurt hotel?',
        answer: 'Yes. Provide the hotel name or full address as the pickup or drop-off location when requesting your quote.',
      },
      {
        question: 'Do you cover the Wörthersee area?',
        answer: 'Yes. Pickup and drop-off is available at hotels and addresses along the Wörthersee lakefront, including Velden.',
      },
      {
        question: 'What vehicles are available?',
        answer: 'Business Sedan, Luxury Sedan, Executive Van, and Minibus options are available, subject to availability.',
      },
      {
        question: 'Can I request a child seat?',
        answer: 'Yes. Mention the age and height of your children when booking so the correct seat can be prepared.',
      },
      {
        question: 'Can I book an hourly chauffeur for a day around Carinthia?',
        answer: 'Yes. Hourly hire and multi-stop journeys can be requested — mention your planned stops and timing in the notes field.',
      },
      {
        question: 'What happens if my flight is delayed?',
        answer: 'Provide your flight number when booking and the pickup time adjusts automatically to your actual arrival, at no extra charge.',
      },
    ],
    attractions: [
      {
        name: 'Minimundus',
        description: "A miniature park with over 150 scale models of the world's famous landmarks.",
      },
      {
        name: 'Wörthersee Lakefront',
        description: "Carinthia's largest lake, with promenades, beaches, and boat cruises from the city.",
      },
      {
        name: 'Lindwurm Fountain',
        description: "Klagenfurt's dragon-monument landmark on the Neuer Platz, dating to the 16th century.",
      },
      {
        name: 'Klagenfurt Cathedral',
        description: "The city's Baroque cathedral in the historic old town.",
      },
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
    hotelNote: 'Pickup and drop-off at hotels across the Altstadt and the Warmbad-Villach spa district.',
    attractions: [
      {
        name: 'Villach Old Town (Altstadt)',
        description: 'A colorful historic center along the Drau river, with Italian-influenced architecture.',
      },
      {
        name: 'Faaker See',
        description: 'A turquoise alpine lake a short drive from the city, popular for swimming and cycling.',
      },
      {
        name: 'Warmbad Villach',
        description: "A thermal spa district on the city's edge, built around natural warm springs.",
      },
    ],
  },
  {
    slug: 'wels',
    city: 'Wels',
    region: 'Upper Austria',
    airport: 'Linz Airport (LNZ)',
    popularRoutes: ['Wels → Linz', 'Wels → Salzburg', 'Wels → Munich, Germany (cross-border)'],
    hotelNote: 'Pickup and drop-off at hotels throughout the Wels city center and near the fairground (Messe Wels).',
    attractions: [
      {
        name: 'Wels Castle (Burg Wels)',
        description: "A Renaissance-era castle in the old town, now home to the city's museum.",
      },
      {
        name: 'Wels Old Town (Stadtplatz)',
        description: 'A pedestrian historic center lined with burgher houses and cafés.',
      },
      {
        name: 'Welios Science Center',
        description: 'An interactive science and technology center popular with families.',
      },
    ],
  },
  {
    slug: 'st-poelten',
    city: 'St. Pölten',
    region: 'Lower Austria',
    airport: 'Vienna International Airport (VIE)',
    popularRoutes: ['St. Pölten → Vienna', 'St. Pölten → Vienna Airport', 'St. Pölten → Linz'],
    hotelNote: 'Pickup and drop-off at hotels across the city center and the Kulturbezirk (cultural district).',
    attractions: [
      {
        name: 'St. Pölten Cathedral (Dom)',
        description: "The city's Baroque cathedral, a landmark of Lower Austria's capital.",
      },
      {
        name: 'Kulturbezirk & Festspielhaus St. Pölten',
        description: "The state's cultural district, home to the Landestheater and Festspielhaus concert hall.",
      },
      {
        name: 'Klangturm',
        description: 'A distinctive glass-and-steel tower and city landmark in the cultural district.',
      },
    ],
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
    hotelNote: 'Pickup and drop-off at hotels throughout the Wiener Neustadt city center.',
    attractions: [
      {
        name: 'Wiener Neustadt Cathedral',
        description: "The city's historic cathedral in the pedestrianized old town.",
      },
      {
        name: 'Theresian Military Academy',
        description: "Austria's historic military academy, housed in a former imperial castle.",
      },
      {
        name: 'Wiener Neustadt City Wall & Reckturm',
        description: 'Remnants of the medieval fortifications that once ringed the city.',
      },
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
    hotelNote: 'Pickup and drop-off at hotels along the Lake Constance (Bodensee) shoreline and Oberstadt.',
    attractions: [
      {
        name: 'Bregenzer Festspiele Lake Stage (Seebühne)',
        description: "The famous floating stage on Lake Constance, home to Bregenz's summer opera festival.",
      },
      {
        name: 'Pfänder Cable Car',
        description: 'A cable car climbing to panoramic views over Lake Constance and three countries.',
      },
      {
        name: 'Bregenz Old Town (Oberstadt)',
        description: 'A hillside historic quarter with the medieval Martinsturm tower.',
      },
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
    hotelNote: 'Pickup and drop-off at hotels throughout the Eisenstadt city center.',
    attractions: [
      {
        name: 'Esterházy Palace',
        description: 'The grand Baroque seat of the Esterházy family, where Haydn once served as court composer.',
      },
      {
        name: "Haydnhaus",
        description: 'The former home of composer Joseph Haydn, now a museum.',
      },
      {
        name: 'Bergkirche (Calvary Church)',
        description: "Eisenstadt's hilltop church, home to the Haydn Mausoleum.",
      },
    ],
  },
  {
    slug: 'hallstatt',
    city: 'Hallstatt',
    region: 'Upper Austria',
    airport: 'Salzburg Airport (SZG) / Vienna Airport (VIE)',
    relatedDayTour: { slug: 'hallstatt', label: 'Hallstatt day tour' },
    popularRoutes: [
      'Salzburg → Hallstatt',
      'Vienna Airport → Hallstatt',
      'Salzburg Airport → Hallstatt',
    ],
    hotelNote: 'Door-to-door transfer directly to your hotel or the pedestrian entry terminal in Hallstatt village.',
    attractions: [
      {
        name: 'Hallstatt Skywalk & Salt Mine',
        description: "World's oldest salt mine and a panoramic viewing platform overlooking Lake Hallstatt.",
      },
      {
        name: 'Historic Market Square',
        description: 'Iconic UNESCO heritage lakeside village square lined with traditional 16th-century Alpine houses.',
      },
      {
        name: 'Beinhaus (Charnel House)',
        description: 'The famous bone house in St. Michael’s Chapel displaying over 600 hand-painted skulls.',
      },
    ],
  },
  {
    slug: 'woerthersee',
    city: 'Wörthersee',
    region: 'Carinthia',
    airport: 'Klagenfurt Airport (KLU) / Ljubljana Airport (LJU)',
    popularRoutes: [
      'Klagenfurt Airport ↔ Wörthersee (Velden / Pörtschach)',
      'Vienna → Wörthersee',
      'Graz → Wörthersee',
      'Ljubljana → Wörthersee (cross-border)',
    ],
    hotelNote: 'Pickup and drop-off at luxury lakeside resorts in Velden, Pörtschach, and Maria Wörth.',
    attractions: [
      {
        name: 'Pyramidenkogel Observation Tower',
        description: "The world's tallest wooden observation tower offering 360-degree views across Lake Wörthersee.",
      },
      {
        name: 'Casino Velden',
        description: 'Renowned lakeside casino and hotspot for luxury lifestyle and summer events.',
      },
      {
        name: 'Maria Wörth Peninsula',
        description: 'Picturesque church peninsula jutting into the turquoise waters of the lake.',
      },
    ],
  },
  {
    slug: 'baden-bei-wien',
    city: 'Baden bei Wien',
    region: 'Lower Austria',
    airport: 'Vienna International Airport (VIE)',
    popularRoutes: [
      'Vienna Airport ↔ Baden bei Wien',
      'Vienna City ↔ Baden bei Wien',
    ],
    hotelNote: 'Pickup and drop-off at thermal spa hotels, villas, and casino resorts across Baden.',
    attractions: [
      {
        name: 'Römertherme Baden',
        description: 'Historic Roman thermal baths fed by natural sulfurous hot springs under a glass roof.',
      },
      {
        name: 'Casino Baden',
        description: 'One of Europe’s largest and most elegant casinos set in a classic Kurpark spa house.',
      },
      {
        name: 'Doblhoffpark & Rosarium',
        description: 'Austria’s largest rose garden featuring over 30,000 rose bushes in front of the Orangery.',
      },
    ],
  },
  {
    slug: 'salzkammergut',
    city: 'Salzkammergut Region',
    region: 'Upper Austria / Salzburg / Styria',
    airport: 'Salzburg Airport (SZG) / Vienna Airport (VIE)',
    popularRoutes: [
      'Salzburg ↔ Salzkammergut Lakes',
      'Vienna Airport → Salzkammergut',
      'Munich → Salzkammergut (cross-border)',
    ],
    hotelNote: 'Private transfers to luxury lakefront resorts in St. Wolfgang, Bad Ischl, Mondsee, and Fuschl.',
    attractions: [
      {
        name: 'Wolfgangsee & Schafberg Railway',
        description: 'Iconic alpine lake paired with Austria’s steepest steam-operated cog railway.',
      },
      {
        name: 'Bad Ischl Imperial Villa (Kaiservilla)',
        description: 'Summer residence of Emperor Franz Joseph and Empress Sisi in the heart of the region.',
      },
      {
        name: 'Mondsee Abbey (Sound of Music Church)',
        description: 'Historic Basilica of St. Michael, site of the famous wedding scene in The Sound of Music.',
      },
    ],
  },
  {
    slug: 'wachau-region',
    city: 'Wachau Wine Region',
    region: 'Lower Austria',
    airport: 'Vienna International Airport (VIE)',
    relatedDayTour: { slug: 'wachau-valley', label: 'Wachau Valley day tour' },
    popularRoutes: [
      'Vienna ↔ Wachau Valley Tour / Transfer',
      'Vienna Airport → Krems an der Donau / Melk',
    ],
    hotelNote: 'Direct transfer to boutique wine estates and luxury hotels in Krems, Melk, Dürnstein, and Weißenkirchen.',
    attractions: [
      {
        name: 'Melk Abbey (Stift Melk)',
        description: 'World-renowned Benedictine abbey overlooking the Danube with a famous Baroque library.',
      },
      {
        name: 'Dürnstein Castle Ruins',
        description: 'Historic hilltop ruins where King Richard the Lionheart was imprisoned in 1192.',
      },
      {
        name: 'Spitz & Weißenkirchen Vineyards',
        description: 'UNESCO-listed terraced vineyards producing world-class Grüner Veltliner and Riesling wines.',
      },
    ],
  },
  {
    slug: 'zillertal-valley',
    city: 'Zillertal Valley',
    region: 'Tyrol',
    airport: 'Innsbruck Airport (INN) / Munich Airport (MUC)',
    popularRoutes: [
      'Innsbruck Airport → Zillertal Valley',
      'Munich Airport → Zillertal Valley (cross-border)',
    ],
    hotelNote: 'Door-to-door transfer service covering Fügen, Zell am Ziller, Mayrhofen, and Tux Valley.',
    attractions: [
      {
        name: 'Zillertal Arena & Penken',
        description: 'One of Austria’s largest linked ski areas spanning across Tyrol and Salzburg states.',
      },
      {
        name: 'Hintertux Glacier Ice Palace',
        description: 'Natural underground ice cave and glacier ski slopes open 365 days a year.',
      },
    ],
  },
  {
    slug: 'kufstein',
    city: 'Kufstein',
    region: 'Tyrol',
    airport: 'Innsbruck Airport (INN) / Munich Airport (MUC)',
    popularRoutes: [
      'Kufstein ↔ Munich Airport (cross-border)',
      'Kufstein ↔ Innsbruck Airport',
      'Kufstein ↔ Kitzbühel',
    ],
    hotelNote: 'Pickup and drop-off at hotels across Kufstein old town and the Inn riverfront.',
    attractions: [
      {
        name: 'Kufstein Fortress (Festung Kufstein)',
        description: 'Medieval fortress tower overlooking the Inn river, housing the famous Heroes\' Organ.',
      },
      {
        name: 'Riedel Glassworks Factory',
        description: 'World-famous luxury crystal wine glass workshop and museum in Kufstein.',
      },
    ],
  },
  {
    slug: 'lienz',
    city: 'Lienz',
    region: 'Tyrol (East Tyrol)',
    airport: 'Klagenfurt Airport (KLU) / Salzburg Airport (SZG)',
    popularRoutes: [
      'Lienz ↔ Klagenfurt',
      'Lienz ↔ Cortina d\'Ampezzo, Italy (cross-border)',
      'Lienz ↔ Salzburg',
    ],
    hotelNote: 'Pickup and drop-off at hotels across the sunny Lienzer Dolomiten region.',
    attractions: [
      {
        name: 'Bruck Castle (Schloss Bruck)',
        description: '13th-century castle housing the museum of Albin Egger-Lienz paintings.',
      },
      {
        name: 'Lienz Dolomites (Lienzer Dolomiten)',
        description: 'Dramatic limestone peaks offering climbing, hiking, and winter sports.',
      },
    ],
  },
  {
    slug: 'dornbirn',
    city: 'Dornbirn',
    region: 'Vorarlberg',
    airport: 'Zurich Airport (ZRH, cross-border) / St. Gallen (ACH)',
    popularRoutes: [
      'Dornbirn ↔ Zurich Airport (cross-border)',
      'Dornbirn ↔ Bregenz',
      'Dornbirn ↔ Lech am Arlberg',
    ],
    hotelNote: 'Pickup and drop-off at business hotels and technology centers across Vorarlberg’s largest city.',
    attractions: [
      {
        name: 'Karren Cable Car',
        description: 'Panoramas over the Rhine Valley and Lake Constance from the mountain restaurant peak.',
      },
      {
        name: 'Rappenloch Gorge (Rappenlochschlucht)',
        description: 'One of the largest wild gorges in Central Europe with dramatic boardwalks.',
      },
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
    note: 'Prague: around 3 hours from Vienna, 2.5 hours from Linz',
    seoTitle: 'Austria to Czech Republic Chauffeur Transfers | Private & Fixed Price',
    seoDescription:
      'Private chauffeur transfers from Austria to the Czech Republic, including Prague and České Budějovice. Door-to-door service, fixed pricing and cross-border travel.',
    dropoffHint:
      'For a Czech Republic transfer, enter your exact destination — for example, "Prague, Czech Republic" or "České Budějovice, Czech Republic" — as your drop-off.',
    intro: [
      'The Czech Republic is one of the more common cross-border destinations from Austria, mainly through two corridors: Vienna to Prague in the east, and Linz to South Bohemia in the north. Prague, the Czech capital, is the main long-distance destination — around 310 km and roughly 3 hours 15 minutes from Vienna, or a shorter 215 km and about 2 hours 30 minutes from Linz. České Budějovice, the largest city in South Bohemia, is a natural connection from Upper Austria, around 145 km and 1 hour 45 minutes from Linz via the A7 Mühlkreis Autobahn.',
      "A private chauffeur covers the whole trip in a single vehicle, whether you're starting from a Vienna or Linz hotel, Vienna International Airport, Linz Airport, or another Austrian city. The corridor is used for a mix of trips: business travelers attending meetings in Prague, visitors combining Vienna and Prague in one itinerary, families and groups travelling with luggage, and travelers connecting through Linz into South Bohemia. Pickup can be a hotel, private address, or airport arrivals hall; drop-off works the same way at the Czech end, in Prague or České Budějovice.",
    ],
    serviceIntro:
      'Every Austria–Czech Republic booking is a direct, private transfer — no ride-sharing, no fixed departure times, and no need to arrange a separate leg on either side of the border. Pickup is available from Vienna or Linz hotels and private addresses, from Vienna International Airport (VIE) or Linz Airport (LNZ), or from other Austrian cities on request; drop-off works the same way in the Czech Republic, whether that\'s a Prague hotel, private address, or České Budějovice. Both one-way and return bookings are available, and the same vehicle and driver stay with you for the whole trip.',
    destinationsHeading: 'Prague & České Budějovice — Our Czech Republic Destinations',
    destinationsIntro:
      'Prague is our main long-distance destination in the Czech Republic, reachable from both Vienna and Linz. České Budějovice, in South Bohemia, is a shorter journey and a natural connection from Linz and Upper Austria. We can also consider other Czech destinations on request.',
    borderInfo:
      "Austria and the Czech Republic are both part of the Schengen Area, so there's normally no routine border stop or passport check — the drive continues straight through, with no need to switch vehicles or drivers partway. Temporary spot checks are occasionally introduced, particularly around holiday weekends, so we recommend carrying valid photo ID regardless. The Vienna corridor crosses near Mikulov; the Linz corridor crosses near Wullowitz, where road signage changes from German to Czech as the route continues north.",
    whyChauffeur: [
      {
        title: 'Door-to-Door, No Station or Parking',
        description:
          "No need to find parking in Vienna, Linz, or Prague, or navigate public transport with luggage — the car goes directly from where you start to where you're going.",
      },
      {
        title: 'The Border Crossing Is Handled for You',
        description:
          'The vehicle and driver take care of the border crossing as part of the service — no separate transport to arrange on either side, and no vehicle switch partway.',
      },
      {
        title: 'Fixed Price, Confirmed in Advance',
        description:
          'Pricing is confirmed by email before you travel and stays fixed regardless of traffic or minor route changes — no cross-border surcharge and no meter running.',
      },
      {
        title: 'Flight-Aware for Airport Connections',
        description:
          'For Vienna Airport or Linz Airport pickups, we monitor the provided flight and adjust pickup timing if the flight is delayed or arrives early.',
      },
    ],
    journeys: [
      {
        heading: 'Vienna to Prague Transfer',
        distance: '~310km',
        duration: '~3h 15m',
        description:
          'The main long-distance route on this corridor: central Vienna to Prague is around 310 km by road, typically following the A5 Weinviertel Autobahn through Mikulov onto the D52/D1 — normally about 3 hours 15 minutes door to door, though traffic and your exact destination in Prague can add to that.',
        routeHref: '/routes/vienna-to-prague',
      },
      {
        heading: 'Vienna Airport to Prague Transfer',
        distance: '~330km',
        duration: '~3h 15m',
        description:
          'A direct alternative to a connecting flight for VIE arrivals heading to Prague, following the same A5/Mikulov/D52/D1 corridor. The driver tracks your flight and meets you in the arrivals hall.',
        routeHref: '/routes/vienna-airport-to-prague',
      },
      {
        heading: 'Linz to Prague Transfer',
        distance: '~215km',
        duration: '~2h 30m',
        description:
          'A shorter northbound route for travelers starting in Upper Austria: Linz to Prague runs via the A7 Mühlkreis Autobahn, crossing near Wullowitz onto the D3 — around 2 hours 30 minutes door to door.',
        routeHref: '/routes/linz-to-prague',
      },
      {
        heading: 'Linz Airport to Prague Transfer',
        distance: '~215km',
        duration: '~2h 30m',
        description:
          'The same A7/Wullowitz/D3 corridor as the Linz to Prague route, timed around your Linz Airport arrival — the driver tracks your flight and meets you in the arrivals hall.',
        routeHref: '/routes/linz-airport-to-prague',
      },
      {
        heading: 'Linz to České Budějovice Transfer',
        distance: '~145km',
        duration: '~1h 45m',
        description:
          'The shortest of these routes: Linz to České Budějovice follows the same A7/Wullowitz/D3 corridor as the Prague route, but only as far as South Bohemia — around 1 hour 45 minutes door to door.',
        routeHref: '/routes/linz-to-ceske-budejovice',
      },
    ],
    bookingSteps: [
      'Enter your pickup location and Czech Republic destination.',
      'Add your travel date, time, and passenger count.',
      'Note your luggage, and mention in the notes field if you need a child seat or booster seat.',
      "If it's an airport pickup, include your flight number so the driver can track it.",
      'We confirm availability and a fixed price by email — no payment is required to request a quote.',
    ],
    trust:
      'Cross-border transfers are fulfilled through licensed chauffeur operators within our network. We confirm the assigned driver, vehicle, and fixed price before your journey, with one vehicle and driver handling the transfer from pickup to destination, including the border crossing.',
    faqs: [
      {
        question: 'How long does a private transfer from Vienna to Prague take?',
        answer:
          'Around 3 hours 15 minutes door to door in normal traffic via the A5 Weinviertel Autobahn and D52/D1 — actual time depends on traffic, weather, and your exact destination in Prague.',
      },
      {
        question: 'Can I book a transfer from Linz to Prague?',
        answer: 'Yes — around 2 hours 30 minutes via the A7 Mühlkreis Autobahn and D3, a shorter route than from Vienna.',
      },
      {
        question: 'Can you arrange transfers to České Budějovice?',
        answer: 'Yes — around 1 hour 45 minutes from Linz via the same A7/D3 corridor, as far as South Bohemia.',
      },
      {
        question: 'Can I book an airport transfer from Vienna Airport or Linz Airport to Prague?',
        answer: 'Yes. Both routes are available, and we monitor your flight number to adjust pickup timing if needed.',
      },
      {
        question: 'Do I need to change vehicles at the Austria–Czech Republic border?',
        answer:
          'No — both countries are Schengen members, so there is no routine stop or vehicle change. Carry valid photo ID regardless, in case of a temporary spot check.',
      },
      {
        question: 'Can you pick me up from my hotel in Vienna or Linz?',
        answer: 'Yes. Hotel and private-address pickup is standard across Vienna, Linz, and other Austrian cities — just provide the address when booking.',
      },
      {
        question: 'Can I book a return transfer from the Czech Republic to Austria?',
        answer: 'Yes — one-way and return bookings are both available; request both legs together so the journey can be planned around your schedule.',
      },
      {
        question: 'Can I book a transfer for a family with luggage or child seats?',
        answer:
          'Yes. The Executive Van handles families with extra luggage, and child seats or booster seats are available on request at no extra charge.',
      },
    ],
  },
  {
    slug: 'slovakia',
    country: 'Slovakia',
    cities: ['Bratislava'],
    via: 'via A4 / A6 motorway',
    popularRoutes: ['Vienna → Bratislava', 'Vienna Airport → Bratislava'],
    note: 'Bratislava: typically under an hour from Vienna',
    seoTitle: 'Austria to Slovakia Transfer Service | Vienna ↔ Bratislava',
    seoDescription:
      'Private chauffeur transfer service between Austria and Slovakia — Vienna to Bratislava in under an hour, airport or city pickup, fixed price, no border vehicle switch.',
    dropoffHint:
      'For a Slovakia transfer, enter your exact destination — for example, "Bratislava, Slovakia" — as your drop-off. We will confirm availability and a fixed price by email.',
    intro: [
      "Slovakia is one of the closest international destinations from Vienna, with Bratislava typically around an hour away by road — it sits about 80km east of the city center via the A4 and A6 motorways, though the exact time depends on traffic and your precise pickup location. A private chauffeur covers the whole trip in a single vehicle, whether you're starting from a Vienna hotel, Vienna International Airport, or another Austrian city.",
      "The corridor is used for a mix of trips: business travelers attending same-day meetings in Bratislava, visitors combining both capitals in one itinerary, families flying out of Bratislava Airport instead of Vienna, and day-trippers doing the round trip without an overnight stay. Pickup can be a hotel, private address, or airport arrivals hall; drop-off works the same way at the other end.",
    ],
    serviceIntro:
      "Every Austria–Slovakia booking is a direct, private transfer — no ride-sharing, no fixed departure times, and no need to arrange a separate leg on either side of the border. Pickup is available from Vienna hotels and private addresses, from Vienna International Airport (VIE), or from other Austrian cities on request; drop-off works the same way in Bratislava, whether that's a hotel, private address, or Bratislava Airport (BTS). Both one-way and return bookings are available, and the same vehicle and driver stay with you for the whole trip.",
    destinationsHeading: 'Bratislava — Our Main Slovakia Destination',
    destinationsIntro:
      "Bratislava is our main Slovakia destination — close enough to Vienna for a same-day round trip, and well connected by the A4 and A6 motorways. We can also consider other destinations in Slovakia on request.",
    borderInfo:
      "Austria and Slovakia are both part of the Schengen Area, so there's normally no routine border stop or passport check — the drive continues straight through, with no need to switch vehicles or drivers partway. Temporary spot checks are occasionally introduced, particularly around holiday weekends, so we recommend carrying valid photo ID regardless.",
    whyChauffeur: [
      {
        title: 'Door-to-door, no station or parking',
        description:
          "No need to find parking in Vienna or Bratislava, or navigate either city's public transport with luggage — the car goes directly from where you start to where you're going.",
      },
      {
        title: 'The border crossing is handled for you',
        description:
          'The vehicle and driver take care of the border crossing as part of the service — no separate transport to arrange on either side, and no vehicle switch partway.',
      },
      {
        title: 'Fixed price, confirmed in advance',
        description:
          'The confirmed price stays fixed for the agreed journey, subject to changes requested by the passenger or significant changes to the booking — no cross-border surcharge and no meter running.',
      },
      {
        title: 'Flight-aware for airport connections',
        description:
          'For Vienna Airport or Bratislava Airport pickups, we monitor the provided flight and adjust pickup timing if the flight is delayed or arrives early.',
      },
    ],
    journeys: [
      {
        heading: 'Vienna to Bratislava Transfer',
        distance: '~80km',
        duration: 'typically 50–70 minutes',
        description:
          "The most common route we offer on this corridor: central Vienna to Bratislava is around 80 km by road, typically following the A4 and A6 via Kittsee to the Slovak border — normally 50 to 70 minutes door to door, though traffic around Vienna or at the border can add to that. It's short enough for a same-day round trip, and one of the shortest capital-to-capital drives in Europe.",
        routeHref: '/routes/vienna-to-bratislava',
      },
      {
        heading: 'Vienna Airport to Bratislava Transfer',
        distance: '~65km',
        duration: 'typically 45–60 minutes',
        description:
          'This route runs in both directions — arriving passengers at Vienna International Airport heading on into Slovakia, and Bratislava-based travelers connecting to a flight at Vienna Airport instead of flying from Bratislava directly. The driver tracks your flight and meets you in the arrivals hall; the same applies in reverse for a Bratislava pickup timed against a VIE departure.',
        routeHref: '/routes/vienna-airport-to-bratislava',
      },
    ],
    destinationAirportNote: {
      heading: 'Bratislava Airport (BTS)',
      description:
        'Bratislava Airport can be used as an alternative arrival or departure point for travelers based in Austria, particularly Vienna — sometimes a cheaper or more convenient fare than flying via Vienna. See our Bratislava destination page for BTS-specific transfer details.',
      linkHref: '/service-areas/bratislava',
      linkLabel: 'Bratislava destination & airport details →',
    },
    bookingSteps: [
      'Enter your pickup location and Slovakia destination.',
      'Add your travel date, time, and passenger count.',
      'Add your luggage details and mention any child seat or booster-seat requirements.',
      "If it's an airport pickup, include your flight number so the driver can track it.",
      'We confirm availability and a fixed price by email — no payment is required to request a quote.',
    ],
    trust:
      'Cross-border transfers are fulfilled through licensed chauffeur operators within our network. We confirm the assigned driver, vehicle, and fixed price before your journey, with one vehicle and driver handling the transfer from pickup to destination, including the border crossing.',
    faqs: [
      {
        question: 'How long does a private transfer from Vienna to Bratislava take?',
        answer:
          'Typically 50–70 minutes door to door in normal traffic via the A4 and A6 motorways — it is one of the shortest international transfer routes from Austria.',
      },
      {
        question: 'Can I book a transfer from Vienna Airport to Bratislava?',
        answer:
          'Yes — typically 45–60 minutes via the A4 and A6 motorways, and it works in both directions: VIE arrivals continuing into Slovakia, or a Bratislava pickup connecting to a flight at Vienna Airport.',
      },
      {
        question: 'Do I need to change vehicles at the Austria–Slovakia border?',
        answer:
          'No — both countries are Schengen members, so there is no routine stop or vehicle change. Carry valid photo ID regardless, in case of a temporary spot check.',
      },
      {
        question: 'Can you pick me up from my hotel in Vienna?',
        answer:
          'Yes. Hotel and private-address pickup is standard across Vienna and other Austrian cities — just provide the address when booking.',
      },
      {
        question: 'Can I book a return transfer from Slovakia to Austria?',
        answer:
          'Yes — one-way and return bookings are both available, and a same-day round trip is realistic given the short drive time.',
      },
      {
        question: 'Do you provide transfers to destinations in Slovakia outside Bratislava?',
        answer:
          "Bratislava and Bratislava Airport (BTS) are where the large majority of our Slovakia bookings go, and where the service is best established. If your trip is elsewhere in Slovakia, submit it as your drop-off when booking and we'll confirm whether the route can be driven.",
      },
      {
        question: 'Can I book a transfer for a family with luggage or child seats?',
        answer:
          'Yes. The Executive Van handles families with extra luggage, and child seats or booster seats are available on request at no extra charge — mention the age and height of your children in the notes field.',
      },
      {
        question: 'Can I request an early-morning or late-night transfer?',
        answer:
          'Yes — the service operates 24/7, so early-morning and late-night pickups, including overnight flight arrivals, are booked the same way as any other time slot.',
      },
      {
        question: 'Can I book a same-day Austria to Slovakia transfer?',
        answer:
          'Same-day requests can be submitted and are subject to chauffeur and vehicle availability. We recommend booking earlier during busy travel periods.',
      },
    ],
  },
  {
    slug: 'hungary',
    country: 'Hungary',
    cities: ['Budapest', 'Sopron'],
    via: 'via Vienna or Burgenland',
    popularRoutes: ['Vienna → Budapest', 'Eisenstadt → Sopron', 'Wiener Neustadt → Sopron'],
    note: 'Popular for Vienna and Burgenland pickups',
  },
  {
    slug: 'slovenia',
    country: 'Slovenia',
    cities: ['Ljubljana', 'Maribor'],
    via: 'via Graz or Klagenfurt',
    popularRoutes: ['Graz → Ljubljana', 'Klagenfurt → Ljubljana', 'Villach → Ljubljana'],
    note: 'Popular for Graz and Klagenfurt pickups',
  },
  {
    slug: 'italy',
    country: 'Italy',
    cities: ['Venice', 'Bolzano', 'Milan'],
    via: 'via Innsbruck / Brenner Pass',
    popularRoutes: ['Innsbruck → Bolzano', 'Innsbruck → Venice', 'Villach → Venice'],
    note: 'Popular for Innsbruck and Villach pickups',
  },
  {
    slug: 'switzerland-liechtenstein',
    country: 'Switzerland & Liechtenstein',
    cities: ['Zurich', 'St. Gallen', 'Vaduz'],
    via: 'via Bregenz / Vorarlberg',
    popularRoutes: ['Bregenz → Zurich', 'Bregenz → St. Gallen', 'Bregenz → Vaduz'],
    note: 'Popular for Bregenz and Vorarlberg pickups',
  },
]

export const borderCities: BorderCity[] = [
  {
    slug: 'munich',
    city: 'Munich',
    countrySlug: 'germany',
    country: 'Germany',
    via: 'via A8 motorway',
    popularRoutes: ['Salzburg → Munich', 'Innsbruck → Munich', 'Vienna → Munich'],
  },
  {
    slug: 'passau',
    city: 'Passau',
    countrySlug: 'germany',
    country: 'Germany',
    via: 'via A8 / A3',
    popularRoutes: ['Linz → Passau', 'Vienna → Passau'],
  },
  {
    slug: 'rosenheim',
    city: 'Rosenheim',
    countrySlug: 'germany',
    country: 'Germany',
    via: 'via A8 motorway',
    popularRoutes: ['Salzburg → Rosenheim', 'Innsbruck → Rosenheim'],
  },
  {
    slug: 'prague',
    city: 'Prague',
    countrySlug: 'czech-republic',
    country: 'Czech Republic',
    via: 'via Linz or Vienna',
    popularRoutes: ['Linz → Prague', 'Vienna → Prague'],
    description:
      'The Czech capital and by far the most-requested destination on this corridor — reachable from both Vienna and Linz, with hotel, private-address, and airport drop-off available.',
  },
  {
    slug: 'ceske-budejovice',
    city: 'České Budějovice',
    countrySlug: 'czech-republic',
    country: 'Czech Republic',
    via: 'via Linz',
    popularRoutes: ['Linz → České Budějovice'],
    description:
      'The largest city in South Bohemia, just over the border from Upper Austria — a natural connection from Linz, whether for business, a hotel stay, or an onward journey.',
  },
  {
    slug: 'bratislava',
    city: 'Bratislava',
    countrySlug: 'slovakia',
    country: 'Slovakia',
    via: 'via the A4 and A6 motorways',
    popularRoutes: ['Vienna → Bratislava', 'Vienna Airport → Bratislava'],
    seoTitle: 'Austria to Bratislava Transfer | Private Chauffeur Service',
    seoDescription:
      'Private chauffeur transfers from Austria to Bratislava, including Vienna and Vienna Airport. Door-to-door service, fixed quotes, and direct cross-border travel.',
    description:
      "Slovakia's capital, and our primary destination in the country — typically under an hour from central Vienna. Most bookings are for hotels in the Old Town, the castle district, or the riverside promenade along the Danube, plus arrivals and departures at Bratislava Airport (BTS); pickup and drop-off go directly to wherever you're staying. Wedding and private-event transport, part of our standard service offering, can also be arranged here.",
    intro:
      'Private chauffeur transfers from Vienna, Vienna Airport, and destinations across Austria to Bratislava, Slovakia. Door-to-door service, a fixed price confirmed before your journey, and no vehicle change at the border.',
    dropoffHint:
      'For a Bratislava transfer, enter your exact pickup and drop-off locations — for example, "Vienna Airport" to "Bratislava Old Town."',
    routeOverview: [
      { route: 'Vienna → Bratislava', distance: '~55–80km', duration: '~50–70 minutes' },
      { route: 'Vienna Airport → Bratislava', distance: '~65km', duration: '~45–60 minutes' },
    ],
    pickupIntro:
      'We arrange private pickups from Vienna, Vienna International Airport, and other Austrian cities and regions on request.',
    pickupLocations: [
      'Vienna hotels & private addresses',
      'Vienna Airport (VIE)',
      'Business addresses',
      'Train stations',
      'Other Austrian cities and regions',
    ],
    destinationsServed: [
      { title: 'Old Town', description: 'Central Bratislava and the historic district.' },
      { title: 'Hotels', description: 'City-centre and surrounding Bratislava hotels.' },
      { title: 'Bratislava Airport', description: 'Direct transfers to and from BTS.' },
      { title: 'Business Addresses', description: 'Offices, meetings, and corporate travel.' },
      { title: 'Private Residences', description: 'Door-to-door residential pickup and drop-off.' },
    ],
    airportSection: {
      heading: 'Vienna Airport to Bratislava',
      description:
        "Arriving at Vienna International Airport and continuing to Bratislava? Your chauffeur meets you in the arrivals hall, helps with luggage, and drives directly to your hotel, residence, or business address in Bratislava — around 45 minutes via the A4 and A6 motorways.",
      routeHref: '/routes/vienna-airport-to-bratislava',
      routeLabel: 'Vienna Airport to Bratislava route →',
    },
    destinationAirportSection: {
      heading: 'Bratislava Airport (BTS) Transfers',
      description:
        "Flying from Bratislava Airport instead of Vienna? We collect you from a Vienna hotel, Vienna Airport, or another Austrian address and drive directly to the BTS terminal — and the same route works in reverse for BTS arrivals continuing into Austria.",
      routes: [
        {
          label: 'Vienna → Bratislava Airport',
          description: 'Private transfer from Vienna hotels, residences, or business addresses directly to BTS.',
        },
        {
          label: 'Vienna Airport → Bratislava Airport',
          description: 'Private airport-to-airport transfer for travelers connecting between VIE and BTS for an onward flight or ground transport.',
        },
        {
          label: 'Bratislava Airport → Vienna',
          description: 'BTS arrivals continuing directly to a Vienna hotel, residence, or business address.',
        },
      ],
    },
    extraRoutes: [
      {
        label: 'Vienna → Bratislava',
        description: 'Private city-to-city chauffeur transfer.',
        href: '/routes/vienna-to-bratislava',
      },
      {
        label: 'Vienna Airport → Bratislava',
        description: 'Direct airport pickup and hotel or residence drop-off.',
        href: '/routes/vienna-airport-to-bratislava',
      },
      {
        label: 'Bratislava → Vienna / Vienna Airport',
        description: 'Return journey to any Vienna address, or straight to your departure flight.',
      },
      {
        label: 'Other Austrian Locations',
        description: 'Custom cross-border pickup from elsewhere in Austria — submit your address when booking.',
      },
    ],
    whyChauffeur: [
      {
        title: 'Door-to-Door Service',
        description: 'Your chauffeur collects you from your hotel, residence, airport, or business address and drives directly to Bratislava.',
      },
      {
        title: 'Fixed Pricing',
        description: 'Your transfer price is confirmed by email before the journey — no meter, no surprise charges.',
      },
      {
        title: 'No Vehicle Change',
        description: 'Stay in the same private vehicle for the entire cross-border journey.',
      },
      {
        title: 'Professional Chauffeur',
        description: 'A professional chauffeur familiar with the Austria–Slovakia route and cross-border travel.',
      },
      {
        title: 'Private Vehicle',
        description: 'No shared shuttle and no unrelated passenger stops.',
      },
      {
        title: 'Flexible Pickup',
        description: 'Choose your own pickup time rather than following a fixed timetable.',
      },
    ],
    borderInfo:
      "Your chauffeur and vehicle stay with you for the entire journey across the Austria–Slovakia border — there's no need to stop and change vehicles partway. Austria and Slovakia are both part of the Schengen Area, so there's normally no routine passport check at this border, although temporary border controls can be introduced, particularly around holiday periods. We recommend carrying valid photo ID regardless.",
    returnInfo:
      "One-way and return transfers are available between Bratislava, Vienna, and Vienna Airport — a return flight from Vienna Airport can be booked the same way as the outbound leg.",
    businessSection: {
      heading: 'Business Transfers Between Vienna & Bratislava',
      description:
        "Bratislava's short distance from Vienna makes it a practical same-day business destination — client meetings, conferences, or a return trip without needing to book a flight. Provide your itinerary and preferred timing when requesting a quote, and we'll confirm a fixed price for the round trip.",
    },
    dayTripSection: {
      heading: 'Vienna to Bratislava Day Trips',
      description:
        'Because the journey is relatively short, Bratislava can be visited as a half-day or full-day trip from Vienna. A private chauffeur lets you choose your own departure and return times, without arranging separate station transfers or parking.',
      linkHref: '/blog/vienna-to-bratislava-guide',
      linkLabel: 'Read our Vienna to Bratislava guide →',
    },
    weddingSection: {
      heading: 'Planning a Wedding in Bratislava?',
      description:
        "Wedding and private-event transport between Vienna and Bratislava is part of our standard service — coordinated pickups for the couple and guests, hotel-to-venue transfers, and multi-vehicle timing for wedding parties crossing the border in one trip.",
      linkHref: '/blog/vienna-bratislava-wedding-transfer-guide',
      linkLabel: 'Read our Vienna–Bratislava wedding transfer guide →',
    },
    faqs: [
      {
        question: 'How long does a private transfer from Vienna to Bratislava take?',
        answer: 'Around an hour door to door via the A4 and A6 motorways — traffic near Vienna or at the border can add to that.',
      },
      {
        question: 'How far is Vienna from Bratislava?',
        answer:
          'The road distance varies depending on your exact pickup and destination, but central Vienna and Bratislava are roughly 55–80 km apart. The drive normally takes around 50–70 minutes.',
      },
      {
        question: 'Can I book a transfer from Vienna Airport to Bratislava?',
        answer: 'Yes — around 45 minutes, with your chauffeur meeting you in the arrivals hall and driving directly to your Bratislava address.',
      },
      {
        question: 'Do I need to change vehicles at the Austria–Slovakia border?',
        answer: "No — your chauffeur and vehicle stay with you the whole way. Both countries are in the Schengen Area, so there's normally no routine passport stop.",
      },
      {
        question: 'Can you pick me up from somewhere other than Vienna?',
        answer: "Yes — enter your exact pickup address, including other Austrian cities, when booking and we'll confirm whether the route can be driven.",
      },
      {
        question: 'Can I book a return transfer from Bratislava to Vienna or Vienna Airport?',
        answer: 'Yes — one-way and return bookings are both available.',
      },
      {
        question: 'Can I book a transfer for a family or group?',
        answer: 'Yes — the Executive Van (up to 7) and Minibus (up to 16) handle larger groups and extra luggage, with child seats available on request at no extra charge.',
      },
      {
        question: 'Is the price fixed?',
        answer: 'Yes — we confirm a fixed price by email before your journey, based on your pickup, destination, vehicle, and passenger count.',
      },
      {
        question: 'Can I book a same-day transfer?',
        answer: 'Same-day requests can be submitted, subject to driver and vehicle availability. Earlier booking is recommended during peak periods.',
      },
    ],
  },
  {
    slug: 'budapest',
    city: 'Budapest',
    countrySlug: 'hungary',
    country: 'Hungary',
    via: 'via Vienna',
    popularRoutes: ['Vienna → Budapest', 'Vienna Airport → Budapest'],
  },
  {
    slug: 'sopron',
    city: 'Sopron',
    countrySlug: 'hungary',
    country: 'Hungary',
    via: 'via Eisenstadt / Wiener Neustadt',
    popularRoutes: ['Eisenstadt → Sopron', 'Wiener Neustadt → Sopron'],
  },
  {
    slug: 'ljubljana',
    city: 'Ljubljana',
    countrySlug: 'slovenia',
    country: 'Slovenia',
    via: 'via Graz or Klagenfurt',
    popularRoutes: ['Graz → Ljubljana', 'Klagenfurt → Ljubljana', 'Villach → Ljubljana'],
  },
  {
    slug: 'maribor',
    city: 'Maribor',
    countrySlug: 'slovenia',
    country: 'Slovenia',
    via: 'via Graz',
    popularRoutes: ['Graz → Maribor'],
  },
  {
    slug: 'venice',
    city: 'Venice',
    countrySlug: 'italy',
    country: 'Italy',
    via: 'via Innsbruck / Brenner Pass',
    popularRoutes: ['Innsbruck → Venice', 'Villach → Venice'],
  },
  {
    slug: 'bolzano',
    city: 'Bolzano',
    countrySlug: 'italy',
    country: 'Italy',
    via: 'via Brenner Pass',
    popularRoutes: ['Innsbruck → Bolzano'],
  },
  {
    slug: 'milan',
    city: 'Milan',
    countrySlug: 'italy',
    country: 'Italy',
    via: 'via Brenner Pass / A22',
    popularRoutes: ['Innsbruck → Milan'],
  },
  {
    slug: 'zurich',
    city: 'Zurich',
    countrySlug: 'switzerland-liechtenstein',
    country: 'Switzerland',
    via: 'via Bregenz',
    popularRoutes: ['Bregenz → Zurich'],
  },
  {
    slug: 'st-gallen',
    city: 'St. Gallen',
    countrySlug: 'switzerland-liechtenstein',
    country: 'Switzerland',
    via: 'via Bregenz',
    popularRoutes: ['Bregenz → St. Gallen'],
  },
  {
    slug: 'vaduz',
    city: 'Vaduz',
    countrySlug: 'switzerland-liechtenstein',
    country: 'Liechtenstein',
    via: 'via Bregenz',
    popularRoutes: ['Bregenz → Vaduz'],
  },
]
