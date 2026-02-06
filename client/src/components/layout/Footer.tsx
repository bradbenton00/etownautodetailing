export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif text-white mb-6">E-Town<span className="text-white/50">.</span></h3>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Premium mobile auto detailing serving Elizabethtown and surrounding areas. 
              We bring the highest standard of car care directly to you.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-3 text-white/50">
              <li>(555) 123-4567</li>
              <li>hello@etown-detail.com</li>
              <li>Elizabethtown, PA</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Hours</h4>
            <ul className="space-y-3 text-white/50">
              <li>Mon - Fri: 8am - 6pm</li>
              <li>Sat: 9am - 4pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} E-Town Auto Detailing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}