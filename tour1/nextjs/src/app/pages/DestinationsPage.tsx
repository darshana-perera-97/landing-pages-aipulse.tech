import { Link } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Star, MapPin, Calendar, Users, Filter } from 'lucide-react';
import { useState } from 'react';

export function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const destinations = [
    {
      id: 1,
      name: "Maldives",
      location: "Indian Ocean",
      category: "Beach",
      price: "$1,299",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Switzerland Alps",
      location: "Europe",
      category: "Mountain",
      price: "$2,499",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Paris",
      location: "France",
      category: "City",
      price: "$1,899",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHl8ZW58MXx8fHwxNzY4ODA0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Kyoto",
      location: "Japan",
      category: "Cultural",
      price: "$1,699",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1655316281160-e3a9e78472e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZXxlbnwxfHx8fDE3Njg4ODMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      name: "Bali",
      location: "Indonesia",
      category: "Beach",
      price: "$999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      name: "New Zealand",
      location: "Oceania",
      category: "Mountain",
      price: "$2,299",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = ['All', 'Beach', 'Mountain', 'City', 'Cultural'];

  const filteredDestinations = selectedCategory === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] py-20">
        <div className="w-full max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="font-['Ubuntu:Bold',sans-serif] text-[56px] text-white mb-4">
            Explore Destinations
          </h1>
          <p className="font-['Ubuntu:Regular',sans-serif] text-[24px] text-white/90">
            Discover amazing places around the world
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="py-8 px-8 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4">
            <Filter size={20} className="text-[#0D3E55]" />
            <div className="flex items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-['Ubuntu:Medium',sans-serif] text-[16px] transition-colors ${
                    selectedCategory === category
                      ? 'bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] text-white'
                      : 'bg-gray-100 text-[#696969] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <Link 
                key={dest.id}
                to={`/destinations/${dest.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#0D3E55] text-white px-3 py-1 rounded-full font-['Ubuntu:Medium',sans-serif] text-[14px]">
                    {dest.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-['Ubuntu:Medium',sans-serif] text-[14px]">
                    {dest.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-2">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#696969] mb-3">
                    <MapPin size={16} />
                    <span className="font-['Ubuntu:Regular',sans-serif] text-[14px]">{dest.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} fill="#FFC107" color="#FFC107" />
                    <span className="font-['Ubuntu:Medium',sans-serif] text-[14px] text-[#0D3E55]">
                      {dest.rating}
                    </span>
                  </div>
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
