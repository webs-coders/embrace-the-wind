"use client";

import React from "react";
import { Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { nearbyPlaces, connectivityFeatures } from "@/data/locationData";

const fadeIn = (direction: "left" | "right", delay = 0) => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.3 },
});

export default function LocationSection() {
  return (
    <section className="relative bg-slate-950 text-white px-4 py-24 lg:px-16 overflow-hidden">
      {/* Header */}
      <motion.div
        {...fadeIn("left")}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-gold-100 text-color-orange text-xs font-semibold uppercase">
          Location Advantage
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-playfair font-extrabold leading-tight">
          Discover a{" "}
          <span className="text-color-light-orange">Premium Location</span>
        </h2>
        <p className="mt-4 text-white/70 text-lg">
          At the center of progress. Minutes from business, healthcare, shopping
          & more.
        </p>
      </motion.div>

      {/* Connectivity Highlights */}
      <motion.div {...fadeIn("right")} className="mb-16">
        <h3 className="text-2xl font-bold text-color-light-orange font-playfair mb-6">
          Connectivity Highlights
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectivityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/40 hover:bg-slate-800/60 transition rounded-2xl p-5 shadow-md flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gold-500/10 rounded-full">
                    <Icon className="w-5 h-5 text-color-light-orange" />
                  </div>
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                </div>
                <ul className="pl-2 list-disc text-white/70 text-sm space-y-1">
                  {feature.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Nearby Places */}
      <motion.div {...fadeIn("left", 0.2)}>
        <h3 className="text-2xl font-bold text-color-light-orange font-playfair mb-6">
          Nearby Essentials
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyPlaces.map((place, idx) => {
            const Icon = place.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/30 hover:bg-slate-800/50 p-5 rounded-2xl shadow-sm flex items-start justify-between gap-4 transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gold-500/10 rounded-full group-hover:bg-gold-500/20">
                    <Icon className="w-5 h-5 text-color-light-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{place.name}</p>
                    <p className="text-xs text-white/60">{place.type}</p>
                  </div>
                </div>
                <span className="text-color-light-orange text-sm font-semibold whitespace-nowrap">
                  {place.distance}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
      {/* CTA */}
      <motion.button
        {...fadeIn("right", 0.4)}
        onClick={() =>
          window.open("https://maps.app.goo.gl/RAtgakuaKove6z6b8", "_blank")
        }
        className="mt-12 max-w-xs mx-auto bg-[#f93] hover:from-gold-600 hover:to-gold-700 text-white px-6 py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2 text-sm"
      >
        <Navigation className="w-4 h-4" />
        Get Directions
      </motion.button>
    </section>
  );
}
