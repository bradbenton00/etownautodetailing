import { motion } from "framer-motion";

export function Process() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/ceramic-detail.jpg" 
                  alt="Detailing Process" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/10 z-20 bg-black/50 backdrop-blur-sm hidden md:flex items-center justify-center">
                <span className="font-serif text-4xl text-white/20">01</span>
             </div>
          </div>

          <div className="order-1 md:order-2 space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The Process</h2>
              <p className="text-white/60 leading-relaxed font-light">
                We don't just wash cars; we restore them. Our meticulous multi-stage process ensures every inch of your vehicle receives the attention it deserves.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: "Assessment", desc: "We inspect every surface to determine the best approach for your specific vehicle condition." },
                { title: "Correction", desc: "Using advanced techniques to safely remove imperfections, swirls, and scratches from paintwork." },
                { title: "Protection", desc: "Sealing the perfection with premium ceramic coatings that last for years, not weeks." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 group"
                >
                  <span className="text-xs font-mono text-white/30 pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl text-white font-serif mb-2 group-hover:text-white/80 transition-colors">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}