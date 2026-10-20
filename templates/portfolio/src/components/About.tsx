import { Section } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function About() {
  const { about } = siteConfig;

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand uppercase">
            {about.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            {about.title}
          </h2>
        </div>
        <div className="space-y-5 text-lg text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="pt-4">
            <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Selected clients
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base text-foreground/60">
              {about.clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
