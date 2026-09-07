import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";

const profilePhoto = "/nisar-ahmed-profile-2026.jpg?v=3";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-[1fr_0.82fr] gap-14 lg:gap-24 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-6 font-mono text-xs text-ink-faint">
            <span className="w-2 h-2 rounded-full bg-green" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
            <span className="hidden sm:inline text-line">/</span>
            <span className="hidden sm:inline-flex items-center gap-1"><MapPin size={12} /> Ballari, India</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-[2.65rem] sm:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.045em] text-ink leading-[0.98]">
            Nisar Ahmed<br className="hidden sm:block" /> Siddiqui
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5">
            <h2 className="text-xl sm:text-2xl font-semibold text-mint">DevOps Engineer</h2>
            <p className="mt-2 font-mono text-xs sm:text-sm text-ink-faint">AWS · CI/CD · Docker · Kubernetes · Terraform</p>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-6 text-lg sm:text-xl text-ink-dim leading-relaxed max-w-xl">
            Building reliable cloud infrastructure, automated delivery pipelines, and quality-focused software systems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#skills" className="group inline-flex items-center gap-3 bg-mint text-void font-semibold px-5 py-3 hover:bg-mint/90 transition-colors">
              View My Skills <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-line px-5 py-3 text-ink hover:border-ink-faint transition-colors">Let's Connect</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex items-center gap-5">
            <a href="https://github.com/Nissar005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-faint hover:text-ink transition-colors"><GithubIcon size={17} /> GitHub</a>
            <span className="w-px h-4 bg-line" />
            <a href="https://www.linkedin.com/in/nisar-ahmed-834950b5/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-faint hover:text-ink transition-colors"><LinkedinIcon size={17} /> LinkedIn</a>
          </motion.div>
        </div>

        <IdentityPanel />
      </div>
    </section>
  );
}

function IdentityPanel() {
  const areas = [
    ['01', 'DevOps & Cloud', 'AWS · Linux · CI/CD · containers'],
    ['02', 'Automation', 'Scripting · workflows · delivery'],
    ['03', 'QA & Testing', 'Automation · APIs · reliability'],
    ['04', 'Web Development', 'React · TypeScript · applications'],
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
      <div className="absolute -top-3 left-5 font-mono text-[10px] tracking-[0.2em] text-ink-faint bg-void px-2">PROFILE</div>
      <div className="border border-line bg-surface p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        <div className="flex items-start gap-5 pb-6 border-b border-line-soft">
          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full overflow-hidden border border-line">
            <img src={profilePhoto} alt="Nisar Ahmed Siddiqui" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <div className="pt-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">Nisar Ahmed Siddiqui</p>
            <h2 className="mt-2 text-xl font-semibold text-ink">DevOps Engineer</h2>
            <p className="mt-1 text-sm text-ink-faint">Cloud · Automation · Quality</p>
          </div>
        </div>
        <div className="pt-4">
          {areas.map(([number, title, description]) => (
            <div key={number} className="group flex gap-4 py-4 border-b border-line-soft last:border-b-0">
              <span className="font-mono text-[11px] text-ink-faint pt-0.5 group-hover:text-mint transition-colors">{number}</span>
              <div className="min-w-0"><div className="text-sm font-medium text-ink">{title}</div><div className="mt-1 text-xs text-ink-faint">{description}</div></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
