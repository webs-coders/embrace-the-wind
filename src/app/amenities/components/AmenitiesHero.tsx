"use client";

const AmenitiesHero = () => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full bg-cover bg-center bg-no-repeat bg-[url('/images/EMBRACETHEWIND1.jpg')]">
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-xl leading-tight max-w-4xl">
          World-Class Amenities Under One Roof
        </h1>
      </div>
    </section>
  );
};

export default AmenitiesHero;