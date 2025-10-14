import { NextResponse } from "next/server";

const EMAIL_PATTERN =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = (await request.json()) as ContactPayload;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !fromAddress) {
      console.error("Missing Resend configuration. Set RESEND_API_KEY and RESEND_FROM_EMAIL.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const sanitizedPhone = phone?.trim() ? phone.trim() : "Not provided";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: ["chadang.phu@gmail.com"],
        subject: `portfoliosite:from${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${sanitizedPhone}\n\n${message}`,
        html: `
          <div>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${sanitizedPhone}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      console.error("Resend API error", response.status, errorBody);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact message", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}