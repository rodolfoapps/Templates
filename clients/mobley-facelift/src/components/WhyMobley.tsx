import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function WhyMobley() {
  const { why, cvHref } = siteConfig;
  return (
    <section id="why" className="relative overflow-hidden bg-white">
      <Container className="grid md:grid-cols-2 md:gap-12 lg:gap-20">
        {/* Portrait on a soft circle */}
        <div className="relative order-2 flex items-end justify-center pt-10 md:order-1 md:pt-0">
          <div aria-hidden className="absolute bottom-0 left-1/2 aspect-square w-[88%] -translate-x-1/2 translate-y-[18%] rounded-full bg-[radial-gradient(circle_at_50%_40%,#e3f3f5,#f4f3f0_60%,transparent_72%)]" />
          <Image
            src="/images/dr-steven-mobley.webp"
            alt="Dr. Steven Mobley, double board-certified facial plastic surgeon, Salt Lake City"
            width={900}
            height={1125}
            className="relative h-auto w-[82%] max-w-[420px] md:w-full md:max-w-[600px]"
            sizes="(min-width:768px) 40vw, 82vw"
          />
          <figcaption className="eyebrow absolute bottom-6 left-0 hidden text-[10px] text-muted md:block">
            Steven Mobley, MD
          </figcaption>
        </div>

        <Reveal className="order-1 py-20 md:order-2 md:py-32">
          <p className="eyebrow text-brand">{why.eyebrow}</p>
          <h2 className="mt-4 font-display text-[2.2rem] leading-[1.1] font-light tracking-tight md:text-5xl">{why.title}</h2>
          <p className="text-pretty mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{why.entity}</p>


          <ul className="mt-8 divide-y divide-foreground/10 border-t border-foreground/10">
            {why.points.map((p, i) => (
              <li key={p.title} className="grid gap-2 py-6 sm:grid-cols-[2.5rem_1fr]">
                <span className="eyebrow pt-1 text-[10px] text-brand">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-base font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href={cvHref} target="_blank" rel="noreferrer" className="eyebrow mt-6 inline-flex items-center gap-2 text-brand underline-offset-[6px] hover:underline">
            Read Dr. Mobley&apos;s full CV
            <span aria-hidden>&rarr;</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
