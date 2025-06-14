import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <>
      {/* Social Media Icons - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:scale-110 transition-all duration-300 group"
            aria-label={label}
          >
            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
        ))}
      </div>

      {/* Phone Call Button - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="tel:+919797976577"
          className="w-14 h-14 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default SocialSidebar;