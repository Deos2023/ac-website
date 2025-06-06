import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { acTypes } from '@/lib/ac-selection-data';
import { motion } from 'framer-motion';

// You can use your own premium background image here
const PREMIUM_BG_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";

const ACSelectionGuide = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url('${PREMIUM_BG_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.85) blur(0px)",
        }}
        aria-hidden="true"
      />
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[6px] z-10" />

      {/* Decorative Glass Circles for extra premium feel */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/30 rounded-full blur-3xl z-20 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-blue-400/20 rounded-full blur-2xl z-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-30">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 drop-shadow-lg">
            Find Your Perfect Air Conditioner
          </h2>
          <p className="text-gray-800/90 max-w-2xl mx-auto font-medium">
            Our step-by-step selection guide helps you find the ideal AC that matches your specific requirements.
          </p>
        </motion.div>
        
        {/* Selection Process Steps - Premium Glass Card */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/80 to-blue-700/80 text-white flex items-center justify-center text-xl font-bold mb-3 shadow-xl backdrop-blur-md border border-white/30">
                1
              </div>
              <p className="text-sm font-semibold text-center text-blue-900/90">AC Type</p>
            </motion.div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-blue-400/70" />
            </div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/80 to-blue-700/80 text-white flex items-center justify-center text-xl font-bold mb-3 shadow-xl backdrop-blur-md border border-white/30">
                2
              </div>
              <p className="text-sm font-semibold text-center text-blue-900/90">Brand</p>
            </motion.div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-blue-400/70" />
            </div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/80 to-blue-700/80 text-white flex items-center justify-center text-xl font-bold mb-3 shadow-xl backdrop-blur-md border border-white/30">
                3
              </div>
              <p className="text-sm font-semibold text-center text-blue-900/90">Specifications</p>
            </motion.div>
            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="text-blue-400/70" />
            </div>
          </div>
        </motion.div>

        {/* AC Types Grid - Glassmorphism Cards */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-900/90 drop-shadow">Select Your AC Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {acTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/select-brand/${type.id}`}
                  className="transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.06, boxShadow: "0 20px 40px -10px rgba(30, 64, 175, 0.15)" }} 
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    <Card className="bg-white/40 border border-white/30 hover:border-blue-400/80 hover:shadow-2xl hover:-translate-y-2 p-6 h-full flex flex-col items-center justify-center rounded-2xl backdrop-blur-lg transition-all duration-300">
                      <div className="h-36 mb-4 flex items-center justify-center">
                        <img 
                          src={type.image} 
                          alt={type.name} 
                          className="max-h-32 w-auto object-contain drop-shadow-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://via.placeholder.com/150?text=AC+Type";
                          }}
                        />
                      </div>
                      <h4 className="text-center font-semibold text-blue-900/90">{type.name}</h4>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Button - Premium Glass Style */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-500/80 to-blue-700/90 hover:from-blue-600/90 hover:to-blue-800/90 shadow-xl rounded-full px-10 py-6 text-lg font-semibold backdrop-blur-lg border border-white/30"
            >
              <Link to="/select-type" className="flex items-center gap-2">
                Start Full Selection Process
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ACSelectionGuide;