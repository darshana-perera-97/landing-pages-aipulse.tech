import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Essential Maintenance',
    price: '$149',
    description: 'Perfect for routine care and basic upkeep',
    features: [
      'Oil change with premium synthetic oil',
      'Fluid level check and top-up',
      'Tire rotation and pressure check',
      'Basic multi-point inspection',
      'Brake system visual inspection'
    ],
    popular: false
  },
  {
    name: 'Performance Tune-up',
    price: '$349',
    description: 'Comprehensive service for optimal performance',
    features: [
      'Everything in Essential package',
      'Advanced computer diagnostics',
      'Air and cabin filter replacement',
      'Brake pad inspection and service',
      'Battery health check and clean',
      'Suspension inspection',
      'Detailed report with recommendations'
    ],
    popular: true
  },
  {
    name: 'The Concierge Detail',
    price: '$899',
    description: 'Ultimate care for the discerning driver',
    features: [
      'Everything in Performance package',
      'Premium ceramic coating application',
      'Complete interior restoration',
      'Engine bay deep cleaning and detailing',
      'Leather conditioning and protection',
      'Paint correction and polish',
      'Complimentary pickup and delivery'
    ],
    popular: false
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Services & Packages
          </h2>
          <p className="text-xl text-[#717182] max-w-2xl mx-auto">
            Choose the perfect service package for your vehicle's needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-8 relative ${
                pkg.popular ? 'border-2 border-blue-600 shadow-xl' : 'border border-[#F2F2F2] shadow-md'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                borderColor: pkg.popular ? '#2563eb' : '#2563eb'
              }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{pkg.name}</h3>
                <p className="text-[#717182] mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[#1A1A1A]">{pkg.price}</span>
                  <span className="text-[#717182]">/ service</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-[#1A1A1A]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                    : 'bg-[#F9FAFB] text-[#1A1A1A] hover:bg-blue-600 hover:text-white'
                }`}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
