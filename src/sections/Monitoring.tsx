import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { monitoringMetrics } from "../data/misc";

const statusColor: Record<string, string> = {
  ok: "bg-green",
  warn: "bg-amber",
  critical: "bg-red",
};

export default function Monitoring() {
  return (
    <section id="monitoring" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="grafana / prometheus / cloudwatch"
          title="Monitoring"
          description="A portfolio demonstration using static, illustrative data — not a live production dashboard."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {monitoringMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              className="panel rounded-lg p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  {m.label}
                </span>
                <span className={`w-2 h-2 rounded-full ${statusColor[m.status]}`} />
              </div>
              <div className="mt-3 font-mono text-2xl font-semibold text-ink">{m.value}</div>
              <div className="mt-1 text-xs text-ink-dim">{m.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
