"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@templates/ui";
import { Reveal } from "@/components/Reveal";

export interface GalleryCase { src: string; w: number; h: number; label: string }

/**
 * Before/after tiles that open a lightbox with the full, uncropped composite.
 * Arrow keys move between cases, Escape or the backdrop closes.
 */
export function GalleryTiles({ cases }: { cases: readonly GalleryCase[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const next = useCallback(() => setOpen((i) => (i === null ? null : (i + 1) % cases.length)), [cases.length]);
  const prev = useCallback(() => setOpen((i) => (i === null ? null : (i - 1 + cases.length) % cases.length)), [cases.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev]);

  const current = open === null ? null : cases[open];

  return (
    <>
      <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:col-span-7 lg:mx-0 lg:grid lg:h-full lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
        {cases.map((c, i) => (
          <Reveal as="li" key={c.src} delay={i * 80} className="w-[82%] shrink-0 snap-center lg:h-full lg:w-auto">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${c.label} full size`}
              className="group relative block h-full w-full overflow-hidden text-left ring-1 ring-white/10 transition-shadow hover:ring-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full">
                <Image src={c.src} alt={`${c.label}: before on the left, after on the right`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 30vw, 82vw" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="eyebrow absolute top-3 left-3 text-[9px] text-white/70">Before</span>
                <span className="eyebrow absolute top-3 right-3 text-[9px] text-accent">After</span>
                <div aria-hidden className="absolute inset-y-0 left-1/2 w-px bg-white/40" />
                {/* zoom hint */}
                <span aria-hidden className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5M11 8.5v5M8.5 11h5" /></svg>
                </span>
              </div>
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-[12px]">
                <span className="text-white/90">{c.label}</span>
                <span className="font-display text-[11px] text-white/50">0{i + 1} / 0{cases.length}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.label}, before and after`}
          className="fixed inset-0 z-[70] flex flex-col bg-ink/95 text-white backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between px-4 py-4 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <p className="eyebrow text-white/60">
              Facelift gallery &middot; <span className="text-accent">{open! + 1} / {cases.length}</span>
            </p>
            <button ref={closeRef} type="button" onClick={() => setOpen(null)} aria-label="Close" className="flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <NavButton side="left" onClick={prev} />
            <figure className="flex max-h-full flex-col items-center">
              <div className="relative max-h-[78vh] w-auto">
                <Image key={current.src} src={current.src} alt={`${current.label}: before on the left, after on the right`} width={current.w} height={current.h} className="max-h-[78vh] w-auto object-contain ring-1 ring-white/10" sizes="90vw" priority />
                <span className="eyebrow absolute top-3 left-3 bg-ink/70 px-2 py-1 text-[10px] text-white/90">Before</span>
                <span className="eyebrow absolute top-3 right-3 bg-brand px-2 py-1 text-[10px] text-white">After</span>
              </div>
              <figcaption className="mt-4 text-center text-sm text-white/70">
                {current.label} &middot; unretouched patient photo from the Mobley MD gallery. Results vary.
              </figcaption>
            </figure>
            <NavButton side="right" onClick={next} />
          </div>

          {/* Mobile prev / next */}
          <div className="grid grid-cols-2 gap-2 px-4 pb-6 sm:hidden" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={prev} className="eyebrow flex h-12 items-center justify-center gap-2 border border-white/25 text-white">&larr; Previous</button>
            <button type="button" onClick={next} className="eyebrow flex h-12 items-center justify-center gap-2 border border-white/25 text-white">Next &rarr;</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous case" : "Next case"}
      className={cn("absolute top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink/60 hover:bg-white/10 sm:flex", side === "left" ? "left-3" : "right-3")}
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {side === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  );
}
