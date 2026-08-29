export type Airport = {
  slug: string
  name: string
  code: string
  city: string
  region: string
  distanceFromCity: string
  popularRoutes: string[]
  note?: string
  crossBorder?: boolean
  intro?: string[]
  useCases?: { title: string; description: string }[]
  faqs?: { question: string; answer: string }[]
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
    intro: [
      'Der Flughafen Wien-Schwechat (VIE) ist Österreichs wichtigstes internationales Tor und unser Hauptsitz — deshalb ist es der Flughafen, an dem wir die meisten Abholungen durchführen, egal ob Lang-, Europa- oder Regionalstrecke, unabhängig vom Terminal nach demselben Ablauf.',
      'Die meisten Buchungen sind ein direkter Transfer ins Wiener Zentrum, aber der Flughafen verbindet auch direkt weiter — nach Salzburg, in andere österreichische Städte und über die Grenze nach Bratislava oder Budapest, ohne das Fahrzeug zu wechseln.',
    ],
    useCases: [
      {
        title: 'Hotel oder Privatadresse in Wien',
        description: 'Direkte Ablieferung an jedem Hotel, jeder Wohnadresse oder Geschäftsadresse in der Stadt — kein Bahnhof oder Taxistand dazwischen.',
      },
      {
        title: 'Geschäfts- und Firmenreisen',
        description: 'Festpreis-Transfers für Führungskräfte und kundenorientierte Termine, mit Firmenkonten für Unternehmen, die regelmäßig reisen.',
      },
      {
        title: 'Weiterfahrt in eine andere österreichische Stadt',
        description: 'Direkte Weiterfahrt nach Salzburg, Graz, Linz oder anderswo in Österreich im selben Fahrzeug, statt die Flughafenstrecke separat zu buchen.',
      },
      {
        title: 'Grenzüberschreitend in die Slowakei oder nach Ungarn',
        description: 'Eine direkte Verbindung nach Bratislava (etwa 45 Minuten) oder Budapest, ohne Fahrzeugwechsel an der Grenze.',
      },
    ],
    faqs: [
      {
        question: 'Wo trifft mich der Chauffeur am Flughafen Wien?',
        answer: 'In der Ankunftshalle, mit einem Namensschild — derselbe Ablauf unabhängig von Terminal oder Fluggesellschaft.',
      },
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Wien ins Stadtzentrum?',
        answer: 'Bei normalem Verkehr etwa 20–30 Minuten für die rund 18 km lange Fahrt ins Wiener Zentrum.',
      },
      {
        question: 'Was passiert, wenn mein Flug Verspätung hat oder früher landet?',
        answer: 'Wir verfolgen Ihren Flug und passen die Abholzeit bei Verspätung oder frühzeitiger Landung an — Sie müssen nicht neu buchen, nur weil sich Ihr Flugplan ändert.',
      },
      {
        question: 'Kann ich einen Transfer vom Flughafen Wien direkt nach Bratislava oder Budapest buchen?',
        answer: 'Ja — beides sind direkte Transfers in einem Fahrzeug ohne Grenzstopp: etwa 45 Minuten nach Bratislava und rund 2 Stunden 15 Minuten nach Budapest.',
      },
      {
        question: 'Kann ich einen Rücktransfer von der Stadt zum Flughafen Wien buchen?',
        answer: 'Ja — einfache Fahrten und Hin- und Rückfahrten sind beide buchbar; geben Sie einfach Ihre Abflugdaten bei der Buchung der Rückfahrt an.',
      },
      {
        question: 'Eignet sich dieser Transfer für eine Familie oder Gruppe mit Gepäck?',
        answer: 'Ja. Der Executive Van und der Kleinbus eignen sich für größere Gruppen und mehr Gepäck, und Kindersitze oder Sitzerhöhungen sind auf Anfrage ohne Aufpreis verfügbar.',
      },
    ],
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
  {
    slug: 'munich-airport',
    name: 'Flughafen München (Franz Josef Strauß)',
    code: 'MUC',
    city: 'München',
    region: 'München, Deutschland',
    distanceFromCity: '~38 km nordöstlich des Münchner Stadtzentrums, wichtigstes Langstrecken-Drehkreuz für West- und Zentralösterreich',
    popularRoutes: [
      'Flughafen München → Innsbruck',
      'Flughafen München → Salzburg',
      'Flughafen München → Kitzbühel',
      'Flughafen München → St. Anton am Arlberg',
    ],
    note: 'Wichtiges internationales Langstrecken-Drehkreuz für Transfers nach Tirol und ins Land Salzburg.',
    crossBorder: true,
  },
  {
    slug: 'zurich-airport',
    name: 'Flughafen Zürich (Kloten)',
    code: 'ZRH',
    city: 'Zürich',
    region: 'Zürich, Schweiz',
    distanceFromCity: '~13 km nördlich des Zentrums von Zürich, wichtigstes Einreise-Drehkreuz für Vorarlberg & Arlberg-Resorts',
    popularRoutes: [
      'Flughafen Zürich → Lech am Arlberg',
      'Flughafen Zürich → St. Anton am Arlberg',
      'Flughafen Zürich → Ischgl',
      'Flughafen Zürich → Bregenz',
    ],
    note: 'Wichtigstes Einreise-Tor für Luxustransfers nach Lech, Zürs und St. Anton.',
    crossBorder: true,
  },
]
