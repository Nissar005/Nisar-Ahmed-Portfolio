import crypto from "node:crypto";

const ADMIN_EMAIL = "nissar005@gmail.com";
const ALLOWED = {
  github: "https://github.com/Nissar005",
  linkedin: "https://www.linkedin.com/in/nisar-ahmed-siddiqui/",
} as const;

type LinkKey = keyof typeof ALLOWED;

function token() {
  return crypto.randomBytes(32).toString("hex");
}

function html(body: string) {
  return new Response(body, { headers: { "content-type": "text/html; charset=utf-8" } });
}

export default async function handler(req: Request) {
  const url = new URL(req.url);

  if (req.method === "GET" && url.searchParams.has("approve")) {
    const requestToken = url.searchParams.get("approve") || "";
    const target = url.searchParams.get("target") as LinkKey;
    if (!process.env.RESEND_API_KEY || !target || !ALLOWED[target]) return html("Invalid or expired approval request.");

    const store = globalThis as typeof globalThis & { __profileRequests?: Map<string, LinkKey> };
    const requests = store.__profileRequests || new Map<string, LinkKey>();
    store.__profileRequests = requests;
    if (requests.get(requestToken) !== target) return html("Invalid or expired approval request.");
    requests.set(requestToken, target);
    return Response.redirect(`${ALLOWED[target]}?approved=${requestToken}`, 302);
  }

  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const { target } = await req.json().catch(() => ({}));
  if (!target || !ALLOWED[target as LinkKey]) return new Response("Invalid target", { status: 400 });

  if (!process.env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Approval service is not configured yet." }), { status: 503, headers: { "content-type": "application/json" } });
  }

  const requestToken = token();
  const store = globalThis as typeof globalThis & { __profileRequests?: Map<string, LinkKey> };
  const requests = store.__profileRequests || new Map<string, LinkKey>();
  store.__profileRequests = requests;
  requests.set(requestToken, target as LinkKey);

  const approveUrl = `${url.origin}/api/profile-access?approve=${requestToken}&target=${target}`;
  const subject = `Profile access request: ${target === "github" ? "GitHub" : "LinkedIn"}`;
  const emailHtml = `<p>Someone clicked the <strong>${target === "github" ? "GitHub" : "LinkedIn"}</strong> link on your portfolio.</p><p><a href="${approveUrl}">Approve access</a></p><p>Request token: ${requestToken}</p>`;

  const mail = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.PROFILE_ACCESS_FROM || "onboarding@resend.dev", to: [ADMIN_EMAIL], subject, html: emailHtml }),
  });

  if (!mail.ok) return new Response(JSON.stringify({ error: "Unable to send approval email." }), { status: 502, headers: { "content-type": "application/json" } });

  return new Response(JSON.stringify({ status: "pending" }), { headers: { "content-type": "application/json" } });
}
