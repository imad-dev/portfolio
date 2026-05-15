import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Workflow } from "./components/Workflow";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B12] overflow-x-hidden">
      {/* Skip to content — Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Custom Cursor - Desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* All Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Workflow />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}