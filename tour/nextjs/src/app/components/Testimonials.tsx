import React from 'react';

export function Testimonials() {
  return (
    <section className="py-32 bg-[#F9F9F9]">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        {/* Large Quotation Marks */}
        <div 
          className="font-['Playfair_Display'] text-8xl mb-8 opacity-20"
          style={{ color: '#1A1A1A' }}
        >
          "
        </div>

        {/* Testimonial Text */}
        <blockquote 
          className="font-['Playfair_Display'] text-3xl leading-relaxed mb-12 tracking-tight"
          style={{ color: '#1A1A1A' }}
        >
          An experience beyond compare. Every detail was meticulously crafted, transforming our journey into something truly extraordinary.
        </blockquote>

        {/* Traveler Name */}
        <p className="font-['Inter'] text-sm tracking-[0.2em] text-gray-500">
          ELENA MARTINEZ, BARCELONA
        </p>
      </div>
    </section>
  );
}
