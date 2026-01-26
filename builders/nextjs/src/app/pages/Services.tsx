import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const packages = [
    {
      name: 'Consultation',
      price: '$2,500',
      description: 'Perfect for initial planning and design direction',
      features: [
        'Initial site visit & assessment',
        '2-hour design consultation',
        'Conceptual sketches',
        'Design direction report',
        'Material recommendations',
      ],
      popular: false,
    },
    {
      name: 'Blueprint Design',
      price: '$15,000',
      description: 'Complete architectural plans ready for permits',
      features: [
        'Everything in Consultation',
        'Full architectural drawings',
        'Structural engineering review',
        '3D renderings (3 views)',
        'Permit-ready documentation',
        'Material specifications',
        '3 revision rounds',
      ],
      popular: true,
    },
    {
      name: 'Full Project Management',
      price: '$50,000',
      description: 'End-to-end project execution and oversight',
      features: [
        'Everything in Blueprint Design',
        'Full construction oversight',
        'Contractor coordination',
        'Weekly progress reports',
        'Quality control inspections',
        'Budget management',
        'Final walkthrough & handover',
        'Unlimited revisions',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-white via-[#F0F8FF] to-white min-h-screen">
      {/* Header */}
      <section className="py-32 max-w-[1440px] mx-auto px-20">
        <h1 className="text-5xl md:text-7xl tracking-[0.15em] font-light mb-8">
          SERVICES & PACKAGES
        </h1>
        <div className="w-20 h-px bg-[#87CEEB] mb-12" />
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Choose the service package that best fits your project needs.
          All packages include our commitment to exceptional design and client satisfaction.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-[1440px] mx-auto px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-lg border p-10 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular
                  ? 'bg-white/80 border-[#87CEEB] shadow-xl scale-105'
                  : 'bg-white/60 border-[#87CEEB]/20 hover:border-[#87CEEB]/40'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#87CEEB] text-white text-xs tracking-[0.15em]">
                  MOST POPULAR
                </div>
              )}

              {/* Package Details */}
              <div className="mb-8">
                <h3 className="text-2xl tracking-[0.1em] mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-6">{pkg.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl tracking-tight">{pkg.price}</span>
                  <span className="text-sm text-gray-600">starting</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#87CEEB]/20 mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-[#87CEEB] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/about"
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 text-sm tracking-[0.15em] transition-all ${
                  pkg.popular
                    ? 'bg-[#87CEEB] text-white hover:bg-[#87CEEB]/90'
                    : 'border border-[#87CEEB] text-[#87CEEB] hover:bg-[#87CEEB] hover:text-white'
                }`}
              >
                GET STARTED
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-600 mb-6">
            All prices are starting estimates. Final pricing depends on project scope and complexity.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] text-[#87CEEB] hover:text-[#87CEEB]/80 transition-colors"
          >
            CONTACT US FOR A CUSTOM QUOTE
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-[#F0F8FF] to-white">
        <div className="max-w-[1440px] mx-auto px-20">
          <h2 className="text-4xl md:text-5xl tracking-[0.15em] font-light mb-16 text-center">
            OUR PROCESS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your vision, needs, and site requirements',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating conceptual designs and detailed architectural plans',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Refining designs and preparing construction documentation',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Construction oversight and final project handover',
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#87CEEB]/10 flex items-center justify-center">
                  <span className="text-2xl text-[#87CEEB] tracking-wider">{phase.step}</span>
                </div>
                <h3 className="text-xl tracking-[0.1em] mb-4">{phase.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
