"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "ГАНБАТ. Б",
    car: "TOYOTA LAND CRUISER 200",
    text: "Маш хурдан хүргэж өглөө. Оригинал сэлбэг олохгүй байсан чинь эндээс шууд олдлоо. Баярлалаа.",
    image: "/review.png",
  },
  {
    name: "МӨНХ-ЭРДЭНЭ",
    car: "LEXUS RX450H",
    text: "VIN дугаараар нь шалгаад авахад яг таардаг юм байна. Зөвлөхүүд нь их мэдлэгтэй залуучууд байна.",
    image: "/review.png",
  },
  {
    name: "АЛТАНГЭРЭЛ. С",
    car: "NISSAN X-TRAIL",
    text: "Баталгаа өгч байгаа нь хамгийн том давуу тал. Олон жил эдэлгээ даах найдвартай бүтээгдэхүүн байна.",
    image: "/review.png",
  },
];

export default function Review() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24 flex flex-col gap-16 md:gap-24 items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-16">
          ҮЙЛЧЛҮҮЛЭГЧДИЙН СЭТГЭГДЭЛ
        </h2>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((item, i) => {
              const isActive = i === selectedIndex;

              return (
                <div
                  key={i}
                  className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33%]"
                >
                  <div
                    className={`transition-all duration-500 rounded-lg ${
                      isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
                    }`}
                  >
                    <div className="bg-white p-6 md:p-8 shadow-sm relative h-full">
                      {/* STARS */}
                      <div className="flex gap-1 text-red-500 mb-4">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                      </div>

                      {/* QUOTE */}
                      <span className="absolute top-6 right-6 text-5xl md:text-6xl text-gray-200">
                        ”
                      </span>

                      {/* TEXT */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                        {item.text}
                      </p>

                      {/* USER */}
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={44}
                          height={44}
                          className="rounded-full object-cover"
                        />

                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.car}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="h-[1px] bg-black/30" />
      </div>
    </section>
  );
}
