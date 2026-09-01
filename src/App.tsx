import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Toolbox from "./sections/Toolbox";
import Architecture from "./sections/Architecture";
import Pipeline from "./sections/Pipeline";
import Projects from "./sections/Projects";
import Scenarios from "./sections/Scenarios";
import Terminal from "./sections/Terminal";
import Cheatsheet from "./sections/Cheatsheet";
import DevSecOps from "./sections/DevSecOps";
import Monitoring from "./sections/Monitoring";
import Philosophy from "./sections/Philosophy";
import GitHubProjects from "./sections/GitHubProjects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Toolbox />
        <Architecture />
        <Pipeline />
        <Projects />
        <Scenarios />
        <Terminal />
        <Cheatsheet />
        <DevSecOps />
        <Monitoring />
        <Philosophy />
        <GitHubProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
