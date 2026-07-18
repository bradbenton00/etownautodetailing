import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/[0.02] border-t border-white/5 relative">
      {/* Invisible anchor tags for Google Ads Sitelinks */}
      <div id="book" className="absolute -top-24"></div>
      <div id="quote" className="absolute -top-24"></div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Request Your Free Quote</h2>
          <p className="text-white/50">Veteran-Owned • Fast Response • Premium Service</p>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-6 md:p-10 mb-12">
          <form action="https://formspree.io/f/xzdnrvoo" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="home-name" className="text-sm font-medium text-white/80">Full Name *</label>
                <input 
                  type="text" 
                  id="home-name" 
                  name="name" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="home-phone" className="text-sm font-medium text-white/80">Phone Number *</label>
                <input 
                  type="tel" 
                  id="home-phone" 
                  name="phone" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                  placeholder="(270) 555-1234"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="home-vehicle" className="text-sm font-medium text-white/80">Vehicle Year, Make & Model *</label>
              <input 
                type="text" 
                id="home-vehicle" 
                name="vehicle" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                placeholder="e.g. 2021 Ford F-150"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="home-address" className="text-sm font-medium text-white/80">Service Address *</label>
              <input 
                type="text" 
                id="home-address" 
                name="address" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                placeholder="123 Main St, Elizabethtown, KY"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="home-preference" className="text-sm font-medium text-white/80">Service Preference *</label>
                <select 
                  id="home-preference" 
                  name="preference" 
                  required
                  className="w-full bg-[#111111] border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled selected className="text-white/20">Select preference...</option>
                  <option value="Mobile Service (We come to you)">Mobile Service (We come to you)</option>
                  <option value="We Pick-up & Drop-off">We Pick-up & Drop-off</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="home-water" className="text-sm font-medium text-white/80">Water Hookup Available? (If Mobile)</label>
                <select 
                  id="home-water" 
                  name="water_hookup" 
                  className="w-full bg-[#111111] border border-white/10 rounded-none h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="N/A (Pick-up & Drop-off)">N/A (Pick-up & Drop-off)</option>
                  <option value="Yes, water is available">Yes, water is available</option>
                  <option value="No, need Pick-up & Drop-off">No, need Pick-up & Drop-off</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="home-service" className="text-sm font-medium text-white/80">Service Interested In *</label>
              <select 
                id="home-service" 
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
              <label htmlFor="home-message" className="text-sm font-medium text-white/80">Condition & Details (Optional)</label>
              <textarea 
                id="home-message" 
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
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto mb-12">
          <a href="tel:2703196059" className="w-full">
            <button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-14 uppercase tracking-widest text-sm font-medium transition-colors">
              Call Direct: (270) 319-6059
            </button>
          </a>
        </div>

        <div className="w-full bg-white/5 border border-white/10 rounded-sm overflow-hidden">
            <iframe 
                src="https://maps.google.com/maps?q=140+Brentwood+Drive,+Elizabethtown,+KY+42701&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
        </div>
      </div>
    </section>
  );
}