import { useParams } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Calendar, Users, CreditCard, Check } from 'lucide-react';
import { useState } from 'react';

export function BookingPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: 1,
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you for your booking! We will contact you shortly to confirm.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] py-20">
        <div className="w-full max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="font-['Ubuntu:Bold',sans-serif] text-[56px] text-white mb-4">
            Complete Your Booking
          </h1>
          <p className="font-['Ubuntu:Regular',sans-serif] text-[24px] text-white/90">
            Just a few steps away from your dream vacation
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-3 gap-12">
            {/* Form */}
            <div className="col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="font-['Ubuntu:Bold',sans-serif] text-[28px] text-[#0D3E55] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center">
                      <span className="text-white font-['Ubuntu:Bold',sans-serif] text-[18px]">1</span>
                    </div>
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b]"
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Details */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="font-['Ubuntu:Bold',sans-serif] text-[28px] text-[#0D3E55] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center">
                      <span className="text-white font-['Ubuntu:Bold',sans-serif] text-[18px]">2</span>
                    </div>
                    Travel Details
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.travelDate}
                        onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                        Number of Travelers *
                      </label>
                      <input
                        type="number"
                        min="1"
                        required
                        value={formData.travelers}
                        onChange={(e) => setFormData({...formData, travelers: parseInt(e.target.value)})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b]"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                      Special Requests
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b] resize-none"
                      placeholder="Any special requirements or requests..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] text-white rounded-full font-['Ubuntu:Medium',sans-serif] text-[18px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  Confirm Booking
                </button>
              </form>
            </div>

            {/* Summary */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-8">
                <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55] mb-6">
                  Booking Summary
                </h3>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="font-['Ubuntu:Bold',sans-serif] text-[20px] text-[#0D3E55] mb-2">
                      Beach Paradise Package
                    </p>
                    <p className="font-['Ubuntu:Regular',sans-serif] text-[14px] text-[#696969]">
                      7 Days / 6 Nights
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-['Ubuntu:Bold',sans-serif] text-[18px] text-[#0D3E55] mb-3">
                    Includes
                  </h4>
                  <div className="flex items-center gap-2 text-[#696969]">
                    <Check size={16} className="text-[#13a78b]" />
                    <span className="font-['Ubuntu:Regular',sans-serif] text-[14px]">Accommodation</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#696969]">
                    <Check size={16} className="text-[#13a78b]" />
                    <span className="font-['Ubuntu:Regular',sans-serif] text-[14px]">All Meals</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#696969]">
                    <Check size={16} className="text-[#13a78b]" />
                    <span className="font-['Ubuntu:Regular',sans-serif] text-[14px]">Water Sports</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#696969]">
                    <Check size={16} className="text-[#13a78b]" />
                    <span className="font-['Ubuntu:Regular',sans-serif] text-[14px]">Airport Transfer</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">
                      Price per person
                    </span>
                    <span className="font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55]">
                      $999
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">
                      Travelers
                    </span>
                    <span className="font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55]">
                      {formData.travelers}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="font-['Ubuntu:Bold',sans-serif] text-[20px] text-[#0D3E55]">
                      Total
                    </span>
                    <span className="font-['Ubuntu:Bold',sans-serif] text-[24px] text-[#0D3E55]">
                      ${999 * formData.travelers}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-['Ubuntu:Regular',sans-serif] text-[14px] text-[#696969] leading-relaxed">
                    By proceeding with this booking, you agree to our Terms & Conditions and Privacy Policy.
                  </p>
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
