import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { toolCategories } from "../data/toolbox";

export default function Toolbox() {
  return (
    <section id="toolbox" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="stack --list" title="My DevOps Toolbox" align="center" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="panel rounded-lg p-5 hover:border-mint-dim transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-mint mb-1">
                {cat.eyebrow}
              </div>
              <h3 className="font-semibold text-ink mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-ink-dim border border-line rounded px-2 py-1"
                  >
                    {item}
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
