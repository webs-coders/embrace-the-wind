"use client";
import { Building, Zap, Waves, Shield, Wifi, Wind } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const KeyFeatures = () => {
  const features = [
    {
      icon: Building,
      title: "Premium Construction",
      desc: "RCC earthquake resistant design",
    },
    {
      icon: Zap,
      title: "Power Backup",
      desc: "24x7 uninterrupted power",
    },
    {
      icon: Waves,
      title: "Water Security",
      desc: "Full-day treated water supply",
    },
    {
      icon: Shield,
      title: "Smart Security",
      desc: "AI surveillance + VDP",
    },
    {
      icon: Wifi,
      title: "High-Speed Net",
      desc: "Fiber-optic infra ready",
    },
    {
      icon: Wind,
      title: "Cooling Comfort",
      desc: "Efficient HVAC enabled",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-800 to-blue-900 text-white p-8 rounded-3xl shadow-2xl">
      <h3 className="text-center font-playfair text-3xl font-bold mb-10 text-gold-300">
        Key Features
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
