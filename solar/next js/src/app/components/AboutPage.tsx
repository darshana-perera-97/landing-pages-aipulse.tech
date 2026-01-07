import { motion } from 'motion/react';
import { Leaf, Target, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  {
    icon: Leaf,
    title: 'Transparency',
    description: 'We believe in honest communication and clear pricing. No hidden fees, no surprises—just straightforward solar solutions.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We stay at the forefront of solar technology, bringing you the most efficient and reliable systems available.',
  },
  {
    icon: Award,
    title: 'Longevity',
    description: 'Our systems are built to last decades, backed by industry-leading warranties and exceptional craftsmanship.',
  },
];

const team = [
  {
    name: 'Michael Torres',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Sarah Anderson',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    name: 'David Kim',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400',
  },
  {
    name: 'Emma Wilson',
    role: 'Customer Success Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
];

export function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl tracking-tight mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-2xl text-[#475467] max-w-3xl mx-auto leading-relaxed">
              Accelerating the world's transition to sustainable energy, one home at a time.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764885518733-6cb0b3473996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5vbG9neSUyMGNsZWFufGVufDF8fHx8MTc2NzY3OTI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solar panel technology"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl tracking-tight">
                Building a Sustainable Future
              </h2>
              <p className="text-lg text-[#475467] leading-relaxed">
                Founded in 2015, Lumina Solar began with a simple vision: make clean, renewable energy accessible to every household. We've grown from a small team of passionate engineers to a leading provider of residential solar solutions.
              </p>
              <p className="text-lg text-[#475467] leading-relaxed">
                Today, we've powered over 10,000 homes and prevented millions of pounds of CO₂ emissions. But we're just getting started. Every installation brings us closer to a world powered by clean, sustainable energy.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                    10,000+
                  </div>
                  <div className="text-[#475467]">Homes Powered</div>
                </div>
                <div>
                  <div className="text-4xl bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                    50M+
                  </div>
                  <div className="text-[#475467]">lbs CO₂ Prevented</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl tracking-tight mb-6">Our Values</h2>
            <p className="text-xl text-[#475467] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#84CC16]/10 to-[#3B82F6]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-[#84CC16]" />
                  </div>
                  <h3 className="text-2xl mb-4">{value.title}</h3>
                  <p className="text-[#475467] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl tracking-tight mb-6">Meet Our Team</h2>
            <p className="text-xl text-[#475467] max-w-2xl mx-auto">
              Expert engineers and dedicated professionals committed to your solar success
            </p>
          </motion.div>

          <div className="grid grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl mb-2">{member.name}</h3>
                <p className="text-[#475467]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Story */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#84CC16]/10 to-[#3B82F6]/10 rounded-full text-[#84CC16] mb-4">
                Our Commitment
              </div>
              <h2 className="text-4xl tracking-tight">
                More Than Just Solar Panels
              </h2>
              <p className="text-lg text-[#475467] leading-relaxed">
                Every Lumina Solar installation is a step toward a cleaner planet. We partner with environmental organizations to plant trees, support renewable energy research, and educate communities about sustainable living.
              </p>
              <p className="text-lg text-[#475467] leading-relaxed">
                Our manufacturing partners use eco-friendly processes, and we offset 100% of our operational carbon footprint. When you choose Lumina Solar, you're not just powering your home—you're powering change.
              </p>
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#84CC16]" />
                  <div>
                    <div className="text-2xl">100%</div>
                    <div className="text-[#475467]">Carbon Neutral</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-[#3B82F6]" />
                  <div>
                    <div className="text-2xl">25K+</div>
                    <div className="text-[#475467]">Trees Planted</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720610784599-18c02b1cc9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMGhvdXNlfGVufDF8fHx8MTc2NzY3OTI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Solar installation"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
