import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/grill-before-after.jpg",
  "/images/red-truck-side.jpg",
  "/images/black-suv-front.jpg",
  "/images/black-truck-split.jpg"
];

export function Results() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-medium mb-4 block">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Real Results</h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
              >
                <div className="group relative aspect-[4/5] overflow-hidden bg-white/5">
                  <img 
                    src={src} 
                    alt={`Detailing result ${index + 1}`} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 border border-white/10 pointer-events-none transition-colors group-hover:border-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}