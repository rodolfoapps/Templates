import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function ProofStrip() {
  const { proof } = siteConfig;
  return (
    <section className="border-y border-foreground/5 bg-background py-6">
      <Container>
        <p className="text-center text-xs font-semibold tracking-wide text-muted uppercase">
          {proof.label}
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {proof.badges.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
              <span className="size-2 rounded-full bg-brand" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
