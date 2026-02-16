import { motion } from "framer-motion";

const images = [
  "/images/red-truck-side.jpg",
  "/images/black-suv-front.jpg",
  "/images/black-truck-split.jpg"
];

export function Results() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-medium mb-4 block">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Real Results</h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden bg-white/5"
            >
              <img 
                src={src} 
                alt={`Detailing result ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none transition-colors group-hover:border-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}