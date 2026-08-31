import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rvPackage = {
  title: "Complete RV Detail",
  description: "A complete inside-and-out RV refresh.",
  features: [
    "Exterior hand wash",
    "Roof & awning cleaning",
    "Bug & road grime removal",
    "Wheels & tires cleaned",
    "Exterior windows cleaned",
    "Interior vacuum & surface cleaning",
    "Protective wax available upon request",
  ],
};

export function RVDetailing() {
  return (
    <section id="rv-detailing" className="py-16 md:py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">RV Detailing</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-white/60 font-light leading-relaxed">
            Veteran-owned mobile RV detailing serving Elizabethtown, Radcliff, and surrounding areas.
            We bring the detailing to your driveway. Contact us for a free quote based on your RV's
            size, condition, and requested services.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-white/20 bg-white/[0.05] rounded-none">
              <CardHeader className="text-center pb-8 border-b border-white/5">
                <CardTitle className="font-serif text-2xl text-white mb-2">{rvPackage.title}</CardTitle>
                <CardDescription className="text-white/50">{rvPackage.description}</CardDescription>
                <div className="mt-6 text-xl font-light text-primary">Call or Text for a Free Quote</div>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="space-y-4">
                  {rvPackage.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <a href="tel:2703196059" className="w-full sm:w-auto">
            <Button className="w-full rounded-none bg-primary text-black hover:bg-primary/90 transition-colors px-8 h-12">
              Call for an RV Quote
            </Button>
          </a>
          <a href="sms:2703196059" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full rounded-none border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors px-8 h-12"
            >
              Text for an RV Quote
            </Button>
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-white/40 italic">
          Limited RV appointments available — book early.
        </p>
      </div>
    </section>
  );
}
