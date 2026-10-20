import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink py-12 text-white/55">
      <Container className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start">
        <Image src="/images/logo-mobley-md.png" alt="Mobley MD" width={596} height={155} className="h-8 w-auto opacity-80" />
        <p className="max-w-xl text-xs leading-relaxed">{siteConfig.footer.note}</p>
        <ul className="flex flex-wrap gap-5 text-xs">
          {siteConfig.footer.links.map((l) => (
            <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer" className="eyebrow text-[10px] hover:text-white">{l.label}</a></li>
          ))}
        </ul>
        <p className="text-[11px] md:col-span-3">&copy; {year} {siteConfig.legalName}. {siteConfig.address}. {siteConfig.phone}</p>
      </Container>
    </footer>
  );
}
