import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function About() {
  const { about, hours } = siteConfig;

  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand uppercase">
            {about.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold tracking-tight">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-foreground/10 bg-background p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Hours & location</h3>
          <ul className="mt-5 divide-y divide-foreground/10">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between py-3 text-sm">
                <span className="text-muted">{h.day}</span>
                <span className="font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm">
            <p className="font-medium">{siteConfig.address}</p>
            <p className="text-muted">Serving {siteConfig.serviceArea}</p>
            <p>
              <a href={siteConfig.phoneHref} className="font-medium text-brand hover:text-brand-dark">
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <div className="mt-6 aspect-video rounded-xl bg-[linear-gradient(135deg,var(--color-brand-light),var(--color-surface))] ring-1 ring-foreground/5">
            <p className="p-4 text-xs text-muted">Map embed placeholder</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
