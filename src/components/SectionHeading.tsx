interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`section-kicker flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-ink-dim">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-[2.5rem] font-bold tracking-tight text-ink leading-tight">{title}</h2>
      {description && <p className="mt-4 text-ink-dim leading-7">{description}</p>}
    </div>
  );
}
