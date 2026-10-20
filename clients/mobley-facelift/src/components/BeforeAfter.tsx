import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";

export function BeforeAfter() {
  const { gallery, photosHref } = siteConfig;
  return (
    <section id="results" className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-brand">{gallery.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">{gallery.title}</h2>
          <p className="text-pretty mt-4 text-muted">{gallery.description}</p>
        </div>

        <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-3">
          {gallery.cases.map((c) => (
            <li key={c.src} className="w-[86%] shrink-0 snap-center md:w-auto">
              <figure>
                <div className="relative">
                  <Image src={c.src} alt={`${c.label}: before on the left, after on the right`} width={c.w} height={c.h} className="w-full bg-surface" sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 86vw" />
                  <span className="eyebrow absolute bottom-2 left-2 bg-black/55 px-2 py-1 text-[10px] text-white">Before</span>
                  <span className="eyebrow absolute right-2 bottom-2 bg-brand px-2 py-1 text-[10px] text-white">After</span>
                </div>
                <figcaption className="mt-2 text-sm text-muted">{c.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Btn href={photosHref} variant="outline">{gallery.cta}</Btn>
          <Btn href="#consult-form">Request my consultation</Btn>
        </div>
      </Container>
    </section>
  );
}
