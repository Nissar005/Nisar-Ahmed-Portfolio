import { useEffect } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.button
            aria-label="Close project details"
            className="absolute inset-0 bg-void/80 backdrop-blur-sm cursor-default"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto panel rounded-t-xl sm:rounded-xl p-6 sm:p-9"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-ink-dim hover:text-ink p-1.5 cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="font-mono text-xs text-mint mb-2">project / {project.index}</div>
            <h3 id="project-modal-title" className="text-2xl font-bold text-ink pr-8">
              {project.name}
            </h3>

            <div className="mt-6 space-y-6 text-sm">
              <ModalBlock label="Problem">
                Delivering this reliably by hand was slow and error-prone across environments.
              </ModalBlock>
              <ModalBlock label="Architecture">{project.architecture}</ModalBlock>
              {project.workflow && (
                <ModalBlock label="CI/CD Workflow">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    {project.workflow.map((step, i) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="rounded border border-line px-2 py-1 text-ink">{step}</span>
                        {i < project.workflow!.length - 1 && <span className="text-ink-faint">→</span>}
                      </span>
                    ))}
                  </div>
                </ModalBlock>
              )}
              <ModalBlock label="Technologies">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-xs font-mono text-mint bg-mint/10 rounded px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </ModalBlock>
              <ModalBlock label="Implementation & Responsibilities">
                <ul className="space-y-1.5">
                  {project.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-ink-dim">
                      <span className="text-mint mt-1.5 w-1 h-1 rounded-full bg-mint shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </ModalBlock>
              <ModalBlock label="Security & Monitoring">
                Access follows least-privilege IAM, images are scanned before deployment, and
                health is tracked through the monitoring stack described in this portfolio.
              </ModalBlock>
              <ModalBlock label="Lessons Learned">
                Treating infrastructure and pipeline definitions as code made changes reviewable,
                repeatable, and far easier to roll back when something didn't go to plan.
              </ModalBlock>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-ink-faint mb-2">{label}</div>
      <div className="text-ink-dim leading-relaxed">{children}</div>
    </div>
  );
}
