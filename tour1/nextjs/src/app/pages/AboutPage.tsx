import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Award, Users, Globe, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] py-20">
        <div className="w-full max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="font-['Ubuntu:Bold',sans-serif] text-[56px] text-white mb-4">
            About Us
          </h1>
          <p className="font-['Ubuntu:Regular',sans-serif] text-[24px] text-white/90">
            Your trusted travel companion since 2010
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-['Ubuntu:Bold',sans-serif] text-[42px] text-[#0D3E55] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-['Ubuntu:Regular',sans-serif] text-[18px] text-[#696969] leading-relaxed">
                <p>
                  Founded in 2010, TOUR has been dedicated to making travel dreams come true for thousands of adventurers worldwide. What started as a small travel agency has grown into one of the most trusted names in the tourism industry.
                </p>
                <p>
                  We believe that travel is not just about visiting new places—it's about creating unforgettable memories, experiencing diverse cultures, and broadening your horizons. That's why we carefully curate every destination and package to ensure an extraordinary experience.
                </p>
                <p>
                  With our team of experienced travel experts and local guides, we're committed to providing personalized service and exceptional value on every journey.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY4ODM2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} color="white" />
              </div>
              <p className="font-['Ubuntu:Bold',sans-serif] text-[36px] text-[#0D3E55] mb-2">50K+</p>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} color="white" />
              </div>
              <p className="font-['Ubuntu:Bold',sans-serif] text-[36px] text-[#0D3E55] mb-2">200+</p>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">Destinations</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} color="white" />
              </div>
              <p className="font-['Ubuntu:Bold',sans-serif] text-[36px] text-[#0D3E55] mb-2">25+</p>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} color="white" />
              </div>
              <p className="font-['Ubuntu:Bold',sans-serif] text-[36px] text-[#0D3E55] mb-2">98%</p>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">Satisfaction Rate</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#f5f5f5] rounded-2xl p-8">
              <h3 className="font-['Ubuntu:Bold',sans-serif] text-[28px] text-[#0D3E55] mb-4">
                Our Mission
              </h3>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969] leading-relaxed">
                To inspire and enable travelers to explore the world by providing exceptional travel experiences, outstanding customer service, and the best value for money. We strive to make every journey memorable and stress-free.
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-2xl p-8">
              <h3 className="font-['Ubuntu:Bold',sans-serif] text-[28px] text-[#0D3E55] mb-4">
                Our Vision
              </h3>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969] leading-relaxed">
                To be the world's most trusted and innovative travel company, recognized for our commitment to excellence, sustainability, and creating positive impact in the communities we serve while delivering unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
