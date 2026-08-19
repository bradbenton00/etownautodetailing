import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/[0.02] border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Call or Text for a Free Quote</h2>
          <p className="text-white/50">Veteran-Owned • Fast Response • Premium Service</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl mx-auto mb-12">
          <a href="tel:2703196059" className="w-full">
            <Button className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest text-sm font-bold">
              Call (270) 319-6059
            </Button>
          </a>
          <a href="sms:2703196059" className="w-full">
            <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-black rounded-none h-14 uppercase tracking-widest text-sm font-bold">
              Text for a Quote
            </Button>
          </a>
        </div>

        <div className="w-full bg-white/5 border border-white/10 rounded-sm overflow-hidden">
            <iframe 
                src="https://maps.google.com/maps?q=140+Brentwood+Drive,+Elizabethtown,+KY+42701&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
        </div>
      </div>
    </section>
  );
}