'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';


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
    { label: 'Overview', href: '#overview' },
    { label: 'Specifications', href: '/specifications', isPage: true },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Floor Plans', href: '#floor-plans' },
    { label: 'Location', href: '#location' },
    { label: 'Builders', href: '#builders' },
    { label: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md  shadow-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 xl:px-12">
        <div className="flex item-center justify-between py-3 lg:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Embrace The Wind"
              className="h-10 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map(({ label, href, isPage }) =>
              isPage ? (
                <Link
                  key={label}
                  href={href}
                  className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-yellow-600'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      isScrolled ? 'bg-yellow-600' : 'bg-yellow-300'
                    }`}
                  ></span>
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-yellow-600'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      isScrolled ? 'bg-yellow-600' : 'bg-yellow-300'
                    }`}
                  ></span>
                </a>
              )
            )}
          </nav>

          {/* Contact + CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="hidden xl:flex items-center space-x-5">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-600" />
                <a
                  href="tel:+919797976577"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-yellow-600'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  +91 9797976577
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-600" />
                <a
                  href="mailto:Embracethewind33@gmail.com"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-yellow-600'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  Embracethewind33@gmail.com
                </a>
              </div>
            </div>

            <a
              href="#contact-us"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
                  : 'bg-white/10 border border-white/30 text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isScrolled
                ? 'bg-gray-100 hover:bg-gray-200'
                : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`w-5 h-5 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-5 h-5 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-md">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="space-y-4">
              {navItems.map(({ label, href, isPage }, index) =>
                isPage ? (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-800 text-base font-semibold hover:text-yellow-600 transition duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-800 text-base font-semibold hover:text-yellow-600 transition duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {label}
                  </a>
                )
              )}
            </nav>

            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-600" />
                <a
                  href="tel:+919797976577"
                  className="text-base font-medium text-gray-800 hover:text-yellow-600"
                >
                  +91 9797976577
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-600" />
                <a
                  href="mailto:Embracethewind33@gmail.com"
                  className="text-base font-medium text-gray-800 hover:text-yellow-600"
                >
                  Embracethewind33@gmail.com
                </a>
              </div>
              <a
                href="#contact-us"
                className="block w-full text-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 rounded-full font-semibold text-base hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
