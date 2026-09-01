import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { heroFlow } from "../data/pipeline";

const keywords = ["AWS", "Kubernetes", "Terraform", "Docker", "Jenkins", "GitHub Actions", "Linux", "DevSecOps"];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/80 px-3 py-1.5 mb-7 font-mono text-xs text-ink-dim"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            production-focused &amp; automation-first
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.03]"
          >
            Nisar Ahmed
            <br />
            Siddiqui Niazi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 font-mono text-base sm:text-lg text-mint text-glow"
          >
            DevOps Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 text-ink-dim text-lg leading-relaxed max-w-xl"
          >
            Building scalable cloud infrastructure, automated CI/CD pipelines, and reliable
            containerized platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {keywords.map((kw) => (
              <span
                key={kw}
                className="font-mono text-xs text-ink-dim border border-line rounded-md px-2.5 py-1 bg-panel/60"
              >
                {kw}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-mint text-void font-semibold px-5 py-3 hover:bg-mint/90 transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/60 px-5 py-3 text-ink hover:border-mint-dim hover:text-mint transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <a
              href="https://github.com/Nissar005"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink transition-colors"
            >
              <GithubIcon size={17} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nisar-ahmed-834950b5/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink transition-colors"
            >
              <LinkedinIcon size={17} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
            className="mt-10 grid grid-cols-3 max-w-xl border-y border-line-soft py-4"
          >
            <HeroStat label="Focus" value="Platform" />
            <HeroStat label="Approach" value="Automation" />
            <HeroStat label="Practice" value="DevSecOps" />
          </motion.div>
        </div>

        <HeroFlowVisual />
      </div>
    </section>
  );
}

function HeroFlowVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative border-l border-line pl-7 sm:pl-10 py-2"
    >
      <div className="font-mono text-xs text-ink-faint mb-7 flex items-center justify-between border-b border-line-soft pb-4">
        <span className="tracking-[0.15em] uppercase">Delivery workflow</span>
        <span className="flex items-center gap-1.5 text-mint">
          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" /> live
        </span>
      </div>

      <div className="relative flex flex-col items-stretch max-w-md">
        {heroFlow.map((node, i) => (
          <div key={node.id} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 py-3"
            >
              <span className="font-mono text-[11px] text-ink-faint w-5 text-right">{i + 1}</span>
              <span className="w-2 h-2 rounded-full bg-mint shrink-0" />
              <span className="font-mono text-sm text-ink">{node.label}</span>
            </motion.div>
            {i < heroFlow.length - 1 && (
              <div className="ml-[34px] w-px h-3 bg-line relative overflow-hidden">
                <motion.span
                  className="absolute left-0 top-0 w-px h-2 bg-mint"
                  animate={{ y: ["-8px", "16px"] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-r border-line-soft last:border-r-0 px-3 first:pl-0">
      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">{label}</div>
      <div className="mt-1 text-sm font-medium text-ink">{value}</div>
    </div>
  );
}
