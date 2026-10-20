"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { cn } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Btn } from "@/components/Btn";

const field = "block";
const labelCls = "eyebrow text-[10px] text-muted";
const inputCls =
  "mt-1 w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-2.5 text-[15px] text-foreground placeholder:text-muted/50 focus:border-brand focus:outline-none focus:ring-0";

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

  return (
    <form id={id} onSubmit={onSubmit} className={cn("scroll-mt-24 bg-white p-7 text-foreground shadow-card sm:p-9", className)}>
      {!compact ? (
        <div className="mb-2">
          <p className="eyebrow text-brand">Private consultation</p>
          <h2 className="mt-2 font-display text-[26px] leading-tight font-light tracking-tight">{form.title}</h2>
          <p className="mt-2 text-sm text-muted">{form.subtitle}</p>
        </div>
      ) : null}

      <div className={cn("mt-4 grid gap-5", compact && "sm:grid-cols-2")}>
        <label className={field}><span className={labelCls}>Name</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your full name" className={inputCls} />
        </label>
        <label className={field}><span className={labelCls}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="(801) 555-0100" className={inputCls} />
        </label>
        <label className={field}><span className={labelCls}>Email</span>
          <input name="email" type="email" autoComplete="email" inputMode="email" required placeholder="you@example.com" className={inputCls} />
        </label>
        <label className={field}><span className={labelCls}>I&apos;m interested in</span>
          <select name="interest" required defaultValue="" className={cn(inputCls, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236a6e75%22 stroke-width=%221.5%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_0_center] bg-no-repeat pr-6")}>
            <option value="" disabled>Select one</option>
            {form.interests.map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>

        <fieldset className={cn(compact && "sm:col-span-2")}>
          <legend className={labelCls}>Best way to reach you</legend>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {form.contactMethods.map((m, i) => (
              <label key={m} className="flex cursor-pointer items-center gap-2 border border-foreground/15 px-3.5 py-2 text-[13px] transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand-light has-[:checked]:text-brand-dark">
                <input type="radio" name="contactMethod" value={m} defaultChecked={i === 0} className="sr-only" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="hidden" aria-hidden><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>

        <div className={cn("pt-1", compact && "sm:col-span-2")}>
          <Btn type="submit" size="lg" className="w-full" disabled={status === "sending"} arrow>
            {status === "sending" ? "Sending…" : form.button}
          </Btn>
          {error ? <p role="alert" className="mt-2 text-center text-sm text-red-600">{error}</p> : null}
          <p className="mt-3.5 text-center text-[11.5px] leading-relaxed text-muted">{form.reassurance}</p>
        </div>
      </div>
    </form>
  );
}
