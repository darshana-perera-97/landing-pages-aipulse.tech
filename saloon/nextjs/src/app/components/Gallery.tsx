import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Precision Cuts', 'Organic Color', 'Editorial Styling'];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY3NTg0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Editorial Styling',
      alt: 'Luxury salon styling'
    },
    {
      src: 'https://images.unsplash.com/photo-1712641966973-327ce5829913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMG1vZGVybnxlbnwxfHx8fDE3Njc2NjgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Precision Cuts',
      alt: 'Modern hair styling'
    },
    {
      src: 'https://images.unsplash.com/photo-1485290334039-a3c69043e517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3IlMjBibG9uZGV8ZW58MXx8fHwxNzY3NjY4MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Organic Color',
      alt: 'Blonde hair color'
    },
    {
      src: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyc3R5bGlzdCUyMGN1dHRpbmclMjBoYWlyfGVufDF8fHx8MTc2NzYyNzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Precision Cuts',
      alt: 'Hairstylist cutting hair'
    },
    {
      src: 'https://images.unsplash.com/photo-1605980625982-b128a7e7fde2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGhhaXIlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY3NjY4MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Editorial Styling',
      alt: 'Salon hair treatment'
    },
    {
      src: 'https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc2NjE4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Organic Color',
      alt: 'Salon interior'
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The Edit
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto mb-8">
            A collection of our latest transformations. From architectural cuts to sun-kissed palettes, 
            explore the vision of Lumière.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm tracking-wide transition-all ${
                  activeFilter === filter
                    ? 'bg-[#C5B358] text-white'
                    : 'bg-white text-[#1A1A1A] border border-gray-200 hover:border-[#C5B358]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="1.5rem">
            {filteredImages.map((image, index) => (
              <div key={index} className="overflow-hidden group cursor-pointer">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
