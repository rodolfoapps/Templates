import Image from "next/image";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";
import { Dtr } from "@/components/Dtr";
import { LeadForm } from "@/components/LeadForm";
import { CheckIcon, PhoneIcon, StarIcon } from "@/components/Icons";

export function Hero() {
  const { hero, phone, phoneHref } = siteConfig;

  return (
    <section id="hero" className="relative overflow-hidden bg-charcoal text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(121,209,210,0.18),transparent_55%)]" />
      <Container className="relative grid gap-10 py-12 md:grid-cols-[1.1fr_minmax(360px,0.9fr)] md:items-start md:gap-14 md:py-20">
        <div>
          <p className="eyebrow text-accent"><Dtr text={hero.eyebrow} /></p>

          <h1 className="text-balance mt-4 font-display text-[2.1rem] leading-[1.1] font-light md:hidden">{hero.mobileTitle}</h1>
          <h1 className="text-balance mt-4 hidden font-display text-4xl font-light leading-[1.1] md:block lg:text-[3.25rem]">{hero.title}</h1>

          <p className="text-pretty mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{hero.subtitle}</p>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80">
            <span className="flex text-accent" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="size-4" />)}
            </span>
            <span>{hero.proofLine}</span>
          </p>

          {/* Mobile first-screen CTAs */}
          <div className="mt-6 grid grid-cols-[1.55fr_1fr] gap-3 md:hidden">
            <Btn href="#consult-form" className="w-full">Request consult</Btn>
            <Btn href={phoneHref} variant="outline-light" className="w-full"><PhoneIcon className="size-4" />Call</Btn>
          </div>

          <ul className="mt-8 space-y-3">
            {hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-white/85 md:text-[15px]">
                <CheckIcon className="mt-1 size-4 shrink-0 text-accent" />
                {b}
              </li>
            ))}
          </ul>

          {/* Real before/after pair, desktop only, keeps mobile first screen light */}
          <div className="mt-10 hidden gap-3 md:grid md:grid-cols-[1fr_1fr_1.3fr] md:items-end">
            <figure>
              <Image src="/images/cases/hero-before.webp" alt="Facelift patient before surgery" width={700} height={934} className="w-full" />
              <figcaption className="eyebrow mt-2 text-white/60">Before</figcaption>
            </figure>
            <figure>
              <Image src="/images/cases/hero-after.webp" alt="Same patient after facelift by Dr. Mobley" width={700} height={934} className="w-full" />
              <figcaption className="eyebrow mt-2 text-accent">After</figcaption>
            </figure>
            <p className="pb-7 text-sm leading-relaxed text-white/70">
              Facelift by Dr. Mobley. Unretouched patient photo from the Mobley MD gallery. Results vary.
            </p>
          </div>

          <p className="mt-8 hidden items-center gap-2 text-sm text-white/70 md:flex">
            Prefer to talk? <a href={phoneHref} className="font-semibold text-white underline-offset-4 hover:underline">{phone}</a>
          </p>
        </div>

        <LeadForm />
      </Container>
    </section>
  );
}
