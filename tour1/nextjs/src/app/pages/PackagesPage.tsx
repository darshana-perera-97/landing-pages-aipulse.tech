import { Link } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Star, Clock, Check, Users } from 'lucide-react';

export function PackagesPage() {
  const packages = [
    {
      id: 1,
      title: "Beach Paradise",
      days: 7,
      nights: 6,
      price: "$999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["Accommodation", "Meals", "Water Sports", "Airport Transfer"]
    },
    {
      id: 2,
      title: "Mountain Retreat",
      days: 5,
      nights: 4,
      price: "$1,299",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["Mountain Lodge", "Breakfast", "Guided Hikes", "Equipment"]
    },
    {
      id: 3,
      title: "Cultural Discovery",
      days: 10,
      nights: 9,
      price: "$1,799",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1655316281160-e3a9e78472e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZXxlbnwxfHx8fDE3Njg4ODMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["Hotels", "All Meals", "Tour Guide", "Temple Visits"]
    },
    {
      id: 4,
      title: "Luxury Escape",
      days: 6,
      nights: 5,
      price: "$2,499",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3Njg4MjU0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["5-Star Hotel", "All-Inclusive", "Spa", "Private Tours"]
    },
    {
      id: 5,
      title: "Adventure Tour",
      days: 8,
      nights: 7,
      price: "$1,599",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY4ODM2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["Camping", "Meals", "Adventure Activities", "Insurance"]
    },
    {
      id: 6,
      title: "City Explorer",
      days: 4,
      nights: 3,
      price: "$899",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHl8ZW58MXx8fHwxNzY4ODA0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      includes: ["Hotel", "Breakfast", "City Tours", "Museum Tickets"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] py-20">
        <div className="w-full max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="font-['Ubuntu:Bold',sans-serif] text-[56px] text-white mb-4">
            Our Packages
          </h1>
          <p className="font-['Ubuntu:Regular',sans-serif] text-[24px] text-white/90">
            Choose from our curated travel experiences
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link 
                key={pkg.id}
                to={`/packages/${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFC107] text-[#0D3E55] px-4 py-2 rounded-full font-['Ubuntu:Bold',sans-serif] text-[14px]">
                    {pkg.days}D / {pkg.nights}N
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-3">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={16} fill="#FFC107" color="#FFC107" />
                      <span className="font-['Ubuntu:Medium',sans-serif] text-[14px] text-[#0D3E55]">
                        {pkg.rating}
                      </span>
                    </div>
                    <span className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55]">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {pkg.includes.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-[#696969]">
                        <Check size={14} className="text-[#13a78b]" />
                        <span className="font-['Ubuntu:Regular',sans-serif] text-[14px]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-[#0D3E55] text-white rounded-full font-['Ubuntu:Medium',sans-serif] text-[16px] hover:bg-[#0D3E55]/80 transition-colors">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
