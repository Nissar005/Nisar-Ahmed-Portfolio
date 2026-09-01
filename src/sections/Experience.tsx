import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { responsibilities } from "../data/misc";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="history --all" title="DevOps Experience" />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <div className="panel rounded-lg p-7 h-fit lg:sticky lg:top-28">
            <div className="font-mono text-xs text-ink-faint mb-2">role</div>
            <h3 className="text-xl font-semibold text-ink">DevOps Engineer</h3>
            <div className="mt-1 font-mono text-sm text-mint">5 Years Experience</div>
            <div className="mt-4 text-sm text-ink-faint">[Add company and dates]</div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
            {responsibilities.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                className="relative mb-5 last:mb-0"
              >
                <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-void border-2 border-mint-dim" />
                <span className="text-ink-dim">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
