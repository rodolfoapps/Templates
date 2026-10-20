import type { SVGProps } from "react";

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...common} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...common} strokeWidth={2} {...p}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const PlaneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...common} {...p}>
    <path d="M2.5 19l19-7-19-7 4 7-4 7zM6.5 12h15" />
  </svg>
);

export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...common} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const StarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.7l-6.1 3.4 1.4-6.8L2.2 9.6l6.9-.8z" />
  </svg>
);

export const ShieldCheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...common} strokeWidth={1.4} {...p}>
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6l7.5-3z" />
    <path d="M9 12.2l2 2 4-4.4" />
  </svg>
);

export const AcademicIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...common} strokeWidth={1.4} {...p}>
    <path d="M2.5 9.5L12 5l9.5 4.5L12 14 2.5 9.5z" />
    <path d="M6.5 11.6V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.4" />
    <path d="M21.5 9.5V15" />
  </svg>
);

export const ClinicIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...common} strokeWidth={1.4} {...p}>
    <path d="M4 20V8.5L12 4l8 4.5V20" />
    <path d="M2.5 20h19" />
    <path d="M12 10v5M9.5 12.5h5" />
    <path d="M9 20v-3.5h6V20" />
  </svg>
);
