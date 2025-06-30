"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/images/EMBRACETHEWIND3.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Location
          </h1>
        </div>
      </section>
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[400px]">
            <GoogleMapEmbed />
          </div>
          <div className="w-full h-[400px]">
            <img
              src="/images/static-map.png"
              alt="Custom location map"
              className="w-full h-full object-cover rounded-md border-2 border-gray-200"
            />
          </div>
        </div>
      </section>
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
