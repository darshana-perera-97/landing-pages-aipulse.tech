import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Car, 
  Search, 
  CircleCheck, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Menu,
  X,
  Clock,
  ArrowRight,
  Star
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    vehicleType: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="cursor-pointer"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => scrollToSection('home')}
            >
              <h1 className="text-2xl tracking-tight" style={{ color: 'var(--pacific-slate)', fontWeight: 700 }}>
                VentureEase
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['Home', 'Fleet', 'Packages', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="transition-colors hover:opacity-70"
                  style={{ 
                    color: 'var(--charcoal)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500
                  }}
                >
                  {item}
                </button>
              ))}
              <button
                className="px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: 'var(--pacific-slate)',
                  color: 'white',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}
              >
                BOOK NOW
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: 'var(--pacific-slate)' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-100">
              {['Home', 'Fleet', 'Packages', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 transition-colors hover:bg-gray-50"
                  style={{ 
                    color: 'var(--charcoal)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-20 min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1543369715-eb5ecb1a4bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY3NjkyNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury travel landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="mb-6 tracking-tight leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'white'
            }}
          >
            Your Journey, Masterfully Planned.
          </h1>
          <p 
            className="mb-12 mx-auto leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '42rem'
            }}
          >
            Premium vehicles, professional drivers, and tailor-made itineraries for the modern traveler.
          </p>

          {/* Search Bar */}
          <div 
            className="bg-white rounded-2xl p-6 mx-auto max-w-4xl"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin 
                  className="absolute left-4 top-1/2 -translate-y-1/2" 
                  size={20}
                  style={{ color: 'var(--silver-slate)' }}
                />
                <input
                  type="text"
                  placeholder="Destination"
                  value={searchData.destination}
                  onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--alpine-teal)] transition-colors"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--charcoal)'
                  }}
                />
              </div>
              <div className="relative">
                <Calendar 
                  className="absolute left-4 top-1/2 -translate-y-1/2" 
                  size={20}
                  style={{ color: 'var(--silver-slate)' }}
                />
                <input
                  type="date"
                  placeholder="Date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--alpine-teal)] transition-colors"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--charcoal)'
                  }}
                />
              </div>
              <div className="relative">
                <Car 
                  className="absolute left-4 top-1/2 -translate-y-1/2" 
                  size={20}
                  style={{ color: 'var(--silver-slate)' }}
                />
                <select
                  value={searchData.vehicleType}
                  onChange={(e) => setSearchData({ ...searchData, vehicleType: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--alpine-teal)] transition-colors appearance-none"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: searchData.vehicleType ? 'var(--charcoal)' : 'var(--silver-slate)'
                  }}
                >
                  <option value="">Vehicle Type</option>
                  <option value="suv">Luxury SUV</option>
                  <option value="van">Luxury Van</option>
                  <option value="sedan">Luxury Sedan</option>
                </select>
              </div>
            </div>
            <button
              className="w-full md:w-auto mt-4 px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              style={{
                backgroundColor: 'var(--alpine-teal)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                letterSpacing: '0.02em'
              }}
            >
              <Search size={20} />
              SEARCH TRIP
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--ghost-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-center mb-16"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--pacific-slate)',
              letterSpacing: '-0.01em'
            }}
          >
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CircleCheck size={48} />,
                title: 'Choose Your Vehicle',
                description: 'Select from our premium fleet of luxury vehicles tailored to your needs.'
              },
              {
                icon: <Shield size={48} />,
                title: 'Verified Drivers',
                description: 'All our drivers are professionally trained and background-checked for your safety.'
              },
              {
                icon: <Users size={48} />,
                title: 'Personalized Service',
                description: 'Enjoy customized itineraries and dedicated support throughout your journey.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center transition-all hover:shadow-xl hover:-translate-y-2"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
              >
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                  style={{ 
                    backgroundColor: 'var(--alpine-teal)',
                    color: 'white'
                  }}
                >
                  {item.icon}
                </div>
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--charcoal)'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--silver-slate)',
                    lineHeight: '1.6'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-center mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--pacific-slate)',
              letterSpacing: '-0.01em'
            }}
          >
            Our Premium Fleet
          </h2>
          <p 
            className="text-center mb-16 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--silver-slate)',
              lineHeight: '1.6'
            }}
          >
            Experience luxury and comfort with our carefully curated selection of premium vehicles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1747414632749-6c8b14ba30fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBTVVYlMjBjYXJ8ZW58MXx8fHwxNzY3NjYzOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                name: 'Luxury Land Cruiser',
                price: '$120',
                seats: '7 Seats',
                features: ['Premium Interior', 'GPS Navigation', 'Climate Control']
              },
              {
                image: 'https://images.unsplash.com/photo-1765461734605-34657fa04db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2YW4lMjB2ZWhpY2xlfGVufDF8fHx8MTc2NzY5MjU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                name: 'Executive Van',
                price: '$150',
                seats: '12 Seats',
                features: ['Spacious Interior', 'Entertainment System', 'Luxury Seating']
              },
              {
                image: 'https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3Njc2NzU2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                name: 'Premium Sedan',
                price: '$100',
                seats: '4 Seats',
                features: ['Executive Class', 'Leather Seats', 'Premium Sound']
              }
            ].map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <div 
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs tracking-wide"
                    style={{
                      backgroundColor: 'var(--alpine-teal)',
                      color: 'white',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      letterSpacing: '0.02em'
                    }}
                  >
                    DRIVER INCLUDED
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: 'var(--charcoal)'
                    }}
                  >
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Users size={16} style={{ color: 'var(--silver-slate)' }} />
                    <span 
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--silver-slate)',
                        fontSize: '0.875rem'
                      }}
                    >
                      {vehicle.seats}
                    </span>
                  </div>
                  
                  <div className="mb-4 space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CircleCheck size={14} style={{ color: 'var(--alpine-teal)' }} />
                        <span 
                          style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--silver-slate)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span 
                        className="block"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.875rem',
                          fontWeight: 700,
                          color: 'var(--pacific-slate)'
                        }}
                      >
                        {vehicle.price}
                      </span>
                      <span 
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          color: 'var(--silver-slate)'
                        }}
                      >
                        per day
                      </span>
                    </div>
                    <button
                      className="px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-105"
                      style={{
                        backgroundColor: 'var(--pacific-slate)',
                        color: 'white',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        letterSpacing: '0.02em'
                      }}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Packages Section */}
      <section id="packages" className="py-24" style={{ backgroundColor: 'var(--ghost-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-center mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--pacific-slate)',
              letterSpacing: '-0.01em'
            }}
          >
            Curated Travel Packages
          </h2>
          <p 
            className="text-center mb-16 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--silver-slate)',
              lineHeight: '1.6'
            }}
          >
            Expertly crafted itineraries for unforgettable journeys.
          </p>

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1568920088337-06a9a7e51a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwYmVhY2glMjB0cmF2ZWx8ZW58MXx8fHwxNzY3NjkyNTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  title: 'Coastal Escape',
                  duration: '5 Days',
                  price: '$2,499',
                  description: 'Explore pristine beaches and coastal towns with luxury accommodation.',
                  includes: ['Luxury SUV', 'Professional Driver', 'Beachfront Hotels']
                },
                {
                  image: 'https://images.unsplash.com/photo-1598524613976-ec6b2677b747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyZWslMjBoaWtpbmd8ZW58MXx8fHwxNzY3NjkyNTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  title: 'Mountain Trek',
                  duration: '7 Days',
                  price: '$3,299',
                  description: 'Journey through highlands with expert guides and all-inclusive services.',
                  includes: ['4x4 Vehicle', 'Local Expert Guide', 'Mountain Lodges']
                },
                {
                  image: 'https://images.unsplash.com/photo-1688048481392-c425462ac4f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHRyYXZlbHxlbnwxfHx8fDE3Njc2MjU2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  title: 'Urban Discovery',
                  duration: '4 Days',
                  price: '$1,899',
                  description: 'Discover vibrant cities with premium transportation and guided tours.',
                  includes: ['Executive Sedan', 'City Tours', 'Boutique Hotels']
                }
              ].map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden w-[380px] flex-shrink-0 transition-all hover:shadow-2xl hover:-translate-y-2"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <ImageWithFallback
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 
                        className="mb-1"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.75rem',
                          fontWeight: 600,
                          color: 'white'
                        }}
                      >
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Clock size={16} style={{ color: 'var(--alpine-teal)' }} />
                        <span 
                          style={{
                            fontFamily: 'var(--font-body)',
                            color: 'white',
                            fontSize: '0.875rem'
                          }}
                        >
                          {pkg.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--charcoal)',
                        lineHeight: '1.6'
                      }}
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-4 space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star size={14} style={{ color: 'var(--alpine-teal)' }} />
                          <span 
                            style={{
                              fontFamily: 'var(--font-body)',
                              color: 'var(--silver-slate)',
                              fontSize: '0.875rem'
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span 
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            color: 'var(--silver-slate)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          From
                        </span>
                        <span 
                          className="block"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.875rem',
                            fontWeight: 700,
                            color: 'var(--pacific-slate)'
                          }}
                        >
                          {pkg.price}
                        </span>
                      </div>
                      <button
                        className="flex items-center gap-2 px-5 py-3 rounded-lg transition-all hover:gap-3"
                        style={{
                          backgroundColor: 'var(--alpine-teal)',
                          color: 'white',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          letterSpacing: '0.02em'
                        }}
                      >
                        VIEW ITINERARY
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-center mb-16"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--pacific-slate)',
              letterSpacing: '-0.01em'
            }}
          >
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--charcoal)'
                }}
              >
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      color: 'var(--charcoal)'
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--alpine-teal)] transition-colors"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--ghost-white)'
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      color: 'var(--charcoal)'
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--alpine-teal)] transition-colors"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--ghost-white)'
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      color: 'var(--charcoal)'
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--alpine-teal)] transition-colors"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--ghost-white)'
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      color: 'var(--charcoal)'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--alpine-teal)] transition-colors resize-none"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--ghost-white)'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg transition-all hover:shadow-lg hover:scale-105"
                  style={{
                    backgroundColor: 'var(--pacific-slate)',
                    color: 'white',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                  }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Office Info & Map */}
            <div>
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--charcoal)'
                }}
              >
                Visit Our Office
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--ghost-white)' }}
                  >
                    <MapPin size={20} style={{ color: 'var(--alpine-teal)' }} />
                  </div>
                  <div>
                    <h4 
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                        color: 'var(--charcoal)'
                      }}
                    >
                      Address
                    </h4>
                    <p 
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--silver-slate)',
                        lineHeight: '1.6'
                      }}
                    >
                      123 Travel Boulevard<br />
                      Premium District, City 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--ghost-white)' }}
                  >
                    <Phone size={20} style={{ color: 'var(--alpine-teal)' }} />
                  </div>
                  <div>
                    <h4 
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                        color: 'var(--charcoal)'
                      }}
                    >
                      Phone
                    </h4>
                    <p 
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--silver-slate)'
                      }}
                    >
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--ghost-white)' }}
                  >
                    <Mail size={20} style={{ color: 'var(--alpine-teal)' }} />
                  </div>
                  <div>
                    <h4 
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                        color: 'var(--charcoal)'
                      }}
                    >
                      Email
                    </h4>
                    <p 
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--silver-slate)'
                      }}
                    >
                      contact@ventureease.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div 
                className="w-full h-64 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: 'var(--ghost-white)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="text-center">
                  <MapPin size={48} style={{ color: 'var(--silver-slate)', margin: '0 auto 1rem' }} />
                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--silver-slate)'
                    }}
                  >
                    Map View
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: 'var(--pacific-slate)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white'
                }}
              >
                VentureEase
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6'
                }}
              >
                Premium travel experiences with luxury vehicles and professional service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  color: 'white'
                }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['About Us', 'Our Fleet', 'Packages', 'Contact', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:opacity-70"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  color: 'white'
                }}
              >
                Newsletter
              </h4>
              <p 
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6'
                }}
              >
                Subscribe for exclusive deals and travel tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                />
                <button
                  className="px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-105"
                  style={{
                    backgroundColor: 'var(--alpine-teal)',
                    color: 'white'
                  }}
                >
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.875rem'
              }}
            >
              © 2026 VentureEase. All rights reserved.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: <Facebook size={20} />, name: 'Facebook' },
                { icon: <Twitter size={20} />, name: 'Twitter' },
                { icon: <Instagram size={20} />, name: 'Instagram' },
                { icon: <Linkedin size={20} />, name: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white'
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
