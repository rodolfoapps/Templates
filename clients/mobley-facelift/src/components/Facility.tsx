import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { PlaneIcon } from "@/components/Icons";

export function Facility() {
  const { facility, travel } = siteConfig;
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="grid grid-cols-[1.4fr_1fr] gap-3">
          <Image src="/images/millcreek-surgical-suite.webp" alt="Operating room at Millcreek Surgical Suite, Salt Lake City" width={1000} height={667} className="w-full" sizes="(min-width:768px) 30vw, 60vw" />
          <Image src="/images/mobley-md-team.webp" alt="The Mobley MD surgical team" width={1200} height={800} className="h-full w-full object-cover" sizes="(min-width:768px) 20vw, 40vw" />
        </div>
        <div>
          <p className="eyebrow text-brand">{facility.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">{facility.title}</h2>
          <p className="text-pretty mt-5 leading-relaxed text-muted">{facility.text}</p>

          <div className="mt-8 flex gap-4 border-l-2 border-brand bg-white p-5">
            <PlaneIcon className="size-6 shrink-0 text-brand" />
            <div>
              <p className="eyebrow text-[11px] text-muted">{travel.eyebrow}</p>
              <h3 className="mt-1 font-display text-lg font-medium">{travel.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{travel.text}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
