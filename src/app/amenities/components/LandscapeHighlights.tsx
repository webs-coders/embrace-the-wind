"use client";

import Image from "next/image";
import { landscapeFeatures, landscapeImage } from "@/data/amenitiesData";

const LandscapeHighlights = () => {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center sm:text-left">
          Breathe in Beauty. Walk Through Wonder.
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Features List */}
          <ul className="flex-1 space-y-5">
            {landscapeFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-color-light-orange rounded-full shrink-0" />
                <span className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={landscapeImage}
                alt="Landscape Highlights"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandscapeHighlights;
