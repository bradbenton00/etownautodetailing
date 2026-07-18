import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export function QuoteForm() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <section className="py-20 md:py-32 bg-background min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-white/60 text-xs md:text-sm uppercase tracking-widest mb-4 border border-white/10 inline-block px-4 py-2">
              All Seasons Mobile Detailing
            </p>
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-6">Get Your Free Quote</h1>
            <div className="w-12 h-[1px] bg-primary mx-auto mb-6"></div>
            <p className="text-white/60 text-sm max-w-lg mx-auto">
              Fill out the details below and we'll get back to you with a custom quote for your vehicle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-6 md:p-10"
          >
            <form action="https://formspree.io/f/xzdnrvoo" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                    placeholder="(270) 555-1234"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="vehicle" className="text-sm font-medium text-white/80">Vehicle Year, Make & Model *</label>
                <input 
                  type="text" 
                  id="vehicle" 
                  name="vehicle" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="e.g. 2021 Ford F-150"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-white/80">Service Address *</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="123 Main St, Elizabethtown, KY"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="preference" className="text-sm font-medium text-white/80">Service Preference *</label>
                  <select 
                    id="preference" 
                    name="preference" 
                    required
                    className="w-full bg-[#111111] border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled selected className="text-white/20">Select preference...</option>
                    <option value="Mobile Service (We come to you)">Mobile Service (We come to you)</option>
                    <option value="Drop-off (You bring it to us)">Drop-off (You bring it to us)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="water" className="text-sm font-medium text-white/80">Water Hookup Available? (If Mobile)</label>
                  <select 
                    id="water" 
                    name="water_hookup" 
                    className="w-full bg-[#111111] border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="N/A (Drop-off)">N/A (Drop-off)</option>
                    <option value="Yes, water is available">Yes, water is available</option>
                    <option value="No, bring water">No, please bring water</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white/80">Service Interested In *</label>
                <select 
                  id="service" 
                  name="service" 
                  required
                  className="w-full bg-[#111111] border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled selected className="text-white/20">Select a service...</option>
                  <option value="Signature Complete Detail">Signature Complete Detail</option>
                  <option value="Interior Detail">Interior Detail</option>
                  <option value="Exterior Detail">Exterior Detail</option>
                  <option value="Ceramic Coating">Ceramic Coating</option>
                  <option value="Fleet / Maintenance">Fleet / Maintenance</option>
                  <option value="Not Sure / Need Recommendation">Not Sure / Need Recommendation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Condition & Details (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Tell us a bit about the condition of the vehicle, specific stains, or areas of concern..."
                ></textarea>
              </div>

              <input type="text" name="_gotcha" style={{ display: "none" }} />
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest text-sm font-bold transition-all shadow-[0_0_15px_rgba(234,179,8,0.2)] mt-4"
              >
                Request Quote
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
