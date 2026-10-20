/**
 * All copy for this template lives here. For a client mockup, edit this
 * file and the brand tokens in src/app/globals.css — no component changes
 * needed for a first draft.
 */
export const siteConfig = {
  name: "Northwind",
  mark: "N",
  tagline: "Analytics your whole team will actually use.",
  description:
    "Northwind turns product events into clear dashboards, alerts and weekly reports — without a data team.",
  url: "https://tpl-saas-landing-indol.vercel.app",
  legalName: "Northwind Analytics, Inc.",

  nav: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Customers", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Start free trial", href: "#pricing" },
  secondaryCta: { label: "Book a demo", href: "#contact" },

  hero: {
    badge: "New: automated weekly reports",
    title: "See what your customers do. Decide what to build next.",
    description:
      "Plug in once and get retention curves, funnels and revenue metrics in minutes. No SQL, no setup calls, no surprises on the invoice.",
    stats: [
      { value: "12k+", label: "Teams onboarded" },
      { value: "4.9/5", label: "Average rating" },
      { value: "<5 min", label: "Time to first chart" },
    ],
  },

  logos: ["Vertex", "Lumen", "Harbor", "Pioneer", "Nimbus", "Atlas"],

  features: {
    eyebrow: "Everything in one place",
    title: "Built for product teams, not data engineers",
    description:
      "Every feature is designed so a PM can answer their own question before the stand-up ends.",
    items: [
      {
        title: "Funnels & retention",
        description:
          "Drag, drop, done. Build any funnel from your events and see where users fall off.",
        icon: "chart",
      },
      {
        title: "Smart alerts",
        description:
          "Get a Slack message when a metric moves more than it should. Snooze the noise.",
        icon: "bell",
      },
      {
        title: "Revenue metrics",
        description:
          "MRR, churn and expansion connected to product usage — finally in the same chart.",
        icon: "dollar",
      },
      {
        title: "Shareable dashboards",
        description:
          "Public links, embeds and scheduled PDF exports for stakeholders who won't log in.",
        icon: "share",
      },
      {
        title: "Privacy first",
        description:
          "EU hosting, SOC 2 Type II, and PII redaction at the edge before data is stored.",
        icon: "shield",
      },
      {
        title: "Works with your stack",
        description:
          "Segment, Rudderstack, Postgres, Stripe and a JS snippet. Import history in one click.",
        icon: "plug",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Simple, usage-based pricing",
    description: "Start free. Upgrade when your team grows. Cancel anytime.",
    plans: [
      {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "For side projects and early validation.",
        features: ["Up to 10k events / mo", "2 seats", "7-day history", "Community support"],
        cta: "Get started",
        highlighted: false,
      },
      {
        name: "Growth",
        price: "$79",
        period: "/month",
        description: "For startups shipping fast with a small team.",
        features: [
          "Up to 1M events / mo",
          "Unlimited seats",
          "12-month history",
          "Slack alerts",
          "Priority support",
        ],
        cta: "Start free trial",
        highlighted: true,
      },
      {
        name: "Scale",
        price: "Custom",
        period: "",
        description: "For companies with compliance and volume needs.",
        features: ["Unlimited events", "SSO & audit logs", "Dedicated region", "Solutions engineer"],
        cta: "Talk to sales",
        highlighted: false,
      },
    ],
  },

  testimonials: {
    eyebrow: "Customers",
    title: "Loved by teams who ship weekly",
    items: [
      {
        quote:
          "We replaced three tools and a part-time analyst. Our PMs now answer their own questions in minutes.",
        name: "Maya Chen",
        role: "Head of Product, Lumen",
      },
      {
        quote:
          "The retention charts alone paid for the subscription in the first week. Setup took an afternoon.",
        name: "Daniel Okafor",
        role: "Co-founder, Harbor",
      },
      {
        quote:
          "Finally a dashboard my CEO opens on their own. The weekly report is now part of our Monday ritual.",
        name: "Sofia Álvarez",
        role: "VP Growth, Pioneer",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered",
    items: [
      {
        q: "How long does it take to set up?",
        a: "Most teams see their first chart within five minutes. Add our snippet or connect an existing source like Segment and historical data imports automatically.",
      },
      {
        q: "Do you offer a free plan?",
        a: "Yes. The Starter plan is free forever for up to 10k events per month and never requires a credit card.",
      },
      {
        q: "Where is my data stored?",
        a: "You choose between US and EU regions at signup. Enterprise plans can request a dedicated region.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Absolutely. Plans are month-to-month and you can export all your data at any time.",
      },
    ],
  },

  finalCta: {
    title: "Ready to see your product clearly?",
    description: "Join thousands of teams using Northwind to make better product decisions.",
  },

  footer: {
    tagline: "Product analytics for teams that move fast.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Changelog", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
