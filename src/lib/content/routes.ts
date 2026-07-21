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
    from: 'Vienna Airport (VIE)',
    to: 'Salzburg',
    distance: '~300km',
    driveTime: '~2h 45m – 3h',
    routeDescription:
      'The route runs west on the A1 West Autobahn, Austria\'s main east-west corridor, passing Linz before continuing to Salzburg.',
    whyBook: [
      'Avoids a connecting train or a second flight for a same-day arrival',
      'One flat rate regardless of traffic or a delayed landing',
      'Direct to your Salzburg hotel or the Altstadt, no station transfer',
    ],
  },
  {
    slug: 'vienna-airport-to-graz',
    from: 'Vienna Airport (VIE)',
    to: 'Graz',
    distance: '~200km',
    driveTime: '~2h 15m',
    routeDescription:
      'The route follows the A2 Süd Autobahn south through Lower Austria and Styria directly into Graz.',
    whyBook: [
      'One of the more direct airport-to-city runs in Austria',
      'Useful when Graz Airport (GRZ) doesn\'t have a convenient connection from your origin',
      'Fixed price with flight tracking included',
    ],
  },
  {
    slug: 'vienna-to-salzburg',
    from: 'Vienna',
    to: 'Salzburg',
    distance: '~295km',
    driveTime: '~2h 45m',
    routeDescription:
      'A straight run west on the A1 West Autobahn, the same corridor used for the airport route but starting from central Vienna.',
    whyBook: [
      'Faster door-to-door than the train once you factor in getting to and from stations',
      'Room for luggage that doesn\'t suit a train compartment',
      'Depart at the time that works for you, not a fixed timetable',
    ],
  },
  {
    slug: 'vienna-to-graz',
    from: 'Vienna',
    to: 'Graz',
    distance: '~195km',
    driveTime: '~2h',
    routeDescription: 'South on the A2 Süd Autobahn, one of the more scenic Autobahn routes in Austria as it climbs through Lower Austria into Styria.',
    whyBook: [
      'Direct city-center to city-center in about two hours',
      'A common route for business trips between Austria\'s two largest cities',
      'No need to switch to regional transport at either end',
    ],
  },
  {
    slug: 'salzburg-to-innsbruck',
    from: 'Salzburg',
    to: 'Innsbruck',
    distance: '~140–200km',
    driveTime: '~1h 30m – 2h 15m',
    routeDescription:
      'The fastest route briefly crosses into Bavaria on the German A8 Autobahn before re-entering Austria near Kufstein onto the A12 — a shortcut many drivers use. A fully domestic alternative runs via the B178/A12 through Kitzbühel and Wörgl, slightly longer but avoiding the border crossing.',
    whyBook: [
      'We handle the German-Austrian border crossing as part of the fixed price — no separate booking needed',
      'One vehicle the whole way, whichever route is faster on the day',
      'Popular for connecting two of Austria\'s most-visited cities without a flight',
    ],
    crossBorder: true,
  },
  {
    slug: 'linz-to-vienna',
    from: 'Linz',
    to: 'Vienna',
    distance: '~185km',
    driveTime: '~1h 45m – 2h',
    routeDescription: 'East on the A1 West Autobahn, the same corridor used for Vienna–Salzburg traffic, running along the Danube valley for part of the way.',
    whyBook: [
      'A common route for business travel between Upper Austria and the capital',
      'Direct to Vienna Airport as an add-on if you\'re connecting to a flight',
      'Fixed price agreed before you travel',
    ],
  },
  {
    slug: 'vienna-to-bratislava',
    from: 'Vienna',
    to: 'Bratislava',
    distance: '~80km',
    driveTime: '~1h',
    routeDescription:
      'One of the shortest cross-border capital-to-capital drives in Europe, via the A6 motorway through Kittsee to the Slovak border.',
    whyBook: [
      'Fast enough for a same-day round trip',
      'No vehicle switch or paperwork at the border — it\'s handled as part of the service',
      'Popular for business meetings, day trips, and Vienna Airport connections',
    ],
    crossBorder: true,
  },
  {
    slug: 'vienna-to-budapest',
    from: 'Vienna',
    to: 'Budapest',
    distance: '~245km',
    driveTime: '~2h 30m – 3h',
    routeDescription:
      'Southeast via the A4 Autobahn to the Hungarian border at Hegyeshalom, continuing on the M15/M1 into Budapest.',
    whyBook: [
      'Direct alternative to a connecting flight or train transfer',
      'One licensed driver the whole way, including the border crossing',
      'Comfortable for business trips or weekend travel between the two capitals',
    ],
    crossBorder: true,
  },
  {
    slug: 'salzburg-to-munich',
    from: 'Salzburg',
    to: 'Munich',
    distance: '~145km',
    driveTime: '~1h 30m',
    routeDescription: 'A short cross-border run north on the German A8 Autobahn — one of the most frequently booked international routes from Salzburg.',
    whyBook: [
      'Popular for connecting to Munich Airport (MUC) for onward international flights',
      'No need to book a separate cross-border taxi or transfer service',
      'Fixed price agreed in advance, regardless of border traffic',
    ],
    crossBorder: true,
  },
  {
    slug: 'innsbruck-airport-to-kitzbuehel',
    from: 'Innsbruck Airport (INN)',
    to: 'Kitzbühel',
    distance: '~90km',
    driveTime: '~1h',
    routeDescription: 'East on the A12 Inntal Autobahn before turning onto the B170/B161 into Kitzbühel — the most direct airport-to-resort route in the region.',
    whyBook: [
      'Winter-ready vehicles with space for skis and boards',
      'Direct to your chalet or hotel, no shuttle bus transfer',
      'The shortest airport-to-resort drive time of any major Tyrolean ski town',
    ],
  },
]
