import { Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Services() {
  const { services } = siteConfig;

  return (
    <Section id="services">
      <SectionHeader
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((s) => (
          <div
            key={s.title}
            className="flex flex-col rounded-2xl border border-foreground/10 bg-background p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <span className="shrink-0 rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-semibold text-brand">
                {s.price}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
            >
              Get a quote
              <span aria-hidden>→</span>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
