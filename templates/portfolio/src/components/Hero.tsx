import { Button, Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Hero() {
  const { hero, cta } = siteConfig;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 size-[40rem] rounded-full bg-brand/20 blur-3xl"
      />
      <Container className="relative py-28 sm:py-40">
        <p className="flex items-center gap-2 text-sm text-muted">
          <span className="size-2 rounded-full bg-brand" aria-hidden />
          {siteConfig.availability} · {siteConfig.location}
        </p>
        <h1 className="text-balance mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          {hero.title}
        </h1>
        <p className="text-pretty mt-8 max-w-2xl text-lg text-muted sm:text-xl">
          {hero.description}
        </p>
        <div className="mt-10 flex gap-3">
          <Button href={cta.href} size="lg">
            {cta.label}
          </Button>
          <Button href="#work" size="lg" variant="ghost" className="border border-foreground/15">
            See our work
          </Button>
        </div>
      </Container>
    </section>
  );
}
