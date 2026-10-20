"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { cn } from "../lib/cn";
import { Container } from "./Container";

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: ReactNode;
  links: NavLink[];
  cta?: ReactNode;
  /** Use on dark hero sections. */
  tone?: "light" | "dark";
  className?: string;
}

export function Navbar({ logo, links, cta, tone = "light", className }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const dark = tone === "dark";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b backdrop-blur",
        dark
          ? "border-white/10 bg-black/40 text-white"
          : "border-foreground/10 bg-background/80 text-foreground",
        className,
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {logo}

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                dark ? "text-white/70 hover:text-white" : "text-muted hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">{cta}</div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            viewBox="0 0 24 24"
            aria-hidden
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className={cn(
            "border-t md:hidden",
            dark ? "border-white/10 bg-black/90" : "border-foreground/10 bg-background",
          )}
        >
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            {cta ? <div className="mt-3 px-2">{cta}</div> : null}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
