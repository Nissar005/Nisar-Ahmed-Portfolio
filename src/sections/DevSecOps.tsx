import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { devSecOpsFlow } from "../data/misc";

export default function DevSecOps() {
  return (
    <section id="devsecops" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="scan --gate=required"
          title="Security Built Into the Pipeline"
          description="Security checks run at every stage, not as an afterthought bolted on at the end."
        />

        <div className="mt-14 panel rounded-xl p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-center gap-y-6">
            {devSecOpsFlow.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center"
              >
                <div className="flex flex-col items-center gap-2 px-3">
                  <div className="w-11 h-11 rounded-full border border-mint-dim bg-mint/10 flex items-center justify-center">
                    <ShieldCheck size={17} className="text-mint" />
                  </div>
                  <span className="font-mono text-[11px] text-ink-dim text-center max-w-[92px] leading-tight">
                    {step}
                  </span>
                </div>
                {i < devSecOpsFlow.length - 1 && (
                  <span className="hidden sm:block text-ink-faint mx-1">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
