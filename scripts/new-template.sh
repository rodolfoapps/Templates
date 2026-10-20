#!/usr/bin/env bash
#
# Scaffold a new template under templates/<slug> with the shared boilerplate.
#
#   pnpm new:template <slug> [base-template]
#   pnpm new:template restaurant              # minimal starter page
#   pnpm new:template agency saas-landing     # copy of an existing template
#
# Then add an entry to packages/registry/src/templates.json so it shows in
# the gallery, and create a Vercel project with Root Directory templates/<slug>.
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SLUG="${1:-}"
BASE="${2:-}"

if [[ -z "$SLUG" ]]; then
  echo "usage: pnpm new:template <slug> [base-template]" >&2
  exit 1
fi
if [[ ! "$SLUG" =~ ^[a-z0-9-]+$ ]]; then
  echo "slug must be lowercase letters, digits and dashes" >&2
  exit 1
fi

DEST="$ROOT/templates/$SLUG"
[[ -e "$DEST" ]] && { echo "templates/$SLUG already exists" >&2; exit 1; }

if [[ -n "$BASE" ]]; then
  SRC="$ROOT/templates/$BASE"
  [[ -d "$SRC" ]] || { echo "base template '$BASE' not found" >&2; exit 1; }
  mkdir -p "$DEST"
  tar -C "$SRC" --exclude=node_modules --exclude=.next --exclude=.turbo --exclude=next-env.d.ts --exclude=tsconfig.tsbuildinfo -cf - . | tar -C "$DEST" -xf -
  sed -i.bak "s/\"name\": \"tpl-$BASE\"/\"name\": \"tpl-$SLUG\"/" "$DEST/package.json" && rm "$DEST/package.json.bak"
  sed -i.bak "s#https://tpl-$BASE.vercel.app#https://tpl-$SLUG.vercel.app#" "$DEST/src/site.config.ts" && rm -f "$DEST/src/site.config.ts.bak"
else
  bash "$ROOT/scripts/_app-boilerplate.sh" "$DEST" "tpl-$SLUG"

  cat > "$DEST/src/app/globals.css" <<'CSS'
@import "tailwindcss";
@import "@templates/ui/styles.css";

@source "../../../../packages/ui/src";

@theme {
  --color-brand: #2563eb;
  --color-brand-dark: #1d4ed8;
  --color-brand-light: #dbeafe;

  --color-background: #ffffff;
  --color-foreground: #0f172a;
  --color-muted: #64748b;
  --color-surface: #f8fafc;

  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
}
CSS

  cat > "$DEST/src/site.config.ts" <<TS
export const siteConfig = {
  name: "New Template",
  mark: "N",
  tagline: "A short tagline.",
  description: "One or two sentences used for the page <meta> description.",
  url: "https://tpl-$SLUG.vercel.app",
  legalName: "New Template Co.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get started", href: "#contact" },
} as const;
TS

  cat > "$DEST/src/app/layout.tsx" <<'TSX'
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteConfig } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
TSX

  cat > "$DEST/src/app/page.tsx" <<'TSX'
import { Button, Container, Footer, Logo, MockupBanner, Navbar } from "@templates/ui";
import { siteConfig } from "@/site.config";

export default function HomePage() {
  return (
    <>
      <MockupBanner />
      <Navbar
        logo={<Logo name={siteConfig.name} mark={siteConfig.mark} />}
        links={[...siteConfig.nav]}
        cta={
          <Button href={siteConfig.cta.href} size="sm">
            {siteConfig.cta.label}
          </Button>
        }
      />
      <main className="flex-1">
        <Container className="py-24 text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-pretty mx-auto mt-6 max-w-xl text-lg text-muted">
            {siteConfig.description}
          </p>
          <Button href={siteConfig.cta.href} size="lg" className="mt-10">
            {siteConfig.cta.label}
          </Button>
        </Container>
      </main>
      <Footer
        logo={<Logo name={siteConfig.name} mark={siteConfig.mark} />}
        legalName={siteConfig.legalName}
      />
    </>
  );
}
TSX

  cat > "$DEST/README.md" <<MD
# $SLUG template

Starter template. Edit \`src/site.config.ts\`, \`src/app/globals.css\` and build sections in \`src/components/\`.

Run locally from the repo root: \`pnpm --filter tpl-$SLUG dev\`
MD
fi

cd "$ROOT" && pnpm install --silent

echo
echo "Created templates/$SLUG"
echo "  1. Add it to packages/registry/src/templates.json"
echo "  2. pnpm --filter tpl-$SLUG dev"
