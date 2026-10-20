import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function LogoCloud() {
  return (
    <section className="border-y border-foreground/5 py-10">
      <Container>
        <p className="text-center text-sm font-medium text-muted">
          Trusted by product teams at
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {siteConfig.logos.map((name) => (
            <li
              key={name}
              className="text-lg font-semibold tracking-tight text-foreground/40"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
