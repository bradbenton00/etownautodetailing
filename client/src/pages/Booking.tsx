import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Booking() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <section className="py-20 md:py-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-white/60 text-xs md:text-sm uppercase tracking-widest mb-8 border border-white/10 inline-block px-4 py-2">
              * Final price is upon inspection
            </p>
            <h1 className="text-3xl md:text-6xl font-serif text-white mb-6">Book Your Appointment</h1>
            <div className="w-12 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-center text-center lg:text-left"
            >
              <h2 className="text-2xl font-serif text-white mb-4">Fast & Easy Booking</h2>
              <p className="text-white/60 mb-8 text-sm leading-relaxed">
                Select your preferred date and time using our scheduling calendar. 
                If you don't see a time that works for you, feel free to call or text us directly.
              </p>
              <div className="space-y-4">
                <a href="tel:2703196059" className="block w-full">
                  <button className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-12 uppercase tracking-widest text-xs font-medium transition-colors">
                    Call (270) 319-6059
                  </button>
                </a>
                <a href="sms:2703196059" className="block w-full">
                  <button className="w-full border border-primary/50 bg-transparent text-primary hover:bg-primary hover:text-black rounded-none h-12 uppercase tracking-widest text-xs font-medium transition-colors">
                    Text Us
                  </button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-white/[0.02] border border-white/5 min-h-[600px] flex items-center justify-center relative overflow-hidden"
            >
              <iframe
                src="https://www.smsreminder.co/book/4lrCEQ7MKfbc52VW/bradley-benton"
                width="100%"
                height="100%"
                style={{ border: "none", minHeight: "600px" }}
                title="Booking Calendar"
                className="bg-white rounded-none"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}