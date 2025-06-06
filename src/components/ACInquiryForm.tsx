import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { acTypes, brands } from "@/lib/ac-selection-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  acType: z.string().min(1, "Select AC type"),
  brand: z.string().min(1, "Select brand"),
  inverter: z.enum(["inverter", "non-inverter"], {
    required_error: "Select inverter type",
  }),
  tonnage: z.string().min(1, "Select tonnage"),
  starRating: z.string().min(1, "Select star rating"),
  modelNumber: z.string().optional(),
  customerName: z.string().min(2, "Enter your name"),
  customerNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
});

type FormValues = z.infer<typeof formSchema>;

const tonnageOptions = [
  "0.8T",
  "1.0T",
  "1.2T",
  "1.5T",
  "2.0T",
  "2.5T",
  "3.0T",
  "4.0T",
  "5.0T",
];

const starOptions = ["1★", "2★", "3★", "4★", "5★"];

const inverterOptions = [
  { value: "inverter", label: "Inverter" },
  { value: "non-inverter", label: "Non-Inverter" },
];

// WhatsApp business number - replace with your actual number
const WHATSAPP_NUMBER = "919876543210";

const ACInquiryForm: React.FC<{ className?: string }> = ({ className }) => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acType: "",
      brand: "",
      inverter: undefined,
      tonnage: "",
      starRating: "",
      modelNumber: "",
      customerName: "",
      customerNumber: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    // Compose message
    const acTypeName =
      acTypes.find((t) => t.id === values.acType)?.name || values.acType;
    const brandName =
      brands.find((b) => b.id === values.brand)?.name || values.brand;
    const message = `Hello! I would like to inquire about an AC with the following details:
- Type: ${acTypeName}
- Brand: ${brandName}
- Inverter: ${values.inverter === "inverter" ? "Yes" : "No"}
- Tonnage: ${values.tonnage}
- Star Rating: ${values.starRating}
${values.modelNumber ? `- Model Number: ${values.modelNumber}` : ""}
My Name: ${values.customerName}
My Mobile: ${values.customerNumber}
Please contact me for more details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Inquiry Sent!",
      description: "Opening WhatsApp to connect you with our team.",
    });

    form.reset();
  };

  return (
    <div
      className={`relative  mx-auto py-10 px-4 sm:px-8 ${className || ""}`}
    >
      {/* Background Gradient & Glassmorphism */}
      <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#fef9c3] blur-[2px] opacity-80" />
      <div className="relative z-10 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-lg border border-white/40 p-1">
        {/* Header */}
        <div className="flex flex-col items-center py-6">
          <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold text-3xl md:text-4xl tracking-tight drop-shadow-lg animate-gradient-x">
            AC Inquiry Form
          </div>
          <div className="mt-2 text-gray-500 text-center max-w-md">
            Get the best AC for your needs! Fill in the details below and our team will contact you on WhatsApp.
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 px-2 pb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="acType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      AC Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70">
                        <SelectValue placeholder="Select AC Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {acTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            <div className="flex items-center gap-2">
                              <img
                                src={type.image}
                                alt={type.name}
                                className="w-6 h-6 rounded object-contain border"
                              />
                              <span>{type.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      Brand
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70">
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map((brand) => (
                          <SelectItem key={brand.id} value={brand.id}>
                            <div className="flex items-center gap-2">
                              <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-6 h-6 rounded object-contain border"
                              />
                              <span>{brand.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inverter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      Inverter Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70">
                        <SelectValue placeholder="Select Inverter Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inverterOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tonnage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      AC Ton
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70">
                        <SelectValue placeholder="Select AC Ton" />
                      </SelectTrigger>
                      <SelectContent>
                        {tonnageOptions.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="starRating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      Star Rating
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70">
                        <SelectValue placeholder="Select Star Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        {starOptions.map((star) => (
                          <SelectItem key={star} value={star}>
                            {star}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="modelNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      Model Number{" "}
                      <span className="text-gray-400 font-normal">
                        (optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter model number (if known)"
                        {...field}
                        className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      Your Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="customerNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-700">
                      Mobile Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your 10-digit mobile number"
                        {...field}
                        className="rounded-xl border-2 border-gray-200 focus:border-blue-400 shadow-sm bg-white/70"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full py-3 rounded-2xl text-lg font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 hover:from-green-500 hover:to-purple-500 shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-white animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  />
                </svg>
                Send Inquiry on WhatsApp
              </span>
            </Button>
          </form>
        </Form>
      </div>
      {/* Subtle floating shapes for uniqueness */}
      <div className="pointer-events-none absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-300 via-blue-200 to-purple-200 opacity-30 rounded-full blur-2xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tr from-yellow-200 via-pink-200 to-purple-200 opacity-30 rounded-full blur-2xl animate-float-slower" />
      <style jsx global>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(20px) scale(1.07);
          }
        }
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ACInquiryForm;