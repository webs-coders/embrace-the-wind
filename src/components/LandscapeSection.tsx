"use client";

import Image from "next/image";
import {
  landscapeImage,
  landscapeImage1,
  landscapeImage2,

  landscapeFeatures2,
  landscapeFeatures3,
} from "@/data/amenitiesData";

const LandscapeSection = () => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-20 space-y-24">
      <div className="mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div>
            <Image
              src={landscapeImage1}
              alt="Landscape Plan"
              width={550}
              height={500}
              className="rounded-2xl h-[340px]"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 pb-2 pt-8">
              Dedicated Lifts for Every Wing
            </h2>
            <ul className="space-y-1">
              {landscapeFeatures2.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-3 bg-color-light-orange rounded-full shrink-0" />
                  <span className="text-[18px] text-black leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <Image
              src={landscapeImage2}
              alt="Landscape Render"
              width={550}
              height={500}
              className="rounded-2xl h-[340px]"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 pb-2 pt-8">
              Freedom to Park, Freely
            </h2>
            <ul className="space-y-1">
              {landscapeFeatures3.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-3 bg-color-light-orange rounded-full shrink-0" />
                  <span className="text-[18px] text-black leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandscapeSection;
