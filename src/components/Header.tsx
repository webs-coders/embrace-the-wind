"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navItems, contactInfo } from "@/data/headerData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = isScrolled
    ? "text-[#1A1A1A] hover:text-[#FF6A00]"
    : "text-white hover:text-[#FF8C00]";

  const underlineColor = isScrolled ? "bg-[#FF6A00]" : "bg-[#FF8C00]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Top Row */}
      <div className="container mx-auto px-4 flex items-center justify-between py-2 lg:py-3">
        <Link href="/">
          <Image
            src={isScrolled ? "/New-Logo.png" : "/New-White-Logo.png"}
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-[#FF6A00]" />
            <a href={contactInfo.phone.href} className={`text-sm font-medium ${linkColor}`}>
              {contactInfo.phone.label}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#FF6A00]" />
            <a href={contactInfo.email.href} className={`text-sm font-medium ${linkColor}`}>
              {contactInfo.email.label}
            </a>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-[#FF6A00] text-white hover:scale-105 shadow-md hover:bg-[#FF8C00]"
                : "bg-white/10 border border-white/30 text-white hover:bg-[#FF6A00]"
            }`}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full ${
              isScrolled ? "bg-gray-100" : "bg-white/10"
            }`}
          >
            {isMenuOpen ? (
              <X className={`w-5 h-5 ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="container mx-auto px-4 lg:px-12 py-2 hidden lg:flex justify-end space-x-8">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`relative text-xs font-semibold uppercase tracking-widest ${linkColor} group`}
          >
            {label}
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${underlineColor}`}
            />
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <div className="space-y-4 px-4 py-6">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#1A1A1A] font-semibold hover:text-[#FF6A00]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
