import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { StarIcon } from "@/components/Icons";

export function Testimonials() {
  const { testimonials } = siteConfig;
  const [featured, ...rest] = testimonials.items;
  return (
    <section className="bg-surface py-20 md:py-32">
      <Container>
        <Reveal className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-brand">{testimonials.eyebrow}</p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-[1.1] font-light tracking-tight md:text-5xl">{testimonials.title}</h2>
            {featured ? (
              <figure className="mt-10">
                <span aria-hidden className="block font-display text-7xl leading-none font-light text-accent">&ldquo;</span>
                <blockquote className="text-pretty -mt-4 font-display text-xl leading-relaxed font-light md:text-[1.45rem]">{featured.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span className="flex gap-0.5 text-brand" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="size-3.5" />)}</span>
                  <span className="font-medium">{featured.name}</span>
                  <span className="text-muted">&middot; {featured.detail}</span>
                </figcaption>
              </figure>
            ) : null}
          </div>

          <ul className="grid gap-5 self-center">
            {rest.map((t, i) => (
              <li key={i} className="bg-white p-7 shadow-soft">
                <span className="flex gap-0.5 text-brand" aria-hidden>{Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} className="size-3.5" />)}</span>
                <blockquote className="text-pretty mt-4 text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <p className="mt-4 text-xs"><span className="font-medium text-foreground">{t.name}</span><span className="text-muted"> &middot; {t.detail}</span></p>
              </li>
            ))}
            <li className="px-1 text-xs text-muted">{testimonials.footnote}</li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
