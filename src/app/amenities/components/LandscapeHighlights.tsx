"use client";

import { landscapeFeatures } from "@/data/amenitiesData";

const LandscapeHighlights = () => {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Landscape Design Highlights
        </h2>

        <div className="flex justify-between items-center">
          <ul className="space-y-4">
            {landscapeFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="w-1/2">
            <img src="/images/EMBRACETHEWIND1.jpg" alt="EMBRACETHEWIND1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandscapeHighlights;
