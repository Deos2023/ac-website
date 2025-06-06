import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";
import { ChevronRight, ArrowRight } from "lucide-react";
import { ACProduct, brands, acTypes } from "@/lib/ac-selection-data";

interface ProductCardProps {
  product: ACProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Defensive: fallback for brand and type
  const brand = brands.find(b => b.id === product.brand)?.name || product.brand || "Unknown Brand";
  const acType = acTypes.find(t => t.id === product.type)?.name || product.type || "AC";

  // Defensive: fallback for image
  const imageSrc = product.image || "https://via.placeholder.com/300x200?text=AC+Image";

  // Defensive: fallback for model number
  const modelNumber = product.modelNumber || "N/A";

  // Defensive: fallback for price
  const price = typeof product.price === "number" && !isNaN(product.price) ? product.price : 0;

  // Defensive: fallback for features
  const features = Array.isArray(product.features) ? product.features : [];

  return (
    <Card className="overflow-hidden border border-gray-200 shadow-lg hover-lift">
      <div className="h-52 flex items-center justify-center bg-gradient-to-r from-gray-50 to-blue-50 p-4">
        <img 
          src={imageSrc}
          alt={modelNumber}
          className="max-h-48 w-auto object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/300x200?text=AC+Image";
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-1">{brand} {product.tonnage || ""} {product.starRating || ""}</h3>
        <p className="text-gray-500 mb-2">Model: {modelNumber}</p>
        <p className="text-2xl font-bold text-gray-900 mb-4">₹{price.toLocaleString()}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.length > 0 ? (
              features.slice(0, 4).map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <ChevronRight className="h-4 w-4 text-cool-blue mr-1 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-400">No features listed.</li>
            )}
          </ul>
        </div>
        
        <div className="space-y-3 mt-6">
          <WhatsAppInquiry 
            productName={`${brand} ${product.tonnage || ""} ${product.starRating || ""} ${acType}`}
            modelNumber={modelNumber}
            price={price}
          />
          
          <Button asChild variant="outline" className="w-full group">
            <Link to={`/product/${product.id}`}>
              View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;