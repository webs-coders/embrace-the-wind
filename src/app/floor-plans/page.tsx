"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import Footer from "@/components/Footer";

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/images/EMBRACETHEWIND2.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
           Floor Plan
          </h1>
        </div>
      </section>

      {/* Play Area Section */}
      <section className="relative w-full h-[60vh] bg-gray-100 flex items-center justify-center px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="h-[300px] bg-gray-300 rounded-xl shadow-lg flex items-center justify-center text-xl font-semibold text-gray-700">
            {/* Left side image placeholder */}
            Play Area Image
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">PLAY HARD</h2>
            <p className="text-gray-600">
              Enjoy world-class indoor recreational zones including a pool
              table, table tennis, and more – perfect for fitness and fun.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Gallery */}
      <AmenitiesGallery />

      <Footer />
      <SocialSidebar />
    </div>
  );
}
