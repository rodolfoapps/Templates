import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink py-10 text-white/60">
      <Container className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
        <Image src="/images/logo-mobley-md.png" alt="Mobley MD" width={596} height={155} className="h-8 w-auto opacity-80" />
        <p className="max-w-xl text-xs leading-relaxed">{siteConfig.footer.note}</p>
        <ul className="flex flex-wrap gap-4 text-xs">
          {siteConfig.footer.links.map((l) => (
            <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer" className="hover:text-white">{l.label}</a></li>
          ))}
        </ul>
        <p className="text-xs md:col-span-3">&copy; {year} {siteConfig.legalName}. {siteConfig.address}. {siteConfig.phone}</p>
      </Container>
    </footer>
  );
}
