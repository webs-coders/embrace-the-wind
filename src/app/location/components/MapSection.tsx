"use client";

import Image from "next/image";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export default function MapSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <GoogleMapEmbed />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl relative w-full h-[400px]">
          <Image
            src="/images/7.jpg"
            alt="Custom Map"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
