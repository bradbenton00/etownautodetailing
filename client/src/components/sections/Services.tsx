import { motion } from "framer-motion";
import { Check, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Premium Interior",
    description: "Deep clean & reset for your cabin.",
    price: "$295+",
    duration: "3-4 hrs",
    features: [
      "Deep interior vacuum",
      "Upholstery & carpet cleaning",
      "Leather cleaning & conditioning",
      "Dash, doors & console detailed",
      "Interior glass (streak-free)",
      "Light stain treatment included"
    ]
  },
  {
    title: "Signature Complete",
    description: "Our most popular restoration package.",
    price: "$450+",
    duration: "5-6 hrs",
    features: [
      "Complete interior deep clean",
      "Complete exterior detail",
      "Paint decontamination",
      "Premium paint sealant (12mo)",
      "Wheels & tires deep cleaned",
      "Final inspection & walk-around"
    ],
    highlight: true
  },
  {
    title: "Premium Exterior",
    description: "Showroom shine & protection.",
    price: "$375+",
    duration: "3-4 hrs",
    features: [
      "Hand wash & dry",
      "Paint decontamination",
      "Clay bar treatment",
      "Machine wax application",
      "Wheel faces cleaned",
      "Tire dressing applied"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white max-w-xl">Curated Packages</h2>
          <p className="text-white/40 text-sm uppercase tracking-widest mt-6 md:mt-0 max-w-xs text-right">
            Limited weekend slots available for premium attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-white/40 mb-2">{service.duration}</span>
                    <h3 className="text-2xl font-serif text-white group-hover:text-white/80 transition-colors">{service.title}</h3>
                  </div>
                  <span className="text-xl font-light text-white">{service.price}</span>
                </div>
                
                <p className="text-white/60 text-sm mb-8 font-light min-h-[40px]">{service.description}</p>
                
                <ul className="space-y-3 mb-10 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                      <span className="w-1 h-1 bg-white/20 mt-2 rounded-full shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline"
                  onClick={() => {
                      const links = {
                          "Premium Interior": "https://api.leadconnectorhq.com/widget/bookings/signature-interior-detail-etznq",
                          "Signature Complete": "https://api.leadconnectorhq.com/widget/bookings/signature-complete-detail",
                          "Premium Exterior": "https://api.leadconnectorhq.com/widget/bookings/signature-exterior-detailing"
                      };
                      const url = links[service.title as keyof typeof links] || "https://etownautodetailing.com/book-an-appointment";
                      window.open(url, "_blank");
                  }}
                  className="w-full rounded-none border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all h-12 uppercase text-xs tracking-widest"
                >
                  Reserve Slot
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}