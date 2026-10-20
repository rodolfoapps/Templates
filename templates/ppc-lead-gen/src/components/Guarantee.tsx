import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Guarantee() {
  const { guarantee } = siteConfig;
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-brand/30 bg-brand-light/60 p-6 md:flex-row md:items-center md:p-8">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zm-3 9l2 2 4-4" />
            </svg>
          </span>
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{guarantee.title}</h2>
            <p className="text-pretty mt-1 text-sm text-muted md:text-base">{guarantee.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
