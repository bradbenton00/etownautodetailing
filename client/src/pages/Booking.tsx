import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Booking() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <section className="py-20 md:py-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-white/60 text-xs md:text-sm uppercase tracking-widest mb-8 border border-white/10 inline-block px-4 py-2">
              * Final price is upon inspection
            </p>
            <h1 className="text-3xl md:text-6xl font-serif text-white mb-6">Book Your Appointment</h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-16 mb-8 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-6">Ready to schedule your detail?</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
              Give us a call or send a text to check availability and book your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mb-8">
              <a href="tel:2703196059" className="w-full">
                <button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-14 uppercase tracking-widest text-sm font-medium transition-colors">
                  Call (270) 319-6059
                </button>
              </a>
              <a href="sms:2703196059" className="w-full">
                <button className="w-full border border-white/20 bg-transparent text-white hover:bg-white hover:text-black rounded-none h-14 uppercase tracking-widest text-sm font-medium transition-colors">
                  Text Us
                </button>
              </a>
            </div>
            <div className="text-center text-white/40 text-xs px-4 max-w-md">
              By calling or texting, you agree to receive SMS messages from All Season Mobile Detailing. Message and data rates may apply. Reply STOP to opt out.
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}