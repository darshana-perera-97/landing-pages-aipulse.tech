import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Asymmetrical Bento Box Grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[700px]">
          {/* Large Image - Left */}
          <div className="col-span-12 md:col-span-7 row-span-2 overflow-hidden rounded">
            <img 
              src={images[0]} 
              alt="Luxury Architecture"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Top Right - Medium */}
          <div className="col-span-12 md:col-span-5 row-span-1 overflow-hidden rounded">
            <img 
              src={images[1]} 
              alt="Luxury Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom Right - Split into 2 */}
          <div className="col-span-6 md:col-span-3 row-span-1 overflow-hidden rounded">
            <img 
              src={images[2]} 
              alt="Luxury Details"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="col-span-6 md:col-span-2 row-span-1 overflow-hidden rounded">
            <img 
              src={images[3]} 
              alt="Luxury Bedroom"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
