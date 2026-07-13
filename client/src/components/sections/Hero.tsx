import { Link } from "wouter";
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
            Mobile Auto Detailing • Elizabethtown, KY
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter leading-[0.9]">
            Elizabethtown's Best <br />
            <span className="italic font-light text-primary">Mobile Auto Detailing</span>
          </h1>

          <p className="max-w-xl mx-auto text-white/70 text-base md:text-xl font-light leading-relaxed pt-4 px-4">
            Veteran-owned premium mobile auto detailing serving Elizabethtown, Radcliff, and surrounding areas. We clean the details so you don't have to.
          </p>

          <div className="pt-8 flex flex-col items-center justify-center gap-4 w-full max-w-sm mx-auto">
            <a href="tel:2703196059" className="w-full">
              <Button 
                className="bg-primary text-black hover:bg-primary/90 rounded-none h-16 w-full text-sm uppercase tracking-widest font-bold transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              >
                Call: (270) 319-6059
              </Button>
            </a>
            <a href="sms:2703196059" className="w-full">
              <Button 
                variant="outline"
                className="border-primary/50 text-primary bg-black/40 backdrop-blur-sm hover:bg-primary hover:text-black rounded-none h-14 w-full text-sm uppercase tracking-widest font-medium transition-all"
              >
                Text for a Quote
              </Button>
            </a>
          </div>
          
          <p className="text-white/40 text-xs uppercase tracking-widest mt-8">
            Limited availability — spots fill fast
          </p>
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