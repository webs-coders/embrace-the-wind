'use client';
import React from "react";
import { socialMediaLinks, callButton } from "@/data/socialLinks";

const SocialSidebar: React.FC = () => {
  return (
    <>
      {/* Social Media Icons - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {socialMediaLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-color-orange hover:scale-110 transition-all duration-300 group"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
        ))}
      </div>

      {/* Phone Call Button - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={callButton.href}
          className="w-14 h-14 bg-color-orange rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label={callButton.label}
        >
          <callButton.icon className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default SocialSidebar;
