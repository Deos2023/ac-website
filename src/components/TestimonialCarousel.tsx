
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "We installed the Samsung WindFree AC in our living room and the difference is remarkable. The cooling is even throughout the room with no cold drafts. Our electricity bill has reduced significantly too.",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Office Manager",
    content: "We equipped our entire office with LG Dual Inverter ACs and the improvement in comfort has boosted productivity. The quiet operation means no distractions during meetings.",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Interior Designer",
    content: "As an interior designer, I recommend Daikin ACs to my clients for their sleek design and powerful cooling. They blend seamlessly with any interior style and the air purification feature is a bonus.",
    rating: 4,
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="section-padding bg-[url('https://images.unsplash.com/photo-1541746972996-4fc7b0350f85?q=80&w=2070')] bg-cover bg-fixed bg-center">
      <div className="bg-gradient-to-r from-gray-100/95 to-blue-50/95 section-padding">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – hear from our satisfied customers about their experience with our air conditioning solutions
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                      <Card className="border-none shadow-lg glass-card bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className="flex flex-col items-center text-center">
                            <motion.div 
                              className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-cool-blue p-1"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                              viewport={{ once: true }}
                            >
                              <img
                                src={testimonial.imageSrc}
                                alt={testimonial.name}
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "https://via.placeholder.com/150";
                                }}
                              />
                            </motion.div>
                            <motion.div 
                              className="flex mb-4"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.4, duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < testimonial.rating ? 'text-warm-amber fill-warm-amber' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </motion.div>
                            <motion.blockquote 
                              className="italic text-gray-700 mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              "{testimonial.content}"
                            </motion.blockquote>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.6, duration: 0.6 }}
                              viewport={{ once: true }}
                            >
                              <p className="font-semibold text-gray-900">{testimonial.name}</p>
                              <p className="text-cool-blue text-sm">{testimonial.role}</p>
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative -left-0 mx-2 bg-white/70 backdrop-blur-sm hover:bg-white" />
                <CarouselNext className="relative -right-0 mx-2 bg-white/70 backdrop-blur-sm hover:bg-white" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
