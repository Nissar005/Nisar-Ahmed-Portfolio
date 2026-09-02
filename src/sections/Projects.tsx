import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectModal from "../components/ProjectModal";
import { projects, type Project } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="git log --projects" title="Projects" />

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
              className="panel rounded-lg p-6 flex flex-col hover:border-mint-dim transition-colors"
            >
              <div className="font-mono text-xs tracking-[0.12em] text-mint">PROJECT {p.index}</div>
              <h3 className="mt-2 text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-2.5 text-sm text-ink-dim leading-relaxed flex-1">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="text-[11px] font-mono text-ink-dim border border-line rounded-md bg-surface/60 px-2 py-1">
                    {t}
                  </span>
                ))}
                {p.technologies.length > 5 && (
                  <span className="text-[11px] font-mono text-ink-faint px-1.5 py-0.5">
                    +{p.technologies.length - 5}
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center justify-end pt-4 border-t border-line-soft">
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="inline-flex items-center gap-1 text-sm text-mint hover:gap-1.5 transition-all cursor-pointer"
                >
                  View Details <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
