import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./Container";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  logo: ReactNode;
  tagline?: string;
  columns?: FooterColumn[];
  legalName: string;
  className?: string;
}

export function Footer({ logo, tagline, columns = [], legalName, className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={className}>
      <Container className="border-t border-foreground/10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(var(--cols),1fr)]"
          style={{ "--cols": Math.max(columns.length, 1) } as React.CSSProperties}
        >
          <div className="space-y-4">
            {logo}
            {tagline ? <p className="max-w-xs text-sm text-muted">{tagline}</p> : null}
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted">
          &copy; {year} {legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
