import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { CompareSlider } from "@/components/CompareSlider";
import { GalleryTiles } from "@/components/GalleryTiles";
import { Reveal } from "@/components/Reveal";

/**
 * Dark gallery panel: the comparison slider is the centrepiece, with four
 * composites cropped to one ratio so the grid sits perfectly even.
 */
export function BeforeAfter() {
  const { gallery, photosHref } = siteConfig;
  const tiles = gallery.cases.slice(0, 4);

  return (
    <section id="results" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(121,209,210,0.12),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <Reveal className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-accent">{gallery.eyebrow}</p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-[1.08] font-light tracking-tight md:text-[3rem]">{gallery.title}</h2>
          </div>
          <p className="text-pretty max-w-md text-[15px] leading-relaxed text-white/65 md:text-right">{gallery.description}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Slider */}
          <Reveal className="lg:col-span-5 lg:self-start">
            <figure className="bg-white/[0.04] p-2 ring-1 ring-white/10">
              <div className="relative">
                <CompareSlider before="/images/cases/hero-before.webp" after="/images/cases/hero-after.webp" width={700} height={934} alt="Facelift patient of Dr. Mobley" />
                <span className="eyebrow pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/70 px-3 py-1.5 text-[10px] text-white/90 backdrop-blur">
                  Drag to compare
                </span>
              </div>
              <figcaption className="flex items-center justify-between px-2 pt-3 pb-1.5 text-xs text-white/50">
                <span>Facelift by Dr. Mobley &middot; unretouched</span>
                <span className="eyebrow text-[9px] text-accent/80">Featured case</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* 2 x 2 composites, click to open the lightbox */}
          <GalleryTiles cases={tiles} />
        </div>

        {/* Footer row */}
        <Reveal className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/45">Photos from the Mobley MD gallery. Individual results vary. Every plan is built around your face at consultation.</p>
          <div className="flex flex-wrap gap-3">
            <Btn href="#consult-form" variant="brand" arrow>Request my consultation</Btn>
            <Btn href={photosHref} variant="outline-light">{gallery.cta}</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
