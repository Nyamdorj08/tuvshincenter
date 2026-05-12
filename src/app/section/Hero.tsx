"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center">
      <Image
        src="/newhero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 " />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
        <h1
          className="font-bold text-white leading-tight 
          text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl"
        >
          TUVSHIN CENTER - АВТО СЕРВИС
        </h1>

        <p
          className="mt-4 text-white/80 
          text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto"
        >
          Төмөр хүлгийн тань хүч чадал, өнгө төрхийг технологийн дэвшлээр
          шинэчилнэ. Шинэлэг бүхнийг таны машинд.
        </p>

        <div className="mt-6 flex justify-center">
          {/* <button
            className="
              px-6 py-3 sm:px-8 sm:py-4
              text-sm sm:text-base tracking-[0.15em] uppercase
              text-white
              border border-white/40
              rounded-xl sm:rounded-2xl
              bg-white/5 backdrop-blur-md
              hover:bg-white/10 hover:border-white/60
              transition-all duration-300
            "
          >
            Contact Specialist
          </button> */}
        </div>
      </div>
    </section>
  );
}
