import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function PressStrip() {
  const { press } = siteConfig;
  return (
    <section className="border-t border-white/10 bg-ink py-7">
      <Container>
        <p className="eyebrow text-center text-white/50">{press.label}</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {press.logos.map((l) => (
            <li key={l.alt}>
              <Image src={l.src} alt={l.alt} width={l.w} height={l.h} className="h-6 w-auto opacity-80 md:h-8" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
