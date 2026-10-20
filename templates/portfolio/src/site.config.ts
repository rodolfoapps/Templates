/**
 * All copy for this template lives here. For a client mockup, edit this
 * file and the brand tokens in src/app/globals.css.
 */
export const siteConfig = {
  name: "Studio Vela",
  mark: "V",
  tagline: "Brand & digital design studio.",
  description:
    "Studio Vela is an independent design practice crafting identities, websites and products for ambitious founders.",
  url: "https://tpl-portfolio-beige.vercel.app",
  legalName: "Studio Vela",
  email: "hello@studiovela.example",
  location: "Lisbon · Remote worldwide",
  availability: "Booking projects for Q1",

  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Start a project", href: "#contact" },

  hero: {
    title: "We design brands and interfaces that people remember.",
    description:
      "A small senior team working directly with founders — no account managers, no hand-offs. Strategy, identity and product, shipped with care.",
  },

  work: {
    eyebrow: "Selected work",
    title: "Recent projects",
    items: [
      { title: "Kestrel Finance", category: "Brand identity · Website", year: "2026", tone: "from-amber-400 to-orange-600" },
      { title: "Loom Health", category: "Product design", year: "2025", tone: "from-emerald-400 to-teal-700" },
      { title: "Arcadia Hotels", category: "Brand identity", year: "2025", tone: "from-rose-400 to-pink-700" },
      { title: "Paperclip", category: "Website · Design system", year: "2025", tone: "from-sky-400 to-indigo-700" },
      { title: "Nomad Coffee", category: "Packaging · Brand", year: "2024", tone: "from-stone-300 to-stone-600" },
      { title: "Orbit Labs", category: "Product design · Motion", year: "2024", tone: "from-violet-400 to-purple-800" },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "What we do",
    items: [
      {
        title: "Brand identity",
        description: "Positioning, naming, logo systems, typography and the guidelines to keep it consistent.",
      },
      {
        title: "Websites",
        description: "Marketing sites built in Next.js with a CMS your team can actually use.",
      },
      {
        title: "Product design",
        description: "UX research, interface design and design systems for web and mobile apps.",
      },
      {
        title: "Creative direction",
        description: "Ongoing art direction for campaigns, launches and content.",
      },
    ],
  },

  about: {
    eyebrow: "About",
    title: "Small by design.",
    paragraphs: [
      "Studio Vela was founded in 2019 by two designers who wanted to work the way they'd want to be worked with: directly, honestly, and with real craft.",
      "We take on a handful of projects each quarter so every client gets senior attention from kickoff to launch.",
    ],
    clients: ["Kestrel", "Loom", "Arcadia", "Paperclip", "Nomad", "Orbit", "Halcyon", "Meridian"],
  },

  contact: {
    eyebrow: "Contact",
    title: "Have a project in mind?",
    description:
      "Tell us a little about it and we'll reply within two business days with next steps.",
  },

  social: [
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
