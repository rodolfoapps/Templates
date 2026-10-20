"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { cn } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";

const inputClass =
  "mt-1.5 w-full border border-foreground/20 bg-white px-3.5 py-3 text-base text-foreground placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function LeadForm({ id = "consult-form", compact = false, className }: { id?: string; compact?: boolean; className?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const { form } = siteConfig;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const params = new URLSearchParams(window.location.search);
    const source = Object.fromEntries(
      ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "service", "city"]
        .filter((k) => params.has(k))
        .map((k) => [k, params.get(k)]),
    );
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!json.ok) throw new Error(json.error ?? "Something went wrong.");
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form id={id} onSubmit={onSubmit} className={cn("scroll-mt-24 bg-white p-6 text-foreground shadow-2xl shadow-black/20 sm:p-8", className)}>
      {!compact ? (
        <>
          <h2 className="font-display text-2xl font-medium tracking-tight">{form.title}</h2>
          <p className="mt-1.5 text-sm text-muted">{form.subtitle}</p>
        </>
      ) : null}

      <div className={cn("mt-5 grid gap-4", compact && "sm:grid-cols-2")}>
        <label className="block text-sm font-semibold">
          Name
          <input name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your name" className={inputClass} />
        </label>
        <label className="block text-sm font-semibold">
          Phone
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="(801) 555-0100" className={inputClass} />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input name="email" type="email" autoComplete="email" inputMode="email" required placeholder="you@example.com" className={inputClass} />
        </label>
        <label className="block text-sm font-semibold">
          I&apos;m interested in
          <select name="interest" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select one</option>
            {form.interests.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>

        <fieldset className={cn(compact && "sm:col-span-2")}>
          <legend className="text-sm font-semibold">Best way to reach you</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {form.contactMethods.map((m, i) => (
              <label key={m} className="flex cursor-pointer items-center gap-2 border border-foreground/20 px-3 py-2 text-sm has-[:checked]:border-brand has-[:checked]:bg-brand-light">
                <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} className="accent-brand" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="hidden" aria-hidden>
          <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        </div>

        <div className={cn(compact && "sm:col-span-2")}>
          <Btn type="submit" size="lg" className="w-full" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : form.button}
          </Btn>
          {error ? <p role="alert" className="mt-2 text-center text-sm text-red-600">{error}</p> : null}
          <p className="mt-3 text-center text-xs leading-relaxed text-muted">{form.reassurance}</p>
        </div>
      </div>
    </form>
  );
}
