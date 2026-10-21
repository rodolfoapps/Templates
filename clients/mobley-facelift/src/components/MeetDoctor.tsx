import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

/**
 * Editorial introduction: watermark type, framed studio portrait with a
 * rotated side label, poster-size name, oversized quote mark, two-column
 * bio, numbered highlights and a full-width stat band.
 */
export function MeetDoctor() {
  const { meet } = siteConfig;

  return (
    <section id="meet" className="relative overflow-hidden bg-surface py-20 md:py-32">
      {/* Watermark + soft highlight */}
      <span aria-hidden className="pointer-events-none absolute -top-10 right-[-2%] hidden select-none font-display text-[22rem] leading-none font-light tracking-tight text-foreground/[0.04] lg:block">
        Mobley
      </span>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,0.7),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-16 lg:gap-24">
          {/* Portrait */}
          <Reveal className="relative mx-auto w-full max-w-[460px] md:max-w-none lg:pl-10">
            {/* rotated side label */}
            <span aria-hidden className="eyebrow absolute top-0 left-0 hidden origin-top-left translate-y-[380px] -rotate-90 whitespace-nowrap text-[10px] text-muted lg:block">
              Facial plastic surgeon &middot; Salt Lake City, Utah
            </span>
            {/* offset frame */}
            <div aria-hidden className="absolute inset-0 hidden translate-x-4 translate-y-4 border border-accent md:block lg:left-10" />
            <div className="relative aspect-[4/5] overflow-hidden bg-sand ring-1 ring-foreground/10">
              <Image
                src="/images/dr-mobley-studio.webp"
                alt="Dr. Steven Mobley, double board-certified facial plastic surgeon"
                fill
                sizes="(min-width:768px) 38vw, 90vw"
                className="object-cover object-top"
              />
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

          {/* Copy */}
          <Reveal delay={120} className="md:pt-4">
            <p className="eyebrow text-brand">{meet.eyebrow}</p>
            <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] font-light tracking-[-0.02em] md:text-[3.6rem] lg:text-[4.2rem]">{meet.name}</h2>
            <p className="mt-3 text-sm text-muted">{meet.role}</p>

            <blockquote className="relative mt-10 pl-12">
              <span aria-hidden className="absolute -top-6 left-0 font-display text-[6rem] leading-none font-light text-accent">&ldquo;</span>
              <p className="text-pretty font-display text-[1.2rem] leading-relaxed font-light md:text-[1.45rem]">{meet.quote}&rdquo;</p>
              <footer className="eyebrow mt-3 text-[10px] text-muted">{meet.quoteSource}</footer>
            </blockquote>

            <div className="mt-9 gap-10 text-[14.5px] leading-relaxed text-muted lg:columns-2">
              {meet.paragraphs.map((p) => <p key={p} className="text-pretty mb-4 break-inside-avoid">{p}</p>)}
            </div>

            <ol className="mt-6 grid gap-x-10 gap-y-6 border-t border-foreground/10 pt-8 sm:grid-cols-2">
              {meet.highlights.map((h, i) => (
                <li key={h.title} className="grid grid-cols-[2rem_1fr] gap-2">
                  <span className="eyebrow pt-1 text-[10px] text-brand">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-[15px] font-medium">{h.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-snug text-muted">{h.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Stat band */}
        <Reveal className="mt-16 grid grid-cols-2 divide-foreground/10 border-y border-foreground/10 md:mt-24 md:grid-cols-4 md:divide-x">
          {meet.stats.map((s) => (
            <div key={s.label} className="px-2 py-7 md:px-8 md:py-9">
              <p className="font-display text-[2.6rem] leading-none font-light tracking-tight md:text-[3.2rem]">{s.value}</p>
              <p className="eyebrow mt-3 text-[10px] text-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
