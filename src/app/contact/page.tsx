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
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center bg-[url('/images/innerbanner-contact.jpg')]">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug drop-shadow-md">
            Get in Touch with <br className="hidden sm:block" /> Embrace The
            Wind
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
