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
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/images/innerbanner-contact.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Get in Touch with Embrace The Wind
          </h1>
        </div>
      </section>
      <ContactSection/>
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
