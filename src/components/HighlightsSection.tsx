"use client";

import Image from "next/image";

import {
  landscapeSectionImagesHomePage,
  landscapeTitle2,
  landscapeDescription2,
  landscapeTitle3,
  landscapeDescription3,
} from "@/data/amenitiesData";
import LandscapeSection from "./LandscapeSection";

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
      <section className="py-16 px-4 md:px-20 space-y-24">
        {sections.map((section, index) => {
          const imageFirst = !section.contentLeft;

          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {imageFirst && (
                <div>
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover shadow-md w-full"
                  />
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 pb-4">
                  {section.title}
                </h3>
                <ul className="space-y-1">
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
                      <div key={i} className="text-gray-600 text-[16px]">
                        {item}
                      </div>
                    );
                  })}
                </ul>
              </div>

              {!imageFirst && (
                <div>
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover shadow-md w-full"
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>

      <LandscapeSection />
    </>
  );
}
