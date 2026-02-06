import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "The Express",
    description: "Perfect for regular maintenance.",
    price: "From $150",
    features: [
      "Premium Foam Wash",
      "Wheel & Tire Deep Clean",
      "Interior Vacuum & Wipe Down",
      "Window Cleaning",
      "Tire Dressing"
    ]
  },
  {
    title: "Signature Detail",
    description: "Our most popular comprehensive package.",
    price: "From $295",
    features: [
      "Includes Express Package",
      "Iron Decontamination & Clay Bar",
      "6-Month Silica Sealant",
      "Leather Cleaning & Conditioning",
      "Carpet Shampoo & Extraction",
      "Engine Bay Detail"
    ],
    highlight: true
  },
  {
    title: "Ceramic Protection",
    description: "The ultimate long-term protection.",
    price: "From $800",
    features: [
      "Includes Signature Detail",
      "Single Stage Paint Correction",
      "3-5 Year Ceramic Coating",
      "Windshield Coating",
      "Wheel Face Coating",
      "12-Hour Cure Time"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Our Services</h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-none flex flex-col ${service.highlight ? 'border-white/20 bg-white/[0.05]' : ''}`}>
                <CardHeader className="text-center pb-8 border-b border-white/5">
                  <CardTitle className="font-serif text-2xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-white/50">{service.description}</CardDescription>
                  <div className="mt-6 text-3xl font-light text-white">{service.price}</div>
                </CardHeader>
                <CardContent className="pt-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full rounded-none border-white/10 hover:bg-white hover:text-black transition-colors group">
                    Book This Package
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}