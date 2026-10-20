/**
 * All copy for this template lives here. For a client mockup, edit this
 * file and the brand tokens in src/app/globals.css.
 */
export const siteConfig = {
  name: "Evergreen Plumbing",
  mark: "E",
  tagline: "Honest plumbing, same-day service.",
  description:
    "Family-owned plumbing company serving Austin for 18 years. Licensed, insured and upfront about pricing.",
  url: "https://tpl-local-business.vercel.app",
  legalName: "Evergreen Plumbing LLC",

  phone: "(512) 555-0142",
  phoneHref: "tel:+15125550142",
  email: "hello@evergreenplumbing.example",
  address: "2400 S Lamar Blvd, Austin, TX 78704",
  serviceArea: "Austin, Round Rock, Cedar Park, Pflugerville",

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Call now", href: "tel:+15125550142" },

  hero: {
    badge: "Open today · 7am – 7pm",
    title: "Plumbers who show up on time and tell you the price first.",
    description:
      "From leaking faucets to full repipes, our licensed team fixes it right the first time. Free estimates, no overtime fees, and a 2-year workmanship guarantee.",
    highlights: ["Licensed & insured", "Same-day appointments", "Upfront pricing", "2-year guarantee"],
  },

  services: {
    eyebrow: "What we do",
    title: "Residential & commercial plumbing",
    description: "Every job starts with a clear quote. No surprises on the invoice.",
    items: [
      {
        title: "Emergency repairs",
        description: "Burst pipes, major leaks and backed-up drains — we're on call 24/7.",
        price: "From $129",
      },
      {
        title: "Water heaters",
        description: "Repair, replacement and tankless upgrades for every major brand.",
        price: "From $249",
      },
      {
        title: "Drain cleaning",
        description: "Camera inspection and hydro-jetting that clears the toughest clogs.",
        price: "From $99",
      },
      {
        title: "Bathroom & kitchen",
        description: "Fixture installs, remodels and gas line work done to code.",
        price: "Quote",
      },
      {
        title: "Leak detection",
        description: "Non-invasive tech finds slab and wall leaks before they cost you.",
        price: "From $179",
      },
      {
        title: "Maintenance plans",
        description: "Annual inspections and priority scheduling for peace of mind.",
        price: "$19/mo",
      },
    ],
  },

  about: {
    eyebrow: "About us",
    title: "Eighteen years. Thousands of happy homes.",
    paragraphs: [
      "Evergreen started in 2008 with one van and a promise: treat every home like it's our own. Today we're a team of twelve licensed plumbers, but the promise hasn't changed.",
      "We're locally owned, community-focused, and proud of a 4.9-star average across more than 900 reviews.",
    ],
    stats: [
      { value: "18+", label: "Years in business" },
      { value: "12", label: "Licensed plumbers" },
      { value: "900+", label: "Five-star reviews" },
      { value: "2 yr", label: "Workmanship guarantee" },
    ],
  },

  hours: [
    { day: "Monday – Friday", time: "7:00 am – 7:00 pm" },
    { day: "Saturday", time: "8:00 am – 4:00 pm" },
    { day: "Sunday", time: "Emergency only" },
  ],

  reviews: {
    eyebrow: "Reviews",
    title: "What neighbours are saying",
    items: [
      {
        quote:
          "Called at 8am with a leaking water heater, had a new one installed by 2pm. Price matched the quote exactly.",
        name: "Jordan T.",
        location: "South Austin",
        rating: 5,
      },
      {
        quote:
          "Second time using Evergreen. Clean, polite, and explained everything before starting. Will not call anyone else.",
        name: "Priya R.",
        location: "Round Rock",
        rating: 5,
      },
      {
        quote:
          "They found a slab leak two other companies missed. Saved us from a much bigger repair down the line.",
        name: "Marcus & Lena D.",
        location: "Cedar Park",
        rating: 5,
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Get a free estimate",
    description:
      "Tell us what's going on and we'll get back to you within the hour during business hours.",
    serviceOptions: ["Emergency repair", "Water heater", "Drain cleaning", "Remodel", "Other"],
  },

  footer: {
    tagline: "Licensed, insured and local since 2008. TX License #M-00000.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Emergency repairs", href: "#services" },
          { label: "Water heaters", href: "#services" },
          { label: "Drain cleaning", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Reviews", href: "#reviews" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
