"use client";

import Image from "next/image";

const products = [
  {
    title: "Наклад",
    price: "50,000 - 80,000₮",
    image: "/pr1.png",
  },
  {
    title: "Тайг LC ",
    price: "20,000 - 25,000₮",
    image: "/pr2.png",
  },
  {
    title: "Гар",

    price: "70,000 ₮",
    image: "/pr3new.png",
  },
  {
    title: "Цап",

    price: "35,000 - 90,000₮",
    image: "/pr4.png",
  },
  {
    title: "Гарны түлк DSK",

    price: "13,000 - 25,000 ₮",
    image: "/pr5new.png",
  },
  {
    title: "Таван бул",

    price: "40,000 - 55,000₮",
    image: "/pr6.png",
  },
  {
    title: "Өндгөн тулгуур DSK",

    price: "20,000 - 45,000₮",
    image: "/pr7.png",
  },
  {
    title: "Пүрш",

    price: "23,000 - 38,000₮",
    image: "/pr8last.png",
  },
];

export default function Product() {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          {/* TITLE */}
          <h2
            className="
      font-bold leading-tight
      text-2xl sm:text-3xl md:text-4xl
      max-w-md
    "
          >
            ОНЦЛОХ БҮТЭЭГДЭХҮҮН
          </h2>

          {/* BUTTON */}
          <button
            className="
      self-start sm:self-auto
      text-xs sm:text-sm
      tracking-[0.2em]
      border-b border-black
      pb-1
      hover:opacity-70 transition
    "
          >
            VIEW ALL PRODUCTS
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-white p-6 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain transition group-hover:scale-105"
                />
              </div>

              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>

                <p className="text-sm text-gray-700">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
