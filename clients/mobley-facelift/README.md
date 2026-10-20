# Mobley MD — Facelift PPC lander (client mockup)

A paid-search landing page for Dr. Steven Mobley's facelift practice, built on the `ppc-lead-gen` template, restyled to the Mobley MD brand (Montserrat light headings, Open Sans body, charcoal panels, logo cyan) and filled with the practice's own assets and verified credentials.

- Live mockup: https://client-mobley-facelift.vercel.app
- Current page it is meant to replace for ads: https://mobleymd.com/salt-lake-city-facelift-utah-rhytidectomy/

## How the layout follows the research

| Finding | What the lander does |
| --- | --- |
| Message match, one goal | Headline for facelift intent; no site navigation; every CTA leads to the same consult form or the phone |
| Proof in the first screen | Double board certification, University of Utah role, AAAASF facility, Castle Connolly, 50+ works, 85+ lectures, plus a real before/after pair |
| High-consideration offer: let prospects choose channel | Form asks "best way to reach you": call, text or email. Mobile is form-first with call secondary (`mobilePrimaryCta` in `site.config.ts`) |
| Real visual proof | Six unretouched before/after composites from the Mobley MD gallery, portrait, surgical suite and team photos. No stock, no generated images |
| Plain-language, mid-length copy | Rewritten from the current page at roughly a 7th-grade level, about 900 words including FAQ |
| Objection handling | "Facelift at a glance" table (technique, where, anesthesia, recovery, cost from $23,000, CareCredit) and an 8-question FAQ, each 2–4 sentences |
| Sticky mobile CTA | Call \| Request consultation bar after the hero scrolls away |
| Conversion tracking | `/thank-you` page for the Google Ads tag; gclid and UTMs captured with each lead |
| AI-search readiness | Quotable entity statement, consistent names (Dr. Steven Mobley, Mobley MD, Salt Lake City, Utah), `Physician` + `MedicalProcedure` + `FAQPage` JSON-LD |

Dynamic text: `/?service=Deep%20Plane%20Facelift&city=Park%20City` swaps the eyebrow line. Defaults to "Facelift · Salt Lake City".

## Ranking protection

The existing facelift page keeps its URL, title, H1 and content. This lander is a separate page, set to `noindex, nofollow`, so it cannot cannibalise the ranking page. If it is later hosted on mobleymd.com, keep it under a path like `/lp/facelift/` with the same `noindex` and keep the display URL on the mobleymd.com domain for Google Ads' destination policy.

## Credential verification list

Every claim on the page and its source on mobleymd.com. Dr. Mobley can confirm them in one pass.

| Claim on the lander | Source |
| --- | --- |
| Double board-certified: ABFPRS 2005, ABOto-HNS 2002 | CV page, "Board Certification, Licensure and Fellowship" |
| Fellow, American Academy of Facial Plastic and Reconstructive Surgery | CV page (member since 1998) |
| Former Associate Professor of Surgery (with tenure), 2009–2013; Director, Facial Plastic and Reconstructive Surgery and Residency Program Director, 2008–2013, University of Utah | CV page, "Academic Appointments" |
| Serving Salt Lake City since 2002 | Facelift page intro; CV (Assistant Professor from 2002) |
| Medical Director, Millcreek Surgical Suite (AAAASF-accredited) | CV page; facelift page |
| More than 50 published works | CV page, "Publications"; site schema |
| More than 85 lectures to surgeons at national and international meetings | National Lecturer page; site schema |
| Castle Connolly Top Doctor, multiple years | CV page, "Honors and Awards" |
| Guest Editor, Facial Plastic Surgery Clinics of North America | CV page (2006, 2011 issues) |
| Modified deep plane / SMAS technique, hidden incisions, "windblown" avoidance | Facelift page FAQ "What does facelift surgery involve?" |
| Cost starts at approximately $23,000 (surgeon + facility + anesthesia) | Facelift page FAQ "How much does facelift normally cost?" |
| CareCredit financing | Facelift page FAQ "What financing options are available?" |
| Recovery 1–2 weeks; bandage 1–2 days; neck tightness about 7 days | Facelift page FAQ (return to work; pain) |
| Risk list | Facelift page FAQ "Most common risks" |
| Airfare credit up to $500 for out-of-town patients | Banner on the current facelift page |
| Press logos: Cosmopolitan, ABC News, GMA, Inside Edition, People, Castle Connolly | Homepage "Respected and known by" strip |
| Lynette McAferty testimonial | Facelift page "What our patients are saying" |
| Two anonymous reviews | Testimonials page (Facebook reviews) |

Not used on purpose: a numeric Google rating and review count. The site does not publish one I could verify. If the practice has a Google Business Profile rating, add it to the hero proof line; the research shows star rating plus count in the first screen helps.

## Devil's advocate

1. **Dark hero vs. the current photo hero.** The brand uses dark panels, but a dark first screen can feel heavy to a 55+ audience. Test a light variant with the before/after pair moved up.
2. **Form asks for email and phone.** Phone is high friction for cosmetic prospects. The "best way to reach you" choice softens it; if contact rates are fine but submissions are low, test making phone optional.
3. **Before/after photos above the fold on desktop.** Strong proof, but some patients find them clinical. Keep them; test the hero pair against a portrait of Dr. Mobley.

## Before going live

1. Set `LEAD_WEBHOOK_URL` on the Vercel project (CRM, Zapier, or the practice's intake tool). Until then leads are logged only.
2. Replace the honeypot-only spam check with reCAPTCHA or Turnstile if spam appears.
3. Add the Google Ads conversion tag on `/thank-you` and call tracking on the phone number. Medical pages: get HIPAA-aware guidance before adding analytics pixels.
4. Point the privacy link at the practice's real privacy policy URL (`site.config.ts` → `footer.links`).
5. Set `NEXT_PUBLIC_MOCKUP_BANNER=off` to remove the preview strip.

Run locally from the repo root: `pnpm --filter client-mobley-facelift dev`
