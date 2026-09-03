"use server";

import { siteConfig } from "@/lib/site-config";

export interface ContactFormState {
  status: "idle" | "success" | "error" | "not_configured";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Sends the contact form via Resend (https://resend.com) when
 * RESEND_API_KEY is set. Without it, the action reports
 * "not_configured" so the UI can point people at a direct mailto
 * link instead of pretending the message went somewhere.
 *
 * To wire up real delivery: create a Resend API key, set
 * RESEND_API_KEY (and optionally RESEND_FROM) in your environment,
 * and messages will start sending — no other code changes needed.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !message || !isValidEmail(email)) {
    return { status: "error" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "not_configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: siteConfig.email,
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!response.ok) {
      return { status: "error" };
    }

    return { status: "success" };
  } catch {
    return { status: "error" };
  }
}
