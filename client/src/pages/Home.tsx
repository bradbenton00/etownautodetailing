import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { GrillCleaning } from "@/components/sections/GrillCleaning";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { About } from "@/components/sections/About";
import { Results } from "@/components/sections/Results";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GrillCleaning />
        <Process />
        <Results />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}