import { Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Services() {
  const { services } = siteConfig;

  return (
    <Section id="services" className="border-y border-foreground/10 bg-surface">
      <SectionHeader eyebrow={services.eyebrow} title={services.title} align="left" />
      <ol className="divide-y divide-foreground/10">
        {services.items.map((s, i) => (
          <li key={s.title} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr_2fr] sm:gap-8">
            <span className="font-mono text-sm text-brand">0{i + 1}</span>
            <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
            <p className="text-pretty text-muted">{s.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
