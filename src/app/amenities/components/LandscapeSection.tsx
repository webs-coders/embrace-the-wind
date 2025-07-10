"use client";

import Image from "next/image";

export default function LandscapeSection() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
  
        <div className="lg:w-1/2 space-y-6">
          <div className="relative w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/images/EMBRACETHEWIND1.jpg"
              alt="Landscape Plan"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-serif text-[#B36930] tracking-wide uppercase">
              Landscape
            </h2> */}
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              A nature-inspired haven for every generation.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                From playful zones to peaceful gardens, it invites all ages to connect, unwind, and belong.
              {/* Designed by <span className="font-semibold">Biophilia Design Studio</span> */}
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="rounded-[2rem] overflow-hidden shadow-md border border-gray-200">
            <Image
              src="/images/EMBRACETHEWIND2.jpg"
              alt="Landscape Render"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
