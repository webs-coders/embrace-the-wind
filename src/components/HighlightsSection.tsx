"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  landscapeSectionImages,
  landscapeTitle,
  landscapeDescription,
  landscapeTitle1,
  landscapeDescription1,
  landscapeFeatures,
  landscapeImage,
} from "@/data/amenitiesData";

const fadeInFrom = (direction: "left" | "right") => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
});

export default function HighlightsSection() {
  const sections = [
    {
      title: landscapeTitle[0],
      descriptions: landscapeDescription,
      image: landscapeSectionImages.planImage,
      contentLeft: true,
    },
    {
      title: landscapeTitle1[0],
      descriptions: landscapeDescription1,
      image: landscapeSectionImages.renderImage,
      contentLeft: false,
    },
    {
      title: "Landscape Features",
      descriptions: landscapeFeatures,
      image: landscapeImage,
      isList: true,
      contentLeft: true,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-20 space-y-24 bg-white">
      {sections.map((section, index) => {
        const imageFirst = !section.contentLeft;

        return (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            {imageFirst && (
              <motion.div {...fadeInFrom("left")}>
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full object-cover shadow-md"
                />
              </motion.div>
            )}

            {/* Text or List */}
            <motion.div
              className="space-y-4"
              {...fadeInFrom(imageFirst ? "right" : "left")}
            >
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              {section.isList ? (
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                  {section.descriptions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                section.descriptions.map((para: string, i: number) => (
                  <p key={i} className="text-gray-600 text-lg">
                    {para}
                  </p>
                ))
              )}
            </motion.div>

            {/* Image (if contentLeft) */}
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
  );
}
