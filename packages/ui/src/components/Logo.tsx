import Link from "next/link";
import { cn } from "../lib/cn";

interface LogoProps {
  name: string;
  /** Optional short mark shown in the coloured tile (defaults to first letter). */
  mark?: string;
  href?: string;
  className?: string;
}

export function Logo({ name, mark, href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("flex items-center gap-2.5 font-semibold tracking-tight", className)}
    >
      <span
        aria-hidden
        className="flex size-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white"
      >
        {mark ?? name.charAt(0)}
      </span>
      <span>{name}</span>
    </Link>
  );
}
