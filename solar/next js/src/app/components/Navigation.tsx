import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export function Navigation() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F2F4F7]"
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl tracking-tight">
          <span className="bg-gradient-to-r from-[#84CC16] to-[#3B82F6] bg-clip-text text-transparent">
            Lumina
          </span>{' '}
          <span className="text-[#101828]">Solar</span>
        </Link>

        <div className="flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-[#475467] hover:text-[#101828] transition-colors duration-300"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#84CC16] to-[#3B82F6]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="px-6 py-3 bg-gradient-to-r from-[#84CC16] to-[#3B82F6] text-white rounded-2xl hover:shadow-lg hover:shadow-[#84CC16]/20 transition-all duration-300 hover:scale-105"
        >
          Get a Quote
        </Link>
      </div>
    </motion.nav>
  );
}
