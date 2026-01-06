import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
            LUMIÈRE
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm tracking-wide hover:text-[#C5B358] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm tracking-wide hover:text-[#C5B358] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm tracking-wide hover:text-[#C5B358] transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wide hover:text-[#C5B358] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2.5 bg-[#C5B358] text-white text-sm tracking-wide hover:bg-[#B4A347] transition-colors"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-left text-sm tracking-wide hover:text-[#C5B358] transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left text-sm tracking-wide hover:text-[#C5B358] transition-colors py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-left text-sm tracking-wide hover:text-[#C5B358] transition-colors py-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm tracking-wide hover:text-[#C5B358] transition-colors py-2"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-2 px-6 py-2.5 bg-[#C5B358] text-white text-sm tracking-wide hover:bg-[#B4A347] transition-colors"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
