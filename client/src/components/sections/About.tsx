import { motion } from "framer-motion";
import { Shield, Calendar, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-medium mb-4 block">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Veteran Owned.<br/>Detail Oriented.</h2>
              <p className="text-white/60 leading-relaxed font-light text-lg">
                All Seasons Mobile Detailing is built on the principles of integrity, precision, and service. As a veteran-owned business, we bring military-grade attention to detail to every vehicle we touch.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0">
                  <Shield className="text-white/80" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Trusted Service</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Fully insured and committed to the highest standards of care for your vehicle.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0">
                  <Calendar className="text-white/80" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Weekend Focus</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Dedicated weekend appointments designed to fit your busy professional schedule.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-white/80" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Elizabethtown Local</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Proudly serving Elizabethtown, Radcliff, Vine Grove, and Rineyville with mobile convenience.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 relative z-10 p-2">
                <video 
                  src="/videos/brand-intro.mp4" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" 
                  controls
                  playsInline
                  poster="/images/about-detail.png"
                />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border border-white/10 z-0" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-white/10 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
