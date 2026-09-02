export type Hotel = { name: string; area?: string }
export type Attraction = { name: string; description: string }

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
  seoTitle?: string
  seoDescription?: string
  relatedDayTour?: { slug: string; label: string }
  heroImage?: { src: string; alt: string; title?: string; description?: string }
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
  intro?: string[]
  serviceIntro?: string
  destinationsHeading?: string
  destinationsIntro?: string
  borderInfo?: string
  whyChauffeur?: WhyChauffeurPoint[]
  journeys?: Journey[]
  bookingSteps?: string[]
  trust?: string
  faqs?: { question: string; answer: string }[]
  dropoffHint?: string
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
  description?: string
  intro?: string
  routeOverview?: { route: string; distance?: string; duration: string }[]
  pickupIntro?: string
  pickupLocations?: string[]
  destinationsServed?: { title: string; description: string }[]
  airportSection?: { heading: string; description: string; routeHref: string; routeLabel: string }
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
  faqs?: { question: string; answer: string }[]
  dropoffHint?: string
}

export const austrianCities: CityArea[] = [
  {
    slug: 'vienna',
    city: 'Wien',
    region: 'Wien',
    airport: 'Flughafen Wien-Schwechat (VIE)',
    popularRoutes: [
      'Flughafen Wien ↔ Stadtzentrum',
      'Wien → Salzburg',
      'Wien → Bratislava, Slowakei (grenzüberschreitend)',
      'Wien → Budapest, Ungarn (grenzüberschreitend)',
    ],
    note: 'Hauptsitz & primärer Standort',
    seoTitle: 'Privater Chauffeurservice Wien | Flughafen- & Stadttransfers',
    seoDescription:
      'Privater Chauffeurservice in Wien — Flughafenabholungen, Stadtfahrten und grenzüberschreitende Fahrten nach Bratislava, Budapest und darüber hinaus. Festpreise, professionelle Fahrer.',
    heroImage: {
      src: '/images/hero/vienna-austria-cityscape-chauffeur-service.webp',
      alt: 'Wiener Stadtpanorama mit dem Stephansdom',
      title: 'Wien Österreich Stadtpanorama – Chauffeurservice',
      description:
        'Panoramablick auf Wien bei Sonnenuntergang mit dem Stephansdom und historischer österreichischer Architektur.',
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
        name: 'Schloss Schönbrunn',
        description: 'Ehemalige kaiserliche Sommerresidenz mit Schlossgarten und der Gloriette.',
      },
      {
        name: 'Stephansdom',
        description: 'Wiens gotischer Dom und das symbolische Herz der Inneren Stadt.',
      },
      {
        name: 'Hofburg',
        description: 'Die ehemalige kaiserliche Residenz, heute Sitz der Spanischen Hofreitschule und mehrerer Museen.',
      },
      {
        name: 'Schloss Belvedere',
        description: 'Barocker Schlosskomplex mit Klimts „Der Kuss“ und weiterer österreichischer Kunst.',
      },
      {
        name: 'Wiener Staatsoper',
        description: 'Eines der weltweit führenden Opernhäuser, direkt an der Ringstraße.',
      },
      {
        name: 'Prater & Wiener Riesenrad',
        description: 'Wiens historischer Vergnügungspark mit dem ikonischen Riesenrad.',
      },
    ],
  },
  {
    slug: 'graz',
    city: 'Graz',
    region: 'Steiermark',
    airport: 'Flughafen Graz (GRZ)',
    popularRoutes: [
      'Flughafen Graz ↔ Stadtzentrum',
      'Graz → Wien',
      'Graz → Maribor, Slowenien (grenzüberschreitend)',
      'Graz → Ljubljana, Slowenien (grenzüberschreitend)',
    ],
    hotels: [
      { name: 'Hotel Wiesler', area: 'Murufer / Lend' },
      { name: 'Schlossberg Hotel Graz', area: 'Am Fuß des Schlossbergs' },
      { name: 'Hotel Daniel Graz', area: 'Nähe Hauptbahnhof' },
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in der gesamten Altstadt und am Murufer.',
    attractions: [
      {
        name: 'Schlossberg & Uhrturm',
        description: 'Grazer Wahrzeichen auf dem Hausberg, erreichbar mit der Standseilbahn, mit dem berühmten Uhrturm.',
      },
      {
        name: 'Kunsthaus Graz',
        description: 'Ein markantes Museum für zeitgenössische Kunst, bekannt für seine biomorphe „außerirdische“ Fassade.',
      },
      {
        name: 'Schloss Eggenberg',
        description: 'Ein UNESCO-gelistetes Barockschloss mit Planetenzimmern und weitläufigem Park.',
      },
      {
        name: 'Landeszeughaus',
        description: 'Das weltweit größte historische Waffenlager an seinem ursprünglichen Standort.',
      },
      {
        name: 'Grazer Dom & Mausoleum',
        description: 'Die gotische Domkirche der Stadt neben dem Mausoleum Kaiser Ferdinands II.',
      },
    ],
  },
  {
    slug: 'linz',
    city: 'Linz',
    region: 'Oberösterreich',
    airport: 'Flughafen Linz (LNZ)',
    popularRoutes: [
      'Linz → Wien',
      'Linz → Salzburg',
      'Linz → Prag, Tschechien (grenzüberschreitend)',
      'Linz → České Budějovice, Tschechien (grenzüberschreitend)',
    ],
    hotels: [
      { name: 'ARCOTEL Nike Linz', area: 'Donauufer' },
      { name: 'Hotel Schillerpark Linz', area: 'Stadtzentrum' },
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in der Altstadt und am Donauufer.',
    attractions: [
      {
        name: 'Ars Electronica Center',
        description: 'Ein Museum der Zukunft rund um digitale Kunst, Wissenschaft und Technologie.',
      },
      {
        name: 'Pöstlingberg & Pöstlingbergbahn',
        description: 'Linz\' Hausberg, erreichbar mit einer der steilsten Adhäsionsbahnen der Welt.',
      },
      {
        name: 'Linzer Schloss (Schlossmuseum)',
        description: 'Das historische Schloss der Stadt, heute Sitz des oberösterreichischen Landesmuseums.',
      },
      {
        name: 'Lentos Kunstmuseum',
        description: 'Ein verglastes Museum für moderne Kunst direkt an der Donau.',
      },
      {
        name: 'Mariendom (Neuer Dom)',
        description: 'Österreichs größte Kirche mit neugotischem Turm, der die Stadt überragt.',
      },
    ],
  },
  {
    slug: 'salzburg',
    city: 'Salzburg',
    region: 'Salzburg',
    airport: 'Flughafen Salzburg (SZG)',
    relatedDayTour: { slug: 'salzburg-day-trip', label: 'Salzburg-Tagesausflug ab Wien' },
    popularRoutes: [
      'Flughafen Salzburg ↔ Stadtzentrum',
      'Salzburg → München, Deutschland (grenzüberschreitend)',
      'Salzburg → Innsbruck',
      'Salzburg → Wien',
    ],
    hotels: [
      { name: 'Hotel Sacher Salzburg', area: 'Salzachufer' },
      { name: 'Hotel Goldener Hirsch', area: 'Getreidegasse, Altstadt' },
      { name: 'Hotel Bristol Salzburg', area: 'Makartplatz' },
      { name: 'Sheraton Grand Salzburg', area: 'Mirabellplatz' },
      { name: 'Hotel Schloss Mönchstein', area: 'Mönchsberg' },
    ],
    attractions: [
      {
        name: 'Festung Hohensalzburg',
        description: 'Eine der größten mittelalterlichen Burgen Europas, hoch über der Altstadt.',
      },
      {
        name: 'Schloss Mirabell & Mirabellgarten',
        description: 'Barocke Schlossgärten, bekannt aus „The Sound of Music“, mit Blick auf die Festung.',
      },
      {
        name: 'Getreidegasse',
        description: 'Salzburgs historische Einkaufsstraße mit schmiedeeisernen Zunftschildern und Mozarts Geburtshaus.',
      },
      {
        name: 'Salzburger Dom',
        description: 'Der barocke Dom der Stadt im Herzen der Altstadt.',
      },
      {
        name: 'Mozarts Geburtshaus',
        description: 'Das Haus, in dem Wolfgang Amadeus Mozart 1756 geboren wurde, heute ein Museum.',
      },
      {
        name: '„The Sound of Music“-Drehorte',
        description: 'Mirabellgarten, Schloss Leopoldskron und weitere Schauplätze des berühmten Films.',
      },
    ],
  },
  {
    slug: 'innsbruck',
    city: 'Innsbruck',
    region: 'Tirol',
    airport: 'Flughafen Innsbruck (INN)',
    popularRoutes: [
      'Flughafen Innsbruck ↔ Stadtzentrum',
      'Innsbruck → Bozen / Venedig, Italien (Brennerpass, grenzüberschreitend)',
      'Innsbruck → München, Deutschland (grenzüberschreitend)',
      'Innsbruck → Salzburg',
    ],
    hotels: [
      { name: 'Grand Hotel Europa Innsbruck', area: 'Gegenüber dem Hauptbahnhof' },
      { name: 'Hotel Grauer Bär', area: 'Altstadt' },
      { name: 'ADLERS Hotel Innsbruck', area: 'Stadtzentrum' },
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in der Altstadt und rund um den Hauptbahnhof.',
    attractions: [
      {
        name: 'Goldenes Dachl',
        description: 'Innsbrucks bekanntestes Wahrzeichen, ein spätgotischer Erker mit 2.657 vergoldeten Kupferschindeln.',
      },
      {
        name: 'Swarovski Kristallwelten (Wattens)',
        description: 'Ein Museum und Kristallwunderland kurz östlich der Stadt.',
      },
      {
        name: 'Nordkettenbahn',
        description: 'Eine Seilbahn, die vom Stadtzentrum direkt auf über 2.000 m alpines Gelände führt.',
      },
      {
        name: 'Hofburg Innsbruck',
        description: 'Die ehemalige Habsburger Residenz mit Rokoko-Prunkräumen, die besichtigt werden können.',
      },
      {
        name: 'Schloss Ambras',
        description: 'Ein Renaissanceschloss über der Stadt mit den Sammlungen Erzherzog Ferdinands II.',
      },
    ],
  },
  {
    slug: 'klagenfurt',
    city: 'Klagenfurt',
    region: 'Kärnten',
    airport: 'Flughafen Klagenfurt (KLU)',
    popularRoutes: [
      'Klagenfurt → Ljubljana, Slowenien (grenzüberschreitend)',
      'Klagenfurt → Graz',
      'Klagenfurt → Villach',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in der Altstadt und entlang der Wörthersee-Uferpromenade.',
    seoTitle: 'Chauffeurservice in Klagenfurt | Flughafen-, Stadt- & Grenztransfers',
    seoDescription:
      'Privater Chauffeurservice in Klagenfurt — Flughafentransfers, Strecken nach Wörthersee, Villach und Graz sowie grenzüberschreitende Transfers nach Ljubljana. Festpreise, Flugverfolgung.',
    dropoffHint:
      'Geben Sie Ihr Hotel in Klagenfurt, eine Adresse am Wörthersee oder ein anderes Ziel an — wir bestätigen Verfügbarkeit und einen Festpreis per E-Mail.',
    intro: [
      'Klagenfurt liegt am östlichen Ende des Wörthersees, nah genug an der slowenischen Grenze, dass ein privater Transfer nach Ljubljana ein Tagesausflug statt einer Fernreise ist. Diese Lage macht die Stadt zu mehr als einem einzelnen Zwischenstopp — die meisten Fahrten über Klagenfurt verbinden sie mit dem See, mit Villach und Graz oder grenzüberschreitend mit Slowenien.',
      'Ein privater Chauffeurtransfer deckt all das als eine Buchung ab: Flughafenabholung, direkte Ablieferung am Hotel oder am Seeufer, eine Weiterfahrt innerhalb Österreichs oder eine grenzüberschreitende Fahrt — im selben Fahrzeug, zu einem vor der Reise vereinbarten Festpreis.',
    ],
    airportNote:
      'Der Flughafen Klagenfurt (KLU) liegt rund 4 km nördlich der Stadt, je nach genauem Ziel etwa 10 Minuten Fahrzeit. Bei Flughafenabholungen ist Flugverfolgung inklusive, sodass sich die Abholzeit bei Verspätung automatisch und ohne Aufpreis anpasst.',
    journeys: [
      {
        heading: 'Klagenfurt nach Ljubljana, Slowenien',
        distance: '~85 km',
        duration: '~1 Std.',
        description:
          'Klagenfurts nächstgelegene grenzüberschreitende Hauptstrecke. Ein privater Transfer fährt direkt von Ihrem Hotel in Klagenfurt oder vom Flughafen nach Ljubljana — in einem Fahrzeug, ohne Umsteigen, zum vor der Reise vereinbarten Festpreis.',
        routeHref: '/de/routes/klagenfurt-to-ljubljana',
      },
      {
        heading: 'Klagenfurt nach Villach',
        distance: '~40 km',
        duration: '~30 Min.',
        description: 'Eine kurze, direkte Fahrt durch die Kärntner Seenlandschaft — praktisch für die Weiterfahrt zum Faaker See oder nach Italien.',
        routeHref: '/de/routes/klagenfurt-airport-to-villach',
      },
      {
        heading: 'Klagenfurt nach Graz',
        distance: '~140 km',
        duration: '~1 Std. 30 Min.',
        description: 'Eine direkte Fahrt zwischen Österreichs zweit- und sechstgrößter Stadt über die A2 Südautobahn.',
        routeHref: '/de/routes/graz-to-klagenfurt',
      },
      {
        heading: 'Klagenfurt nach Velden am Wörthersee',
        distance: '~20 km',
        duration: '~20 Min.',
        description: 'Die klassische Fahrt ans Wörthersee-Ufer — ein kurzer privater Transfer für einen Hotelaufenthalt, ein Abendessen am See oder eine Weiterfahrt entlang des Sees.',
        routeHref: '/de/routes/klagenfurt-to-velden',
      },
      {
        heading: 'Flughafen Klagenfurt nach Bad Kleinkirchheim',
        distance: '~55 km',
        duration: '~55 Min.',
        description: 'Westlich über die A2 und B93 durch die Nockberge — ein direkter Skitransfer ohne Shuttle-Wechsel.',
        routeHref: '/de/routes/klagenfurt-airport-to-bad-kleinkirchheim',
      },
      {
        heading: 'Flughafen Klagenfurt nach Nassfeld',
        distance: '~65 km',
        duration: '~1 Std.',
        description: 'Westlich über die A2 und das Gailtal — ein direkter Transfer für Skifahrer mit Ausrüstung und Gepäck.',
        routeHref: '/de/routes/klagenfurt-airport-to-nassfeld',
      },
      {
        heading: 'Flughafen Klagenfurt nach Turracher Höhe',
        distance: '~75 km',
        duration: '~1 Std. 15 Min.',
        description: 'Nordwestlich hinauf zum Passdorf Turracher Höhe — einer der längeren regionalen Skitransfers ab KLU.',
        routeHref: '/de/routes/klagenfurt-airport-to-turracher-hoehe',
      },
    ],
    whyChauffeur: [
      {
        title: 'Festpreis',
        description: 'Vor der Fahrt per E-Mail bestätigt, egal ob es sich um eine kurze Flughafenfahrt oder einen grenzüberschreitenden Transfer nach Ljubljana handelt.',
      },
      {
        title: 'Flugverfolgung',
        description: 'Flughafenabholungen richten sich nach Ihrem tatsächlichen Flug, nicht der geplanten Ankunft — bei Verspätung passt sich die Abholung automatisch an.',
      },
      {
        title: 'Tür zu Tür',
        description: 'Direkte Abholung und Ablieferung an Ihrem Hotel, einer Adresse am Wörthersee oder jeder Privatadresse in Klagenfurt und Kärnten.',
      },
      {
        title: 'Grenzüberschreitend',
        description: 'Dasselbe Fahrzeug fährt weiter nach Slowenien für einen Transfer nach Ljubljana — kein Fahrzeugwechsel oder Sammeltransport an der Grenze.',
      },
      {
        title: 'Platz für Ski & Gepäck',
        description: 'Executive Van und Kleinbus decken Skiausrüstung und zusätzliches Gepäck für Fahrten zu den regionalen Skigebieten ab.',
      },
      {
        title: 'Stunden- & Mehrstopp-Buchungen',
        description: 'Fahrzeug und Fahrer auf Abruf für Termine, Besichtigungen oder einen Tag mit mehreren Stationen in Kärnten — stundenweise abgerechnet.',
      },
    ],
    bookingSteps: [
      'Geben Sie Abhol- und Zielort an — den Flughafen, ein Hotel in Klagenfurt, eine Adresse am Wörthersee oder eine Weiterfahrt — sowie Datum, Uhrzeit und Personenzahl.',
      'Wir prüfen die Verfügbarkeit und bestätigen einen Festpreis per E-Mail. Für die Anfrage sind keine Zahlung oder Kartendaten nötig.',
      'Ihr Chauffeur trifft Sie am vereinbarten Abholort und fährt Sie direkt zu Ihrem Ziel.',
    ],
    faqs: [
      {
        question: 'Bieten Sie Transfers zum Flughafen Klagenfurt an?',
        answer:
          'Ja. Private Transfers können zum und vom Flughafen Klagenfurt (KLU) arrangiert werden, rund 4 km vom Stadtzentrum entfernt, mit inkludierter Flugverfolgung bei Flughafenabholungen.',
      },
      {
        question: 'Kann ich einen Transfer von Klagenfurt nach Ljubljana buchen?',
        answer: 'Ja — ein privater grenzüberschreitender Transfer nach Ljubljana beträgt rund 85 km und dauert typischerweise etwa eine Stunde.',
      },
      {
        question: 'Können Sie mich von meinem Hotel in Klagenfurt abholen?',
        answer: 'Ja. Geben Sie bei der Anfrage den Hotelnamen oder die vollständige Adresse als Abhol- oder Zielort an.',
      },
      {
        question: 'Decken Sie das Wörthersee-Gebiet ab?',
        answer: 'Ja. Abholung und Ablieferung sind an Hotels und Adressen entlang des Wörthersee-Ufers möglich, einschließlich Velden.',
      },
      {
        question: 'Welche Fahrzeuge stehen zur Verfügung?',
        answer: 'Business-Limousine, Luxus-Limousine, Executive Van und Kleinbus stehen je nach Verfügbarkeit zur Verfügung.',
      },
      {
        question: 'Kann ich einen Kindersitz anfordern?',
        answer: 'Ja. Geben Sie Alter und Körpergröße Ihrer Kinder bei der Buchung an, damit der passende Sitz vorbereitet werden kann.',
      },
      {
        question: 'Kann ich einen stundenweisen Chauffeur für einen Tag in Kärnten buchen?',
        answer: 'Ja. Stundenbuchungen und Mehrstopp-Fahrten können angefragt werden — geben Sie Ihre geplanten Stationen und den Zeitplan im Notizfeld an.',
      },
      {
        question: 'Was passiert, wenn mein Flug Verspätung hat?',
        answer: 'Geben Sie Ihre Flugnummer bei der Buchung an — die Abholzeit passt sich automatisch an Ihre tatsächliche Ankunft an, ohne Aufpreis.',
      },
    ],
    attractions: [
      {
        name: 'Minimundus',
        description: 'Ein Miniaturpark mit über 150 maßstabsgetreuen Modellen weltberühmter Bauwerke.',
      },
      {
        name: 'Wörthersee-Ufer',
        description: 'Kärntens größter See mit Promenaden, Stränden und Schiffsrundfahrten ab der Stadt.',
      },
      {
        name: 'Lindwurmbrunnen',
        description: 'Klagenfurts Drachen-Wahrzeichen am Neuen Platz, aus dem 16. Jahrhundert.',
      },
      {
        name: 'Klagenfurter Dom',
        description: 'Der barocke Dom der Stadt in der historischen Altstadt.',
      },
    ],
  },
  {
    slug: 'villach',
    city: 'Villach',
    region: 'Kärnten',
    airport: 'Flughafen Klagenfurt (KLU)',
    popularRoutes: [
      'Villach → Ljubljana, Slowenien (grenzüberschreitend)',
      'Villach → Venedig, Italien (grenzüberschreitend)',
      'Villach → Klagenfurt',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in der Altstadt und im Thermenviertel Warmbad-Villach.',
    attractions: [
      {
        name: 'Villacher Altstadt',
        description: 'Ein farbenfrohes historisches Zentrum entlang der Drau mit italienisch geprägter Architektur.',
      },
      {
        name: 'Faaker See',
        description: 'Ein türkisfarbener Alpensee kurz außerhalb der Stadt, beliebt zum Schwimmen und Radfahren.',
      },
      {
        name: 'Warmbad Villach',
        description: 'Ein Thermenviertel am Stadtrand, gebaut rund um natürliche warme Quellen.',
      },
    ],
  },
  {
    slug: 'wels',
    city: 'Wels',
    region: 'Oberösterreich',
    airport: 'Flughafen Linz (LNZ)',
    popularRoutes: ['Wels → Linz', 'Wels → Salzburg', 'Wels → München, Deutschland (grenzüberschreitend)'],
    hotelNote: 'Abholung und Ablieferung an Hotels im gesamten Stadtzentrum von Wels und nahe dem Messegelände.',
    attractions: [
      {
        name: 'Burg Wels',
        description: 'Ein Renaissanceschloss in der Altstadt, heute Sitz des Stadtmuseums.',
      },
      {
        name: 'Welser Altstadt (Stadtplatz)',
        description: 'Ein historisches Fußgängerzentrum mit Bürgerhäusern und Cafés.',
      },
      {
        name: 'Welios Wissenszentrum',
        description: 'Ein interaktives Wissenschafts- und Technikzentrum, beliebt bei Familien.',
      },
    ],
  },
  {
    slug: 'st-poelten',
    city: 'St. Pölten',
    region: 'Niederösterreich',
    airport: 'Flughafen Wien (VIE)',
    popularRoutes: ['St. Pölten → Wien', 'St. Pölten → Flughafen Wien', 'St. Pölten → Linz'],
    hotelNote: 'Abholung und Ablieferung an Hotels im Stadtzentrum und im Kulturbezirk.',
    attractions: [
      {
        name: 'Dom St. Pölten',
        description: 'Der barocke Dom der niederösterreichischen Landeshauptstadt.',
      },
      {
        name: 'Kulturbezirk & Festspielhaus St. Pölten',
        description: 'Der Kulturbezirk des Landes mit Landestheater und Festspielhaus.',
      },
      {
        name: 'Klangturm',
        description: 'Ein markanter Glas-Stahl-Turm und Wahrzeichen im Kulturbezirk.',
      },
    ],
  },
  {
    slug: 'wiener-neustadt',
    city: 'Wiener Neustadt',
    region: 'Niederösterreich',
    airport: 'Flughafen Wien (VIE)',
    popularRoutes: [
      'Wiener Neustadt → Wien',
      'Wiener Neustadt → Flughafen Wien',
      'Wiener Neustadt → Sopron, Ungarn (grenzüberschreitend)',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im gesamten Stadtzentrum von Wiener Neustadt.',
    attractions: [
      {
        name: 'Dom zu Wiener Neustadt',
        description: 'Der historische Dom der Stadt in der Fußgängerzone der Altstadt.',
      },
      {
        name: 'Theresianische Militärakademie',
        description: 'Österreichs traditionsreiche Militärakademie, untergebracht in einer ehemaligen kaiserlichen Burg.',
      },
      {
        name: 'Stadtmauer & Reckturm',
        description: 'Überreste der mittelalterlichen Stadtbefestigung.',
      },
    ],
  },
  {
    slug: 'bregenz',
    city: 'Bregenz',
    region: 'Vorarlberg',
    airport: 'Flughafen Zürich (ZRH, grenzüberschreitend)',
    popularRoutes: [
      'Bregenz → Zürich, Schweiz (grenzüberschreitend)',
      'Bregenz → St. Gallen, Schweiz (grenzüberschreitend)',
      'Bregenz → Innsbruck',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels am Bodenseeufer und in der Oberstadt.',
    attractions: [
      {
        name: 'Seebühne der Bregenzer Festspiele',
        description: 'Die berühmte schwimmende Bühne am Bodensee, Schauplatz der Bregenzer Sommer-Opernfestspiele.',
      },
      {
        name: 'Pfänderbahn',
        description: 'Eine Seilbahn mit Panoramablick über den Bodensee und drei Länder.',
      },
      {
        name: 'Bregenzer Oberstadt',
        description: 'Ein historisches Viertel am Hang mit dem mittelalterlichen Martinsturm.',
      },
    ],
  },
  {
    slug: 'eisenstadt',
    city: 'Eisenstadt',
    region: 'Burgenland',
    airport: 'Flughafen Wien (VIE)',
    popularRoutes: [
      'Eisenstadt → Wien',
      'Eisenstadt → Sopron, Ungarn (grenzüberschreitend)',
      'Eisenstadt → Flughafen Wien',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels im gesamten Stadtzentrum von Eisenstadt.',
    attractions: [
      {
        name: 'Schloss Esterházy',
        description: 'Der prachtvolle Barocksitz der Familie Esterházy, wo einst Haydn als Hofkomponist wirkte.',
      },
      {
        name: 'Haydnhaus',
        description: 'Das ehemalige Wohnhaus des Komponisten Joseph Haydn, heute ein Museum.',
      },
      {
        name: 'Bergkirche',
        description: 'Eisenstadts Kirche auf dem Kalvarienberg, Standort des Haydn-Mausoleums.',
      },
    ],
  },
  {
    slug: 'hallstatt',
    city: 'Hallstatt',
    region: 'Oberösterreich',
    airport: 'Flughafen Salzburg (SZG) / Flughafen Wien (VIE)',
    relatedDayTour: { slug: 'hallstatt', label: 'Hallstatt-Tagesausflug' },
    popularRoutes: [
      'Salzburg → Hallstatt',
      'Flughafen Wien → Hallstatt',
      'Flughafen Salzburg → Hallstatt',
    ],
    hotelNote: 'Tür-zu-Tür-Transfer direkt zu Ihrem Hotel oder zum Fußgänger-Eingangsterminal im Ort Hallstatt.',
    attractions: [
      {
        name: 'Hallstatt Skywalk & Salzwelten',
        description: 'Das älteste bekannte Salzbergwerk der Welt und eine Panorama-Aussichtsplattform mit Blick über den Hallstätter See.',
      },
      {
        name: 'Historischer Marktplatz',
        description: 'Der ikonische UNESCO-Weltkulturerbe-Dorfplatz am See, gesäumt von traditionellen Alpenhäusern aus dem 16. Jahrhundert.',
      },
      {
        name: 'Beinhaus',
        description: 'Das berühmte Beinhaus in der Michaelskapelle mit über 600 handbemalten Schädeln.',
      },
    ],
  },
  {
    slug: 'woerthersee',
    city: 'Wörthersee',
    region: 'Kärnten',
    airport: 'Flughafen Klagenfurt (KLU) / Flughafen Ljubljana (LJU)',
    popularRoutes: [
      'Flughafen Klagenfurt ↔ Wörthersee (Velden / Pörtschach)',
      'Wien → Wörthersee',
      'Graz → Wörthersee',
      'Ljubljana → Wörthersee (grenzüberschreitend)',
    ],
    hotelNote: 'Abholung und Ablieferung an luxuriösen Seeresorts in Velden, Pörtschach und Maria Wörth.',
    attractions: [
      {
        name: 'Pyramidenkogel',
        description: 'Der höchste Holzaussichtsturm der Welt mit 360-Grad-Blick über den Wörthersee.',
      },
      {
        name: 'Casino Velden',
        description: 'Das bekannte Seecasino, ein Hotspot für Luxuslifestyle und Sommer-Events.',
      },
      {
        name: 'Halbinsel Maria Wörth',
        description: 'Die malerische Kirchenhalbinsel, die ins türkisfarbene Wasser des Sees hineinragt.',
      },
    ],
  },
  {
    slug: 'baden-bei-wien',
    city: 'Baden bei Wien',
    region: 'Niederösterreich',
    airport: 'Flughafen Wien (VIE)',
    popularRoutes: [
      'Flughafen Wien ↔ Baden bei Wien',
      'Wien Stadt ↔ Baden bei Wien',
    ],
    hotelNote: 'Abholung und Ablieferung an Thermenhotels, Villen und Casino-Resorts in ganz Baden.',
    attractions: [
      {
        name: 'Römertherme Baden',
        description: 'Historisches römisches Thermalbad, gespeist von natürlichen Schwefelquellen unter einem Glasdach.',
      },
      {
        name: 'Casino Baden',
        description: 'Eines der größten und elegantesten Casinos Europas, in einem klassischen Kurhaus im Kurpark.',
      },
      {
        name: 'Doblhoffpark & Rosarium',
        description: 'Österreichs größter Rosengarten mit über 30.000 Rosenstöcken vor der Orangerie.',
      },
    ],
  },
  {
    slug: 'salzkammergut',
    city: 'Salzkammergut',
    region: 'Oberösterreich / Salzburg / Steiermark',
    airport: 'Flughafen Salzburg (SZG) / Flughafen Wien (VIE)',
    popularRoutes: [
      'Salzburg ↔ Salzkammergut-Seen',
      'Flughafen Wien → Salzkammergut',
      'München → Salzkammergut (grenzüberschreitend)',
    ],
    hotelNote: 'Private Transfers zu luxuriösen Seeresorts in St. Wolfgang, Bad Ischl, Mondsee und Fuschl.',
    attractions: [
      {
        name: 'Wolfgangsee & Schafbergbahn',
        description: 'Der bekannte Alpensee, kombiniert mit Österreichs steilster dampfbetriebener Zahnradbahn.',
      },
      {
        name: 'Kaiservilla Bad Ischl',
        description: 'Die Sommerresidenz von Kaiser Franz Joseph und Kaiserin Sisi im Herzen der Region.',
      },
      {
        name: 'Basilika Mondsee',
        description: 'Die historische Basilika St. Michael, Schauplatz der berühmten Hochzeitsszene in „The Sound of Music“.',
      },
    ],
  },
  {
    slug: 'wachau-region',
    city: 'Wachau Weinregion',
    region: 'Niederösterreich',
    airport: 'Flughafen Wien (VIE)',
    relatedDayTour: { slug: 'wachau-valley', label: 'Wachau-Tagesausflug' },
    popularRoutes: [
      'Wien ↔ Wachau-Tal Tour/Transfer',
      'Flughafen Wien → Krems an der Donau / Melk',
    ],
    hotelNote: 'Direkter Transfer zu Boutique-Weingütern und Luxushotels in Krems, Melk, Dürnstein und Weißenkirchen.',
    attractions: [
      {
        name: 'Stift Melk',
        description: 'Weltberühmtes Benediktinerstift hoch über der Donau mit einer berühmten Barockbibliothek.',
      },
      {
        name: 'Ruine Dürnstein',
        description: 'Historische Burgruine, in der König Richard Löwenherz 1192 gefangen gehalten wurde.',
      },
      {
        name: 'Weingärten von Spitz & Weißenkirchen',
        description: 'UNESCO-gelistete Terrassenweingärten mit Weltklasse-Grünem Veltliner und Riesling.',
      },
    ],
  },
  {
    slug: 'zillertal-valley',
    city: 'Zillertal',
    region: 'Tirol',
    airport: 'Flughafen Innsbruck (INN) / Flughafen München (MUC)',
    popularRoutes: [
      'Flughafen Innsbruck → Zillertal',
      'Flughafen München → Zillertal (grenzüberschreitend)',
    ],
    hotelNote: 'Tür-zu-Tür-Transfer nach Fügen, Zell am Ziller, Mayrhofen und ins Tuxertal.',
    attractions: [
      {
        name: 'Zillertal Arena & Penken',
        description: 'Eines der größten zusammenhängenden Skigebiete Österreichs, das sich über Tirol und Salzburg erstreckt.',
      },
      {
        name: 'Naturarena Hintertux',
        description: 'Natürliche unterirdische Eishöhle und Gletscherpisten, 365 Tage im Jahr geöffnet.',
      },
    ],
  },
  {
    slug: 'kufstein',
    city: 'Kufstein',
    region: 'Tirol',
    airport: 'Flughafen Innsbruck (INN) / Flughafen München (MUC)',
    popularRoutes: [
      'Kufstein ↔ Flughafen München (grenzüberschreitend)',
      'Kufstein ↔ Flughafen Innsbruck',
      'Kufstein ↔ Kitzbühel',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in der Kufsteiner Altstadt und am Innufer.',
    attractions: [
      {
        name: 'Festung Kufstein',
        description: 'Mittelalterlicher Festungsturm über dem Inn, Heimat der berühmten Heldenorgel.',
      },
      {
        name: 'Riedel Glasmanufaktur',
        description: 'Weltberühmte Luxus-Kristallglas-Manufaktur und Museum in Kufstein.',
      },
    ],
  },
  {
    slug: 'lienz',
    city: 'Lienz',
    region: 'Tirol (Osttirol)',
    airport: 'Flughafen Klagenfurt (KLU) / Flughafen Salzburg (SZG)',
    popularRoutes: [
      'Lienz ↔ Klagenfurt',
      'Lienz ↔ Cortina d\'Ampezzo, Italien (grenzüberschreitend)',
      'Lienz ↔ Salzburg',
    ],
    hotelNote: 'Abholung und Ablieferung an Hotels in der sonnigen Region der Lienzer Dolomiten.',
    attractions: [
      {
        name: 'Schloss Bruck',
        description: 'Burg aus dem 13. Jahrhundert mit dem Museum der Gemälde von Albin Egger-Lienz.',
      },
      {
        name: 'Lienzer Dolomiten',
        description: 'Eindrucksvolle Kalksteingipfel für Klettern, Wandern und Wintersport.',
      },
    ],
  },
  {
    slug: 'dornbirn',
    city: 'Dornbirn',
    region: 'Vorarlberg',
    airport: 'Flughafen Zürich (ZRH, grenzüberschreitend) / St. Gallen-Altenrhein (ACH)',
    popularRoutes: [
      'Dornbirn ↔ Flughafen Zürich (grenzüberschreitend)',
      'Dornbirn ↔ Bregenz',
      'Dornbirn ↔ Lech am Arlberg',
    ],
    hotelNote: 'Abholung und Ablieferung an Business-Hotels und Technologiezentren in Vorarlbergs größter Stadt.',
    attractions: [
      {
        name: 'Karren-Seilbahn',
        description: 'Panoramablick über das Rheintal und den Bodensee vom Berggasthaus am Gipfel.',
      },
      {
        name: 'Rappenlochschlucht',
        description: 'Eine der größten Wildschluchten Mitteleuropas mit spektakulären Stegen.',
      },
    ],
  },
]

export const borderCrossingDestinations: BorderArea[] = [
  {
    slug: 'germany',
    country: 'Deutschland',
    cities: ['München', 'Passau', 'Rosenheim'],
    via: 'über A8 / A93',
    popularRoutes: ['Salzburg → München', 'Innsbruck → München', 'Wien → München'],
    note: 'Beliebt für Abholungen ab Salzburg & Innsbruck',
  },
  {
    slug: 'czech-republic',
    country: 'Tschechien',
    cities: ['Prag', 'České Budějovice'],
    via: 'über Linz oder Wien',
    popularRoutes: ['Linz → Prag', 'Wien → Prag', 'Linz → České Budějovice'],
    note: 'Prag: rund 3 Stunden ab Wien, 2,5 Stunden ab Linz',
    seoTitle: 'Österreich–Tschechien Chauffeurtransfers | Privat & Festpreis',
    seoDescription:
      'Private Chauffeurtransfers von Österreich nach Tschechien, einschließlich Prag und České Budějovice. Tür-zu-Tür-Service, Festpreise und grenzüberschreitende Fahrten.',
    dropoffHint:
      'Geben Sie für einen Tschechien-Transfer Ihren genauen Zielort an — zum Beispiel „Prag, Tschechien" oder „České Budějovice, Tschechien" — als Ablieferung.',
    intro: [
      'Tschechien ist eines der häufigeren grenzüberschreitenden Ziele ab Österreich, hauptsächlich über zwei Korridore: Wien nach Prag im Osten und Linz nach Südböhmen im Norden. Prag, die tschechische Hauptstadt, ist das wichtigste Fernziel — rund 310 km und etwa 3 Stunden 15 Minuten ab Wien, oder kürzer mit 215 km und etwa 2 Stunden 30 Minuten ab Linz. České Budějovice, die größte Stadt Südböhmens, ist eine naheliegende Verbindung ab Oberösterreich, rund 145 km und 1 Stunde 45 Minuten ab Linz über die A7 Mühlkreisautobahn.',
      'Ein privater Chauffeur übernimmt die gesamte Fahrt in einem Fahrzeug — ob Sie in einem Hotel in Wien oder Linz, am Flughafen Wien, am Flughafen Linz oder in einer anderen österreichischen Stadt starten. Der Korridor wird für unterschiedliche Fahrten genutzt: Geschäftsreisende mit Terminen in Prag, Besucher, die Wien und Prag in einer Reise verbinden, Familien und Gruppen mit Gepäck sowie Reisende, die über Linz nach Südböhmen weiterfahren. Die Abholung kann an einem Hotel, einer Privatadresse oder in der Ankunftshalle des Flughafens erfolgen; die Ablieferung funktioniert am tschechischen Ende genauso, in Prag oder České Budějovice.',
    ],
    serviceIntro:
      'Jede Buchung zwischen Österreich und Tschechien ist ein direkter, privater Transfer — kein Mitfahrservice, keine festen Abfahrtszeiten und keine separate Etappe auf einer der beiden Seiten der Grenze. Die Abholung ist ab Hotels und Privatadressen in Wien oder Linz, ab dem Flughafen Wien (VIE) oder Flughafen Linz (LNZ) oder ab anderen österreichischen Städten auf Anfrage möglich; die Ablieferung funktioniert in Tschechien genauso, ob an einem Hotel in Prag, einer Privatadresse oder in České Budějovice. Sowohl einfache Fahrten als auch Rückfahrten sind buchbar, und dasselbe Fahrzeug mit demselben Fahrer begleitet Sie während der gesamten Reise.',
    destinationsHeading: 'Prag & České Budějovice — Unsere Ziele in Tschechien',
    destinationsIntro:
      'Prag ist unser wichtigstes Fernziel in Tschechien, erreichbar sowohl ab Wien als auch ab Linz. České Budějovice in Südböhmen ist eine kürzere Fahrt und eine naheliegende Verbindung ab Linz und Oberösterreich. Weitere tschechische Ziele können wir auf Anfrage prüfen.',
    borderInfo:
      'Österreich und Tschechien sind beide Teil des Schengen-Raums, sodass normalerweise kein routinemäßiger Grenzstopp oder Passkontrolle stattfindet — die Fahrt geht durchgehend weiter, ohne Fahrzeug- oder Fahrerwechsel unterwegs. Gelegentlich werden vorübergehende Stichprobenkontrollen eingeführt, besonders an Feiertagswochenenden, weshalb wir empfehlen, in jedem Fall einen gültigen Lichtbildausweis mitzuführen. Der Wien-Korridor überquert die Grenze nahe Mikulov, der Linz-Korridor nahe Wullowitz, wo die Straßenbeschilderung von Deutsch auf Tschechisch wechselt, während die Strecke weiter nordwärts führt.',
    whyChauffeur: [
      {
        title: 'Tür zu Tür, kein Bahnhof, kein Parkplatzsuchen',
        description:
          'Kein Parkplatzsuchen in Wien, Linz oder Prag und kein Umgang mit öffentlichen Verkehrsmitteln und Gepäck — das Fahrzeug bringt Sie direkt von Ihrem Start- zu Ihrem Zielort.',
      },
      {
        title: 'Der Grenzübertritt wird für Sie erledigt',
        description:
          'Fahrzeug und Fahrer übernehmen den Grenzübertritt als Teil des Services — kein separater Transport auf einer der beiden Seiten und kein Fahrzeugwechsel unterwegs.',
      },
      {
        title: 'Festpreis, im Voraus bestätigt',
        description:
          'Der Preis wird vor der Reise per E-Mail bestätigt und bleibt unabhängig von Verkehr oder kleineren Routenänderungen fest — kein Grenzüberschreitungszuschlag und kein Taxameter.',
      },
      {
        title: 'Flugbewusst bei Flughafenanschlüssen',
        description:
          'Bei Abholungen am Flughafen Wien oder Flughafen Linz überwachen wir den angegebenen Flug und passen die Abholzeit bei Verspätung oder frühzeitiger Ankunft an.',
      },
    ],
    journeys: [
      {
        heading: 'Transfer Wien nach Prag',
        distance: '~310 km',
        duration: '~3 Std. 15 Min.',
        description:
          'Die wichtigste Fernstrecke auf diesem Korridor: Von der Wiener Innenstadt nach Prag sind es rund 310 km, meist über die A5 Weinviertel Autobahn durch Mikulov auf die D52/D1 — normalerweise etwa 3 Stunden 15 Minuten Tür zu Tür, wobei Verkehr und Ihr genaues Ziel in Prag die Fahrzeit verlängern können.',
        routeHref: '/de/routes/vienna-to-prague',
      },
      {
        heading: 'Transfer Flughafen Wien nach Prag',
        distance: '~330 km',
        duration: '~3 Std. 15 Min.',
        description:
          'Eine direkte Alternative zu einem Anschlussflug für VIE-Ankünfte mit Ziel Prag, über denselben Korridor A5/Mikulov/D52/D1. Der Fahrer verfolgt Ihren Flug und empfängt Sie in der Ankunftshalle.',
        routeHref: '/de/routes/vienna-airport-to-prague',
      },
      {
        heading: 'Transfer Linz nach Prag',
        distance: '~215 km',
        duration: '~2 Std. 30 Min.',
        description:
          'Eine kürzere Nordstrecke für Reisende ab Oberösterreich: Linz nach Prag verläuft über die A7 Mühlkreisautobahn, überquert die Grenze nahe Wullowitz auf die D3 — rund 2 Stunden 30 Minuten Tür zu Tür.',
        routeHref: '/de/routes/linz-to-prague',
      },
      {
        heading: 'Transfer Flughafen Linz nach Prag',
        distance: '~215 km',
        duration: '~2 Std. 30 Min.',
        description:
          'Derselbe Korridor A7/Wullowitz/D3 wie die Strecke Linz–Prag, abgestimmt auf Ihre Ankunft am Flughafen Linz — der Fahrer verfolgt Ihren Flug und empfängt Sie in der Ankunftshalle.',
        routeHref: '/de/routes/linz-airport-to-prague',
      },
      {
        heading: 'Transfer Linz nach České Budějovice',
        distance: '~145 km',
        duration: '~1 Std. 45 Min.',
        description:
          'Die kürzeste dieser Strecken: Linz nach České Budějovice folgt demselben Korridor A7/Wullowitz/D3 wie die Prag-Strecke, jedoch nur bis Südböhmen — rund 1 Stunde 45 Minuten Tür zu Tür.',
        routeHref: '/de/routes/linz-to-ceske-budejovice',
      },
    ],
    bookingSteps: [
      'Geben Sie Ihren Abholort und Ihr Ziel in Tschechien an.',
      'Fügen Sie Reisedatum, Uhrzeit und Personenanzahl hinzu.',
      'Geben Sie Ihr Gepäck an und vermerken Sie im Notizfeld, falls Sie einen Kindersitz oder eine Sitzerhöhung benötigen.',
      'Bei einer Flughafenabholung geben Sie Ihre Flugnummer an, damit der Fahrer den Flug verfolgen kann.',
      'Wir bestätigen Verfügbarkeit und einen Festpreis per E-Mail — für die Anfrage ist keine Zahlung erforderlich.',
    ],
    trust:
      'Grenzüberschreitende Transfers werden über lizenzierte Chauffeurpartner in unserem Netzwerk durchgeführt. Wir bestätigen den zugewiesenen Fahrer, das Fahrzeug und den Festpreis vor Ihrer Reise, wobei ein Fahrzeug und ein Fahrer die gesamte Fahrt von der Abholung bis zum Ziel übernehmen, einschließlich des Grenzübertritts.',
    faqs: [
      {
        question: 'Wie lange dauert ein privater Transfer von Wien nach Prag?',
        answer:
          'Unter normalen Verkehrsbedingungen etwa 3 Stunden 15 Minuten über die A5 Weinviertel Autobahn und die D52/D1 — die tatsächliche Zeit hängt von Verkehr, Wetter und Ihrem genauen Ziel in Prag ab.',
      },
      {
        question: 'Kann ich einen Transfer von Linz nach Prag buchen?',
        answer: 'Ja — etwa 2 Stunden 30 Minuten über die A7 Mühlkreisautobahn und die D3, eine kürzere Strecke als ab Wien.',
      },
      {
        question: 'Bieten Sie Transfers nach České Budějovice an?',
        answer: 'Ja — etwa 1 Stunde 45 Minuten ab Linz über denselben Korridor A7/D3, bis nach Südböhmen.',
      },
      {
        question: 'Kann ich einen Flughafentransfer vom Flughafen Wien oder Flughafen Linz nach Prag buchen?',
        answer: 'Ja. Beide Strecken sind verfügbar, und wir überwachen Ihre Flugnummer, um die Abholzeit bei Bedarf anzupassen.',
      },
      {
        question: 'Muss ich an der Grenze zwischen Österreich und Tschechien das Fahrzeug wechseln?',
        answer:
          'Nein — beide Länder sind Schengen-Mitglieder, daher gibt es keinen routinemäßigen Stopp oder Fahrzeugwechsel. Führen Sie dennoch einen gültigen Lichtbildausweis mit, falls eine vorübergehende Stichprobenkontrolle stattfindet.',
      },
      {
        question: 'Können Sie mich von meinem Hotel in Wien oder Linz abholen?',
        answer: 'Ja. Die Abholung an Hotels und Privatadressen ist in Wien, Linz und anderen österreichischen Städten Standard — geben Sie einfach die Adresse bei der Buchung an.',
      },
      {
        question: 'Kann ich einen Rücktransfer von Tschechien nach Österreich buchen?',
        answer: 'Ja — einfache Fahrten und Rückfahrten sind beide buchbar; fragen Sie beide Etappen zusammen an, damit die Reise um Ihren Zeitplan geplant werden kann.',
      },
      {
        question: 'Kann ich einen Transfer für eine Familie mit Gepäck oder Kindersitzen buchen?',
        answer:
          'Ja. Der Executive Van eignet sich für Familien mit zusätzlichem Gepäck, und Kindersitze oder Sitzerhöhungen sind auf Anfrage ohne Aufpreis erhältlich.',
      },
    ],
  },
  {
    slug: 'slovakia',
    country: 'Slowakei',
    cities: ['Bratislava'],
    via: 'über die A4 / A6-Autobahn',
    popularRoutes: ['Wien → Bratislava', 'Flughafen Wien → Bratislava'],
    note: 'Bratislava: meist unter einer Stunde ab Wien',
    seoTitle: 'Österreich–Slowakei Transferservice | Wien ↔ Bratislava',
    seoDescription:
      'Privater Chauffeur-Transferservice zwischen Österreich und der Slowakei — Wien nach Bratislava in unter einer Stunde, Abholung ab Stadt oder Flughafen, Festpreis, kein Fahrzeugwechsel an der Grenze.',
    dropoffHint:
      'Geben Sie für einen Slowakei-Transfer Ihren genauen Zielort an — zum Beispiel „Bratislava, Slowakei" — als Ablieferung. Wir bestätigen Verfügbarkeit und einen Festpreis per E-Mail.',
    intro: [
      'Die Slowakei ist eines der nächstgelegenen internationalen Ziele ab Wien, wobei Bratislava meist rund eine Stunde Fahrzeit entfernt ist — die Stadt liegt etwa 80 km östlich des Stadtzentrums über die Autobahnen A4 und A6, wobei die genaue Dauer vom Verkehr und Ihrem genauen Abholort abhängt. Ein privater Chauffeur legt die gesamte Strecke in einem einzigen Fahrzeug zurück, egal ob Sie ab einem Wiener Hotel, dem Flughafen Wien oder einer anderen österreichischen Stadt starten.',
      'Die Strecke wird für unterschiedliche Reisezwecke genutzt: Geschäftsreisende mit Terminen am selben Tag in Bratislava, Besucher, die beide Hauptstädte in einer Reise verbinden, Familien, die statt ab Wien lieber ab dem Flughafen Bratislava fliegen, und Tagesausflügler, die die Fahrt hin und zurück ohne Übernachtung machen. Die Abholung kann an einem Hotel, einer Privatadresse oder im Ankunftsbereich eines Flughafens erfolgen — die Ablieferung funktioniert am Zielort genauso.',
    ],
    serviceIntro:
      'Jede Buchung zwischen Österreich und der Slowakei ist ein direkter, privater Transfer — keine Mitfahrgelegenheit, keine festen Abfahrtszeiten und keine separate Teilstrecke auf einer der beiden Seiten der Grenze. Die Abholung ist ab Wiener Hotels und Privatadressen, ab dem Flughafen Wien (VIE) oder auf Anfrage ab anderen österreichischen Städten möglich; die Ablieferung in Bratislava funktioniert ebenso — ob Hotel, Privatadresse oder Flughafen Bratislava (BTS). Sowohl einfache Fahrten als auch Hin- und Rückfahrten sind buchbar, und Fahrzeug sowie Fahrer bleiben während der gesamten Fahrt dieselben.',
    destinationsHeading: 'Bratislava — unser Hauptziel in der Slowakei',
    destinationsIntro:
      'Bratislava ist unser Hauptziel in der Slowakei — nah genug an Wien für eine Rückfahrt am selben Tag und gut über die Autobahnen A4 und A6 angebunden. Weitere Ziele in der Slowakei prüfen wir gerne auf Anfrage.',
    borderInfo:
      'Österreich und die Slowakei sind beide Teil des Schengen-Raums, daher gibt es an der Grenze normalerweise keinen routinemäßigen Halt oder eine Passkontrolle — die Fahrt geht durchgehend weiter, ohne dass Fahrzeug oder Fahrer unterwegs gewechselt werden müssen. Gelegentlich werden vorübergehende Stichprobenkontrollen eingeführt, insbesondere an Feiertagswochenenden, daher empfehlen wir, trotzdem einen gültigen Lichtbildausweis mitzuführen.',
    whyChauffeur: [
      {
        title: 'Tür zu Tür, kein Bahnhof, kein Parkplatzsuchen',
        description:
          'Kein Parkplatzsuchen in Wien oder Bratislava und keine Fahrt mit Gepäck durch die öffentlichen Verkehrsmittel beider Städte — das Fahrzeug bringt Sie direkt von Ihrem Startpunkt ans Ziel.',
      },
      {
        title: 'Der Grenzübertritt wird für Sie übernommen',
        description:
          'Fahrzeug und Fahrer übernehmen den Grenzübertritt als Teil des Services — keine separate Organisation auf einer der beiden Seiten und kein Fahrzeugwechsel unterwegs.',
      },
      {
        title: 'Festpreis, im Voraus bestätigt',
        description:
          'Der bestätigte Preis bleibt für die vereinbarte Fahrt fix, vorbehaltlich vom Fahrgast gewünschter Änderungen oder wesentlicher Änderungen an der Buchung — kein grenzüberschreitender Aufschlag und kein Taxameter.',
      },
      {
        title: 'Flugüberwachung bei Flughafenanschlüssen',
        description:
          'Bei Abholungen am Flughafen Wien oder Flughafen Bratislava beobachten wir den angegebenen Flug und passen die Abholzeit bei Verspätung oder früher Ankunft an.',
      },
    ],
    journeys: [
      {
        heading: 'Transfer Wien nach Bratislava',
        distance: '~80 km',
        duration: 'meist 50–70 Minuten',
        description:
          'Die meistgenutzte Strecke dieses Korridors: vom Wiener Zentrum nach Bratislava sind es rund 80 km auf der Straße, meist über die Autobahnen A4 und A6 durch Kittsee bis zur slowakischen Grenze — normalerweise 50 bis 70 Minuten Tür zu Tür, wobei Verkehr rund um Wien oder an der Grenze die Fahrzeit verlängern kann. Kurz genug für eine Rückfahrt am selben Tag, und eine der kürzesten Hauptstadt-zu-Hauptstadt-Fahrten Europas.',
        routeHref: '/de/routes/vienna-to-bratislava',
      },
      {
        heading: 'Transfer Flughafen Wien nach Bratislava',
        distance: '~65 km',
        duration: 'meist 45–60 Minuten',
        description:
          'Diese Strecke funktioniert in beide Richtungen — ankommende Passagiere am Flughafen Wien, die weiter in die Slowakei reisen, und Reisende ab Bratislava, die statt eines Direktflugs ab Bratislava einen Anschlussflug ab dem Flughafen Wien nehmen. Der Fahrer verfolgt Ihren Flug und empfängt Sie im Ankunftsbereich; umgekehrt gilt dasselbe für eine Abholung in Bratislava, abgestimmt auf einen VIE-Abflug.',
        routeHref: '/de/routes/vienna-airport-to-bratislava',
      },
    ],
    destinationAirportNote: {
      heading: 'Flughafen Bratislava (BTS)',
      description:
        'Der Flughafen Bratislava kann als alternativer Ankunfts- oder Abflugort für Reisende mit Sitz in Österreich, insbesondere Wien, genutzt werden — manchmal zu einem günstigeren oder praktischeren Flugpreis als über Wien. Details zu BTS-spezifischen Transfers finden Sie auf unserer Bratislava-Zielseite.',
      linkHref: '/de/service-areas/bratislava',
      linkLabel: 'Bratislava: Ziel & Flughafendetails →',
    },
    bookingSteps: [
      'Geben Sie Ihren Abholort und Ihren Zielort in der Slowakei an.',
      'Ergänzen Sie Reisedatum, Uhrzeit und Anzahl der Passagiere.',
      'Geben Sie Ihr Gepäck an und vermerken Sie im Notizfeld, falls Sie einen Kindersitz oder eine Sitzerhöhung benötigen.',
      'Bei einer Flughafenabholung geben Sie bitte Ihre Flugnummer an, damit der Fahrer den Flug verfolgen kann.',
      'Wir bestätigen Verfügbarkeit und einen Festpreis per E-Mail — für die Anfrage ist keine Zahlung erforderlich.',
    ],
    trust:
      'Grenzüberschreitende Transfers werden über lizenzierte Chauffeurpartner innerhalb unseres Netzwerks durchgeführt. Wir bestätigen den zugeteilten Fahrer, das Fahrzeug und den Festpreis vor Ihrer Fahrt — ein Fahrzeug und ein Fahrer übernehmen den Transfer vom Abholort bis zum Ziel, einschließlich des Grenzübertritts.',
    faqs: [
      {
        question: 'Wie lange dauert ein privater Transfer von Wien nach Bratislava?',
        answer:
          'Bei normalem Verkehr meist 50–70 Minuten Tür zu Tür über die Autobahnen A4 und A6 — einer der kürzesten internationalen Transferwege ab Österreich.',
      },
      {
        question: 'Kann ich einen Transfer vom Flughafen Wien nach Bratislava buchen?',
        answer:
          'Ja — meist 45–60 Minuten über die Autobahnen A4 und A6, und das funktioniert in beide Richtungen: Ankünfte am Flughafen Wien mit Ziel Slowakei oder eine Abholung in Bratislava mit Anschluss an einen Flug ab Wien.',
      },
      {
        question: 'Muss ich an der Grenze zwischen Österreich und der Slowakei das Fahrzeug wechseln?',
        answer:
          'Nein — beide Länder sind Schengen-Mitglieder, daher gibt es keinen routinemäßigen Stopp oder Fahrzeugwechsel. Führen Sie trotzdem einen gültigen Lichtbildausweis mit, falls es zu einer Stichprobenkontrolle kommt.',
      },
      {
        question: 'Können Sie mich an meinem Hotel in Wien abholen?',
        answer:
          'Ja. Die Abholung an Hotels und Privatadressen ist in Wien und anderen österreichischen Städten Standard — geben Sie die Adresse einfach bei der Buchung an.',
      },
      {
        question: 'Kann ich einen Rücktransfer von der Slowakei nach Österreich buchen?',
        answer:
          'Ja — einfache Fahrten und Hin- und Rückfahrten sind beide buchbar, und angesichts der kurzen Fahrzeit ist auch eine Rückfahrt am selben Tag realistisch.',
      },
      {
        question: 'Bieten Sie Transfers zu Zielen in der Slowakei außerhalb von Bratislava an?',
        answer:
          'Bratislava und der Flughafen Bratislava (BTS) sind die Ziele, zu denen der Großteil unserer Slowakei-Buchungen geht, und wo der Service am etabliertesten ist. Liegt Ihr Ziel anderswo in der Slowakei, geben Sie es bei der Buchung einfach als Zielort an — wir prüfen dann, ob die Strecke gefahren werden kann.',
      },
      {
        question: 'Kann ich einen Transfer für eine Familie mit Gepäck oder Kindersitzen buchen?',
        answer:
          'Ja. Der Executive Van eignet sich für Familien mit mehr Gepäck, und Kindersitze oder Sitzerhöhungen sind auf Anfrage ohne Aufpreis verfügbar — geben Sie Alter und Körpergröße Ihrer Kinder im Notizfeld an.',
      },
      {
        question: 'Kann ich einen frühmorgendlichen oder späten Nachttransfer anfragen?',
        answer:
          'Ja — der Service ist rund um die Uhr verfügbar, daher werden frühmorgendliche und späte Abholungen, auch nach Nachtflügen, genauso gebucht wie jede andere Uhrzeit.',
      },
      {
        question: 'Kann ich einen Transfer von Österreich in die Slowakei am selben Tag buchen?',
        answer:
          'Anfragen am selben Tag sind möglich, abhängig von Fahrer- und Fahrzeugverfügbarkeit. In verkehrsreichen Zeiten empfehlen wir eine frühzeitigere Buchung.',
      },
    ],
  },
  {
    slug: 'hungary',
    country: 'Ungarn',
    cities: ['Budapest', 'Sopron'],
    via: 'über Wien oder Burgenland',
    popularRoutes: ['Wien → Budapest', 'Eisenstadt → Sopron', 'Wiener Neustadt → Sopron'],
    note: 'Beliebt für Abholungen ab Wien und dem Burgenland',
  },
  {
    slug: 'slovenia',
    country: 'Slowenien',
    cities: ['Ljubljana', 'Maribor'],
    via: 'über Graz oder Klagenfurt',
    popularRoutes: ['Graz → Ljubljana', 'Klagenfurt → Ljubljana', 'Villach → Ljubljana'],
    note: 'Beliebt für Abholungen ab Graz und Klagenfurt',
  },
  {
    slug: 'italy',
    country: 'Italien',
    cities: ['Venedig', 'Bozen', 'Mailand'],
    via: 'über Innsbruck / Brennerpass',
    popularRoutes: ['Innsbruck → Bozen', 'Innsbruck → Venedig', 'Villach → Venedig'],
    note: 'Beliebt für Abholungen ab Innsbruck und Villach',
  },
  {
    slug: 'switzerland-liechtenstein',
    country: 'Schweiz & Liechtenstein',
    cities: ['Zürich', 'St. Gallen', 'Vaduz'],
    via: 'über Bregenz / Vorarlberg',
    popularRoutes: ['Bregenz → Zürich', 'Bregenz → St. Gallen', 'Bregenz → Vaduz'],
    note: 'Beliebt für Abholungen ab Bregenz und Vorarlberg',
  },
]

export const borderCities: BorderCity[] = [
  {
    slug: 'munich',
    city: 'München',
    countrySlug: 'germany',
    country: 'Deutschland',
    via: 'über die A8-Autobahn',
    popularRoutes: ['Salzburg → München', 'Innsbruck → München', 'Wien → München'],
  },
  {
    slug: 'passau',
    city: 'Passau',
    countrySlug: 'germany',
    country: 'Deutschland',
    via: 'über A8 / A3',
    popularRoutes: ['Linz → Passau', 'Wien → Passau'],
  },
  {
    slug: 'rosenheim',
    city: 'Rosenheim',
    countrySlug: 'germany',
    country: 'Deutschland',
    via: 'über die A8-Autobahn',
    popularRoutes: ['Salzburg → Rosenheim', 'Innsbruck → Rosenheim'],
  },
  {
    slug: 'prague',
    city: 'Prag',
    countrySlug: 'czech-republic',
    country: 'Tschechien',
    via: 'über Linz oder Wien',
    popularRoutes: ['Linz → Prag', 'Wien → Prag'],
    description:
      'Die tschechische Hauptstadt und mit Abstand das meistgefragte Ziel auf diesem Korridor — erreichbar sowohl ab Wien als auch ab Linz, mit Ablieferung an Hotel, Privatadresse oder Flughafen.',
  },
  {
    slug: 'ceske-budejovice',
    city: 'České Budějovice',
    countrySlug: 'czech-republic',
    country: 'Tschechien',
    via: 'über Linz',
    popularRoutes: ['Linz → České Budějovice'],
    description:
      'Die größte Stadt Südböhmens, direkt hinter der Grenze zu Oberösterreich — eine naheliegende Verbindung ab Linz, ob für Geschäftsreisen, einen Hotelaufenthalt oder eine Weiterreise.',
  },
  {
    slug: 'bratislava',
    city: 'Bratislava',
    countrySlug: 'slovakia',
    country: 'Slowakei',
    via: 'über die Autobahnen A4 und A6',
    popularRoutes: ['Wien → Bratislava', 'Flughafen Wien → Bratislava'],
    seoTitle: 'Österreich nach Bratislava Transfer | Privater Chauffeurservice',
    seoDescription:
      'Private Chauffeurtransfers von Österreich nach Bratislava, einschließlich Wien und Flughafen Wien. Tür-zu-Tür-Service, Festpreisangebote und direkte grenzüberschreitende Fahrten.',
    description:
      'Die Hauptstadt der Slowakei und unser primäres Ziel im Land — meist unter einer Stunde vom Wiener Zentrum entfernt. Die meisten Buchungen betreffen Hotels in der Altstadt, das Burgviertel oder die Uferpromenade an der Donau sowie Ankünfte und Abflüge am Flughafen Bratislava (BTS); Abholung und Ablieferung erfolgen direkt an Ihrem Aufenthaltsort. Hochzeits- und Event-Transport, Teil unseres Standardangebots, kann auch hier organisiert werden.',
    intro:
      'Private Chauffeurtransfers von Wien, dem Flughafen Wien und Zielen in ganz Österreich nach Bratislava, Slowakei. Tür-zu-Tür-Service, ein vor der Fahrt bestätigter Festpreis und kein Fahrzeugwechsel an der Grenze.',
    dropoffHint:
      'Geben Sie für einen Bratislava-Transfer Ihren genauen Abhol- und Zielort an — zum Beispiel „Flughafen Wien" bis „Bratislava Altstadt".',
    routeOverview: [
      { route: 'Wien → Bratislava', distance: '~55–80 km', duration: '~50–70 Minuten' },
      { route: 'Flughafen Wien → Bratislava', distance: '~65 km', duration: '~45–60 Minuten' },
    ],
    pickupIntro:
      'Wir organisieren private Abholungen ab Wien, dem Flughafen Wien und anderen österreichischen Städten und Regionen auf Anfrage.',
    pickupLocations: [
      'Wiener Hotels & Privatadressen',
      'Flughafen Wien (VIE)',
      'Geschäftsadressen',
      'Bahnhöfe',
      'Andere österreichische Städte und Regionen',
    ],
    destinationsServed: [
      { title: 'Altstadt', description: 'Zentrales Bratislava und die historische Altstadt.' },
      { title: 'Hotels', description: 'Hotels im Stadtzentrum und Umgebung von Bratislava.' },
      { title: 'Flughafen Bratislava', description: 'Direkte Transfers von und zum BTS.' },
      { title: 'Geschäftsadressen', description: 'Büros, Meetings und Geschäftsreisen.' },
      { title: 'Privatadressen', description: 'Tür-zu-Tür-Abholung und Ablieferung an Wohnadressen.' },
    ],
    airportSection: {
      heading: 'Flughafen Wien nach Bratislava',
      description:
        'Ankunft am Flughafen Wien mit Weiterfahrt nach Bratislava? Ihr Chauffeur empfängt Sie in der Ankunftshalle, hilft beim Gepäck und fährt Sie direkt zu Ihrem Hotel, Ihrer Wohnadresse oder Geschäftsadresse in Bratislava — rund 45 Minuten über die Autobahnen A4 und A6.',
      routeHref: '/de/routes/vienna-airport-to-bratislava',
      routeLabel: 'Route Flughafen Wien nach Bratislava →',
    },
    destinationAirportSection: {
      heading: 'Flughafen Bratislava (BTS) Transfers',
      description:
        'Fliegen Sie lieber ab Bratislava statt ab Wien? Wir holen Sie an einem Wiener Hotel, am Flughafen Wien oder einer anderen österreichischen Adresse ab und fahren Sie direkt zum BTS-Terminal — und die gleiche Strecke funktioniert auch umgekehrt für BTS-Ankünfte nach Österreich.',
      routes: [
        {
          label: 'Wien → Flughafen Bratislava',
          description: 'Privater Transfer von Wiener Hotels, Wohn- oder Geschäftsadressen direkt zum BTS.',
        },
        {
          label: 'Flughafen Wien → Flughafen Bratislava',
          description: 'Privater Flughafen-zu-Flughafen-Transfer für Reisende mit Anschluss zwischen VIE und BTS, für einen Weiterflug oder Weitertransport.',
        },
        {
          label: 'Flughafen Bratislava → Wien',
          description: 'BTS-Ankünfte mit direkter Weiterfahrt zu einer Wiener Hotel-, Wohn- oder Geschäftsadresse.',
        },
      ],
    },
    extraRoutes: [
      {
        label: 'Wien → Bratislava',
        description: 'Privater Stadt-zu-Stadt-Chauffeurtransfer.',
        href: '/de/routes/vienna-to-bratislava',
      },
      {
        label: 'Flughafen Wien → Bratislava',
        description: 'Direkte Flughafenabholung und Ablieferung an Hotel oder Wohnadresse.',
        href: '/de/routes/vienna-airport-to-bratislava',
      },
      {
        label: 'Bratislava → Wien / Flughafen Wien',
        description: 'Rückfahrt zu jeder Wiener Adresse oder direkt zu Ihrem Abflug.',
      },
      {
        label: 'Andere österreichische Orte',
        description: 'Individuelle grenzüberschreitende Abholung von anderswo in Österreich — geben Sie Ihre Adresse bei der Buchung an.',
      },
    ],
    whyChauffeur: [
      {
        title: 'Tür-zu-Tür-Service',
        description: 'Ihr Chauffeur holt Sie an Ihrem Hotel, Ihrer Wohnadresse, am Flughafen oder Ihrer Geschäftsadresse ab und fährt Sie direkt nach Bratislava.',
      },
      {
        title: 'Festpreise',
        description: 'Ihr Transferpreis wird vor der Fahrt per E-Mail bestätigt — kein Taxameter, keine versteckten Kosten.',
      },
      {
        title: 'Kein Fahrzeugwechsel',
        description: 'Bleiben Sie während der gesamten grenzüberschreitenden Fahrt im selben privaten Fahrzeug.',
      },
      {
        title: 'Professioneller Chauffeur',
        description: 'Ein professioneller Chauffeur, der mit der Strecke Österreich–Slowakei und grenzüberschreitenden Fahrten vertraut ist.',
      },
      {
        title: 'Privates Fahrzeug',
        description: 'Kein Sammelshuttle und keine unnötigen Zwischenstopps für andere Fahrgäste.',
      },
      {
        title: 'Flexible Abholung',
        description: 'Wählen Sie Ihre eigene Abholzeit statt einem festen Fahrplan zu folgen.',
      },
    ],
    borderInfo:
      'Ihr Chauffeur und Fahrzeug bleiben während der gesamten Fahrt über die Grenze zwischen Österreich und der Slowakei bei Ihnen — es ist kein Zwischenstopp zum Fahrzeugwechsel nötig. Österreich und die Slowakei sind beide Teil des Schengen-Raums, daher gibt es an dieser Grenze normalerweise keine routinemäßige Passkontrolle, allerdings können gelegentlich vorübergehende Grenzkontrollen eingeführt werden, insbesondere an Feiertagen. Wir empfehlen trotzdem, einen gültigen Lichtbildausweis mitzuführen.',
    returnInfo:
      'Einfache Fahrten und Hin- und Rückfahrten sind zwischen Bratislava, Wien und dem Flughafen Wien buchbar — ein Rückflug ab dem Flughafen Wien kann genauso gebucht werden wie die Hinfahrt.',
    businessSection: {
      heading: 'Geschäftsreisen zwischen Wien & Bratislava',
      description:
        'Die kurze Entfernung Bratislavas von Wien macht es zu einem praktischen Ziel für Geschäftsreisen am selben Tag — Kundentermine, Konferenzen oder eine Rückfahrt ohne Flugbuchung. Geben Sie bei der Anfrage Ihre Reiseroute und bevorzugte Zeitplanung an, und wir bestätigen einen Festpreis für die Hin- und Rückfahrt.',
    },
    dayTripSection: {
      heading: 'Tagesausflüge von Wien nach Bratislava',
      description:
        'Da die Fahrt relativ kurz ist, lässt sich Bratislava als Halbtages- oder Tagesausflug ab Wien besuchen. Ein privater Chauffeur ermöglicht es Ihnen, Ihre eigene Abfahrts- und Rückkehrzeit zu wählen, ohne separate Bahnhofstransfers oder Parkplatzsuche.',
      linkHref: '/de/blog/vienna-to-bratislava-guide',
      linkLabel: 'Unseren Wien-Bratislava-Guide lesen →',
    },
    faqs: [
      {
        question: 'Wie lange dauert ein privater Transfer von Wien nach Bratislava?',
        answer: 'Rund eine Stunde Tür zu Tür über die Autobahnen A4 und A6 — Verkehr rund um Wien oder an der Grenze kann die Fahrzeit verlängern.',
      },
      {
        question: 'Wie weit ist Wien von Bratislava entfernt?',
        answer:
          'Die Straßenentfernung hängt von Ihrem genauen Abhol- und Zielort ab, aber das Wiener Zentrum und Bratislava liegen etwa 55–80 km auseinander. Die Fahrt dauert normalerweise rund 50–70 Minuten.',
      },
      {
        question: 'Kann ich einen Transfer vom Flughafen Wien nach Bratislava buchen?',
        answer: 'Ja — rund 45 Minuten, Ihr Chauffeur empfängt Sie in der Ankunftshalle und fährt Sie direkt zu Ihrer Adresse in Bratislava.',
      },
      {
        question: 'Muss ich an der Grenze zwischen Österreich und der Slowakei das Fahrzeug wechseln?',
        answer: 'Nein — Ihr Chauffeur und Fahrzeug bleiben die ganze Fahrt über bei Ihnen. Beide Länder sind Schengen-Mitglieder, daher gibt es normalerweise keinen routinemäßigen Passkontrollstopp.',
      },
      {
        question: 'Können Sie mich auch anderswo als in Wien abholen?',
        answer: 'Ja — geben Sie bei der Buchung Ihre genaue Abholadresse an, auch andere österreichische Städte, und wir bestätigen, ob die Strecke gefahren werden kann.',
      },
      {
        question: 'Kann ich einen Rücktransfer von Bratislava nach Wien oder zum Flughafen Wien buchen?',
        answer: 'Ja — einfache Fahrten und Hin- und Rückfahrten sind beide buchbar.',
      },
      {
        question: 'Kann ich einen Transfer für eine Familie oder Gruppe buchen?',
        answer: 'Ja — der Executive Van (bis zu 7) und der Kleinbus (bis zu 16) eignen sich für größere Gruppen und mehr Gepäck, Kindersitze sind auf Anfrage ohne Aufpreis verfügbar.',
      },
      {
        question: 'Ist der Preis fix?',
        answer: 'Ja — wir bestätigen einen Festpreis per E-Mail vor Ihrer Fahrt, basierend auf Abholort, Ziel, Fahrzeug und Personenzahl.',
      },
      {
        question: 'Kann ich einen Transfer am selben Tag buchen?',
        answer: 'Anfragen am selben Tag sind möglich, abhängig von Fahrer- und Fahrzeugverfügbarkeit. In verkehrsreichen Zeiten empfehlen wir eine frühzeitigere Buchung.',
      },
    ],
  },
  {
    slug: 'budapest',
    city: 'Budapest',
    countrySlug: 'hungary',
    country: 'Ungarn',
    via: 'über Wien',
    popularRoutes: ['Wien → Budapest', 'Flughafen Wien → Budapest'],
  },
  {
    slug: 'sopron',
    city: 'Sopron',
    countrySlug: 'hungary',
    country: 'Ungarn',
    via: 'über Eisenstadt / Wiener Neustadt',
    popularRoutes: ['Eisenstadt → Sopron', 'Wiener Neustadt → Sopron'],
  },
  {
    slug: 'ljubljana',
    city: 'Ljubljana',
    countrySlug: 'slovenia',
    country: 'Slowenien',
    via: 'über Graz oder Klagenfurt',
    popularRoutes: ['Graz → Ljubljana', 'Klagenfurt → Ljubljana', 'Villach → Ljubljana'],
  },
  {
    slug: 'maribor',
    city: 'Maribor',
    countrySlug: 'slovenia',
    country: 'Slowenien',
    via: 'über Graz',
    popularRoutes: ['Graz → Maribor'],
  },
  {
    slug: 'venice',
    city: 'Venedig',
    countrySlug: 'italy',
    country: 'Italien',
    via: 'über Innsbruck / Brennerpass',
    popularRoutes: ['Innsbruck → Venedig', 'Villach → Venedig'],
  },
  {
    slug: 'bolzano',
    city: 'Bozen',
    countrySlug: 'italy',
    country: 'Italien',
    via: 'über den Brennerpass',
    popularRoutes: ['Innsbruck → Bozen'],
  },
  {
    slug: 'milan',
    city: 'Mailand',
    countrySlug: 'italy',
    country: 'Italien',
    via: 'über Brennerpass / A22',
    popularRoutes: ['Innsbruck → Mailand'],
  },
  {
    slug: 'zurich',
    city: 'Zürich',
    countrySlug: 'switzerland-liechtenstein',
    country: 'Schweiz',
    via: 'über Bregenz',
    popularRoutes: ['Bregenz → Zürich'],
  },
  {
    slug: 'st-gallen',
    city: 'St. Gallen',
    countrySlug: 'switzerland-liechtenstein',
    country: 'Schweiz',
    via: 'über Bregenz',
    popularRoutes: ['Bregenz → St. Gallen'],
  },
  {
    slug: 'vaduz',
    city: 'Vaduz',
    countrySlug: 'switzerland-liechtenstein',
    country: 'Liechtenstein',
    via: 'über Bregenz',
    popularRoutes: ['Bregenz → Vaduz'],
  },
]
