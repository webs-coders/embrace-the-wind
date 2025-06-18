import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building, Home, Waves, Shield, Zap, Wifi, Wind } from "lucide-react";
import specificationsData from "../data/specificationsData"; // externalized data file

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
    <div className="w-14 h-14 mx-auto flex items-center justify-center bg-white/20 rounded-full mb-4">
      <Icon className="text-white w-6 h-6" />
    </div>
    <h4 className="text-white text-lg font-semibold">{title}</h4>
    <p className="text-white/70 text-sm">{desc}</p>
  </div>
);

const SpecificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="specifications"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-20"
    >
      {/* Header */}
      <div className="relative mb-20">
          <Image
            src="/images/EMBRACETHEWIND1.jpg"
            alt="Specifications Banner"
            fill
            className="absolute object-cover z-0 brightness-50"
          />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center text-white">
          <h1
            className={`text-5xl md:text-6xl font-extrabold font-playfair transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Modern Specifications
          </h1>
          <p
            className={`mt-4 max-w-2xl mx-auto text-lg text-white/80 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            Designed for elegance. Engineered for tomorrow.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Image */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="sticky top-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">
                <Image
                  src="/images/EMBRACETHEWIND1.jpg"
                  alt="Exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 text-white space-y-2">
                  <h3 className="text-xl font-semibold">
                    High-rise living reimagined
                  </h3>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Building size={16} /> B+G+18 Floors
                    </span>
                    <span className="flex items-center gap-1">
                      <Home size={16} /> 48 Units
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-16">
            {Object.entries(specificationsData.primary).map(
              ([title, items]) => (
                <div
                  key={title}
                  className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white font-bold text-xl font-playfair">
                    {title}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-6">
                    {items.map(({ item, details }, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-slate-700 dark:text-slate-200"
                      >
                        <span className="font-medium block">{item}</span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {details}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}

            {/* Additional Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(specificationsData.additional).map(
                ([title, items]) => (
                  <div
                    key={title}
                    className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md"
                  >
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                      {title}
                    </h4>
                    <ul className="space-y-3">
                      {items.map(({ item, details }, idx) => (
                        <li key={idx}>
                          <strong className="block text-slate-700 dark:text-slate-200">
                            {item}
                          </strong>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">
                            {details}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-indigo-800 to-blue-900 text-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-center font-playfair text-3xl font-bold mb-10 text-gold-300">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
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
                ].map((feature, i) => (
                  <FeatureCard key={i} {...feature} />
                ))}
              </div>
            </div>

            {/* Brochure CTA */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-center p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-white font-playfair mb-4">
                Want Full Specs?
              </h3>
              <p className="text-white/90 mb-6">
                Download the official brochure with layouts, plans, and tech
                specs.
              </p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Bubbles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-300 rounded-full blur-2xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-30" />
    </section>
  );
};

export default SpecificationsSection;
