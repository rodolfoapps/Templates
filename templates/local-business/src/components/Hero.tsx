import { Badge, Button, Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Hero() {
  const { hero, cta } = siteConfig;

  return (
    <section className="bg-surface">
      <Container className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Badge>
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            {hero.badge}
          </Badge>
          <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="text-pretty mt-6 max-w-xl text-lg text-muted">{hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={cta.href} size="lg">
              {cta.label}: {siteConfig.phone}
            </Button>
            <Button href="#contact" size="lg" variant="secondary">
              Request an estimate
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm">
            {hero.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-brand-light text-brand">
                  <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* image placeholder */}
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark shadow-2xl shadow-brand/20 lg:aspect-[5/6]">
            <div className="flex h-full items-end p-8 text-white">
              <div>
                <p className="text-sm font-medium text-white/70">Replace with a team photo</p>
                <p className="mt-1 text-2xl font-semibold">{siteConfig.serviceArea}</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-4 hidden rounded-2xl border border-foreground/10 bg-background p-5 shadow-xl sm:block">
            <p className="text-3xl font-semibold tracking-tight">4.9 ★</p>
            <p className="text-xs text-muted">900+ verified reviews</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
