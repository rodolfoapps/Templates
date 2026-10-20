/**
 * PPC lead-gen lander config.
 *
 * Copy follows the evidence for paid-search landers: one goal, message match
 * with the ad group, 5th–7th-grade reading level, ~300–750 words, proof in
 * the first screen, phone-first on mobile for urgent services.
 *
 * Dynamic text: the strings {service} and {city} are replaced from the URL
 * (?service=Ceiling%20Repair&city=Brandon) with these defaults as fallback.
 */
export const siteConfig = {
  name: "Bayline Drywall",
  mark: "B",
  legalName: "Bayline Drywall LLC",
  url: "https://tpl-ppc-lead-gen.vercel.app",
  description:
    "Tampa drywall repair patched, textured and painted in one visit. Licensed and insured. Free quote in 60 seconds.",

  phone: "(813) 555-0188",
  phoneHref: "tel:+18135550188",
  address: "4210 W Kennedy Blvd, Tampa, FL 33609",
  license: "FL License #CBC-000000",
  serviceArea: ["Tampa", "Brandon", "Riverview", "Wesley Chapel", "Carrollwood", "Town 'n' Country"],

  /** Defaults for dynamic text replacement. */
  dtr: { service: "Drywall Repair", city: "Tampa" },

  /** "call" makes tap-to-call the primary mobile CTA; "form" scrolls to the form. */
  mobilePrimaryCta: "call" as "call" | "form",

  rating: { value: "4.9", count: "412", source: "Google reviews" },
  headerBadge: "Licensed & insured",

  hero: {
    title: "{service} in {city} — patched, textured & painted in one visit.",
    /** Keep under 8 words. Shown on small screens instead of `title`. */
    mobileTitle: "{city} {service}, fixed in one visit.",
    subtitle:
      "Our licensed crew has fixed 3,000+ walls and ceilings since 2011. Get a firm quote in 60 seconds, no site visit needed.",
    bullets: [
      "Same-week appointments, most jobs done in a day",
      "Firm price before we start, no change orders",
      "Seamless finish guarantee or we come back free",
    ],
    photoCaption: "Replace with a real crew or finished-job photo",
  },

  form: {
    title: "Get my free quote",
    subtitle: "Takes 60 seconds. We reply within 1 business hour.",
    button: "Get My Free Quote",
    reassurance: "Free, no obligation. We only call about your project, never spam.",
    services: ["Hole or crack repair", "Water damage / ceiling", "Texture matching", "New drywall / remodel", "Not sure yet"],
  },

  proof: {
    label: "Trusted by Tampa homeowners",
    badges: ["Licensed FL contractor", "Fully insured", "BBB A+ rated", "Angi Super Service", "Nextdoor Neighborhood Fave"],
  },

  steps: {
    title: "How it works",
    items: [
      { title: "Tell us about the damage", description: "Fill in the short form or call. A photo helps but isn't required." },
      { title: "Get a firm quote", description: "We send a fixed price within 1 business hour. No surprises later." },
      { title: "We fix it in one visit", description: "Patched, textured to match, primed and painted. Furniture covered, dust cleaned." },
    ],
  },

  details: {
    title: "What's included in every repair",
    items: [
      "Cut-out and patch of holes, cracks and soft spots",
      "Texture matched to your existing wall (orange peel, knockdown, smooth)",
      "Primer plus two coats of paint in your colour",
      "Plastic sheeting, floor covers and full cleanup",
      "Written 2-year workmanship warranty",
    ],
    areaTitle: "Serving {city} and nearby",
  },

  gallery: {
    title: "Before and after",
    items: [
      { label: "Ceiling water stain, Carrollwood" },
      { label: "Doorknob hole, South Tampa" },
      { label: "Settlement crack, Brandon" },
    ],
  },

  testimonials: {
    title: "What neighbours say",
    items: [
      { quote: "Quoted Monday, fixed Wednesday. You can't tell where the hole was.", name: "Dana M.", location: "Riverview", stars: 5 },
      { quote: "The texture match is perfect. Price was exactly what they said on the phone.", name: "Luis R.", location: "Westchase", stars: 5 },
      { quote: "Ceiling leak repair looked brand new. They even cleaned the dust off my ceiling fan.", name: "Priya K.", location: "Brandon", stars: 5 },
      { quote: "Second time using them. Fast, polite, and no upsell.", name: "Tom & Jess W.", location: "Wesley Chapel", stars: 5 },
    ],
  },

  faq: {
    title: "Questions people ask",
    items: [
      { q: "How much does drywall repair cost?", a: "Most small repairs run $150 to $450 including paint. Water damage and ceilings cost more. You get a firm price before we book the job." },
      { q: "How fast can you come out?", a: "Usually within the week. Urgent water damage can often be seen in 24 to 48 hours." },
      { q: "Are you licensed and insured?", a: "Yes. We hold a Florida contractor license and carry full liability and workers' comp insurance. Ask us for the certificate." },
      { q: "Do you paint the repair?", a: "Yes. Every quote includes primer and paint so the repair disappears." },
      { q: "What happens after I submit the form?", a: "A real person reads it and replies within 1 business hour with a firm quote and open dates. No automated calls." },
    ],
  },

  guarantee: {
    title: "Seamless finish guarantee",
    description:
      "If you can see the repair after we leave, we come back and fix it for free. Every job is covered by a written 2-year workmanship warranty.",
  },

  finalCta: {
    title: "Ready to make that wall disappear?",
    description: "Get a firm quote in 60 seconds, or call and talk to a real person.",
  },

  footer: {
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },

  thankYou: {
    title: "Got it. We'll reply within 1 business hour.",
    description: "Check your phone and email. Need help right now? Call us and mention you just sent a quote request.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
