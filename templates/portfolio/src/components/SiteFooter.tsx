import { Container, Logo } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <Logo name={siteConfig.name} mark={siteConfig.mark} />
        <ul className="flex gap-6 text-sm text-muted">
          {siteConfig.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="hover:text-foreground">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          &copy; {year} {siteConfig.legalName}
        </p>
      </Container>
    </footer>
  );
}
