import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

const footerLinks = [
  {
    title: 'Services',
    links: ['Essential Maintenance', 'Performance Tune-up', 'Concierge Detail', 'Emergency Towing']
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Blog']
  },
  {
    title: 'Support',
    links: ['FAQ', 'Contact', 'Privacy Policy', 'Terms of Service']
  }
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">N</span>
              </div>
              <span className="text-xl font-semibold">Nexus Auto Care</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Precision engineering for the modern driver. State-of-the-art diagnostics 
              and premium care for luxury and electric vehicles.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2026 Nexus Auto Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              Cookies
            </button>
          </div>
        </div>

        {/* Emergency Hotline */}
        <div className="mt-8 p-6 bg-blue-600/10 border border-blue-600/20 rounded-xl text-center">
          <p className="text-white/90 mb-2">24/7 Emergency Towing Hotline</p>
          <a href="tel:555-987-6543" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            (555) 987-6543
          </a>
        </div>
      </div>
    </footer>
  );
}
