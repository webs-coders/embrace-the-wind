"use client";

import Image from "next/image";
import Link from "next/link";

export default function FloorPlansSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center py-3">Floor Plans</h2>
         <div className="text-center text-sm text-gray-700">
            <p className="pb-3">Ground Floor</p>
          </div>
          <div className="overflow-auto w-full mx-auto">
            <Image
              src="/floor/floor10.jpg"
              alt="floor10"
              width={800}
              height={500}
              className="transform m-auto"
            />
         
          </div>
        <div className="text-center pt-3">
          <Link
            href="/floor-plans"
            className="inline-flex items-center gap-1 rounded-md px-4 py-2 bg-color-light-orange text-white hover:scale-105 shadow-md hover:bg-color-orange"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
