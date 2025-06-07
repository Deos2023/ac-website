
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const filters = [
  { id: 'best-deal', label: 'Best Deal' },
  { id: 'most-popular', label: 'Most Popular' },
  { id: 'newest', label: 'Newest' }
];

const products = [
  {
    id: 1,
    name: "Samsung 1.5 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    originalPrice: 65000,
    discountedPrice: 39999,
    discountPercent: 38,
    stars: 4.7,
    reviews: 231,
    badge: "CASHBACK",
    tag: "best-deal"
  },
  {
    id: 2,
    name: "LG 1.5 Ton 3 Star AI Convertible 6-in-1 Split AC",
    image: "/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
    originalPrice: 78990,
    discountedPrice: 39491,
    discountPercent: 50,
    stars: 5.0,
    reviews: 52,
    badge: "BESTSELLER",
    tag: "most-popular"
  },
  {
    id: 3,
    name: "Daikin 1.5 Ton 5 Star Inverter Smart Split AC",
    image: "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png",
    originalPrice: 65990,
    discountedPrice: 46999,
    discountPercent: 29,
    stars: 4.8,
    reviews: 89,
    badge: "NEW",
    tag: "newest"
  },
  {
    id: 4,
    name: "Voltas 1 Ton 3 Star Window AC",
    image: "/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
    originalPrice: 35990,
    discountedPrice: 25999,
    discountPercent: 28,
    stars: 4.5,
    reviews: 123,
    badge: "CASHBACK",
    tag: "best-deal"
  },
  {
    id: 5,
    name: "Mitsubishi 2 Ton 4 Star Inverter Split AC",
    image: "/lovable-uploads/1a4210eb-3a20-4fd7-9983-a8b981ece7a8.png",
    originalPrice: 98990,
    discountedPrice: 75999,
    discountPercent: 23,
    stars: 4.9,
    reviews: 47,
    badge: "PREMIUM",
    tag: "most-popular"
  },
  {
    id: 6,
    name: "Carrier 1.5 Ton Flexicool Inverter Split AC",
    image: "/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    originalPrice: 58990,
    discountedPrice: 42999,
    discountPercent: 27,
    stars: 4.6,
    reviews: 72,
    badge: "NEW ARRIVAL",
    tag: "newest"
  },
  {
    id: 7,
    name: "Hitachi 1 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
    originalPrice: 52990,
    discountedPrice: 38999,
    discountPercent: 26,
    stars: 4.3,
    reviews: 58,
    badge: "LIMITED STOCK",
    tag: "best-deal"
  },
  {
    id: 8,
    name: "Blue Star 1.5 Ton 5 Star Inverter Split AC",
    image: "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png",
    originalPrice: 61990,
    discountedPrice: 48999,
    discountPercent: 21,
    stars: 4.8,
    reviews: 94,
    badge: "ENERGY SAVER",
    tag: "most-popular"
  }
];

const ProductFilter = () => {
  const [activeFilter, setActiveFilter] = useState('best-deal');

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">PICKS FOR YOU</h2>
          <div className="flex flex-wrap border-b border-gray-200">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`py-2 sm:py-3 px-3 sm:px-6 font-medium text-base sm:text-lg relative ${
                  activeFilter === filter.id
                    ? "text-cool-blue"
                    : "text-gray-600 hover:text-cool-blue/80"
                }`}
              >
                {filter.label}
                {activeFilter === filter.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cool-blue"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products
            .filter(product => activeFilter === 'all' || product.tag === activeFilter)
            .slice(0, 8)
            .map(product => (
              <Card key={product.id} className="overflow-hidden border-none shadow-md sm:shadow-lg hover-lift transition-all duration-300">
                <div className="relative pt-3 sm:pt-4 px-3 sm:px-4">
                  {product.badge && (
                    <span className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded z-10">
                      {product.badge}
                    </span>
                  )}
                  <div className="h-40 sm:h-52 flex items-center justify-center mb-3 sm:mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-36 sm:max-h-48 w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/300x200?text=AC+Image";
                      }}
                    />
                  </div>
                </div>
                <CardContent className="bg-white p-3 sm:p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 sm:h-4 sm:w-4"
                          fill={i < Math.floor(product.stars) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 ml-2">
                      {product.stars} ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-medium text-base sm:text-lg mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3.5rem]">{product.name}</h3>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl font-bold">₹{product.discountedPrice.toLocaleString()}</span>
                    <div className="flex items-center mt-1 text-xs sm:text-sm">
                      <span className="text-gray-500 line-through mr-2">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="text-green-600 font-medium">{product.discountPercent}% Off</span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    No Cost EMI starts from ₹{Math.round(product.discountedPrice / 12).toLocaleString()}/month
                  </div>
                  <Button className="w-full bg-cool-blue hover:bg-cool-blue-dark text-xs sm:text-sm py-1.5 sm:py-2">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
        
        <div className="mt-8 sm:mt-10 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-cool-blue text-cool-blue hover:bg-cool-blue/10 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
