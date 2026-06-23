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

export default function Home() {
  return (
    <main className="min-h-screen text-on-background selection:bg-primary/30 selection:text-primary overflow-x-hidden w-full max-w-[100vw]">
      {/* Global Fixed Background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-background">
        {/* Background gradient or solid color is applied here */}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        
        <div className="w-full max-w-[1440px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <Ecosystem />
        
        <div className="w-full max-w-[1440px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <Research />
        <Manufacturing />
        <GlobalPresence />
        <Process />
        <Vision />
        
        <div className="w-full max-w-[1440px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <FoundersNote />
        
        <div className="w-full max-w-[1440px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
