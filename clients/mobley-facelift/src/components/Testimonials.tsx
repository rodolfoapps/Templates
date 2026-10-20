import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { StarIcon } from "@/components/Icons";

export function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section className="py-16 md:py-24">
      <Container>
        <p className="eyebrow text-center text-brand">{testimonials.eyebrow}</p>
        <h2 className="mt-3 text-center font-display text-3xl font-light tracking-tight md:text-4xl">{testimonials.title}</h2>
        <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {testimonials.items.map((t, i) => (
            <li key={i} className="flex w-[86%] shrink-0 snap-center flex-col border border-foreground/10 p-6 md:w-auto">
              <span className="flex text-brand" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} className="size-4" />)}
              </span>
              <blockquote className="text-pretty mt-4 flex-1 text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="mt-5 text-sm">
                <span className="font-display font-medium">{t.name}</span>
                <span className="text-muted"> &middot; {t.detail}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-muted">{testimonials.footnote}</p>
      </Container>
    </section>
  );
}
