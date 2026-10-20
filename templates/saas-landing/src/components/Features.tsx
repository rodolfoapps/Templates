import { Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Icon } from "@/components/Icon";

export function Features() {
  const { features } = siteConfig;

  return (
    <Section id="features">
      <SectionHeader
        eyebrow={features.eyebrow}
        title={features.title}
        description={features.description}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-foreground/10 bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-brand/5"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-brand-light text-brand">
              <Icon name={item.icon} className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
