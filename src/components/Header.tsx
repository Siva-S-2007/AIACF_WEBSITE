import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Council', href: '#council' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Chit Insights', href: '#chit-insights' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Regulation', href: '#regulation' },
    { label: 'State Offices', href: '#state-offices' },
    { label: 'Media', href: '#media' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91-11-2345-6789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@aiacf.org</span>
            </div>
          </div>
          <div className="hidden md:block text-slate-300">
            Empowering Financial Inclusion Since 1971
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">AIACF</h1>
                <p className="text-xs text-slate-600 leading-none">All India Association For Chit Funds</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-slate-200`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;