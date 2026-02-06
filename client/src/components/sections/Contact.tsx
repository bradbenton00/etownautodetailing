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

        <div className="w-full bg-white/5 border border-white/10 rounded-sm overflow-hidden">
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/BKlp9EKi6oTIj24mkLr7"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '3px',
                    minHeight: '600px'
                }}
                id="inline-BKlp9EKi6oTIj24mkLr7" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FB Quote Form – Detailing"
                data-height="913"
                data-layout-iframe-id="inline-BKlp9EKi6oTIj24mkLr7"
                data-form-id="BKlp9EKi6oTIj24mkLr7"
                title="FB Quote Form – Detailing"
            >
            </iframe>
        </div>
      </div>
    </section>
  );
}