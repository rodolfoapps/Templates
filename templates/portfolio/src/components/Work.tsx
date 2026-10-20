import { Section, SectionHeader } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function Work() {
  const { work } = siteConfig;

  return (
    <Section id="work" className="pt-0">
      <SectionHeader eyebrow={work.eyebrow} title={work.title} align="left" />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {work.items.map((p) => (
          <li key={p.title} className="group">
            <a href="#" className="block">
              <div
                className={`aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${p.tone} transition-transform duration-300 group-hover:scale-[1.02]`}
              >
                <div className="flex h-full items-end p-5">
                  <span className="rounded-full bg-black/30 px-2.5 py-1 text-xs text-white backdrop-blur">
                    Replace with project image
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs text-muted">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{p.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
