/**
 * Thin-line profile illustration of classic facelift incision placement:
 * temporal hairline, in front of the ear, around the lobe, behind the ear
 * and back into the hair. Drawn in the site's icon style.
 */
export function IncisionDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 380 400" className={className} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" role="img" aria-labelledby="incision-title" style={{ fontFamily: "var(--font-display)" }}>
      <title id="incision-title">Facelift incision placement, hidden around the ear and in the hairline</title>

  {/* skull / face profile, facing left */}
  <path d="M166 30 C 120 34, 92 70, 86 112 C 84 122, 80 128, 76 132 C 70 140, 74 150, 72 158 C 68 170, 58 182, 56 192 C 55 200, 66 206, 76 206 C 72 214, 70 222, 76 226 C 72 232, 70 240, 76 246 C 72 254, 78 262, 86 268 C 96 278, 112 282, 118 292 C 124 306, 126 330, 130 370" />
  <path d="M166 30 C 214 28, 254 48, 270 92 C 282 126, 282 170, 268 206 C 258 232, 240 246, 230 262 C 222 276, 222 300, 222 370" />
  {/* hair mass (light) */}
  <path d="M96 104 C 104 66, 136 44, 170 40 C 214 36, 248 58, 262 94 C 272 118, 272 158, 262 190 C 258 204, 250 216, 244 226" opacity="0.4" />
  <path d="M176 112 C 180 128, 186 140, 190 148" opacity="0.4" />
  {/* brow, eye, nostril, lips */}
  <path d="M78 120 C 86 114, 98 112, 108 114" opacity="0.6" />
  <path d="M92 138 C 100 134, 108 134, 114 138" opacity="0.6" />
  <path d="M66 200 C 72 198, 78 200, 82 204" opacity="0.6" />
  <path d="M76 226 C 84 224, 92 226, 98 230" opacity="0.6" />
  {/* ear */}
  <path d="M196 142 C 206 128, 230 134, 232 156 C 234 178, 226 200, 214 212 C 206 220, 194 216, 192 206 C 190 194, 190 178, 192 166" />
  <path d="M202 156 C 212 150, 222 158, 220 172 C 218 184, 212 194, 206 200" opacity="0.55" />
  <path d="M192 166 C 198 170, 202 178, 200 186" opacity="0.55" />
  {/* incision path */}
  <g stroke="#1f93a8" strokeWidth="2.2" strokeDasharray="5 4">
    <path d="M178 104 C 182 122, 188 138, 192 150" />
    <path d="M192 150 C 188 166, 188 190, 194 206 C 198 214, 206 220, 214 214" />
    <path d="M214 214 C 226 204, 236 188, 238 168" />
    <path d="M238 168 C 246 160, 258 156, 272 158" />
  </g>
  <g fill="#1f93a8" stroke="none">
    <circle cx="178" cy="104" r="3.2" />
    <circle cx="192" cy="166" r="3.2" />
    <circle cx="214" cy="214" r="3.2" />
    <circle cx="272" cy="158" r="3.2" />
  </g>
  {/* leaders + labels (right side) */}
  <g opacity="0.55">
    <path d="M178 104 L 296 104" />
    <path d="M272 158 L 296 158" />
    <path d="M214 214 L 296 214" />
    <path d="M192 166 L 192 250 L 296 250" />
  </g>
  <g fill="currentColor" stroke="none" fontSize="9.5" letterSpacing="0.12em">
    <text x="302" y="100">TEMPORAL</text><text x="302" y="111">HAIRLINE</text>
    <text x="302" y="154">BEHIND EAR</text><text x="302" y="165">INTO HAIR</text>
    <text x="302" y="210">AROUND</text><text x="302" y="221">THE LOBE</text>
    <text x="302" y="246">IN FRONT</text><text x="302" y="257">OF EAR</text>
  </g>
    </svg>
  );
}
