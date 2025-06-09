import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const deals = [
  {
    id: 1,
    title: "Unlock Premium Cooling",
    description: "Up to 50%* off | Cashback up to ₹7500*",
    image: "/lovable-uploads/samsung/split-ac/1.png",
    bgColor: "bg-gradient-to-r from-gray-900 to-gray-800",
    link: "/brand/samsung"
  },
  {
    id: 2,
    title: "AI Powered Efficiency",
    description: "Up to 44%* off | Cashback up to ₹10%*",
    image: "/lovable-uploads/lg/split-ac/1.png",
    bgColor: "bg-gradient-to-r from-blue-900 to-blue-800",
    link: "/brand/lg"
  },
  {
    id: 3,
    title: "Superior Cooling Technology",
    description: "Up to 40%* off | No Cost EMI Available",
    image: "/lovable-uploads/mitsubishi/split-ac/1.png",
    bgColor: "bg-gradient-to-r from-indigo-900 to-indigo-800",
    link: "/brand/daikin"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Use your own premium background image here
const PREMIUM_BG_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";

const FeaturedDeals = () => {
  return (
    <section
      className="relative py-20 min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url('${PREMIUM_BG_IMAGE}')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[6px] z-0" />

      {/* Decorative Glass Circles for extra premium feel */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/30 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-blue-400/20 rounded-full blur-2xl z-10 pointer-events-none" />

      <motion.div 
        className="container mx-auto relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 drop-shadow-lg">Featured Offers</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto font-medium">
            Discover our exclusive deals on premium air conditioning solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div 
              key={deal.id}
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
                className={`${deal.bgColor} rounded-lg overflow-hidden shadow-xl relative`}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-60 object-contain pt-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/300x200?text=AC+Image";
                  }}
                />
                <div className="p-6 relative z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                  <p className="mb-4">{deal.description}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild className="bg-white text-gray-900 hover:bg-gray-100 group">
                      <Link to={deal.link}>
                        Buy Now
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedDeals;