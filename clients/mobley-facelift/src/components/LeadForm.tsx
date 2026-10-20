"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { cn } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";

type Tone = "light" | "glass";

const styles: Record<Tone, { panel: string; label: string; input: string; chip: string; title: string; sub: string; micro: string }> = {
  light: {
    panel: "bg-white text-foreground shadow-card",
    label: "eyebrow text-[10px] text-muted",
    input: "border-foreground/20 text-foreground placeholder:text-muted/50 focus:border-brand",
    chip: "border-foreground/15 has-[:checked]:border-brand has-[:checked]:bg-brand-light has-[:checked]:text-brand-dark",
    title: "text-foreground",
    sub: "text-muted",
    micro: "text-muted",
  },
  glass: {
    panel: "bg-ink/55 text-white shadow-card ring-1 ring-white/15 backdrop-blur-2xl",
    label: "eyebrow text-[10px] text-white/55",
    input: "border-white/30 text-white placeholder:text-white/35 focus:border-accent",
    chip: "border-white/20 text-white/80 has-[:checked]:border-accent has-[:checked]:bg-accent/15 has-[:checked]:text-white",
    title: "text-white",
    sub: "text-white/60",
    micro: "text-white/50",
  },
};

interface Props { id?: string; compact?: boolean; tone?: Tone; className?: string }

export function LeadForm({ id = "consult-form", compact = false, tone = "light", className }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const { form } = siteConfig;
  const t = styles[tone];
  const inputCls = cn("mt-0.5 w-full border-0 border-b bg-transparent px-0 py-2 text-[15px] focus:outline-none focus:ring-0", t.input);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const params = new URLSearchParams(window.location.search);
    const source = Object.fromEntries(
      ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "service", "city"].filter((k) => params.has(k)).map((k) => [k, params.get(k)]),
    );
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...data, source }) });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!json.ok) throw new Error(json.error ?? "Something went wrong.");
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const chevron = tone === "glass" ? "%23ffffff99" : "%236a6e75";

  return (
    <form id={id} onSubmit={onSubmit} className={cn("scroll-mt-24 p-6 sm:p-7", t.panel, className)}>
      {!compact ? (
        <div className="mb-1">
          <p className="eyebrow text-accent">Private consultation</p>
          <h2 className={cn("mt-1.5 font-display text-[22px] leading-tight font-light tracking-tight", t.title)}>{form.title}</h2>
          <p className={cn("mt-1.5 text-[13px]", t.sub)}>{form.subtitle}</p>
        </div>
      ) : null}

      <div className={cn("mt-4 grid gap-4", compact && "sm:grid-cols-2")}>
        <label className="block"><span className={t.label}>Name</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your full name" className={inputCls} />
        </label>
        <label className="block"><span className={t.label}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="(801) 555-0100" className={inputCls} />
        </label>
        <label className="block"><span className={t.label}>Email</span>
          <input name="email" type="email" autoComplete="email" inputMode="email" required placeholder="you@example.com" className={inputCls} />
        </label>
        <label className="block"><span className={t.label}>I&apos;m interested in</span>
          <select name="interest" required defaultValue="" className={cn(inputCls, "appearance-none pr-6")} style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${chevron}' stroke-width='1.5'><path d='M6 9l6 6 6-6'/></svg>")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 0 center", backgroundSize: "18px" }}>
            <option value="" disabled>Select one</option>
            {form.interests.map((o) => <option key={o} className="text-foreground">{o}</option>)}
          </select>
        </label>

        <fieldset className={cn(compact && "sm:col-span-2")}>
          <legend className={t.label}>Best way to reach you</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {form.contactMethods.map((m, i) => (
              <label key={m} className={cn("flex cursor-pointer items-center gap-2 border px-3 py-1.5 text-[12.5px] transition-colors", t.chip)}>
                <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} className="sr-only" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="hidden" aria-hidden><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>

        <div className={cn("pt-0.5", compact && "sm:col-span-2")}>
          <Btn type="submit" size="lg" variant={tone === "glass" ? "brand" : "ink"} className="w-full" disabled={status === "sending"} arrow>
            {status === "sending" ? "Sending…" : form.button}
          </Btn>
          {error ? <p role="alert" className="mt-2 text-center text-sm text-red-400">{error}</p> : null}
          <p className={cn("mt-3 text-center text-[11px] leading-relaxed", t.micro)}>{form.reassurance}</p>
        </div>
      </div>
    </form>
  );
}
