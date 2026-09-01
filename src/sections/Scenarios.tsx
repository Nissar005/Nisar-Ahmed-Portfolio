import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { scenarios } from "../data/scenarios";

export default function Scenarios() {
  const [openId, setOpenId] = useState(scenarios[0].id);

  return (
    <section id="scenarios" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="incident --history"
          title="Production Problems I've Worked With"
          description="Common failure modes and how I work through them, from detection to prevention."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-4">
          {scenarios.map((s) => {
            const open = openId === s.id;
            return (
              <motion.div
                key={s.id}
                layout
                className="panel rounded-lg overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? "" : s.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  aria-expanded={open}
                >
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-mint mb-1">{s.tag}</div>
                    <h3 className="font-semibold text-ink">{s.title}</h3>
                  </div>
                  <span className={`font-mono text-ink-faint transition-transform ${open ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                {open && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5"
                  >
                    <ol className="space-y-3 border-t border-line-soft pt-4">
                      {s.steps.map((step, i) => (
                        <li key={step.label} className="flex gap-3 text-sm">
                          <span className="font-mono text-ink-faint w-5 shrink-0">{i + 1}</span>
                          <div>
                            <span className="text-ink font-medium">{step.label}: </span>
                            <span className="text-ink-dim">{step.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
