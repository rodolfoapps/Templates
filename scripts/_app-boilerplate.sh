#!/usr/bin/env bash
# Internal helper: writes the shared Next.js boilerplate for an app directory.
# Usage: scripts/_app-boilerplate.sh <dir> <package-name>
set -euo pipefail
DIR="$1"; NAME="$2"
mkdir -p "$DIR/src/app" "$DIR/src/components" "$DIR/public"

cat > "$DIR/package.json" <<JSON
{
  "name": "$NAME",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "clean": "rm -rf .next .turbo"
  },
  "dependencies": {
    "@templates/ui": "workspace:*",
    "geist": "^1.8.1",
    "next": "16.4.2",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.3.3",
    "@templates/tsconfig": "workspace:*",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.2",
    "tailwindcss": "^4.3.3",
    "typescript": "^5.9.3"
  }
}
JSON

cat > "$DIR/next.config.ts" <<'TS'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@templates/ui", "@templates/registry"],
  reactStrictMode: true,
};

export default nextConfig;
TS

cat > "$DIR/tsconfig.json" <<'JSON'
{
  "extends": "@templates/tsconfig/nextjs.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
JSON

cat > "$DIR/postcss.config.mjs" <<'JS'
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
JS

cat > "$DIR/eslint.config.mjs" <<'JS'
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
JS

touch "$DIR/public/.gitkeep"
