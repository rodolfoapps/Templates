import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { CompareSlider } from "@/components/CompareSlider";
import { Reveal } from "@/components/Reveal";

export function BeforeAfter() {
  const { gallery, photosHref } = siteConfig;
  return (
    <section id="results" className="bg-surface py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <Reveal>
            <CompareSlider before="/images/cases/hero-before.webp" after="/images/cases/hero-after.webp" width={700} height={934} alt="Facelift patient of Dr. Mobley" />
            <p className="mt-3 text-xs text-muted">Drag to compare. Facelift by Dr. Mobley, unretouched gallery photo. Results vary.</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-brand">{gallery.eyebrow}</p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-[1.1] font-light tracking-tight md:text-5xl">{gallery.title}</h2>
            <p className="text-pretty mt-6 max-w-lg text-[17px] leading-relaxed text-muted">{gallery.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="#consult-form" arrow>Request my consultation</Btn>
              <Btn href={photosHref} variant="outline">{gallery.cta}</Btn>
            </div>
          </Reveal>
        </div>

        <ul className="no-scrollbar -mx-4 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pt-1 pb-12 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {gallery.cases.slice(0, 3).map((c, i) => (
            <Reveal as="li" key={c.src} delay={i * 90} className="w-[82%] shrink-0 snap-center md:w-auto">
              <figure className="bg-white p-2 shadow-soft">
                <div className="relative overflow-hidden">
                  <Image src={c.src} alt={`${c.label}: before on the left, after on the right`} width={c.w} height={c.h} className="w-full" sizes="(min-width:768px) 33vw, 82vw" />
                </div>
                <figcaption className="flex items-center justify-between px-2 pt-3 pb-1 text-xs text-muted">
                  <span>{c.label}</span>
                  <span className="eyebrow text-[9px]">Before &middot; After</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
