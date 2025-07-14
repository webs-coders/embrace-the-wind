"use client";
import { commercialBrands } from "@/data/locationPageData";
import { Card, CardHeader } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";

export default function CommercialSpaces() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-navy mb-4">Commercial Frontage</h2>
        <p className="text-gray-600 mb-12">Ground floor shops by top brands</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {commercialBrands.map((brand, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 p-4">
              <CardHeader className="flex flex-col items-center">
                <div className="w-12 h-12 bg-color-light-orange rounded-lg flex items-center justify-center mb-2">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-sm font-medium text-navy">{brand}</h4>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
