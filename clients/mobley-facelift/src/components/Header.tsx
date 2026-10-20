import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { PhoneIcon } from "@/components/Icons";

/** Slim, no-nav header in the site's dark style. */
export function Header() {
  return (
    <header className="bg-charcoal text-white">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#hero" aria-label="Mobley MD Facial Plastic Surgery">
          <Image src="/images/logo-mobley-md.png" alt="Mobley MD Facial Plastic Surgery" width={596} height={155} priority className="h-9 w-auto md:h-11" />
        </a>
        <div className="flex items-center gap-5">
          <span className="eyebrow hidden text-white/70 lg:block">{siteConfig.header.badge}</span>
          <a href={siteConfig.phoneHref} className="hidden items-center gap-2 font-display text-sm font-medium tracking-wide md:flex">
            <PhoneIcon className="size-4 text-accent" />
            {siteConfig.phone}
          </a>
          <a href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phone}`} className="flex size-10 items-center justify-center border border-accent text-accent md:hidden">
            <PhoneIcon className="size-5" />
          </a>
        </div>
      </Container>
    </header>
  );
}
