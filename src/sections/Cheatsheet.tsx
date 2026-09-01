import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import CopyButton from "../components/CopyButton";
import { cheatsheet } from "../data/cheatsheet";

export default function Cheatsheet() {
  const [tab, setTab] = useState(cheatsheet[0].id);
  const active = cheatsheet.find((t) => t.id === tab)!;

  return (
    <section id="cheatsheet" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="alias --list" title="DevOps Command Center" />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {cheatsheet.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-md text-sm font-mono transition-colors cursor-pointer border ${
                tab === t.id
                  ? "bg-mint/10 border-mint-dim text-mint"
                  : "border-line text-ink-dim hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6 panel rounded-xl divide-y divide-line-soft">
          {active.commands.map((c) => (
            <div key={c.command} className="flex items-center justify-between gap-4 px-5 py-4">
              <div className="min-w-0">
                <code className="font-mono text-sm text-ink block truncate">{c.command}</code>
                <p className="text-xs text-ink-faint mt-1">{c.description}</p>
              </div>
              <CopyButton text={c.command} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
