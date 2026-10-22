import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { IncisionDiagram } from "@/components/IncisionDiagram";
import { CheckIcon } from "@/components/Icons";

/**
 * The facelift, explained: candidacy, technique (with incision diagram),
 * recovery timeline, and the at-a-glance table with cost and financing.
 */
export function Procedure() {
  const { procedure, facts } = siteConfig;

  return (
    <section id="procedure" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <Reveal className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
          <div>
            <p className="eyebrow text-brand">{procedure.eyebrow}</p>
            <h2 className="mt-4 font-display text-[2.3rem] leading-[1.05] font-light tracking-tight md:text-[3.2rem]">{procedure.title}</h2>
          </div>
          <p className="text-pretty text-[15px] leading-relaxed text-muted md:text-base">{procedure.intro}</p>
        </Reveal>

        {/* 1. Candidacy  2. Technique */}
        <div className="mt-16 grid gap-14 border-t border-foreground/10 pt-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow text-[10px] text-brand">01</span>
            <h3 className="mt-2 font-display text-2xl font-light tracking-tight md:text-[1.9rem]">{procedure.candidacy.title}</h3>
            <p className="text-pretty mt-4 text-[15px] leading-relaxed text-muted">{procedure.candidacy.text}</p>
            <ul className="mt-6 space-y-2.5">
              {procedure.candidacy.signs.map((x) => (
                <li key={x} className="flex items-start gap-3 text-[14.5px]"><CheckIcon className="mt-1 size-4 shrink-0 text-brand" />{x}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="grid gap-8 sm:grid-cols-[1fr_200px] sm:items-start">
            <div>
              <span className="eyebrow text-[10px] text-brand">02</span>
              <h3 className="mt-2 font-display text-2xl font-light tracking-tight md:text-[1.9rem]">{procedure.technique.title}</h3>
              <p className="text-pretty mt-4 text-[15px] leading-relaxed text-muted">{procedure.technique.text}</p>
              <ul className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
                {procedure.technique.points.map((p) => (
                  <li key={p.title} className="py-4">
                    <h4 className="font-display text-[15px] font-medium">{p.title}</h4>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="mx-auto w-full max-w-[220px] text-foreground/70 sm:sticky sm:top-28">
              <IncisionDiagram className="w-full" />
              <figcaption className="mt-2 text-center text-[11px] text-muted">Typical incision placement, dotted. Exact placement is planned for your face.</figcaption>
            </figure>
          </Reveal>
        </div>

        {/* 3. Timeline */}
        <Reveal className="mt-16 border-t border-foreground/10 pt-14">
          <span className="eyebrow text-[10px] text-brand">03</span>
          <h3 className="mt-2 font-display text-2xl font-light tracking-tight md:text-[1.9rem]">{procedure.timeline.title}</h3>
          <ol className="no-scrollbar -mx-4 mt-8 flex snap-x gap-6 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-6 md:gap-6 md:overflow-visible md:px-0">
            {procedure.timeline.steps.map((s, i) => (
              <li key={s.label} className="relative w-[70%] shrink-0 snap-start sm:w-[45%] md:w-auto">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand font-display text-[11px] font-semibold text-white">{i + 1}</span>
                  <span aria-hidden className="h-px flex-1 bg-foreground/15" />
                </div>
                <h4 className="mt-4 font-display text-[15px] font-medium">{s.label}</h4>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* 4. At a glance */}
        <Reveal className="mt-16 grid gap-10 border-t border-foreground/10 pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="eyebrow text-[10px] text-brand">04</span>
            <h3 className="mt-2 font-display text-2xl font-light tracking-tight md:text-[1.9rem]">{facts.title}</h3>
            <p className="text-pretty mt-4 text-[14.5px] leading-relaxed text-muted">{procedure.risks} <a href="#faq" className="font-medium text-brand underline-offset-4 hover:underline">{procedure.risksLink}</a></p>
            <Btn href="#consult-form" className="mt-7" arrow>Request consultation</Btn>
          </div>
          <dl className="bg-surface ring-1 ring-foreground/10">
            {facts.rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-foreground/10 px-5 py-4 text-[14.5px] last:border-b-0 sm:grid-cols-[9rem_1fr] sm:px-7">
                <dt className="eyebrow pt-1 text-[10px] text-muted">{r.label}</dt>
                <dd className="leading-relaxed">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
