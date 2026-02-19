import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";

export function Booking() {
  useEffect(() => {
    // Load the LeadConnector script
    const script = document.createElement("script");
    script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            className="bg-white/[0.02] border border-white/5 p-2 md:p-4 min-h-[600px]"
          >
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/5tJWoiEAiohaFLNXte7S" 
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }} 
              scrolling="no" 
              id="5tJWoiEAiohaFLNXte7S_1771370071664"
            />
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}