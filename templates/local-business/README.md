# Local Business template

Service-business site: hero with phone CTA, services grid with starting prices, about + hours/location card, reviews and a contact form.

## Customise

| What | Where |
| --- | --- |
| Business details, services, hours, reviews | `src/site.config.ts` |
| Brand colours & fonts | `src/app/globals.css` (`@theme` block) |
| Favicon | `src/app/icon.svg` |
| Sections | `src/components/*` |

The contact form is static. For production, point it at a form service (Formspree, Basin) or a Next.js route handler.

Run locally from the repo root: `pnpm --filter tpl-local-business dev`
