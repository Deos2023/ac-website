import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { getACModel } from '@/lib/ac-data';
import { Star, Check, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ACDetailsPage = () => {
  const { brandName, tonValue, starRating } = useParams<{ 
    brandName: string;
    tonValue: string;
    starRating: string;
  }>();
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Get AC model details
  const acModel = getACModel(brandName || '', tonValue || '', starRating || '');
  
  useEffect(() => {
    if (!acModel) {
      toast({
        title: "Product not found",
        description: "We couldn't find the product you're looking for",
        variant: "destructive",
      });
      
      // Redirect back to brand page after a short delay
      const timer = setTimeout(() => {
        navigate(`/brand/${brandName}`);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [acModel, brandName, navigate, toast]);

  // Capitalize brand name for display
  const displayBrandName = brandName ? brandName.charAt(0).toUpperCase() + brandName.slice(1) : '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) {
      toast({
        title: "Please fill all fields",
        description: "Both name and mobile number are required",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^\d{10}$/.test(mobile)) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    // Format message for WhatsApp
    const message = encodeURIComponent(
      `Hello! I'm interested in buying:\n\n` +
      `Product: ${displayBrandName} ${tonValue} Ton ${starRating} Star AC\n` +
      `Model: ${acModel?.modelNumber}\n` +
      `Price: ₹${acModel?.price.toLocaleString()}\n\n` +
      `My Details:\n` +
      `Name: ${name}\n` +
      `Mobile: ${mobile}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/+911234567890?text=${message}`, '_blank');
    
    // Show success toast
    toast({
      title: "Request sent successfully!",
      description: "We've opened WhatsApp with your inquiry. Complete sending the message there.",
    });
    
    // Reset form
    setName('');
    setMobile('');
    setIsFormOpen(false);
  };

  if (!acModel) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Product Not Found</h2>
            <p className="text-gray-500 mb-6">
              We couldn't find the product you're looking for. Please try a different selection.
            </p>
            <Link 
              to={`/brand/${brandName}`} 
              className="inline-block px-6 py-2 bg-cool-blue text-white rounded-md hover:bg-cool-blue-dark transition-colors"
            >
              Back to {displayBrandName}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/" className="text-cool-blue hover:underline">Home</Link>
          <span className="text-gray-400">›</span>
          <Link to={`/brand/${brandName}`} className="text-cool-blue hover:underline">{displayBrandName}</Link>
          <span className="text-gray-400">›</span>
          <Link to={`/brand/${brandName}/ton/${tonValue}`} className="text-cool-blue hover:underline">{tonValue} Ton</Link>
          <span className="text-gray-400">›</span>
          <span>{starRating} Star</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
              <img 
                src={acModel.image} 
                alt={`${displayBrandName} ${acModel.tonnage} Ton ${acModel.starRating} Star AC`}
                className="mx-auto h-auto max-h-80 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/400x300?text=AC+Image";
                }}
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {displayBrandName} {acModel.tonnage} Ton {acModel.starRating} Star Air Conditioner
            </h1>
            <p className="text-gray-600 mb-4">{acModel.description}</p>
            
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: parseInt(acModel.starRating) }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warm-amber text-warm-amber" />
              ))}
              <span className="text-warm-amber font-medium ml-1">{acModel.starRating} Star Rating</span>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-1">Model Number</div>
              <div className="font-medium">{acModel.modelNumber}</div>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-gray-900">₹{acModel.price.toLocaleString()}</span>
              <span className="text-green-600 ml-2">Free Shipping</span>
            </div>
            
            <Button 
              className="w-full mb-6 bg-warm-amber hover:bg-warm-amber-dark"
              onClick={() => setIsFormOpen(true)}
            >
              Buy Now
            </Button>
            
            {isFormOpen && (
              <Card className="mb-6 animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Complete your order</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          placeholder="Enter your full name" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="mobile">Mobile Number</Label>
                        <Input 
                          id="mobile" 
                          value={mobile} 
                          onChange={(e) => setMobile(e.target.value)} 
                          placeholder="Enter your 10-digit mobile number" 
                          type="tel"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          type="submit" 
                          className="flex-1 bg-green-600 hover:bg-green-700"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Submit via WhatsApp
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setIsFormOpen(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 mb-6">
              {acModel.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ACDetailsPage;
