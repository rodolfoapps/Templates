import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@templates/ui";

type Variant = "primary" | "dark" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5",
  "outline-light": "border border-white/50 text-white hover:bg-white/10",
};

interface BtnProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  href?: string;
  size?: "md" | "lg";
  children: ReactNode;
}

/** Rectangular, uppercase, letter-spaced button in the Mobley MD style. */
export function Btn({ variant = "primary", href, size = "md", className, children, type, ...props }: BtnProps) {
  const classes = cn(base, variants[variant], size === "lg" ? "h-13 px-7" : "h-11 px-6", className);
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <Link href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
