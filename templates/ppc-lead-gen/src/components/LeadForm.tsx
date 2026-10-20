"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button, cn } from "@templates/ui";
import { siteConfig } from "@/site.config";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-foreground/15 bg-background px-3.5 py-3 text-base placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

interface LeadFormProps {
  id?: string;
  compact?: boolean;
  className?: string;
}

/**
 * Single-step, 4-field quote form. Autofill-friendly input types, outcome
 * button copy, reassurance microcopy, honeypot. Posts to /api/lead and
 * redirects to /thank-you for conversion tracking.
 */
export function LeadForm({ id = "quote-form", compact = false, className }: LeadFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const { form } = siteConfig;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Capture attribution so the lead can be matched back to the click.
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
    <form
      id={id}
      onSubmit={onSubmit}
      className={cn(
        "scroll-mt-24 rounded-2xl border border-foreground/10 bg-background p-5 shadow-xl shadow-foreground/5 sm:p-6",
        className,
      )}
      noValidate={false}
    >
      {!compact ? (
        <>
          <h2 className="text-xl font-semibold">{form.title}</h2>
          <p className="mt-1 text-sm text-muted">{form.subtitle}</p>
        </>
      ) : null}

      <div className={cn("mt-4 grid gap-4", compact && "sm:grid-cols-2")}>
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            placeholder="(813) 555-0100"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium">
          Email <span className="font-normal text-muted">(for your written quote)</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="jane@example.com"
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-medium">
          What do you need?
          <select name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Pick one
            </option>
            {form.services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>

        {/* Honeypot — hidden from humans, bots fill it. */}
        <div className="hidden" aria-hidden>
          <label>
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className={cn(compact && "sm:col-span-2")}>
          <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : form.button}
          </Button>
          {error ? (
            <p role="alert" className="mt-2 text-center text-sm text-red-600">
              {error}
            </p>
          ) : null}
          <p className="mt-3 text-center text-xs text-muted">
            {form.reassurance}{" "}
            <a href="/privacy" className="underline underline-offset-2">
              Privacy
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}
