"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { navigationLinks, contactDetails, socialLinks } from "@/data/footerData";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top Gold Line */}
      <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-3">
        {/* Column 1: Project Info */}
        <div className="space-y-6 m-auto">
          <div>
            <h2 className="text-3xl font-bold font-playfair text-white mb-2">
              Embrace The Wind
              <span className="ml-2 inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
            </h2>
            <p className="text-sm font-medium tracking-widest text-white/70">
              THE CLASSIC RESIDENCE
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg text-[#FF6A00] mb-2">SITE ADDRESS</h3>
            <div className="flex items-start justify-center md:justify-start space-x-3">
              <MapPin className="w-5 h-5 text-[#FF6A00] mt-1 flex-shrink-0" />
              <p className="text-white/80 text-sm whitespace-pre-line">{contactDetails.address}</p>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-6 m-auto">
          <h3 className="font-bold text-lg text-[#FF6A00] mb-2">LINKS</h3>
          <nav className="flex flex-col items-center md:items-start space-y-2">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/80 hover:text-[#FF6A00] transition text-sm"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-6 m-auto">
          <h3 className="font-bold text-lg text-[#FF6A00] mb-2">CALL US</h3>

          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start space-x-4 group">
            <div className="w-10 h-10 bg-[#FF6A00]/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6A00]/30 transition">
              <Phone className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <a href={`tel:${contactDetails.phone}`} className="text-white hover:text-[#FF6A00] text-sm font-semibold">
              {contactDetails.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-start space-x-4 group">
            <div className="w-10 h-10 bg-[#FF6A00]/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6A00]/30 transition">
              <Mail className="w-5 h-5 text-[#FF6A00]" />
            </div>
            <a href={`mailto:${contactDetails.email}`} className="text-white hover:text-[#FF6A00] text-sm font-semibold">
              {contactDetails.email}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#FF6A00] hover:scale-110 transition"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-white/60">
          © 2025 Embrace The Wind | Designed by{" "}
          <a href="https://infinitydesignhub.com/" className="text-[#FF6A00] font-semibold">
            Infinity Design Hub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
