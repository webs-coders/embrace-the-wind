"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  landscapeImage,
  landscapeImage1,
  landscapeFeatures3,
  landscapeFeatures2,
} from "@/data/amenitiesData";

const LandscapeSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 space-y-24">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="">
            <Image
              src={landscapeImage}
              alt="Landscape Plan"
             width={600}
             height={500}
              className="rounded-2xl object-cover shadow-md"
            />
          </div>
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 pb-6 pt-4">
              Dedicated Lifts for Every Wing
            </h2>
          </div>

          <div className="text-center lg:text-left space-y-4">
            <ul className="flex-1 space-y-5">
              {landscapeFeatures2.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-3 mr-4 bg-color-light-orange rounded-full shrink-0" />
                  <span className="text-[18px] text-black leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
         <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="">
            <Image
               src={landscapeImage1}
              alt="Landscape Render"
             width={600}
             height={500}
              className="rounded-2xl object-cover shadow-md"
            />
          </div>
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 pb-6 pt-4">
              Freedom to Park, Freelys
            </h2>
          </div>

          <div className="text-center lg:text-left space-y-4">
            <ul className="flex-1 space-y-5">
              {landscapeFeatures3.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-3 mr-4 bg-color-light-orange rounded-full shrink-0" />
                  <span className="text-[18px] text-black leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandscapeSection;
