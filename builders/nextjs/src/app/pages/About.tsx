import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const team = [
    {
      name: 'Elena Chen',
      role: 'Principal Architect',
      bio: '20+ years of experience in contemporary design, specializing in sustainable residential projects.',
      image: 'https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MzQzMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Design Director',
      bio: 'Award-winning designer with expertise in commercial architecture and urban development.',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjkzODA4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sarah Kim',
      role: 'Project Manager',
      bio: 'Ensures seamless execution from concept to completion with meticulous attention to detail.',
      image: 'https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjkzODEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-white via-[#F0F8FF] to-white min-h-screen">
      {/* Header */}
      <section className="py-32 max-w-[1440px] mx-auto px-20">
        <h1 className="text-5xl md:text-7xl tracking-[0.15em] font-light mb-8">
          ABOUT & CONTACT
        </h1>
        <div className="w-20 h-px bg-[#87CEEB] mb-12" />
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Founded in 2015, Atelier has been at the forefront of contemporary architectural
          design, creating spaces that inspire and endure.
        </p>
      </section>

      {/* About Story */}
      <section className="max-w-[1440px] mx-auto px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl tracking-[0.15em] font-light mb-8">OUR STORY</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Atelier was born from a shared vision of three architects who believed that
                great design should be accessible, sustainable, and timeless. What started
                as a small studio has grown into a respected firm known for our minimalist
                approach and attention to detail.
              </p>
              <p>
                We specialize in creating spaces that balance form and function, always with
                a focus on the human experience. Our portfolio spans residential, commercial,
                and interior projects, each one a testament to our "Less is More" philosophy.
              </p>
              <p>
                Today, we continue to push boundaries while staying true to the principles
                that define great architecture: clarity, simplicity, and purpose.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkzMDM5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Architecture"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 border border-[#87CEEB]/20" />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <h2 className="text-3xl tracking-[0.15em] font-light mb-16 text-center">
            MEET THE TEAM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
                </div>
                <h3 className="text-xl tracking-[0.1em] mb-2">{member.name}</h3>
                <p className="text-sm text-[#87CEEB] tracking-[0.15em] mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-[#F0F8FF] to-white">
        <div className="max-w-[1440px] mx-auto px-20">
          <h2 className="text-4xl md:text-5xl tracking-[0.15em] font-light mb-16 text-center">
            GET IN TOUCH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="backdrop-blur-lg bg-white/60 border border-[#87CEEB]/20 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#87CEEB]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#87CEEB]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg tracking-[0.1em] mb-2">Email</h3>
                    <p className="text-gray-600">info@atelier.design</p>
                    <p className="text-gray-600">projects@atelier.design</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#87CEEB]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#87CEEB]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg tracking-[0.1em] mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#87CEEB]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#87CEEB]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg tracking-[0.1em] mb-2">Studio</h3>
                    <p className="text-gray-600">123 Design Avenue</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We'd love to hear about your project. Whether you have a fully formed vision
                  or are just starting to explore possibilities, we're here to help bring your
                  architectural dreams to life.
                </p>
                <p>
                  Fill out the form and we'll get back to you within 24 hours to schedule
                  an initial consultation.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-[0.15em] mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-[#87CEEB]/20 focus:border-[#87CEEB] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-[0.15em] mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-[#87CEEB]/20 focus:border-[#87CEEB] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm tracking-[0.15em] mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-[#87CEEB]/20 focus:border-[#87CEEB] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm tracking-[0.15em] mb-2">
                  PROJECT TYPE *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-[#87CEEB]/20 focus:border-[#87CEEB] focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="interior">Interior Design</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-[0.15em] mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-[#87CEEB]/20 focus:border-[#87CEEB] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#87CEEB] text-white text-sm tracking-[0.15em] hover:bg-[#87CEEB]/90 transition-all"
              >
                SEND MESSAGE
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
