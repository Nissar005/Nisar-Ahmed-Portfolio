import { motion } from "framer-motion";
import { Boxes, Cloud, Code2, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const skillGroups = [
  {
    icon: Cloud,
    number: "01",
    title: "Cloud & Infrastructure",
    description: "Building a practical foundation in cloud infrastructure and Linux-based systems.",
    skills: ["AWS", "Linux", "IAM", "VPC", "EC2", "CloudWatch"],
  },
  {
    icon: Boxes,
    number: "02",
    title: "DevOps & Delivery",
    description: "Automating software delivery with containers, orchestration, and Infrastructure as Code.",
    skills: ["Git", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "QA & Automation",
    description: "Connecting testing with delivery to improve software quality and release confidence.",
    skills: ["Manual Testing", "Test Automation", "API Testing", "Regression Testing", "Quality Gates"],
  },
  {
    icon: Code2,
    number: "04",
    title: "Web Development",
    description: "Creating responsive interfaces and applications while learning the engineering behind them.",
    skills: ["React", "TypeScript", "HTML", "CSS", "REST APIs", "Responsive UI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="toolbox"
          title="Skills & Technical Focus"
          description="A practical technology stack spanning cloud infrastructure, DevOps, quality engineering, automation, and web development."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group panel rounded-lg p-6 sm:p-7 hover:border-mint-dim transition-colors"
            >
              <div className="flex items-start justify-between">
                <group.icon size={22} className="text-mint" strokeWidth={1.75} />
                <span className="font-mono text-xs text-ink-faint">{group.number}</span>
              </div>
              <h3 className="mt-7 text-lg font-semibold text-ink group-hover:text-mint transition-colors">{group.title}</h3>
              <p className="mt-2 text-sm text-ink-dim leading-relaxed">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="font-mono text-[11px] text-ink-dim border border-line bg-void/60 rounded px-2.5 py-1.5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
