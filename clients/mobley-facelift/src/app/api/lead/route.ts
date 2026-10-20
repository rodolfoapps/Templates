import { NextResponse } from "next/server";

/**
 * Lead intake. Validates the form and forwards it to LEAD_WEBHOOK_URL
 * (Zapier, Make, a CRM endpoint, Slack…) when that env var is set.
 * Without it, the lead is logged so the mockup still "works".
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.interest ?? "").trim();
  const contactMethod = String(body.contactMethod ?? "").trim();

  if (name.length < 2 || phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json(
      { ok: false, error: "Please add your name and a valid phone number." },
      { status: 422 },
    );
  }

  // Honeypot: real users never fill this.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name,
    phone,
    email,
    interest: service,
    contactMethod,
    source: body.source ?? null, // utm/gclid captured client-side
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.error("Lead webhook failed", res.status);
      return NextResponse.json({ ok: false, error: "Could not send. Please call us." }, { status: 502 });
    }
  } else {
    console.log("New lead (no LEAD_WEBHOOK_URL set):", lead);
  }

  return NextResponse.json({ ok: true });
}
