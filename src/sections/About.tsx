import { motion } from "framer-motion";
import { Cloud, Container, GitBranch } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const stats = [
  { icon: Cloud, value: "AWS", label: "Cloud Platform" },
  { icon: Container, value: "Kubernetes", label: "Container Orchestration" },
  { icon: GitBranch, value: "CI/CD", label: "Automation" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeading eyebrow="whoami" title="About Me" />
          <div className="mt-7 space-y-4 text-ink-dim leading-relaxed">
            <p>
              I am a DevOps Engineer specializing in cloud infrastructure, automation,
              containerization, CI/CD, Kubernetes, Infrastructure as Code, and DevSecOps practices.
            </p>
            <p>
              I specialize in designing and automating reliable infrastructure and software
              delivery workflows using AWS, Terraform, Docker, Kubernetes, Jenkins, GitHub
              Actions, Linux, and modern DevOps tooling.
            </p>
            <p>
              My approach focuses on automation, reliability, scalability, security,
              observability, and continuous improvement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="panel rounded-lg p-5 hover:border-mint-dim transition-colors"
            >
              <s.icon size={20} className="text-mint mb-4" strokeWidth={1.75} />
              <div className="font-mono text-xl font-semibold text-ink">{s.value}</div>
              <div className="text-sm text-ink-dim mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
