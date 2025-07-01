"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import Footer from "@/components/Footer";
import { mainAmenities, detailedAmenities, landscapeFeatures } from "@/data/amenitiesData";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";


export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/images/EMBRACETHEWIND1.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">Amenities</h1>
        </div>
      </section>

      {/* Main Amenities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="bg-yellow-100 text-yellow-800 mb-4">Main Amenities</h2>
            <h2 className="text-3xl font-bold text-navy mb-6">Wellness, Fitness & Fun</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainAmenities.map((item, index) => (
              <Card key={index} shadow="md" className="hover:shadow-xl transition-all">
                <CardHeader className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                    <item.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <Chip color="warning" variant="flat">{item.category}</Chip>
                </CardHeader>
                <CardBody className="text-center">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Amenities List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-6">Detailed Amenities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedAmenities.map((amenity) => (
              <Card key={amenity.id} shadow="sm" className="p-4 hover:shadow-lg">
                <CardBody>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 text-xs font-bold">
                      {amenity.id}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{amenity.name}</h4>
                      <p className="text-gray-500 text-sm">{amenity.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Features */}
      <section className="py-20 bg-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Landscape Design Highlights</h2>
          <ul className="space-y-4">
            {landscapeFeatures.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                <span className="">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Amenities Gallery */}
      <AmenitiesGallery />

      <Footer />
      <SocialSidebar />
    </div>
  );
}
