import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/cn";

export function Badge({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brand",
        className,
      )}
      {...props}
    />
  );
}
