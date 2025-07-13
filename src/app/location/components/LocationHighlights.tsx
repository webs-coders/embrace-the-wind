"use client";
import { locationHighlights } from "@/data/locationPageData";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { MapPin } from "lucide-react";

export default function LocationHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-navy mb-16">Location Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locationHighlights.map((highlight, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 p-6">
              <CardHeader className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-navy">{highlight.title}</h4>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 text-left">{highlight.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
