import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { pipelineStages } from "../data/pipeline";

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="run --stage=all" title="CI/CD Pipeline" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pipelineStages.map((stage, i) => (
            <motion.div
              key={stage.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="panel rounded-lg p-5 relative group hover:border-mint-dim transition-colors"
            >
              <div className="font-mono text-3xl font-bold text-line group-hover:text-mint-dim transition-colors">
                {stage.index}
              </div>
              <h3 className="mt-3 font-semibold text-ink">{stage.title}</h3>
              <p className="mt-1.5 text-sm text-ink-dim leading-relaxed">{stage.detail}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {stage.tools.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-mint bg-mint/10 rounded px-1.5 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
