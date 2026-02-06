import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location === "/") {
      // If on home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other page, navigate to home with hash
      setLocation("/");
      // We need a small delay to allow navigation to happen before scrolling
      // or we can rely on the browser handling /#section if we used standard links
      // But since we use wouter setLocation, we might need to handle scrolling after mount
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.hash = href;
        }
      }, 100);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-serif tracking-widest font-semibold text-white uppercase z-50 max-w-[70%] leading-tight">
          All Seasons Mobile Detailing LLC<span className="text-white/50">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="rounded-none border-white/20 text-white hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest px-6"
            asChild
          >
            <Link href="/book-an-appointment">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-serif text-white/80 hover:text-white cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Link 
              href="/book-an-appointment"
              className="text-2xl font-serif text-white mt-4"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}