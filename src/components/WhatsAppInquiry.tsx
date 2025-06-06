
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WhatsAppInquiryProps {
  productName: string;
  modelNumber: string;
  price: number;
  className?: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  mobile: z.string().min(10, { message: "Please enter a valid mobile number" })
});

const WhatsAppInquiry = ({ productName, modelNumber, price, className }: WhatsAppInquiryProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Format the inquiry message
    const message = `Hello! I would like to inquire about ${productName} (${modelNumber}) priced at ₹${price.toLocaleString()}. My name is ${values.name}. Please contact me for more details.`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp business number - replace with your actual number
    const phoneNumber = "919876543210";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Close the dialog
    setOpen(false);
    
    // Show success message
    toast({
      title: "Inquiry Sent!",
      description: "Opening WhatsApp to connect you with our team.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={`w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 ${className || ''}`}>
          <MessageSquare className="mr-2 h-4 w-4" /> Buy Now on WhatsApp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inquiry for {productName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-gray-500">
            Please provide your details to send an inquiry via WhatsApp.
          </p>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="font-medium">{productName}</p>
            <p className="text-sm text-gray-500">Model: {modelNumber}</p>
            <p className="text-lg font-bold mt-1">₹{price.toLocaleString()}</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                <MessageSquare className="mr-2 h-4 w-4" /> Send Inquiry
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppInquiry;
