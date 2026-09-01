import { Download, FileText } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const RESUME_PATH = "/resume/Nisar-Ahmed-Siddiqui-Niazi-DevOps-Engineer.pdf";

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="cat resume.pdf" title="Resume" align="center" />

        <div className="mt-12 max-w-lg mx-auto panel rounded-lg p-8 text-center">
          <div className="w-12 h-12 rounded-lg bg-mint/10 border border-mint-dim flex items-center justify-center mx-auto">
            <FileText size={20} className="text-mint" />
          </div>
          <h3 className="mt-5 font-semibold text-ink">Nisar-Ahmed-Siddiqui-Niazi-DevOps-Engineer.pdf</h3>
          <p className="mt-2 text-sm text-ink-faint">
            Add your resume file to <code className="font-mono">{RESUME_PATH}</code> to activate these buttons.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={RESUME_PATH}
              className="inline-flex items-center gap-2 rounded-md bg-mint text-void font-medium px-5 py-2.5 hover:bg-mint/90 transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-ink hover:border-mint-dim hover:text-mint transition-colors"
            >
              <FileText size={16} /> View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
