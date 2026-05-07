"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="py-24 bg-[#f5f5f5] flex flex-col gap-24 items-center justify-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center justify-center">
          Түгээмэл асуулт хариулт
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Сургалт хэдэн хугацаатай вэ?</AccordionTrigger>
            <AccordionContent>
              Манай сургалтууд дунджаар 8–12 долоо хоног үргэлжилдэг.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Анхан шатны мэдлэг хэрэгтэй юу?</AccordionTrigger>
            <AccordionContent>
              Үгүй, бид анхан шатнаас эхэлж заадаг.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Онлайн сурах боломжтой юу?</AccordionTrigger>
            <AccordionContent>
              Тийм, бүх хичээлүүдийг онлайн үзэх боломжтой.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Ажилд зуучлах уу?</AccordionTrigger>
            <AccordionContent>
              Бид төгсөгчдөд карьер зөвлөгөө болон ажилд зуучлах support
              үзүүлдэг.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Төлбөрийг хэсэгчлэн төлж болох уу?
            </AccordionTrigger>
            <AccordionContent>
              Тийм, төлбөрийг хэсэгчлэн төлөх боломжтой.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="h-[1px] bg-black/30" />
      </div>
    </section>
  );
}
