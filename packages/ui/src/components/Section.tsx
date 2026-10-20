import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../lib/cn";
import { Container } from "./Container";

export function Section({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl sm:mb-16",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty mt-4 text-lg text-muted">{description}</p>
      ) : null}
    </div>
  );
}
