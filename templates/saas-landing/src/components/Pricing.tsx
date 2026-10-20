import { Button, Section, SectionHeader, cn } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Pricing() {
  const { pricing } = siteConfig;

  return (
    <Section id="pricing" className="bg-surface">
      <SectionHeader
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        description={pricing.description}
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex flex-col rounded-2xl border bg-background p-8",
              plan.highlighted
                ? "border-brand shadow-xl shadow-brand/10 ring-1 ring-brand"
                : "border-foreground/10",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              {plan.highlighted ? (
                <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>
            <p className="mt-6">
              <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
              <span className="text-sm text-muted">{plan.period}</span>
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <svg
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href="#contact"
              className="mt-8 w-full"
              variant={plan.highlighted ? "primary" : "secondary"}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
