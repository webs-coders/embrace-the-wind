"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import BuildersSection from "@/components/BuildersSection";

export default function BuildersPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[70vh] md:h-[100vh] bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_17.jpg')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold drop-shadow-xl leading-tight max-w-4xl">
            Two Legacies. One Vision
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Crafted by trusted builders known for quality, innovation, and timely delivery.
          </p>
        </div>
      </section>

      {/* Builders Section */}
      <main className="flex-1">
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <BuildersSection />
        </section>
        <AmenitiesGallery />
      </main>

      {/* Footer & Sidebar */}
      <Footer />
      <SocialSidebar />
    </div>
  );
}
 