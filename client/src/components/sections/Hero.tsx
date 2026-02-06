import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Ultra subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="/images/hero-car.png" 
          alt="Luxury Car Detail" 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Elizabethtown, KY
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter leading-[0.9] mb-8">
            Weekend <br />
            <span className="text-white/40">Restoration.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
            Mobile auto detailing for the uncompromising. <br/>
            We bring showroom standards to your driveway.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              onClick={() => window.open("https://etownautodetailing.com/book-an-appointment", "_blank")}
              className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-12 text-xs uppercase tracking-widest font-medium transition-all"
            >
              Reserve Slot
            </Button>
            <Button 
              variant="link"
              onClick={() => window.location.href = "tel:270-319-6059"}
              className="text-white hover:text-white/70 h-14 px-0 text-xs uppercase tracking-widest font-medium transition-all no-underline hover:underline decoration-white/30 underline-offset-8"
            >
              (270) 319-6059
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}