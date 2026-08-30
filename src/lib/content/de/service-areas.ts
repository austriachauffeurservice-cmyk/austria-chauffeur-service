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
  faqs?: { question: string; answer: string }[]
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
    note: 'Über Linz oder Wien',
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
    intro: [
      'Die Slowakei ist das nächstgelegene grenzüberschreitende Ziel ab Wien — Bratislava liegt etwa 80 km östlich des Stadtzentrums, meist rund eine Stunde Fahrzeit über die Autobahnen A4 und A6, wobei die genaue Dauer vom Verkehr und Ihrem genauen Abholort abhängt. Ein privater Chauffeur legt die gesamte Strecke in einem einzigen Fahrzeug zurück, egal ob Sie ab einem Wiener Hotel, dem Flughafen Wien oder einer anderen österreichischen Stadt starten.',
      'Die Strecke wird für unterschiedliche Reisezwecke genutzt: Geschäftsreisende mit Terminen am selben Tag in Bratislava, Besucher, die beide Hauptstädte in einer Reise verbinden, Familien, die statt ab Wien lieber ab dem Flughafen Bratislava fliegen, und Tagesausflügler, die die Fahrt hin und zurück ohne Übernachtung machen. Die Abholung kann an einem Hotel, einer Privatadresse oder im Ankunftsbereich eines Flughafens erfolgen — die Ablieferung funktioniert am Zielort genauso.',
    ],
    serviceIntro:
      'Jede Buchung zwischen Österreich und der Slowakei ist ein direkter, privater Transfer — keine Mitfahrgelegenheit, keine festen Abfahrtszeiten und keine separate Teilstrecke auf einer der beiden Seiten der Grenze. Die Abholung ist ab Wiener Hotels und Privatadressen, ab dem Flughafen Wien (VIE) oder auf Anfrage ab anderen österreichischen Städten möglich; die Ablieferung in Bratislava funktioniert ebenso — ob Hotel, Privatadresse oder Flughafen Bratislava (BTS). Sowohl einfache Fahrten als auch Hin- und Rückfahrten sind buchbar, und Fahrzeug sowie Fahrer bleiben während der gesamten Fahrt dieselben.',
    destinationsHeading: 'Bratislava — unser Hauptziel in der Slowakei',
    destinationsIntro:
      'Bratislava ist unser Hauptziel in der Slowakei — nah genug an Wien für eine Rückfahrt am selben Tag und gut über die Autobahnen A4 und A6 angebunden. Weitere Ziele in der Slowakei prüfen wir gerne auf Anfrage.',
    borderInfo:
      'Österreich und die Slowakei sind beide Teil des Schengen-Raums, daher gibt es an der Grenze normalerweise keinen routinemäßigen Halt oder eine Passkontrolle — die Fahrt geht durchgehend weiter, ohne dass Fahrzeug oder Fahrer unterwegs gewechselt werden müssen. Gelegentlich werden vorübergehende Stichprobenkontrollen eingeführt, insbesondere an Feiertagswochenenden, daher empfehlen wir, trotzdem einen gültigen Lichtbildausweis mitzuführen. Nach der Grenze wechselt die Straßenbeschilderung von Deutsch auf Slowakisch, während die Strecke weiter nach Bratislava führt.',
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
          'Der Preis wird vor der Fahrt per E-Mail bestätigt und bleibt unabhängig von Verkehr oder kleineren Routenänderungen fix — kein grenzüberschreitender Aufschlag und kein Taxameter.',
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
        duration: '~1 Stunde',
        description:
          'Die meistgenutzte Strecke dieses Korridors: vom Wiener Zentrum nach Bratislava sind es rund 80 km auf der Straße, meist über die Autobahnen A4 und A6 durch Kittsee bis zur slowakischen Grenze — normalerweise rund eine Stunde Tür zu Tür, wobei Verkehr rund um Wien oder an der Grenze die Fahrzeit verlängern kann. Kurz genug für eine Rückfahrt am selben Tag, und eine der kürzesten Hauptstadt-zu-Hauptstadt-Fahrten Europas.',
        routeHref: '/routes/vienna-to-bratislava',
      },
      {
        heading: 'Transfer Flughafen Wien nach Bratislava',
        distance: '~65 km',
        duration: '~45 Minuten',
        description:
          'Diese Strecke funktioniert in beide Richtungen — ankommende Passagiere am Flughafen Wien, die weiter in die Slowakei reisen, und Reisende ab Bratislava, die statt eines Direktflugs ab Bratislava einen Anschlussflug ab dem Flughafen Wien nehmen. Der Fahrer verfolgt Ihren Flug und empfängt Sie im Ankunftsbereich; umgekehrt gilt dasselbe für eine Abholung in Bratislava, abgestimmt auf einen VIE-Abflug.',
        routeHref: '/routes/vienna-airport-to-bratislava',
      },
    ],
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
          'Bei normalem Verkehr rund 50–60 Minuten Tür zu Tür über die Autobahnen A4 und A6 — einer der kürzesten internationalen Transferwege ab Österreich.',
      },
      {
        question: 'Kann ich einen Transfer vom Flughafen Wien nach Bratislava buchen?',
        answer:
          'Ja — etwa 45 Minuten über die Autobahnen A4 und A6, und das funktioniert in beide Richtungen: Ankünfte am Flughafen Wien mit Ziel Slowakei oder eine Abholung in Bratislava mit Anschluss an einen Flug ab Wien.',
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
    ],
  },
  {
    slug: 'hungary',
    country: 'Ungarn',
    cities: ['Budapest', 'Sopron'],
    via: 'über Wien oder Burgenland',
    popularRoutes: ['Wien → Budapest', 'Eisenstadt → Sopron', 'Wiener Neustadt → Sopron'],
    note: 'Über Wien oder Burgenland',
  },
  {
    slug: 'slovenia',
    country: 'Slowenien',
    cities: ['Ljubljana', 'Maribor'],
    via: 'über Graz oder Klagenfurt',
    popularRoutes: ['Graz → Ljubljana', 'Klagenfurt → Ljubljana', 'Villach → Ljubljana'],
    note: 'Über Graz oder Klagenfurt',
  },
  {
    slug: 'italy',
    country: 'Italien',
    cities: ['Venedig', 'Bozen', 'Mailand'],
    via: 'über Innsbruck / Brennerpass',
    popularRoutes: ['Innsbruck → Bozen', 'Innsbruck → Venedig', 'Villach → Venedig'],
    note: 'Über Innsbruck / Brennerpass',
  },
  {
    slug: 'switzerland-liechtenstein',
    country: 'Schweiz & Liechtenstein',
    cities: ['Zürich', 'St. Gallen', 'Vaduz'],
    via: 'über Bregenz / Vorarlberg',
    popularRoutes: ['Bregenz → Zürich', 'Bregenz → St. Gallen', 'Bregenz → Vaduz'],
    note: 'Über Bregenz / Vorarlberg',
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
  },
  {
    slug: 'ceske-budejovice',
    city: 'České Budějovice',
    countrySlug: 'czech-republic',
    country: 'Tschechien',
    via: 'über Linz',
    popularRoutes: ['Linz → České Budějovice'],
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
      'Die Hauptstadt der Slowakei und unser meistgefragtes Ziel im Land — meist unter einer Stunde vom Wiener Zentrum entfernt. Die meisten Buchungen betreffen Hotels in der Altstadt, das Burgviertel oder die Uferpromenade an der Donau sowie Ankünfte und Abflüge am Flughafen Bratislava (BTS); Abholung und Ablieferung erfolgen direkt an Ihrem Aufenthaltsort. Hochzeits- und Event-Transport, Teil unseres Standardangebots, kann auch hier organisiert werden.',
    intro:
      'Private Chauffeurtransfers von Wien, dem Flughafen Wien und Zielen in ganz Österreich nach Bratislava, Slowakei. Tür-zu-Tür-Service, ein vor der Fahrt bestätigter Festpreis und kein Fahrzeugwechsel an der Grenze.',
    routeOverview: [
      { route: 'Wien → Bratislava', duration: '~50–70 Minuten' },
      { route: 'Flughafen Wien → Bratislava', duration: '~45–60 Minuten' },
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
      routeHref: '/routes/vienna-airport-to-bratislava',
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
          description: 'Verbindung zwischen den beiden Flughäfen für einen Anschlussflug oder Weitertransport.',
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
        href: '/routes/vienna-to-bratislava',
      },
      {
        label: 'Flughafen Wien → Bratislava',
        description: 'Direkte Flughafenabholung und Ablieferung an Hotel oder Wohnadresse.',
        href: '/routes/vienna-airport-to-bratislava',
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
