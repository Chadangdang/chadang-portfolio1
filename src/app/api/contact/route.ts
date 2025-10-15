import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimited(key: string): boolean {
  const now = Date.now();
  const rec = hits.get(key);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(key, { count: 1, ts: now });
    return false;
  }
  rec.count++;
  return rec.count > MAX_HITS;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Invalid content type." }, { status: 415 });
    }

    const raw = await request.text();
    if (raw.length > 20_000) {
      return NextResponse.json({ error: "Payload too large." }, { status: 413 });
    }

    const { name, email, phone, message, company } = JSON.parse(raw) as {
      name: string; email: string; phone?: string; message: string; company?: string; // honeypot
    };

    if (company && company.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please slow down." }, { status: 429 });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }
    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const resendApiKey = (process.env.RESEND_API_KEY || "").trim();
    const fromAddress = (process.env.RESEND_FROM_EMAIL || "").trim();
    const toAddress = (process.env.CONTACT_TO_EMAIL || "").trim();

    console.log("Resend key present?", resendApiKey ? "yes" : "no", "prefix:", resendApiKey.slice(0,3));
    console.log("From present?", !!fromAddress, "To present?", !!toAddress);

    if (!resendApiKey || !fromAddress || !toAddress) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    if (!resendApiKey || !fromAddress || !toAddress) {
      console.error("Missing Resend config: RESEND_API_KEY / RESEND_FROM_EMAIL / CONTACT_TO_EMAIL");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const sanitizedPhone = phone?.trim() ? phone.trim() : "Not provided";
    const subject = `Portfolio message from ${name}`;
    const bodyText =
      `Name: ${name}\nEmail: ${email}\nPhone: ${sanitizedPhone}\nIP: ${ip}\n\n${message}`;

    const bodyHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#222">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(sanitizedPhone)}</p>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        subject,
        reply_to: email,
        text: bodyText,
        html: bodyHtml,
      }),
    });

    if (!r.ok) {
      const err = await r.text().catch(() => "");
      console.error("Resend API error:", r.status, err);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}