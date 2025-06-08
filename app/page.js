import Hero from "@/components/Hero";
import GridBackgroundDemo from "@/components/ui/GridBackground";
import Collaborate from "@/components/Collaborate";
import Projects from "@/components/Projects";
import Upto from "@/components/Upto";
import { FloatingDockDemo } from "@/components/ui/FloatingDockDemo";

export default function Home() {
  return (
    <GridBackgroundDemo>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <section id="hero">
            <Hero />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="collaborate">
            <Collaborate />
          </section>

          <section id="upto">
            <Upto />
          </section>
        </div>
      </main>

      <FloatingDockDemo />
    </GridBackgroundDemo>
  );
}
