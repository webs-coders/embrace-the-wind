"use client";

import React from "react";
import Image from "next/image";
import { builders, project, architect } from "@/data/buildersData";

const BuilderCard = ({
  name,
  logo,
  description,
  description1,
  dark,
  index,
}: (typeof builders)[number] & { index: number }) => {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } gap-8 p-8 rounded-3xl transition-all duration-300 shadow-xl ${
        dark ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-center md:justify-center w-full md:w-1/3">
        <Image
          src={logo}
          alt={name}
          width={180}
          height={100}
          className="object-contain h-auto w-auto"
        />
      </div>
      <div className="flex flex-col justify-center md:w-2/3">
        <h3 className="text-3xl font-semibold mb-3">{name}</h3>
        <div className="h-1 w-14 bg-color-orange mb-4"></div>
        <p className="text-base md:text-lg leading-relaxed mb-3">
          {description}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-opacity-90">
          {description1}
        </p>
      </div>
    </div>
  );
};

const EmbraceTheWindHighlight = () => (
  <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white via-zinc-50 to-white text-black">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-4">{project.title}</h2>
      <div className="h-1 w-14 mx-auto bg-color-orange mb-6"></div>
      <p className="text-lg leading-relaxed">{project.description}</p>
    </div>
  </section>
);

const ArchitectHighlight = () => (
  <section className="py-20 px-6 md:px-16 bg-zinc-100 text-black">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-4">{architect.title}</h2>
      <div className="h-1 w-14 mx-auto bg-color-orange mb-6"></div>
      <p className="text-lg leading-relaxed mb-3">{architect.description}</p>
      <p className="text-lg leading-relaxed mb-3">{architect.description1}</p>
      <p className="text-xl font-medium italic mt-6">
        &quot;{architect.caption}&quot;
      </p>
    </div>
  </section>
);

export default function BuildersPage() {
  return (
    <section className="space-y-16 py-10 px-4 md:px-16 bg-[#f9f9f9]">
      {builders.map((builder, index) => (
        <BuilderCard key={index} {...builder} index={index} />
      ))}

      <EmbraceTheWindHighlight />
      <ArchitectHighlight />
    </section>
  );
}
