import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/80 px-3 py-1.5 mb-7 font-mono text-xs text-ink-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            engineer · builder · learner
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.03]">
            Nisar Ahmed Siddiqui
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-5 font-mono text-base sm:text-lg text-mint text-glow">
            Exploring technology through building &amp; automation
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-5 text-ink-dim text-lg leading-relaxed max-w-xl">
            I’m a Computer Science Engineering graduate exploring cloud, DevOps, automation, QA, and web development — with a focus on learning by building practical and reliable systems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="mt-8 flex flex-wrap gap-2">
            {['DevOps & Cloud', 'Automation', 'QA & Testing', 'Web Development'].map((item) => (
              <span key={item} className="font-mono text-xs text-ink-dim border border-line rounded-md px-2.5 py-1 bg-panel/60">{item}</span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#explore" className="inline-flex items-center gap-2 rounded-md bg-mint text-void font-semibold px-5 py-3 hover:bg-mint/90 transition-colors">
              Explore My Work <ArrowRight size={16} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/60 px-5 py-3 text-ink hover:border-mint-dim hover:text-mint transition-colors">
              About Me <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="https://github.com/Nissar005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink transition-colors">
              <GithubIcon size={17} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nisar-ahmed-834950b5/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink transition-colors">
              <LinkedinIcon size={17} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <IdentityPanel />
      </div>
    </section>
  );
}

function IdentityPanel() {
  const areas = [
    ['01', 'DevOps & Cloud', 'Infrastructure · CI/CD · containers'],
    ['02', 'Automation', 'Workflows · scripting · delivery'],
    ['03', 'QA & Testing', 'Quality · test automation · reliability'],
    ['04', 'Web Development', 'Interfaces · applications · experiences'],
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative border border-line rounded-lg bg-surface/40 p-6 sm:p-8">
      <div className="font-mono text-xs text-ink-faint flex items-center justify-between border-b border-line-soft pb-4">
        <span className="tracking-[0.15em] uppercase">Areas of exploration</span>
        <span className="flex items-center gap-1.5 text-mint"><span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" /> active</span>
      </div>
      <div className="mt-5 space-y-1">
        {areas.map(([number, title, description]) => (
          <div key={number} className="flex gap-4 py-4 border-b border-line-soft last:border-b-0">
            <span className="font-mono text-[11px] text-ink-faint pt-1">{number}</span>
            <div>
              <div className="font-mono text-sm text-ink">{title}</div>
              <div className="mt-1 text-xs text-ink-faint">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
