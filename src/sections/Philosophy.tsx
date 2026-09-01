import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { philosophy } from "../data/misc";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="principles" title="My DevOps Philosophy" align="center" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {philosophy.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="panel rounded-lg p-6"
            >
              <div className="font-mono text-xs text-mint mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-semibold text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-ink-dim leading-relaxed">{p.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
