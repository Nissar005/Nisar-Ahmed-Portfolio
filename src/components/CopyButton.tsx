import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy command"}
      className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-xs font-mono text-ink-dim hover:text-mint hover:border-mint-dim transition-colors cursor-pointer"
    >
      {copied ? <Check size={13} className="text-mint" /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
