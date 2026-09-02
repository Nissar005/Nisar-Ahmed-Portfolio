import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Explore from "./sections/Explore";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path !== "/") {
    return (
      <div className="min-h-screen bg-void">
        <Navbar />
        <main className="pt-20">
          <JourneyPage path={path} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Explore />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function JourneyPage({ path }: { path: string }) {
  const pages: Record<string, { eyebrow: string; title: string; intro: string; topics: string[] }> = {
    "/devops": {
      eyebrow: "01 · devops & cloud",
      title: "DevOps & Cloud",
      intro: "My journey into DevOps is driven by understanding how applications move from development to reliable, automated delivery. I explore cloud infrastructure, Linux, CI/CD, containers, Kubernetes, Infrastructure as Code, automation, and DevSecOps practices.",
      topics: ["AWS", "Linux & Shell Scripting", "CI/CD with Jenkins & GitHub Actions", "Docker & Containers", "Kubernetes", "Terraform & Infrastructure as Code", "Infrastructure & Deployment Automation", "DevSecOps", "Monitoring & Reliability"],
    },
    "/qa": {
      eyebrow: "02 · quality engineering",
      title: "QA & Testing",
      intro: "Software quality is part of the delivery process, not an afterthought. I am interested in testing practices and automation that help teams release software with greater confidence and reliability.",
      topics: ["Manual Testing", "Test Automation", "Regression Testing", "API Testing", "Quality Gates", "CI/CD Testing", "Defect Analysis", "Test Workflow Automation", "DevOps + QA"],
    },
    "/web-development": {
      eyebrow: "03 · web development",
      title: "Web Development",
      intro: "Web development gives me a way to turn ideas into useful experiences. I explore modern frontend development, responsive interfaces, application structure, and the engineering practices behind dependable web applications.",
      topics: ["React", "TypeScript", "Responsive UI", "Frontend Engineering", "Web Applications", "APIs & Integration", "Performance", "Deployment"],
    },
  };

  const page = pages[path];
  if (!page) {
    return <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24"><p className="font-mono text-mint text-sm">404 · page not found</p><h1 className="mt-4 text-4xl font-bold text-ink">This page does not exist.</h1><a href="/" className="inline-flex mt-8 text-mint">← Back home</a></div>;
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <a href="/" className="font-mono text-xs text-ink-faint hover:text-mint transition-colors">← nisarahmedsiddiqui.in</a>
        <div className="mt-12 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-mint">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-ink">{page.title}</h1>
          <p className="mt-7 text-lg text-ink-dim leading-relaxed">{page.intro}</p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 gap-4">
          {page.topics.map((topic, i) => (
            <div key={topic} className="panel rounded-lg p-5">
              <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-base font-semibold text-ink">{topic}</h2>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-line-soft pt-8">
          <p className="text-sm text-ink-faint">This page will grow with the projects, experiments, and practical work I add over time.</p>
        </div>
      </div>
    </section>
  );
}
