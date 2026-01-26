import { useState } from 'react';

export function Portfolio() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Skyline Residences',
      category: 'Residential',
      location: 'New York, USA',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkzMDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Minimal Living Space',
      category: 'Interior',
      location: 'Los Angeles, USA',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MzQzMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Urban Complex',
      category: 'Commercial',
      location: 'Chicago, USA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjkzODA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Luxury Villa',
      category: 'Residential',
      location: 'Miami, USA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjkzODEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Blueprint Studios',
      category: 'Commercial',
      location: 'San Francisco, USA',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGVzaWdufGVufDF8fHx8MTc2OTMwOTM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Modern Sanctuary',
      category: 'Residential',
      location: 'Seattle, USA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1656081635010-2e2636b61c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwZGV0YWlsc3xlbnwxfHx8fDE3Njk0MDI5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Interior'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <div className="pt-20 bg-gradient-to-b from-white via-[#F0F8FF] to-white min-h-screen">
      {/* Header */}
      <section className="py-32 max-w-[1440px] mx-auto px-20">
        <h1 className="text-5xl md:text-7xl tracking-[0.15em] font-light mb-8">
          PORTFOLIO
        </h1>
        <div className="w-20 h-px bg-[#87CEEB] mb-12" />
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          A curated collection of our architectural works, each project
          reflecting our commitment to timeless design and functional beauty.
        </p>
      </section>

      {/* Filter */}
      <section className="max-w-[1440px] mx-auto px-20 mb-16">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 text-sm tracking-[0.15em] transition-all ${
                filter === category
                  ? 'bg-[#87CEEB] text-white'
                  : 'bg-white/60 text-gray-600 hover:bg-[#87CEEB]/10 backdrop-blur-sm border border-[#87CEEB]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-[1440px] mx-auto px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay with Info - Shows on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-[0.15em] mb-2 text-[#87CEEB]">
                    {project.category}
                  </p>
                  <h3 className="text-2xl tracking-[0.1em] mb-4">{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs tracking-[0.15em] text-gray-300">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Subtle Border Effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
