import { motion } from "framer-motion";
import { ArrowUpRight, CloudCog, FlaskConical, Globe } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const areas = [
  {
    icon: CloudCog,
    number: "01",
    title: "DevOps & Cloud",
    description: "Cloud infrastructure, CI/CD, containers, Kubernetes, Infrastructure as Code, automation, security, and reliable delivery practices.",
    href: "/devops",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "QA & Testing",
    description: "Software quality, test automation, API testing, regression testing, and quality practices connected to modern delivery.",
    href: "/qa",
  },
  {
    icon: Globe,
    number: "03",
    title: "Web Development",
    description: "Building useful, modern web experiences and exploring frontend development, application structure, APIs, and deployment.",
    href: "/web-development",
  },
];

export default function Explore() {
  return (
    <section id="explore" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="explore" title="What I Build & Explore" />
        <p className="mt-6 max-w-2xl text-ink-dim leading-relaxed">
          My work and learning span three connected areas of technology, with automation running through DevOps and QA rather than standing alone as a separate category.
        </p>
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <motion.a
              key={area.href}
              href={area.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group panel rounded-lg p-6 hover:border-mint-dim transition-colors"
            >
              <div className="flex items-start justify-between">
                <area.icon size={22} className="text-mint" strokeWidth={1.75} />
                <span className="font-mono text-xs text-ink-faint">{area.number}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-ink group-hover:text-mint transition-colors">{area.title}</h3>
              <p className="mt-2.5 text-sm text-ink-dim leading-relaxed">{area.description}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-mint">Explore <ArrowUpRight size={15} /></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
