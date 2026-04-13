import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Water drops SVG logo mark */}
              <svg width="40" height="40" viewBox="0 0 100 100" className="transition-transform duration-300 group-hover:scale-105">
                <defs>
                  <linearGradient id="dropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4FC3F7" />
                    <stop offset="100%" stopColor="#1DA1F2" />
                  </linearGradient>
                </defs>
                <path d="M50 10 C50 10, 20 50, 20 65 C20 82, 33 95, 50 95 C67 95, 80 82, 80 65 C80 50, 50 10, 50 10Z" fill="url(#dropGrad)" />
                <ellipse cx="38" cy="55" rx="6" ry="10" fill="white" opacity="0.3" transform="rotate(-15 38 55)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-extrabold leading-none tracking-tight font-[family-name:var(--font-display)] transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Mayan Plumbing
              </span>
              <span className="text-xs font-semibold text-[#4FC3F7] leading-none mt-1 tracking-wider uppercase">
                Inc.
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors text-sm tracking-wide ${
                  isScrolled
                    ? 'text-slate-600 hover:text-[#1DA1F2]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+16478038974"
              className="hidden md:flex items-center gap-2 bg-[#1DA1F2] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#0C87D4] transition-all text-sm shadow-lg shadow-[#1DA1F2]/20 hover:shadow-[#1DA1F2]/30"
            >
              <Phone size={16} />
              <span>647-803-8974</span>
            </a>

            {/* Mobile phone icon */}
            <a
              href="tel:+16478038974"
              className="md:hidden p-2 bg-[#1DA1F2] text-white rounded-lg"
              aria-label="Call Mayan Plumbing"
            >
              <Phone size={20} />
            </a>
            
            <button
              className={`lg:hidden p-2 transition-colors rounded-lg ${
                isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-[#1DA1F2] hover:bg-[#E8F5FE] rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <a
                  href="tel:+16478038974"
                  className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white px-5 py-3.5 rounded-xl font-bold hover:bg-[#0C87D4] transition-colors w-full"
                >
                  <Phone size={18} />
                  <span>Call 647-803-8974</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
