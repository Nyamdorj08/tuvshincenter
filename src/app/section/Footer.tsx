"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* TOP DIVIDER (section separation) */}
      <div className="w-full">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-black to-transparent" />
      </div>

      <footer className="bg-[#f5f5f5] pt-12 md:pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* TOP */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/tuvshin.svg"
                  alt="Tuvshin Center"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-sm text-gray-600 max-w-xs">
                Шинэлэг бүхнийг таны машинд
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:ml-auto">
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
                Холбоо Барих
              </h3>

              <div className="space-y-3 md:space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <span>Утас: 8009-5087</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>И-мэйл: s.ataraa9908@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>Хаяг: Улаанбаатар хот</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-black/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3 md:gap-4">
            <p className="text-center md:text-left">
              © 2026 TUVSHIN CENTER. ALL RIGHTS RESERVED.
            </p>

            <p className="md:text-right">POWERED BY PIXEL AXCORA LLC</p>
          </div>
        </div>
      </footer>
    </>
  );
}
