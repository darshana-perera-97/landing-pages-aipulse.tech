import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] py-20">
        <div className="w-full max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="font-['Ubuntu:Bold',sans-serif] text-[56px] text-white mb-4">
            Contact Us
          </h1>
          <p className="font-['Ubuntu:Regular',sans-serif] text-[24px] text-white/90">
            We're here to help with your travel plans
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20 px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-['Ubuntu:Bold',sans-serif] text-[32px] text-[#0D3E55] mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b] font-['Ubuntu:Regular',sans-serif]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b] font-['Ubuntu:Regular',sans-serif]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b] font-['Ubuntu:Regular',sans-serif]"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b] font-['Ubuntu:Regular',sans-serif]"
                    placeholder="Trip inquiry"
                  />
                </div>
                <div>
                  <label className="block font-['Ubuntu:Medium',sans-serif] text-[16px] text-[#0D3E55] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#13a78b] font-['Ubuntu:Regular',sans-serif] resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] text-white rounded-full font-['Ubuntu:Medium',sans-serif] text-[18px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-['Ubuntu:Bold',sans-serif] text-[32px] text-[#0D3E55] mb-6">
                Get in Touch
              </h2>
              <p className="font-['Ubuntu:Regular',sans-serif] text-[18px] text-[#696969] mb-8 leading-relaxed">
                Have questions about our travel packages? We're here to help you plan your perfect vacation.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center">
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-['Ubuntu:Bold',sans-serif] text-[20px] text-[#0D3E55] mb-2">
                      Phone
                    </h3>
                    <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">
                      +957-3993-000-484030
                    </p>
                    <p className="font-['Ubuntu:Regular',sans-serif] text-[14px] text-[#696969] mt-1">
                      Mon-Fri 9AM-6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center">
                    <Mail size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-['Ubuntu:Bold',sans-serif] text-[20px] text-[#0D3E55] mb-2">
                      Email
                    </h3>
                    <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">
                      info@tourism.com
                    </p>
                    <p className="font-['Ubuntu:Regular',sans-serif] text-[14px] text-[#696969] mt-1">
                      We'll reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-full flex items-center justify-center">
                    <MapPin size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-['Ubuntu:Bold',sans-serif] text-[20px] text-[#0D3E55] mb-2">
                      Office
                    </h3>
                    <p className="font-['Ubuntu:Regular',sans-serif] text-[16px] text-[#696969]">
                      123 Travel Street,<br />
                      Tourism City, TC 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[linear-gradient(158deg,_rgba(19,145,167,1)_0%,_rgba(43,164,149,1)_100%)] rounded-2xl p-8 text-white">
                <h3 className="font-['Ubuntu:Bold',sans-serif] text-[24px] mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 font-['Ubuntu:Regular',sans-serif] text-[16px]">
                  <div className="flex items-center justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
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
