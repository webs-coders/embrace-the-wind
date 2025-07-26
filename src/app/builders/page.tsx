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
      <section className="relative w-full h-[70vh] sm:h-[70vh] md:h-[100vh] bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_30.jpg')]">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Two Legacies. One Vision
          </h1>
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
 