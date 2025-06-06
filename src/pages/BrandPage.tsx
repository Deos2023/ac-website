
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { getTonnageOptions, getACModels } from '@/lib/ac-data';
import { useToast } from '@/hooks/use-toast';

const BrandPage = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const { toast } = useToast();
  
  // Get tonnage options for the selected brand
  const tonnageOptions = getTonnageOptions(brandName || '');
  const acModels = getACModels(brandName || '');
  
  useEffect(() => {
    if (tonnageOptions.length === 0) {
      toast({
        title: "Brand not found",
        description: "We couldn't find any products for this brand",
        variant: "destructive",
      });
    }
  }, [brandName, tonnageOptions, toast]);

  // Capitalize brand name for display
  const displayBrandName = brandName ? brandName.charAt(0).toUpperCase() + brandName.slice(1) : '';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{displayBrandName} Air Conditioners</h1>
          <p className="text-gray-600">Select the tonnage capacity for your {displayBrandName} AC</p>
        </div>
        
        {tonnageOptions.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Brand Not Found</h2>
            <p className="text-gray-500 mb-6">
              We couldn't find any air conditioners for this brand. Please try a different brand or go back to home.
            </p>
            <Link 
              to="/" 
              className="inline-block px-6 py-2 bg-cool-blue text-white rounded-md hover:bg-cool-blue-dark transition-colors"
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tonnageOptions.map((tonnage) => (
              <Link to={`/brand/${brandName}/ton/${tonnage}`} key={tonnage}>
                <Card className="hover-lift h-full transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-cool-blue/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-cool-blue">{tonnage}</span>
                      <span className="text-lg font-medium text-cool-blue ml-1">Ton</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tonnage} Ton Capacity</h3>
                    <p className="text-gray-500 text-center">
                      Ideal for {parseFloat(tonnage) <= 1 ? 'small rooms up to 120 sq.ft' : parseFloat(tonnage) <= 1.5 ? 'medium rooms up to 180 sq.ft' : 'large rooms up to 240+ sq.ft'}
                    </p>
                    <div className="mt-6 text-cool-blue font-medium">View Options →</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
        
        {acModels.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All {displayBrandName} Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acModels.map((model) => (
                <Card key={model.id} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 mb-4 flex justify-center">
                      <img
                        src={model.image}
                        alt={`${displayBrandName} ${model.tonnage} Ton ${model.starRating} Star AC`}
                        className="h-40 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/300x200?text=AC+Image";
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{displayBrandName} {model.tonnage} Ton {model.starRating} Star AC</h3>
                    <p className="text-cool-blue font-bold mb-2">₹{model.price.toLocaleString()}</p>
                    <p className="text-gray-500 mb-4 text-sm">{model.modelNumber}</p>
                    <Link 
                      to={`/brand/${brandName}/ton/${model.tonnage}/star/${model.starRating}`}
                      className="text-cool-blue hover:text-cool-blue-dark font-medium"
                    >
                      View Details →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BrandPage;
