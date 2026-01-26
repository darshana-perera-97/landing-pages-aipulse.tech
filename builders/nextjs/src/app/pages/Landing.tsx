import { ArrowRight, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Landing() {
  const projects = [
    {
      title: 'Skyline Residences',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkzMDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Minimal Living',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MzQzMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Urban Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjkzODA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Luxury Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjkzODEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[#F0F8FF] to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkzMDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-20 text-center">
          <h1 className="text-6xl md:text-8xl tracking-[0.15em] font-light mb-8">
            LESS IS MORE
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Timeless architectural design for the modern world
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#87CEEB] text-white text-sm tracking-[0.15em] hover:bg-[#87CEEB]/90 transition-all"
          >
            VIEW PROJECTS
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <Circle size={8} className="text-[#87CEEB]" />
        </div>
      </section>

      {/* Selected Works - Bento Grid */}
      <section className="py-32 max-w-[1440px] mx-auto px-20">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl tracking-[0.15em] font-light mb-4">
            SELECTED WORKS
          </h2>
          <div className="w-20 h-px bg-[#87CEEB]" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Large Featured */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs tracking-[0.15em] mb-2 text-[#87CEEB]">{projects[0].category}</p>
                <h3 className="text-2xl tracking-[0.1em]">{projects[0].title}</h3>
              </div>
            </div>
          </div>

          {/* Medium Cards */}
          <div className="md:col-span-4 group relative overflow-hidden aspect-square">
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs tracking-[0.15em] mb-2 text-[#87CEEB]">{projects[1].category}</p>
                <h3 className="text-xl tracking-[0.1em]">{projects[1].title}</h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden aspect-square">
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs tracking-[0.15em] mb-2 text-[#87CEEB]">{projects[2].category}</p>
                <h3 className="text-xl tracking-[0.1em]">{projects[2].title}</h3>
              </div>
            </div>
          </div>

          {/* Wide Card */}
          <div className="md:col-span-8 group relative overflow-hidden aspect-[2/1]">
            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs tracking-[0.15em] mb-2 text-[#87CEEB]">{projects[3].category}</p>
                <h3 className="text-2xl tracking-[0.1em]">{projects[3].title}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] text-gray-600 hover:text-[#87CEEB] transition-colors"
          >
            VIEW ALL PROJECTS
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F0F8FF]">
        <div className="max-w-[1440px] mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl tracking-[0.15em] font-light mb-8">
                OUR PHILOSOPHY
              </h2>
              <div className="w-20 h-px bg-[#87CEEB] mb-8" />
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe in the power of simplicity. Every line, every space, every material
                is carefully considered to create harmonious environments that stand the test of time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our approach combines timeless principles with contemporary innovation,
                resulting in spaces that are both functional and beautiful.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#87CEEB] text-[#87CEEB] text-sm tracking-[0.15em] hover:bg-[#87CEEB] hover:text-white transition-all"
              >
                LEARN MORE
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Glassmorphism Card */}
            <div className="relative">
              <div className="backdrop-blur-lg bg-white/60 border border-[#87CEEB]/20 p-12 shadow-2xl">
                <div className="space-y-8">
                  <div>
                    <div className="w-12 h-12 bg-[#87CEEB]/10 flex items-center justify-center mb-4">
                      <span className="text-2xl text-[#87CEEB]">01</span>
                    </div>
                    <h3 className="text-xl tracking-[0.1em] mb-2">Timeless Design</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Creating spaces that transcend trends and remain relevant for generations
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-[#87CEEB]/10 flex items-center justify-center mb-4">
                      <span className="text-2xl text-[#87CEEB]">02</span>
                    </div>
                    <h3 className="text-xl tracking-[0.1em] mb-2">Sustainable Approach</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Mindful selection of materials and construction methods for minimal environmental impact
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-[#87CEEB]/10 flex items-center justify-center mb-4">
                      <span className="text-2xl text-[#87CEEB]">03</span>
                    </div>
                    <h3 className="text-xl tracking-[0.1em] mb-2">Client Collaboration</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Working closely with you to understand your vision and bring it to life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-20 text-center">
          <h2 className="text-4xl md:text-5xl tracking-[0.15em] font-light mb-8">
            START YOUR PROJECT
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's create something extraordinary together. Get in touch to discuss your vision.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#87CEEB] text-white text-sm tracking-[0.15em] hover:bg-[#87CEEB]/90 transition-all"
          >
            GET IN TOUCH
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
