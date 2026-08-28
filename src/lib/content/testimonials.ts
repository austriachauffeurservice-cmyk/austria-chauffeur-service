// Illustrative service scenarios, not attributed customer reviews — do not
// add names or star ratings here. See /reviews page and homepage "What to
// Expect" section, which render this as example copy, not verified reviews.
export type Testimonial = {
  quote: string
  context: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "A driver meeting arrivals with a name board, assisting with heavy ski bags, and a smooth transfer straight to the resort in Lech.",
    context: 'Airport to Ski Resort Transfer',
  },
  {
    quote:
      'An executive transfer for business guests from Vienna to Munich — on time, in an immaculate Mercedes V-Class, with clear communication throughout.',
    context: 'Corporate Route (Vienna to Munich)',
  },
  {
    quote:
      'A cross-border transfer from Vienna to Prague with a professional, English-speaking chauffeur and a calm, comfortable journey.',
    context: 'Cross-Border Route (Vienna to Prague)',
  },
  {
    quote:
      'A wedding party moved between ceremony and reception across three vehicles on a tight schedule — every car on time, every driver in a suit, nobody left waiting.',
    context: 'Wedding Transport, Salzburg',
  },
  {
    quote:
      "A flight delayed by almost two hours, with no need to contact anyone — the driver adjusts and is simply there on arrival.",
    context: 'Vienna Airport Pickup',
  },
  {
    quote:
      'A Sprinter booked for a 12-person company offsite from Graz to a hotel outside the city — luggage and equipment handled without fuss, at the price quoted.',
    context: 'Group Corporate Transfer, Graz',
  },
  {
    quote:
      "Traveling with two young kids and a stroller, with a child seat ready and help loading everything without rushing.",
    context: 'Family Transfer, Vienna to Salzburg',
  },
  {
    quote:
      'A same-week booking for a client visit, with a confirmed quote back within hours and a driver on time to the minute.',
    context: 'Hourly Corporate Hire, Vienna',
  },
]
