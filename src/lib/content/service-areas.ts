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
  },
  {
    slug: 'ceske-budejovice',
    city: 'České Budějovice',
    countrySlug: 'czech-republic',
    country: 'Czech Republic',
    via: 'via Linz',
    popularRoutes: ['Linz → České Budějovice'],
  },
  {
    slug: 'bratislava',
    city: 'Bratislava',
    countrySlug: 'slovakia',
    country: 'Slovakia',
    via: 'via A6 motorway',
    popularRoutes: ['Vienna → Bratislava', 'Vienna Airport → Bratislava'],
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
