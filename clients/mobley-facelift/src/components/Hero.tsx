import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { Dtr } from "@/components/Dtr";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon, StarIcon } from "@/components/Icons";

/**
 * Editorial hero: full-bleed photo with the subject on the right, headline
 * and CTAs on the left. The consultation form card sits in the band below
 * and is pulled up to overlap the hero's bottom edge on desktop, so its title
 * and first fields are still above the fold without covering the photo.
 */
export function Hero() {
  const { hero, phone, phoneHref } = siteConfig;

  return (
    <>
      <section id="hero" className="relative overflow-hidden bg-ink text-white">
        {/* Desktop photo + gradients */}
        <div aria-hidden className="absolute inset-0 hidden md:block">
          <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="object-cover object-[72%_22%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#121315_0%,#121315_24%,rgba(18,19,21,0.82)_40%,rgba(18,19,21,0.1)_58%,rgba(18,19,21,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,21,0.6)_0%,rgba(18,19,21,0)_28%,rgba(18,19,21,0)_62%,#121315_100%)]" />
        </div>

        {/* Mobile photo band */}
        <div className="relative aspect-[4/5] w-full md:hidden">
          <Image src="/images/hero-mobile.webp" alt="" fill priority sizes="100vw" className="object-cover object-[50%_20%]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,21,0.6)_0%,rgba(18,19,21,0)_35%,rgba(18,19,21,0.2)_70%,#121315_100%)]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pt-2 pb-12 sm:px-6 md:min-h-[min(88vh,880px)] md:pt-36 md:pb-72 lg:px-8">
          <div className="max-w-[600px]">
            <p className="eyebrow text-accent"><Dtr text={hero.eyebrow} /></p>

            <h1 className="text-balance mt-5 font-display text-[2.35rem] leading-[1.06] font-light tracking-[-0.01em] md:hidden">{hero.mobileTitle}</h1>
            <h1 className="mt-5 hidden font-display text-[3.4rem] leading-[1.04] font-light tracking-[-0.015em] md:block xl:text-[4.1rem]">{hero.title}</h1>

            <p className="text-pretty mt-6 max-w-[520px] text-[17px] leading-relaxed text-white/75 md:text-lg">{hero.subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-white/70">
              <span className="flex gap-0.5 text-accent" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="size-3.5" />)}</span>
              <span>{hero.proofLine}</span>
            </div>

            <div className="mt-8 grid grid-cols-[1.5fr_1fr] gap-3 md:flex md:gap-4">
              <Btn href="#consult-form" variant="brand" className="w-full md:w-auto" arrow>Request consultation</Btn>
              <Btn href={phoneHref} variant="outline-light" className="w-full md:w-auto"><PhoneIcon className="size-4" /><span className="md:hidden">Call</span><span className="hidden md:inline">{phone}</span></Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials + form card (card overlaps the hero on desktop) */}
      <section className="relative bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_minmax(380px,460px)] md:gap-16 lg:px-8">
          <ul className="grid gap-6 py-10 md:gap-8 md:py-14 lg:grid-cols-3">
            {hero.bullets.map((b, i) => (
              <li key={b} className="border-t border-foreground/10 pt-5 text-[14px] leading-relaxed text-muted">
                <span className="eyebrow mb-2 block text-[10px] text-brand">0{i + 1}</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="relative z-10 pb-12 md:-mt-64 md:pb-16">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
