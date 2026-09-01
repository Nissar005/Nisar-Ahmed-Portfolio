import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TerminalWindow from "../components/TerminalWindow";
import { terminalCommands } from "../data/misc";

export default function Terminal() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="terminal" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="interactive"
          title="Try the Terminal"
          description="A simulated portfolio terminal — click a command to see example output. Nothing here executes real commands."
        />

        <div className="mt-14">
          <TerminalWindow title="nisar@devops:~">
            <div className="p-5 space-y-1">
              {terminalCommands.map((c, i) => {
                const active = activeIdx === i;
                return (
                  <div key={c.command}>
                    <button
                      type="button"
                      onClick={() => setActiveIdx(active ? null : i)}
                      className="w-full text-left flex items-center gap-2 py-1.5 cursor-pointer group"
                      aria-expanded={active}
                    >
                      <span className="text-mint">$</span>
                      <span className={`transition-colors ${active ? "text-ink" : "text-ink-dim group-hover:text-ink"}`}>
                        {c.command}
                      </span>
                    </button>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pl-4 pb-3 text-ink-faint"
                      >
                        {c.output.map((line, li) => (
                          <div key={li} className="whitespace-pre">{line || "\u00A0"}</div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
              <div className="flex items-center gap-2 pt-2 text-ink-dim">
                <span className="text-mint">$</span>
                <span className="w-2 h-4 bg-mint/70 animate-pulse" />
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
