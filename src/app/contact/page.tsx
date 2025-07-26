"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import ContactSection from "@/components/ContactSection";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section className="relative w-full h-[70vh] sm:h-[70vh] md:h-[100vh] bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_02.jpg')]">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold leading-snug drop-shadow-md">
            Get in Touch with Embrace The Wind
          </h1>
        </div>
      </section>
      <ContactSection />
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
