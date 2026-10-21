import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CheckIcon } from "@/components/Icons";

/**
 * Editorial introduction. Left column: framed studio portrait with animated
 * stat tiles beneath it. Right column: name, quote, single-column bio and a
 * compact list of facelift-specific highlights. Both columns end together.
 */
export function MeetDoctor() {
  const { meet } = siteConfig;

  return (
    <section id="meet" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <span aria-hidden className="pointer-events-none absolute -top-10 right-[-2%] hidden select-none font-display text-[22rem] leading-none font-light tracking-tight text-foreground/[0.04] lg:block">
        Mobley
      </span>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,0.7),transparent_55%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-x-12 gap-y-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:grid-rows-[auto_auto] md:items-start md:gap-x-14 lg:px-8 lg:gap-x-20">
        {/* Portrait */}
        <div className="order-1 mx-auto w-full max-w-[460px] md:col-start-1 md:row-start-1 md:max-w-none lg:pl-10">
          <Reveal className="relative">
            <span aria-hidden className="eyebrow absolute top-0 left-0 hidden origin-top-left translate-y-[380px] -rotate-90 whitespace-nowrap text-[10px] text-muted lg:block">
              Facial plastic surgeon &middot; Salt Lake City, Utah
            </span>
            <div aria-hidden className="absolute inset-0 hidden translate-x-4 translate-y-4 border border-accent md:block lg:left-10" />
            <div className="relative aspect-[4/5] overflow-hidden bg-sand ring-1 ring-foreground/10">
              <Image src="/images/dr-mobley-studio.webp" alt="Dr. Steven Mobley, double board-certified facial plastic surgeon" fill sizes="(min-width:768px) 38vw, 90vw" className="object-cover object-top" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/50 to-transparent" />
              <p className="absolute bottom-5 left-5 max-w-[55%] text-white">
                <span className="block font-display text-lg font-medium leading-tight">Steven Mobley, MD</span>
                <span className="eyebrow mt-1 block text-[9px] text-white/70">Facial plastic surgeon</span>
              </p>
            </div>
            <div className="absolute -right-3 -bottom-3 hidden bg-ink px-5 py-4 text-white shadow-card md:block lg:-right-6 lg:-bottom-6">
              <p className="font-display text-3xl font-light leading-none">2002</p>
              <p className="eyebrow mt-1.5 text-[9px] text-white/60">Serving Salt Lake City since</p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="order-3 mx-auto w-full max-w-[460px] md:col-start-1 md:row-start-2 md:max-w-none lg:pl-10">
          <Reveal delay={150} className="grid grid-cols-2 gap-px bg-foreground/10 ring-1 ring-foreground/10 md:mt-4 lg:ml-10">
            {meet.stats.map((s) => (
              <div key={s.label} className="group bg-surface px-5 py-6 transition-colors hover:bg-white">
                <CountUp value={s.value} suffix={s.suffix} className="font-display text-[2.6rem] leading-none font-light tracking-tight md:text-[3rem]" />
                <p className="eyebrow mt-3 text-[10px] text-muted">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Copy */}
        <Reveal delay={120} className="order-2 md:col-start-2 md:row-span-2 md:row-start-1 md:pt-2">
          <p className="eyebrow text-brand">{meet.eyebrow}</p>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] font-light tracking-[-0.02em] md:text-[3.4rem] lg:text-[4rem]">{meet.name}</h2>
          <p className="mt-3 text-sm text-muted">{meet.role}</p>

          <blockquote className="relative mt-9 pl-12">
            <span aria-hidden className="absolute -top-6 left-0 font-display text-[6rem] leading-none font-light text-accent">&ldquo;</span>
            <p className="text-pretty font-display text-[1.2rem] leading-relaxed font-light md:text-[1.4rem]">{meet.quote}&rdquo;</p>
            <footer className="eyebrow mt-3 text-[10px] text-muted">{meet.quoteSource}</footer>
          </blockquote>

          <div className="mt-8 max-w-xl space-y-4 text-[15px] leading-relaxed text-muted">
            {meet.paragraphs.map((p) => <p key={p} className="text-pretty">{p}</p>)}
          </div>

          <ul className="mt-8 max-w-xl space-y-3 border-t border-foreground/10 pt-7">
            {meet.highlights.map((h) => (
              <li key={h.title} className="flex items-start gap-3 text-[14.5px] leading-snug">
                <CheckIcon className="mt-1 size-4 shrink-0 text-brand" />
                <span><span className="font-medium text-foreground">{h.title}</span> <span className="text-muted">{h.text}</span></span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
