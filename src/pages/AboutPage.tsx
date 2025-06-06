
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, MapPin, Shield, ThumbsUp, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CoolBreeze AC</h1>
          <p className="text-lg text-gray-600">
            We are your trusted partners in creating comfortable living and working environments through premium air conditioning solutions.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, CoolBreeze AC started as a small family business with a vision to provide quality air conditioning solutions to homes and businesses. Over the years, we've grown into a trusted name in the industry, serving thousands of satisfied customers.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is simple: to help people create comfortable living and working environments through premium air conditioning solutions and exceptional service. We believe that comfort shouldn't be a luxury, and we're dedicated to making it accessible to everyone.
            </p>
            <p className="text-gray-600">
              Today, with over a decade of experience, we continue to uphold our values of quality, integrity, and customer satisfaction in everything we do.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our team of AC professionals"
              className="rounded-lg shadow-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.pexels.com/photos/5490985/pexels-photo-5490985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
              }}
            />
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-cool-blue/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-cool-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                <p className="text-gray-500">
                  We partner only with the most trusted brands in the industry to ensure you get the best air conditioners.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-cool-blue/10 flex items-center justify-center mb-4">
                  <ThumbsUp className="w-6 h-6 text-cool-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customer Satisfaction</h3>
                <p className="text-gray-500">
                  Our 4.8/5 customer satisfaction rating speaks to our commitment to exceptional service at every step.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-cool-blue/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-cool-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                <p className="text-gray-500">
                  Our team of knowledgeable professionals will help you find the perfect AC solution for your specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Brand Partnerships */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Brand Partnerships</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" 
                alt="Samsung" 
                className="h-12 object-contain mx-auto"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" 
                alt="LG" 
                className="h-12 object-contain mx-auto"
              />
              <img 
                src="https://www.voltas.com/images/logo.png" 
                alt="Voltas" 
                className="h-12 object-contain mx-auto"
              />
              <img 
                src="https://www.daikin.com/-/media/Project/Daikin/daikin_com/global_common/ogp_common.jpg" 
                alt="Daikin" 
                className="h-12 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Service Coverage */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cool-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Service Areas</h3>
                    <p className="text-gray-500 mb-4">
                      We proudly serve the following metropolitan areas and surrounding communities:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-gray-700">
                      <li>• Delhi NCR</li>
                      <li>• Mumbai</li>
                      <li>• Bangalore</li>
                      <li>• Hyderabad</li>
                      <li>• Chennai</li>
                      <li>• Pune</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cool-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-500 mb-4">
                      We're available when you need us:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-medium">Monday - Friday:</span> 9:00 AM - 8:00 PM</li>
                      <li><span className="font-medium">Saturday:</span> 10:00 AM - 6:00 PM</li>
                      <li><span className="font-medium">Sunday:</span> 11:00 AM - 4:00 PM</li>
                      <li className="text-cool-blue mt-2">24/7 Emergency Service Available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-cool-blue text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the CoolBreeze Difference?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Browse our selection of premium air conditioners or get in touch with our team for personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/" 
              className="px-6 py-2 bg-white text-cool-blue font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              Explore Products
            </a>
            <a 
              href="/contact" 
              className="px-6 py-2 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
