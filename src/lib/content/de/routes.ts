export type RoutePair = {
  slug: string
  from: string
  to: string
  distance: string
  driveTime: string
  routeDescription: string
  whyBook: string[]
  crossBorder?: boolean
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
      'Eine der kürzesten grenzüberschreitenden Hauptstadt-zu-Hauptstadt-Fahrten Europas, über die A6-Autobahn durch Kittsee bis zur slowakischen Grenze.',
    whyBook: [
      'Schnell genug für eine Rückfahrt am selben Tag',
      'Kein Fahrzeugwechsel oder Papierkram an der Grenze — das übernehmen wir',
      'Beliebt für Geschäftstermine, Tagesausflüge und Anschlüsse an den Flughafen Wien',
    ],
    crossBorder: true,
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
    routeDescription: 'Eine kurze grenzüberschreitende Fahrt nordwärts auf der deutschen A8 — eine der meistgebuchten internationalen Strecken ab Salzburg.',
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
    distance: '~90 km',
    driveTime: '~1 Std.',
    routeDescription: 'Ostwärts auf der A12 Inntalautobahn, dann über die B170/B161 nach Kitzbühel — die direkteste Flughafen-zu-Resort-Strecke der Region.',
    whyBook: [
      'Winterfeste Fahrzeuge mit Platz für Ski und Snowboards',
      'Direkt zu Ihrem Chalet oder Hotel, kein Shuttlebus-Transfer',
      'Die kürzeste Flughafen-zu-Resort-Fahrzeit unter den großen Tiroler Skiorten',
    ],
  },
]
