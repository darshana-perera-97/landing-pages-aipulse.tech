import { Link } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Star, MapPin, Calendar, Users } from 'lucide-react';

export function HomePage() {
  const destinations = [
    {
      id: 1,
      name: "Maldives",
      location: "Indian Ocean",
      price: "$1,299",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Switzerland Alps",
      location: "Europe",
      price: "$2,499",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Paris",
      location: "France",
      price: "$1,899",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHl8ZW58MXx8fHwxNzY4ODA0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Kyoto",
      location: "Japan",
      price: "$1,699",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1655316281160-e3a9e78472e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZXxlbnwxfHx8fDE3Njg4ODMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const packages = [
    {
      id: 1,
      title: "Beach Paradise",
      days: 7,
      price: "$999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Mountain Retreat",
      days: 5,
      price: "$1,299",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Cultural Discovery",
      days: 10,
      price: "$1,799",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1655316281160-e3a9e78472e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZXxlbnwxfHx8fDE3Njg4ODMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[600px] bg-[linear-gradient(158deg,_rgba(19,145,167,0.8)_0%,_rgba(43,164,149,0.8)_100%)]">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY4ODM2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080)' }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-8">
            <h1 className="font-['Ubuntu:Bold',sans-serif] text-[64px] text-white mb-6 leading-tight">
              Dream | Explore | Discover
            </h1>
            <p className="font-['Ubuntu:Regular',sans-serif] text-[24px] text-white mb-8">
              Get the best prices on adventure and activities across the World
            </p>
            <Link 
              to="/packages"
              className="inline-block px-12 py-4 bg-[#0D3E55] text-white rounded-full font-['Ubuntu:Medium',sans-serif] text-[18px] hover:bg-[#0D3E55]/80 transition-colors"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      {/* Top Destinations */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Ubuntu:Bold',sans-serif] text-[42px] text-[#0D3E55] mb-4">
              Top Destinations
            </h2>
            <p className="font-['Ubuntu:Regular',sans-serif] text-[18px] text-[#696969]">
              Discover amazing places around the world
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {destinations.map((dest) => (
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

      {/* Our Process */}
      <div className="py-20 px-8 bg-[#f5f5f5]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Ubuntu:Bold',sans-serif] text-[42px] text-[#0D3E55] mb-4">
              Our Process
            </h2>
            <p className="font-['Ubuntu:Regular',sans-serif] text-[18px] text-[#696969]">
              Let us help you to create our best tour destination
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-['Ubuntu:Bold',sans-serif] text-[24px]">1</span>
              </div>
              <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-4">
                Choose Destination
              </h3>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969] leading-relaxed">
                Select from our wide range of exotic destinations and travel experiences
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-['Ubuntu:Bold',sans-serif] text-[24px]">2</span>
              </div>
              <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-4">
                Choose Experience
              </h3>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969] leading-relaxed">
                Find the best option that match with your unique travelling needs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-['Ubuntu:Bold',sans-serif] text-[24px]">3</span>
              </div>
              <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-4">
                Choose Vehicle
              </h3>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969] leading-relaxed">
                Get the best price for your traveling with the best vehicles we can offer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Packages */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Ubuntu:Bold',sans-serif] text-[42px] text-[#0D3E55] mb-4">
              Our Packages
            </h2>
            <p className="font-['Ubuntu:Regular',sans-serif] text-[18px] text-[#696969]">
              We offer you great tour with cheaper prices than what they're offering for
            </p>
          </div>

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
                    {pkg.days} Days
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-4">
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
                  <button className="w-full py-3 bg-[#0D3E55] text-white rounded-full font-['Ubuntu:Medium',sans-serif] text-[16px] hover:bg-[#0D3E55]/80 transition-colors">
                    Book Now
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/packages"
              className="inline-block px-12 py-4 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] text-white rounded-full font-['Ubuntu:Medium',sans-serif] text-[18px] hover:opacity-90 transition-opacity"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
