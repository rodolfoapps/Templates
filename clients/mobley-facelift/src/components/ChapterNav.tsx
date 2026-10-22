"use client";

import { useEffect, useState } from "react";
import { cn } from "@templates/ui";

export interface Chapter { id: string; num: string; label: string }

/** Sticky chapter list with scroll-spy. Desktop only. */
export function ChapterNav({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  return (
    <nav aria-label="Procedure chapters" className="hidden lg:block">
      <ol className="sticky top-28 space-y-1">
        {chapters.map((c) => {
          const on = c.id === active;
          return (
            <li key={c.id}>
              <a href={`#${c.id}`} className={cn("group flex items-center gap-4 py-2.5 transition-colors", on ? "text-foreground" : "text-muted hover:text-foreground")}>
                <span className={cn("h-px transition-all duration-300", on ? "w-10 bg-brand" : "w-5 bg-foreground/25 group-hover:w-8")} />
                <span className="eyebrow text-[10px]">{c.num}</span>
                <span className={cn("font-display text-[15px]", on ? "font-medium" : "font-light")}>{c.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
