import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Wrench, Shield, BadgeCheck } from 'lucide-react';

const valueProps = [
  {
    icon: Wrench,
    title: 'Advanced Diagnostics',
    description: 'State-of-the-art equipment for precise vehicle analysis'
  },
  {
    icon: BadgeCheck,
    title: 'Certified Technicians',
    description: 'Expert mechanics with years of experience'
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    description: 'No hidden fees, just honest and fair service'
  }
];

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753281796865-d0d38f5efaf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBnYXJhZ2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc2NzIyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern garage interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Precision Engineering for the Modern Driver.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            State-of-the-art diagnostics and premium care for luxury and electric vehicles.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-2xl hover:scale-105 font-medium"
            >
              Book an Appointment
            </button>
            <button
              onClick={scrollToServices}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all hover:shadow-2xl font-medium"
            >
              View Services
            </button>
          </motion.div>

          {/* Value Props */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <prop.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{prop.title}</h3>
                <p className="text-white/80 text-sm">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
