import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import NotFound from "./not-found";

export function ServicePage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/#services">
          <Button variant="link" className="text-white/50 hover:text-white mb-8 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{service.title}</h1>
              <p className="text-xl text-white/70 font-light">{service.description}</p>
            </div>

            <div className="flex gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="block text-sm text-white/40 uppercase tracking-wider mb-1">Starting At</span>
                <span className="text-3xl font-light text-white">{service.price}</span>
              </div>
              <div className="w-[1px] bg-white/10"></div>
              <div>
                <span className="block text-sm text-white/40 uppercase tracking-wider mb-1">Duration</span>
                <div className="flex items-center gap-2 text-xl font-light text-white">
                  <Clock className="w-5 h-5 text-white/50" />
                  {service.duration}
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-p:text-white/60 prose-p:leading-relaxed prose-p:font-light">
              <p>{service.longDescription}</p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-serif text-white">What's Included:</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <Check className="w-5 h-5 text-white/40 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="sticky top-32 bg-white/[0.02] border border-white/10 p-8">
              <h3 className="text-2xl font-serif text-white mb-6">Ready to Book?</h3>
              <p className="text-white/60 mb-8 font-light leading-relaxed">
                We bring the showroom shine directly to your driveway. Professional, convenient, and detail-oriented.
              </p>
              
              <div className="space-y-4">
                {service.isCallToBook ? (
                  <a href="tel:2703196059" className="block">
                    <Button className="w-full h-14 text-base bg-white text-black hover:bg-white/90 rounded-none group">
                      Call to Book (270) 319-6059
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                ) : (
                  <Link href="/book-an-appointment">
                    <Button className="w-full h-14 text-base bg-white text-black hover:bg-white/90 rounded-none group">
                      Reserve Your Spot
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
                
                <div className="flex items-center justify-center gap-2 text-xs text-white/40 pt-4">
                  <Shield className="w-4 h-4" />
                  <span>Licensed, Insured & Veteran Owned</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
