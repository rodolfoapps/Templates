import { siteConfig } from "@/site.config";
import { cn } from "@templates/ui";

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5 text-amber-500", className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="size-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.7l-6.1 3.4 1.4-6.8L2.2 9.6l6.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

/** Compact "4.9 ★★★★★ 412 Google reviews" line used near every CTA. */
export function RatingLine({ className }: { className?: string }) {
  const { rating } = siteConfig;
  return (
    <p className={cn("flex items-center gap-2 text-sm", className)}>
      <span className="font-semibold">{rating.value}</span>
      <Stars />
      <span className="text-muted">
        {rating.count} {rating.source}
      </span>
    </p>
  );
}
