import { motion } from "framer-motion";
import { ArrowUpRight, CloudCog, FlaskConical, Globe, Workflow } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const areas = [
  { icon: CloudCog, number: "01", title: "DevOps & Cloud", description: "AWS, Linux, CI/CD, containers, Kubernetes, infrastructure and delivery practices.", href: "/devops" },
  { icon: Workflow, number: "02", title: "Automation", description: "Scripting, workflows, CI/CD and infrastructure automation focused on reducing repetitive work.", href: "/automation" },
  { icon: FlaskConical, number: "03", title: "QA & Testing", description: "Software quality, test automation and the connection between testing and reliable delivery.", href: "/qa" },
  { icon: Globe, number: "04", title: "Web Development", description: "Building useful, modern web experiences and learning across the application stack.", href: "/web-development" },
];

export default function Explore() {
  return (
    <section id="explore" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="explore" title="What I Build & Explore" />
        <p className="mt-6 max-w-2xl text-ink-dim leading-relaxed">
          My interests span several connected areas of technology. Each page goes deeper into what I am learning, building, and experimenting with.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {areas.map((area, i) => (
            <motion.a key={area.href} href={area.href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: i * 0.07 }} className="group panel rounded-lg p-6 hover:border-mint-dim transition-colors">
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
