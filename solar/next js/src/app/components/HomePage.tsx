import { motion } from 'motion/react';
import { ArrowRight, Zap, Sun, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '10k+', label: 'Homes Powered' },
  { value: '30%', label: 'Average Savings' },
  { value: '25-Year', label: 'Warranty' },
];

const process = [
  {
    icon: Zap,
    title: 'Consult',
    description: 'Free energy assessment and custom solar design for your home',
  },
  {
    icon: Sun,
    title: 'Design',
    description: 'Expert engineers create an optimal solar solution tailored to you',
  },
  {
    icon: Shield,
    title: 'Install',
    description: 'Professional installation with minimal disruption to your daily life',
  },
  {
    icon: ArrowRight,
    title: 'Save',
    description: 'Start generating clean energy and watch your electricity bills drop',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    content: 'Switching to solar with Lumina was the best decision. Our bills dropped by 40% in the first year!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'James Chen',
    role: 'Business Owner',
    content: 'Professional service from start to finish. The team was knowledgeable and the installation was seamless.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Environmental Advocate',
    content: 'Not only am I saving money, but I'm also reducing my carbon footprint. Win-win with Lumina Solar!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];

export function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1756542713155-94f62d47d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHNvbGFyJTIwcGFuZWxzJTIwcm9vZnxlbnwxfHx8fDE3Njc2NzkyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solar panels on residential roof"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl tracking-tight mb-6"
          >
            Power Your Home <br />
            <span className="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">
              with the Sun
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#475467] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Sustainable energy solutions tailored for the modern home. Join thousands of families making the switch to clean, renewable power.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#84CC16]/30 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-4">
                  {stat.value}
                </div>
                <div className="text-[#475467] text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl tracking-tight mb-6">How It Works</h2>
            <p className="text-xl text-[#475467] max-w-2xl mx-auto">
              Four simple steps to a cleaner, more sustainable energy future
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 rounded-3xl bg-white border border-[#F2F4F7] hover:shadow-xl hover:shadow-[#84CC16]/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#84CC16]" />
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-[#475467] leading-relaxed">{step.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] opacity-30 hidden xl:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl tracking-tight mb-6">What Our Customers Say</h2>
            <p className="text-xl text-[#475467]">
              Real stories from real families making a difference
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-lg shadow-[#101828]/5 border border-[#F2F4F7]"
            >
              <div className="flex items-start gap-8">
                <ImageWithFallback
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-2xl text-[#101828] mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div>
                    <div className="font-medium text-[#101828]">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#475467]">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white border border-[#F2F4F7] flex items-center justify-center hover:border-[#84CC16] hover:text-[#84CC16] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-[#84CC16] to-[#3B82F6] w-8'
                        : 'bg-[#E5E7EB]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white border border-[#F2F4F7] flex items-center justify-center hover:border-[#84CC16] hover:text-[#84CC16] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl tracking-tight mb-6">
              Ready to Make the Switch?
            </h2>
            <p className="text-xl text-[#475467] mb-12">
              Get your free energy assessment and discover how much you could save
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#84CC16]/30 transition-all duration-300 hover:scale-105"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
