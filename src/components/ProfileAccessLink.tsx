import { useEffect, useState } from "react";

type ProfileTarget = "github" | "linkedin";

type Props = {
  target: ProfileTarget;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

type AccessState = "idle" | "requesting" | "pending" | "approved" | "rejected" | "expired" | "error";

const LABELS: Record<ProfileTarget, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
};

export default function ProfileAccessLink({ target, className, children, ariaLabel }: Props) {
  const [state, setState] = useState<AccessState>("idle");
  const [requestId, setRequestId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (state !== "pending" || !requestId) return;

    const timer = window.setInterval(async () => {
      try {
        const response = await fetch(`/api/profile-access?status=${encodeURIComponent(requestId)}`, {
          cache: "no-store",
        });
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

  function close() {
    setState("idle");
    setRequestId("");
    setError("");
  }

  const label = LABELS[target];

  return (
    <>
      <button
        type="button"
        onClick={requestAccess}
        aria-label={ariaLabel}
        className={className}
        disabled={state === "requesting" || state === "pending"}
      >
        {children}
      </button>

      {state !== "idle" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-void/80 backdrop-blur-sm p-5" role="dialog" aria-modal="true" aria-labelledby={`profile-access-title-${target}`}>
          <div className="w-full max-w-md border border-line bg-surface p-6 shadow-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">PROFILE ACCESS</div>
            <h2 id={`profile-access-title-${target}`} className="mt-3 text-xl font-semibold text-ink">
              {label} access approval
            </h2>

            {state === "requesting" && (
              <p className="mt-4 text-sm leading-relaxed text-ink-dim">Sending an approval request...</p>
            )}

            {state === "pending" && (
              <>
                <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                  Your request has been sent. The profile link will remain blocked until Nisar approves it by email.
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs font-mono text-ink-faint">
                  <span className="w-2 h-2 rounded-full bg-mint animate-pulse" /> Waiting for approval...
                </div>
              </>
            )}

            {state === "approved" && (
              <>
                <p className="mt-4 text-sm leading-relaxed text-ink-dim">Access approved. You can now continue to the {label} profile.</p>
                <a
                  href={target === "github" ? "https://github.com/Nissar005" : "https://www.linkedin.com/in/nisar-ahmed-siddiqui/"}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  className="mt-5 inline-flex items-center justify-center border border-mint bg-mint px-4 py-2.5 text-sm font-semibold text-void hover:bg-mint/90 transition-colors"
                >
                  Continue to {label}
                </a>
              </>
            )}

            {state === "rejected" && (
              <p className="mt-4 text-sm leading-relaxed text-ink-dim">Access was not approved. The profile link will remain blocked.</p>
            )}

            {state === "expired" && (
              <p className="mt-4 text-sm leading-relaxed text-ink-dim">This approval request expired. Please submit a new request.</p>
            )}

            {state === "error" && (
              <p className="mt-4 text-sm leading-relaxed text-red-300">{error}</p>
            )}

            <div className="mt-6 flex gap-3">
              {(state === "rejected" || state === "expired" || state === "error") && (
                <button type="button" onClick={requestAccess} className="border border-line px-4 py-2 text-sm text-ink hover:border-ink-faint transition-colors">
                  Try again
                </button>
              )}
              {state !== "requesting" && state !== "pending" && state !== "approved" && (
                <button type="button" onClick={close} className="border border-line px-4 py-2 text-sm text-ink-dim hover:text-ink hover:border-ink-faint transition-colors">
                  Close
                </button>
              )}
              {state === "pending" && (
                <button type="button" onClick={close} className="border border-line px-4 py-2 text-sm text-ink-dim hover:text-ink transition-colors">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
