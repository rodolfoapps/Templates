import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="border-t border-foreground/10 py-24 sm:py-32">
      <Container className="text-center">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand uppercase">
          {contact.eyebrow}
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          {contact.title}
        </h2>
        <p className="text-pretty mx-auto mt-6 max-w-xl text-lg text-muted">
          {contact.description}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-10 inline-block text-2xl font-medium text-brand underline-offset-8 hover:underline sm:text-3xl"
        >
          {siteConfig.email}
        </a>
      </Container>
    </section>
  );
}
