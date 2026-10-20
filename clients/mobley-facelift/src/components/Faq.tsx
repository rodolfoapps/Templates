import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { PlusIcon } from "@/components/Icons";

export function Faq() {
  const { faq } = siteConfig;
  return (
    <section id="faq" className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <p className="eyebrow text-center text-brand">{faq.eyebrow}</p>
        <h2 className="mt-3 text-center font-display text-3xl font-light tracking-tight md:text-4xl">{faq.title}</h2>
        <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-medium md:text-base">
                {item.q}
                <PlusIcon className="size-5 shrink-0 text-brand transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
