import { Link } from "wouter";
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
  },
  {
    title: "Fleet & Maintenance",
    description: "Regular weekly or bi-weekly care.",
    price: "Custom",
    duration: "Recurring",
    features: [
      "Exterior wash",
      "Wheels & tires cleaned",
      "Quick interior wipe",
      "Dash, seats & glass",
      "Weekly or Bi-Weekly schedule",
      "Perfect for maintaining shine"
    ]
  }
];

export function Services() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Detailing Packages</h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-6">
            I open 2–3 premium detail slots each weekend to ensure every vehicle receives full attention and top-tier results.
          </p>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
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
                  <div className="flex justify-center items-center gap-2 mb-2 text-white/40 text-xs uppercase tracking-wider">
                    <Clock size={12} />
                    <span>{service.duration}</span>
                  </div>
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
                  <Link href="/book-an-appointment">
                    <Button 
                      variant={service.highlight ? "default" : "outline"}
                      className={`w-full rounded-none transition-colors group ${
                        service.highlight 
                          ? "bg-white text-black hover:bg-white/90" 
                          : "border-white/10 hover:bg-white hover:text-black"
                      }`}
                    >
                      Reserve Weekend Slot
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center border border-white/5 bg-white/[0.02] p-8">
          <h3 className="text-lg font-serif text-white mb-4">Vehicle Size Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/60">
            <div>
              <span className="block text-white font-medium mb-1">Sedan / Coupe</span>
              Base Price
            </div>
            <div>
              <span className="block text-white font-medium mb-1">SUV / Truck</span>
              +$25 – $50
            </div>
            <div>
              <span className="block text-white font-medium mb-1">3-Row SUV / Van</span>
              +$75 – $100
            </div>
          </div>
          <p className="mt-6 text-xs text-white/40 italic">
            *Final price confirmed after inspection. Heavily soiled vehicles may require add-ons.
          </p>
        </div>
      </div>
    </section>
  );
}