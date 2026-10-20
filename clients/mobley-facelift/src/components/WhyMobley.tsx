import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

const icons: Record<string, { src: string; w: number; h: number }> = {
  seal: { src: "/images/icon-abfprs.png", w: 158, h: 158 },
  book: { src: "/images/icon-book.png", w: 158, h: 132 },
  award: { src: "/images/icon-award.png", w: 96, h: 149 },
};

export function WhyMobley() {
  const { why, cvHref } = siteConfig;
  return (
    <section id="why" className="bg-charcoal text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:py-0">
        {/* Portrait column */}
        <div className="relative order-2 -mb-16 flex items-end justify-center md:order-1 md:mb-0">
          <Image
            src="/images/dr-steven-mobley.webp"
            alt="Dr. Steven Mobley, double board-certified facial plastic surgeon, Salt Lake City"
            width={900}
            height={1125}
            className="w-[78%] max-w-sm object-contain object-bottom md:h-full md:max-h-[820px] md:w-auto md:max-w-full"
            sizes="(min-width:768px) 40vw, 80vw"
          />
        </div>

        <div className="order-1 md:order-2 md:py-20">
          <p className="eyebrow text-accent">{why.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">{why.title}</h2>
          <p className="text-pretty mt-5 leading-relaxed text-white/80">{why.entity}</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-white/10 py-6 sm:grid-cols-4">
            {why.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-medium text-accent">{s.value}</dt>
                <dd className="mt-1 text-xs text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 space-y-6">
            {why.points.map((p) => {
              const ic = icons[p.icon];
              return (
                <li key={p.title} className="flex gap-4">
                  {ic ? <Image src={ic.src} alt="" width={ic.w} height={ic.h} className="size-10 shrink-0 object-contain opacity-90" /> : null}
                  <div>
                    <h3 className="font-display text-base font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{p.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <a href={cvHref} target="_blank" rel="noreferrer" className="eyebrow mt-8 inline-block text-accent underline-offset-4 hover:underline">
            Read Dr. Mobley&apos;s full CV
          </a>
        </div>
      </Container>
    </section>
  );
}
