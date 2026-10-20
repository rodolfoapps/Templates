# Templates

Next.js landing-page and website templates, plus client mockups cloned from them. Every app in this repo deploys to Vercel as its own project from the same monorepo.

```
apps/gallery            Index of all templates with links to their live previews
templates/<slug>        One Next.js app per template
clients/<slug>          Client mockups cloned from a template (one Vercel project each)
packages/ui             Shared components (Navbar, Footer, Button, Section…) and base CSS
packages/registry       templates.json — the list the gallery renders
packages/tsconfig       Shared TypeScript config
scripts/                new-client.sh, new-template.sh
```

**Stack:** Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, TypeScript, pnpm workspaces, Turborepo.

## Local development

```bash
pnpm install
pnpm dev                                 # every app (turbo picks free ports)
pnpm --filter tpl-saas-landing dev       # one template
pnpm check                               # lint + typecheck + build everything
```

| Template | Package | Preview |
| --- | --- | --- |
| SaaS Landing | `tpl-saas-landing` | https://tpl-saas-landing-indol.vercel.app |
| Local Business | `tpl-local-business` | https://tpl-local-business.vercel.app |
| Portfolio | `tpl-portfolio` | https://tpl-portfolio-beige.vercel.app |
| PPC Lead-Gen Lander | `tpl-ppc-lead-gen` | https://tpl-ppc-lead-gen.vercel.app |
| Gallery | `gallery` | https://templates-gallery-eight.vercel.app |

## How a template is built

Each template is intentionally content-driven so a mockup is mostly config edits:

- `src/site.config.ts` — all copy: name, nav, hero, sections, pricing, FAQ, footer.
- `src/app/globals.css` — brand tokens in an `@theme` block (`--color-brand`, `--color-background`, `--color-muted`…). Every shared component uses these tokens, so changing six variables re-skins the whole site.
- `src/components/*` — the page sections. Edit or reorder in `src/app/page.tsx`.
- `MockupBanner` shows a "Preview mockup" strip at the top. Set the env var `NEXT_PUBLIC_MOCKUP_BANNER=off` on the Vercel project to hide it when a site goes live.

## Create a client mockup

```bash
pnpm new:client acme saas-landing
# -> clients/acme  (package name: client-acme)
pnpm --filter client-acme dev
```

Edit `clients/acme/src/site.config.ts` and `globals.css`, commit, push, then create a Vercel project for it (below). Because every client is its own project, each one gets a stable URL you can send to the client and, later, the client's own domain.

## Create a new template

```bash
pnpm new:template restaurant                # minimal starter
pnpm new:template agency saas-landing       # start from a copy of an existing template
```

Then add an entry to `packages/registry/src/templates.json` so the gallery lists it.

## Deploying to Vercel

One GitHub repo, many Vercel projects. Each project points at a different **Root Directory**.

### First-time setup (per app)

1. Vercel dashboard → **Add New… → Project** → import `rodolfoapps/Templates`.
2. Set **Root Directory** to the app folder, e.g. `templates/saas-landing` or `clients/acme`.
3. Framework preset: Next.js (auto-detected). Leave build/install commands as default — Vercel detects pnpm from the lockfile and installs from the repo root.
4. Under **Settings → Git**, enable **Skip deployments when there are no changes to the root directory and its dependencies** ("affected projects"). The project then only rebuilds when its own folder or a shared package changed.
5. Optional: add `NEXT_PUBLIC_MOCKUP_BANNER=off` as an env var once a client site goes live.

Or from the CLI at the repo root:

```bash
npx vercel link --repo      # links every workspace app to a Vercel project in one go
```

Project naming convention: `tpl-<slug>` for templates, `client-<slug>` for client mockups, `templates-gallery` for the gallery.

The four projects below already exist in the Vercel team "Rodolfo's APP" and are linked to this repo. Deployment Protection is turned off on them so clients can open the links without a Vercel login.

| Vercel project | Root Directory |
| --- | --- |
| `tpl-saas-landing` | `templates/saas-landing` |
| `tpl-local-business` | `templates/local-business` |
| `tpl-portfolio` | `templates/portfolio` |
| `tpl-ppc-lead-gen` | `templates/ppc-lead-gen` |
| `templates-gallery` | `apps/gallery` |

### After setup

Every push to `main` deploys production; every branch/PR gets a preview URL per project. Nothing else to do.

### Updating the gallery links

`packages/registry/src/templates.json` holds each template's public URL. If Vercel assigns a different domain than `tpl-<slug>.vercel.app`, update it there.

## CI

`.github/workflows/ci.yml` runs lint, typecheck and a production build for every app on each PR and push to `main`.
