import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#' },
    { name: 'High Jewelry', href: '#' },
    { name: 'Bespoke', href: '#' },
    { name: 'The Maison', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'glass-nav py-3 md:py-4' : 'bg-transparent py-4 md:py-8'
        }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1920px] mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/"
            className="text-xl md:text-2xl font-serif uppercase tracking-luxury text-on-surface"
          >
            L'Atelier d'Or
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="relative group"
            >
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className="text-on-surface/60 hover:text-secondary transition-colors font-sans uppercase tracking-label text-[10px]"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-on-surface/60 hover:text-secondary transition-colors font-sans uppercase tracking-label text-[10px]"
                >
                  {link.name}
                </a>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center space-x-6 text-on-surface">
          <button className="hover:text-secondary transition-colors duration-300">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-secondary transition-colors duration-300">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button
            className="md:hidden hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-outline/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-on-surface font-serif italic text-2xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-on-surface font-serif italic text-2xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
