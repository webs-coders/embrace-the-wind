"use client";
import { nearbyPlaces } from "@/data/locationPageData";
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";

export default function NearbyLandmarks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-navy mb-4">Nearby Landmarks</h2>
        <p className="text-gray-600 mb-12">Everything is just minutes away</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {nearbyPlaces.map((place, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="w-16 h-16 bg-color-light-orange rounded-full flex items-center justify-center mb-4" />
                <Chip color="warning" variant="bordered" className="mb-1">
                  {place.type}
                </Chip>
              </CardHeader>
              <CardBody>
                <h4 className="font-semibold text-navy">{place.name}</h4>
                <p className="text-sm text-color-orange">{place.distance}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
