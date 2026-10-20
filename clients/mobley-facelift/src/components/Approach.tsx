import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function Approach() {
  const { approach, facts } = siteConfig;
  return (
    <section id="approach" className="bg-ink py-20 text-white md:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">{approach.eyebrow}</p>
          <h2 className="mt-4 font-display text-[2.2rem] leading-[1.1] font-light tracking-tight md:text-5xl">{approach.title}</h2>
          <p className="text-pretty mt-6 text-[17px] leading-relaxed text-white/70">{approach.intro}</p>
        </Reveal>

        <ol className="mt-14 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-3 md:gap-8">
          {approach.points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100}>
              <span className="font-display text-5xl font-light text-accent/80">0{i + 1}</span>
              <h3 className="mt-5 font-display text-lg font-medium">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">{p.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20 border-t border-white/10 pt-12">
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="font-display text-2xl font-light tracking-tight">{facts.title}</h3>
            <span className="eyebrow hidden text-white/40 sm:block">Key facts</span>
          </div>
          <dl className="mt-6 grid gap-x-12 md:grid-cols-2">
            {facts.rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-white/10 py-4 text-[15px]">
                <dt className="eyebrow pt-1 text-[10px] text-accent/80">{r.label}</dt>
                <dd className="leading-relaxed text-white/80">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
