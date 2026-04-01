import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Do you come to my office in Elizabethtown?",
      answer: "Yes! We are a fully mobile detailing service. We come to your home, office, or apartment in Elizabethtown, Radcliff, Vine Grove, Rineyville, and Hodgenville. As long as we have access to your vehicle and permission to work on the property, we can bring the showroom shine to you."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the entire Hardin County area, including Elizabethtown (E-town), Radcliff, Vine Grove, Glendale, Rineyville, and Hodgenville. If you're slightly outside these areas, please contact us—we may still be able to accommodate you."
    },
    {
      question: "How long does a full detail take?",
      answer: "Our Signature Complete Detail typically takes 6–8 hours depending on the size and condition of the vehicle. Premium Interior or Exterior packages usually take 3–4 hours. We focus on quality over speed to ensure every inch of your vehicle is perfect."
    },
    {
      question: "Why should I choose mobile detailing over a car wash?",
      answer: "Automated car washes can scratch your paint with abrasive brushes and harsh chemicals. Our mobile detailing service uses premium, pH-balanced products and clean microfiber towels to safely clean and protect your vehicle. Plus, we address deep cleaning needs like shampooing carpets and conditioning leather that car washes simply can't touch."
    },
    {
      question: "Do you need access to water and power?",
      answer: "Yes, for most appointments we require access to a water spigot and an electrical outlet within 100 feet of the vehicle. This allows us to use our professional-grade equipment without the noise and exhaust of gas generators."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, debit cards, and cash. Payment is due upon completion of the service and your final satisfaction inspection."
    },
    {
      question: "Are you insured?",
      answer: "Absolutely. All Seasons Mobile Detailing LLC is a fully insured, veteran-owned business. You can rest easy knowing your vehicle is in professional, protected hands."
    },
    {
      question: "How often should I get my car detailed in Kentucky?",
      answer: "Given Kentucky's variable weather—hot summers and salty roads in winter—we recommend a full protective wax or sealant (included in our Exterior packages) at least twice a year. An interior detail is recommended every 3–6 months to prevent stains from setting and to keep the cabin healthy."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      
      <section className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-medium mb-4 block">Common Questions</span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our premium mobile detailing services in Elizabethtown and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/[0.02] border border-white/5 p-8 rounded-none hover:bg-white/[0.04] transition-colors">
              <h3 className="text-xl font-serif text-white mb-4">{faq.question}</h3>
              <p className="text-white/60 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-white/[0.02] border border-white/10 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Still have questions?</h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            We're happy to help. Text or call us directly to discuss your specific vehicle needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/book-an-appointment">
              <Button className="bg-white text-black hover:bg-white/90 rounded-none h-12 px-8 uppercase tracking-widest text-xs">
                Book Now
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "tel:502-685-9111"}
              className="border-white/20 text-white hover:bg-white hover:text-black rounded-none h-12 px-8 uppercase tracking-widest text-xs"
            >
              (502) 685-9111
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}