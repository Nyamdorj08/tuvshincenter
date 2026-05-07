"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/tuvshin.svg"
            alt="Tuvshin Center"
            width={136}
            height={46}
            className="object-contain"
          />
        </div>

        <Button
          size="lg"
          className="rounded-b-lg w-28"
          onClick={() => {
            document.getElementById("contact-form")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Холбоо барих
        </Button>
      </div>
    </header>
  );
}
