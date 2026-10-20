import templates from "./templates.json" with { type: "json" };

export type TemplateCategory =
  | "SaaS"
  | "Local business"
  | "Portfolio"
  | "Agency"
  | "E-commerce"
  | "Event"
  | "Other";

export interface TemplateEntry {
  /** Folder name under /templates and the Vercel project root directory. */
  slug: string;
  /** Human-readable name shown in the gallery. */
  name: string;
  /** One-line pitch for the gallery card. */
  description: string;
  category: TemplateCategory;
  /** Public URL of the deployed template (Vercel production domain). */
  url: string;
  /** Tags used for filtering in the gallery. */
  tags: string[];
  /** Hex colour used for the gallery card accent. */
  accent: string;
}

export const registry: TemplateEntry[] = templates as TemplateEntry[];

export function getTemplate(slug: string): TemplateEntry | undefined {
  return registry.find((t) => t.slug === slug);
}
