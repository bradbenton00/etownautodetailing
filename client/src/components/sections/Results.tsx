import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  {
    src: "/images/customer-detail-camry.jpg",
    alt: "Toyota Camry being professionally detailed by All Seasons Mobile Detailing",
    fit: "contain",
  },
  {
    src: "/images/interior-before-after-camry.jpg",
    alt: "Before and after interior detailing of a Toyota Camry driver area",
    fit: "contain",
  },
  {
    src: "/images/interior-before-after-suv.jpg",
    alt: "Before and after interior detailing showing cleaned seats, dashboard, and floor",
    fit: "contain",
  },
  {
    src: "/images/mobile-detailing-setup.jpg",
    alt: "All Seasons Mobile Detailing working on customer vehicles at a mobile setup",
    fit: "contain",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Professional mobile detailing result",
    fit: "cover",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Freshly detailed vehicle",
    fit: "cover",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Vehicle detailing transformation",
    fit: "cover",
  },
  {
    src: "/images/red-truck-side.jpg",
    alt: "Detailed red truck exterior",
    fit: "cover",
  },
  {
    src: "/images/black-suv-front.jpg",
    alt: "Detailed black SUV exterior",
    fit: "cover",
  },
  {
    src: "/images/black-truck-split.jpg",
    alt: "Black truck detailing result",
    fit: "cover",
  },
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
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
              >
                <div className="group relative aspect-[4/5] overflow-hidden bg-white/5">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className={`w-full h-full transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 ${
                      image.fit === "contain" ? "object-contain" : "object-cover"
                    }`}
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