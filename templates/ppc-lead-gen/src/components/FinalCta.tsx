import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon } from "@/components/PhoneIcon";

export function FinalCta() {
  const { finalCta, phone, phoneHref } = siteConfig;
  return (
    <section className="bg-foreground py-14 text-background md:py-20">
      <Container className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{finalCta.title}</h2>
          <p className="text-pretty mt-3 text-lg text-background/70">{finalCta.description}</p>
          <a
            href={phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-xl font-semibold text-background"
          >
            <PhoneIcon className="size-5 text-brand" />
            {phone}
          </a>
        </div>
        <LeadForm id="quote-form-bottom" compact className="text-foreground" />
      </Container>
    </section>
  );
}
