import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { architectureFlow } from "../data/pipeline";

export default function Architecture() {
  const [active, setActive] = useState(0);
  const node = architectureFlow[active];

  return (
    <section id="architecture" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="terraform plan" title="How I Build DevOps Platforms" />

        <div className="mt-14 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <div className="panel rounded-xl p-6 sm:p-8">
            <div className="flex flex-col">
              {architectureFlow.map((n, i) => (
                <div key={n.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full text-left flex items-center gap-4 rounded-md px-3 py-3 transition-colors cursor-pointer ${
                      active === i ? "bg-mint/10 border border-mint-dim" : "border border-transparent hover:bg-panel-2"
                    }`}
                  >
                    <span className="font-mono text-xs text-ink-faint w-6">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${active === i ? "bg-mint" : "bg-line"}`}
                    />
                    <span className={`font-mono text-sm ${active === i ? "text-mint" : "text-ink"}`}>
                      {n.label}
                    </span>
                  </button>
                  {i < architectureFlow.length - 1 && (
                    <div className="ml-[46px] w-px h-2 bg-line" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="panel rounded-xl p-7 lg:sticky lg:top-28"
          >
            <div className="font-mono text-xs text-ink-faint mb-3">
              stage / {String(active + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold text-ink mb-3">{node.label}</h3>
            <p className="text-ink-dim leading-relaxed">{node.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
