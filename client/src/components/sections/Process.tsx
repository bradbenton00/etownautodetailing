import { motion } from "framer-motion";

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/ceramic-detail.jpg" 
                  alt="Detailing Process" 
                  className="w-full h-full object-cover transition-all duration-700 opacity-80 hover:opacity-100"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/10 z-20 bg-black/50 backdrop-blur-sm hidden md:flex items-center justify-center">
                <span className="font-serif text-4xl text-white/20">01</span>
             </div>
          </div>

          <div className="order-1 md:order-2 space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">How It Works</h2>
              <p className="text-white/60 leading-relaxed font-light">
                We make it simple. Professional detailing without the hassle of dropping off your car.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: "Choose Your Package", desc: "Select the service level that fits your vehicle's needs." },
                { title: "Reserve Your Weekend Slot", desc: "Book one of our limited premium weekend appointments." },
                { title: "We Come to You", desc: "We arrive at your home fully equipped to transform your vehicle." },
                { title: "Enjoy the Results", desc: "Showroom quality finish without leaving your driveway." }
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