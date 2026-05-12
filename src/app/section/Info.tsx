"use client";

import Image from "next/image";

export default function Info() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            БАРТААТ ЗАМЫН <br className="hidden sm:block" /> ИТГЭЛТ ХАНЬ
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 text-sm sm:text-base max-w-md">
            Хүч чадал, нарийвчлалын дээд нэгдэл. 13.5K хүчин чадалтай EPIK
            татлага нь таны автомашиныг ямар ч саадаас гаргах гол зэвсэг байх
            болно. Инженерчлэлийн гайхамшгийг өөрийн машинаараа мэдэр.
          </p>

          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-8 sm:gap-x-12">
            {/* ITEM */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[2px] h-8 md:h-10 bg-black" />
              <div>
                <p className="text-sm font-semibold">Татлага олс</p>
                <p className="text-xs text-gray-500 tracking-widest">
                  Synthetic (синтетик олс): 10 мм зузаан, 25 метр урт  Steel{" "}
                  <br />
                  (ган тросс): 9.5 мм зузаан, 26 метр урт
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[2px] h-8 md:h-10 bg-black" />
              <div>
                <p className="text-sm font-semibold">Татах хүчин чадал </p>
                <p className="text-xs text-gray-500 tracking-widest">
                  Нэг давхар таталт: 13,000 фунт (ойролцоогоор 5,896 кг)
                  <br />  Хоёр давхар / pulley ашигласан үед: 6,500 фунт (2,948
                  кг)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[2px] h-8 md:h-10 bg-black" />
              <div>
                <p className="text-sm font-semibold">Автомат тоормос</p>
                <p className="text-xs text-gray-500 tracking-widest">
                  Ачааллыг 100% барина
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-[2px] h-8 md:h-10 bg-black" />
              <div>
                <p className="text-sm font-semibold">
                  12 вольтын тогтмол гүйдлийн мотор
                </p>
                <p className="text-xs text-gray-500 tracking-widest">
                  Битүүмжилсэн series wound мотор
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[500px]">
          <Image
            src="/epik.png"
            alt="Engineering"
            fill
            className="object-cover rounded-sm shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
