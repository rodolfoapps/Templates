import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { CheckIcon } from "@/components/Icons";

/** Soft-grey introduction: studio portrait, his own words, and his facelift-specific experience. */
export function MeetDoctor() {
  const { meet } = siteConfig;

  return (
    <section id="meet" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16 lg:px-8 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-[460px] md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-foreground/10">
            <Image
              src="/images/dr-mobley-studio.webp"
              alt="Dr. Steven Mobley, double board-certified facial plastic surgeon"
              fill
              sizes="(min-width:768px) 38vw, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -right-3 -bottom-3 hidden bg-ink px-5 py-4 text-white shadow-card md:block">
            <p className="font-display text-2xl font-light leading-none">2002</p>
            <p className="eyebrow mt-1.5 text-[9px] text-white/60">Serving Salt Lake City since</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow text-brand">{meet.eyebrow}</p>
          <h2 className="mt-4 font-display text-[2.3rem] leading-[1.06] font-light tracking-tight md:text-[3.2rem]">{meet.name}</h2>
          <p className="mt-2 text-sm text-muted">{meet.role}</p>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="text-pretty font-display text-[1.15rem] leading-relaxed font-light md:text-[1.3rem]">&ldquo;{meet.quote}&rdquo;</p>
            <footer className="eyebrow mt-3 text-[10px] text-muted">{meet.quoteSource}</footer>
          </blockquote>

          <div className="mt-7 max-w-xl space-y-4 text-[15px] leading-relaxed text-muted md:text-base">
            {meet.paragraphs.map((p) => <p key={p} className="text-pretty">{p}</p>)}
          </div>

          <ul className="mt-8 grid gap-3 border-t border-foreground/10 pt-7 sm:grid-cols-2">
            {meet.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[14px] leading-snug">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
