import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: '123 Innovation Drive, Tech District',
    subContent: 'San Francisco, CA 94105'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(555) 123-4567',
    subContent: 'Emergency Towing: (555) 987-6543'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'service@nexusautocare.com',
    subContent: 'support@nexusautocare.com'
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon - Fri: 8:00 AM - 7:00 PM',
    subContent: 'Sat - Sun: 9:00 AM - 5:00 PM'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicle: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', vehicle: '', service: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Contact & Booking
          </h2>
          <p className="text-xl text-[#717182] max-w-2xl mx-auto">
            Get in touch to schedule your appointment or ask us anything
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#1A1A1A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-[#FAFAFA] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1A1A1A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-[#FAFAFA] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-[#1A1A1A] mb-2">
                  Vehicle Model
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-[#FAFAFA] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="e.g., Tesla Model S, BMW M5"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[#1A1A1A] mb-2">
                  Service Needed
                </label>
                <textarea
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-[#FAFAFA] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  placeholder="Describe the service or issue..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : isSubmitting
                    ? 'bg-blue-400 text-white cursor-wait'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                {submitted ? '✓ Booking Received!' : isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <info.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">{info.title}</h4>
                  <p className="text-sm text-[#717182]">{info.content}</p>
                  {info.subContent && (
                    <p className="text-sm text-[#717182] mt-1">{info.subContent}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-80">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
                <div className="text-center z-10">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-[#1A1A1A] font-semibold">123 Innovation Drive</p>
                  <p className="text-[#717182]">San Francisco, CA 94105</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold">
                    Open in Maps →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
