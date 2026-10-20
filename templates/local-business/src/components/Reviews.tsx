import { Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Reviews() {
  const { reviews } = siteConfig;

  return (
    <Section id="reviews">
      <SectionHeader eyebrow={reviews.eyebrow} title={reviews.title} />
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.items.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col rounded-2xl border border-foreground/10 bg-background p-6"
          >
            <div className="flex gap-0.5 text-amber-500" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }).map((_, i) => (
                <svg key={i} className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.7l-6.1 3.4 1.4-6.8L2.2 9.6l6.9-.8z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-pretty mt-4 flex-1 text-base leading-relaxed">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold">{r.name}</span>
              <span className="text-muted"> · {r.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
