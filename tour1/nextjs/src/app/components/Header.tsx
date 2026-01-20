import { Link, useLocation } from 'react-router-dom';
import svgPaths from "@/imports/svg-fun1ffvvty";
import { Phone, Mail, Search, ShoppingCart, User } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative w-full">
      {/* Top Bar */}
      <div className="bg-[#efefff] h-[79px] flex items-center justify-center">
        <div className="flex items-center gap-[84px]">
          <div className="flex items-center gap-[7px]">
            <div className="relative shrink-0 size-[35px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <path d={svgPaths.p245a580} fill="#0D3E55" />
              </svg>
            </div>
            <p className="font-['Ubuntu:Medium',sans-serif] leading-[normal] not-italic text-[#696969] text-[18px]">
              <span className="leading-[normal]">Call on </span>
              <span className="leading-[normal]">+9573993000484030</span>
            </p>
          </div>

          <div className="flex items-center gap-[7px]">
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[15.63%_7.29%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 16.5">
                  <path d={svgPaths.p14ebd000} fill="#0D3E55" />
                  <path d={svgPaths.p3de54c90} stroke="#0D3E55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
            <p className="font-['Ubuntu:Medium',sans-serif] leading-[normal] not-italic text-[#696969] text-[18px]">
              info@tourism.com
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] h-[120px] flex items-center justify-center px-8">
        <div className="w-full max-w-[1280px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative size-[90px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 89.562">
                <path d={svgPaths.pa751b00} fill="white" />
                <path d={svgPaths.p30a261c0} fill="white" />
                <path d={svgPaths.p21a13f0} fill="white" />
                <path d={svgPaths.p13f2ed00} fill="white" />
              </svg>
            </div>
            <div className="text-white">
              <p className="font-['Ubuntu:Bold',sans-serif] text-[32px] leading-[normal]">TOUR</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-['Ubuntu:Medium',sans-serif] text-[18px] ${isActive('/') ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className={`font-['Ubuntu:Medium',sans-serif] text-[18px] ${isActive('/destinations') ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'} transition-colors`}
            >
              Destinations
            </Link>
            <Link 
              to="/packages" 
              className={`font-['Ubuntu:Medium',sans-serif] text-[18px] ${isActive('/packages') ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'} transition-colors`}
            >
              Packages
            </Link>
            <Link 
              to="/about" 
              className={`font-['Ubuntu:Medium',sans-serif] text-[18px] ${isActive('/about') ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'} transition-colors`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-['Ubuntu:Medium',sans-serif] text-[18px] ${isActive('/contact') ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'} transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:opacity-80 transition-opacity">
              <Search size={24} />
            </button>
            <button className="text-white hover:opacity-80 transition-opacity">
              <User size={24} />
            </button>
            <button className="text-white hover:opacity-80 transition-opacity">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] py-8">
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-8">
          <div className="flex flex-col items-center gap-[7px]">
            <div className="relative shrink-0 size-[35px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <path d={svgPaths.p245a580} fill="white" />
              </svg>
            </div>
            <p className="font-['Ubuntu:Medium',sans-serif] leading-[normal] not-italic text-[18px] text-white">
              Here for you
            </p>
          </div>

          <div className="flex flex-col items-center gap-[7px]">
            <div className="relative shrink-0 size-[35px]">
              <div className="absolute inset-[11.02%_10.94%_10.94%_10.93%]">
                <div className="absolute inset-[-5.49%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.3456 30.3159">
                    <path d={svgPaths.p1563d000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.p37b71ce4} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Ubuntu:Medium',sans-serif] leading-[normal] not-italic text-[18px] text-white">
              Best Price Guarantee
            </p>
          </div>

          <div className="flex flex-col items-center gap-[7px]">
            <div className="relative shrink-0 size-[35px]">
              <div className="absolute inset-[12.5%_12.49%_12.49%_12.49%]">
                <div className="absolute inset-[-5.71%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.2542 29.2534">
                    <path d={svgPaths.p39fc6800} stroke="white" strokeWidth="3" />
                    <path d={svgPaths.p39762b80} stroke="white" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.p2b448500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Ubuntu:Medium',sans-serif] leading-[normal] not-italic text-[18px] text-white">
              Exclusive offers
            </p>
          </div>

          <div className="flex flex-col items-center gap-[7px]">
            <div className="relative shrink-0 size-[35px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                <path d={svgPaths.p178bb3f0} fill="white" />
              </svg>
            </div>
            <p className="font-['Ubuntu:Medium',sans-serif] leading-[normal] not-italic text-[18px] text-white">
              New Finds Every Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
