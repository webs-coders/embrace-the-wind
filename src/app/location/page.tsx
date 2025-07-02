"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import {
  connectivityFeatures,
  nearbyPlaces,
  locationHighlights,
  commercialBrands
} from "@/data/locationData";
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import { MapPin, ShoppingBag } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/images/EMBRACETHEWIND3.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">Location</h1>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[400px]">
            <GoogleMapEmbed />
          </div>
          <div className="w-full h-[400px]">
            <img
              src="/images/7.jpg"
              alt="Custom location map"
              className="w-full h-full object-cover rounded-md border-2 border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Nearby Landmarks</h2>
            <p className="text-lg text-gray-600">Everything you need is just minutes away</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyPlaces.map((place, index) => {
              // const Icon = place.icon as unknown;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#FF6A00] rounded-full flex items-center justify-center mb-4">
                    </div>
                    <Chip color="warning" variant="bordered" className="mb-2">
                      {place.type}
                    </Chip>
                  </CardHeader>
                  <CardBody>
                    <h4 className="font-semibold text-navy mb-2">{place.name}</h4>
                    <p className="text-yellow-500 font-semibold">{place.distance}</p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Location Advantages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locationHighlights.map((highlight, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#FF6A00] rounded-full flex items-center justify-center mt-1">
                    <MapPin className="h-4 w-4 text-yellow-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-navy">{highlight.title}</h4>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Excellent Connectivity</h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience seamless connectivity to all major destinations in and around Gandhinagar and Ahmedabad.
              </p>

              <div className="space-y-6">
                {connectivityFeatures.map((feature, index) => {
                  // const Icon = feature.icon as unknown;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#FF6A00] rounded-full flex items-center justify-center mt-1">
                        {/* <Icon className="text-yellow-500 w-4 h-4" /> */}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                        <ul className="list-disc pl-4 text-gray-300 text-sm">
                          {feature.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
                alt="Highway Connectivity"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Frontage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Commercial Spaces</h2>
            <p className="text-lg text-gray-600">Ground floor commercial spaces with premium brands</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {commercialBrands.map((brand, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#FF6A00] rounded-lg flex items-center justify-center mb-2">
                    <ShoppingBag className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h4 className="font-semibold text-navy text-sm">{brand}</h4>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
