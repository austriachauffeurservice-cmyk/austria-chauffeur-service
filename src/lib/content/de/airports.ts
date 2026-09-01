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
  seoTitle?: string
  seoDescription?: string
  heroSubtitle?: string
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
  whyChooseUsPoints?: { title: string; description: string }[]
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
    seoTitle: 'Flughafen Graz Transfer | Privater Chauffeur ab GRZ',
    seoDescription:
      'Private Transfers vom Flughafen Graz (GRZ) nach Graz, Wien, Maribor und darüber hinaus. Persönlicher Empfang, Flugverfolgung und Festpreise mit Tür-zu-Tür-Chauffeurservice.',
    heroSubtitle:
      'Private Chauffeurabholung und -ablieferung am Flughafen Graz (GRZ), mit Flugverfolgung, persönlichem Empfang und vor der Fahrt bestätigten Festpreisen. Fahren Sie direkt nach Graz, Wien, Maribor oder zu einem anderen Ziel in Österreich und der Umgebung, organisiert über unser lizenziertes Partnernetzwerk.',
    dropoffHint:
      'Weiterfahrt nach Wien, Maribor oder anderswo? Geben Sie Ihr genaues Ziel an — wir bestätigen Verfügbarkeit und einen Festpreis per E-Mail.',
    quickFacts: [
      { label: 'Flughafen', value: 'Flughafen Graz (GRZ)' },
      { label: 'Stadtzentrum', value: '~10 km' },
      { label: 'Typische Fahrzeit', value: '~15–20 Min.' },
      { label: 'Service', value: 'Privater Chauffeur' },
      { label: 'Abholung', value: 'Ankunftshalle' },
      { label: 'Flugverfolgung', value: 'Inbegriffen' },
      { label: 'Preise', value: 'Festpreisangebot' },
      { label: 'Buchung', value: '24/7 Anfragen' },
    ],
    intro: [
      'Der Flughafen Graz (GRZ) bedient Österreichs zweitgrößte Stadt und die umliegende Steiermark, rund 10 km südlich der Grazer Innenstadt. Ob Sie für einen kurzen Städtetrip, einen Geschäftstermin in Graz oder auf dem Weg nach Wien oder über die Grenze nach Slowenien sind — der Transfer wird um Ihr tatsächliches Ziel herum organisiert, nicht um einen festen Shuttle-Fahrplan.',
      'Die Abholung erfolgt in der Ankunftshalle für ein Hotel, eine Privatadresse oder eine Geschäftsadresse, wobei dasselbe private Fahrzeug ohne Transportwechsel weiter nach Wien, Maribor oder zu einem anderen Ziel fährt. Sowohl einfache Fahrten als auch Rückfahrten sind buchbar.',
    ],
    pickupSteps: [
      { title: 'Flugdaten senden', description: 'Geben Sie Ihre Flugnummer, das Ankunftsdatum und die Personenanzahl bei der Anfrage an.' },
      { title: 'Wir verfolgen den Flug', description: 'Wir verfolgen Ihren Flug und passen die Abholzeit bei Verspätung oder frühzeitiger Ankunft an.' },
      { title: 'Chauffeur empfängt Sie', description: 'Ihr Chauffeur wartet in der Ankunftshalle mit einem Namensschild.' },
      { title: 'Direkter Transfer', description: 'Fahren Sie direkt zu Ihrem Ziel — keine Mitfahrgelegenheit, kein Fahrzeugwechsel.' },
    ],
    destinationSections: [
      {
        heading: 'Flughafen Graz zum Grazer Stadtzentrum',
        description:
          'Der Flughafen Graz liegt rund 10 km südlich des Stadtzentrums, je nach Verkehr typischerweise 15 bis 20 Minuten mit dem Auto. Ihr Chauffeur fährt Sie direkt zu Ihrem Hotel, Ihrer Geschäftsadresse oder Privatadresse in Graz — einschließlich des Hauptbahnhofs bei einer Weiterreise — statt zu einer festen Shuttle-Haltestelle.',
        linkHref: '/de/service-areas/graz',
        linkLabel: 'Chauffeurservice Graz →',
      },
      {
        heading: 'Flughafen Graz nach Wien',
        description:
          'Ein direkter Transfer nach Wien erspart einen Zugwechsel mit Gepäck und eignet sich für Geschäftsreisende, die direkt ab der Ankunft zu einem Termin oder Hotel in Wien müssen. Dieselbe Strecke funktioniert auch umgekehrt für eine Abholung in Wien mit Anschluss an einen Flug ab dem Flughafen Graz.',
        linkHref: '/de/routes/graz-airport-to-vienna',
        linkLabel: 'Route Flughafen Graz nach Wien →',
      },
      {
        heading: 'Flughafen Graz nach Maribor',
        description:
          'Maribor, gleich hinter der Grenze in Slowenien, ist eine etablierte grenzüberschreitende Strecke ab dem Flughafen Graz — rund 100 km und etwa 1 Stunde 15 Minuten über die A9 und A2 durch den Grenzübergang Spielfeld. Derselbe Chauffeur und dasselbe Fahrzeug begleiten Sie während der gesamten Fahrt, für Geschäfts- oder Freizeitreisen, mit Ablieferung an Hotel, Wohnadresse oder Geschäftsadresse.',
        linkHref: '/de/routes/graz-airport-to-maribor',
        linkLabel: 'Route Flughafen Graz nach Maribor →',
      },
      {
        heading: 'Weitere Ziele ab dem Flughafen Graz',
        description:
          'Über Graz, Wien und Maribor hinaus können auch Transfers nach Klagenfurt (rund 1 Stunde 30 Minuten) und zu Skidestinationen wie Schladming im Ennstal organisiert werden. Ljubljana in Slowenien ist über denselben grenzüberschreitenden Korridor wie Maribor erreichbar — siehe unseren Guide Graz nach Ljubljana weiter unten für Details zu diesem Grenzübertritt. Weitere österreichische oder grenzüberschreitende Ziele können auf Anfrage kalkuliert werden.',
        linkHref: '/de/routes/graz-airport-to-klagenfurt',
        linkLabel: 'Route Flughafen Graz nach Klagenfurt →',
      },
    ],
    businessSection: {
      heading: 'Geschäftsreisen ab dem Flughafen Graz',
      description:
        'Der Flughafen Graz ist ein praktischer Ankunftsort für Geschäftsreisen — Kundentermine, Konferenzen und mehrteilige Geschäftstage. Ein privater Transfer erspart das Anstehen nach einem Taxi mit der Laptop-Tasche in der Hand, und derselbe Chauffeur kann zwischen Terminen warten oder zu einem zweiten Termin weiterfahren. Geben Sie bei der Anfrage Ihre Reiseroute und bevorzugte Zeitplanung an.',
    },
    familyLuggageSection: {
      heading: 'Familien, Gruppen & Gepäck',
      description:
        'Personenanzahl und Gepäckkapazität sind nicht dasselbe — Reisen mit Kindern bringt Kindersitze, Sitzerhöhungen und Kinderwagen mit sich, während eine Gruppe möglicherweise mehr Platz für Gepäck als für Sitze benötigt. Geben Sie Ihre Personenanzahl, Ihr Gepäck und eventuelle Skiausrüstung bei der Anfrage an, und wir empfehlen ein passendes Fahrzeug.',
    },
    flightTrackingSection: {
      heading: 'Flugverfolgung & Verspätete Ankünfte',
      description:
        'Geben Sie Ihre Flugnummer bei der Buchung an, und wir überwachen die geplante Ankunft am Flughafen Graz. Bei Verspätung oder frühzeitiger Ankunft wird die Abholzeit entsprechend angepasst.',
    },
    meetGreetSection: {
      heading: 'Persönlicher Empfang am Flughafen Graz',
      description:
        'Ihr Chauffeur wartet in der Ankunftshalle mit einem Namensschild, bereit, beim Gepäck zu helfen und Sie zu Ihrem Fahrzeug zu begleiten. Der Ablauf ist derselbe, egal ob Sie mit einem kurzen Regionalflug oder einer längeren Verbindung ankommen.',
    },
    winterSection: {
      heading: 'Winterreise ab dem Flughafen Graz',
      description:
        'Der Flughafen Graz selbst ist selten von winterlichen Sperren betroffen, aber Straßenverhältnisse weiter in der Steiermark oder über die slowenische Grenze können bei Schneefall beeinträchtigt sein, besonders während der Hauptreisezeit. Wenn Sie zu einer Skidestination weiterfahren oder an einem verkehrsreichen Winterwochenende reisen, planen Sie etwas zusätzliche Zeit ein.',
      linkHref: '/de/ski-transfers/schladming',
      linkLabel: 'Skitransfer Schladming →',
    },
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Vorab organisierte Abholung, Festpreis und Tür-zu-Tür-Service', tradeoff: 'Höhere Kosten als eine geteilte Option' },
      { option: 'Taxi', bestFor: 'Keine Vorabbuchung nötig', tradeoff: 'Der Fahrpreis kann variieren, Verfügbarkeit abhängig vom Taxistand' },
      { option: 'Öffentliche Verkehrsmittel', bestFor: 'Preisbewusste Reisende', tradeoff: 'Kann einen Umstieg und mehr Gepäckaufwand bedeuten' },
    ],
    whyChooseUsPoints: [
      { title: 'Festpreise', description: 'Ihr Preis wird vor der Fahrt per E-Mail bestätigt — kein Taxameter, keine versteckten Kosten.' },
      { title: 'Flugverfolgung', description: 'Ihre Ankunft wird überwacht, die Abholzeit wird bei Verspätung oder früher Landung angepasst.' },
      { title: 'Persönlicher Empfang', description: 'Ihr Chauffeur wartet in der Ankunftshalle mit einem Namensschild.' },
      { title: 'Tür zu Tür', description: 'Direkt zu Ihrem Hotel, Ihrer Wohn- oder Geschäftsadresse — kein Bahnhofswechsel.' },
      { title: 'Privates Fahrzeug', description: 'Keine Mitfahrgelegenheit und keine fremden Mitfahrer.' },
      { title: 'Professioneller Chauffeur', description: 'Erfahrenes lokales und Partner-Chauffeurnetzwerk.' },
    ],
    useCases: [
      {
        title: 'Hotel oder Privatadresse in Graz',
        description: 'Direkte Ablieferung an jedem Hotel, jeder Wohn- oder Geschäftsadresse in der Stadt — kein Bahnhof oder Taxistand dazwischen.',
      },
      {
        title: 'Geschäfts- und Firmenreisen',
        description: 'Festpreis-Transfers für Führungskräfte und Kundentermine in Graz oder weiter.',
      },
      {
        title: 'Weiterfahrt nach Wien oder in eine andere österreichische Stadt',
        description: 'Direkte Weiterfahrt nach Wien oder anderswo in Österreich im selben Fahrzeug, statt die Flughafenstrecke separat zu buchen.',
      },
      {
        title: 'Grenzüberschreitend nach Maribor, Slowenien',
        description: 'Eine direkte Verbindung nach Maribor, rund 1 Stunde 15 Minuten, ohne Fahrzeugwechsel an der Grenze.',
      },
    ],
    faqs: [
      {
        question: 'Wie weit ist der Flughafen Graz vom Stadtzentrum entfernt?',
        answer: 'Der Flughafen Graz liegt etwa 10 km südlich der Grazer Innenstadt, mit einer typischen Fahrzeit von rund 15–20 Minuten je nach Verkehr und genauem Ziel.',
      },
      {
        question: 'Wie lange dauert ein Transfer ab dem Flughafen Graz?',
        answer: 'Für die Grazer Innenstadt rund 15–20 Minuten bei normalem Verkehr. Längere Fahrten hängen vom Ziel und den Straßenverhältnissen ab.',
      },
      {
        question: 'Verfolgen Sie Flüge am Flughafen Graz?',
        answer: 'Ja. Geben Sie Ihre Flugnummer bei der Buchung an, und die Ankunftszeit wird überwacht, mit einer entsprechenden Anpassung der Abholzeit bei Verspätung oder frühzeitiger Ankunft.',
      },
      {
        question: 'Wo trifft mich mein Chauffeur?',
        answer: 'Im Ankunftsbereich mit einem Namensschild — er hilft Ihnen dann beim Transfer zum Fahrzeug.',
      },
      {
        question: 'Kann ich vom Flughafen Graz nach Wien buchen?',
        answer: 'Ja, je nach Verfügbarkeit. Sie können einen direkten privaten Transfer ab GRZ zu einem Hotel, einer Wohn- oder Geschäftsadresse oder einer anderen Adresse in Wien anfragen.',
      },
      {
        question: 'Kann ich vom Flughafen Graz nach Maribor reisen?',
        answer: 'Ja. Der Transfer vom Flughafen Graz nach Maribor ist als grenzüberschreitender privater Transfer verfügbar, je nach Verfügbarkeit.',
      },
      {
        question: 'Können Familien einen Transfer ab dem Flughafen Graz buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen für größere Gruppen und zusätzliches Gepäck zur Verfügung, Kindersitze oder Sitzerhöhungen sind auf Anfrage erhältlich.',
      },
      {
        question: 'Was kostet ein Transfer ab dem Flughafen Graz?',
        answer: 'Der Preis hängt von Abholung, Ziel, Personenanzahl, Fahrzeug und Reiseanforderungen ab. Ein Festpreis wird vor der Fahrt bestätigt.',
      },
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
