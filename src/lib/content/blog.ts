export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  tags: string[]
  blocks: BlogBlock[]
}

export function findRelatedPosts(names: string[], limit = 2): BlogPost[] {
  return blogPosts
    .filter((post) => post.tags.some((tag) => names.includes(tag)))
    .slice(0, limit)
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'vienna-airport-transfer-guide',
    title: 'Vienna Airport Transfer: What to Actually Expect',
    excerpt:
      'How a private chauffeur pickup at Vienna International Airport works in practice — flight tracking, meet & greet, pricing, and which vehicle to pick.',
    publishedAt: '2026-05-04',
    readingTime: '5 min read',
    tags: ['Vienna', 'Airport Transfers'],
    blocks: [
      {
        type: 'paragraph',
        text: "Landing at Vienna International Airport (VIE) after a long flight, the last thing you want is to figure out transport on the spot. A private chauffeur transfer removes that decision entirely — the trip is arranged before you land, and the only thing you need to do at the airport is walk to arrivals.",
      },
      { type: 'heading', text: 'What "meet & greet" actually looks like' },
      {
        type: 'paragraph',
        text: "Your flight number is attached to the booking, so the driver tracks it in real time. If the flight lands early or is delayed, the pickup time adjusts automatically — there's no extra fee for a late arrival, and no risk of the driver leaving because your original landing time has passed. The driver waits in the arrivals hall, typically with a name sign, and helps with luggage from there.",
      },
      { type: 'heading', text: 'Fixed price vs. a taxi meter' },
      {
        type: 'paragraph',
        text: 'A chauffeur booking is priced and confirmed by email before the trip, not metered. That matters most on longer or cross-border routes, where a meter can run up quickly in traffic — with a fixed price, the number you agreed to is the number you pay, regardless of how the drive actually goes.',
      },
      { type: 'heading', text: 'Choosing the right vehicle' },
      {
        type: 'list',
        items: [
          'Business Sedan — 1–3 passengers, 2–3 bags, the default choice for a solo traveler or couple',
          'Luxury Sedan — same capacity, a step up for client pickups or first impressions',
          'Executive Van — up to 7 passengers, better for families or anyone with ski bags, golf clubs, or extra luggage',
          'Minibus — up to 16 passengers, for teams and larger groups arriving together',
        ],
      },
      { type: 'heading', text: 'When to book' },
      {
        type: 'paragraph',
        text: "24 hours ahead is usually enough for a standard airport pickup. If you're arriving very early in the morning, during a major conference week in Vienna, or need a van/minibus, book with a bit more lead time — larger vehicles have fewer of them in the fleet, so they're the first to fill up.",
      },
    ],
  },
  {
    slug: 'vienna-to-bratislava-guide',
    title: 'Vienna to Bratislava: Two Capitals, One Short Drive',
    excerpt:
      "Vienna and Bratislava are closer than most people realize — under an hour by road. Here's what the crossing actually involves.",
    publishedAt: '2026-05-18',
    readingTime: '4 min read',
    tags: ['Cross-Border', 'Slovakia'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Vienna and Bratislava are the two closest capital cities in the world after Rome and Vatican City — around 55 km apart via the A6 motorway. In normal traffic, that is comfortably under an hour door to door, which is why the route is used constantly for day trips, budget flights out of Bratislava Airport, and same-day business meetings.',
      },
      { type: 'heading', text: 'Do you need your passport?' },
      {
        type: 'paragraph',
        text: 'Both Austria and Slovakia are part of the Schengen Area, so there are no routine passport checks at the border — you cross without stopping. Still, carry valid ID; Schengen countries retain the right to reintroduce spot checks temporarily, and you want to be covered if that happens to be the day.',
      },
      { type: 'heading', text: 'Chauffeur vs. train vs. driving yourself' },
      {
        type: 'list',
        items: [
          'Chauffeur — door to door, no parking to find in either city, fixed price agreed in advance',
          'Train — frequent connections between Wien Hauptbahnhof and Bratislava hlavná stanica, roughly an hour, but you still need transport at both ends',
          'Self-drive — cheapest per kilometer if you already have a rental, but adds toll vignette requirements and city-center parking on both sides',
        ],
      },
      { type: 'heading', text: 'Why people actually make this trip' },
      {
        type: 'paragraph',
        text: "Bratislava's airport (BTS) is a common budget-carrier alternative to Vienna, so travelers based in Vienna sometimes fly out of Bratislava for a cheaper fare and just need the short transfer to get there. It's also common for consultants and sales teams who split a working day between the two cities, and for weekend visitors doing both capitals in a single trip.",
      },
    ],
  },
  {
    slug: 'salzburg-to-munich-transfer-options',
    title: 'Salzburg to Munich: Comparing Your Transfer Options',
    excerpt:
      'Private chauffeur, train, or rental car — an honest comparison for the Salzburg–Munich route, including realistic drive times.',
    publishedAt: '2026-06-02',
    readingTime: '5 min read',
    tags: ['Cross-Border', 'Germany', 'Salzburg'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Salzburg to Munich is about 140 km via the A8 motorway — roughly 90 minutes without heavy traffic. It is one of the most frequently traveled cross-border routes out of Austria, mostly because Munich Airport (MUC) has far more long-haul connections than Salzburg Airport, so travelers flying internationally often start or end their trip in Munich anyway.',
      },
      { type: 'heading', text: 'The three realistic options' },
      {
        type: 'list',
        items: [
          'Private chauffeur — one vehicle, door to door, no transfers; the practical choice with luggage, children, or an early flight',
          'Train (Railjet/EC) — direct connections roughly every hour, around 1.5–2 hours city center to city center, but you still need to get to and from each station',
          'Rental car — flexible if you want to keep the car in Germany, but adds one-way rental fees and a car to park in central Munich',
        ],
      },
      { type: 'heading', text: 'The border crossing itself' },
      {
        type: 'paragraph',
        text: 'Austria and Germany are both in the Schengen Area, so the crossing is open — no stop, no checkpoint in normal circumstances. The only genuine friction point is traffic on the A8 near the border on peak travel weekends, which is worth building a small buffer into your schedule for.',
      },
      { type: 'heading', text: 'When a chauffeur is worth it' },
      {
        type: 'paragraph',
        text: 'For a solo traveler with one bag, the train is perfectly reasonable. For a family, a group with ski or golf equipment, or anyone catching an early-morning flight out of Munich, a private transfer removes the two connection points (getting to the station, then from the station to the airport) that make the train version slower than it looks on paper.',
      },
    ],
  },
  {
    slug: 'how-far-in-advance-book-chauffeur',
    title: 'How Far in Advance Should You Book a Chauffeur in Austria?',
    excerpt:
      'A practical breakdown of booking lead times for domestic transfers, cross-border trips, and peak travel periods.',
    publishedAt: '2026-06-15',
    readingTime: '4 min read',
    tags: ['Booking Tips'],
    blocks: [
      {
        type: 'paragraph',
        text: "There's no single answer here — it depends on the route, the vehicle, and the time of year. Below is a realistic guide rather than a generic \"book early\" recommendation.",
      },
      { type: 'heading', text: 'Standard domestic trips' },
      {
        type: 'paragraph',
        text: 'For a sedan transfer within Austria — an airport pickup or a city-to-city trip — 24 hours notice is usually enough. Sedans are the largest part of the fleet, so availability is rarely the bottleneck.',
      },
      { type: 'heading', text: 'Cross-border transfers' },
      {
        type: 'paragraph',
        text: 'Trips to Germany, Slovakia, Hungary, and the other neighboring countries work the same way operationally, but it helps to book with a bit more lead time — ideally a few days — especially if you need a specific vehicle type or a very early departure.',
      },
      { type: 'heading', text: 'Periods to plan around' },
      {
        type: 'list',
        items: [
          'Ski season weekends (December–March) — resort changeover days in Tyrol and Salzburgerland are the busiest days for vans and minibuses',
          'Salzburg Festival (late July–August) — hotel and transfer demand both spike in Salzburg',
          'Major Vienna conference weeks — corporate bookings with multiple pickups can fill vehicles fast',
        ],
      },
      { type: 'heading', text: 'Last-minute requests' },
      {
        type: 'paragraph',
        text: "If you're booking on short notice outside of a peak period, it's still worth submitting the request — availability is confirmed by email, and a same-day sedan transfer is often possible even without 24 hours' notice.",
      },
    ],
  },
  {
    slug: 'alpine-ski-transfer-guide',
    title: "Alpine & Ski Transfers: Getting to Tyrol's Resorts in Comfort",
    excerpt:
      'What a winter transfer to the Austrian Alps actually involves — routes, vehicles, and the ski-bag problem nobody plans for.',
    publishedAt: '2026-06-28',
    readingTime: '4 min read',
    tags: ['Ski Transfers', 'Tyrol'],
    blocks: [
      {
        type: 'paragraph',
        text: "Getting from an airport to an Alpine resort is a different trip than a city transfer — narrower roads, winter conditions, and almost always more luggage than the trip out. It's worth planning for those three things specifically.",
      },
      { type: 'heading', text: 'The common routes' },
      {
        type: 'paragraph',
        text: "Innsbruck Airport is the shortest route into most Tyrol resorts, with several within an hour's drive. Salzburg Airport works the same way for Salzburgerland resorts. Munich is also a realistic entry point for Tyrol if flight options there are better, at the cost of a longer transfer across the border.",
      },
      { type: 'heading', text: 'Winter-ready is the standard, not an upgrade' },
      {
        type: 'paragraph',
        text: 'Winter tires and drivers experienced with Alpine roads are the baseline for a resort transfer, not an add-on you have to request. That matters on the smaller access roads into some resorts, which get considerably more challenging in poor conditions than the main motorway approach.',
      },
      { type: 'heading', text: 'The ski-bag problem' },
      {
        type: 'paragraph',
        text: "A sedan that comfortably fits three passengers and city luggage often does not fit three passengers plus ski bags, boot bags, and a helmet each. If your group is traveling with full ski equipment, the Executive Van is usually the right call even for a group that would otherwise fit in a sedan — it's a capacity problem, not a headcount problem.",
      },
      { type: 'heading', text: 'Booking around changeover days' },
      {
        type: 'paragraph',
        text: 'Saturdays during ski season are the busiest transfer days of the week, as one week of guests leaves and the next arrives. If your trip lands on a resort changeover Saturday, book a few days ahead rather than the night before.',
      },
    ],
  },
  {
    slug: 'corporate-chauffeur-travel-austria',
    title: 'Why Businesses Choose Private Chauffeurs for Corporate Travel in Austria',
    excerpt:
      'Reliability, simplified billing, and cross-border flexibility — the practical case for corporate chauffeur accounts.',
    publishedAt: '2026-07-10',
    readingTime: '4 min read',
    tags: ['Corporate Travel'],
    blocks: [
      {
        type: 'paragraph',
        text: "For a single trip, a taxi or rideshare is fine. For a company sending people through Austria regularly — client meetings, conferences, multi-city roadshows — the calculation changes, and most of the reasons come down to reliability rather than comfort.",
      },
      { type: 'heading', text: 'Reliability as a requirement, not a nice-to-have' },
      {
        type: 'paragraph',
        text: 'A missed pickup before a client meeting is a genuinely bad outcome, not just an inconvenience. Automatic flight tracking on airport transfers and a fixed, pre-confirmed price remove two of the most common failure points in business travel — a driver leaving because a flight landed late, or a cost that comes in higher than budgeted.',
      },
      { type: 'heading', text: 'Multi-stop and hourly hire' },
      {
        type: 'paragraph',
        text: 'A day with three meetings across Vienna, or a roadshow stopping in several cities, works better with a vehicle and driver on standby than with separate point-to-point bookings. Hourly hire covers exactly this — the vehicle waits between stops instead of being re-booked each time.',
      },
      { type: 'heading', text: 'Cross-border business trips' },
      {
        type: 'paragraph',
        text: 'The Vienna–Bratislava–Budapest corridor is a common example: three capitals within a few hours of each other by road, all reachable without switching vehicles at a border. For a team covering multiple markets in a short trip, that is usually faster and less disruptive than flying between them.',
      },
      { type: 'heading', text: 'Simplified billing' },
      {
        type: 'paragraph',
        text: 'Every trip is quoted and confirmed by email before it happens, which makes expense reporting straightforward — there is a fixed number attached to each booking rather than a metered fare to reconcile afterward.',
      },
    ],
  },
]
