"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
     <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/images/EMBRACETHEWIND3.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Location
          </h1>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Map */}
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.3439257996515!2d72.61613147509716!3d23.19413357905394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b88c9293683%3A0x76f11a7d3831f354!2sEmbrace%20The%20Wind!5e0!3m2!1sen!2sin!4v1750259842747!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-md border-2 border-gray-200"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Custom Map or Static Map Image */}
          <div className="w-full h-[400px]">
            <img
              src="/images/static-map.png"
              alt="Custom location map"
              className="w-full h-full object-cover rounded-md border-2 border-gray-200"
            />
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
