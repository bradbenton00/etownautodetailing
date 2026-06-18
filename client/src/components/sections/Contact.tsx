export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Book Your Appointment</h2>
          <p className="text-white/50">Veteran-Owned • Weekend Appointments Only</p>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-16 mb-12 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl md:text-4xl font-serif text-white mb-6">Ready to schedule your detail?</h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
            Give us a call or send a text to check availability and book your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mb-8">
            <a href="tel:2703196059" className="w-full">
              <button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-14 uppercase tracking-widest text-sm font-medium transition-colors">
                Call (270) 319-6059
              </button>
            </a>
            <a href="sms:2703196059" className="w-full">
              <button className="w-full border border-white/20 bg-transparent text-white hover:bg-white hover:text-black rounded-none h-14 uppercase tracking-widest text-sm font-medium transition-colors">
                Text Us
              </button>
            </a>
          </div>
          <div className="text-center text-white/40 text-xs px-4 max-w-md">
            By calling or texting, you agree to receive SMS messages from All Season Mobile Detailing. Message and data rates may apply. Reply STOP to opt out.
          </div>
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