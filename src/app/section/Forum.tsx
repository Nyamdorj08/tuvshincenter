"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  firstname: z.string().min(2, "Нэр оруулна уу"),
  lastname: z.string().min(2, "Овог оруулна уу"),
  email: z.string().email("Зөв имэйл оруулна уу"),
  phone: z.string().optional(),
  additional_info: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            phone: data.phone ?? "",
            additional_info: data.additional_info ?? "",
          }),
        },
      );

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.log("Error details:", error);
        throw new Error("Server error");
      }

      setSuccess(true);
      toast.success("Амжилттай илгээгдлээ 🎉");

      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (err) {
      toast.error("Алдаа гарлаа ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="bg-[#f5f5f5] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Contact Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">FIRST NAME*</label>
              <Input
                {...register("firstname")}
                placeholder="Нэр"
                className="mt-2 h-14 rounded-xl"
              />
              {errors.firstname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">LAST NAME*</label>
              <Input
                {...register("lastname")}
                placeholder="Овог"
                className="mt-2 h-14 rounded-xl"
              />
              {errors.lastname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">EMAIL*</label>
              <Input
                {...register("email")}
                placeholder="И-мэйл"
                className="mt-2 h-14 rounded-xl"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">PHONE</label>
              <Input
                {...register("phone")}
                placeholder="Утасны дугаар"
                className="mt-2 h-14 rounded-xl"
              />
            </div>
          </div>

          <div>
            <Textarea
              {...register("additional_info")}
              placeholder="Нэмэлт мэдээлэл"
              className="h-40 rounded-xl"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-xl text-base bg-black text-white hover:bg-black/90 shadow-lg flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            {success && <CheckCircle size={18} />}
            {loading ? "Илгээж байна..." : success ? "Амжилттай!" : "Илгээх →"}
          </Button>
        </form>
      </div>
    </section>
  );
}
