
export interface ACModel {
  id: string;
  brand: string;
  tonnage: string;
  starRating: string;
  price: number;
  modelNumber: string;
  features: string[];
  image: string;
  description: string;
}

// This would typically come from an API, but for this demo we'll hard-code some data
export const acModels: ACModel[] = [
  {
    id: "samsung-1-3",
    brand: "samsung",
    tonnage: "1",
    starRating: "3",
    price: 32999,
    modelNumber: "AR12TYHZEWK",
    features: [
      "Digital Inverter Technology",
      "Fast Cooling",
      "Energy Efficient",
      "Low Noise Operation",
      "Anti-bacterial Filter"
    ],
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ar12by4yawk-tl/gallery/in-ar9500t-wind-free-ar12by4yawk-tl-530957957?$650_519_PNG$",
    description: "Samsung 1 Ton 3 Star Inverter Split AC with Anti-bacterial Filter for clean air and crystal filter."
  },
  {
    id: "samsung-1-5",
    brand: "samsung",
    tonnage: "1",
    starRating: "5",
    price: 42999,
    modelNumber: "AR12TYHZEW5",
    features: [
      "Digital Inverter Technology",
      "Smart WiFi Control",
      "Energy Efficient++",
      "Ultra Low Noise",
      "Anti-bacterial Filter",
      "4-way Swing"
    ],
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ar12by5yawk-tl/gallery/in-ar9500t-wind-free-ar12by5yawk-tl-530957957?$650_519_PNG$",
    description: "Premium Samsung 1 Ton 5 Star Inverter Split AC with WiFi connectivity and advanced filtration."
  },
  {
    id: "samsung-1.5-3",
    brand: "samsung",
    tonnage: "1.5",
    starRating: "3",
    price: 39999,
    modelNumber: "AR18TYHZEWK",
    features: [
      "Digital Inverter Technology",
      "Fast Cooling",
      "Energy Efficient",
      "Low Noise Operation",
      "Anti-bacterial Filter"
    ],
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ar18by4yawk-tl/gallery/in-ar9500t-wind-free-ar18by4yawk-tl-530957957?$650_519_PNG$",
    description: "Samsung 1.5 Ton 3 Star Inverter Split AC with increased cooling capacity for medium-sized rooms."
  },
  {
    id: "samsung-1.5-5",
    brand: "samsung",
    tonnage: "1.5",
    starRating: "5",
    price: 49999,
    modelNumber: "AR18TYHZEW5",
    features: [
      "Digital Inverter Technology",
      "Smart WiFi Control",
      "Energy Efficient++",
      "Ultra Low Noise",
      "Anti-bacterial Filter",
      "4-way Swing"
    ],
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ar18by5yawk-tl/gallery/in-ar9500t-wind-free-ar18by5yawk-tl-530957957?$650_519_PNG$",
    description: "Premium Samsung 1.5 Ton 5 Star Inverter Split AC with WiFi connectivity for larger room coverage."
  },
  {
    id: "samsung-2-3",
    brand: "samsung",
    tonnage: "2",
    starRating: "3",
    price: 54999,
    modelNumber: "AR24TYHZEWK",
    features: [
      "Digital Inverter Technology",
      "Fast Cooling",
      "Energy Efficient",
      "Low Noise Operation",
      "Anti-bacterial Filter"
    ],
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ar24by4yawk-tl/gallery/in-ar9500t-wind-free-ar24by4yawk-tl-530957957?$650_519_PNG$",
    description: "Samsung 2 Ton 3 Star Inverter Split AC ideal for large rooms and office spaces."
  },
  // LG models
  {
    id: "lg-1-3",
    brand: "lg",
    tonnage: "1",
    starRating: "3",
    price: 33999,
    modelNumber: "LS-Q12YNZA",
    features: [
      "Dual Inverter Compressor",
      "Low Noise Operation",
      "4-in-1 Convertible Cooling",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "https://www.lg.com/in/images/split-ac/md07553275/gallery/BS-Q12YNZE-Split-Ac-Front-View-D-01.jpg",
    description: "LG 1 Ton 3 Star Dual Inverter Split AC with Convertible 4-in-1 Cooling."
  },
  {
    id: "lg-1-5",
    brand: "lg",
    tonnage: "1",
    starRating: "5",
    price: 43999,
    modelNumber: "LS-Q12YNZA5",
    features: [
      "Dual Inverter Compressor",
      "AI Convertible 6-in-1 Cooling",
      "UVnano™ Technology",
      "Wi-Fi Control with ThinQ",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "https://www.lg.com/in/images/split-ac/md07553275/gallery/BS-Q12YNZE-Split-Ac-Front-View-D-01.jpg",
    description: "Premium LG 1 Ton 5 Star Dual Inverter Split AC with WiFi and advanced health features."
  },
  {
    id: "lg-1.5-3",
    brand: "lg",
    tonnage: "1.5",
    starRating: "3",
    price: 40999,
    modelNumber: "LS-Q18YNZA",
    features: [
      "Dual Inverter Compressor",
      "Low Noise Operation",
      "4-in-1 Convertible Cooling",
      "HD Filter with Anti-Virus Protection",
      "Smart Diagnosis"
    ],
    image: "https://www.lg.com/in/images/split-ac/md07534093/gallery/RS-Q19CNYE-Split-AC-Front-View-D-01.jpg",
    description: "LG 1.5 Ton 3 Star Dual Inverter Split AC with superior cooling for medium-sized rooms."
  },
  // Voltas models
  {
    id: "voltas-1-3",
    brand: "voltas",
    tonnage: "1",
    starRating: "3",
    price: 31999,
    modelNumber: "123V DZX",
    features: [
      "High Energy Efficiency Ratio",
      "Anti-dust Filter",
      "Copper Condenser Coil",
      "Self Diagnosis",
      "Sleep Mode"
    ],
    image: "https://www.voltasac.com/media/12130/voltas-adjustable-inverter-ac.png",
    description: "Voltas 1 Ton 3 Star Split AC with high efficiency and value for money."
  },
  {
    id: "voltas-1.5-3",
    brand: "voltas",
    tonnage: "1.5",
    starRating: "3",
    price: 37999,
    modelNumber: "183V DZX",
    features: [
      "High Energy Efficiency Ratio",
      "Anti-dust Filter",
      "Copper Condenser Coil",
      "Self Diagnosis",
      "Sleep Mode"
    ],
    image: "https://www.voltasac.com/media/12130/voltas-adjustable-inverter-ac.png",
    description: "Voltas 1.5 Ton 3 Star Split AC, perfect balance of performance and affordability."
  },
  // Daikin models
  {
    id: "daikin-1-3",
    brand: "daikin",
    tonnage: "1",
    starRating: "3",
    price: 35999,
    modelNumber: "FTKG35TV16",
    features: [
      "Power Chill Operation",
      "Econo Mode",
      "Coanda Airflow",
      "PM 2.5 Filter",
      "Dew Clean Technology"
    ],
    image: "https://www.daikinindia.com/sites/default/files/2022-04/RKP10%20SMKE%20-%2001%20Transparent%20BG_0.png",
    description: "Daikin 1 Ton 3 Star Inverter Split AC with Power Chill Operation."
  },
  {
    id: "daikin-1-5",
    brand: "daikin",
    tonnage: "1",
    starRating: "5",
    price: 45999,
    modelNumber: "FTKG35TV16X",
    features: [
      "Power Chill Operation",
      "Coanda Airflow",
      "PM 2.5 Filter",
      "Dew Clean Technology",
      "Intelligent Eye",
      "Flash Streamer Technology"
    ],
    image: "https://www.daikinindia.com/sites/default/files/2022-04/RKP10%20SMKE%20-%2001%20Transparent%20BG_0.png",
    description: "Premium Daikin 1 Ton 5 Star Inverter Split AC with advanced air purification."
  }
];

export const getTonnageOptions = (brand: string): string[] => {
  const tonnages = new Set<string>();
  
  acModels.filter(model => model.brand === brand)
    .forEach(model => tonnages.add(model.tonnage));
  
  return Array.from(tonnages).sort((a, b) => parseFloat(a) - parseFloat(b));
};

export const getStarRatings = (brand: string, tonnage: string): string[] => {
  const ratings = new Set<string>();
  
  acModels.filter(model => model.brand === brand && model.tonnage === tonnage)
    .forEach(model => ratings.add(model.starRating));
  
  return Array.from(ratings).sort((a, b) => parseInt(a) - parseInt(b));
};

export const getACModel = (brand: string, tonnage: string, starRating: string): ACModel | undefined => {
  return acModels.find(model => 
    model.brand === brand && 
    model.tonnage === tonnage && 
    model.starRating === starRating
  );
};

export const getACModels = (brand: string): ACModel[] => {
  return acModels.filter(model => model.brand === brand);
};
