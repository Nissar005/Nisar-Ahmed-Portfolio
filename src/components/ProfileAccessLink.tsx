import { useEffect, useState, type ReactNode } from "react";

type ProfileTarget = "github" | "linkedin";
type AccessState = "idle" | "requesting" | "pending" | "approved" | "rejected" | "expired" | "error";

type Props = {
  target: ProfileTarget;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

const LABELS: Record<ProfileTarget, string> = { github: "GitHub", linkedin: "LinkedIn" };

export default function ProfileAccessLink({ target, className, children, ariaLabel }: Props) {
  const [state, setState] = useState<AccessState>("idle");
  const [requestId, setRequestId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (state !== "pending" || !requestId) return;
    const timer = window.setInterval(async () => {
      try {
        const response = await fetch(`/api/profile-access?id=${encodeURIComponent(requestId)}`, { cache: "no-store" });
        const data = await response.json();
        if (!response.ok) {
          setState("error");
          setError(data.error || "Unable to check approval status.");
          return;
        }
        if (data.status === "approved") setState("approved");
        else if (data.status === "rejected") setState("rejected");
        else if (data.status === "expired") setState("expired");
      } catch {
        setState("error");
        setError("Unable to check approval status. Please try again.");
      }
    }, 2500);
    return () => window.clearInterval(timer);
  }, [state, requestId]);

  async function requestAccess() {
    setState("requesting");
    setError("");
    try {
      const response = await fetch("/api/profile-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target }),
      });
      const data = await response.json();
      if (!response.ok || !data.requestId) {
        setState("error");
        setError(data.error || "Approval request could not be sent.");
        return;
      }
      setRequestId(data.requestId);
      setState("pending");
    } catch {
      setState("error");
      setError("Approval request could not be sent. Please try again.");
    }
  }

  const label = LABELS[target];
  const targetUrl = target === "github" ? "https://github.com/Nissar005" : "https://www.linkedin.com/in/nisar-ahmed-siddiqui/";

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={requestAccess}
        aria-label={ariaLabel}
        className={`appearance-none border-0 bg-transparent p-0 m-0 font-inherit leading-none text-left inline-flex items-center [&>svg]:shrink-0 [&>svg]:align-middle ${className ?? ""}`}
        disabled={state === "requesting" || state === "pending"}
      >
        {children}
      </button>
      {state === "requesting" && <span className="text-xs font-mono text-ink-faint">Sending access request...</span>}
      {state === "pending" && <span className="text-xs font-mono text-ink-faint" role="status" aria-live="polite"><span className="inline-block w-1.5 h-1.5 rounded-full bg-mint mr-2 animate-pulse" />Pending approval</span>}
      {state === "approved" && <span className="inline-flex flex-wrap items-center gap-2 text-xs font-mono text-mint" role="status" aria-live="polite"><span>You are approved to access {label}</span><a href={targetUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-ink transition-colors">Open {label}</a></span>}
      {state === "rejected" && <span className="text-xs font-mono text-red-300" role="status" aria-live="polite">Access rejected</span>}
      {state === "expired" && <span className="text-xs font-mono text-ink-faint" role="status" aria-live="polite">Pending request expired</span>}
      {state === "error" && <span className="text-xs font-mono text-red-300" role="status" aria-live="polite">{error}</span>}
    </div>
  );
}
