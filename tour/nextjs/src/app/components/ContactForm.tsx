import React from 'react';

interface ContactFormProps {
  contactImage: string;
}

export function ContactForm({ contactImage }: ContactFormProps) {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Left Side - Image */}
        <div className="relative overflow-hidden">
          <img 
            src={contactImage} 
            alt="Serene Horizon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center px-8 lg:px-20 py-20 bg-white">
          <div className="w-full max-w-md">
            <h2 
              className="font-['Playfair_Display'] text-4xl mb-12 tracking-tight"
              style={{ color: '#1A1A1A' }}
            >
              Begin Your Journey
            </h2>

            <form className="space-y-8">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pb-3 bg-transparent border-b border-gray-200 font-['Inter'] text-sm tracking-wide placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  style={{ color: '#1A1A1A' }}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pb-3 bg-transparent border-b border-gray-200 font-['Inter'] text-sm tracking-wide placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  style={{ color: '#1A1A1A' }}
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream trip"
                  className="w-full pb-3 bg-transparent border-b border-gray-200 font-['Inter'] text-sm tracking-wide placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  style={{ color: '#1A1A1A' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#1A1A1A] text-white font-['Inter'] text-sm tracking-[0.2em] hover:bg-[#D4AF37] transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
