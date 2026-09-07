import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const highlights = [
  { icon: GraduationCap, value: "B.E.", label: "Computer Science Engineering" },
  { icon: MapPin, value: "Ballari", label: "Karnataka, India" },
  { icon: Sparkles, value: "Builder", label: "Learning through practical work" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
        <div>
          <SectionHeading eyebrow="whoami" title="About Nisar Ahmed Siddiqui" />
          <div className="mt-7 space-y-4 text-ink-dim leading-relaxed max-w-2xl">
            <p>
              <strong className="text-ink">Nisar Ahmed Siddiqui</strong> is a Computer Science Engineering graduate focused on building practical technology solutions and understanding how modern software systems are designed, tested, deployed, and maintained.
            </p>
            <p>
              His primary focus is <strong className="text-ink">DevOps &amp; Cloud</strong>, with supporting interests in automation, QA &amp; testing, and web development. He enjoys connecting these areas through reliable workflows, infrastructure, testing, and continuous learning.
            </p>
            <p>
              This portfolio is a living record of that journey — from technical exploration and hands-on experiments to the production-style projects being built over time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: i * 0.08 }} className="panel rounded-lg p-5 hover:border-mint-dim transition-colors last:col-span-2">
              <s.icon size={20} className="text-mint mb-4" strokeWidth={1.75} />
              <div className="font-mono text-xl font-semibold text-ink">{s.value}</div>
              <div className="text-sm text-ink-dim mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
