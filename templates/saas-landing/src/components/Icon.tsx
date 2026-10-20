import type { SVGProps } from "react";

export type IconName = "chart" | "bell" | "dollar" | "share" | "shield" | "plug";

const paths: Record<IconName, string> = {
  chart: "M3 17l5-6 4 4 5-8 4 5",
  bell: "M15 17H9m6 0a3 3 0 11-6 0m6 0h3l-1.5-2V11a6 6 0 10-12 0v4L6 17h3",
  dollar: "M12 3v18m4-13.5c0-1.5-1.8-2.5-4-2.5s-4 1-4 2.5 1.8 2.5 4 2.5 4 1 4 2.5-1.8 2.5-4 2.5-4-1-4-2.5",
  share: "M8 12a3 3 0 100-6 3 3 0 000 6zm8 7a3 3 0 100-6 3 3 0 000 6zm0-14a3 3 0 100 6 3 3 0 000-6zM10.5 10.5l3-1.5m-3 4.5l3 1.5",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zm-3 9l2 2 4-4",
  plug: "M9 7V3m6 4V3M7 7h10v4a5 5 0 01-10 0V7zm5 9v5",
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
