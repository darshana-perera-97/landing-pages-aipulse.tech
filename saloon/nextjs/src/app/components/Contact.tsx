import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    stylist: '',
    preferredDate: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Booking request received! We\'ll contact you shortly to confirm your appointment.');
    setFormData({
      name: '',
      email: '',
      service: '',
      stylist: '',
      preferredDate: '',
      notes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Begin Your Transformation
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto">
            Schedule your personalized consultation and experience the art of refined beauty
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-[#1A1A1A]">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F9F8F6] border border-transparent focus:border-[#C5B358] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[#1A1A1A]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F9F8F6] border border-transparent focus:border-[#C5B358] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2 text-[#1A1A1A]">
                  Service Choice *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F9F8F6] border border-transparent focus:border-[#C5B358] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="minimalist">The Minimalist ($85+)</option>
                  <option value="luminous">The Luminous ($160+)</option>
                  <option value="sanctuary">The Sanctuary ($250+)</option>
                  <option value="custom">Custom Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="stylist" className="block text-sm mb-2 text-[#1A1A1A]">
                  Stylist Preference <span className="text-[#757575]">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="stylist"
                  name="stylist"
                  value={formData.stylist}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F9F8F6] border border-transparent focus:border-[#C5B358] focus:outline-none transition-colors"
                  placeholder="Preferred stylist name"
                />
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm mb-2 text-[#1A1A1A]">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F9F8F6] border border-transparent focus:border-[#C5B358] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm mb-2 text-[#1A1A1A]">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F9F8F6] border border-transparent focus:border-[#C5B358] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your hair/skin goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C5B358] text-white tracking-wide hover:bg-[#B4A347] transition-colors"
              >
                Submit Booking Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="bg-[#F9F8F6] p-8">
              <h3 
                className="text-2xl mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Visit Us
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C5B358] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1A1A1A]">123 Minimalist Way</p>
                    <p className="text-[#757575]">Design District</p>
                    <p className="text-[#757575]">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#C5B358] flex-shrink-0" />
                  <a href="tel:+15550123456" className="text-[#1A1A1A] hover:text-[#C5B358] transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#C5B358] flex-shrink-0" />
                  <a href="mailto:hello@lumieresalon.com" className="text-[#1A1A1A] hover:text-[#C5B358] transition-colors">
                    hello@lumieresalon.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Instagram className="w-5 h-5 text-[#C5B358] flex-shrink-0" />
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#C5B358] transition-colors">
                    @lumieresalon
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#F9F8F6] p-8">
              <h3 
                className="text-2xl mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[#757575]">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday – Saturday</span>
                  <span>10am – 7pm</span>
                </div>
                <div className="flex justify-between text-[#757575]">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon location map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
