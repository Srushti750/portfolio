import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />

        <Contact />

        {/* <Skills /> */}
        {/* <Credentials /> */}
        
      </main>
      <Footer />
    </>
  );
}
