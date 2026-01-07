import { motion } from 'motion/react';
import { Check, Zap, House, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    icon: Zap,
    name: 'Essential',
    bestFor: 'Small Apartments',
    price: '$8,999',
    system: '3kW System',
    features: [
      'Standard monitoring dashboard',
      'Basic energy analytics',
      '10-year equipment warranty',
      'Standard installation',
      'Email support',
      'Grid-tied system',
    ],
    gradient: 'from-[#84CC16]/10 to-[#3B82F6]/10',
    borderGradient: 'from-[#84CC16]/20 to-[#3B82F6]/20',
  },
  {
    icon: House,
    name: 'Premium',
    bestFor: '3-4 Bedroom Homes',
    price: '$16,999',
    system: '6kW System',
    features: [
      'Advanced monitoring & analytics',
      'Battery backup included',
      '15-year equipment warranty',
      'Priority installation',
      'Phone & email support',
      'Smart home integration',
      'Energy storage optimization',
      'Remote monitoring app',
    ],
    gradient: 'from-[#84CC16]/20 to-[#3B82F6]/20',
    borderGradient: 'from-[#84CC16] to-[#3B82F6]',
    popular: true,
  },
  {
    icon: Building2,
    name: 'Ultimate',
    bestFor: 'Large Estates / Off-grid',
    price: '$34,999',
    system: '10kW+ System',
    features: [
      'Enterprise-grade monitoring',
      'Full battery backup system',
      '25-year equipment warranty',
      'White-glove installation',
      '24/7 priority support',
      'Complete smart home integration',
      'Advanced energy management',
      'Dedicated account manager',
      'Off-grid capability',
      'Multi-zone optimization',
    ],
    gradient: 'from-[#84CC16]/10 to-[#3B82F6]/10',
    borderGradient: 'from-[#84CC16]/20 to-[#3B82F6]/20',
  },
];

export function PackagesPage() {
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
              Choose Your{' '}
              <span className="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">
                Solar Solution
              </span>
            </h1>
            <p className="text-xl text-[#475467] max-w-2xl mx-auto">
              Flexible packages designed to fit every home and budget. All systems include professional installation and comprehensive warranties.
            </p>
          </motion.div>

          {/* Package Cards */}
          <div className="grid grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className={`relative rounded-3xl p-8 bg-white border-2 transition-all duration-300 ${
                    pkg.popular
                      ? 'border-transparent bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 shadow-2xl shadow-[#84CC16]/20'
                      : 'border-[#F2F4F7] hover:border-[#84CC16]/30 hover:shadow-xl hover:shadow-[#84CC16]/10'
                  }`}
                  style={{
                    background: pkg.popular
                      ? 'linear-gradient(135deg, rgba(132, 204, 22, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)'
                      : undefined,
                  }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="px-6 py-2 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white text-sm rounded-full shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${pkg.popular ? 'text-[#84CC16]' : 'text-[#3B82F6]'}`} />
                  </div>

                  <h3 className="text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-[#475467] mb-6">Best for: {pkg.bestFor}</p>

                  <div className="mb-6">
                    <div className="text-5xl mb-2">
                      <span className="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-[#475467]">{pkg.system}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 ${pkg.popular ? 'text-[#84CC16]' : 'text-[#3B82F6]'}`} />
                        </div>
                        <span className="text-[#475467]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`block w-full py-4 rounded-2xl text-center transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-[#84CC16]/30'
                        : 'bg-white border-2 border-[#F2F4F7] text-[#101828] hover:border-[#84CC16] hover:text-[#84CC16]'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5 border border-[#F2F4F7] text-center"
          >
            <h3 className="text-2xl mb-4">Not sure which package is right for you?</h3>
            <p className="text-[#475467] mb-6 text-lg">
              Our energy experts will analyze your home's specific needs and recommend the perfect solar solution.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-lg hover:shadow-[#84CC16]/30 transition-all duration-300"
            >
              Schedule Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl tracking-tight mb-6">Package Comparison</h2>
            <p className="text-xl text-[#475467]">
              See what's included in each solar package
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl border border-[#F2F4F7] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#F2F4F7]">
                  <th className="text-left px-8 py-6 text-[#101828]">Feature</th>
                  <th className="px-8 py-6 text-[#101828]">Essential</th>
                  <th className="px-8 py-6 text-[#101828] bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">Premium</th>
                  <th className="px-8 py-6 text-[#101828]">Ultimate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#F2F4F7]">
                  <td className="px-8 py-6 text-[#475467]">System Size</td>
                  <td className="px-8 py-6 text-center">3kW</td>
                  <td className="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">6kW</td>
                  <td className="px-8 py-6 text-center">10kW+</td>
                </tr>
                <tr className="border-b border-[#F2F4F7]">
                  <td className="px-8 py-6 text-[#475467]">Battery Backup</td>
                  <td className="px-8 py-6 text-center">–</td>
                  <td className="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">✓</td>
                  <td className="px-8 py-6 text-center">✓</td>
                </tr>
                <tr className="border-b border-[#F2F4F7]">
                  <td className="px-8 py-6 text-[#475467]">Warranty Period</td>
                  <td className="px-8 py-6 text-center">10 years</td>
                  <td className="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">15 years</td>
                  <td className="px-8 py-6 text-center">25 years</td>
                </tr>
                <tr className="border-b border-[#F2F4F7]">
                  <td className="px-8 py-6 text-[#475467]">Smart Home Integration</td>
                  <td className="px-8 py-6 text-center">–</td>
                  <td className="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">✓</td>
                  <td className="px-8 py-6 text-center">✓</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 text-[#475467]">Support Level</td>
                  <td className="px-8 py-6 text-center">Email</td>
                  <td className="px-8 py-6 text-center bg-gradient-to-br from-[#84CC16]/5 to-[#3B82F6]/5">Phone & Email</td>
                  <td className="px-8 py-6 text-center">24/7 Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}