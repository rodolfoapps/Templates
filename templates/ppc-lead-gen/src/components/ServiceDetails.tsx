import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Dtr } from "@/components/Dtr";

export function ServiceDetails() {
  const { details, serviceArea, address } = siteConfig;
  return (
    <section className="bg-surface py-14 md:py-20">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{details.title}</h2>
          <ul className="mt-6 space-y-3">
            {details.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                <svg className="mt-1 size-4 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-foreground/10 bg-background p-6">
          <h3 className="font-semibold">
            <Dtr text={details.areaTitle} />
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {serviceArea.map((a) => (
              <li key={a} className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-dark">
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-5 aspect-[4/3] rounded-xl bg-[linear-gradient(135deg,var(--color-brand-light),var(--color-surface))] ring-1 ring-foreground/5">
            <p className="p-4 text-xs text-muted">Service-area map placeholder</p>
          </div>
          <p className="mt-4 text-xs text-muted">{address}</p>
        </div>
      </Container>
    </section>
  );
}
