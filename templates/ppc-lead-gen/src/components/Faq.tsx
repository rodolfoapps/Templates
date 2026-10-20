import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Faq() {
  const { faq } = siteConfig;
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-3xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">{faq.title}</h2>
        <div className="mt-8 divide-y divide-foreground/10 rounded-2xl border border-foreground/10">
          {faq.items.map((item) => (
            <details key={item.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium md:text-base">
                {item.q}
                <svg className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
