import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div 
              className="text-3xl mb-4 tracking-wider"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              LUMIÈRE
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A sanctuary of minimalist beauty where precision meets personal style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#C5B358] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#C5B358] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#C5B358] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#C5B358] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5B358]" />
                <a href="tel:+15550123456" className="text-gray-400 hover:text-[#C5B358] transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5B358]" />
                <a href="mailto:hello@lumieresalon.com" className="text-gray-400 hover:text-[#C5B358] transition-colors">
                  hello@lumieresalon.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#C5B358]" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C5B358] transition-colors">
                  @lumieresalon
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Lumière Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5B358] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5B358] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
