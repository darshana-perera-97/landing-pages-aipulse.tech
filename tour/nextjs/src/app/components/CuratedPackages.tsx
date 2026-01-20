import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface PackageCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  rating: number;
}

function PackageCard({ image, category, title, price, rating }: PackageCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Label */}
        <div 
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 font-['Inter'] text-xs tracking-[0.2em]"
          style={{ color: '#1A1A1A' }}
        >
          {category}
        </div>

        {/* Rating */}
        <div className="absolute top-6 right-6 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-2">
          <Star className="w-3 h-3 fill-[#D4AF37]" style={{ color: '#D4AF37' }} />
          <span className="font-['Inter'] text-xs" style={{ color: '#1A1A1A' }}>
            {rating}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="space-y-4">
        <div>
          <h3 
            className="font-['Playfair_Display'] text-2xl mb-2"
            style={{ color: '#1A1A1A' }}
          >
            {title}
          </h3>
          <p className="font-['Inter'] text-sm tracking-wide text-gray-500">
            {price}
          </p>
        </div>

        <a 
          href="#" 
          className="inline-flex items-center gap-2 font-['Inter'] text-sm tracking-wider group-hover:text-[#D4AF37] transition-colors"
          style={{ color: '#1A1A1A' }}
        >
          Explore
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

interface CuratedPackagesProps {
  packages: PackageCardProps[];
}

export function CuratedPackages({ packages }: CuratedPackagesProps) {
  return (
    <section className="py-32 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 
            className="font-['Playfair_Display'] text-5xl mb-6 tracking-tight"
            style={{ color: '#1A1A1A' }}
          >
            The Collection
          </h2>
          <p className="font-['Inter'] text-sm tracking-wide text-gray-500 max-w-2xl mx-auto">
            Curated experiences for the discerning traveler
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
