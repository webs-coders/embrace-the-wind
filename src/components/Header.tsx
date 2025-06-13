import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
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
    'OVERVIEW',
    'SPECIFICATIONS',
    'AMENITIES',
    'FLOOR PLANS',
    'LOCATION',
    'BUILDERS',
    'CONTACT US'
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
       <div className="flex-shrink-0">
  <img
    src="/logo.svg"
    alt="Embrace The Wind Logo"
    className="h-12 w-auto transition-all duration-300"
  />
</div>


          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-gold-600' 
                    : 'text-white/90 hover:text-gold-300 drop-shadow-sm'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-gold-600' : 'bg-gold-300'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-6">
              <div className="flex items-center space-x-2 group">
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-slate-100 group-hover:bg-gold-50' 
                    : 'bg-white/10 backdrop-blur-sm group-hover:bg-white/20'
                }`}>
                  <Phone className={`w-4 h-4 transition-colors duration-300 ${
                    isScrolled ? 'text-slate-600 group-hover:text-gold-600' : 'text-white'
                  }`} />
                </div>
                <div>
                  <div className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-slate-500' : 'text-white/70'
                  }`}>
                    Call Now
                  </div>
                  <a 
                    href="tel:+911234567890"
                    className={`text-sm font-semibold transition-colors duration-300 hover:scale-105 ${
                      isScrolled ? 'text-slate-700 hover:text-gold-600' : 'text-white hover:text-gold-300'
                    }`}
                  >
                    +91 1234567890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 group">
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-slate-100 group-hover:bg-gold-50' 
                    : 'bg-white/10 backdrop-blur-sm group-hover:bg-white/20'
                }`}>
                  <Mail className={`w-4 h-4 transition-colors duration-300 ${
                    isScrolled ? 'text-slate-600 group-hover:text-gold-600' : 'text-white'
                  }`} />
                </div>
                <div>
                  <div className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-slate-500' : 'text-white/70'
                  }`}>
                    Email Us
                  </div>
                  <a 
                    href="mailto:info@.embracethewind.in"
                    className={`text-sm font-semibold transition-colors duration-300 hover:scale-105 ${
                      isScrolled ? 'text-slate-700 hover:text-gold-600' : 'text-white hover:text-gold-300'
                    }`}
                  >
                    info@.embracethewind.in
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className={`relative overflow-hidden px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
              isScrolled 
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg hover:shadow-gold-500/25' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-slate-900'
            }`}>
              <span className="relative z-10">Enquire Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'bg-slate-100 hover:bg-slate-200' 
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-5 h-5 transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/98 backdrop-blur-lg border-t border-gray-100 shadow-xl">
          <div className="container mx-auto px-4 py-8">
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-slate-700 font-semibold text-lg hover:text-gold-600 transition-all duration-300 hover:translate-x-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-6">
              {/* Mobile Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="p-3 bg-gold-50 rounded-full group-hover:bg-gold-100 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Call Now</div>
                    <a 
                      href="tel:+911234567890"
                      className="text-lg font-semibold text-slate-700 hover:text-gold-600 transition-colors duration-300"
                    >
                      +91 1234567890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="p-3 bg-gold-50 rounded-full group-hover:bg-gold-100 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">Email Us</div>
                    <a 
                      href="mailto:info@.embracethewind.in"
                      className="text-lg font-semibold text-slate-700 hover:text-gold-600 transition-colors duration-300"
                    >
                      info@.embracethewind.in
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Mobile CTA Button */}
              <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;