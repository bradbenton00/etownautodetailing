import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img 
          src="/images/hero-car.png" 
          alt="Luxury Car Detail" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="block text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            Mobile Auto Detailing • Elizabethtown
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter leading-[0.9]">
            The Art of <br />
            <span className="italic font-light text-white/90">Perfection</span>
          </h1>

          <p className="max-w-xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed pt-4">
            We bring showroom quality directly to your driveway. 
            Specializing in ceramic coating, paint correction, and restoration.
          </p>

          <div className="pt-8">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-10 text-sm uppercase tracking-widest font-medium transition-all"
            >
              Schedule Service
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20"></div>
      </motion.div>
    </section>
  );
}