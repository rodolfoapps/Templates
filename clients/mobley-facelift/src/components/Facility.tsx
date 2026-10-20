import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { PlaneIcon } from "@/components/Icons";

export function Facility() {
  const { facility, travel } = siteConfig;
  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        <div className="relative">
          <Reveal className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
            <Image src="/images/millcreek-surgical-suite.webp" alt="Operating room at Millcreek Surgical Suite, Salt Lake City" fill className="object-cover" sizes="(min-width:1280px) 1152px, 100vw" />
          </Reveal>
          <Reveal delay={150} className="relative -mt-10 ml-auto max-w-xl bg-white p-8 shadow-card md:absolute md:right-0 md:bottom-0 md:mt-0 md:translate-y-1/3 md:p-10">
            <p className="eyebrow text-brand">{facility.eyebrow}</p>
            <h2 className="mt-3 font-display text-[1.8rem] leading-tight font-light tracking-tight md:text-[2.2rem]">{facility.title}</h2>
            <p className="text-pretty mt-4 text-[15px] leading-relaxed text-muted">{facility.text}</p>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid items-center gap-8 border-t border-foreground/10 pt-12 md:mt-48 md:grid-cols-[auto_1fr_auto]">
          <PlaneIcon className="size-8 text-brand" />
          <div>
            <p className="eyebrow text-muted">{travel.eyebrow}</p>
            <h3 className="mt-1.5 font-display text-xl font-light">{travel.title}</h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{travel.text}</p>
          </div>
          <Image src="/images/mobley-md-team.webp" alt="The Mobley MD team" width={1200} height={800} className="hidden w-56 object-cover md:block" />
        </Reveal>
      </Container>
    </section>
  );
}
