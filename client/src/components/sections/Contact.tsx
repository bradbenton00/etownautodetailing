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

        <div className="w-full bg-white/5 border border-white/10 rounded-sm overflow-hidden mb-12">
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/JtTcJylfgO6bX6ZOkq95?notrack=true"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '3px',
                    minHeight: '600px'
                }}
                id="inline-JtTcJylfgO6bX6ZOkq95" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FB Quote Form – Detailing"
                data-height="913"
                data-layout-iframe-id="inline-JtTcJylfgO6bX6ZOkq95"
                data-form-id="JtTcJylfgO6bX6ZOkq95"
                title="FB Quote Form – Detailing"
            >
            </iframe>
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