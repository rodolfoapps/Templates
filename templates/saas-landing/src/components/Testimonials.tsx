import { Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <Section id="testimonials">
      <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-foreground/10 p-6"
          >
            <blockquote className="text-pretty text-base leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                aria-hidden
                className="flex size-10 items-center justify-center rounded-full bg-brand-light text-sm font-semibold text-brand"
              >
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span>
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="block text-xs text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
