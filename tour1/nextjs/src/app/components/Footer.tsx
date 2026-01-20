import { Link } from 'react-router-dom';
import svgPaths from "@/imports/svg-fun1ffvvty";
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] py-16">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative size-[60px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 89.562">
                  <path d={svgPaths.pa751b00} fill="white" />
                  <path d={svgPaths.p30a261c0} fill="white" />
                  <path d={svgPaths.p21a13f0} fill="white" />
                  <path d={svgPaths.p13f2ed00} fill="white" />
                </svg>
              </div>
              <p className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-white">TOUR</p>
            </div>
            <p className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] leading-relaxed mb-6">
              Plan for your next weekend and create a tour with Travys to any places you want at cheapest price
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Ubuntu:Bold',sans-serif] text-[18px] text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h3 className="font-['Ubuntu:Bold',sans-serif] text-[18px] text-white mb-6">Tour Packages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Beach Getaways
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Mountain Adventures
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  City Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Cultural Experiences
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
                  Luxury Escapes
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-['Ubuntu:Bold',sans-serif] text-[18px] text-white mb-6">Subscribe to Newsletter</h3>
            <p className="text-white/80 font-['Ubuntu:Regular',sans-serif] text-[14px] mb-4">
              Get updates on exclusive deals and travel tips
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white/50"
              />
              <button className="px-6 py-2 bg-[#0D3E55] text-white rounded font-['Ubuntu:Medium',sans-serif] hover:bg-[#0D3E55]/80 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex items-center justify-between">
          <p className="text-white/60 font-['Ubuntu:Regular',sans-serif] text-[14px]">
            © 2026 TOUR. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 font-['Ubuntu:Regular',sans-serif] text-[14px] hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
