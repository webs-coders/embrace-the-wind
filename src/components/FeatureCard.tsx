"use client";

import React from "react";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center shadow-lg hover:scale-105 transition-transform">
      <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white/20 rounded-full mb-4">
        <Icon className="text-white w-6 h-6" />
      </div>
      <h4 className="text-white text-lg font-semibold">{title}</h4>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  );
};

export default FeatureCard;
