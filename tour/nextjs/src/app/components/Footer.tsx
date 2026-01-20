import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#F9F9F9] border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div 
              className="font-['Playfair_Display'] text-xl mb-6 tracking-wide"
              style={{ color: '#1A1A1A' }}
            >
              Horizon Atelier
            </div>
            <p className="font-['Inter'] text-sm tracking-wide text-gray-500 opacity-70">
              Crafting extraordinary travel experiences for the discerning explorer.
            </p>
          </div>

          {/* Column 2 - Destinations */}
          <div>
            <h4 
              className="font-['Inter'] text-xs tracking-[0.2em] mb-6 opacity-50"
              style={{ color: '#1A1A1A' }}
            >
              DESTINATIONS
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Europe
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Asia Pacific
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Americas
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Africa
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 
              className="font-['Inter'] text-xs tracking-[0.2em] mb-6 opacity-50"
              style={{ color: '#1A1A1A' }}
            >
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Journal
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h4 
              className="font-['Inter'] text-xs tracking-[0.2em] mb-6 opacity-50"
              style={{ color: '#1A1A1A' }}
            >
              FOLLOW
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Inter'] text-sm text-gray-500 opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="font-['Inter'] text-xs text-gray-500 opacity-50 text-center tracking-wide">
            © 2026 Horizon Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
