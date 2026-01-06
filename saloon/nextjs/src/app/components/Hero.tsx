import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc2NjE4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Minimalist salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center text-white">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          The Art of the Individual
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed">
          A sanctuary of minimalist beauty where precision meets personal style. 
          Experience curated hair and skin rituals designed for the modern soul.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-[#C5B358] text-white tracking-wide hover:bg-[#B4A347] transition-colors min-w-[200px]"
          >
            Book an Appointment
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white tracking-wide hover:bg-white hover:text-[#1A1A1A] transition-colors min-w-[200px]"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
