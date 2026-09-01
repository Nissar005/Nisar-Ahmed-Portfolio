import type { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`panel rounded-lg overflow-hidden shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-panel-2/60">
        <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
        <span className="ml-3 font-mono text-xs text-ink-faint truncate">{title}</span>
      </div>
      <div className="font-mono text-sm">{children}</div>
    </div>
  );
}
