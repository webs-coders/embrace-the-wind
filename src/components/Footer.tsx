import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

const Footer: React.FC = () => {
  const navigationLinks = [
    { title: 'Overview', href: '#overview' },
    { title: 'Specifications', href: '#specifications' },
    { title: 'Amenities', href: '#amenities' },
    { title: 'Floor Plans', href: '#floor-plans' },
    { title: 'Location', href: '#location' },
    { title: 'Builders', href: '#builders' },
    { title: 'Contact Us', href: '#contact' },
  ];

  const approvalLogos = [
    {
      name: 'CREDAI',
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=60',
      alt: 'CREDAI Approved',
    },
    {
      name: 'NPR',
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=60',
      alt: 'NPR Certified',
    },
    {
      name: 'WBRERA',
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=60',
      alt: 'WBRERA Registered',
    },
  ];

  const bankLogos = [
    {
      name: 'ICICI Bank',
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=50',
      alt: 'ICICI Bank',
    },
    {
      name: 'Axis Bank',
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=50',
      alt: 'Axis Bank',
    },
    {
      name: 'Yes Bank',
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=50',
      alt: 'Yes Bank',
    },
    {
      name: 'Kotak Bank',
      src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=50',
      alt: 'Kotak Bank',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold-400 rounded-full"></div>
      </div>

      {/* Golden line */}
      <div className="w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold font-playfair text-white mb-2">
                Embrace The Wind
                <span className="ml-2 inline-block w-2 h-2 bg-gold-400 rounded-full"></span>
              </h2>
              <p className="text-sm font-medium tracking-widest text-white/70">
                THE CLASSIC RESIDENCE
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-bold text-lg text-gold-400 mb-4">
                SITE ADDRESS
              </h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-white/80 leading-relaxed text-sm">
                  Embrace The Wind, B/h McDonald&apos;s On S.G. Highway,<br />
                  Sargasan Cross Road, Sargasan,<br />
                  Gandhinagar - 382421.
                </p>
              </div>
            </div>

            {/* Approval Logos */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                Project Approved By
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {approvalLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition"
                  >
                    <div className="w-full h-12 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {logo.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banks */}
            <div>
              <h4 className="font-semibold text-white mb-4">
                Project Financed by and Mortgaged to Bajaj Housing Finance Ltd.
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {bankLogos.map((bank, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition"
                  >
                    <div className="w-full h-8 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {bank.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RERA */}
            <div className="text-xs text-white/60">
              RERA Registration Number: WBRERA/P/KOL/2023/000146
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-gold-400 mb-6">LINKS</h3>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/80 hover:text-gold-400 hover:translate-x-2 transition text-sm"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 & 4: Contact */}
          <div className="md:col-span-1 lg:col-span-2 space-y-6">
            <h3 className="font-bold text-lg text-gold-400 mb-6">CALL US</h3>

            {/* Phone */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition">
                <Phone className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Call Now</p>
                <a
                  href="tel:+919797976577"
                  className="text-xl font-bold text-white hover:text-gold-400 transition"
                >
                  +91 9797976577
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition">
                <Mail className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Email Us</p>
                <a
                  href="mailto:Embracethewind33@gmail.com"
                  className="text-xl font-bold text-white hover:text-gold-400 transition"
                >
                  Embracethewind33@gmail.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-6">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:scale-110 transition"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center">
              © 2025 Embrace The Wind | All rights reserved
            </p>
            <p className="text-white/60 text-sm text-center">
              Designed by{' '}
              <a
                href="https://infinitydesignhub.com/"
                className="text-gold-400 font-semibold"
              >
                infinitydesignhub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
