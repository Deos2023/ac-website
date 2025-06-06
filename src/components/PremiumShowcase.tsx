import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ChevronRight } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "Superior Cooling Technology",
    description: "Experience the perfect temperature in any weather condition with our advanced cooling systems.",
    imageSrc: "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png",
    bgColor: "from-blue-500/10 to-cyan-500/10"
  },
  {
    id: 2,
    title: "Elegant Design",
    description: "Premium aesthetics that complement your interior decor while providing exceptional functionality.",
    imageSrc: "/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
    bgColor: "from-purple-500/10 to-blue-500/10"
  },
  {
    id: 3,
    title: "Energy Efficient",
    description: "Reduce your electricity bills with our energy-efficient air conditioning solutions.",
    imageSrc: "/lovable-uploads/1a4210eb-3a20-4fd7-9983-a8b981ece7a8.png",
    bgColor: "from-green-500/10 to-emerald-500/10"
  }
];

const features = [
  { icon: "⚡", title: "Energy Saving", description: "Up to 60% energy savings with inverter technology" },
  { icon: "🌡️", title: "Rapid Cooling", description: "Powerful cooling performance for instant comfort" },
  { icon: "🛡️", title: "Air Purification", description: "Multi-stage filtration for cleaner, healthier air" },
  { icon: "🔊", title: "Ultra Quiet", description: "Whisper quiet operation as low as 19dB" }
];

// Use your own premium background image here
const PREMIUM_BG_IMAGE = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80";

const PremiumShowcase = () => {
  return (
    <section
      className="section-padding relative text-white"
      style={{
        minHeight: "100vh",
        backgroundImage: `url('${PREMIUM_BG_IMAGE}')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold drop-shadow-lg">
            Premium Air Conditioning Solutions
          </h2>
          <p className="mt-2 text-gray-200 max-w-2xl mx-auto font-medium drop-shadow">
            Discover a new level of comfort with our innovative and stylish air conditioners
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {showcaseItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-lg bg-white/10 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className={`flex flex-col md:flex-row h-full bg-gradient-to-br ${item.bgColor} rounded-lg overflow-hidden`}>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                          <p className="text-gray-700 dark:text-gray-200 mb-6">{item.description}</p>
                          
                          <div className="flex items-center text-cool-blue font-medium cursor-pointer group">
                            <span>Learn more</span>
                            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        <div className="md:w-1/2 h-60 md:h-auto relative bg-white flex items-center justify-center p-4">
                          <img 
                            src={item.imageSrc}
                            alt={item.title}
                            className="max-h-56 w-auto object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://via.placeholder.com/400x300?text=AC+Image";
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative -left-0 mx-2 bg-white/20 hover:bg-white/40 border-none text-white" />
            <CarouselNext className="relative -right-0 mx-2 bg-white/20 hover:bg-white/40 border-none text-white" />
          </div>
        </Carousel>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcase;