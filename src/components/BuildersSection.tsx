"use client";
import React from "react";
import { builders } from "../data/buildersData";

const BuildersSection = () => {
  return (
    <section className="text-black bg-white">
      {builders.map((builder) => (
        <div
          key={builder.name}
          className={`py-16 px-4 md:px-16 ${
            builder.dark ? "bg-zinc-900 text-white" : "bg-white text-black"
          }`}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img src={builder.logo} alt={builder.name} className="max-h-24" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">{builder.name}</h3>
              <div className="h-1 w-12 bg-yellow-500 mb-4"></div>
              <p className="text-lg leading-relaxed">{builder.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BuildersSection;
