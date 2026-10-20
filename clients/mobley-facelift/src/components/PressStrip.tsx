import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function PressStrip() {
  const { press } = siteConfig;
  return (
    <section className="border-b border-foreground/10 bg-white py-8">
      <Container className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <p className="eyebrow text-muted">{press.label}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {press.logos.map((l) => (
            <li key={l.alt}>
              <Image src={l.src} alt={l.alt} width={l.w} height={l.h} className="h-5 w-auto opacity-90 invert md:h-7" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
