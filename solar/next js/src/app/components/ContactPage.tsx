import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    electricityBill: '',
    address: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl tracking-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">
                Free Quote
              </span>
            </h1>
            <p className="text-xl text-[#475467] max-w-2xl mx-auto">
              Ready to start your solar journey? Fill out the form below and our energy experts will contact you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-12 border border-[#F2F4F7] shadow-lg shadow-[#101828]/5">
                <h2 className="text-3xl mb-8">Request a Consultation</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? '-top-3 text-sm bg-white px-2 text-[#84CC16]'
                          : 'top-4 text-[#475467]'
                      }`}
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300"
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? '-top-3 text-sm bg-white px-2 text-[#84CC16]'
                          : 'top-4 text-[#475467]'
                      }`}
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Monthly Bill Dropdown */}
                  <div className="relative">
                    <select
                      name="electricityBill"
                      value={formData.electricityBill}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('bill')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300 appearance-none bg-white"
                    >
                      <option value="">Select Monthly Electricity Bill</option>
                      <option value="0-100">$0 - $100</option>
                      <option value="100-200">$100 - $200</option>
                      <option value="200-300">$200 - $300</option>
                      <option value="300-400">$300 - $400</option>
                      <option value="400+">$400+</option>
                    </select>
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        focusedField === 'bill' || formData.electricityBill
                          ? '-top-3 text-sm bg-white px-2 text-[#84CC16]'
                          : 'top-4 text-[#475467]'
                      }`}
                    >
                      Monthly Electricity Bill
                    </label>
                  </div>

                  {/* Address Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('address')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300"
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        focusedField === 'address' || formData.address
                          ? '-top-3 text-sm bg-white px-2 text-[#84CC16]'
                          : 'top-4 text-[#475467]'
                      }`}
                    >
                      Installation Address
                    </label>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-6 py-4 border-2 border-[#F2F4F7] rounded-2xl focus:border-[#84CC16] focus:outline-none transition-all duration-300 resize-none"
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? '-top-3 text-sm bg-white px-2 text-[#84CC16]'
                          : 'top-4 text-[#475467]'
                      }`}
                    >
                      Additional Details (Optional)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-lg hover:shadow-[#84CC16]/30 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Get My Free Quote
                    <Send className="w-5 h-5" />
                  </motion.button>

                  <p className="text-sm text-[#475467] text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Calendar */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-3xl p-12 border border-[#F2F4F7]">
                <h3 className="text-2xl mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#84CC16]" />
                    </div>
                    <div>
                      <div className="text-[#475467] mb-1">Phone</div>
                      <div className="text-lg">(555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <div className="text-[#475467] mb-1">Email</div>
                      <div className="text-lg">hello@luminasolar.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#84CC16]" />
                    </div>
                    <div>
                      <div className="text-[#475467] mb-1">Office</div>
                      <div className="text-lg">
                        123 Solar Street<br />
                        Green City, CA 90210
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book a Site Visit */}
              <div className="bg-white rounded-3xl p-12 border border-[#F2F4F7] shadow-lg shadow-[#101828]/5">
                <h3 className="text-2xl mb-6">Book a Site Visit</h3>
                <p className="text-[#475467] mb-8 leading-relaxed">
                  Want a personalized assessment? Schedule a free on-site consultation with our solar experts. We'll evaluate your property, discuss your energy goals, and provide a detailed proposal.
                </p>

                <div className="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-2xl p-6 mb-6">
                  <div className="text-sm text-[#475467] mb-2">Available Times</div>
                  <div className="text-lg">Monday - Saturday</div>
                  <div className="text-lg text-[#475467]">9:00 AM - 6:00 PM</div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-lg hover:shadow-[#84CC16]/30 transition-all duration-300">
                  Schedule Site Visit
                </button>
              </div>

              {/* FAQ Prompt */}
              <div className="bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 rounded-3xl p-8 border border-[#F2F4F7]">
                <h4 className="text-lg mb-3">Have Questions?</h4>
                <p className="text-[#475467] mb-4">
                  Check out our FAQ section or chat with our support team for instant answers.
                </p>
                <button className="text-[#84CC16] hover:text-[#3B82F6] transition-colors duration-300">
                  View FAQs →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-0">
        <div className="w-full h-[400px] bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#84CC16] mx-auto mb-4" />
              <p className="text-[#475467] text-lg">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
