/**
 * Thin banner shown at the top of every template/mockup so clients know the
 * site is a preview. Hidden when NEXT_PUBLIC_MOCKUP_BANNER=off.
 */
export function MockupBanner({
  label = "Preview mockup",
  note = "content and images are placeholders",
}: {
  label?: string;
  note?: string;
}) {
  if (process.env.NEXT_PUBLIC_MOCKUP_BANNER === "off") return null;

  return (
    <div className="bg-foreground px-4 py-1.5 text-center text-xs font-medium text-background">
      {label} &middot; {note}
    </div>
  );
}
