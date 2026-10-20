import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon } from "@/components/Icons";

export function FinalCta() {
  const { finalCta, phone, phoneHref, address, email } = siteConfig;
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <Image src="/images/hero.webp" alt="" fill sizes="100vw" className="object-cover object-[55%_30%] opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
      </div>
      <Container className="relative grid gap-12 md:grid-cols-[1fr_minmax(380px,460px)] md:items-center md:gap-20">
        <div>
          <p className="eyebrow text-accent">It all starts right here</p>
          <h2 className="text-balance mt-4 font-display text-[2.2rem] leading-[1.1] font-light tracking-tight md:text-5xl">{finalCta.title}</h2>
          <p className="text-pretty mt-6 max-w-lg text-[17px] leading-relaxed text-white/70">{finalCta.text}</p>
          <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm text-white/65">
            <a href={phoneHref} className="flex items-center gap-3 font-display text-2xl font-light text-white"><PhoneIcon className="size-5 text-accent" />{phone}</a>
            <p>{email}</p>
            <p>{address}</p>
          </div>
        </div>
        <LeadForm id="consult-form-bottom" compact />
      </Container>
    </section>
  );
}
