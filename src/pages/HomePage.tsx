
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BrandGrid from '@/components/BrandGrid';
import PremiumShowcase from '@/components/PremiumShowcase';
import ProductFilter from '@/components/ProductFilter';
import FeaturedDeals from '@/components/FeaturedDeals';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ACSelectionGuide from '@/components/ACSelectionGuide';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { acTypes } from '@/lib/ac-selection-data';
import { motion } from 'framer-motion';
import ACInquiryForm from '@/components/ACInquiryForm';

const features = [
  {
    title: "Energy Efficiency",
    description: "Our ACs are designed to provide optimal cooling while consuming minimal electricity."
  },
  {
    title: "Smart Controls",
    description: "Control your AC from anywhere using smartphone apps and voice assistants."
  },
  {
    title: "Air Purification",
    description: "Advanced filters that remove allergens, dust, and bacteria for cleaner air."
  },
  {
    title: "Quiet Operation",
    description: "Enjoy peaceful sleep with our whisper-quiet air conditioning systems."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section with Premium Slider */}
      <Hero />

      <ACInquiryForm/>
      
      {/* AC Selection Guide Section - Positioned directly below the hero */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <ACSelectionGuide />
      </motion.div>
      
      {/* Product Filtering Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="bg-gradient-to-b from-blue-50 to-white"
      >
        <ProductFilter />
      </motion.div>
      
      {/* Featured Deals */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536566482680-fca31930a0bd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3')" }}
      >
        <div className="bg-gradient-to-r from-gray-900/90 to-gray-900/80">
          <FeaturedDeals />
        </div>
      </motion.div>
      
      {/* Brands Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <BrandGrid />
      </motion.div>
      
      {/* Features Section */}
      <motion.section 
        className="bg-gradient-to-r from-cool-blue/5 to-blue-300/20 section-padding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900">
              Premium Cooling Solutions
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of efficiency, technology, and comfort with our premium range of ACs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white shadow-lg rounded-lg overflow-hidden hover-lift border-none"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.2 
                    } 
                  }
                }}
              >
                <motion.div 
                  className="p-6"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-cool-blue" />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-500">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* PremiumShowcase Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3')" }}
      >
        <div className="bg-gradient-to-b from-gray-900/95 to-gray-900/90">
          <PremiumShowcase />
        </div>
      </motion.div>
      
      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50"
      >
        <TestimonialCarousel />
      </motion.div>
      
      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-cool-blue to-blue-600 section-padding text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Experience Supreme Comfort?
          </motion.h2>
          <motion.p 
            className="text-blue-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Find the perfect cooling solution for your needs using our guided selection process.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cool-blue">
              <Link to="/select-type">
                Start Selection
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-cool-blue hover:bg-blue-50">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default HomePage;
