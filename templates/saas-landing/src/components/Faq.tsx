import { Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Faq() {
  const { faq } = siteConfig;

  return (
    <Section id="faq" className="bg-surface">
      <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
      <div className="mx-auto max-w-3xl divide-y divide-foreground/10 rounded-2xl border border-foreground/10 bg-background">
        {faq.items.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {item.q}
              <svg
                className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
