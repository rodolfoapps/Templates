import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon } from "@/components/Icons";

export function FinalCta() {
  const { finalCta, phone, phoneHref, address, email } = siteConfig;
  return (
    <section className="bg-charcoal py-16 text-white md:py-24">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <div>
          <p className="eyebrow text-accent">It all starts right here</p>
          <h2 className="text-balance mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">{finalCta.title}</h2>
          <p className="text-pretty mt-5 leading-relaxed text-white/75">{finalCta.text}</p>
          <div className="mt-8 space-y-2 text-sm text-white/75">
            <a href={phoneHref} className="flex items-center gap-2 font-display text-xl font-medium text-white"><PhoneIcon className="size-5 text-accent" />{phone}</a>
            <p>{email}</p>
            <p>{address}</p>
          </div>
        </div>
        <LeadForm id="consult-form-bottom" compact />
      </Container>
    </section>
  );
}
