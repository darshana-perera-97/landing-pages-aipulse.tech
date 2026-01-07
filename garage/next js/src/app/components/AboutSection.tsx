import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Sparkles } from 'lucide-react';

const galleryImages = [
  'https://images.unsplash.com/photo-1759580827787-2eed5f9eb87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJhZ2UlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3Njc2NDA3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1582413587000-b996ef2b7dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGF1dG9tb3RpdmUlMjBzaG9wfGVufDF8fHx8MTc2NzY3MjI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1767285610734-f0858d5248fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc2NzYxMDE3MXww&ixlib=rb-4.1.0&q=80&w=1080'
];

const stats = [
  {
    icon: Award,
    value: '15+',
    label: 'Years of Excellence'
  },
  {
    icon: Users,
    value: '5000+',
    label: 'Happy Clients'
  },
  {
    icon: Sparkles,
    value: '100%',
    label: 'Satisfaction Rate'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              The Facility
            </h2>
            <p className="text-lg text-[#717182] mb-6 leading-relaxed">
              At Nexus Auto Care, we believe in the philosophy of <strong>Clean Tech, Clean Cars</strong>. 
              Our state-of-the-art facility combines cutting-edge diagnostic equipment with 
              meticulous attention to detail.
            </p>
            <p className="text-lg text-[#717182] mb-6 leading-relaxed">
              From our pristine white epoxy floors to our organized tool systems, every aspect 
              of our garage is designed to deliver premium automotive care in an environment 
              that reflects the quality of service you deserve.
            </p>
            <p className="text-lg text-[#717182] leading-relaxed">
              We specialize in luxury and electric vehicles, bringing the latest technology 
              and expertise to maintain your investment at peak performance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#1A1A1A] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#717182]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={galleryImages[0]}
                  alt="Luxury garage workshop"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={galleryImages[1]}
                  alt="Clean automotive shop"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={galleryImages[2]}
                  alt="Modern car service"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
