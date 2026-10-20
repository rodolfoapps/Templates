import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { Dtr } from "@/components/Dtr";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon, StarIcon } from "@/components/Icons";

/**
 * Full-bleed hero, everything above the fold on desktop: headline and proof
 * on the left, the subject in the middle, and a frosted-glass consultation
 * form on the right that lets the photo show through.
 */
export function Hero() {
  const { hero, phone, phoneHref } = siteConfig;

  return (
    <section id="hero" className="relative overflow-hidden bg-ink text-white">
      {/* Desktop photo + gradients */}
      <div aria-hidden className="absolute inset-0 hidden overflow-hidden md:block">
        {/* Layer is wider than the viewport and anchored right, so the subject lands at ~52% */}
        <div className="absolute inset-y-0 right-0 left-[-27%] 2xl:left-[-18%]">
          <Image src="/images/hero.webp" alt="" fill priority sizes="140vw"  className="object-cover object-[50%_10%]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#121315_0%,#121315_18%,rgba(18,19,21,0.85)_30%,rgba(18,19,21,0.05)_44%,rgba(18,19,21,0.05)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,21,0.55)_0%,rgba(18,19,21,0)_25%,rgba(18,19,21,0)_70%,rgba(18,19,21,0.9)_100%)]" />
      </div>

      {/* Mobile photo band */}
      <div className="relative aspect-[4/5] w-full md:hidden">
        <Image src="/images/hero-mobile.webp" alt="" fill priority sizes="100vw" className="object-cover object-[50%_20%]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,21,0.6)_0%,rgba(18,19,21,0)_35%,rgba(18,19,21,0.2)_70%,#121315_100%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pt-2 pb-14 sm:px-6 md:grid-cols-[1fr_minmax(360px,400px)] md:items-center md:gap-10 md:pt-28 md:pb-14 lg:px-8 lg:pt-32 lg:pb-16">
        <div className="md:max-w-[540px]">
          <p className="eyebrow text-accent"><Dtr text={hero.eyebrow} /></p>

          <h1 className="text-balance mt-5 font-display text-[2.35rem] leading-[1.06] font-light tracking-[-0.01em] md:hidden">{hero.mobileTitle}</h1>
          <h1 className="mt-4 hidden font-display text-[3.1rem] leading-[1.04] font-light tracking-[-0.015em] md:block xl:text-[3.6rem]">{hero.title}</h1>

          <p className="text-pretty mt-5 max-w-[500px] text-[16px] leading-relaxed text-white/75 md:text-[17px]">{hero.subtitle}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-white/70">
            <span className="flex gap-0.5 text-accent" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="size-3.5" />)}</span>
            <span>{hero.proofLine}</span>
          </div>

          <div className="mt-7 grid grid-cols-[1.5fr_1fr] gap-3 md:hidden">
            <Btn href="#consult-form" variant="brand" className="w-full">Request consult</Btn>
            <Btn href={phoneHref} variant="outline-light" className="w-full"><PhoneIcon className="size-4" />Call</Btn>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-3 md:max-w-[520px]">
            {hero.bullets.map((b, i) => (
              <li key={b} className="text-[12.5px] leading-snug text-white/65">
                <span className="eyebrow mb-1.5 block text-[10px] text-accent/90">0{i + 1}</span>
                {b}
              </li>
            ))}
          </ul>

          <p className="mt-7 hidden text-sm text-white/55 md:block">
            Prefer to talk? <a href={phoneHref} className="font-medium text-white underline-offset-4 hover:underline">{phone}</a>
          </p>
        </div>

        <LeadForm tone="glass" />
      </div>
    </section>
  );
}
