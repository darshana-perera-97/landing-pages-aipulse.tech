export function Services() {
  const packages = [
    {
      name: 'The Minimalist',
      price: '$85+',
      description: 'Essential care for the modern aesthetic',
      services: [
        'Botanical hair bath',
        'Precision cut',
        'Signature blowout'
      ]
    },
    {
      name: 'The Luminous',
      price: '$160+',
      description: 'Transform your color with dimensional artistry',
      services: [
        'Full-dimensional color or highlights',
        'Gloss treatment',
        'Custom styling'
      ],
      featured: true
    },
    {
      name: 'The Sanctuary',
      price: '$250+',
      description: 'Complete transformation and restoration',
      services: [
        'Scalp detox',
        'Deep tissue facial massage',
        'Hair reconstruction',
        'Custom styling',
        'Take-home care kit'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Curated Rituals
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto">
            Experience personalized treatments designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative p-8 border ${
                pkg.featured 
                  ? 'border-[#C5B358] bg-[#F9F8F6]' 
                  : 'border-gray-200 bg-white'
              } hover:shadow-lg transition-shadow duration-300`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5B358] text-white px-4 py-1 text-xs tracking-widest">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 
                  className="text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {pkg.name}
                </h3>
                <p className="text-sm text-[#757575] mb-4">{pkg.description}</p>
                <div 
                  className="text-4xl text-[#C5B358]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.services.map((service, index) => (
                  <li 
                    key={index}
                    className="text-sm text-[#1A1A1A] flex items-start"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-[#C5B358] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors text-sm tracking-wide">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
