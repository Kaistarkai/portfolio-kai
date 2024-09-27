import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Experience from "@/sections/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
