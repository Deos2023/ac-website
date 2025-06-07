import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Welcome to a Home Beyond Excellence.",
    subtitle: "Crafted for reliability, built for tomorrow.",
    description: "Up to 50%* off | Cashback up to ₹15000*",
    image: "/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png",
    btnText: "Shop Now",
    btnLink: "/brand/samsung"
  },
  {
    id: 2,
    title: "Built for Clarity, Speed & Performance.",
    subtitle: "Launching Premium AC Series!",
    description: "Starting at ₹24999* | No Cost EMI on Select Products",
    image: "/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png",
    btnText: "Explore",
    btnLink: "/brand/lg"
  },
  {
    id: 3,
    title: "Smart Cooling. Smarter Living.",
    subtitle: "AI-Powered Efficiency",
    description: "Free Installation | Extended Warranty",
    image: "/lovable-uploads/WhatsApp Image 2025-05-28 at 12.44.07_8c32963b.jpg",
    btnText: "View Collection",
    btnLink: "/brand/daikin"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-screen min-h-[600px] max-h-[900px]">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg";
            }}
          />
          
          {/* Content Overlay with Premium Styling */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <span className="text-white/90 font-medium mb-2 block text-base sm:text-lg tracking-wider">
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">{slide.description}</p>
                
                {/* CTA Button with Premium Design */}
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 rounded-full px-6 sm:px-8 text-base sm:text-lg font-medium"
                >
                  <Link to={slide.btnLink}>{slide.btnText}</Link>
                </Button>
                
                {/* Premium Tags */}
                <div className="flex items-center mt-12 gap-6">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/20 p-2 rounded-full">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 20.5C19.5 21.3284 18.8284 22 18 22C17.1716 22 16.5 21.3284 16.5 20.5C16.5 19.6716 17.1716 19 18 19C18.8284 19 19.5 19.6716 19.5 20.5Z" fill="white"/>
                        <path d="M9.5 20.5C9.5 21.3284 8.82843 22 8 22C7.17157 22 6.5 21.3284 6.5 20.5C6.5 19.6716 7.17157 19 8 19C8.82843 19 9.5 19.6716 9.5 20.5Z" fill="white"/>
                        <path d="M5 2H19.25C19.6642 2 20 2.33579 20 2.75V14.25C20 14.6642 19.6642 15 19.25 15H5M9 15L3 15L3 8.5M3 6L3 4.5C3 4.22386 3.22386 4 3.5 4H5M7 8.5H11M9 11.5H13M5 8.5V11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm font-medium">Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-white/20 p-2 rounded-full">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 14L11 16L15.5 11.5M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm font-medium">No Cost EMI* On Select Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows with Premium Styling */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all duration-200"
        aria-label="Previous slide"
        style={{ height: "48px", width: "48px" }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all duration-200"
        aria-label="Next slide"
        style={{ height: "48px", width: "48px" }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Premium Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-red-600" : "w-2 bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;