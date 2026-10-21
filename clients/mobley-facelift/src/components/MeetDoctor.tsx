import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";

/** Soft-grey introduction: portrait, his own words, a short bio and four facts. */
export function MeetDoctor() {
  const { meet, cvHref } = siteConfig;

  return (
    <section id="meet" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 lg:px-8 lg:gap-24">
        {/* Portrait panel */}
        <Reveal className="relative mx-auto w-full max-w-[420px] md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(160deg,#e8e5df_0%,#f4f3f0_55%,#e3f3f5_100%)] ring-1 ring-foreground/10">
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(121,209,210,0.25),transparent_65%)]" />
            <Image
              src="/images/dr-steven-mobley.webp"
              alt="Dr. Steven Mobley, double board-certified facial plastic surgeon"
              fill
              sizes="(min-width:768px) 36vw, 90vw"
              className="object-contain object-bottom px-6 pt-8"
            />
            <span className="eyebrow absolute top-5 left-5 text-[10px] text-muted">Steven Mobley, MD</span>
          </div>
          <div className="absolute -right-3 -bottom-3 hidden bg-ink px-5 py-4 text-white shadow-card md:block">
            <p className="font-display text-2xl font-light leading-none">2002</p>
            <p className="eyebrow mt-1.5 text-[9px] text-white/60">Serving Salt Lake City since</p>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <p className="eyebrow text-brand">{meet.eyebrow}</p>
          <h2 className="mt-4 font-display text-[2.3rem] leading-[1.06] font-light tracking-tight md:text-[3.2rem]">{meet.name}</h2>
          <p className="mt-2 text-sm text-muted">{meet.role}</p>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="text-pretty font-display text-[1.15rem] leading-relaxed font-light md:text-[1.3rem]">&ldquo;{meet.quote}&rdquo;</p>
            <footer className="eyebrow mt-3 text-[10px] text-muted">{meet.quoteSource}</footer>
          </blockquote>

          <p className="text-pretty mt-7 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{meet.text}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-foreground/10 pt-7 sm:grid-cols-4">
            {meet.facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow text-[10px] text-brand">{f.label}</dt>
                <dd className="mt-1.5 text-[13px] leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#consult-form" arrow>{meet.cta}</Btn>
            <Btn href={cvHref} variant="outline">{meet.cvCta}</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
