"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="py-12 md:py-24 bg-[#f5f5f5] flex flex-col gap-12 md:gap-24 items-center justify-center">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 flex items-center justify-center text-center">
          Түгээмэл асуулт хариулт
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3 md:space-y-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
              Танайх ямар төрлийн үйлчилгээ үзүүлдэг вэ?
            </AccordionTrigger>
            <AccordionContent>
              Явах эд анги, хийн нум, борхов суурилуулалт, тавцан ачаа болон
              монгол ачаа, дээврийн бокс, сүүдрэвч, машины майхан, аяллын нэмэлт
              тоноглолын худалдаа болон суурилуулалт хийдэг.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">
              Машины загварт тохирох эсэхийг яаж мэдэх вэ?
            </AccordionTrigger>
            <AccordionContent>
              Машины марк, модель, оны мэдээллээ илгээхэд тохирох хувилбарыг
              санал болгоно.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">
              Үнийн санал яаж авах вэ?
            </AccordionTrigger>
            <AccordionContent>
              Утас: 8009-5087, 9903-3634, 8989-6170 зэрэг дугаараар холбогдох,
              Facebook page: https://www.facebook.com/tuvshincenter рүү чат
              илгээх болон website form-оор машины мэдээллээ явуулж үнийн санал
              авна.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">
              Танай хаяг байршил болон ажиллах цагийн тухайд?
            </AccordionTrigger>
            <AccordionContent>
              Ажлын цаг: Даваа гарагт амарна. Бусад бүх өдөр 10:00 - 20:00 цаг
              хүртэл, Хаяг: ХУД 16-р хороо, Сонсголонгийн гүүр гараад ELEGANCE
              хорооллын урдуур баруун эргээд 900 метр
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg">
              Урьдчилан цаг авах уу?
            </AccordionTrigger>
            <AccordionContent>
              Тийм. Цаг авбал илүү хурдан, хүлээлтгүй үйлчлүүлнэ.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg">
              Суурилуулалт хэр хугацаа авдаг вэ?
            </AccordionTrigger>
            <AccordionContent>
              Жижиг тоноглол 1-3 цаг, томоохон тоноглол 1 өдөр орчим үргэлжилнэ.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-[1px] bg-black/30" />
      </div>
    </section>
  );
}
