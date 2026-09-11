import { Mail, TerminalSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import ProfileAccessLink from "./ProfileAccessLink";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <a href="/" className="flex items-center gap-2 font-mono font-bold text-ink">
            <TerminalSquare size={16} className="text-mint" />
            Nisar Ahmed Siddiqui
          </a>
          <p className="mt-2 text-sm text-ink-dim">Engineer · Builder · Learner</p>
          <p className="mt-1 font-mono text-xs text-ink-faint">DevOps & Cloud · Automation · QA · Web Development</p>
        </div>

        <div className="flex items-center gap-5">
          <ProfileAccessLink target="github" className="text-ink-dim hover:text-ink transition-colors" ariaLabel="Request access to GitHub">
            <GithubIcon size={18} />
          </ProfileAccessLink>
          <ProfileAccessLink target="linkedin" className="text-ink-dim hover:text-ink transition-colors" ariaLabel="Request access to LinkedIn">
            <LinkedinIcon size={18} />
          </ProfileAccessLink>
          <a href="mailto:nissar005@gmail.com" aria-label="Email" className="text-ink-dim hover:text-ink transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-8 pt-6 border-t border-line-soft">
        <p className="text-xs text-ink-faint">Copyright 2026 Nisar Ahmed Siddiqui. All rights reserved.</p>
      </div>
    </footer>
  );
}
