"use client";

import { useEffect, useState } from "react";
import { cn } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { PhoneIcon } from "@/components/Icons";

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setVisible(!e?.isIntersecting), { threshold: 0 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <div
      className={cn("fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_1.7fr] gap-2 border-t border-white/10 bg-ink/95 p-2 backdrop-blur transition-transform duration-300 md:hidden", visible ? "translate-y-0" : "translate-y-full")}
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <a href={siteConfig.phoneHref} className="eyebrow flex h-12 items-center justify-center gap-2 border border-white/30 text-white"><PhoneIcon className="size-4" />Call</a>
      <a href="#consult-form" className="eyebrow flex h-12 items-center justify-center bg-brand text-white">Request consultation</a>
    </div>
  );
}
