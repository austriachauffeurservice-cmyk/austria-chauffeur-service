export type RoutePair = {
  slug: string
  from: string
  to: string
  distance: string
  driveTime: string
  routeDescription: string
  whyBook: string[]
  crossBorder?: boolean
  seoTitle?: string
  seoDescription?: string
  routeOverview?: { road: string; transferType: string; vehicleNote: string }
  routeExplanation?: { heading: string; description: string }
  whyBookPoints?: { title: string; description: string }[]
  destinationCoverage?: { heading: string; intro: string; items: string[] }
  winterSection?: { heading: string; description: string; linkHref: string; linkLabel: string }
  luggageNote?: { heading: string; description: string }
  returnSection?: { heading: string; description: string }
  originAlternative?: { heading: string; description: string }
  originComparison?: { heading: string; options: { label: string; distance: string; driveTime: string; bestFor: string; href?: string }[] }
  transferComparison?: { option: string; bestFor: string; tradeoff: string }[]
  familySection?: { heading: string; description: string }
  groupSection?: { heading: string; description: string }
  borderSection?: { heading: string; description: string }
  flightTrackingSection?: { heading: string; description: string }
  relatedAirportRoutes?: { label: string; distance: string; duration: string; href: string }[]
  relatedRoutesHeading?: string
  // Numbered airport-pickup walkthrough (see the Sept 2026 Seefeld route audit).
  pickupSteps?: { title: string; description: string }[]
  // Short "what determines the price" explainer — answers the "why isn't
  // there a number on this page" question without publishing a rate card.
  priceNote?: { heading: string; description: string }
  faqs?: { question: string; answer: string }[]
  dropoffHint?: string
}

export const routes: RoutePair[] = [
  {
    slug: 'vienna-airport-to-salzburg',
    from: 'Flughafen Wien (VIE)',
    to: 'Salzburg',
    distance: '~300 km',
    driveTime: '~2 Std. 45 Min. – 3 Std.',
    routeDescription:
      'Die Route führt auf der A1 Westautobahn, Österreichs wichtigster Ost-West-Achse, an Linz vorbei weiter nach Salzburg.',
    whyBook: [
      'Kein Umsteigen auf Zug oder Anschlussflug für eine Ankunft am selben Tag',
      'Ein Festpreis unabhängig von Verkehr oder verspäteter Landung',
      'Direkt zu Ihrem Hotel in Salzburg oder in die Altstadt, kein Bahnhofstransfer',
    ],
  },
  {
    slug: 'vienna-airport-to-graz',
    from: 'Flughafen Wien (VIE)',
    to: 'Graz',
    distance: '~200 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription:
      'Die Route folgt der A2 Südautobahn durch Niederösterreich und die Steiermark direkt nach Graz.',
    whyBook: [
      'Eine der direkteren Flughafen-zu-Stadt-Strecken in Österreich',
      'Nützlich, wenn der Flughafen Graz (GRZ) keine passende Verbindung von Ihrem Startort bietet',
      'Festpreis inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'vienna-to-salzburg',
    from: 'Wien',
    to: 'Salzburg',
    distance: '~295 km',
    driveTime: '~2 Std. 45 Min.',
    routeDescription:
      'Eine direkte Fahrt auf der A1 Westautobahn — dieselbe Route wie zum Flughafen, jedoch ab dem Wiener Stadtzentrum.',
    whyBook: [
      'Schneller von Tür zu Tür als der Zug, sobald man Anfahrt und Abholung an den Bahnhöfen mitrechnet',
      'Platz für Gepäck, das nicht ins Zugabteil passt',
      'Abfahrt zur passenden Zeit, kein fester Fahrplan',
    ],
  },
  {
    slug: 'vienna-to-graz',
    from: 'Wien',
    to: 'Graz',
    distance: '~195 km',
    driveTime: '~2 Std.',
    routeDescription: 'Südwärts auf der A2 Südautobahn, eine der landschaftlich schönsten Autobahnstrecken Österreichs, die durch Niederösterreich in die Steiermark führt.',
    whyBook: [
      'Direkt vom Stadtzentrum zum Stadtzentrum in rund zwei Stunden',
      'Eine übliche Strecke für Geschäftsreisen zwischen Österreichs zwei größten Städten',
      'Kein Umstieg auf Regionalverkehr an beiden Enden nötig',
    ],
  },
  {
    slug: 'salzburg-to-innsbruck',
    from: 'Salzburg',
    to: 'Innsbruck',
    distance: '~140–200 km',
    driveTime: '~1 Std. 30 Min. – 2 Std. 15 Min.',
    routeDescription:
      'Die schnellste Route führt kurz über die deutsche A8 durch Bayern, bevor sie bei Kufstein wieder auf die österreichische A12 wechselt. Eine rein österreichische Alternative verläuft über die B178/A12 durch Kitzbühel und Wörgl, etwas länger, aber ohne Grenzübertritt.',
    whyBook: [
      'Wir übernehmen den deutsch-österreichischen Grenzübertritt als Teil des Festpreises — keine separate Buchung nötig',
      'Ein Fahrzeug die ganze Strecke, je nachdem welche Route an dem Tag schneller ist',
      'Beliebt, um zwei der meistbesuchten Städte Österreichs ohne Flug zu verbinden',
    ],
    crossBorder: true,
  },
  {
    slug: 'linz-to-vienna',
    from: 'Linz',
    to: 'Wien',
    distance: '~185 km',
    driveTime: '~1 Std. 45 Min. – 2 Std.',
    routeDescription: 'Ostwärts auf der A1 Westautobahn, derselben Achse wie zwischen Wien und Salzburg, streckenweise entlang des Donautals.',
    whyBook: [
      'Eine übliche Strecke für Geschäftsreisen zwischen Oberösterreich und der Hauptstadt',
      'Direkt zum Flughafen Wien als Zusatzstopp bei einem Weiterflug',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'vienna-to-bratislava',
    from: 'Wien',
    to: 'Bratislava',
    distance: '~80 km',
    driveTime: '~1 Std.',
    routeDescription:
      'Eine kurze grenzüberschreitende Hauptstadt-zu-Hauptstadt-Fahrt, über die A6-Autobahn durch Kittsee bis zur slowakischen Grenze.',
    whyBook: [
      'Schnell genug für eine Rückfahrt am selben Tag',
      'Kein Fahrzeugwechsel oder Papierkram an der Grenze — das übernehmen wir',
      'Beliebt für Geschäftstermine, Tagesausflüge und Anschlüsse an den Flughafen Wien',
    ],
    crossBorder: true,
    seoTitle: 'Wien nach Bratislava Privattransfer | 1 Stunde, Festpreis',
    seoDescription:
      'Privater Chauffeurtransfer vom Wiener Stadtzentrum nach Bratislava — 80 km, etwa eine Stunde, Festpreis, kein Grenzstopp. Ideal für Geschäftstermine, Tagesausflüge und Fahrten von Hotel zu Hotel.',
  },
  {
    slug: 'vienna-to-budapest',
    from: 'Wien',
    to: 'Budapest',
    distance: '~245 km',
    driveTime: '~2 Std. 30 Min. – 3 Std.',
    routeDescription:
      'Südöstlich über die A4-Autobahn zur ungarischen Grenze bei Hegyeshalom, weiter auf der M15/M1 nach Budapest.',
    whyBook: [
      'Direkte Alternative zu Anschlussflug oder Zugumstieg',
      'Ein lizenzierter Fahrer die gesamte Strecke, inklusive Grenzübertritt',
      'Komfortabel für Geschäftsreisen oder Wochenendtrips zwischen den beiden Hauptstädten',
    ],
    crossBorder: true,
  },
  {
    slug: 'salzburg-to-munich',
    from: 'Salzburg',
    to: 'München',
    distance: '~145 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription: 'Eine kurze grenzüberschreitende Fahrt nordwärts auf der deutschen A8 — eine häufig genutzte internationale Strecke ab Salzburg.',
    whyBook: [
      'Beliebt für Anschlüsse zum Flughafen München (MUC) für Weiterflüge',
      'Keine separate Buchung eines grenzüberschreitenden Taxis nötig',
      'Festpreis im Voraus vereinbart, unabhängig vom Grenzverkehr',
    ],
    crossBorder: true,
  },
  {
    slug: 'innsbruck-airport-to-kitzbuehel',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Kitzbühel',
    distance: '~96 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription:
      'Ostwärts über die A12 Inntalautobahn, bevor es weiter über die B170/B161 nach Kitzbühel geht — eine direkte Flughafen-zu-Resort-Fahrt durch Tirol.',
    whyBook: [
      'Fahrzeugauswahl mit Platz für Ski und Snowboards',
      'Direkt zu Ihrem Chalet oder Hotel, kein Shuttlebus-Transfer',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
    seoTitle: 'Transfer Flughafen Innsbruck nach Kitzbühel | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Innsbruck nach Kitzbühel. Tür-zu-Tür-Service, Flugüberwachung, Festpreise. ~96 km, ~1 Std. 15 Min.',
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet oder Ihre Adresse in Kitzbühel oder Kirchberg als Ziel an. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    routeOverview: {
      road: 'A12 Inntalautobahn über B170/B161',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive Van oder Kleinbus',
    },
    routeExplanation: {
      heading: 'Die Fahrt vom Flughafen Innsbruck nach Kitzbühel',
      description:
        'Vom Flughafen Innsbruck führt die Fahrt ostwärts durch das Inntal, bevor sie weiter in Richtung Kitzbühel verläuft. Die Hauptstrecke nutzt die A12 Inntalautobahn, bevor sie über die Regionalstraßen B170/B161 in den Ort führt. Unter normalen Bedingungen dauert die Fahrt etwa 1 Stunde 15 Minuten, wobei winterliches Wetter und Verkehr die Fahrzeit verlängern können.',
    },
    originAlternative: {
      heading: 'Warum der Flughafen Innsbruck ein praktisches Tor nach Kitzbühel ist',
      description:
        'Der Flughafen Innsbruck bietet eine der kürzesten Straßenverbindungen nach Kitzbühel unter allen Flughäfen, die Tirol bedienen, bei einem inländischen Transfer, der vollständig innerhalb Österreichs verläuft — ohne Grenzübertritt. Für Reisende, die ohnehin für einen umfassenderen Tirol-Skiurlaub nach Innsbruck fliegen, ist dies meist der direkteste Weg nach Kitzbühel und zu anderen Skigebieten der Region.',
    },
    whyBookPoints: [
      { title: 'Tür zu Tür', description: 'Ihr Chauffeur bringt Sie direkt vom Flughafen Innsbruck zu Ihrer Unterkunft in Kitzbühel.' },
      { title: 'Skifreundliche Fahrzeugplanung', description: 'Teilen Sie uns Ski, Snowboards und zusätzliches Gepäck bei der Buchung mit.' },
      { title: 'Kein Shuttle-Wechsel', description: 'Bleiben Sie während der gesamten Fahrt im selben privaten Fahrzeug.' },
      { title: 'Festpreis', description: 'Ihr Transferpreis wird vor der Fahrt bestätigt.' },
      { title: 'Flexible Abholung', description: 'Ihre Flughafenabholung wird auf Ihre Ankunft abgestimmt.' },
      { title: 'Rücktransfer', description: 'Buchen Sie auch Kitzbühel → Flughafen Innsbruck.' },
    ],
    flightTrackingSection: {
      heading: 'Flughafenabholung & Flugüberwachung',
      description:
        'Geben Sie bei der Buchung Ihre Flugnummer an, und wir überwachen die geplante Ankunft am Flughafen Innsbruck. Bei Verspätung oder frühzeitiger Ankunft wird die Abholzeit entsprechend angepasst.',
    },
    originComparison: {
      heading: 'Innsbruck vs. Salzburg vs. München: Welcher Flughafen für Kitzbühel?',
      options: [
        {
          label: 'Flughafen Innsbruck (INN)',
          distance: '~96 km',
          driveTime: '~1 Std. 15 Min.',
          bestFor: 'Die Standardwahl für die meisten Kitzbühel-Buchungen, ein Inlandstransfer ganz ohne Grenzübertritt',
        },
        {
          label: 'Flughafen Salzburg (SZG)',
          distance: '~75 km',
          driveTime: '~1 Std. 15 Min.',
          bestFor: 'Alternative Flugverbindungen nach Österreich',
          href: '/de/routes/salzburg-airport-to-kitzbuehel',
        },
        {
          label: 'Flughafen München (MUC)',
          distance: '~165 km',
          driveTime: '~2 Std.',
          bestFor: 'Langstrecken- und internationale Flugverbindungen',
          href: '/de/routes/munich-airport-to-kitzbuehel',
        },
      ],
    },
    destinationCoverage: {
      heading: 'Abholung an Hotel & Chalet in Kitzbühel',
      intro:
        'Ihr Ziel ist nicht zwangsläufig „Kitzbühel" selbst — auch Kirchberg und umliegende Chalets sind üblich. Geben Sie bei der Anfrage Ihre genaue Unterkunft an. Wir fahren direkt zu:',
      items: ['Hotels in Kitzbühel', 'Chalets in Kitzbühel', 'Ferienwohnungen in Kitzbühel', 'Privatadressen', 'Kirchberg (auf Anfrage)'],
    },
    luggageNote: {
      heading: 'Reisen Sie mit Ski oder Snowboard?',
      description:
        'Geben Sie bei der Anfrage Ihre Ski- und Snowboardtaschen, Skischuhe, Helme sowie eventuelle Kinderausrüstung zusätzlich zu Ihren normalen Koffern an. Personenanzahl bedeutet nicht automatisch ausreichend Gepäckkapazität — Fahrzeuge können passend zu Personenanzahl, Gepäck und Skiausrüstung ausgewählt werden.',
    },
    familySection: {
      heading: 'Familien-Skitransfer',
      description:
        'Reisen mit Kindern bringt Kindersitze, Sitzerhöhungen, Kinderwagen und Skiausrüstung zusätzlich zu den normalen Koffern mit sich. Geben Sie bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck und Ihre Skiausrüstung an, und wir stellen je nach Verfügbarkeit einen Executive Van oder Kleinbus mit ausreichend Platz bereit.',
    },
    groupSection: {
      heading: 'Gruppentransfers nach Kitzbühel',
      description:
        'Diese Strecke eignet sich auch für Skigruppen, Firmengruppen und größere Freundesgruppen. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden — geben Sie bei der Anfrage Ihre vollständige Reiseroute, Personenanzahl und Ihr Gepäck an.',
    },
    winterSection: {
      heading: 'Flughafen Innsbruck nach Kitzbühel im Winter',
      description:
        'Schneefall, vereiste Straßen und Verkehr rund um Samstags-Wechseltage, Weihnachten/Neujahr und die Februar-Ferien können diese Fahrt verlängern — auch bei frühmorgendlichen Flughafenankünften. Planen Sie bei starkem Schneefall oder verkehrsreicher Hauptsaison zusätzliche Zeit ein, statt von einer festen Fahrzeit auszugehen.',
      linkHref: '/de/blog/alpine-ski-transfer-guide',
      linkLabel: 'Unseren Alpine- & Skitransfer-Guide lesen →',
    },
    returnSection: {
      heading: 'Kitzbühel → Flughafen Innsbruck',
      description:
        'Derselbe private Service funktioniert auch für Ihre Abreise in umgekehrter Richtung. Wir holen Sie direkt von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Kitzbühel oder Kirchberg ab und bringen Sie zum Flughafen Innsbruck. Teilen Sie uns bei der Buchung Ihre Flugzeit, Ihr Gepäck und Ihre bevorzugte Abholzeit mit — planen Sie zusätzlichen Puffer für winterliche Straßenverhältnisse und den Check-in ein.',
    },
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Direkte Flughafenabholung, Hoteltransfer und Skigepäck', tradeoff: 'Höhere Kosten als öffentliche Verkehrsmittel' },
      { option: 'Öffentliche Verkehrsmittel', bestFor: 'Kostenbewusste Reisende, die Umstiege in Kauf nehmen', tradeoff: 'Zusätzliche Umstiege, mehr Gepäckaufwand und fester Fahrplan' },
    ],
    relatedRoutesHeading: 'Weitere Skitransfer-Strecken',
    relatedAirportRoutes: [
      { label: 'Flughafen Innsbruck → St. Anton am Arlberg', distance: '~100 km', duration: '~1 Std. 10 Min.', href: '/de/routes/innsbruck-airport-to-st-anton' },
      { label: 'Flughafen Innsbruck → Ischgl', distance: '~100 km', duration: '~1 Std. 15 Min.', href: '/de/routes/innsbruck-airport-to-ischgl' },
      { label: 'Flughafen Innsbruck → Sölden', distance: '~85 km', duration: '~1 Std. 10 Min.', href: '/de/routes/innsbruck-airport-to-soelden' },
      { label: 'Flughafen Salzburg → Kitzbühel', distance: '~75 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-kitzbuehel' },
    ],
    faqs: [
      {
        question: 'Wie weit ist der Flughafen Innsbruck von Kitzbühel entfernt?',
        answer: 'Die Straßenentfernung beträgt etwa 96 km.',
      },
      {
        question: 'Wie lange dauert der Transfer?',
        answer: 'Unter normalen Bedingungen etwa 1 Stunde 15 Minuten. Verkehr und winterliches Wetter können dies verlängern.',
      },
      {
        question: 'Kann ich mit Ski reisen?',
        answer: 'Ja. Teilen Sie uns Ihre Ski- oder Snowboardausrüstung bei der Buchung mit, damit wir ein geeignetes Fahrzeug einplanen können.',
      },
      {
        question: 'Können Sie mich direkt am Flughafen Innsbruck abholen?',
        answer: 'Ja. Ihr Chauffeur empfängt Sie nach der Ankunft und bringt Sie direkt zu Ihrem Fahrzeug.',
      },
      {
        question: 'Können Sie mich direkt zu meinem Hotel bringen?',
        answer: 'Ja. Wir fahren direkt zu Ihrem Hotel, Chalet, Ihrer Ferienwohnung oder Privatadresse in Kitzbühel oder Kirchberg.',
      },
      {
        question: 'Bieten Sie Rücktransfers an?',
        answer: 'Ja. Wir holen Sie von Ihrer Unterkunft in Kitzbühel oder Kirchberg ab und bringen Sie zum Flughafen Innsbruck.',
      },
      {
        question: 'Ist der Flughafen Innsbruck der nächstgelegene Flughafen zu Kitzbühel?',
        answer: 'Ja — er ist der nächstgelegene der drei für Kitzbühel am häufigsten genutzten Flughäfen: Innsbruck, Salzburg und München.',
      },
      {
        question: 'Können Familien ein größeres Fahrzeug buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und größere Gruppen zur Verfügung.',
      },
    ],
  },
  {
    slug: 'innsbruck-airport-to-skiwelt',
    from: 'Flughafen Innsbruck (INN)',
    to: 'SkiWelt Wilder Kaiser-Brixental',
    distance: '~80 km',
    driveTime: '~1 Std.',
    routeDescription:
      'Nordwärts vom Flughafen Innsbruck über die A12 Inntalautobahn, dann weiter über Regionalstraßen in die Wilder-Kaiser-Orte — Söll, Ellmau, Going, Scheffau und Westendorf sind alle über dieselbe Strecke erreichbar.',
    whyBook: [
      'Direkt zu jedem SkiWelt-Ort — kein Shuttle-Halt, kein Fahrzeugwechsel',
      'Ein Festpreis, vor der Fahrt vereinbart',
      'Winterfeste Fahrzeuge mit Platz für Ski und Snowboards',
    ],
    seoTitle: 'Transfer Flughafen Innsbruck nach SkiWelt | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Innsbruck zur SkiWelt, inklusive Söll, Ellmau, Going und Scheffau. Tür-zu-Tür-Service mit komfortablen, winterfesten Fahrzeugen.',
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet oder Ihre Adresse in Söll, Ellmau, Going, Scheffau oder Westendorf als Ziel an. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    routeOverview: {
      road: 'A12 Inntalautobahn über Regionalstraßen in die Wilder-Kaiser-Orte',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive-Van oder Kleinbus',
    },
    routeExplanation: {
      heading: 'Transfer vom Flughafen Innsbruck zur SkiWelt',
      description:
        'Die SkiWelt Wilder Kaiser-Brixental ist eines der größten liftverbundenen Skigebiete Österreichs und umfasst die Orte Söll, Ellmau, Going, Scheffau und Westendorf. Ein privater Chauffeur holt Sie am Flughafen Innsbruck ab und bringt Sie direkt zu Ihrer Unterkunft im jeweiligen Ort — kein Shuttlebus, kein Umstieg an einem zentralen Punkt, und kein zweites Fahrzeug nach der Landung nötig. Derselbe private Service gilt auch für Ihren Rücktransfer zum Flughafen.',
    },
    whyBookPoints: [
      { title: 'Tür zu Tür', description: 'Ihr Chauffeur bringt Sie direkt vom Flughafen Innsbruck zu Ihrer Unterkunft in jedem SkiWelt-Ort.' },
      { title: 'Skifreundliche Fahrzeugplanung', description: 'Teilen Sie uns Ski, Snowboards und zusätzliches Gepäck bei der Buchung mit.' },
      { title: 'Kein Shuttle-Wechsel', description: 'Bleiben Sie während der gesamten Fahrt im selben privaten Fahrzeug.' },
      { title: 'Festpreis', description: 'Ihr Transferpreis wird vor der Fahrt bestätigt.' },
      { title: 'Flexible Abholung', description: 'Ihre Flughafenabholung wird auf Ihre Ankunft abgestimmt.' },
      { title: 'Rücktransfer', description: 'Buchen Sie auch SkiWelt → Flughafen Innsbruck.' },
    ],
    flightTrackingSection: {
      heading: 'Flughafenabholung & Flugüberwachung',
      description:
        'Teilen Sie uns bei der Buchung Ihre Flugnummer mit, und wir verfolgen Ihre geplante Ankunft am Flughafen Innsbruck automatisch. Landet Ihr Flug früher oder später, passt Ihr Chauffeur die Abholzeit entsprechend an.',
    },
    destinationCoverage: {
      heading: 'Transfers zu den SkiWelt-Orten',
      intro:
        'Die SkiWelt verbindet fünf Orte unter einem einzigen Skipass, und Ihr Transfer kann direkt zu dem Ort gebucht werden, in dem Sie übernachten — nicht nur zu einem zentralen Abholpunkt:',
      items: ['Söll', 'Ellmau', 'Going', 'Scheffau', 'Westendorf'],
    },
    winterSection: {
      heading: 'Flughafen Innsbruck nach SkiWelt im Winter',
      description:
        'Schneefall, vereiste Straßen und Verkehr rund um Samstags-Wechseltage können diese Fahrt verlängern — auch bei frühmorgendlichen Flughafenankünften. Planen Sie bei starkem Schneefall oder in der Hauptsaison zusätzliche Zeit ein, statt von einer festen Fahrzeit auszugehen.',
      linkHref: '/de/ski-transfers',
      linkLabel: 'Alle Skitransfers in Österreich ansehen →',
    },
    returnSection: {
      heading: 'SkiWelt → Flughafen Innsbruck',
      description:
        'Derselbe private Service funktioniert auch für Ihre Abreise in umgekehrter Richtung. Wir holen Sie direkt von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Söll, Ellmau, Going, Scheffau oder Westendorf ab und bringen Sie zum Flughafen Innsbruck. Teilen Sie uns bei der Buchung Ihre Flugzeit und bevorzugte Abholzeit mit — planen Sie zusätzlichen Puffer für winterliche Straßenverhältnisse und den Check-in ein.',
    },
    luggageNote: {
      heading: 'Skiausrüstung & Gepäck',
      description:
        'Geben Sie bei der Anfrage Ihre Ski- und Snowboardtaschen, Skischuhe, Helme sowie zusätzliches Gepäck an. Ein Fahrzeug, das bequem Platz für Ihre Gruppe bietet, hat nicht automatisch auch Platz für die komplette Skiausrüstung — wir wählen das Fahrzeug anhand von Personenanzahl und Gepäck gemeinsam aus, nicht nur nach Personenanzahl.',
    },
    familySection: {
      heading: 'Familien-Skitransfer',
      description:
        'Reisen mit Kindern bringt Kindersitze, Kinderwagen und Skiausrüstung zusätzlich zu den normalen Koffern mit sich. Teilen Sie uns bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck und Ihre Skiausrüstung mit, und wir stellen je nach Verfügbarkeit einen Executive-Van oder Kleinbus mit ausreichend Platz bereit.',
    },
    groupSection: {
      heading: 'Gruppentransfers zur SkiWelt',
      description:
        'Diese Strecke eignet sich auch für Skiclubs, Firmengruppen und größere Gruppen, die sich ein Chalet teilen. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden — geben Sie bei der Anfrage Ihre vollständige Personenanzahl, Ihr Gepäck und den gewünschten Ort an.',
    },
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Direkte Flughafenabholung und ortsgenauer Hoteltransfer', tradeoff: 'Höhere Kosten als öffentliche Verkehrsmittel' },
      { option: 'Öffentliche Verkehrsmittel', bestFor: 'Kostenbewusste Reisende, die Umstiege in Kauf nehmen', tradeoff: 'Regionalzug plus Anschlussbus in die SkiWelt-Orte, mehr Gepäckaufwand und fester Fahrplan' },
    ],
    originAlternative: {
      heading: 'Flughafen Innsbruck nach Söll',
      description:
        'Söll ist der wichtigste Ausgangsort der SkiWelt und der häufigste Startpunkt für das gesamte Skigebiet — viele Gäste wohnen hier oder in einem der vier benachbarten Orte. Der Transfer vom Flughafen Innsbruck nach Söll verläuft über dieselbe Strecke wie für die gesamte SkiWelt, wobei Ihr Chauffeur Sie direkt zu Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Söll bringt — statt zu einem zentralen Abholpunkt im Ort.',
    },
    relatedRoutesHeading: 'Weitere Skitransfer-Strecken ab Flughafen Innsbruck',
    relatedAirportRoutes: [
      { label: 'Flughafen Innsbruck → Kitzbühel', distance: '~96 km', duration: '~1 Std. 15 Min.', href: '/de/routes/innsbruck-airport-to-kitzbuehel' },
      { label: 'Flughafen Innsbruck → Sölden', distance: '~85 km', duration: '~1 Std. 10 Min.', href: '/de/routes/innsbruck-airport-to-soelden' },
      { label: 'Flughafen Innsbruck → Seefeld in Tirol', distance: '~22–25 km', duration: '~20–25 Min.', href: '/de/routes/innsbruck-airport-to-seefeld' },
      { label: 'Flughafen Innsbruck → St. Anton am Arlberg', distance: '~100 km', duration: '~1 Std. 10 Min.', href: '/de/routes/innsbruck-airport-to-st-anton' },
    ],
    faqs: [
      {
        question: 'Wie komme ich vom Flughafen Innsbruck zur SkiWelt?',
        answer: 'Ein privater Chauffeur empfängt Sie am Flughafen Innsbruck und bringt Sie direkt zu Ihrer Unterkunft in Söll, Ellmau, Going, Scheffau oder Westendorf — ohne Shuttlebus oder Umstieg an einem zentralen Punkt.',
      },
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Innsbruck nach Söll?',
        answer: 'Unter normalen Bedingungen etwa eine Stunde. Verkehr und winterliches Wetter können dies verlängern.',
      },
      {
        question: 'Können Sie Skiausrüstung transportieren?',
        answer: 'Ja. Teilen Sie uns bei der Buchung Ihre Ski- und Snowboardtaschen, Skischuhe und Helme mit, damit wir ein Fahrzeug mit ausreichend Platz einplanen können.',
      },
      {
        question: 'Kann ich einen privaten Transfer für meine Familie buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und größere Gruppen zur Verfügung — teilen Sie uns bei der Anfrage benötigte Kindersitze mit.',
      },
      {
        question: 'Bieten Sie Rücktransfers an?',
        answer: 'Ja. Wir holen Sie von Ihrer Unterkunft in der SkiWelt ab und bringen Sie zurück zum Flughafen Innsbruck für Ihren Rückflug.',
      },
      {
        question: 'Welche SkiWelt-Orte können Sie bedienen?',
        answer: 'Söll, Ellmau, Going, Scheffau und Westendorf — Ihr Chauffeur bringt Sie direkt zu Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in jedem der fünf Orte.',
      },
    ],
  },
  {
    slug: 'innsbruck-airport-to-st-anton',
    from: 'Flughafen Innsbruck (INN)',
    to: 'St. Anton am Arlberg',
    distance: '~100 km',
    driveTime: '~1 Std. 10 Min.',
    routeDescription: 'Westlich auf der A12 Inntalautobahn und der S16 Arlberg Schnellstraße direkt nach St. Anton.',
    whyBook: [
      'Direkter privater Transfer zu Ihrem Arlberg-Chalet',
      'Geräumige Vans für Skiausrüstung und großes Gepäck',
      'Flugverfolgung und Fahrerempfang direkt in der Ankunftshalle des Flughafens Innsbruck',
    ],
  },
  {
    slug: 'innsbruck-airport-to-ischgl',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Ischgl',
    distance: '~100 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Westlich über die A12 Inntalautobahn und die B188 Silvrettastraße das Paznauntal hinauf nach Ischgl.',
    whyBook: [
      'Ruhiger Transfer durchs Paznauntal mit erfahrenen Alpenfahrern',
      'Fester, transparenter Preis ohne versteckte Bergmautzuschläge',
      'Komfortable Fahrzeuge, ausgestattet für winterliche Schneeverhältnisse',
    ],
  },
  {
    slug: 'innsbruck-airport-to-soelden',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Sölden',
    distance: '~85 km',
    driveTime: '~1 Std. 10 Min.',
    routeDescription: 'Westlich auf der A12 bis zur Ausfahrt Ötztal, dann südlich auf der B186 Ötztaler Straße nach Sölden.',
    whyBook: [
      'Direkter privater Transfer vom Flughafen Innsbruck ins Gletschergebiet Ötztal',
      'Direkt zu den Hotels in Sölden und zur „007 Elements“-Basis',
      'Alles inklusive zum Festpreis, mit Überwachung von Flugverspätungen',
    ],
  },
  {
    slug: 'innsbruck-airport-to-mayrhofen',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Mayrhofen',
    distance: '~75 km',
    driveTime: '~1 Std.',
    routeDescription: 'Östlich auf der A12 Inntalautobahn, Ausfahrt Zillertal auf die B169 direkt nach Mayrhofen.',
    whyBook: [
      'Direkter Transfer ins Zillertal, ganz ohne Zugumstieg',
      'Winterfeste Fahrzeuge für Besucher des Hintertuxer Gletschers',
      'Persönliche Abholung direkt vor der Ankunftshalle in Innsbruck',
    ],
  },
  {
    slug: 'innsbruck-airport-to-lech',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Lech am Arlberg',
    distance: '~120 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription: 'Westlich über die A12 und die S16 durch den Arlbergpass oder den Flexenpass-Tunnel nach Lech.',
    whyBook: [
      'Privater Transfer zu Hotels und Chalets am Arlberg',
      'Professionelle Chauffeure mit Erfahrung im winterlichen Passverkehr',
      'Geräumige V-Klasse- und S-Klasse-Fahrzeuge verfügbar',
    ],
  },
  {
    slug: 'salzburg-airport-to-kitzbuehel',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Kitzbühel',
    distance: '~75 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südwestlich über die Loferer Straße (B178) durch Unken und Waidring nach Kitzbühel.',
    whyBook: [
      'Beliebte Skiroute für Charterflüge am Flughafen Salzburg',
      'Komfortabler Tür-zu-Tür-Service direkt zu den Chalets in Kitzbühel',
      'Kein mühsames Schleppen schwerer Skitaschen im Regionalverkehr',
    ],
  },
  {
    slug: 'salzburg-airport-to-zell-am-see',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Zell am See',
    distance: '~80 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A10 Tauernautobahn oder die B311 Pinzgauer Straße nach Zell am See.',
    whyBook: [
      'Direkter Transfer ans Seeufer und zum Gletscherresort Kaprun',
      'Festpreis inklusive Gepäck, Skiausrüstung und Mautgebühren',
      'Rund um die Uhr verfügbar, auch für frühe Charterflug-Ankünfte',
    ],
  },
  {
    slug: 'salzburg-airport-to-saalbach',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Saalbach-Hinterglemm',
    distance: '~85 km',
    driveTime: '~1 Std. 20 Min.',
    routeDescription: 'Südwestlich über die B178 und die B311 ins Glemmtal Richtung Saalbach.',
    whyBook: [
      'Unkomplizierte Anreise ins Skicircus-Skigebiet',
      'Geräumige Kleinbusse und Mercedes V-Klasse für Gruppen und Familien',
      'Direkte Ablieferung vor Ihrer Hoteltür',
    ],
  },
  {
    slug: 'salzburg-airport-to-bad-gastein',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Bad Gastein',
    distance: '~95 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A10 Tauernautobahn und die B167 das Gasteinertal hinauf nach Bad Gastein.',
    whyBook: [
      'Landschaftlich reizvolle Fahrt direkt zu den historischen Belle-Époque-Spahotels',
      'Komfortabel für Wintersportler und Wellnessgäste im Sommer gleichermaßen',
      'Fester, transparenter Preis inklusive Überwachung von Flugverspätungen',
    ],
    seoTitle: 'Transfer Flughafen Salzburg nach Bad Gastein | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Salzburg nach Bad Gastein. Tür-zu-Tür-Service, Flugüberwachung, Festpreise. ~95 km, ~1 Std. 15 Min.',
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet oder Ihre Adresse in Bad Gastein als Ziel an. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    routeOverview: {
      road: 'A10 Tauernautobahn über die B167 Gasteinertal',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive Van oder Kleinbus',
    },
    routeExplanation: {
      heading: 'Die Fahrt vom Flughafen Salzburg nach Bad Gastein',
      description:
        'Vom Flughafen Salzburg führt die Fahrt südlich über die A10 Tauernautobahn, bevor sie über die B167 das Gasteinertal hinauf nach Bad Gastein führt — ein historischer Belle-Époque-Kurort auf einem Thermalwasserfall, steil in den Hang gebaut. Unter normalen Bedingungen dauert die Fahrt etwa 1 Stunde 15 Minuten, wobei winterliches Wetter und Talverkehr die Fahrzeit verlängern können.',
    },
    originAlternative: {
      heading: 'Warum der Flughafen Salzburg das praktische Tor nach Bad Gastein ist',
      description:
        'Der Flughafen Salzburg ist der nächstgelegene große Flughafen zu Bad Gastein und dem Gasteinertal, bei einem inländischen Transfer ganz ohne Grenzübertritt. Auch der Flughafen Innsbruck wird von manchen Reisenden genutzt, ist mit etwa 2 Stunden 15 Minuten jedoch deutlich weiter entfernt — Salzburg ist für die meisten Buchungen die direktere Option.',
    },
    whyBookPoints: [
      { title: 'Tür zu Tür', description: 'Ihr Chauffeur bringt Sie direkt vom Flughafen Salzburg zu Ihrer Unterkunft in Bad Gastein.' },
      { title: 'Kein Zugumstieg', description: 'Kein Bus zum Bahnhof, kein Umsteigen auf den Zug — reisen Sie die ganze Strecke im selben privaten Fahrzeug.' },
      { title: 'Skifreundliche Fahrzeugplanung', description: 'Teilen Sie uns Ski, Snowboards und zusätzliches Gepäck bei der Buchung mit.' },
      { title: 'Festpreis', description: 'Ihr Transferpreis wird vor der Fahrt bestätigt.' },
      { title: 'Flexible Abholung', description: 'Ihre Flughafenabholung wird auf Ihre Ankunft abgestimmt.' },
      { title: 'Rücktransfer', description: 'Buchen Sie auch Bad Gastein → Flughafen Salzburg.' },
    ],
    flightTrackingSection: {
      heading: 'Flughafenabholung & Flugüberwachung',
      description:
        'Geben Sie bei der Buchung Ihre Flugnummer an, und wir überwachen die geplante Ankunft am Flughafen Salzburg. Bei Verspätung oder frühzeitiger Ankunft wird die Abholzeit entsprechend angepasst.',
    },
    destinationCoverage: {
      heading: 'Abholung an Hotel & Chalet in Bad Gastein',
      intro:
        'Bad Gastein ist ein kompakter, steil gebauter Hangort — Ihr Hotel liegt möglicherweise nicht direkt am Bahnhof. Geben Sie bei der Anfrage Ihre genaue Unterkunft an. Wir fahren direkt zu:',
      items: ['Hotels in Bad Gastein', 'Spahotels', 'Chalets', 'Ferienwohnungen', 'Privatadressen'],
    },
    luggageNote: {
      heading: 'Reisen Sie mit Skiausrüstung oder zusätzlichem Gepäck?',
      description:
        'Bad Gastein gehört zum Skiverbund Ski Amadé, Skiausrüstung ist auf dieser Strecke im Winter also normal. Geben Sie bei der Buchung Ihre Ski- und Snowboardtaschen, Skischuhe sowie eventuelle Kinderausrüstung zusätzlich zu Ihren normalen Koffern an — ein passendes Fahrzeug kann eingeplant werden, nicht nur nach Personenzahl.',
    },
    familySection: {
      heading: 'Familientransfer',
      description:
        'Reisen mit Kindern bringt Kindersitze, Sitzerhöhungen, Kinderwagen und Skiausrüstung zusätzlich zu den normalen Koffern mit sich. Geben Sie bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck an, und wir stellen je nach Verfügbarkeit einen Executive Van oder Kleinbus mit ausreichend Platz bereit.',
    },
    groupSection: {
      heading: 'Gruppentransfers nach Bad Gastein',
      description:
        'Diese Strecke eignet sich auch für Skigruppen, Wellnessgruppen und größere Freundesgruppen, die die Thermen besuchen. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden — geben Sie bei der Anfrage Ihre vollständige Reiseroute, Personenanzahl und Ihr Gepäck an.',
    },
    winterSection: {
      heading: 'Flughafen Salzburg nach Bad Gastein im Winter',
      description:
        'Schneefall, vereiste Straßen und Verkehr rund um Samstags-Wechseltage, Weihnachten/Neujahr und die Februar-Ferien können diese Fahrt verlängern — auch bei frühmorgendlichen Flughafenankünften. Planen Sie bei starkem Schneefall oder verkehrsreicher Hauptsaison zusätzliche Zeit ein, statt von einer festen Fahrzeit von 1 Std. 15 Min. auszugehen.',
      linkHref: '/de/blog/salzburg-airport-to-bad-gastein-transfer-guide',
      linkLabel: 'Unseren vollständigen Bad-Gastein-Transferguide lesen →',
    },
    returnSection: {
      heading: 'Bad Gastein → Flughafen Salzburg',
      description:
        'Derselbe private Service funktioniert auch für Ihre Abreise in umgekehrter Richtung. Wir holen Sie direkt von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Bad Gastein ab und bringen Sie zum Flughafen Salzburg. Teilen Sie uns bei der Buchung Ihre Flugzeit, Ihr Gepäck und Ihre bevorzugte Abholzeit mit — planen Sie zusätzlichen Puffer für winterliche Straßenverhältnisse und den Check-in ein.',
    },
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Direkte Flughafenabholung, Hoteltransfer und Skigepäck', tradeoff: 'Höhere Kosten als öffentliche Verkehrsmittel' },
      { option: 'Zug + Umstieg', bestFor: 'Kostenbewusste Reisende, die einen Flughafenbus und einen Bahnhofswechsel in Kauf nehmen', tradeoff: 'Längere Gesamtreise, mehr Gepäckaufwand und fester Fahrplan' },
    ],
    relatedRoutesHeading: 'Weitere Ski- & Wellness-Transferstrecken',
    relatedAirportRoutes: [
      { label: 'Flughafen Salzburg → Schladming', distance: '~90 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-schladming' },
      { label: 'Flughafen Salzburg → Obertauern', distance: '~90 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-obertauern' },
      { label: 'Flughafen Salzburg → Zell am See', distance: '~80 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-zell-am-see' },
    ],
    faqs: [
      {
        question: 'Wie weit ist Bad Gastein vom Flughafen Salzburg entfernt?',
        answer: 'Die Straßenentfernung beträgt etwa 95 km über die A10 Tauernautobahn und die B167 das Gasteinertal hinauf.',
      },
      {
        question: 'Wie lange dauert der Transfer?',
        answer: 'Unter normalen Bedingungen rund 1 Stunde 15 Minuten, bei winterlichem Verkehr oder starkem Schneefall bis zu 1 Stunde 30 Minuten.',
      },
      {
        question: 'Kann ich mit Ski reisen?',
        answer: 'Ja. Teilen Sie uns Ihre Ski- oder Snowboardausrüstung bei der Buchung mit, damit wir ein geeignetes Fahrzeug einplanen können.',
      },
      {
        question: 'Können Sie mich direkt zu meinem Hotel bringen?',
        answer: 'Ja. Wir fahren direkt zu Ihrem Hotel, Spahotel, Chalet, Ihrer Ferienwohnung oder Privatadresse in Bad Gastein.',
      },
      {
        question: 'Bieten Sie Rücktransfers an?',
        answer: 'Ja. Wir holen Sie von Ihrer Unterkunft in Bad Gastein ab und bringen Sie zum Flughafen Salzburg.',
      },
      {
        question: 'Können Familien ein größeres Fahrzeug buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und größere Gruppen zur Verfügung.',
      },
    ],
  },
  {
    slug: 'salzburg-airport-to-filzmoos',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Filzmoos',
    distance: '~75 km',
    driveTime: '~50 Min.',
    routeDescription: 'Südlich über die A10 Tauernautobahn, Ausfahrt Eben im Pongau, dann rund 11 km weiter ins Ennstal nach Filzmoos.',
    whyBook: [
      'Direkt zu Hotels und Chalets in Filzmoos, ohne Regionalzug oder Ortsbus',
      'Platz für Ski, Snowboards und Gepäck ohne den Aufwand öffentlicher Verkehrsmittel',
      'Festpreis vor Fahrtantritt vereinbart, inklusive Überwachung von Flugverspätungen',
    ],
    seoTitle: 'Flughafen Salzburg nach Filzmoos Transfer | Festpreis',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Salzburg nach Filzmoos — etwa 75 km, 50 Min., Festpreis, winterfeste Fahrzeuge mit Platz für Ski und Snowboards.',
  },
  {
    slug: 'munich-airport-to-innsbruck',
    from: 'Flughafen München (MUC)',
    to: 'Innsbruck',
    distance: '~160 km',
    driveTime: '~2 Std.',
    routeDescription: 'Südlich über die deutschen Autobahnen A9 und A8, Grenzübertritt nach Österreich über die A93/A12 Inntalautobahn nach Innsbruck.',
    whyBook: [
      'Nahtloser grenzüberschreitender Transfer vom größten Langstrecken-Drehkreuz Deutschlands',
      'Kein Umstieg mit schwerem Gepäck am Münchner Hauptbahnhof',
      'Lizenzierte grenzüberschreitende Chauffeure zum Festpreis',
    ],
    crossBorder: true,
  },
  {
    slug: 'munich-airport-to-salzburg',
    from: 'Flughafen München (MUC)',
    to: 'Salzburg',
    distance: '~170 km',
    driveTime: '~1 Std. 45 Min.',
    routeDescription: 'Östlich über die deutschen Autobahnen A92 und A8, Grenzübertritt bei Walserberg direkt nach Salzburg.',
    whyBook: [
      'Direkte Verbindung zwischen Langstreckenflügen ab München und der Salzburger Altstadt',
      'Keine Verspätungen der Deutschen Bahn oder Rückgabegebühren für Mietwagen',
      'Professioneller Empfangsservice in Terminal 1 oder 2 des Flughafens München',
    ],
    crossBorder: true,
  },
  {
    slug: 'munich-airport-to-kitzbuehel',
    from: 'Flughafen München (MUC)',
    to: 'Kitzbühel',
    distance: '~165 km',
    driveTime: '~2 Std.',
    routeDescription: 'Südlich über die A8 Richtung Inntaldreieck, weiter über die A93/B173 durch Kufstein nach Kitzbühel.',
    whyBook: [
      'Direkte Option für internationale Langstreckenreisende nach Kitzbühel',
      'Fahrzeuge, ausgestattet für winterliche Verhältnisse zwischen Bayern und Tirol',
      'Ein Fahrzeug und ein Fahrer Tür zu Tür, ohne Verzögerungen an der Grenze',
    ],
    crossBorder: true,
  },
  {
    slug: 'munich-airport-to-st-anton',
    from: 'Flughafen München (MUC)',
    to: 'St. Anton am Arlberg',
    distance: '~240 km',
    driveTime: '~2 Std. 45 Min.',
    routeDescription: 'Südlich über die A95 oder A8/A12 durch das Inntal zum Arlberg.',
    whyBook: [
      'Direkter Transfer für internationale Gäste ab München',
      'Geräumige V-Klasse-Fahrzeuge für Skigepäck',
      'Alle Grenzvignetten und Mautgebühren im Festpreis inbegriffen',
    ],
    crossBorder: true,
  },
  {
    slug: 'zurich-airport-to-lech',
    from: 'Flughafen Zürich (ZRH)',
    to: 'Lech am Arlberg',
    distance: '~195 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription: 'Östlich über die Schweizer Autobahnen A1/A3, vorbei am Walensee, Grenzübertritt bei Feldkirch nach Lech.',
    whyBook: [
      'Ein privater grenzüberschreitender Transfer von Zürich zu den Arlberg-Resorts',
      'Als durchgehende grenzüberschreitende Buchung organisiert, inklusive Grenzübertritt',
      'Privater Tür-zu-Tür-Service ohne weitere Mitfahrer',
    ],
    crossBorder: true,
  },
  {
    slug: 'zurich-airport-to-st-anton',
    from: 'Flughafen Zürich (ZRH)',
    to: 'St. Anton am Arlberg',
    distance: '~200 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription: 'Östlich durch die Schweiz über die A3/A13, Einreise nach Vorarlberg/Tirol über den Arlbergpass oder -tunnel.',
    whyBook: [
      'Bevorzugte Route für internationale Ankünfte über Zürich-Kloten',
      'Geräumige Mercedes-Vans für Familien und Skiausrüstung',
      'Fester grenzüberschreitender Preis ohne versteckte Kosten',
    ],
    crossBorder: true,
  },
  {
    slug: 'vienna-airport-to-bratislava',
    from: 'Flughafen Wien (VIE)',
    to: 'Bratislava',
    distance: '~65 km',
    driveTime: 'typischerweise ~45–60 Min.',
    routeDescription:
      'Über die Autobahnen A4 und A6 durch Kittsee, mit direktem Service zwischen dem Flughafen Wien und Bratislava in beide Richtungen.',
    whyBook: [
      'Ein kurzer, direkter Flughafentransfer nach Bratislava',
      'Deckt beide Richtungen ab — Ankünfte am Flughafen Wien mit Ziel Slowakei und Abfahrten aus Bratislava zu einem Flug ab Wien',
      'Schnell, direkt und zum Festpreis, Tür zu Tür',
      'Gruppentransfers möglich — Executive Van (bis zu 7) oder Kleinbus (bis zu 16) für Familien, Kollegen oder größere Gruppen, je nach Fahrzeugverfügbarkeit',
    ],
    crossBorder: true,
    seoTitle: 'Flughafen Wien nach Bratislava Transfer | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Wien (VIE) nach Bratislava. Tür-zu-Tür-Service, Flugverfolgung, Festpreise und direkte grenzüberschreitende Fahrt.',
    dropoffHint: 'Ihr Ziel ist Bratislava. Geben Sie Ihr genaues Hotel, Ihre Wohnadresse oder Geschäftsadresse im Feld Zielort an.',
    routeOverview: {
      road: 'A4 / A6 über Kittsee',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive Van oder Kleinbus',
    },
    whyBookPoints: [
      {
        title: 'Persönlicher Empfang in der Ankunftshalle',
        description: 'Ihr Chauffeur empfängt Sie in der Ankunftshalle mit Ihrem Namensschild.',
      },
      {
        title: 'Flugverfolgung',
        description: 'Geben Sie Ihre Flugnummer an, und wir beobachten die Ankunftszeit.',
      },
      {
        title: 'Direkter Tür-zu-Tür-Transfer',
        description: 'Reisen Sie direkt vom Flughafen Wien zu Ihrem Hotel, Ihrer Wohnadresse oder Geschäftsadresse in Bratislava.',
      },
      {
        title: 'Kein Fahrzeugwechsel an der Grenze',
        description: 'Bleiben Sie während der gesamten Fahrt im selben privaten Fahrzeug.',
      },
      {
        title: 'Festpreis',
        description: 'Ihr Transferpreis wird vor der Fahrt bestätigt.',
      },
      {
        title: 'Gruppen & zusätzliches Gepäck',
        description: 'Executive Vans und Kleinbusse stehen für größere Gruppen zur Verfügung, je nach Fahrzeugverfügbarkeit.',
      },
    ],
    destinationCoverage: {
      heading: 'Wo können wir Sie in Bratislava absetzen?',
      intro:
        'Ob Sie in der Altstadt von Bratislava, in der Nähe der Burg, in einem Hotel im Stadtzentrum oder an einer Privatadresse wohnen — Ihr Chauffeur bringt Sie direkt zum bei der Buchung angegebenen Ziel. Wir fahren auch zu:',
      items: [
        'Bratislavas Altstadt',
        'Hotels im Stadtzentrum',
        'Umgebung der Burg Bratislava',
        'Geschäftsadressen',
        'Privatadressen',
        'Flughafen Bratislava (BTS)',
        'Bahnhof',
      ],
    },
    flightTrackingSection: {
      heading: 'Flugverfolgung für Abholungen am Flughafen Wien',
      description:
        'Geben Sie bei der Buchung Ihre Flugnummer an, und wir beobachten die geplante Ankunft. Bei Verspätung oder früher Ankunft kann die Abholzeit entsprechend angepasst werden.',
    },
    returnSection: {
      heading: 'Bratislava zum Flughafen Wien',
      description:
        'Fliegen Sie nach einem Aufenthalt in Bratislava ab dem Flughafen Wien? Ihr Chauffeur holt Sie direkt an Ihrem Hotel, Ihrer Wohnadresse oder Geschäftsadresse ab und bringt Sie zum VIE für Ihren Flug. Planen Sie bei der Wahl Ihrer Abholzeit zusätzliche Zeit für Check-in und saisonalen Verkehr ein.',
    },
    borderSection: {
      heading: 'Grenzübertritt von Österreich in die Slowakei',
      description:
        'Die Strecke vom Flughafen Wien nach Bratislava überquert die österreichisch-slowakische Grenze bei Kittsee. Österreich und die Slowakei sind beide Teil des Schengen-Raums, daher gibt es normalerweise keinen routinemäßigen Grenzstopp. Vorübergehende Kontrollen können jedoch eingeführt werden, daher sollten Passagiere einen gültigen Lichtbildausweis mitführen. Ihr Chauffeur und Fahrzeug bleiben während der gesamten Fahrt bei Ihnen.',
    },
    luggageNote: {
      heading: 'Reisen Sie mit zusätzlichem Gepäck?',
      description:
        'Teilen Sie uns mit, wenn Sie mit großen Koffern, Sportausrüstung, einem Kinderwagen oder anderen sperrigen Gegenständen reisen, damit wir ein passendes Fahrzeug einplanen können. Executive Vans und Kleinbusse stehen für größere Gruppen zur Verfügung, je nach Fahrzeugverfügbarkeit.',
    },
    relatedAirportRoutes: [
      { label: 'Flughafen Wien → Salzburg', distance: '~300 km', duration: '~2 Std. 45 Min. – 3 Std.', href: '/de/routes/vienna-airport-to-salzburg' },
      { label: 'Flughafen Wien → Graz', distance: '~200 km', duration: '~2 Std. 15 Min.', href: '/de/routes/vienna-airport-to-graz' },
      { label: 'Flughafen Wien → Budapest', distance: '~230 km', duration: '~2 Std. 15 Min.', href: '/de/routes/vienna-airport-to-budapest' },
      { label: 'Wien → Bratislava', distance: '~80 km', duration: '~1 Std.', href: '/de/routes/vienna-to-bratislava' },
    ],
    faqs: [
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Wien nach Bratislava?',
        answer: 'Die Fahrt dauert typischerweise etwa 45–60 Minuten, abhängig von Verkehr, Wetter und Ihrem genauen Ziel in Bratislava.',
      },
      {
        question: 'Wie weit ist der Flughafen Wien von Bratislava entfernt?',
        answer: 'Die Straßenentfernung beträgt etwa 65 km, abhängig vom genauen Zielort.',
      },
      {
        question: 'Verfolgen Sie meinen Flug?',
        answer: 'Ja. Geben Sie bei der Buchung Ihre Flugnummer an, und wir beobachten die geplante Ankunft, sodass die Abholzeit bei Flugänderungen angepasst werden kann.',
      },
      {
        question: 'Wo trifft mich mein Chauffeur am Flughafen Wien?',
        answer: 'Ihr Chauffeur empfängt Sie in der Ankunftshalle mit einem Namensschild und bringt Sie direkt zu Ihrem Fahrzeug.',
      },
      {
        question: 'Muss ich an der Grenze das Fahrzeug wechseln?',
        answer: 'Nein. Derselbe Chauffeur und dasselbe private Fahrzeug bleiben während des gesamten Transfers bei Ihnen.',
      },
      {
        question: 'Kann ich Bratislava zum Flughafen Wien buchen?',
        answer: 'Ja. Transfers sind in beide Richtungen verfügbar, einschließlich Abholungen an Hotels, Wohn- und Geschäftsadressen in Bratislava.',
      },
      {
        question: 'Kann ich mit einer Gruppe oder zusätzlichem Gepäck reisen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen für größere Gruppen und zusätzliches Gepäck zur Verfügung, je nach Fahrzeugverfügbarkeit.',
      },
    ],
  },
  {
    slug: 'vienna-airport-to-budapest',
    from: 'Flughafen Wien (VIE)',
    to: 'Budapest',
    distance: '~230 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription: 'Südöstlich über die A4-Autobahn und die ungarische Autobahn M1 direkt nach Budapest.',
    whyBook: [
      'Stark nachgefragter Langstreckentransfer vom Flughafen direkt in die Hauptstadt',
      'Kein Umsteigen am Flughafen oder Bahnhofstransfer nötig',
      'Professioneller, zweisprachiger Fahrer mit Erfahrung auf internationalen Strecken',
    ],
    crossBorder: true,
  },
  {
    slug: 'vienna-airport-to-hallstatt',
    from: 'Flughafen Wien (VIE)',
    to: 'Hallstatt',
    distance: '~300 km',
    driveTime: '~3 Std. 15 Min.',
    routeDescription: 'Westlich auf der A1 Westautobahn bis zur Ausfahrt Regau, weiter über Gmunden und Bad Ischl nach Hallstatt.',
    whyBook: [
      'Direkter Transfer vom Flughafen Wien zum UNESCO-Welterbeort Hallstatt',
      'Kein umständliches Umsteigen zwischen Zug und Fähre mit Gepäck',
      'Optionale landschaftliche Zwischenstopps im Salzkammergut',
    ],
  },
  {
    slug: 'salzburg-to-hallstatt',
    from: 'Salzburg',
    to: 'Hallstatt',
    distance: '~75 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Östlich über die Wolfgangsee-Straße (B158) durch Fuschl und St. Gilgen, dann auf der B145 nach Hallstatt.',
    whyBook: [
      'Eine beliebte Tagesausflugsroute ab Salzburg',
      'Landschaftlich beeindruckende Fahrt vorbei am Fuschlsee und Wolfgangsee',
      'Flexible Abfahrtszeiten, abgestimmt auf Ihren Reiseplan',
    ],
  },
  {
    slug: 'salzburg-airport-to-schladming',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Schladming',
    distance: '~90 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A10 Tauernautobahn und die B320 Ennstal Straße direkt nach Schladming.',
    whyBook: [
      'Direkte Anbindung an die Planai und das Ski-Amadé-4-Berge-Skigebiet',
      'Festpreis inklusive Tauernautobahn-Mautgebühren',
      'Direkte Ablieferung am Hotel, ohne Skiausrüstung im Zug zu transportieren',
    ],
    seoTitle: 'Transfer Flughafen Salzburg nach Schladming | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Salzburg nach Schladming. Tür-zu-Tür-Service, Flugüberwachung, Festpreise. ~90 km, ~1 Std. 15 Min.',
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet oder Ihre Adresse in Schladming als Ziel an. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    routeOverview: {
      road: 'A10 Tauernautobahn über die B320 Ennstal Straße',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive Van oder Kleinbus',
    },
    routeExplanation: {
      heading: 'Die Fahrt vom Flughafen Salzburg nach Schladming',
      description:
        'Vom Flughafen Salzburg führt die Fahrt südlich über die A10 Tauernautobahn, bevor sie über die B320 Ennstal Straße direkt nach Schladming führt — eine lebendige Marktgemeinde am Fuß der Planai-Weltcup-Abfahrt, mit drei benachbarten Bergen im Skiverbund Ski Amadé. Unter normalen Bedingungen dauert die Fahrt etwa 1 Stunde 15 Minuten, wobei winterliches Wetter und Wechseltag-Verkehr die Fahrzeit verlängern können.',
    },
    originAlternative: {
      heading: 'Warum der Flughafen Salzburg das praktische Tor nach Schladming ist',
      description:
        'Der Flughafen Salzburg ist der nächstgelegene große Flughafen zu Schladming, bei einem inländischen Transfer ganz ohne Grenzübertritt. Der Flughafen Graz bietet eine ähnliche Fahrzeit, während der Flughafen Innsbruck mit etwa 2 Stunden 15 Minuten deutlich weiter entfernt ist — Salzburg ist für die meisten Buchungen die kürzeste, direkteste Option.',
    },
    whyBookPoints: [
      { title: 'Tür zu Tür', description: 'Ihr Chauffeur bringt Sie direkt vom Flughafen Salzburg zu Ihrer Unterkunft in Schladming.' },
      { title: 'Kein Zugumstieg', description: 'Kein Regionalzug, kein Ortsbus — reisen Sie die ganze Strecke im selben privaten Fahrzeug.' },
      { title: 'Skifreundliche Fahrzeugplanung', description: 'Teilen Sie uns Ski, Snowboards und zusätzliches Gepäck bei der Buchung mit.' },
      { title: 'Festpreis', description: 'Ihr Transferpreis wird vor der Fahrt bestätigt.' },
      { title: 'Flexible Abholung', description: 'Ihre Flughafenabholung wird auf Ihre Ankunft abgestimmt.' },
      { title: 'Rücktransfer', description: 'Buchen Sie auch Schladming → Flughafen Salzburg.' },
    ],
    flightTrackingSection: {
      heading: 'Flughafenabholung & Flugüberwachung',
      description:
        'Geben Sie bei der Buchung Ihre Flugnummer an, und wir überwachen die geplante Ankunft am Flughafen Salzburg. Bei Verspätung oder frühzeitiger Ankunft wird die Abholzeit entsprechend angepasst.',
    },
    destinationCoverage: {
      heading: 'Abholung an Hotel & Chalet in Schladming-Dachstein',
      intro:
        'Ihr Ziel ist nicht zwangsläufig „Schladming" selbst — auch Rohrmoos und Haus im Ennstal sind üblich. Geben Sie bei der Anfrage Ihre genaue Unterkunft an. Wir fahren direkt zu:',
      items: ['Hotels in Schladming', 'Chalets in Rohrmoos', 'Ferienwohnungen', 'Privatadressen', 'Haus im Ennstal (auf Anfrage)'],
    },
    luggageNote: {
      heading: 'Reisen Sie mit Skiausrüstung oder zusätzlichem Gepäck?',
      description:
        'Schladming ist ein bedeutendes Ski-Amadé-Ziel, Skiausrüstung ist auf dieser Strecke im Winter also normal. Geben Sie bei der Buchung Ihre Ski- und Snowboardtaschen, Skischuhe sowie eventuelle Kinderausrüstung zusätzlich zu Ihren normalen Koffern an — ein passendes Fahrzeug kann eingeplant werden, nicht nur nach Personenzahl.',
    },
    familySection: {
      heading: 'Familien-Skitransfer',
      description:
        'Reisen mit Kindern bringt Kindersitze, Sitzerhöhungen, Kinderwagen und Skiausrüstung zusätzlich zu den normalen Koffern mit sich. Geben Sie bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck an, und wir stellen je nach Verfügbarkeit einen Executive Van oder Kleinbus mit ausreichend Platz bereit.',
    },
    groupSection: {
      heading: 'Gruppentransfers nach Schladming',
      description:
        'Diese Strecke eignet sich auch für Skigruppen, Firmengruppen und größere Freundesgruppen. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden — geben Sie bei der Anfrage Ihre vollständige Reiseroute, Personenanzahl und Ihr Gepäck an.',
    },
    winterSection: {
      heading: 'Flughafen Salzburg nach Schladming im Winter',
      description:
        'Schneefall, vereiste Straßen und Verkehr rund um Samstags-Wechseltage, Weihnachten/Neujahr und die Februar-Ferien können diese Fahrt verlängern — auch bei frühmorgendlichen Flughafenankünften. Planen Sie bei starkem Schneefall oder verkehrsreicher Hauptsaison zusätzliche Zeit ein, statt von einer festen Fahrzeit von 1 Std. 15 Min. auszugehen.',
      linkHref: '/de/blog/salzburg-airport-to-schladming-transfer-guide',
      linkLabel: 'Unseren vollständigen Schladming-Transferguide lesen →',
    },
    returnSection: {
      heading: 'Schladming → Flughafen Salzburg',
      description:
        'Derselbe private Service funktioniert auch für Ihre Abreise in umgekehrter Richtung. Wir holen Sie direkt von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Schladming ab und bringen Sie zum Flughafen Salzburg. Teilen Sie uns bei der Buchung Ihre Flugzeit, Ihr Gepäck und Ihre bevorzugte Abholzeit mit — planen Sie zusätzlichen Puffer für winterliche Straßenverhältnisse und den Check-in ein.',
    },
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Direkte Flughafenabholung, Hoteltransfer und Skigepäck', tradeoff: 'Höhere Kosten als öffentliche Verkehrsmittel' },
      { option: 'Zug + Umstieg', bestFor: 'Kostenbewusste Reisende, die einen Bahnhofswechsel in Kauf nehmen', tradeoff: 'Längere Gesamtreise, mehr Gepäckaufwand und fester Fahrplan' },
    ],
    relatedRoutesHeading: 'Weitere Skitransfer-Strecken',
    relatedAirportRoutes: [
      { label: 'Flughafen Salzburg → Obertauern', distance: '~90 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-obertauern' },
      { label: 'Flughafen Salzburg → Bad Gastein', distance: '~95 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-bad-gastein' },
      { label: 'Flughafen Graz → Schladming', distance: '~100 km', duration: '~1 Std. 30 Min.', href: '/de/routes/graz-airport-to-schladming' },
    ],
    faqs: [
      {
        question: 'Wie weit ist Schladming vom Flughafen Salzburg entfernt?',
        answer: 'Die Straßenentfernung beträgt etwa 90 km über die A10 Tauernautobahn und die B320 Ennstal Straße.',
      },
      {
        question: 'Wie lange dauert der Transfer?',
        answer: 'Unter normalen Bedingungen rund 1 Stunde 15 Minuten, bei winterlichem Verkehr oder starkem Schneefall bis zu 1 Stunde 30 Minuten.',
      },
      {
        question: 'Kann ich mit Ski reisen?',
        answer: 'Ja. Teilen Sie uns Ihre Ski- oder Snowboardausrüstung bei der Buchung mit, damit wir ein geeignetes Fahrzeug einplanen können.',
      },
      {
        question: 'Können Sie mich direkt zu meinem Hotel bringen?',
        answer: 'Ja. Wir fahren direkt zu Ihrem Hotel, Chalet, Ihrer Ferienwohnung oder Privatadresse in Schladming oder Rohrmoos.',
      },
      {
        question: 'Bieten Sie Rücktransfers an?',
        answer: 'Ja. Wir holen Sie von Ihrer Unterkunft in Schladming ab und bringen Sie zum Flughafen Salzburg.',
      },
      {
        question: 'Können Familien ein größeres Fahrzeug buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und größere Gruppen zur Verfügung.',
      },
    ],
  },
  {
    slug: 'salzburg-airport-to-obertauern',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Obertauern',
    distance: '~90 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A10 Tauernautobahn bis zur Ausfahrt Radstadt, dann auf der B99 Radstädter Tauernstraße nach Obertauern.',
    whyBook: [
      'Direkter Transfer zum schneesicheren Passresort in Höhenlage',
      'Wintertaugliche Fahrzeuge für winterliche Bergstraßen',
      'Alles inklusive zum Festpreis, mit Überwachung von Flugverspätungen',
    ],
    seoTitle: 'Transfer Flughafen Salzburg nach Obertauern | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Salzburg nach Obertauern. Tür-zu-Tür-Service, Flugüberwachung, Festpreise. ~90 km, ~1 Std. 15 Min.',
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet oder Ihre Adresse in Obertauern als Ziel an. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    routeOverview: {
      road: 'A10 Tauernautobahn über die B99 Radstädter Tauernstraße',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive Van oder Kleinbus',
    },
    routeExplanation: {
      heading: 'Die Fahrt vom Flughafen Salzburg nach Obertauern',
      description:
        'Vom Flughafen Salzburg führt die Fahrt südlich über die A10 Tauernautobahn bis zur Ausfahrt Radstadt, dann die B99 Radstädter Tauernstraße hinauf nach Obertauern — eines der höchstgelegenen und schneesichersten Skigebiete Österreichs, auf dem Tauernpass gelegen, mit der Tauernrunde als Ski-zurück-zum-Ort-Rundkurs. Der letzte Abschnitt ist eine echte Passfahrt, und unter normalen Bedingungen dauert die Fahrt etwa 1 Stunde 15 Minuten, wobei winterliches Wetter die Fahrzeit verlängern kann.',
    },
    originAlternative: {
      heading: 'Warum der Flughafen Salzburg das praktische Tor nach Obertauern ist',
      description:
        'Der Flughafen Salzburg ist der nächstgelegene große Flughafen zu Obertauern, bei einem inländischen Transfer ganz ohne Grenzübertritt. Auch der Flughafen Klagenfurt wird von manchen Reisenden genutzt, ist mit etwa 1 Stunde 30 Minuten jedoch weiter entfernt — Salzburg ist für die meisten Buchungen die direktere Option.',
    },
    whyBookPoints: [
      { title: 'Tür zu Tür', description: 'Ihr Chauffeur bringt Sie direkt vom Flughafen Salzburg zu Ihrer Unterkunft in Obertauern.' },
      { title: 'Passfahrt souverän gemeistert', description: 'Die letzte Steigung nach Obertauern ist eine echte Passstraße — überlassen Sie die winterliche Fahrt einem erfahrenen lokalen Chauffeur.' },
      { title: 'Skifreundliche Fahrzeugplanung', description: 'Teilen Sie uns Ski, Snowboards und zusätzliches Gepäck bei der Buchung mit.' },
      { title: 'Festpreis', description: 'Ihr Transferpreis wird vor der Fahrt bestätigt.' },
      { title: 'Flexible Abholung', description: 'Ihre Flughafenabholung wird auf Ihre Ankunft abgestimmt.' },
      { title: 'Rücktransfer', description: 'Buchen Sie auch Obertauern → Flughafen Salzburg.' },
    ],
    flightTrackingSection: {
      heading: 'Flughafenabholung & Flugüberwachung',
      description:
        'Geben Sie bei der Buchung Ihre Flugnummer an, und wir überwachen die geplante Ankunft am Flughafen Salzburg. Bei Verspätung oder frühzeitiger Ankunft wird die Abholzeit entsprechend angepasst.',
    },
    luggageNote: {
      heading: 'Reisen Sie mit Skiausrüstung oder zusätzlichem Gepäck?',
      description:
        'Obertauern ist von Spätherbst bis Frühling verlässlich schneesicher, Skiausrüstung ist auf dieser Strecke also Standard. Geben Sie bei der Buchung Ihre Ski- und Snowboardtaschen, Skischuhe sowie eventuelle Kinderausrüstung zusätzlich zu Ihren normalen Koffern an — ein passendes Fahrzeug kann eingeplant werden, nicht nur nach Personenzahl.',
    },
    familySection: {
      heading: 'Familien-Skitransfer',
      description:
        'Reisen mit Kindern bringt Kindersitze, Sitzerhöhungen, Kinderwagen und Skiausrüstung zusätzlich zu den normalen Koffern mit sich. Geben Sie bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck an, und wir stellen je nach Verfügbarkeit einen Executive Van oder Kleinbus mit ausreichend Platz bereit.',
    },
    groupSection: {
      heading: 'Gruppentransfers nach Obertauern',
      description:
        'Diese Strecke eignet sich auch für Skigruppen, Firmengruppen und größere Freundesgruppen. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden — geben Sie bei der Anfrage Ihre vollständige Reiseroute, Personenanzahl und Ihr Gepäck an.',
    },
    winterSection: {
      heading: 'Flughafen Salzburg nach Obertauern im Winter',
      description:
        'Obertauerns Höhenlage bedeutet, dass winterliche Bedingungen hier stärker ins Gewicht fallen als bei manch anderem Resort-Transfer. Schneefall, vereiste Straßen und Verkehr rund um Samstags-Wechseltage, Weihnachten/Neujahr und die Februar-Ferien können diese Fahrt verlängern — auch bei frühmorgendlichen Flughafenankünften. Planen Sie bei starkem Schneefall zusätzliche Zeit ein, statt von einer festen Fahrzeit von 1 Std. 15 Min. auszugehen.',
      linkHref: '/de/blog/salzburg-airport-to-obertauern-transfer-guide',
      linkLabel: 'Unseren vollständigen Obertauern-Transferguide lesen →',
    },
    returnSection: {
      heading: 'Obertauern → Flughafen Salzburg',
      description:
        'Derselbe private Service funktioniert auch für Ihre Abreise in umgekehrter Richtung. Wir holen Sie direkt von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Obertauern ab und bringen Sie zum Flughafen Salzburg. Teilen Sie uns bei der Buchung Ihre Flugzeit, Ihr Gepäck und Ihre bevorzugte Abholzeit mit — planen Sie zusätzlichen Puffer für winterliche Straßenverhältnisse und den Check-in ein.',
    },
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Direkte Flughafenabholung, Hoteltransfer und Skigepäck', tradeoff: 'Höhere Kosten als öffentliche Verkehrsmittel' },
      { option: 'Öffentliche Verkehrsmittel', bestFor: 'Kostenbewusste Reisende, die Umstiege in Kauf nehmen', tradeoff: 'Längere Gesamtreise und mit Skiausrüstung weniger praktisch' },
    ],
    relatedRoutesHeading: 'Weitere Skitransfer-Strecken',
    relatedAirportRoutes: [
      { label: 'Flughafen Salzburg → Schladming', distance: '~90 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-schladming' },
      { label: 'Flughafen Salzburg → Bad Gastein', distance: '~95 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-bad-gastein' },
      { label: 'Flughafen Salzburg → Zell am See', distance: '~80 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-zell-am-see' },
    ],
    faqs: [
      {
        question: 'Wie weit ist Obertauern vom Flughafen Salzburg entfernt?',
        answer: 'Die Straßenentfernung beträgt etwa 90 km über die A10 Tauernautobahn und die B99 Radstädter Tauernstraße.',
      },
      {
        question: 'Wie lange dauert der Transfer?',
        answer: 'Unter normalen Bedingungen rund 1 Stunde 15 Minuten, bei winterlichem Verkehr oder Schneefall auf der Passstraße bis zu 1 Stunde 30 Minuten.',
      },
      {
        question: 'Kann ich mit Ski reisen?',
        answer: 'Ja. Teilen Sie uns Ihre Ski- oder Snowboardausrüstung bei der Buchung mit, damit wir ein geeignetes Fahrzeug einplanen können.',
      },
      {
        question: 'Können Sie mich direkt zu meinem Hotel bringen?',
        answer: 'Ja. Wir fahren direkt zu Ihrem Hotel, Chalet, Ihrer Ferienwohnung oder Privatadresse in Obertauern.',
      },
      {
        question: 'Bieten Sie Rücktransfers an?',
        answer: 'Ja. Wir holen Sie von Ihrer Unterkunft in Obertauern ab und bringen Sie zum Flughafen Salzburg.',
      },
      {
        question: 'Können Familien ein größeres Fahrzeug buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und größere Gruppen zur Verfügung.',
      },
    ],
  },
  {
    slug: 'munich-airport-to-saalbach',
    from: 'Flughafen München (MUC)',
    to: 'Saalbach-Hinterglemm',
    distance: '~215 km',
    driveTime: '~2 Std. 30 Min.',
    routeDescription: 'Südlich über die deutsche A8, Grenzübertritt bei Siegsdorf/Lofer (B178) ins Glemmtal.',
    whyBook: [
      'Beliebter internationaler Langstreckentransfer für Skifahrer aus Großbritannien und Skandinavien',
      'Große Mercedes-V-Klasse-Vans für Gruppen mit viel Skigepäck',
      'Keine Grenzformalitäten oder Sorgen um die Autobahnvignette',
    ],
    crossBorder: true,
  },
  {
    slug: 'munich-airport-to-zell-am-see',
    from: 'Flughafen München (MUC)',
    to: 'Zell am See',
    distance: '~200 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription: 'Südlich über die A8 und die B311 Pinzgauer Straße direkt zum Zeller See.',
    whyBook: [
      'Direkter Transfer für Langstreckenankünfte in München mit Ziel Zell am See und Gletscher Kaprun',
      'Fester, transparenter Preis, im Voraus vereinbart',
      'Vollständige Flugverfolgung und Empfang in der Ankunftshalle',
    ],
    crossBorder: true,
  },
  {
    slug: 'munich-airport-to-mayrhofen',
    from: 'Flughafen München (MUC)',
    to: 'Mayrhofen',
    distance: '~190 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription: 'Südlich über die A8 und den A93/A12-Inntalkorridor, Ausfahrt Zillertal (B169) nach Mayrhofen.',
    whyBook: [
      'Direkter Chauffeurtransfer ab München ins Zillertal',
      'Geräumige Fahrzeuge für Gletscher-Skiausrüstung',
      'Komfortable Tür-zu-Tür-Fahrt ohne überfüllte Münchner Züge',
    ],
    crossBorder: true,
  },
  {
    slug: 'munich-airport-to-soelden',
    from: 'Flughafen München (MUC)',
    to: 'Sölden',
    distance: '~240 km',
    driveTime: '~2 Std. 45 Min.',
    routeDescription: 'Südlich über das deutsche Autobahnnetz und die A12/B186 ins Ötztal.',
    whyBook: [
      'Zuverlässiger grenzüberschreitender Transfer für internationale Langstreckengäste',
      'Alle Mautgebühren und Vignetten im Festpreis inbegriffen',
      'Wintertaugliche Mercedes-Fahrzeuge, geeignet für winterliche Alpenstraßen',
    ],
    crossBorder: true,
  },
  {
    slug: 'zurich-airport-to-ischgl',
    from: 'Flughafen Zürich (ZRH)',
    to: 'Ischgl',
    distance: '~235 km',
    driveTime: '~2 Std. 30 Min.',
    routeDescription: 'Östlich über die Schweizer Autobahnen A3/A13, Einreise nach Österreich bei Feldkirch auf die S16/B188 ins Paznauntal.',
    whyBook: [
      'Privater grenzüberschreitender Transfer für Ankünfte aus Zürich',
      'Chauffeure, die mit dem Grenzübergang Schweiz–Österreich vertraut sind',
      'Private, komfortable Fahrt',
    ],
    crossBorder: true,
  },
  {
    slug: 'graz-to-ljubljana',
    from: 'Graz',
    to: 'Ljubljana',
    distance: '~195 km',
    driveTime: '~2 Std.',
    routeDescription: 'Südlich über die A2 Süd Autobahn durch den Grenzübergang Spielfeld nach Slowenien auf die Autobahn A1.',
    whyBook: [
      'Nahtlose regionale grenzüberschreitende Verbindung zwischen der Steiermark und Slowenien',
      'Ideal für Geschäftsreisen und diplomatische Fahrten',
      'Festpreis inklusive slowenischer Autobahnvignette',
    ],
    crossBorder: true,
  },
  {
    slug: 'graz-to-venice',
    from: 'Graz',
    to: 'Venedig',
    distance: '~380 km',
    driveTime: '~3 Std. 45 Min.',
    routeDescription: 'Südwestlich über die A2 Süd Autobahn, Grenzübertritt bei Tarvisio nach Italien auf die A23/A4 nach Venedig.',
    whyBook: [
      'Direkter privater Intercity-Transfer in die venezianische Lagune (Piazzale Roma)',
      'Komfortable Langstreckenfahrt in Mercedes-Limousine oder -Van',
      'Flexible Zwischenstopps in Kärnten oder Friaul möglich',
    ],
    crossBorder: true,
  },
  {
    slug: 'klagenfurt-to-ljubljana',
    from: 'Klagenfurt',
    to: 'Ljubljana',
    distance: '~85 km',
    driveTime: '~1 Std.',
    routeDescription: 'Südlich über die B91 Loiblpass-Straße oder die A11 durch den Karawankentunnel direkt nach Slowenien.',
    whyBook: [
      'Direkter grenzüberschreitender Transfer zwischen Kärnten und Ljubljana',
      'Mautgebühren für den Karawankentunnel im Festpreis inbegriffen',
      'Tür-zu-Tür-Transfer für Hotel- und Geschäftstermine',
    ],
    crossBorder: true,
  },
  {
    slug: 'klagenfurt-to-venice',
    from: 'Klagenfurt',
    to: 'Venedig',
    distance: '~280 km',
    driveTime: '~2 Std. 45 Min.',
    routeDescription: 'Südwestlich über die A2 Süd Autobahn über die italienische Grenze bei Udine (A23) nach Venedig.',
    whyBook: [
      'Direkter Luxustransfer von den Alpen an die Adria',
      'Kein Zugumstieg mit schwerem Kreuzfahrt- oder Urlaubsgepäck',
      'Als durchgehende grenzüberschreitende Buchung organisiert, inklusive Grenzübertritt',
    ],
    crossBorder: true,
  },
  {
    slug: 'vienna-to-prague',
    from: 'Wien',
    to: 'Prag',
    distance: '~310 km',
    driveTime: '~3 Std. 15 Min.',
    routeDescription: 'Nördlich über die A5 Weinviertel Autobahn nach Tschechien über Mikulov auf der D52/D1 nach Prag.',
    whyBook: [
      'Erstklassiger Hauptstadt-zu-Hauptstadt-Transfer in Mitteleuropa',
      'Direkte Abholung an Wiener Hotels bis zur Prager Burg oder Altstadt',
      'Alle tschechischen Autobahnvignetten-Gebühren inbegriffen',
    ],
    crossBorder: true,
  },
  {
    slug: 'salzburg-to-graz',
    from: 'Salzburg',
    to: 'Graz',
    distance: '~280 km',
    driveTime: '~2 Std. 45 Min.',
    routeDescription: 'Südöstlich über die A10 Tauernautobahn und die A9 Pyhrn Autobahn durchs Ennstal.',
    whyBook: [
      'Direkte Verbindung zwischen Salzburg und der steirischen Landeshauptstadt',
      'Komfortabler Intercity-Transfer ohne Umsteigen im Regionalzug',
      'Festpreis inklusive Bergtunnel-Mautgebühren',
    ],
  },
  {
    slug: 'bregenz-to-zurich-airport',
    from: 'Bregenz',
    to: 'Flughafen Zürich (ZRH)',
    distance: '~120 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Westlich über die Schweizer Grenze (Höchst/St. Margrethen) auf der Schweizer Autobahn A1 nach Zürich-Kloten.',
    whyBook: [
      'Wichtigste Flughafenanbindung für Vorarlberger Privat- und Geschäftsreisende',
      'Grenzüberschreitender lizenzierter Fahrer, Schweizer Vignette inbegriffen',
      'Pünktliche Flughafentransfers mit Flugverfolgung',
    ],
    crossBorder: true,
  },
  {
    slug: 'innsbruck-to-zurich',
    from: 'Innsbruck',
    to: 'Zürich',
    distance: '~290 km',
    driveTime: '~3 Std.',
    routeDescription: 'Westlich über die A12/S16 durch den Arlberg, Grenzübertritt über Liechtenstein/Schweiz auf der A3 nach Zürich.',
    whyBook: [
      'Direkter Stadt-zu-Stadt-Transfer zwischen Tirol und dem Finanzplatz Zürich',
      'Komfortable direkte Fahrt mit optionalen Zwischenstopps in Vaduz oder Bregenz',
      'Festpreis inklusive aller internationalen Transitgebühren',
    ],
    crossBorder: true,
  },
  {
    slug: 'vienna-to-wachau',
    from: 'Wien',
    to: 'Wachau-Tal',
    distance: '~85 km',
    driveTime: '~1 Std.',
    routeDescription: 'Westlich über die A1 und die S33 nach Krems und ins malerische Donau-Weinbaugebiet (Dürnstein/Melk).',
    whyBook: [
      'Privater Tagesausflugs- und Weinverkostungstransfer mit persönlichem Fahrer',
      'Flexibler Reiseplan mit Stopps bei Stift Melk und Weingütern',
      'Fester Tages- oder Transferpreis',
    ],
  },
  {
    slug: 'vienna-to-baden-wien',
    from: 'Wien',
    to: 'Baden bei Wien',
    distance: '~30 km',
    driveTime: '~35 Min.',
    routeDescription: 'Südlich über die A2 Süd Autobahn direkt in den Kurort Baden.',
    whyBook: [
      'Schneller, direkter Transfer zur Therme und zum Casino Baden',
      'Ideal für Hotelgäste, abendliche Casinobesuche und Wellness-Aufenthalte',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'bregenz-to-lech',
    from: 'Bregenz',
    to: 'Lech am Arlberg',
    distance: '~95 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südöstlich über die Rheintal Autobahn A14 und die B197 über den Flexenpass nach Lech.',
    whyBook: [
      'Direkte Verbindung vom Vorarlberger Rheintal zum Luxusresort am Arlberg',
      'Erfahrene Bergchauffeure für starke winterliche Schneefälle',
      'Geräumige Luxus-Vans der V-Klasse für Familien und Skiausrüstung',
    ],
  },
  {
    slug: 'bregenz-to-st-anton',
    from: 'Bregenz',
    to: 'St. Anton am Arlberg',
    distance: '~105 km',
    driveTime: '~1 Std. 20 Min.',
    routeDescription: 'Südöstlich über die A14 und die S16 Arlberg Schnellstraße nach St. Anton.',
    whyBook: [
      'Schneller, direkter Transfer zwischen dem Bodensee und dem Skigebiet Arlberg',
      'Alle Bergtunnel-Mautgebühren inbegriffen',
      'Festpreis mit professionellem Chauffeur',
    ],
  },
  {
    slug: 'linz-to-salzburg',
    from: 'Linz',
    to: 'Salzburg',
    distance: '~130 km',
    driveTime: '~1 Std. 25 Min.',
    routeDescription: 'Westlich auf der A1 Westautobahn, die Oberösterreich mit dem Land Salzburg verbindet.',
    whyBook: [
      'Häufig gebuchter Intercity-Transfer für Geschäfts- und Urlaubsreisende',
      'Kein Bahnhofsumstieg mit schwerem Gepäck nötig',
      'Direkt zum Hotel oder Anschluss an den Flughafen Linz/Salzburg',
    ],
  },
  {
    slug: 'villach-to-venice',
    from: 'Villach',
    to: 'Venedig',
    distance: '~240 km',
    driveTime: '~2 Std. 30 Min.',
    routeDescription: 'Südwestlich über die A2 Süd Autobahn über die italienische Grenze bei Tarvisio via Udine (A23/A4) nach Venedig.',
    whyBook: [
      'Eine direkte grenzüberschreitende Fahrt von Kärnten an die venezianische Küste',
      'Direkte Ablieferung am Piazzale Roma oder Kreuzfahrtterminal Venedig',
      'Als durchgehende grenzüberschreitende Buchung organisiert, inklusive Grenzübertritt',
    ],
    crossBorder: true,
  },
  {
    slug: 'villach-to-ljubljana',
    from: 'Villach',
    to: 'Ljubljana',
    distance: '~100 km',
    driveTime: '~1 Std.',
    routeDescription: 'Südlich über die A11 durch den Karawankentunnel direkt nach Slowenien nach Ljubljana.',
    whyBook: [
      'Direkte grenzüberschreitende Verbindung zwischen Kärnten und Flughafen/Stadt Ljubljana',
      'Tunnelmaut und slowenische Autobahnvignette inbegriffen',
      'Rund um die Uhr als Privattransfer verfügbar',
    ],
    crossBorder: true,
  },
  {
    slug: 'salzburg-airport-to-berchtesgaden',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Berchtesgaden',
    distance: '~30 km',
    driveTime: '~35 Min.',
    routeDescription:
      'Eine kurze grenzüberschreitende Fahrt südwestlich auf der B305/B20, Grenzübertritt nach Bayern bei Hangender Stein, direkt weiter nach Berchtesgaden.',
    whyBook: [
      'Ein kurzer Flughafentransfer, ideal für einen Tagesausflug zum Kehlsteinhaus oder Königssee',
      'Kein Mietwagen oder lokale Busverbindungen für einen Tagesausflug über die Grenze nötig',
      'Festpreis inklusive Grenzübertritt',
    ],
    crossBorder: true,
  },
  {
    slug: 'salzburg-airport-to-hallstatt',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Hallstatt',
    distance: '~75 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription:
      'Östlich über die Wolfgangsee-Straße (B158) durch Fuschl und St. Gilgen, dann auf der B145 nach Hallstatt — dieselbe malerische Salzkammergut-Route wie ab der Salzburger Innenstadt.',
    whyBook: [
      'Direkt von der Ankunft zum UNESCO-Seeort, ohne vorherigen Umstieg auf Zug oder Bus in der Salzburger Innenstadt',
      'Nützlich für Gäste, die für einen Ein-Tages-Besuch in Hallstatt einfliegen, bevor es weitergeht',
      'Festpreis inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'vienna-airport-to-linz',
    from: 'Flughafen Wien (VIE)',
    to: 'Linz',
    distance: '~185 km',
    driveTime: '~1 Std. 45 Min. – 2 Std.',
    routeDescription:
      'Westlich auf der A1 Westautobahn entlang des Donaukorridors, derselben Route wie im Verkehr zwischen Wien und Salzburg, mit Ziel Linz.',
    whyBook: [
      'Kein Umstieg mit Gepäck am Wiener Hauptbahnhof',
      'Nützlich, wenn der Flughafen Linz keine passende Verbindung von Ihrem Startort bietet',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'vienna-airport-to-wachau',
    from: 'Flughafen Wien (VIE)',
    to: 'Wachau-Tal',
    distance: '~100 km',
    driveTime: '~1 Std. 10 Min.',
    routeDescription:
      'Westlich über die A1 und die S33 nach Krems, am östlichen Rand des Donau-Weinbaugebiets — derselbe Korridor wie bei der Stadt-zu-Stadt-Strecke Wien–Wachau.',
    whyBook: [
      'Direkt von der Ankunft zum Hotel oder Weingut in der Wachau, ohne Umstieg in der Wiener Innenstadt',
      'Nützlich für weintouristische Ankünfte mit Ziel Dürnstein oder Krems',
      'Flexible Zwischenstopps auf Anfrage',
    ],
  },
  {
    slug: 'vienna-airport-to-baden-wien',
    from: 'Flughafen Wien (VIE)',
    to: 'Baden bei Wien',
    distance: '~40 km',
    driveTime: '~35 Min.',
    routeDescription:
      'Südlich über die A4 und die A2 Südautobahn, an der Wiener Innenstadt vorbei, direkt in den Kurort Baden.',
    whyBook: [
      'Schneller, direkter Ankunftstransfer zu den Thermen und dem Casino Baden',
      'Kein Umstieg von Zug auf Taxi über Wien Meidling',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'salzburg-airport-to-innsbruck',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Innsbruck',
    distance: '~140–200 km',
    driveTime: '~1 Std. 45 Min. – 2 Std. 15 Min.',
    routeDescription:
      'Die schnellste Route führt kurz über die deutsche A8 durch Bayern, bevor sie bei Kufstein wieder auf die A12 wechselt — derselbe Abkürzungsweg wie auf der Stadt-zu-Stadt-Strecke Salzburg–Innsbruck.',
    whyBook: [
      'Ein Fahrzeug die ganze Strecke, inklusive des kurzen deutschen Grenzübertritts',
      'Kein Inlandsflug zwischen den beiden Städten nötig',
      'Beliebt für regionsübergreifende Ankünfte mit Ziel Tirol',
    ],
    crossBorder: true,
  },
  {
    slug: 'salzburg-airport-to-munich',
    from: 'Flughafen Salzburg (SZG)',
    to: 'München',
    distance: '~145 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription:
      'Nordwärts auf der deutschen A8 — eine kurze grenzüberschreitende Fahrt für Reisende mit Anschlussflug ab München oder Ziel Stadt München.',
    whyBook: [
      'Beliebt für internationale Anschlüsse über den Flughafen München (MUC)',
      'Keine separate Buchung eines grenzüberschreitenden Taxis ab Salzburg nötig',
      'Festpreis im Voraus vereinbart, unabhängig vom Grenzverkehr',
    ],
    crossBorder: true,
  },
  {
    slug: 'innsbruck-airport-to-seefeld',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Seefeld in Tirol',
    distance: '~22–25 km',
    driveTime: '~20–25 Min.',
    routeDescription:
      'Über die B177 Seefelder Straße und den Zirler Berg, hinauf aus dem Inntal auf das Seefelder Plateau — eine kurze, direkte Strecke ab dem Flughafen.',
    whyBook: [
      'Ein kurzer, direkter Transfer vom Flughafen Innsbruck nach Seefeld',
      'Direkt zu Ihrem Hotel in Seefeld, ohne Umstieg zwischen Flughafentransport und Regionalbahn',
      'Gut geeignet für das autofreie Fußgängerzentrum des Orts',
    ],
    seoTitle: 'Flughafen Innsbruck nach Seefeld Transfer | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer vom Flughafen Innsbruck oder aus der Innsbrucker Innenstadt nach Seefeld in Tirol — rund 22–25 km, 20–25 Minuten, Festpreis, Tür zu Tür.',
    routeOverview: {
      road: 'B177 / Seefelder Straße',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive Van oder Kleinbus',
    },
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet, Apartment oder eine andere Adresse in Seefeld an — wir bestätigen Verfügbarkeit und einen Festpreis per E-Mail.',
    pickupSteps: [
      {
        title: 'Flugdaten',
        description: 'Geben Sie Ihre Flugnummer bei der Buchung an, damit Ihre Ankunft verfolgt werden kann.',
      },
      {
        title: 'Flugverfolgung',
        description: 'Ihr Flug wird überwacht, und die Abholzeit passt sich bei früher oder späterer Ankunft automatisch an.',
      },
      {
        title: 'Empfang in der Ankunftshalle',
        description: 'Ihr Chauffeur wartet im Ankunftsbereich mit einem Namensschild.',
      },
      {
        title: 'Hilfe beim Gepäck',
        description: 'Ihr Fahrer hilft beim Verladen von Gepäck, Skitaschen und zusätzlicher Ausrüstung.',
      },
      {
        title: 'Direkt nach Seefeld',
        description: 'Sie fahren direkt über die B177 zu Ihrem Hotel, Chalet oder Ihrer Privatadresse — ohne Zwischenstopp, ohne Fahrzeugwechsel.',
      },
    ],
    priceNote: {
      heading: 'Was bestimmt den Transferpreis?',
      description:
        'Ihr Angebot hängt vom Fahrzeug, der Personenzahl, Gepäck und Skiausrüstung sowie den genauen Abhol- und Zieladressen ab. Geben Sie diese Angaben im Buchungsformular an — ein Festpreis wird dann vor der Reise per E-Mail bestätigt, ohne dass für die Anfrage eine Zahlung erforderlich ist.',
    },
    routeExplanation: {
      heading: 'Winterreise vom Flughafen Innsbruck nach Seefeld',
      description:
        'Die Strecke führt über die B177 und den Zirler Berg vom Inntal hinauf auf das Seefelder Plateau. Unter normalen Bedingungen ist es eine kurze, unkomplizierte Fahrt, aber im Winter können Schneefall, Verkehr und Straßenverhältnisse die Fahrzeit verlängern — es lohnt sich, etwas zusätzlichen Puffer zur üblichen Fahrzeit von 20–25 Minuten einzuplanen, besonders bei einem knappen Flughafenanschluss.',
    },
    transferComparison: [
      { option: 'Privater Chauffeur', bestFor: 'Direkt zu Ihrer Unterkunft, ohne Umstieg', tradeoff: 'Höhere Kosten als öffentliche Verkehrsmittel' },
      { option: 'Zug + Regionalbus', bestFor: 'Alleinreisende mit leichtem Gepäck', tradeoff: 'Bahnhofswechsel und Anschlussfahrt zu Ihrer Unterkunft' },
    ],
    whyBookPoints: [
      {
        title: 'Direkt zu Ihrem Hotel',
        description: 'Reisen Sie direkt vom Flughafen Innsbruck zu Ihrer Unterkunft in Seefeld, ohne separate Anschlüsse zu organisieren.',
      },
      {
        title: 'Kurze Fahrt vom Flughafen zum Skigebiet',
        description: 'Seefeld liegt relativ nah am Flughafen Innsbruck, was einen privaten Transfer zu einer praktischen Option für die direkte Weiterfahrt zur Unterkunft macht.',
      },
      {
        title: 'Persönlicher Empfang in der Ankunftshalle',
        description: 'Ihr Chauffeur wartet im Ankunftsbereich mit Ihrem Namensschild und hilft beim Gepäck.',
      },
      {
        title: 'Privates Fahrzeug',
        description: 'Reisen Sie ohne geteilte Fahrgäste und ohne unnötige Zwischenstopps.',
      },
      {
        title: 'Festpreise',
        description: 'Ihr Transferpreis wird vor der Fahrt bestätigt.',
      },
      {
        title: 'Tür-zu-Tür-Service',
        description: 'Fahren Sie direkt zu Ihrem Hotel, Chalet, Apartment oder Ihrer Privatadresse in Seefeld.',
      },
    ],
    destinationCoverage: {
      heading: 'Hotel- & Unterkunftstransfers in Seefeld',
      intro:
        'Wir bieten direkte Flughafenabholung zu Hotels, Apartments, Chalets und Privatadressen in ganz Seefeld in Tirol.',
      items: [
        'Seefelder Ortszentrum',
        'Seefelder Fußgängerzone',
        'Bahnhof Seefeld',
        'Hotels und Resorts',
        'Apartments und Ferienwohnungen',
        'Privatadressen',
      ],
    },
    winterSection: {
      heading: 'Winter- & Skitransfers nach Seefeld',
      description:
        'Reisen Sie zum Skifahren oder für einen Winterurlaub nach Seefeld? Wir bieten private Flughafentransfers mit Platz für Skiausrüstung und zusätzliches Gepäck. Ihr Chauffeur bringt Sie direkt vom Flughafen Innsbruck zu Ihrem Hotel oder Ihrer Unterkunft in Seefeld.',
      linkHref: '/de/ski-transfers/seefeld',
      linkLabel: 'Skitransfers nach Seefeld →',
    },
    luggageNote: {
      heading: 'Reisen Sie mit Skiausrüstung oder zusätzlichem Gepäck?',
      description:
        'Teilen Sie uns Skitaschen, Snowboards, Kinderausrüstung oder Übergepäck bei der Buchung mit, damit wir ein passendes Fahrzeug einplanen können — bei Bedarf einen Executive Van oder Kleinbus.',
    },
    returnSection: {
      heading: 'Seefeld zum Flughafen Innsbruck',
      description:
        'Reisen Sie von Seefeld ab? Wir holen Sie direkt an Ihrem Hotel, Apartment oder Ihrer Privatadresse ab und bringen Sie zum Flughafen Innsbruck. Wir empfehlen, in der Wintersaison und zu Stoßzeiten etwas mehr Zeit einzuplanen.',
    },
    originAlternative: {
      heading: 'Abfahrt ab Innsbruck statt vom Flughafen?',
      description:
        'Der gleiche private Chauffeurservice ist auch ab Hotels und Privatadressen in der Innsbrucker Innenstadt verfügbar. Wenn Sie vor der Weiterfahrt nach Seefeld in der Stadt übernachten, geben Sie bei der Buchung einfach Ihr Hotel oder Ihre Adresse als Abholort an.',
    },
    relatedAirportRoutes: [
      { label: 'Kitzbühel', distance: '~96 km', duration: '~1 Std. 15 Min.', href: '/de/routes/innsbruck-airport-to-kitzbuehel' },
      { label: 'St. Anton am Arlberg', distance: '~100 km', duration: '~1 Std. 10 Min.', href: '/de/routes/innsbruck-airport-to-st-anton' },
      { label: 'Sölden', distance: '~85 km', duration: '~1 Std. 10 Min.', href: '/de/routes/innsbruck-airport-to-soelden' },
      { label: 'Mayrhofen', distance: '~75 km', duration: '~1 Std.', href: '/de/routes/innsbruck-airport-to-mayrhofen' },
      { label: 'Ischgl', distance: '~100 km', duration: '~1 Std. 15 Min.', href: '/de/routes/innsbruck-airport-to-ischgl' },
      { label: 'Serfaus-Fiss-Ladis', distance: '~85 km', duration: '~1 Std. 15 Min.', href: '/de/routes/innsbruck-airport-to-serfaus-fiss-ladis' },
    ],
    faqs: [
      {
        question: 'Wie lange dauert der Transfer vom Flughafen Innsbruck nach Seefeld?',
        answer:
          'Die Fahrt dauert je nach Verkehr, Wetter und genauem Ziel in Seefeld etwa 20–25 Minuten. Die Straßenentfernung beträgt rund 22–25 km.',
      },
      {
        question: 'Wie komme ich vom Flughafen Innsbruck nach Seefeld?',
        answer:
          'Ein privater Chauffeur bringt Sie über die B177 direkt vom Flughafen Innsbruck nach Seefeld, mit Tür-zu-Tür-Service zu Ihrer Unterkunft.',
      },
      {
        question: 'Bieten Sie Skitransfers nach Seefeld an?',
        answer: 'Ja — Skitaschen, Snowboards und zusätzliches Gepäck können bei entsprechender Fahrzeugbuchung berücksichtigt werden.',
      },
      {
        question: 'Können Sie mich stattdessen an meinem Innsbrucker Hotel abholen?',
        answer: 'Ja — wir holen Sie auch an zentralen Innsbrucker Hotels, Privatadressen und anderen vereinbarten Orten ab.',
      },
      {
        question: 'Bieten Sie Rücktransfers von Seefeld zum Flughafen Innsbruck an?',
        answer: 'Ja — einfache Fahrten und Hin- und Rückfahrten zum Flughafen sind beide buchbar.',
      },
      {
        question: 'Welches Fahrzeug sollte ich buchen?',
        answer:
          'Limousinen eignen sich für kleinere Gruppen mit normalem Gepäck. Executive Vans und Kleinbusse stehen für größere Gruppen oder zusätzliches Gepäck und Skiausrüstung zur Verfügung.',
      },
      {
        question: 'Ist die Strecke vom Flughafen Innsbruck nach Seefeld im Winter geeignet?',
        answer:
          'Ja — es ist eine häufig genutzte Winterstrecke, aber Schnee, Verkehr und Straßenverhältnisse auf der Auffahrt über den Zirler Berg können die Fahrzeit beeinflussen. Planen Sie in der Hauptwintersaison etwas zusätzliche Zeit ein, besonders bei einem knappen Flughafenanschluss.',
      },
      {
        question: 'Wie funktioniert das Festpreisangebot?',
        answer:
          'Geben Sie Abhol- und Zielort, Reisedatum und -zeit, Personenzahl sowie Gepäck- oder Skiausrüstungsdetails im Buchungsformular an. Verfügbarkeit und ein Festpreis werden dann vor der Reise per E-Mail bestätigt — für die Anfrage ist keine Zahlung erforderlich.',
      },
    ],
  },
  {
    slug: 'innsbruck-airport-to-serfaus-fiss-ladis',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Serfaus-Fiss-Ladis',
    distance: '~85 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription:
      'Westlich auf der A12 Inntalautobahn Richtung Landeck, dann südlich hinauf auf das Serfaus-Fiss-Ladis-Plateau über dem Tal.',
    whyBook: [
      'Direkt zu den Plateau-Orten, ohne die Seilbahnverbindung, die manche Reisende vom Talboden nutzen',
      'Familienfreundliches Resort mit Platz für das Gepäck und die Ausrüstung größerer Gruppen',
      'Fester, transparenter Preis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'linz-airport-to-hallstatt',
    from: 'Flughafen Linz (LNZ)',
    to: 'Hallstatt',
    distance: '~80 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A1 und die B145 durch das Salzkammergut nach Hallstatt.',
    whyBook: [
      'Direkt von der Ankunft zum UNESCO-Ort, kein umständliches Umsteigen zwischen Zug und Fähre mit Gepäck',
      'Nützlich für Reisende, die den Flughafen Linz als ruhigere Alternative zu Salzburg oder Wien nutzen',
      'Festpreis inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'klagenfurt-airport-to-villach',
    from: 'Flughafen Klagenfurt (KLU)',
    to: 'Villach',
    distance: '~40 km',
    driveTime: '~30 Min.',
    routeDescription: 'Westlich auf der A2 Südautobahn, eine kurze und direkte Fahrt durch die Kärntner Seenlandschaft.',
    whyBook: [
      'Kurzer, häufig gebuchter Transfer zwischen Kärntens zwei größten Städten',
      'Nützlich als Verbindung vor einer Weiterreise nach Italien oder Slowenien',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'vienna-to-hallstatt',
    from: 'Wien',
    to: 'Hallstatt',
    distance: '~280 km',
    driveTime: '~3 Std.',
    routeDescription: 'Westlich auf der A1 Westautobahn ins Salzkammergut, dann südlich auf der B145 durch Bad Ischl nach Hallstatt.',
    whyBook: [
      'Eine lange, aber beliebte Tagesausflugsroute für internationale Gäste mit Standort Wien',
      'Ein Fahrzeug Tür zu Tür, ohne Umstieg zwischen Zug und Fähre zum Ort',
      'Flexible Zwischenstopps in Bad Ischl oder im Salzkammergut möglich',
    ],
  },
  {
    slug: 'salzburg-to-zell-am-see',
    from: 'Salzburg',
    to: 'Zell am See',
    distance: '~90 km',
    driveTime: '~1 Std.',
    routeDescription: 'Südlich über die A10 Tauernautobahn oder die B311 Pinzgauer Straße direkt ans Ufer des Zeller Sees.',
    whyBook: [
      'Beliebte Wochenendstrecke sowohl für Wintersport als auch für Sommerausflüge an den See',
      'Direkt zu den Hotels am Seeufer, kein Umstieg im Regionalzug',
      'Festpreis inklusive Autobahnmaut',
    ],
  },
  {
    slug: 'salzburg-to-kitzbuehel',
    from: 'Salzburg',
    to: 'Kitzbühel',
    distance: '~95 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription:
      'Privater Tür-zu-Tür-Transfer von Salzburg nach Kitzbühel über die B178, mit direkter Hotel- und Chalet-Abholung sowie Platz für Skiausrüstung.',
    whyBook: [
      'Direkter Stadt-zu-Resort-Transfer ohne Bahnhofsumstieg',
      'Komfortabel für Gruppen mit Skiausrüstung',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
    seoTitle: 'Transfer Salzburg nach Kitzbühel | Privater Chauffeur',
    seoDescription:
      'Privater Chauffeurtransfer von Salzburg nach Kitzbühel. Tür-zu-Tür-Service, Festpreise und Platz für Skiausrüstung. ~95 km, ~1 Std. 15 Min.',
    dropoffHint:
      'Geben Sie Ihr Hotel, Chalet oder Ihre Adresse in Kitzbühel oder Kirchberg als Ziel an. Wir bestätigen Verfügbarkeit und Festpreis per E-Mail.',
    routeOverview: {
      road: 'B178 Loferer Straße über Unken und Waidring',
      transferType: 'Privat, Tür zu Tür',
      vehicleNote: 'Limousine, Executive Van oder Kleinbus',
    },
    routeExplanation: {
      heading: 'Die Fahrt von Salzburg nach Kitzbühel',
      description:
        'Die Strecke führt südwestlich von Salzburg in Richtung des österreichisch-deutschen Grenzgebiets, weiter durch den Pinzgau/Lofer-Korridor über Unken und Waidring, und schließlich nach Kitzbühel. Die B178 Loferer Straße bildet die Hauptanfahrt in die Kitzbühel-Region — derselbe Korridor, der auch für Transfers ab dem Flughafen Salzburg genutzt wird.',
    },
    whyBookPoints: [
      { title: 'Tür zu Tür', description: 'Abholung von Ihrem Salzburger Hotel oder Ihrer Privatadresse, direkt zu Ihrer Unterkunft in Kitzbühel.' },
      { title: 'Kein Bahnhofsumstieg', description: 'Direkte Fahrt nach Kitzbühel ohne Zug- oder Shuttle-Wechsel.' },
      { title: 'Skigepäck', description: 'Das Fahrzeug wird passend zu Personenanzahl und Ski- oder Snowboardausrüstung ausgewählt.' },
      { title: 'Festpreis', description: 'Ihr Preis wird vor der Fahrt vereinbart.' },
      { title: 'Flexible Abfahrt', description: 'Reisen Sie nach Ihrem bevorzugten Zeitplan, nicht nach einem festen Fahrplan.' },
      { title: 'Rücktransfer', description: 'Buchen Sie Kitzbühel → Salzburg für dieselbe Reise.' },
    ],
    originComparison: {
      heading: 'Salzburg Stadt vs. Flughafen Salzburg',
      options: [
        {
          label: 'Salzburg Stadt',
          distance: '~95 km',
          driveTime: '~1 Std. 15 Min.',
          bestFor: 'Hotelgäste, Geschäftsreisende und Städtereisende vor der Weiterfahrt nach Kitzbühel',
        },
        {
          label: 'Flughafen Salzburg (SZG)',
          distance: '~75 km',
          driveTime: '~1 Std. 15 Min.',
          bestFor: 'Ankommende Passagiere und direkte Flughafen-zu-Resort-Transfers',
          href: '/de/routes/salzburg-airport-to-kitzbuehel',
        },
      ],
    },
    destinationCoverage: {
      heading: 'Abholung an Hotel & Chalet',
      intro:
        'Die Abholung kann von Salzburger Stadthotels, Privatadressen, Ferienwohnungen und Geschäftsadressen aus organisiert werden — geben Sie bei der Anfrage Ihre genaue Abholadresse an. Dasselbe gilt am Kitzbühel-Ende:',
      items: ['Hotels in Kitzbühel', 'Chalets in Kitzbühel', 'Ferienwohnungen in Kitzbühel', 'Privatadressen', 'Kirchberg (auf Anfrage)'],
    },
    luggageNote: {
      heading: 'Reisen Sie mit Ski oder Snowboard?',
      description:
        'Geben Sie bei der Anfrage Ihre Ski- und Snowboardtaschen, Skischuhe, Helme sowie eventuelle Kinderausrüstung zusätzlich zu Ihren normalen Koffern an. Personenanzahl und Gepäckkapazität sind zwei unterschiedliche Dinge — der Executive Van und der Kleinbus bieten zusätzlichen Stauraum für Wintersportausrüstung neben dem normalen Gepäck.',
    },
    familySection: {
      heading: 'Familien auf der Fahrt von Salzburg nach Kitzbühel',
      description:
        'Reisen mit Kindern bringt zusätzliches Gepäck und Logistik mit sich — Kindersitze, Sitzerhöhungen, Kinderwagen und Skiausrüstung zusätzlich zu den normalen Koffern. Geben Sie bei der Anfrage die Anzahl und das Alter der Kinder, benötigte Kindersitze sowie Ihr Gepäck und Ihre Skiausrüstung an, und wir stellen einen Executive Van oder Kleinbus mit ausreichend Platz bereit.',
    },
    groupSection: {
      heading: 'Gruppen & Skigruppen',
      description:
        'Diese Strecke eignet sich auch für größere Skigruppen und Firmengruppen. Für größere Gruppen können mehrere Fahrzeuge oder ein Kleinbus organisiert werden — geben Sie bei der Anfrage Ihre vollständige Reiseroute, Personenanzahl und Ihr Gepäck an. Die genauen Fahrzeugkapazitäten finden Sie auf unserer Flottenseite.',
    },
    winterSection: {
      heading: 'Salzburg nach Kitzbühel im Winter',
      description:
        'Schneefall, Straßenverhältnisse und Verkehr rund um Samstags-Wechseltage, Weihnachten/Neujahr und die Februar-Ferien können diese Fahrt verlängern. Winterreifen und mit Alpenstraßen erfahrene Fahrer sind Standard für Resort-Transfers — planen Sie rund um die Haupt-Wechseltage zusätzliche Zeit ein.',
      linkHref: '/de/blog/alpine-ski-transfer-guide',
      linkLabel: 'Unseren Alpine- & Skitransfer-Guide lesen →',
    },
    returnSection: {
      heading: 'Kitzbühel → Salzburg Rücktransfer',
      description:
        'Derselbe private Service funktioniert auch in umgekehrter Richtung. Wir holen Sie von Ihrem Hotel, Chalet oder Ihrer Ferienwohnung in Kitzbühel oder Kirchberg ab und fahren Sie nach Salzburg — egal ob zu einem Stadthotel, zum Bahnhof oder zum Flughafen Salzburg für einen Flug. Teilen Sie uns bei der Buchung Ihre bevorzugte Abfahrtszeit, Ihr Gepäck und etwaige Flug- oder Zuganschlüsse mit.',
    },
    transferComparison: [
      { option: 'Privater Transfer', bestFor: 'Tür zu Tür, Skigepäck, Familien und Gruppen', tradeoff: 'Höhere Kosten als der Zug' },
      { option: 'Zug', bestFor: 'Kostenbewusste Einzelreisende, die Bahnhofswechsel in Kauf nehmen', tradeoff: 'Bahnhofswechsel, eigenständiger Gepäcktransport und fester Fahrplan' },
    ],
    relatedRoutesHeading: 'Weitere Wege nach Kitzbühel',
    relatedAirportRoutes: [
      { label: 'Flughafen Salzburg → Kitzbühel', distance: '~75 km', duration: '~1 Std. 15 Min.', href: '/de/routes/salzburg-airport-to-kitzbuehel' },
      { label: 'Flughafen Innsbruck → Kitzbühel', distance: '~96 km', duration: '~1 Std. 15 Min.', href: '/de/routes/innsbruck-airport-to-kitzbuehel' },
      { label: 'Flughafen München → Kitzbühel (grenzüberschreitend)', distance: '~165 km', duration: '~2 Std.', href: '/de/routes/munich-airport-to-kitzbuehel' },
    ],
    faqs: [
      {
        question: 'Wie weit ist Salzburg von Kitzbühel entfernt?',
        answer: 'Die Straßenentfernung beträgt etwa 95 km.',
      },
      {
        question: 'Wie lange dauert die Fahrt von Salzburg nach Kitzbühel?',
        answer: 'Unter normalen Bedingungen etwa 1 Stunde 15 Minuten. Verkehr, Wetter und Straßenverhältnisse können dies verlängern.',
      },
      {
        question: 'Kann ich stattdessen einen privaten Transfer ab dem Flughafen Salzburg buchen?',
        answer:
          'Ja — der Flughafen Salzburg ist mit rund 75 km und einer ähnlichen Fahrzeit von 1 Std. 15 Min. der kürzere Ausgangspunkt. Siehe unsere eigene Streckenseite Flughafen Salzburg nach Kitzbühel.',
      },
      {
        question: 'Kann ich mit Ski oder Snowboard reisen?',
        answer: 'Ja. Geben Sie Ihre Ski- oder Snowboardausrüstung bei der Buchung an, damit wir ein Fahrzeug mit ausreichend Platz einplanen können.',
      },
      {
        question: 'Können Sie mich von meinem Salzburger Hotel abholen?',
        answer: 'Ja. Wir fahren direkt von Ihrem Salzburger Hotel oder Ihrer Privatadresse zu Ihrer Unterkunft in Kitzbühel.',
      },
      {
        question: 'Bieten Sie Rücktransfers von Kitzbühel nach Salzburg an?',
        answer: 'Ja. Wir holen Sie von Ihrer Unterkunft in Kitzbühel oder Kirchberg ab und fahren Sie nach Salzburg, einschließlich zum Flughafen Salzburg, falls Sie einen Flug haben.',
      },
      {
        question: 'Können Familien oder Gruppen ein größeres Fahrzeug buchen?',
        answer: 'Ja. Executive Vans und Kleinbusse stehen je nach Verfügbarkeit für Familien und Gruppen zur Verfügung.',
      },
      {
        question: 'Beeinflusst winterliches Wetter die Fahrt?',
        answer: 'Ja. Schneefall und Verkehr rund um Haupt-Wechseltage können die Fahrzeit verlängern — planen Sie während verkehrsreicher Winterzeiten zusätzliche Zeit ein.',
      },
    ],
  },
  {
    slug: 'innsbruck-to-kitzbuehel',
    from: 'Innsbruck',
    to: 'Kitzbühel',
    distance: '~96 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription:
      'Östlich auf der A12 Inntalautobahn, dann über die B170/B161 nach Kitzbühel, dieselbe Route wie ab dem Flughafen Innsbruck.',
    whyBook: [
      'Direkte Stadt-zu-Resort-Verbindung quer durch Tirol',
      'Kein Shuttlebus- oder Regionalzugumstieg mit Skigepäck',
      'Festpreis unabhängig vom Verkehr',
    ],
  },
  {
    slug: 'innsbruck-to-st-anton',
    from: 'Innsbruck',
    to: 'St. Anton am Arlberg',
    distance: '~105 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Westlich über die A12 Inntalautobahn und die S16 Arlberg Schnellstraße direkt nach St. Anton.',
    whyBook: [
      'Direkter Stadt-zu-Resort-Transfer durch den Arlbergtunnel',
      'Geräumige Fahrzeuge für Skiausrüstung und mehrtägiges Gepäck',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'innsbruck-to-mayrhofen',
    from: 'Innsbruck',
    to: 'Mayrhofen',
    distance: '~75 km',
    driveTime: '~1 Std.',
    routeDescription: 'Östlich über die A12 Inntalautobahn, Ausfahrt auf die B169 ins Zillertal nach Mayrhofen.',
    whyBook: [
      'Direkter Zillertal-Transfer ohne Regionalzugumstieg in Jenbach',
      'Beliebt für Wochenend- und Wochenskiurlaube ab Innsbruck',
      'Festpreis inklusive Autobahnmaut',
    ],
  },
  {
    slug: 'innsbruck-to-munich',
    from: 'Innsbruck',
    to: 'München',
    distance: '~165 km',
    driveTime: '~2 Std.',
    routeDescription: 'Nördlich über den A12/A93-Inntalkorridor, Grenzübertritt bei Kufstein auf die A8 nach München.',
    whyBook: [
      'Ein Fahrzeug die ganze Strecke, inklusive des deutschen Grenzübertritts',
      'Beliebt für internationale Anschlüsse über den Flughafen München',
      'Festpreis vor Fahrtantritt vereinbart, unabhängig vom Grenzverkehr',
    ],
    crossBorder: true,
  },
  {
    slug: 'innsbruck-to-bolzano',
    from: 'Innsbruck',
    to: 'Bozen',
    distance: '~210 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription:
      'Südlich über die A13 Brennerautobahn, Österreichs wichtigste Route nach Italien, über den Brennerpass nach Südtirol.',
    whyBook: [
      'Die Überquerung des Brennerpasses ist im Festpreis inbegriffen, inklusive italienischer Vignette',
      'Komfortabel für Geschäftsreisen oder einen landschaftlichen Ausflug in die Dolomiten',
      'Ein Fahrer und ein Fahrzeug die ganze Strecke, kein Bahnhofsumstieg in Bozen',
    ],
    crossBorder: true,
  },
  {
    slug: 'linz-to-prague',
    from: 'Linz',
    to: 'Prag',
    distance: '~215 km',
    driveTime: '~2 Std. 30 Min.',
    routeDescription: 'Nördlich über die A7 Mühlkreisautobahn, Grenzübertritt bei Wullowitz nach Tschechien auf der D3 Richtung Prag.',
    whyBook: [
      'Direkte Hauptstadtverbindung ohne Regionalzugumstieg am Linzer Hauptbahnhof',
      'Ein lizenzierter Fahrer für die gesamte grenzüberschreitende Fahrt',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'reutte-to-fuessen',
    from: 'Reutte',
    to: 'Füssen',
    distance: '~25 km',
    driveTime: '~25 Min.',
    routeDescription: 'Ein kurzer grenzüberschreitender Sprung auf der B179, Grenzübertritt nach Bayern direkt nördlich von Reutte nach Füssen.',
    whyBook: [
      'Der direkteste Weg zu Schloss Neuschwanstein und Schloss Hohenschwangau von der Tiroler Seite',
      'Kein Busfahrplan, auf den man für einen Tagesausflug zu den Schlössern Rücksicht nehmen muss',
      'Festpreis inklusive Grenzübertritt',
    ],
    crossBorder: true,
  },
  {
    slug: 'vienna-airport-to-eisenstadt',
    from: 'Flughafen Wien (VIE)',
    to: 'Eisenstadt',
    distance: '~60 km',
    driveTime: '~50 Min.',
    routeDescription: 'Südlich über die A6 und die B50, eine kurze Fahrt durch die Weinberge des Burgenlands in die Landeshauptstadt.',
    whyBook: [
      'Direkter Ankunftstransfer für Geschäftsreisen oder Weintourismus im Burgenland',
      'Keine regionale Busverbindung ab Wien nötig',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'vienna-airport-to-st-poelten',
    from: 'Flughafen Wien (VIE)',
    to: 'St. Pölten',
    distance: '~75 km',
    driveTime: '~1 Std.',
    routeDescription: 'Westlich auf der A1 Westautobahn, an der Wiener Innenstadt vorbei, direkt in die niederösterreichische Landeshauptstadt.',
    whyBook: [
      'Nützlich für Behörden- und Geschäftsreisen ohne Zugumstieg in Wien',
      'Direkt zu Büros oder Hotels in St. Pölten',
      'Festpreis unabhängig vom Verkehr',
    ],
  },
  {
    slug: 'vienna-airport-to-wiener-neustadt',
    from: 'Flughafen Wien (VIE)',
    to: 'Wiener Neustadt',
    distance: '~45 km',
    driveTime: '~40 Min.',
    routeDescription: 'Südlich über die A4 und die S6, eine kurze Fahrt in Niederösterreichs zweitgrößte Stadt.',
    whyBook: [
      'Schneller, direkter Transfer für Geschäftsreisen südlich von Wien',
      'Kein Regionalzugumstieg mit Gepäck',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'vienna-airport-to-sopron',
    from: 'Flughafen Wien (VIE)',
    to: 'Sopron',
    distance: '~90 km',
    driveTime: '~1 Std.',
    routeDescription: 'Südöstlich über die A4-Autobahn, Grenzübertritt nach Ungarn bei Klingenbach nach Sopron.',
    whyBook: [
      'Ein Fahrzeug für die gesamte grenzüberschreitende Fahrt, inklusive ungarischer Grenze',
      'Beliebt für Wellness- und Weintourismus gleich hinter der Grenze',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'vienna-airport-to-prague',
    from: 'Flughafen Wien (VIE)',
    to: 'Prag',
    distance: '~330 km',
    driveTime: '~3 Std. 15 Min.',
    routeDescription: 'Nördlich über die A5 Weinviertel Autobahn nach Tschechien über Mikulov, weiter auf der D52/D1 nach Prag.',
    whyBook: [
      'Direkte Alternative zum Anschlussflug für VIE-Ankünfte mit Ziel Prag',
      'Ein lizenzierter Fahrer für die gesamte grenzüberschreitende Fahrt',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'salzburg-airport-to-bad-ischl',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Bad Ischl',
    distance: '~55 km',
    driveTime: '~50 Min.',
    routeDescription: 'Östlich über die Wolfgangsee-Straße (B158) durch Fuschl und St. Gilgen in den Salzkammergut-Kurort Bad Ischl.',
    whyBook: [
      'Direkter Ankunftstransfer für Gäste des Salzkammergut-Seengebiets',
      'Keine regionale Busverbindung ab Salzburg nötig',
      'Festpreis inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'innsbruck-airport-to-garmisch',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Garmisch-Partenkirchen',
    distance: '~65 km',
    driveTime: '~1 Std.',
    routeDescription: 'Nördlich über die B171 und die B2, Grenzübertritt nach Bayern bei Scharnitz nach Garmisch-Partenkirchen.',
    whyBook: [
      'Ein Fahrzeug für die gesamte grenzüberschreitende Fahrt, inklusive deutscher Grenze',
      'Beliebt für Zugspitze-Tagesausflüge und Wintersportgäste',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'innsbruck-airport-to-bolzano',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Bozen',
    distance: '~210 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription: 'Südlich über die A13 Brennerautobahn, Österreichs wichtigste Route nach Italien, über den Brennerpass nach Südtirol.',
    whyBook: [
      'Die Überquerung des Brennerpasses und die italienische Vignette sind im Festpreis inbegriffen',
      'Direkt ab Ankunft, ohne Zugumstieg am Bahnhof Bozen',
      'Komfortabel für eine landschaftliche Ankunft in den Dolomiten',
    ],
    crossBorder: true,
  },
  {
    slug: 'graz-airport-to-vienna',
    from: 'Flughafen Graz (GRZ)',
    to: 'Wien',
    distance: '~205 km',
    driveTime: '~2 Std. 15 Min.',
    routeDescription: 'Nördlich über die A2 Südautobahn, durch die Steiermark und Niederösterreich direkt nach Wien.',
    whyBook: [
      'Direkter Transfer für Geschäftsreisende mit Termin oder Hotel in Wien',
      'Kein Zugwechsel oder Bahnhofstransfer mit Gepäck',
      'Festpreis vor der Fahrt vereinbart, inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'graz-airport-to-maribor',
    from: 'Flughafen Graz (GRZ)',
    to: 'Maribor',
    distance: '~100 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A9 Pyhrn Autobahn und die A2 zum Grenzübergang Spielfeld, weiter nach Slowenien nach Maribor.',
    whyBook: [
      'Direkter grenzüberschreitender Ankunftstransfer in Sloweniens Weinregion',
      'Keine separate Buchung eines grenzüberschreitenden Taxis nötig',
      'Festpreis inklusive slowenischer Vignette',
    ],
    crossBorder: true,
  },
  {
    slug: 'graz-airport-to-klagenfurt',
    from: 'Flughafen Graz (GRZ)',
    to: 'Klagenfurt',
    distance: '~140 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription: 'Westlich über die A2 Südautobahn, eine direkte regionsübergreifende Fahrt in die Kärntner Seenlandschaft.',
    whyBook: [
      'Nützlich, wenn eine Flugverbindung zwischen Österreichs zwei südlichen Flughäfen unpraktisch ist',
      'Direkt zu Hotels in Klagenfurt oder ans Wörthersee-Ufer',
      'Festpreis unabhängig vom Verkehr',
    ],
  },
  {
    slug: 'linz-airport-to-salzburg',
    from: 'Flughafen Linz (LNZ)',
    to: 'Salzburg',
    distance: '~130 km',
    driveTime: '~1 Std. 25 Min.',
    routeDescription: 'Westlich auf der A1 Westautobahn, derselben Straßenverbindung wie zwischen den beiden Städten.',
    whyBook: [
      'Regionsübergreifende Geschäftsreise ohne Zugumstieg am Linzer Hauptbahnhof',
      'Direkt zu Hotels oder in die Altstadt von Salzburg',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'linz-airport-to-vienna',
    from: 'Flughafen Linz (LNZ)',
    to: 'Wien',
    distance: '~185 km',
    driveTime: '~1 Std. 45 Min. – 2 Std.',
    routeDescription: 'Östlich auf der A1 Westautobahn entlang des Donaukorridors nach Wien.',
    whyBook: [
      'Geschäftsreiseverbindung in die Hauptstadt ohne Zugumstieg',
      'Direkt zu Hotels in Wien oder weiter zum Flughafen Wien',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'linz-airport-to-passau',
    from: 'Flughafen Linz (LNZ)',
    to: 'Passau',
    distance: '~85 km',
    driveTime: '~1 Std.',
    routeDescription: 'Nördlich über die A7 Mühlkreisautobahn, Grenzübertritt nach Bayern bei Wegscheid nach Passau.',
    whyBook: [
      'Kurzer grenzüberschreitender Transfer für Donau-Flusskreuzfahrtpassagiere in Passau',
      'Ein Fahrzeug für die gesamte grenzüberschreitende Fahrt',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'linz-airport-to-prague',
    from: 'Flughafen Linz (LNZ)',
    to: 'Prag',
    distance: '~215 km',
    driveTime: '~2 Std. 30 Min.',
    routeDescription: 'Nördlich über die A7 Mühlkreisautobahn, Grenzübertritt bei Wullowitz nach Tschechien auf der D3 Richtung Prag.',
    whyBook: [
      'Direkte Hauptstadtverbindung für Ankünfte am Flughafen Linz',
      'Ein lizenzierter Fahrer für die gesamte grenzüberschreitende Fahrt',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'klagenfurt-airport-to-ljubljana',
    from: 'Flughafen Klagenfurt (KLU)',
    to: 'Ljubljana',
    distance: '~85 km',
    driveTime: '~1 Std.',
    routeDescription: 'Südlich über die B91 Loiblpass-Straße oder die A11 durch den Karawankentunnel direkt nach Slowenien.',
    whyBook: [
      'Direkte Hauptstadtverbindung für KLU-Ankünfte, inklusive Tunnelmaut',
      'Ein Fahrzeug für die gesamte grenzüberschreitende Fahrt',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'klagenfurt-airport-to-bad-kleinkirchheim',
    from: 'Flughafen Klagenfurt (KLU)',
    to: 'Bad Kleinkirchheim',
    distance: '~55 km',
    driveTime: '~55 Min.',
    routeDescription: 'Westlich über die A2 und die B93 durch die Nockberge nach Bad Kleinkirchheim.',
    whyBook: [
      'Direkter Ankunftstransfer zum Spa- und Skiresort, der Heimat von Franz Klammer',
      'Keine regionale Busverbindung ab Klagenfurt oder Villach nötig',
      'Festpreis inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'innsbruck-airport-to-alpbach',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Alpbach',
    distance: '~60 km',
    driveTime: '~1 Std.',
    routeDescription: 'Östlich auf der A12 Inntalautobahn, Ausfahrt auf die B171/L5 ins Alpbachtal.',
    whyBook: [
      'Direkt zu einem der meistfotografierten Alpendörfer Österreichs',
      'Auch beliebt für Konferenz- und Firmenreisen',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'innsbruck-airport-to-obergurgl',
    from: 'Flughafen Innsbruck (INN)',
    to: 'Obergurgl-Hochgurgl',
    distance: '~90 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription: 'Westlich über die A12 bis zur Ausfahrt Ötztal, dann südlich auf der B186 Ötztaler Straße zum Talschluss.',
    whyBook: [
      'Direkt zur höchstgelegenen Pfarrgemeinde Österreichs, ohne Regionalbus das Ötztal hinauf',
      'Zuverlässige Schneelage bis weit ins Frühjahr',
      'Fester, transparenter Preis inklusive Autobahnmaut',
    ],
  },
  {
    slug: 'salzburg-airport-to-flachau',
    from: 'Flughafen Salzburg (SZG)',
    to: 'Flachau',
    distance: '~80 km',
    driveTime: '~45 Min.',
    routeDescription: 'Südlich über die A10 Tauernautobahn, das nächstgelegene Ski-Amadé-Dorf zum Flughafen Salzburg.',
    whyBook: [
      'Ein kurzer Flughafen-zu-Resort-Weg im Ski-Amadé-Netzwerk',
      'Beliebt für Wochenendausflüge ab Salzburg, Wien und München',
      'Festpreis inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'graz-airport-to-schladming',
    from: 'Flughafen Graz (GRZ)',
    to: 'Schladming',
    distance: '~100 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription: 'Westlich über die A9 Pyhrn Autobahn durchs Gesäuse ins Ennstal nach Schladming.',
    whyBook: [
      'Direkte Route zum steirischen Vorzeige-Skiort ab dem eigenen Landesflughafen',
      'Kein Shuttlebus- oder Regionalzugumstieg mit Skiausrüstung',
      'Festpreis inklusive Autobahnmaut',
    ],
  },
  {
    slug: 'klagenfurt-airport-to-nassfeld',
    from: 'Flughafen Klagenfurt (KLU)',
    to: 'Nassfeld',
    distance: '~65 km',
    driveTime: '~1 Std.',
    routeDescription: 'Westlich über die A2 und die B111 Gailtal Straße ins Gailtal nach Nassfeld.',
    whyBook: [
      'Direkt zu Österreichs sonnigstem, südexponiertem Skigebiet',
      'Praktisch für Gäste, die Skifahren mit einem Abstecher über die nahe italienische Grenze verbinden',
      'Festpreis inklusive Flugverfolgung',
    ],
  },
  {
    slug: 'klagenfurt-airport-to-turracher-hoehe',
    from: 'Flughafen Klagenfurt (KLU)',
    to: 'Turracher Höhe',
    distance: '~75 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Nordwestlich über die B93 und die B95 hinauf zum Passort Turracher Höhe.',
    whyBook: [
      'Direkt zum Zwei-Seen-Passresort an der Grenze zwischen Kärnten und der Steiermark',
      'Winterfeste Fahrzeuge für die Bergpassanfahrt',
      'Fester, transparenter Preis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'vienna-to-eisenstadt',
    from: 'Wien',
    to: 'Eisenstadt',
    distance: '~60 km',
    driveTime: '~50 Min.',
    routeDescription: 'Südlich über die A2 und die A3 Süd Ost Autobahn ins Burgenländer Weinland und in die Landeshauptstadt.',
    whyBook: [
      'Direkter Stadt-zu-Stadt-Transfer für Weintourismus oder Geschäftsreisen',
      'Keine regionale Busverbindung nötig',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'graz-to-klagenfurt',
    from: 'Graz',
    to: 'Klagenfurt',
    distance: '~140 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription: 'Westlich über die A2 Südautobahn zwischen Österreichs zweit- und sechstgrößter Stadt.',
    whyBook: [
      'Regionsübergreifende Geschäfts- und Freizeitreisen ohne Regionalzugumstieg',
      'Direkt zu Hotels in Klagenfurt oder ans Wörthersee-Ufer',
      'Festpreis unabhängig vom Verkehr',
    ],
  },
  {
    slug: 'graz-to-schladming',
    from: 'Graz',
    to: 'Schladming',
    distance: '~100 km',
    driveTime: '~1 Std. 30 Min.',
    routeDescription: 'Westlich über die A9 Pyhrn Autobahn durchs Gesäuse ins Ennstal.',
    whyBook: [
      'Beliebte Wochenendroute in der Skisaison ab der steirischen Landeshauptstadt',
      'Kein Bahnhofsumstieg mit Skiausrüstung',
      'Festpreis inklusive Autobahnmaut',
    ],
  },
  {
    slug: 'salzburg-to-bad-gastein',
    from: 'Salzburg',
    to: 'Bad Gastein',
    distance: '~95 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A10 Tauernautobahn und die B167 das Gasteinertal hinauf, derselbe Korridor wie ab dem Flughafen Salzburg.',
    whyBook: [
      'Direkter Stadt-zu-Resort-Transfer zum historischen Kurort',
      'Komfortabel für Wintersport ebenso wie für Wellnessreisen im Sommer',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'salzburg-to-filzmoos',
    from: 'Salzburg',
    to: 'Filzmoos',
    distance: '~75 km',
    driveTime: '~50 Min.',
    routeDescription:
      'Südlich über die A10 Tauernautobahn, Ausfahrt Eben im Pongau, dann rund 11 km weiter ins Ennstal — derselbe Korridor wie ab dem Flughafen Salzburg.',
    whyBook: [
      'Direkter Stadt-zu-Resort-Transfer ohne Umsteigen',
      'Komfortabel für Familien und Gruppen mit Skiausrüstung',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'salzburg-to-st-wolfgang',
    from: 'Salzburg',
    to: 'St. Wolfgang',
    distance: '~50 km',
    driveTime: '~50 Min.',
    routeDescription: 'Östlich über die Wolfgangsee-Straße (B158) durch Fuschl in das Seedorf St. Wolfgang.',
    whyBook: [
      'Beliebte Salzkammergut-Tagesausflugs- und Transferroute',
      'Direkt zu Hotels am Seeufer, kein regionaler Busfahrplan',
      'Flexible Abfahrtszeiten',
    ],
  },
  {
    slug: 'klagenfurt-to-velden',
    from: 'Klagenfurt',
    to: 'Velden am Wörthersee',
    distance: '~20 km',
    driveTime: '~20 Min.',
    routeDescription: 'Westlich über die B83, eine kurze Fahrt am Wörthersee-Ufer entlang nach Velden.',
    whyBook: [
      'Kurzer, häufig gebuchter Transfer zu einem der bekanntesten Seeresorts Österreichs',
      'Direkt zu Hotels am Seeufer und ins Casinoviertel',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'villach-to-lienz',
    from: 'Villach',
    to: 'Lienz',
    distance: '~100 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Westlich über die B100 Drautal Straße, eine landschaftlich reizvolle Talroute durch Osttirol nach Lienz.',
    whyBook: [
      'Direkter regionsübergreifender Transfer zwischen Kärnten und Osttirol',
      'Komfortabel für die landschaftliche Fahrt durchs Drautal',
      'Festpreis vor Fahrtantritt vereinbart',
    ],
  },
  {
    slug: 'wels-to-salzburg',
    from: 'Wels',
    to: 'Salzburg',
    distance: '~100 km',
    driveTime: '~1 Std.',
    routeDescription: 'Westlich auf der A1 Westautobahn, derselbe Korridor wie von Linz nach Salzburg.',
    whyBook: [
      'Direkter Geschäftstransfer ohne Zugverbindung über Linz',
      'Festpreis unabhängig vom Verkehr',
      'Komfortabel für Messe- und Konferenzreisen',
    ],
  },
  {
    slug: 'wels-to-linz',
    from: 'Wels',
    to: 'Linz',
    distance: '~30 km',
    driveTime: '~25 Min.',
    routeDescription: 'Östlich auf der A25 Welser Autobahn, eine kurze direkte Fahrt zwischen den beiden oberösterreichischen Städten.',
    whyBook: [
      'Kurzer, häufig gebuchter Geschäfts- und Messetransfer',
      'Kein Regionalzugumstieg nötig',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'graz-to-maribor',
    from: 'Graz',
    to: 'Maribor',
    distance: '~100 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Südlich über die A9 Pyhrn Autobahn und die A2 zum Grenzübergang Spielfeld, weiter nach Slowenien nach Maribor.',
    whyBook: [
      'Kurze grenzüberschreitende Geschäftsfahrt in Sloweniens zweitgrößte Stadt',
      'Ein Fahrzeug für die gesamte Fahrt, inklusive Grenzübertritt',
      'Festpreis inklusive slowenischer Vignette',
    ],
    crossBorder: true,
  },
  {
    slug: 'linz-to-ceske-budejovice',
    from: 'Linz',
    to: 'České Budějovice',
    distance: '~145 km',
    driveTime: '~1 Std. 45 Min.',
    routeDescription: 'Nördlich über die A7 Mühlkreisautobahn, Grenzübertritt bei Wullowitz nach Tschechien auf der D3.',
    whyBook: [
      'Regionale grenzüberschreitende Geschäftsverbindung nach Südböhmen',
      'Ein lizenzierter Fahrer für die gesamte Fahrt',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'bregenz-to-st-gallen',
    from: 'Bregenz',
    to: 'St. Gallen',
    distance: '~55 km',
    driveTime: '~50 Min.',
    routeDescription: 'Westlich über die Schweizer Grenze bei Rheineck, eine kurze Fahrt nach St. Gallen.',
    whyBook: [
      'Kurze grenzüberschreitende Geschäftsfahrt in die Ostschweiz',
      'Schweizer Vignette im Festpreis inbegriffen',
      'Keine separate Buchung eines grenzüberschreitenden Taxis nötig',
    ],
    crossBorder: true,
  },
  {
    slug: 'bregenz-to-vaduz',
    from: 'Bregenz',
    to: 'Vaduz',
    distance: '~60 km',
    driveTime: '~50 Min.',
    routeDescription: 'Südlich durchs Rheintal, Grenzübertritt nach Liechtenstein bei Feldkirch nach Vaduz.',
    whyBook: [
      'Direkter grenzüberschreitender Transfer für Liechtensteins Finanzsektor',
      'Ein Fahrzeug für die gesamte Fahrt, inklusive zweier Grenzübertritte',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'eisenstadt-to-sopron',
    from: 'Eisenstadt',
    to: 'Sopron',
    distance: '~25 km',
    driveTime: '~25 Min.',
    routeDescription: 'Ein kurzer grenzüberschreitender Sprung über die B84, Grenzübertritt nach Ungarn bei Klingenbach nach Sopron.',
    whyBook: [
      'Sehr kurze grenzüberschreitende Fahrt zwischen zwei Weinregion-Hauptstädten',
      'Keine separate Buchung eines grenzüberschreitenden Taxis nötig',
      'Festpreis inklusive Grenzübertritt',
    ],
    crossBorder: true,
  },
  {
    slug: 'wiener-neustadt-to-sopron',
    from: 'Wiener Neustadt',
    to: 'Sopron',
    distance: '~45 km',
    driveTime: '~40 Min.',
    routeDescription: 'Südöstlich über die S4 und die B61, Grenzübertritt nach Ungarn bei Deutschkreutz nach Sopron.',
    whyBook: [
      'Kurze grenzüberschreitende Geschäfts- oder Wellnessfahrt',
      'Ein Fahrzeug für die gesamte Fahrt, inklusive Grenzübertritt',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'feldkirch-to-vaduz',
    from: 'Feldkirch',
    to: 'Vaduz',
    distance: '~20 km',
    driveTime: '~20 Min.',
    routeDescription: 'Eine sehr kurze grenzüberschreitende Fahrt durchs Rheintal in Liechtensteins Hauptstadt.',
    whyBook: [
      'Eine sehr kurze grenzüberschreitende Route, ideal für einen Tagesausflug',
      'Beliebt für Liechtensteiner Geschäfts- und Bankreisen',
      'Festpreis inklusive Grenzübertritt',
    ],
    crossBorder: true,
  },
  {
    slug: 'dornbirn-to-zurich',
    from: 'Dornbirn',
    to: 'Zürich',
    distance: '~110 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Westlich über die Schweizer Grenze bei St. Margrethen auf die Schweizer Autobahn A1 nach Zürich.',
    whyBook: [
      'Grenzüberschreitende Geschäftsroute für Vorarlbergs größte Stadt',
      'Schweizer Vignette im Festpreis inbegriffen',
      'Ein Fahrzeug für die gesamte Fahrt',
    ],
    crossBorder: true,
  },
  {
    slug: 'kufstein-to-munich',
    from: 'Kufstein',
    to: 'München',
    distance: '~100 km',
    driveTime: '~1 Std. 15 Min.',
    routeDescription: 'Nördlich über den deutschen A93/A8-Korridor, eine kurze grenzüberschreitende Fahrt von der Tiroler Grenzstadt nach München.',
    whyBook: [
      'Kurze grenzüberschreitende Geschäfts- oder Freizeitroute nach Bayern',
      'Ein Fahrzeug für die gesamte Fahrt, inklusive deutscher Grenze',
      'Festpreis im Voraus vereinbart',
    ],
    crossBorder: true,
  },
  {
    slug: 'villach-to-bad-kleinkirchheim',
    from: 'Villach',
    to: 'Bad Kleinkirchheim',
    distance: '~35 km',
    driveTime: '~40 Min.',
    routeDescription: 'Nördlich über die B93 durch die Nockberge nach Bad Kleinkirchheim.',
    whyBook: [
      'Kurzer Resort-Transfer zum Spa- und Skiort, der Heimat von Franz Klammer',
      'Direkt zu Ski-in/Ski-out-Hotels',
      'Festpreis, Tür zu Tür',
    ],
  },
  {
    slug: 'zell-am-see-to-bad-gastein',
    from: 'Zell am See',
    to: 'Bad Gastein',
    distance: '~35 km',
    driveTime: '~40 Min.',
    routeDescription: 'Südlich über die B311 und die B167 durchs Gasteinertal nach Bad Gastein.',
    whyBook: [
      'Kurzer Resort-zu-Resort-Transfer für Gäste, die einen Aufenthalt auf zwei Salzburger Täler aufteilen',
      'Keine regionale Busverbindung nötig',
      'Festpreis, Tür zu Tür',
    ],
  },
]
