import { motion } from "framer-motion";
import { ArrowRight, Clock, Info, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  },
  {
    title: "Fleet & Maintenance",
    duration: "Weekly / Bi-Weekly",
    price: "Custom",
    description: "Regular scheduled maintenance for your fleet or personal vehicle. Keep it showroom ready year-round.",
    details: [
      "Weekly or Bi-Weekly schedule",
      "Consistent quality",
      "Multi-vehicle discounts"
    ],
    features: [
      "Exterior wash",
      "Wheels & tires cleaned",
      "Quick interior wipe (dash, seats, glass)",
      "Regular maintenance schedule"
    ],
    link: "https://api.leadconnectorhq.com/widget/bookings/fleet-maintenance" 
  }
];

export function Booking() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <section className="py-20 md:py-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium mb-4 block">Weekend Appointments Only</span>
          <h1 className="text-3xl md:text-6xl font-serif text-white mb-6">Select Your Package</h1>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`group border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-none overflow-hidden h-full flex flex-col ${booking.highlight ? 'border-white/20 bg-white/[0.05]' : ''}`}>
                <CardHeader className="text-center pb-6 md:pb-8 border-b border-white/5">
                    <div className="flex justify-center items-center gap-2 mb-2 text-white/40 text-[10px] md:text-xs uppercase tracking-wider">
                      <Clock size={12} />
                      <span>{booking.duration}</span>
                      {booking.highlight && (
                        <>
                          <span className="w-1 h-1 bg-white/20 rounded-full" />
                          <span className="text-white/80">Most Popular</span>
                        </>
                      )}
                    </div>
                  <CardTitle className="font-serif text-2xl md:text-3xl text-white mb-2">{booking.title}</CardTitle>
                  <CardDescription className="text-white/50 text-sm md:text-base leading-relaxed">{booking.description}</CardDescription>
                  <div className="mt-6 text-3xl font-light text-white">{booking.price}</div>
                </CardHeader>

                <CardContent className="pt-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-white/40">
                    {booking.details.map((detail, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <Info size={12} />
                        {detail}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-4 mb-8 flex-1 max-w-sm mx-auto w-full">
                    {booking.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild
                    className={`w-full rounded-none h-14 uppercase tracking-widest text-xs font-medium transition-all ${
                      booking.highlight 
                        ? "bg-white text-black hover:bg-white/90" 
                        : "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    <a href={booking.link} target="_blank" rel="noopener noreferrer">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}