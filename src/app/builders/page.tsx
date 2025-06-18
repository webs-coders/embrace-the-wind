"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import BuildersSection from "@/components/BuildersSection";

export default function BuildersPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/your-hero-image.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Builders
          </h1>
        </div>
      </section>
      <BuildersSection />
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
