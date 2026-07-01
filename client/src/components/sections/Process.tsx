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
                { title: "Choose Your Package", desc: "Select the detailing package that best fits your vehicle's needs, whether it's an interior reset or a complete exterior shine." },
                { title: "Schedule an Appointment", desc: "Pick a date and time that works best for your schedule. We offer flexible booking to accommodate busy professionals." },
                { title: "We Come to You", desc: "We arrive at your location—home or office—fully equipped with our own water, power, and premium detailing supplies." },
                { title: "Enjoy the Results", desc: "Drive a vehicle that feels brand new again. You get showroom quality results without the hassle of a drop-off." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 group relative"
                >
                  {/* Timeline connector */}
                  {i !== 3 && (
                    <div className="absolute left-2.5 top-8 w-[1px] h-12 bg-white/10 hidden sm:block"></div>
                  )}
                  
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-0.5 bg-black z-10 group-hover:border-white/50 transition-colors">
                    <span className="text-[10px] font-mono text-white/50">{i + 1}</span>
                  </div>
                  
                  <div className="pb-4">
                    <h3 className="text-lg md:text-xl text-white font-serif mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">{step.desc}</p>
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