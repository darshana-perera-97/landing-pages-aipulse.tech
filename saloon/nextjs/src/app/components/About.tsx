export function About() {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Dedicated to the Detail
          </h2>
          <p className="text-lg md:text-xl text-[#757575] leading-relaxed mb-6">
            We believe beauty is found in the essentials. Our space is designed to strip away 
            the noise of the outside world, allowing our master stylists to focus entirely on 
            your unique aesthetic.
          </p>
          <p className="text-lg md:text-xl text-[#757575] leading-relaxed">
            Every cut, every color, and every treatment is a bespoke collaboration. 
            We celebrate individuality through precision, organic products, and expert craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
