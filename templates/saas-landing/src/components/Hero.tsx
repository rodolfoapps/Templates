import { Badge, Button, Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Hero() {
  const { hero, cta, secondaryCta } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-surface">
      {/* decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[32rem] bg-[radial-gradient(ellipse_at_top,var(--color-brand-light),transparent_60%)]"
      />
      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{hero.badge}</Badge>
          <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            {hero.title}
          </h1>
          <p className="text-pretty mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
            <Button href={secondaryCta.href} size="lg" variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* product mock */}
        <div className="mt-16 rounded-2xl border border-foreground/10 bg-background p-2 shadow-2xl shadow-brand/10">
          <div className="rounded-xl border border-foreground/5 bg-surface">
            <div className="flex items-center gap-1.5 border-b border-foreground/5 px-4 py-3">
              <span className="size-2.5 rounded-full bg-foreground/10" />
              <span className="size-2.5 rounded-full bg-foreground/10" />
              <span className="size-2.5 rounded-full bg-foreground/10" />
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
              {hero.stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-background p-4 ring-1 ring-foreground/5">
                  <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
              <div className="sm:col-span-3">
                <ChartPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChartPlaceholder() {
  const bars = [35, 48, 42, 60, 55, 72, 68, 80, 76, 90, 86, 98];
  return (
    <div className="flex h-40 items-end gap-2 rounded-lg bg-background p-4 ring-1 ring-foreground/5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-brand/80"
          style={{ height: `${h}%`, opacity: 0.4 + (i / bars.length) * 0.6 }}
        />
      ))}
    </div>
  );
}
