import type { TemplateEntry } from "@templates/registry";

export function TemplateCard({ template }: { template: TemplateEntry }) {
  return (
    <a
      href={template.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-shadow hover:shadow-lg"
    >
      {/* Abstract preview */}
      <div
        className="relative aspect-[16/10] p-5"
        style={{ background: `linear-gradient(135deg, ${template.accent}22, ${template.accent}66)` }}
      >
        <div className="flex h-full flex-col rounded-lg bg-white/80 p-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full" style={{ background: template.accent }} />
            <span className="h-1.5 w-10 rounded bg-neutral-300" />
            <span className="ml-auto h-1.5 w-6 rounded bg-neutral-300" />
          </div>
          <div className="mt-4 h-2.5 w-3/4 rounded bg-neutral-800/80" />
          <div className="mt-1.5 h-2.5 w-1/2 rounded bg-neutral-800/60" />
          <div className="mt-3 h-1.5 w-2/3 rounded bg-neutral-300" />
          <div className="mt-auto grid grid-cols-3 gap-2">
            <span className="h-8 rounded bg-neutral-200" />
            <span className="h-8 rounded bg-neutral-200" />
            <span className="h-8 rounded bg-neutral-200" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-semibold tracking-wide text-muted uppercase">
          {template.category}
        </p>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{template.name}</h3>
          <span className="text-xs text-muted transition-colors group-hover:text-foreground">
            Open ↗
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{template.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {template.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-foreground/5 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[11px] text-muted">templates/{template.slug}</p>
      </div>
    </a>
  );
}
