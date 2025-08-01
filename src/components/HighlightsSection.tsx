"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  landscapeSectionImagesHomePage,
  landscapeTitle2,
  landscapeDescription2,
  landscapeTitle3,
  landscapeDescription3,
} from "@/data/amenitiesData";
import LandscapeSection from "./LandscapeSection";

const fadeInFrom = (direction: "left" | "right") => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
});

export default function HighlightsSection() {
  const sections = [
    {
      title: landscapeTitle2[0],
      descriptions: landscapeDescription2,
      image: landscapeSectionImagesHomePage.planImage,
      contentLeft: true,
    },
    {
      title: landscapeTitle3[0],
      descriptions: landscapeDescription3,
      image: landscapeSectionImagesHomePage.renderImage,
      contentLeft: false,
    },
  ];

  return (
    <>
      <section className="py-20 px-4 md:px-20 space-y-24">
        {sections.map((section, index) => {
          const imageFirst = !section.contentLeft;

          return (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {imageFirst && (
                <motion.div {...fadeInFrom("left")}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover shadow-md"
                  />
                </motion.div>
              )}
              <motion.div
                className="space-y-4"
                {...fadeInFrom(imageFirst ? "right" : "left")}
              >
                <h2 className="text-3xl font-bold text-gray-900 pb-6">
                  {section.title}
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    {section.descriptions.map((item, i) => {
                      const isTitle = item.startsWith("- ");
                      return isTitle ? (
                        <div
                          key={i}
                          className="font-bold text-gray-800 text-lg"
                        >
                          {item.replace("- ", "")}
                        </div>
                      ) : (
                        <div key={i} className="pb-4 text-[18px]">
                          {item}
                        </div>
                      );
                    })}
                  </ul>
                </ul>
              </motion.div>
              {!imageFirst && (
                <motion.div {...fadeInFrom("right")}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-2xl w-full object-cover shadow-md"
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </section>
      <LandscapeSection />
    </>
  );
}
