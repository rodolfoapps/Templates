import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Approach() {
  const { approach, facts } = siteConfig;
  return (
    <section id="approach" className="bg-surface py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-brand">{approach.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">{approach.title}</h2>
          <p className="text-pretty mt-5 leading-relaxed text-muted">{approach.intro}</p>
          <ol className="mt-8 space-y-6">
            {approach.points.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-base font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="self-start bg-white p-6 shadow-sm ring-1 ring-foreground/10 sm:p-8">
          <h3 className="font-display text-xl font-medium">{facts.title}</h3>
          <dl className="mt-4 divide-y divide-foreground/10">
            {facts.rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[7rem_1fr] gap-3 py-3 text-sm">
                <dt className="eyebrow pt-0.5 text-[11px] text-muted">{r.label}</dt>
                <dd className="leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
