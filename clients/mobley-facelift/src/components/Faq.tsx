import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";
import { PlusIcon } from "@/components/Icons";

export function Faq() {
  const { faq } = siteConfig;
  return (
    <section id="faq" className="bg-surface py-20 md:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow text-brand">{faq.eyebrow}</p>
          <h2 className="mt-4 font-display text-[2.2rem] leading-[1.1] font-light tracking-tight md:text-5xl">{faq.title}</h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">Straight answers, in Dr. Mobley&apos;s words, to the questions patients ask most before a consultation.</p>
        </Reveal>
        <Reveal delay={100} className="divide-y divide-foreground/10 border-y border-foreground/10">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[15px] font-medium md:text-[17px]">
                {item.q}
                <PlusIcon className="size-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
