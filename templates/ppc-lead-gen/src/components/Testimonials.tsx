import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { RatingLine, Stars } from "@/components/Stars";

/** Grid on desktop, horizontal swipe row on mobile. */
export function Testimonials() {
  const { testimonials } = siteConfig;
  return (
    <section className="bg-surface py-14 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{testimonials.title}</h2>
          <RatingLine />
        </div>
        <ul className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {testimonials.items.map((t) => (
            <li
              key={t.name}
              className="flex w-[85%] shrink-0 snap-center flex-col rounded-2xl border border-foreground/10 bg-background p-5 md:w-auto"
            >
              <Stars count={t.stars} />
              <blockquote className="text-pretty mt-3 flex-1 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-xs">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted"> · {t.location}</span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
