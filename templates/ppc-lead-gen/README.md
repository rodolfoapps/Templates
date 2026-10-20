# PPC Lead-Gen Lander template

A single-purpose paid-search landing page for service businesses, built from the evidence in *High-Converting PPC Landing Pages for Lead Generation (2026)*. One page, one goal, no navigation.

## What's built in

| Research finding | Implementation |
| --- | --- |
| Message match; DTR for one variable | `{service}` and `{city}` tokens in copy, filled from `?service=…&city=…` with safe defaults (`src/lib/dtr.ts`) |
| Proof in the first screen | Rating + review count sits under the headline on both devices |
| Desktop: two-column hero, form right | `Hero.tsx` grid from `md:` |
| Mobile: headline ≤ 8 words, CTA first, form one scroll down | `hero.mobileTitle`, mobile CTA row, form after bullets |
| Phone-first on mobile for urgent services | `mobilePrimaryCta: "call" \| "form"` in `site.config.ts` |
| Sticky Call \| Quote bar after the hero scrolls away | `StickyBar.tsx` (IntersectionObserver on `#hero`) |
| Short form, autofill-friendly, outcome button copy, reassurance | `LeadForm.tsx`: name, tel, email, one qualifying question; honeypot |
| No navigation; identity in footer | Slim header (logo, phone, one badge), footer with address + licence + privacy |
| How it works, FAQ accordions, guarantee, repeated CTA | Sections in `src/components` |
| 5th–7th-grade copy, ~500 words | `site.config.ts` |
| Conversion page for tracking | `/thank-you` — fire the Google Ads / GA4 tag here |
| Keep out of organic search | `robots: noindex` in `layout.tsx` |

## Customise

- Copy, phone, service area, FAQ: `src/site.config.ts`
- Brand colours: `src/app/globals.css` (`@theme`)
- Lead delivery: set `LEAD_WEBHOOK_URL` on the Vercel project (Zapier / Make / CRM / Slack webhook). Without it, leads are logged to the function logs.
- Dynamic text: link each ad group to `/?service=Ceiling%20Repair&city=Brandon`. Keep values short so headlines don't wrap badly.
- Hide the "Preview mockup" strip: `NEXT_PUBLIC_MOCKUP_BANNER=off`.

## Before going live

1. Replace the photo and before/after placeholders with real, compressed images.
2. Add `/privacy` and `/terms` pages (Google's destination policy wants them reachable).
3. Add call tracking on the phone number and the Google Ads conversion tag on `/thank-you`.
4. Check the mobile speed score in Google Ads after the first day of traffic.

Run locally from the repo root: `pnpm --filter tpl-ppc-lead-gen dev`
