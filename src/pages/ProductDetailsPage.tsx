import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppInquiry from "@/components/WhatsAppInquiry";
import { Star, ChevronRight, Check, Shield, Truck, Zap } from "lucide-react";
import { ACProduct, brands, acTypes, acProducts } from "@/lib/ac-selection-data";

function getStarNumber(starRating: string) {
  // Extracts number from values like "5★", "3★"
  const match = starRating.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(0);

  // Find the product by id
  const product = acProducts.find(p => p.id === id);

  // Robust image path handling
  function fixImagePath(img?: string) {
    if (!img) return "https://via.placeholder.com/600x600?text=AC+Image";
    return img.startsWith("public/")
      ? img.replace(/^public/, "")
      : img;
  }

  // Get product images from the product data
  const productImages = product?.images 
    ? product.images.map(img => fixImagePath(img))
    : product?.image 
      ? [fixImagePath(product.image)] 
      : ["https://via.placeholder.com/600x600?text=AC+Image"];
      
  // Ensure we have at least one image
  if (productImages.length === 0) {
    productImages.push("https://via.placeholder.com/600x600?text=AC+Image");
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-4 text-gray-500">Sorry, we couldn't find details for this product.</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  // Brand & Type lookup
  const brand = brands.find(b => b.id === product.brand)?.name || product.brand;
  const acType = acTypes.find(t => t.id === product.type)?.name || product.type;
  const brandLogo = brands.find(b => b.id === product.brand)?.logo;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="text-sm mb-6 text-gray-600 flex items-center gap-1">
          <Link to="/" className="hover:underline text-blue-600">Home</Link>
          <span>›</span>
          <Link to={`/brand/${product.brand}`} className="hover:underline text-blue-600">{brand}</Link>
          <span>›</span>
          <span className="text-gray-800">{product.modelNumber}</span>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Main product section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6">
            {/* Image gallery - left column */}
            <div className="lg:col-span-7">
              <div className="sticky top-4">
                {/* Main image */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center p-4 mb-4 h-96">
                  <img
                    src={productImages[mainImage]}
                    alt={product.modelNumber}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x600?text=AC+Image";
                    }}
                  />
                </div>

                {/* Thumbnail gallery */}
                <div className="flex gap-2 overflow-x-auto py-2">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(idx)}
                      className={`flex-shrink-0 w-16 h-16 border rounded-md overflow-hidden transition-all ${mainImage === idx ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/100x100?text=Thumb";
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product info - right column */}
            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center gap-2">
                {brandLogo && (
                  <img 
                    src={fixImagePath(brandLogo)} 
                    alt={brand} 
                    className="h-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                <span className="text-lg font-medium text-gray-700">{brand}</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                {product.tonnage} {acType} {product.modelNumber}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < getStarNumber(product.starRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium text-gray-700">{product.starRating}</span>
                </div>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">142 Ratings</span>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-gray-900 mb-1">₹{product.price.toLocaleString()}</div>
                <div className="text-green-600 font-medium flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  <span>Inclusive of all taxes</span>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  EMI starts at ₹{Math.round(product.price / 12).toLocaleString()}/month
                </div>
              </div>

              {/* Key highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery options */}
              <div className="mb-6 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Truck className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Delivery Options</div>
                    <div className="text-sm text-gray-600">Free standard delivery in 2-4 business days</div>
                    <div className="text-sm text-gray-600">Express delivery available</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Warranty</div>
                    <div className="text-sm text-gray-600">1 year comprehensive warranty</div>
                    <div className="text-sm text-gray-600">5 years on compressor</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <WhatsAppInquiry
                  productName={`${brand} ${product.tonnage} ${product.starRating} ${acType}`}
                  modelNumber={product.modelNumber}
                  price={product.price}
                  className="w-full"
                />
                
                <Button variant="outline" className="w-full gap-2">
                  <Zap className="h-4 w-4" />
                  Request Installation Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="border-t border-gray-200 p-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Product Details</h2>
              <div className="prose prose-sm text-gray-600">
                <p>{product.description}</p>
                <h3 className="text-lg font-semibold mt-6 mb-2">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="w-40 font-medium text-gray-700">Brand</span>
                      <span className="text-gray-600">{brand}</span>
                    </div>
                    <div className="flex">
                      <span className="w-40 font-medium text-gray-700">Model</span>
                      <span className="text-gray-600">{product.modelNumber}</span>
                    </div>
                    <div className="flex">
                      <span className="w-40 font-medium text-gray-700">Type</span>
                      <span className="text-gray-600">{acType}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="w-40 font-medium text-gray-700">Capacity</span>
                      <span className="text-gray-600">{product.tonnage}</span>
                    </div>
                    <div className="flex">
                      <span className="w-40 font-medium text-gray-700">Energy Rating</span>
                      <span className="text-gray-600">{product.starRating}</span>
                    </div>
                    <div className="flex">
                      <span className="w-40 font-medium text-gray-700">Inverter</span>
                      <span className="text-gray-600">{product.inverter === 'inverter' ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
