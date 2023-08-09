import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">

      <Header/>

      <section id="hero" className="snap-start">
        <Hero/>
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start" >
        <Skills/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>

      {/* Contact Me*/}

    </div>
  )
}
