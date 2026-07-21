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
}

export type BorderArea = {
  slug: string
  country: string
  cities: string[]
  via: string
  popularRoutes: string[]
  note: string
}

export type BorderCity = {
  slug: string
  city: string
  countrySlug: string
  country: string
  via: string
  popularRoutes: string[]
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
    via: 'über die A6-Autobahn',
    popularRoutes: ['Wien → Bratislava', 'Flughafen Wien → Bratislava'],
    note: 'Unter einer Stunde vom Wiener Zentrum',
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
    via: 'über die A6-Autobahn',
    popularRoutes: ['Wien → Bratislava', 'Flughafen Wien → Bratislava'],
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
