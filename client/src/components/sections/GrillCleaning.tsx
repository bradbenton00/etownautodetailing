import { motion } from "framer-motion";
import { Check, Flame, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const grillServices = [
  {
    title: "Standard Grill Refresh",
    price: "$149",
    type: "flat rate",
    features: [
      "Interior scrape + degrease",
      "Grates cleaned & sanitized",
      "Burner surface clean",
      "Drip tray emptied",
      "Exterior wipe-down",
      "Quick function check"
    ],
    link: "/book-an-appointment" 
  },
  {
    title: "Deep Restore",
    subtitle: "(Full Disassembly)",
    price: "$279",
    type: "flat rate",
    features: [
      "Everything in Standard",
      "Disassembly of grates + flame tamers",
      "Deep degreasing soak",
      "Burner port cleaning",
      "Heat plate detail",
      "Stainless polish",
      "Function check"
    ],
    highlight: true,
    badge: "Most Popular",
    link: "/book-an-appointment"
  },
  {
    title: "Smoker / Large Grill",
    subtitle: "(4+ Burners)",
    price: "$329",
    type: "flat rate",
    features: [
      "Full deep clean",
      "Smoke box / pellet tray detail",
      "Ash + grease chamber degrease",
      "Exterior polish",
      "Function check"
    ],
    link: "/book-an-appointment"
  }
];

const addons = [
  { name: "Additional grill (same property)", price: "$99" },
  { name: "Built-in outdoor kitchen grill", price: "+ $50" },
  { name: "Rust treatment", price: "+ $40" },
  { name: "Grease tray replacement", price: "$25 install" } // Customer supplies
];

export function GrillCleaning() {
  return (
    <section id="grill-cleaning" className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/60 text-xs md:text-sm uppercase tracking-widest mb-8 border border-white/10 inline-block px-4 py-2">
            * Final price is upon inspection
          </p>
          <div className="flex justify-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-white/60">Mobile Service</span>
            <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-white/60">Flat Pricing</span>
            <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest text-white/60">Safe Degreasing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Grill Cleaning</h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-6">
            From grease-caked to backyard ready — flat-rate packages, weekend appointments available.
          </p>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {grillServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-none flex flex-col ${service.highlight ? 'border-white/20 bg-white/[0.05] relative' : ''}`}>
                {service.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {service.badge}
                  </div>
                )}
                <CardHeader className="text-center pb-8 border-b border-white/5">
                  <div className="flex justify-center mb-4 text-white/20">
                    <Flame size={24} />
                  </div>
                  <CardTitle className="font-serif text-2xl text-white mb-1">{service.title}</CardTitle>
                  {service.subtitle && <span className="text-white/50 text-sm block mb-2">{service.subtitle}</span>}
                  <div className="mt-4 flex items-baseline justify-center gap-2">
                    <span className="text-3xl font-light text-white">{service.price}</span>
                    <span className="text-sm text-white/40 uppercase tracking-wider">{service.type}</span>
                  </div>
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
                  <Link href={service.link}>
                    <Button 
                      variant={service.highlight ? "default" : "outline"}
                      className={`w-full rounded-none transition-colors group ${
                        service.highlight 
                          ? "bg-white text-black hover:bg-white/90" 
                          : "border-white/10 hover:bg-white hover:text-black"
                      }`}
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="max-w-3xl mx-auto border border-white/5 bg-white/[0.02] p-8 mb-16">
          <h3 className="text-lg font-serif text-white mb-6 text-center">Add-ons</h3>
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
            {addons.map((addon, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-white/70 text-sm">{addon.name}</span>
                <span className="text-white/40 text-sm font-light">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none px-8">
              Check Availability
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
