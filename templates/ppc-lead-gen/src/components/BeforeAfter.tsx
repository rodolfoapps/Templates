import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";

export function BeforeAfter() {
  const { gallery } = siteConfig;
  return (
    <section className="py-14 md:py-20">
      <Container>
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">{gallery.title}</h2>
        <ul className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {gallery.items.map((g) => (
            <li key={g.label} className="w-[80%] shrink-0 snap-center md:w-auto">
              <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-xl">
                <div className="flex aspect-square items-end bg-stone-300 p-3">
                  <span className="rounded bg-black/50 px-2 py-0.5 text-xs text-white">Before</span>
                </div>
                <div className="flex aspect-square items-end bg-gradient-to-br from-brand-light to-stone-100 p-3">
                  <span className="rounded bg-brand px-2 py-0.5 text-xs text-white">After</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted">{g.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
