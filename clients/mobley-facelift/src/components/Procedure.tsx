import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { IncisionDiagram } from "@/components/IncisionDiagram";
import { ChapterNav } from "@/components/ChapterNav";
import { CheckIcon } from "@/components/Icons";

const chapters = [
  { id: "candidacy", num: "01", label: "Candidacy" },
  { id: "technique", num: "02", label: "Technique" },
  { id: "recovery", num: "03", label: "Recovery" },
  { id: "cost", num: "04", label: "Cost & details" },
];

function Numeral({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <span aria-hidden className={`pointer-events-none absolute -top-6 right-4 select-none font-display text-[9rem] leading-none font-light md:-top-8 md:right-8 md:text-[12rem] ${light ? "text-white/[0.06]" : "text-foreground/[0.05]"}`}>
      {n}
    </span>
  );
}

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

        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <ChapterNav chapters={chapters} />

          <div className="space-y-6">
            {/* 01 Candidacy — sand panel */}
            <Reveal as="section" className="relative overflow-hidden bg-sand/70 p-7 ring-1 ring-foreground/10 md:p-12">
              <div id="candidacy" className="absolute -top-28" aria-hidden />
              <Numeral n="01" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
                <div>
                  <span className="eyebrow text-[10px] text-brand">01 &middot; Candidacy</span>
                  <h3 className="mt-3 font-display text-[1.8rem] leading-tight font-light tracking-tight md:text-[2.2rem]">{procedure.candidacy.title}</h3>
                  <p className="text-pretty mt-4 text-[15px] leading-relaxed text-muted">{procedure.candidacy.text}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {procedure.candidacy.signs.map((x, i) => (
                    <li key={x} className="flex items-start gap-3 bg-white p-4 ring-1 ring-foreground/10">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand"><CheckIcon className="size-3.5" /></span>
                      <span className="text-[14px] leading-snug"><span className="eyebrow mr-1 text-[9px] text-muted">0{i + 1}</span><br />{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 02 Technique — ink panel with the diagram as the centrepiece */}
            <Reveal as="section" className="relative overflow-hidden bg-ink p-7 text-white md:p-12">
              <div id="technique" className="absolute -top-28" aria-hidden />
              <Numeral n="02" light />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(121,209,210,0.14),transparent_55%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
                <figure className="mx-auto w-full max-w-[380px] text-white/70">
                  <IncisionDiagram className="w-full" />
                  <figcaption className="mt-3 text-center text-[11px] text-white/50">Typical incision placement, dotted. Exact placement is planned for your face.</figcaption>
                </figure>
                <div>
                  <span className="eyebrow text-[10px] text-accent">02 &middot; Technique</span>
                  <h3 className="mt-3 font-display text-[1.8rem] leading-tight font-light tracking-tight md:text-[2.2rem]">{procedure.technique.title}</h3>
                  <p className="text-pretty mt-4 text-[15px] leading-relaxed text-white/70">{procedure.technique.text}</p>
                  <ol className="mt-7 divide-y divide-white/10 border-y border-white/10">
                    {procedure.technique.points.map((p, i) => (
                      <li key={p.title} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                        <span className="eyebrow pt-1 text-[10px] text-accent">0{i + 1}</span>
                        <div>
                          <h4 className="font-display text-[15px] font-medium">{p.title}</h4>
                          <p className="mt-1 text-[13.5px] leading-relaxed text-white/60">{p.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>

            {/* 03 Recovery — timeline track */}
            <Reveal as="section" className="relative overflow-hidden bg-white p-7 ring-1 ring-foreground/10 md:p-12">
              <div id="recovery" className="absolute -top-28" aria-hidden />
              <Numeral n="03" />
              <div className="relative">
                <span className="eyebrow text-[10px] text-brand">03 &middot; Recovery</span>
                <h3 className="mt-3 font-display text-[1.8rem] leading-tight font-light tracking-tight md:text-[2.2rem]">{procedure.timeline.title}</h3>

                {/* desktop track */}
                <ol className="relative mt-10 hidden md:grid md:grid-cols-6 md:gap-5">
                  <span aria-hidden className="absolute top-[13px] right-0 left-0 h-px bg-foreground/15" />
                  <span aria-hidden className="absolute top-[13px] left-0 h-px w-1/6 bg-brand" />
                  {procedure.timeline.steps.map((s, i) => (
                    <li key={s.label} className="relative">
                      <span className={`relative flex size-7 items-center justify-center rounded-full font-display text-[11px] font-semibold ring-4 ring-white ${i === 0 ? "bg-brand text-white" : "bg-white text-foreground ring-1 ring-foreground/20"}`}>{i + 1}</span>
                      <p className="eyebrow mt-5 text-[10px] text-brand">{s.label}</p>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{s.text}</p>
                    </li>
                  ))}
                </ol>

                {/* mobile vertical */}
                <ol className="relative mt-8 space-y-7 border-l border-foreground/15 pl-7 md:hidden">
                  {procedure.timeline.steps.map((s, i) => (
                    <li key={s.label} className="relative">
                      <span className={`absolute -left-[41px] flex size-7 items-center justify-center rounded-full font-display text-[11px] font-semibold ${i === 0 ? "bg-brand text-white" : "bg-white text-foreground ring-1 ring-foreground/20"}`}>{i + 1}</span>
                      <p className="eyebrow text-[10px] text-brand">{s.label}</p>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{s.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* 04 Cost & details — table as a dark card */}
            <Reveal as="section" className="relative overflow-hidden bg-sand/70 p-7 ring-1 ring-foreground/10 md:p-12">
              <div id="cost" className="absolute -top-28" aria-hidden />
              <Numeral n="04" />
              <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                <div>
                  <span className="eyebrow text-[10px] text-brand">04 &middot; Cost &amp; details</span>
                  <h3 className="mt-3 font-display text-[1.8rem] leading-tight font-light tracking-tight md:text-[2.2rem]">{facts.title}</h3>
                  <p className="text-pretty mt-4 text-[14.5px] leading-relaxed text-muted">{procedure.risks} <a href="#faq" className="font-medium text-brand underline-offset-4 hover:underline">{procedure.risksLink}</a></p>
                  <Btn href="#consult-form" className="mt-7" arrow>Request consultation</Btn>
                </div>
                <dl className="bg-ink text-white shadow-card">
                  {facts.rows.map((r) => {
                    const hot = r.label === "Cost";
                    return (
                      <div key={r.label} className={`grid grid-cols-[6.5rem_1fr] gap-4 border-b border-white/10 px-5 py-4 text-[14px] last:border-b-0 sm:grid-cols-[8.5rem_1fr] sm:px-7 ${hot ? "bg-white/[0.05]" : ""}`}>
                        <dt className="eyebrow pt-1 text-[10px] text-accent">{r.label}</dt>
                        <dd className={`leading-relaxed ${hot ? "font-display text-[15px] font-medium text-white" : "text-white/80"}`}>{r.value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
