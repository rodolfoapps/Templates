"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  before: string;
  after: string;
  width: number;
  height: number;
  alt: string;
}

/** Drag-to-compare before/after. Keyboard accessible via the range input. */
export function CompareSlider({ before, after, width, height, alt }: Props) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative select-none overflow-hidden rounded-sm bg-sand" style={{ aspectRatio: `${width} / ${height}` }}>
      <Image src={before} alt={`${alt}, before`} width={width} height={height} className="absolute inset-0 h-full w-full object-cover" sizes="(min-width:1024px) 40vw, 90vw" priority />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <Image src={after} alt={`${alt}, after`} width={width} height={height} className="h-full w-full object-cover" sizes="(min-width:1024px) 40vw, 90vw" priority />
      </div>

      <span className="eyebrow absolute top-4 left-4 bg-ink/70 px-2.5 py-1 text-[10px] text-white backdrop-blur">Before</span>
      <span className="eyebrow absolute top-4 right-4 bg-brand px-2.5 py-1 text-[10px] text-white">After</span>

      {/* handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `calc(${pos}% - 1px)` }}>
        <div className="h-full w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
          </svg>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="range-reset absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
