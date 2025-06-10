
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
    image: "/lovable-uploads/samsung/split-ac/1.png",
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
    image: "/lovable-uploads/lg/split-ac/1.png",
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
    image: "/lovable-uploads/daikin/split-ac/1.png",
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
    image: "/lovable-uploads/voltas/window-ac/1.png",
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
    image: "/lovable-uploads/mitsubishi/split-ac/1.png",
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
    image: "/lovable-uploads/carrier/split-ac/1.png",
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
    image: "/lovable-uploads/hitachi/split-ac/1.png",
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
    image: "/lovable-uploads/bluestar/split-ac/1.png",
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
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">PICKS FOR YOU</h2>
          <div className="flex border-b border-gray-200">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`py-3 px-6 font-medium text-lg relative ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter(product => activeFilter === 'all' || product.tag === activeFilter)
            .slice(0, 8)
            .map(product => (
              <Card key={product.id} className="overflow-hidden border-none shadow-lg hover-lift transition-all duration-300">
                <div className="relative pt-4 px-4">
                  {product.badge && (
                    <span className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded z-10">
                      {product.badge}
                    </span>
                  )}
                  <div className="h-52 flex items-center justify-center mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-48 w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/300x200?text=AC+Image";
                      }}
                    />
                  </div>
                </div>
                <CardContent className="bg-white">
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill={i < Math.floor(product.stars) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {product.stars} ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-medium text-lg mb-2 line-clamp-2 h-14">{product.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">₹{product.discountedPrice.toLocaleString()}</span>
                    <div className="flex items-center mt-1 text-sm">
                      <span className="text-gray-500 line-through mr-2">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="text-green-600 font-medium">{product.discountPercent}% Off</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    No Cost EMI starts from ₹{Math.round(product.discountedPrice / 12).toLocaleString()}/month
                  </div>
                  <Button className="w-full bg-cool-blue hover:bg-cool-blue-dark">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="border-cool-blue text-cool-blue hover:bg-cool-blue/10">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
