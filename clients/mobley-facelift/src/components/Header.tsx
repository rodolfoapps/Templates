import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { PhoneIcon } from "@/components/Icons";

/** Transparent header over the hero. Logo, phone, one badge. No nav. */
export function Header({ solid = false }: { solid?: boolean }) {
  return (
    <header className={solid ? "bg-ink text-white" : "absolute inset-x-0 top-0 z-30 text-white"}>
      <div className="h-px w-full bg-accent/70" aria-hidden />
      <Container className="flex h-[76px] items-center justify-between md:h-[88px]">
        <a href="#hero" aria-label="Mobley MD Facial Plastic Surgery">
          <Image src="/images/logo-mobley-md.png" alt="Mobley MD Facial Plastic Surgery" width={596} height={155} priority className="h-9 w-auto md:h-11" />
        </a>
        <div className="flex items-center gap-7">
          <span className="eyebrow hidden text-white/60 lg:block">{siteConfig.header.badge}</span>
          <a href={siteConfig.phoneHref} className="hidden items-center gap-2.5 font-display text-sm font-medium tracking-wide md:flex">
            <PhoneIcon className="size-4 text-accent" />
            {siteConfig.phone}
          </a>
          <a href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phone}`} className="flex size-11 items-center justify-center rounded-full border border-white/30 text-white md:hidden">
            <PhoneIcon className="size-5" />
          </a>
        </div>
      </Container>
    </header>
  );
}
