import { useEffect } from "react";

export function Contact() {
  
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Book Your Appointment</h2>
          <p className="text-white/50">Veteran-Owned • Weekend Appointments Only</p>
        </div>

        <div className="w-full bg-white/5 border border-white/10 rounded-sm overflow-hidden mb-4">
            <iframe 
                src="https://api.leadconnectorhq.com/widget/bookings/detailng-one" 
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }} 
                scrolling="no" 
                id="detailng-one"
            />
        </div>

        <div className="text-center text-white/60 text-xs md:text-sm mb-12 px-4">
          By providing your phone number, you agree to receive SMS messages from All Season Mobile Detailing. Message and data rates may apply. Reply STOP to opt out.
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