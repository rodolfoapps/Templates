"use client";

import { useEffect, useState } from "react";
import { cn } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { PhoneIcon } from "@/components/PhoneIcon";

/**
 * Mobile-only Call | Quote bar. Appears once the hero has scrolled out of
 * view so it never covers the first-screen CTA.
 */
export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry?.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-foreground/10 bg-background/95 p-2 backdrop-blur transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <a
        href={siteConfig.phoneHref}
        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-semibold text-background"
      >
        <PhoneIcon className="size-4" />
        Call
      </a>
      <a
        href="#quote-form"
        className="flex h-12 items-center justify-center rounded-xl bg-brand text-sm font-semibold text-white"
      >
        Get my quote
      </a>
    </div>
  );
}
