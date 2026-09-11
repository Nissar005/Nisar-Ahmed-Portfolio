import crypto from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const ADMIN_EMAIL = "nissar005@gmail.com";
const REQUEST_TTL_SECONDS = 15 * 60;
const ALLOWED_ORIGINS = new Set([
  "https://nisarahmedsiddiqui.in",
  "https://www.nisarahmedsiddiqui.in",
]);
const ALLOWED = {
  github: "https://github.com/Nissar005",
  linkedin: "https://www.linkedin.com/in/nisar-ahmed-siddiqui/",
} as const;

type LinkKey = keyof typeof ALLOWED;
type RequestRecord = { target: LinkKey; status: "pending" | "approved" | "rejected"; createdAt: number };

function token() {
  return crypto.randomBytes(32).toString("hex");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function json(res: VercelResponse, status: number, body: unknown) {
  return res.status(status).setHeader("Cache-Control", "no-store").json(body);
}

async function redis(command: unknown[]) {
  const url = process.env.KV_REST_API_URL;
  const auth = process.env.KV_REST_API_TOKEN;
  if (!url || !auth) throw new Error("Redis is not configured");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  const result = await response.json();
  if (!response.ok) throw new Error(result?.error || "Redis request failed");
  return result?.result;
}

async function getRequest(requestId: string): Promise<RequestRecord | null> {
  const value = await redis(["GET", `profile-access:${requestId}`]);
  if (!value || typeof value !== "string") return null;
  try {
    return JSON.parse(value) as RequestRecord;
  } catch {
    return null;
  }
}

async function setRequest(requestId: string, record: RequestRecord) {
  await redis(["SET", `profile-access:${requestId}`, JSON.stringify(record), "EX", REQUEST_TTL_SECONDS]);
}

function approvalPage(message: string) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Profile access</title></head><body style="font-family:Arial,sans-serif;background:#0b0d0f;color:#f2f4f5;display:grid;place-items:center;min-height:100vh;margin:0"><main style="max-width:520px;padding:32px;border:1px solid #333;background:#15181b"><h1 style="font-size:24px">Portfolio profile access</h1><p style="line-height:1.6;color:#c6cbd0">${escapeHtml(message)}</p><p style="color:#8d969f">You can close this tab.</p></main></body></html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    const requestId = typeof req.query.id === "string" ? req.query.id : "";
    const action = typeof req.query.action === "string" ? req.query.action : "";

    if (requestId && (action === "approve" || action === "reject")) {
      try {
        const record = await getRequest(requestId);
        if (!record) return res.status(404).send(approvalPage("This approval request is invalid or has expired."));
        if (record.status !== "pending") return res.status(200).send(approvalPage(`This request is already ${record.status}.`));

        record.status = action === "approve" ? "approved" : "rejected";
        await setRequest(requestId, record);
        return res.status(200).send(approvalPage(action === "approve" ? "Access approved. The visitor can now continue to the requested profile." : "Access rejected. The visitor will remain blocked."));
      } catch (error) {
        console.error("Profile approval error", error);
        return res.status(500).send(approvalPage("The approval service is temporarily unavailable."));
      }
    }

    if (requestId && !action) {
      try {
        const record = await getRequest(requestId);
        return json(res, 200, { status: record?.status || "expired" });
      } catch (error) {
        console.error("Profile status error", error);
        return json(res, 500, { error: "Unable to check approval status." });
      }
    }

    return json(res, 400, { error: "Invalid request." });
  }

  if (req.method !== "POST") return json(res, 405, { error: "Method not allowed" });

  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return json(res, 403, { error: "Profile access requests are only accepted from the portfolio website." });
  }

  const target = req.body?.target as LinkKey;
  if (!target || !ALLOWED[target]) return json(res, 400, { error: "Invalid target" });

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !fromEmail) return json(res, 503, { error: "Approval service is not configured yet." });

  try {
    const requestId = token();
    await setRequest(requestId, { target, status: "pending", createdAt: Date.now() });

    const requestOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://nisarahmedsiddiqui.in";
    const approveUrl = `${requestOrigin}/api/profile-access?id=${requestId}&action=approve`;
    const rejectUrl = `${requestOrigin}/api/profile-access?id=${requestId}&action=reject`;
    const profileName = target === "github" ? "GitHub" : "LinkedIn";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromEmail,
        to: [ADMIN_EMAIL],
        subject: `[Portfolio] ${profileName} access request`,
        text: `Someone clicked your ${profileName} link on nisarahmedsiddiqui.in.\n\nApprove: ${approveUrl}\nReject: ${rejectUrl}\n\nThis request expires in 15 minutes.`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;max-width:640px"><h2>${profileName} access request</h2><p>Someone clicked the <strong>${profileName}</strong> link on your portfolio.</p><p><a href="${approveUrl}" style="display:inline-block;padding:12px 18px;background:#9ff5d0;color:#07110d;text-decoration:none;font-weight:bold;margin-right:8px">Approve access</a><a href="${rejectUrl}" style="display:inline-block;padding:12px 18px;background:#eee;color:#111;text-decoration:none;font-weight:bold">Reject</a></p><p style="color:#666">This request expires in 15 minutes.</p></div>`,
      }),
    });

    if (!response.ok) {
      const result = await response.text();
      console.error("Resend error", result);
      return json(res, 502, { error: "Unable to send approval email." });
    }

    return json(res, 200, { status: "pending", requestId });
  } catch (error) {
    console.error("Profile access request error", error);
    return json(res, 500, { error: "Approval request could not be created." });
  }
}
