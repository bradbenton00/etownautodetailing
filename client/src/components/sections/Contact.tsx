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

        <div className="text-white/60 text-sm mb-8 bg-black/40 p-6 rounded-lg border border-white/5 backdrop-blur-sm">
          <h3 className="text-white font-serif text-xl mb-3">SMS Communication</h3>
          <p className="mb-3">
            If you provide your phone number through our website forms, you consent to receive SMS messages from All Seasons Mobile Detailing LLC related to appointments, service updates, and customer support.
          </p>
          <p className="mb-3">
            Message frequency varies. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message.
          </p>
          <p>
            We do not share, sell, or distribute your mobile information with third parties for marketing purposes.
          </p>
        </div>

        <div className="w-full bg-white/5 border border-white/10 rounded-sm overflow-hidden mb-12">
            <iframe 
                src="https://api.leadconnectorhq.com/widget/bookings/brad-benton-personal-calendar-6xrqlzsmd" 
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }} 
                scrolling="no" 
                id="brad-benton-personal-calendar-6xrqlzsmd"
            />
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