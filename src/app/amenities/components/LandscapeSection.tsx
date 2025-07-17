"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { landscapeSectionImages, landscapeTitle, landscapeDescription, landscapeTitle1, landscapeDescription1 } from "@/data/amenitiesData";

const LandscapeSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side (Image + Text) - slide from left */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={landscapeSectionImages.planImage}
              alt="Landscape Plan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="text-center lg:text-left space-y-4">
            {landscapeTitle.map((title, idx) => (
              <p key={idx} className="text-gray-600 text-base font-bold md:text-lg leading-relaxed">
                {title}
              </p>
            ))}
          </div>

          <div className="text-center lg:text-left space-y-4">
            {landscapeDescription.map((para, idx) => (
              <p key={idx} className="text-gray-600 text-base md:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right Side (Landscape Render) - slide from right */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="rounded-[2rem] overflow-hidden shadow-md border border-gray-200">
            <Image
              src={landscapeSectionImages.renderImage}
              alt="Landscape Render"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="text-center lg:text-left space-y-4 mt-6">
            {landscapeTitle1.map((title, idx) => (
              <p key={idx} className="text-gray-600 text-base font-bold md:text-lg leading-relaxed">
                {title}
              </p>
            ))}
          </div>
          
          <div className="text-center lg:text-left space-y-4 mt-4">
            {landscapeDescription1.map((para, idx) => (
              <p key={idx} className="text-gray-600 text-base md:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandscapeSection;
