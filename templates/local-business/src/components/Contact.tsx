import { Button, Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";

const inputClass =
  "w-full rounded-lg border border-foreground/15 bg-background px-3.5 py-2.5 text-sm placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function Contact() {
  const { contact } = siteConfig;

  return (
    <Section id="contact" className="bg-surface">
      <SectionHeader
        eyebrow={contact.eyebrow}
        title={contact.title}
        description={contact.description}
      />
      <form
        className="mx-auto grid max-w-2xl gap-5 rounded-2xl border border-foreground/10 bg-background p-6 sm:grid-cols-2 sm:p-8"
        action="#"
        method="post"
      >
        <label className="block text-sm font-medium">
          Name
          <input name="name" className={`${inputClass} mt-1.5`} placeholder="Jane Doe" required />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input name="phone" type="tel" className={`${inputClass} mt-1.5`} placeholder="(512) 555-0100" required />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Email
          <input name="email" type="email" className={`${inputClass} mt-1.5`} placeholder="jane@example.com" />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Service needed
          <select name="service" className={`${inputClass} mt-1.5`} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {contact.serviceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Tell us what&apos;s happening
          <textarea
            name="message"
            rows={4}
            className={`${inputClass} mt-1.5`}
            placeholder="Water heater is leaking from the bottom…"
          />
        </label>
        <div className="sm:col-span-2">
          <Button type="submit" className="w-full" size="lg">
            Request estimate
          </Button>
          <p className="mt-3 text-center text-xs text-muted">
            Form is a visual mockup — wire it to a form service or API route when going live.
          </p>
        </div>
      </form>
    </Section>
  );
}
