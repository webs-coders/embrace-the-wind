"use client";

import { mainAmenities } from "@/data/amenitiesData";
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

const MainAmenitiesGrid = () => {
  return (
    <section className="py-20 bg-[url('/images/overview-bg.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Wellness, Fitness & Fun</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainAmenities.map((item, index) => (
            <Card key={index} shadow="md" className="bg-slate-800 text-white hover:scale-105 transition-transform">
              <CardHeader className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FF6A00] rounded-full flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-slate-900" />
                </div>
                <Chip color="warning" variant="flat">{item.category}</Chip>
              </CardHeader>
              <CardBody className="text-center">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainAmenitiesGrid;
