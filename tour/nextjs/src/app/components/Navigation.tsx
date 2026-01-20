import React from 'react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="font-['Playfair_Display'] text-xl tracking-wide" style={{ color: '#1A1A1A' }}>
          Horizon Atelier
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a 
            href="#destinations" 
            className="font-['Inter'] text-sm tracking-wider transition-colors hover:text-[#D4AF37]"
            style={{ color: '#1A1A1A' }}
          >
            Destinations
          </a>
          <a 
            href="#journal" 
            className="font-['Inter'] text-sm tracking-wider transition-colors hover:text-[#D4AF37]"
            style={{ color: '#1A1A1A' }}
          >
            Journal
          </a>
          <a 
            href="#about" 
            className="font-['Inter'] text-sm tracking-wider transition-colors hover:text-[#D4AF37]"
            style={{ color: '#1A1A1A' }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="font-['Inter'] text-sm tracking-wider transition-colors hover:text-[#D4AF37]"
            style={{ color: '#1A1A1A' }}
          >
            Contact
          </a>
        </div>

        {/* Book Now Button */}
        <button 
          className="font-['Inter'] text-sm tracking-wider px-6 py-2.5 border transition-all hover:bg-[#1A1A1A] hover:text-white"
          style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
