"use client";

export default function LocationHero() {
  return (
    <section className="relative h-[70vh] sm:h-[70vh] md:h-[100vh] bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_19.jpg')]">
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl md:text-5xl font-extrabold font-playfair">
          A Lifestyle Landmark
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          In the heart of Gandhinagar with everything just moments away.
        </p>
      </div>
    </section> 
  );
}
