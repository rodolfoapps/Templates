#!/usr/bin/env bash
#
# Clone a template into clients/<client-slug> to start a client mockup.
#
#   pnpm new:client <client-slug> <template-slug>
#   pnpm new:client acme saas-landing
#
# Afterwards:
#   1. Edit clients/<client-slug>/src/site.config.ts   (copy, nav, pricing…)
#   2. Edit clients/<client-slug>/src/app/globals.css  (brand colours)
#   3. pnpm --filter client-<client-slug> dev
#   4. Create a Vercel project with Root Directory = clients/<client-slug>
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLIENT="${1:-}"
TEMPLATE="${2:-}"

if [[ -z "$CLIENT" || -z "$TEMPLATE" ]]; then
  echo "usage: pnpm new:client <client-slug> <template-slug>" >&2
  echo "templates: $(ls "$ROOT/templates" | tr '\n' ' ')" >&2
  exit 1
fi

if [[ ! "$CLIENT" =~ ^[a-z0-9-]+$ ]]; then
  echo "client slug must be lowercase letters, digits and dashes" >&2
  exit 1
fi

SRC="$ROOT/templates/$TEMPLATE"
DEST="$ROOT/clients/$CLIENT"

[[ -d "$SRC" ]] || { echo "template '$TEMPLATE' not found in templates/" >&2; exit 1; }
[[ -e "$DEST" ]] && { echo "clients/$CLIENT already exists" >&2; exit 1; }

mkdir -p "$DEST"
# Copy everything except build output and dependencies.
tar -C "$SRC" --exclude=node_modules --exclude=.next --exclude=.turbo --exclude=next-env.d.ts --exclude=tsconfig.tsbuildinfo -cf - . | tar -C "$DEST" -xf -

# Rename the package so pnpm/turbo can address it: client-<slug>
sed -i.bak "s/\"name\": \"tpl-$TEMPLATE\"/\"name\": \"client-$CLIENT\"/" "$DEST/package.json" && rm "$DEST/package.json.bak"

# Point the canonical URL at the (future) client deployment.
sed -i.bak "s#https://tpl-$TEMPLATE.vercel.app#https://client-$CLIENT.vercel.app#" "$DEST/src/site.config.ts" && rm -f "$DEST/src/site.config.ts.bak"

cat > "$DEST/README.md" <<MD
# Client mockup: $CLIENT

Based on the \`$TEMPLATE\` template.

- Copy & structure: \`src/site.config.ts\`
- Brand colours: \`src/app/globals.css\`
- Run: \`pnpm --filter client-$CLIENT dev\`
- Deploy: Vercel project with **Root Directory** \`clients/$CLIENT\`
MD

cd "$ROOT" && pnpm install --silent

echo
echo "Created clients/$CLIENT from templates/$TEMPLATE"
echo "  pnpm --filter client-$CLIENT dev"
