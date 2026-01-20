import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end pb-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Travel Destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
        <div 
          className="max-w-xl backdrop-blur-md bg-white/80 p-12 rounded-sm border border-white/40 shadow-2xl"
        >
          <h1 
            className="font-['Playfair_Display'] text-6xl mb-8 tracking-tight"
            style={{ color: '#1A1A1A' }}
          >
            Travel, Refined.
          </h1>

          {/* Search Bar */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 font-['Inter'] text-sm tracking-wide placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37]"
                  style={{ color: '#1A1A1A' }}
                />
              </div>
              <div className="flex-1 relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Date"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 font-['Inter'] text-sm tracking-wide placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37]"
                  style={{ color: '#1A1A1A' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
