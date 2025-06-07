
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

interface BrandProps {
  id: string;
  name: string;
  logo: string;
}

const brands: BrandProps[] = [
  {
    id: "samsung",
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  },
  {
    id: "lg",
    name: "LG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png",
  },
  {
    id: "voltas",
    name: "Voltas",
    logo: "https://www.voltas.com/images/logo.png",
  },
  {
    id: "daikin",
    name: "Daikin",
    logo: "https://www.daikin.com/-/media/Project/Daikin/daikin_com/global_common/ogp_common.jpg",
  },
  {
    id: "hitachi",
    name: "Hitachi",
    logo: "https://seeklogo.com/images/H/hitachi-logo-F97A69D693-seeklogo.com.png",
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Mitsubishi_logo.svg/2560px-Mitsubishi_logo.svg.png",
  },
  {
    id: "carrier",
    name: "Carrier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Carrier_Corporation_logo.svg/1280px-Carrier_Corporation_logo.svg.png",
  },
  {
    id: "bluestar",
    name: "Blue Star",
    logo: "https://5.imimg.com/data5/ANDROID/Default/2021/6/UX/RK/OC/22206362/product-jpeg-500x500.jpg",
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const BrandGrid = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-100 via-white to-gray-100" id="brands">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Premium Brands</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Choose from our selection of top-tier air conditioner manufacturers, each renowned for quality and innovation.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {brands.map((brand, index) => (
            <motion.div key={brand.id} variants={item}>
              <Link to={`/brand/${brand.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card className="overflow-hidden bg-white border border-gray-100 h-24 sm:h-28 md:h-32 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-cool-blue/30">
                    <CardContent className="p-3 sm:p-4 md:p-6 flex items-center justify-center h-full w-full">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-12 sm:max-h-14 md:max-h-16 w-auto max-w-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/200x80?text=" + brand.name;
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandGrid;
