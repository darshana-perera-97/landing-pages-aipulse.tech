export function Footer() {
  return (
    <footer className="border-t border-[#87CEEB]/20 bg-gradient-to-b from-white to-[#F0F8FF]">
      <div className="max-w-[1440px] mx-auto px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl tracking-[0.2em] font-light mb-4">ATELIER</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Creating timeless architectural spaces with modern minimalism
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.15em] mb-4 text-gray-900">QUICK LINKS</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="hover:text-[#87CEEB] cursor-pointer transition-colors">About Us</p>
              <p className="hover:text-[#87CEEB] cursor-pointer transition-colors">Services</p>
              <p className="hover:text-[#87CEEB] cursor-pointer transition-colors">Portfolio</p>
              <p className="hover:text-[#87CEEB] cursor-pointer transition-colors">Contact</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.15em] mb-4 text-gray-900">CONTACT</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>info@atelier.design</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Design Avenue</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#87CEEB]/20 text-center">
          <p className="text-xs tracking-[0.15em] text-gray-500">
            © 2026 ATELIER DESIGN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
