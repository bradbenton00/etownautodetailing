import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rvPackages = [
  {
    title: 'Spring "Trip-Ready"',
    description: "Get road-ready before camping season.",
    features: [
      "Exterior wash",
      "Wax",
      "Roof cleaning",
      "Awning cleaning",
      "Interior deep clean",
      "Tire & wheel treatment",
    ],
    highlight: true,
  },
  {
    title: 'Summer "Maintenance"',
    description: "Mid-season refresh.",
    features: [
      "Exterior wash",
      "Bug & tar removal",
      "Interior refresh",
      "Window cleaning",
    ],
    highlight: false,
  },
  {
    title: 'Fall "Winterization & Storage"',
    description: "Protect your RV before storage.",
    features: [
      "Deep clean",
      "Protective wax & sealant",
      "Interior treatment to prevent mold & odor during winter storage",
    ],
    highlight: false,
  },
];

export function RVDetailing() {
  return (
    <section id="rv-detailing" className="py-16 md:py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Seasonal RV Detailing</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-white/60 font-light leading-relaxed">
            Veteran-owned mobile RV detailing serving Elizabethtown, Radcliff, and surrounding areas.
            We bring the detailing to your driveway. RV detailing is billed at an hourly rate — most
            RVs take a full day. Contact us for a free quote based on your RV's size and condition.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <img
            src="/images/rv-detailing.jpg"
            alt="Mobile RV detailing in Elizabethtown KY — washing an RV roof and exterior"
            loading="lazy"
            className="w-full border border-white/10 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {rvPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-none flex flex-col ${pkg.highlight ? 'border-white/20 bg-white/[0.05]' : ''}`}>
                <CardHeader className="text-center pb-8 border-b border-white/5">
                  <CardTitle className="font-serif text-2xl text-white mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="text-white/50">{pkg.description}</CardDescription>
                  <div className="mt-6 text-xl font-light text-primary">Free Quote</div>
                </CardHeader>
                <CardContent className="pt-8 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <a href="tel:2703196059" className="w-full sm:w-auto">
            <Button className="w-full rounded-none bg-primary text-black hover:bg-primary/90 transition-colors px-8 h-12">
              Text/Call for a Free RV Quote
            </Button>
          </a>
          <Link href="/book-an-appointment" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full rounded-none border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors px-8 h-12"
            >
              Reserve Now
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-white/40 italic">
          Limited RV appointments available each season — book early.
        </p>
      </div>
    </section>
  );
}
