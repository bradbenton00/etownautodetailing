import { motion } from "framer-motion";
import { ArrowRight, Clock, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bookings = [
  {
    title: "Signature Complete Detail",
    duration: "6–8 Hours",
    price: "From $450",
    description: "Estimated time: 6–8 hours, depending on vehicle size & condition. Final price confirmed after vehicle inspection. To make your car look & feel like new, you will never want to sell it.",
    details: [
      "Starting at $450 (Sedans)",
      "Small SUV: +$50",
      "Full-Size SUV / Truck: +$75",
      "Vans: Custom quote"
    ],
    features: [
      "Complete interior deep clean",
      "Complete exterior detail",
      "Full steam cleaning & extraction",
      "Upholstery shampoo/stain removal",
      "Claybar/paint decontamination",
      "Long-term exterior protection"
    ],
    link: "https://api.leadconnectorhq.com/widget/bookings/signature-complete-detail",
    highlight: true
  },
  {
    title: "Signature Interior Detail",
    duration: "3–4 Hours",
    price: "From $295",
    description: "Estimated time: 3-4 hours. Deep interior reset including full steam cleaning, extraction, and detailed cleaning of all surfaces.",
    details: [
      "Starting at $295 (Sedans)",
      "Small SUV: +$50",
      "Full-Size SUV / Truck: +$75"
    ],
    features: [
      "Dash, doors & console detailed",
      "Full steam cleaning & extraction",
      "Headliner & door jambs",
      "Upholstery shampoo/stain removal"
    ],
    link: "https://api.leadconnectorhq.com/widget/bookings/signature-interior-detail-etznq"
  },
  {
    title: "Signature Exterior Detail",
    duration: "3–4 Hours",
    price: "From $375",
    description: "Estimated time: 3-4 hours. Comprehensive exterior restoration including decontamination and long-term protection.",
    details: [
      "Starting at $375 (Sedans)",
      "Small SUV: +$50",
      "Full-Size SUV / Truck: +$75"
    ],
    features: [
      "Complete wash & bug detail",
      "Claybar/paint decontamination",
      "Tar & tree sap removal",
      "Long-term exterior protection"
    ],
    link: "https://api.leadconnectorhq.com/widget/bookings/signature-exterior-detailing"
  }
];

export function Booking() {
  return (
    <section className="py-20 md:py-32 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium mb-4 block">Weekend Appointments Only</span>
          <h1 className="text-3xl md:text-6xl font-serif text-white mb-6">Select Your Package</h1>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`group border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-none overflow-hidden ${booking.highlight ? 'border-white/20 bg-white/[0.05]' : ''}`}>
                <div className="grid md:grid-cols-[1.5fr,1fr] gap-6 md:gap-8 p-6 md:p-12">
                  <div className="flex flex-col justify-between h-full space-y-6 md:space-y-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-white/40 text-[10px] md:text-xs uppercase tracking-widest mb-4">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{booking.duration}</span>
                        </div>
                        {booking.highlight && (
                          <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <span className="text-white/80">Most Popular</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-white/90 transition-colors">{booking.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed max-w-xl text-sm md:text-base">
                        {booking.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/40">
                        {booking.details.map((detail, i) => (
                          <span key={i} className="flex items-center gap-2">
                            <Info size={12} />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-12">
                    <div>
                      <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 block">Includes</span>
                      <ul className="space-y-3 mb-8">
                        {booking.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                            <Check className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-2xl md:text-3xl font-light text-white">{booking.price}</div>
                      <Button 
                        onClick={() => window.open(booking.link, "_blank")}
                        className={`w-full rounded-none h-14 uppercase tracking-widest text-xs font-medium transition-all ${
                          booking.highlight 
                            ? "bg-white text-black hover:bg-white/90" 
                            : "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}