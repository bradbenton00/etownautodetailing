export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif text-white mb-6">E-Town<span className="text-white/50">.</span></h3>
            <p className="text-white/50 max-w-sm leading-relaxed mb-6">
              Veteran-owned and operated mobile auto detailing serving Elizabethtown, KY. 
              We bring showroom-quality cleaning directly to you.
            </p>
            <p className="text-white/50 max-w-sm leading-relaxed italic">
              "When your car looks and smells great, you feel great."
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-3 text-white/50">
              <li><a href="tel:2703196059" className="hover:text-white transition-colors">(270) 319-6059</a></li>
              <li>140 Brentwood Drive</li>
              <li>Elizabethtown, KY 42701</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Availability</h4>
            <ul className="space-y-3 text-white/50">
              <li className="text-white/80 font-medium">Weekend Appointments Only</li>
              <li>Limited slots available</li>
              <li>Sat & Sun: By Appointment</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} E-Town Auto Detailing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}