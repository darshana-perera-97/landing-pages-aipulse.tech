import { Link, useParams } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Star, MapPin, Calendar, Users, Clock, Check } from 'lucide-react';

export function DestinationDetailPage() {
  const { id } = useParams();

  const destination = {
    id,
    name: "Maldives",
    location: "Indian Ocean",
    rating: 4.9,
    reviews: 234,
    description: "Experience paradise on Earth with crystal-clear turquoise waters, white sandy beaches, and luxurious overwater bungalows. The Maldives offers world-class diving, snorkeling, and unforgettable sunsets.",
    image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: [
      "Pristine white sandy beaches",
      "World-class diving spots",
      "Luxury overwater villas",
      "Vibrant coral reefs",
      "Exclusive island resorts"
    ],
    packages: [
      {
        id: 1,
        title: "7-Day Beach Escape",
        price: "$1,299",
        duration: "7 days / 6 nights",
        includes: ["Accommodation", "Meals", "Water Sports", "Airport Transfer"]
      },
      {
        id: 2,
        title: "Luxury Honeymoon Package",
        price: "$2,499",
        duration: "5 days / 4 nights",
        includes: ["Overwater Villa", "All-Inclusive Meals", "Spa Treatment", "Private Dinner"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[500px]">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="w-full max-w-[1280px] mx-auto px-8 pb-12">
            <h1 className="font-['Ubuntu:Bold',sans-serif] text-[56px] text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white">
                <MapPin size={20} />
                <span className="font-['Ubuntu:Medium',sans-serif] text-[18px]">
                  {destination.location}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Star size={20} fill="#FFC107" color="#FFC107" />
                <span className="font-['Ubuntu:Medium',sans-serif] text-[18px]">
                  {destination.rating} ({destination.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="col-span-2">
              <div className="mb-12">
                <h2 className="font-['Ubuntu:Bold',sans-serif] text-[32px] text-[#0D3E55] mb-6">
                  About This Destination
                </h2>
                <p className="font-['Ubuntu:Regular',sans-serif] text-[18px] text-[#696969] leading-relaxed mb-6">
                  {destination.description}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="font-['Ubuntu:Bold',sans-serif] text-[28px] text-[#0D3E55] mb-6">
                  Highlights
                </h3>
                <ul className="space-y-4">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center">
                        <Check size={14} color="white" />
                      </div>
                      <span className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-['Ubuntu:Bold',sans-serif] text-[28px] text-[#0D3E55] mb-6">
                  Available Packages
                </h3>
                <div className="space-y-6">
                  {destination.packages.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-2">
                            {pkg.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[#696969] mb-4">
                            <Clock size={16} />
                            <span className="font-['Ubuntu:Regular',sans-serif] text-[14px]">
                              {pkg.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-['Ubuntu:Regular',sans-serif] text-[14px] text-[#696969] mb-1">
                            Starting from
                          </p>
                          <p className="font-['Ubuntu:Bold',sans-serif] text-[32px] text-[#0D3E55]">
                            {pkg.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {pkg.includes.map((item, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-[#f5f5f5] rounded-full font-['Ubuntu:Regular',sans-serif] text-[14px] text-[#696969]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/booking/${pkg.id}`}
                        className="block w-full py-3 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] text-white rounded-full font-['Ubuntu:Medium',sans-serif] text-[16px] hover:opacity-90 transition-opacity text-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-2xl p-8 text-white sticky top-8">
                <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] mb-6">
                  Need Help Planning?
                </h3>
                <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] mb-6 opacity-90">
                  Our travel experts are here to help you create the perfect itinerary
                </p>
                <button className="w-full py-3 bg-white text-[#0D3E55] rounded-full font-['Ubuntu:Medium',sans-serif] text-[16px] hover:bg-white/90 transition-colors mb-4">
                  Contact Us
                </button>
                <div className="space-y-4 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Ubuntu:Medium',sans-serif] text-[14px] opacity-75">
                        Call us
                      </p>
                      <p className="font-['Ubuntu:Bold',sans-serif] text-[16px]">
                        +957-3993-000-484
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Ubuntu:Medium',sans-serif] text-[14px] opacity-75">
                        Email us
                      </p>
                      <p className="font-['Ubuntu:Bold',sans-serif] text-[16px]">
                        info@tourism.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
