"use client";

import { motion } from "framer-motion";

import specificationsData from "@/data/specificationsData";
import TimelineItem from "./TimelineItem";
import BrochureCTA from "@/components/BrochureCTA";
import SpacificationHero from "./SpacificationHero";

export default function SpecificationsSection() {
  return (
    <>
      <SpacificationHero isVisible={true} />
      <section id="specifications" className="py-24 bg-[#ffffff]">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-center text-color-orange mb-20"
          >
            Specifications
          </motion.h2>

          <div className="relative mx-auto max-w-6xl">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full border-l-2 border-color-orange z-0" />

            <div className="flex flex-col items-center">
              {specificationsData.map((spec, index) => (
                <TimelineItem key={index} spec={spec} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-24">
            <BrochureCTA />
          </div>
        </div>
      </section>
    </>
  );
}
