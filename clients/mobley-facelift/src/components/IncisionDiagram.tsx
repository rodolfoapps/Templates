/**
 * Thin-line illustration of facelift incision placement: in the temporal
 * hairline, along the natural crease in front of the ear, around the lobe
 * and into the hairline behind the ear. Drawn in the site's icon style.
 */
export function IncisionDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 380" className={className} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-labelledby="incision-title" role="img">
      <title id="incision-title">Facelift incision placement, hidden around the ear and in the hairline</title>
      {/* head and neck, three-quarter profile */}
      <path d="M118 46c38-30 96-26 128 10 24 28 26 70 16 104-6 20-10 38-6 58 3 16-6 30-18 40-12 10-20 24-22 40l-3 44" />
      <path d="M118 46c-22 18-34 48-32 80 1 22 8 40 6 62-1 14-8 26-6 40 2 12 10 20 14 32l6 42" />
      {/* hairline */}
      <path d="M100 118c8-36 36-62 74-70 36-7 70 10 86 42" strokeDasharray="0" opacity="0.35" />
      {/* brow, nose, mouth, jaw hints */}
      <path d="M214 150c10-6 24-6 34 0" opacity="0.45" />
      <path d="M244 160c6 22 10 44-4 60 4 8 12 10 18 6" opacity="0.45" />
      <path d="M226 258c10 6 24 6 34-2" opacity="0.45" />
      <path d="M118 232c20 30 60 56 112 50" opacity="0.35" />
      {/* ear */}
      <path d="M152 182c-14-12-32-6-34 14-2 22 10 40 26 48 10 4 18 0 20-10" />
      <path d="M140 196c-6 2-10 10-6 18 4 10 14 16 20 14" opacity="0.5" />
      {/* incision line: temporal hairline → in front of ear → under lobe → behind ear into hairline */}
      <path d="M150 124c-10 14-14 30-10 46" stroke="#1f93a8" strokeWidth={2} strokeDasharray="5 5" />
      <path d="M140 170c-4 14-6 30 2 46 4 10 12 20 20 26" stroke="#1f93a8" strokeWidth={2} strokeDasharray="5 5" />
      <path d="M162 242c-10 4-22 2-30-8-8-10-12-22-10-36" stroke="#1f93a8" strokeWidth={2} strokeDasharray="5 5" />
      <path d="M122 198c-8 10-14 24-12 40" stroke="#1f93a8" strokeWidth={2} strokeDasharray="5 5" />
      {/* callouts */}
      <circle cx="150" cy="124" r="3" fill="#1f93a8" stroke="none" />
      <circle cx="162" cy="242" r="3" fill="#1f93a8" stroke="none" />
      <circle cx="110" cy="238" r="3" fill="#1f93a8" stroke="none" />
      <path d="M150 124H64" opacity="0.5" />
      <path d="M162 242h-20v40H64" opacity="0.5" />
      <path d="M110 238l-14 54H64" opacity="0.5" />
      <text x="10" y="120" fontSize="10" fill="currentColor" stroke="none" fontFamily="var(--font-display)" letterSpacing="0.12em">HAIRLINE</text>
      <text x="10" y="278" fontSize="10" fill="currentColor" stroke="none" fontFamily="var(--font-display)" letterSpacing="0.12em">EAR CREASE</text>
      <text x="10" y="288" fontSize="10" fill="currentColor" stroke="none" fontFamily="var(--font-display)" letterSpacing="0.12em" opacity="0.7">&amp; LOBE</text>
      <text x="10" y="320" fontSize="10" fill="currentColor" stroke="none" fontFamily="var(--font-display)" letterSpacing="0.12em">BEHIND EAR</text>
    </svg>
  );
}
