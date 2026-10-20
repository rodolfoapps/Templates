import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

/** Business identity, licence and privacy — what Google's policy asks for. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <Container className="flex flex-col gap-3 py-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {year} {siteConfig.legalName} · {siteConfig.address} · {siteConfig.license}
        </p>
        <ul className="flex gap-4">
          {siteConfig.footer.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
