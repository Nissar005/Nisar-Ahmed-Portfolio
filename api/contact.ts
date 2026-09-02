import type { VercelRequest, VercelResponse } from "@vercel/node";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message, website } = req.body ?? {};

  // Honeypot field: real visitors never see this, but simple bots often fill it.
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return res.status(400).json({ error: "Invalid form data" });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ error: "Please complete all required fields" });
  }

  if (cleanName.length > 100 || cleanEmail.length > 254 || cleanSubject.length > 200 || cleanMessage.length > 5000) {
    return res.status(400).json({ error: "One or more fields are too long" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(cleanEmail)) {
    return res.status(400).json({ error: "Please enter a valid email address" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Missing contact form environment variables");
    return res.status(500).json({ error: "Contact service is not configured yet" });
  }

  const finalSubject = cleanSubject || `New portfolio message from ${cleanName}`;
  const safeName = escapeHtml(cleanName);
  const safeEmail = escapeHtml(cleanEmail);
  const safeSubject = escapeHtml(finalSubject);
  const safeMessage = escapeHtml(cleanMessage).replaceAll("\n", "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `[Portfolio] ${finalSubject}`,
        text: `New message from ${cleanName} (${cleanEmail})\n\nSubject: ${finalSubject}\n\n${cleanMessage}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;max-width:680px">
            <h2>New portfolio contact message</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <hr />
            <p>${safeMessage}</p>
          </div>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend error", result);
      return res.status(502).json({ error: "Message could not be delivered" });
    }

    return res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    console.error("Contact form error", error);
    return res.status(500).json({ error: "Message could not be sent" });
  }
}
