import { Button, Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function FinalCta() {
  const { finalCta, cta, secondaryCta } = siteConfig;

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center text-white sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--color-brand),transparent_65%)] opacity-60"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="text-pretty mt-4 text-lg text-white/70">{finalCta.description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={cta.href} size="lg" variant="inverted">
                {cta.label}
              </Button>
              <Button
                href={secondaryCta.href}
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
