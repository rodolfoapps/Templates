import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function HowItWorks() {
  const { steps } = siteConfig;
  return (
    <section className="py-14 md:py-20">
      <Container>
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">{steps.title}</h2>
        <ol className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
          {steps.items.map((s, i) => (
            <li key={s.title} className="flex gap-4 md:block">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="md:mt-4">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
