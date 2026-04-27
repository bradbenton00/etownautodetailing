import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="block mb-6 group">
              <span className="block font-serif text-3xl md:text-4xl font-bold text-white tracking-wide leading-none group-hover:text-white/90 transition-colors">
                All Seasons
              </span>
              <span className="block font-sans text-xs md:text-sm font-bold text-white/50 tracking-[0.25em] uppercase leading-relaxed ml-0.5 mt-2 group-hover:text-white/70 transition-colors">
                Mobile Detailing LLC
              </span>
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed mb-6">
              Veteran-owned and operated mobile auto detailing serving Elizabethtown, KY. 
              We bring showroom-quality cleaning directly to you.
            </p>
            <div className="mb-6">
               <Link href="/faq" className="text-white/50 hover:text-white text-sm uppercase tracking-widest border-b border-white/10 pb-1">
                 View Frequently Asked Questions
               </Link>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed italic">
              "When your car looks and smells great, you feel great."
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-3 text-white/50">
              <li><a href="tel:2702576093" className="hover:text-white transition-colors">(270) 257-6093</a></li>
              <li><a href="mailto:bradbenton@etownautodetailing.com" className="hover:text-white transition-colors">bradbenton@etownautodetailing.com</a></li>
              <li>140 Brentwood Drive</li>
              <li>Elizabethtown, KY 42701</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Service Areas</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>Elizabethtown</li>
              <li>Radcliff • Vine Grove</li>
              <li>Rineyville • Glendale</li>
              <li>Hodgenville</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Availability</h4>
            <ul className="space-y-3 text-white/50">
              <li className="text-white/80 font-medium">Flexible Scheduling</li>
              <li>Limited slots available</li>
              <li>By Appointment Only</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} All Seasons Mobile Detailing LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}