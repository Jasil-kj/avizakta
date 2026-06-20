import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import GlobalPresence from "@/components/sections/GlobalPresence";
import FoundersNote from "@/components/sections/FoundersNote";
import Ecosystem from "@/components/sections/Ecosystem";
import Manufacturing from "@/components/sections/Manufacturing";
import Research from "@/components/sections/Research";
import Process from "@/components/sections/Process";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";

export default function Home() {
  return (
    <main className="min-h-screen text-on-background selection:bg-primary/30 selection:text-primary">
      {/* Global Fixed Background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-background">
        <AmbientBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <GlobalPresence />
        <FoundersNote />
        <Ecosystem />
        <Manufacturing />
        <Research />
        <Process />
        <Vision />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
