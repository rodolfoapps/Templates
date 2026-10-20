import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@templates/ui";

type Variant = "ink" | "brand" | "outline" | "outline-light" | "link";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-display text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  ink: "bg-ink text-white hover:bg-brand-dark",
  brand: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-white",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white hover:text-ink",
  link: "text-brand underline-offset-[6px] hover:underline px-0 h-auto",
};

interface BtnProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  href?: string;
  size?: "md" | "lg";
  arrow?: boolean;
  children: ReactNode;
}

export function Btn({ variant = "ink", href, size = "md", arrow = false, className, children, type, ...props }: BtnProps) {
  const classes = cn(base, variants[variant], variant !== "link" && (size === "lg" ? "h-14 px-8" : "h-12 px-6"), className);
  const inner = (
    <>
      {children}
      {arrow ? (
        <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      ) : null}
    </>
  );
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <Link href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {inner}
    </button>
  );
}
