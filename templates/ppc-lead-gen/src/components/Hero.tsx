import { Button, Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Dtr } from "@/components/Dtr";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon } from "@/components/PhoneIcon";
import { RatingLine } from "@/components/Stars";

/**
 * Desktop: two columns — message, proof bullets and rating on the left,
 * form on the right, all above the fold.
 * Mobile: short headline, one-line subhead, rating and the primary CTA in
 * the first screen; the form sits one scroll down.
 */
export function Hero() {
  const { hero, phone, phoneHref, mobilePrimaryCta } = siteConfig;
  const callFirst = mobilePrimaryCta === "call";

  return (
    <section id="hero" className="bg-surface">
      <Container className="grid gap-10 py-10 md:grid-cols-[1.15fr_1fr] md:items-start md:gap-12 md:py-16 lg:py-20">
        <div>
          {/* Headline: short variant on mobile, full variant from md up. */}
          <h1 className="text-balance text-[2rem] leading-[1.1] font-semibold tracking-tight md:hidden">
            <Dtr text={hero.mobileTitle} />
          </h1>
          <h1 className="text-balance hidden text-4xl font-semibold tracking-tight md:block lg:text-5xl">
            <Dtr text={hero.title} />
          </h1>

          <p className="text-pretty mt-4 text-base text-muted md:text-lg">{hero.subtitle}</p>

          <RatingLine className="mt-4" />

          {/* Mobile-only primary CTA row (first screen). */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:hidden">
            <Button href={callFirst ? phoneHref : "#quote-form"} size="lg" className="w-full">
              {callFirst ? (
                <>
                  <PhoneIcon className="size-4" />
                  Call now
                </>
              ) : (
                siteConfig.form.button
              )}
            </Button>
            <Button
              href={callFirst ? "#quote-form" : phoneHref}
              size="lg"
              variant="secondary"
              className="w-full"
            >
              {callFirst ? "Get my quote" : `Call ${phone}`}
            </Button>
          </div>

          <ul className="mt-8 space-y-3">
            {hero.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm md:text-base">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                  <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* Photo placeholder — desktop only so the mobile first screen stays light. */}
          <div className="mt-8 hidden aspect-[16/9] items-end rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-5 text-white md:flex">
            <p className="text-sm text-white/80">{hero.photoCaption}</p>
          </div>
        </div>

        <LeadForm />
      </Container>
    </section>
  );
}
