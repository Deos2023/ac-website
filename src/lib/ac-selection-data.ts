export interface ACProduct {
  id: string;
  type: ACType;
  brand: Brand;
  inverter: InverterType;
  tonnage: string;
  starRating: string;
  modelNumber: string;
  price: number;
  features: string[];
  image: string; // Main image (for backward compatibility)
  images: string[]; // Array of images for product gallery
  description: string;
}

export type ACType = 'split' | 'window' | 'cassette' | 'multi-split' | 'one-way-cassette';
export type Brand = 'o-general' | 'mitsubishi-heavy' | 'mitsubishi-electric' | 'mitsubishi-akabishi' | 'daikin' | 'panasonic' | 'blue-star' | 'carrier' | 'hitachi' | 'lg' | 'voltas' | 'hisense' | 'godrej' | 'lloyd' | 'vestar';
export type InverterType = 'inverter' | 'non-inverter';

export const acTypes: { id: ACType; name: string; image: string }[] = [
  {
    id: 'split',
    name: 'SPLIT AC',
    image: "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png"
  },
  {
    id: 'window',
    name: 'WINDOW AC',
    image: "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png"
  },
  {
    id: 'one-way-cassette',
    name: '1-WAY CASSETTE AC',
    image: "/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png"
  },
  {
    id: 'cassette',
    name: '4-WAY CASSETTE AC',
    image: "/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png"
  },
  {
    id: 'multi-split',
    name: 'MULTI AC',
    image: "/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png"
  }
];

export const brands: { id: Brand; name: string; logo: string }[] = [
  { id: 'o-general', name: 'O GENERAL', logo: "/lovable-uploads/1524253e-afab-4038-9a4e-2af8f24418c1.png" },
  { id: 'mitsubishi-heavy', name: 'MITSUBISHI HEAVY INDUSTRIES', logo: "/lovable-uploads/2b6a0337-071e-49f0-8853-b8d4ad5c5f6d.png" },
  { id: 'mitsubishi-electric', name: 'MITSUBISHI ELECTRIC', logo: "/lovable-uploads/97d42845-0d65-42cd-9e69-51af08f84088.png" },
  { id: 'mitsubishi-akabishi', name: 'MITSUBISHI ELECTRIC AKABISHI', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsubishi_Electric_logo.svg/1280px-Mitsubishi_Electric_logo.svg.png" },
  { id: 'daikin', name: 'DAIKIN', logo: "/lovable-uploads/94100e13-1446-47ff-8bb4-4cd8fb95035f.png" },
  { id: 'panasonic', name: 'PANASONIC', logo: "/lovable-uploads/43b71c61-896e-4271-a7b2-a9a165a9f892.png" },
  { id: 'blue-star', name: 'BLUE STAR', logo: "/lovable-uploads/72002498-a99e-40af-8002-2a7eddb8ffc5.png" },
  { id: 'carrier', name: 'CARRIER', logo: "/lovable-uploads/4e7ddae9-0f68-40af-a6e0-27ecaa0e02ca.png" },
  { id: 'hitachi', name: 'HITACHI', logo: "/lovable-uploads/833f8e8e-835d-435d-9db4-82dc17c80ebb.png" },
  { id: 'lg', name: 'LG', logo: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png" },
  { id: 'voltas', name: 'VOLTAS', logo: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png" },
  { id: 'hisense', name: 'HISENSE', logo: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png" },
  { id: 'godrej', name: 'GODREJ', logo: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png" },
  { id: 'lloyd', name: 'LLOYD', logo: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png" },
  { id: 'vestar', name: 'VESTAR', logo: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png" }
];

export const inverterTypes: { id: InverterType; name: string }[] = [
  { id: 'inverter', name: 'Inverter AC' },
  { id: 'non-inverter', name: 'Non-Inverter AC' }
];

export const tonnageOptions = ['1.0T', '1.14T', '1.5T', '2.0T', '2.5T', '3.0T'];
export const starRatings = ['1★', '2★', '3★', '4★', '5★'];

// This is just a subset of the data for example purposes
// In a real application, you would have a complete database
export const acProducts: ACProduct[] = [
  {
    id: 'og-split-1t-inv-5star',
    type: 'split',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.0T',
    starRating: '5★',
    modelNumber: '12CGTB',
    price: 50200,
    features: [
      'Digital Inverter Technology',
      'Plasma Air Purifier',
      'Auto Restart',
      'Sleep Mode',
      'Smart Diagnosis'
    ],
    image: "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    images: [
      "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
      "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png",
      "/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
      "/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
      "/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png"
    ],
    description: 'O GENERAL 1.0T INV 5* 12CGTB with advanced cooling and energy efficiency'
  },
  {
    id: 'og-split-1t-inv-3star',
    type: 'split',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.0T',
    starRating: '3★',
    modelNumber: '12CPAA',
    price: 39790,
    features: [
      'Digital Inverter Technology',
      'Auto Restart',
      'Sleep Mode',
      'Energy Saving Mode'
    ],
    image: "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    images: [
      "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
      "/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
      "/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png",
      "/lovable-uploads/32b80bca-8b8e-4aac-8316-76596978bb51.png"
    ],
    description: 'O GENERAL 1.0T INV 3* 12CPAA with reliable cooling performance'
  },
  {
    id: 'og-split-1-5t-inv-5star',
    type: 'split',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '18CGTB',
    price: 63490,
    features: [
      'Digital Inverter Technology',
      'Plasma Air Purifier',
      'Auto Restart',
      'Sleep Mode',
      'Smart Diagnosis',
      '4-Way Air Direction'
    ],
    image: "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    images: [
      "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
      "/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
      "/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png",
      "/lovable-uploads/97d42845-0d65-42cd-9e69-51af08f84088.png",
      "/lovable-uploads/94100e13-1446-47ff-8bb4-4cd8fb95035f.png"
    ],
    description: 'O GENERAL 1.5T INV 5* 18CGTB perfect for medium to large rooms'
  },
  {
    id: 'daikin-split-1t-inv-5star',
    type: 'split',
    brand: 'daikin',
    inverter: 'inverter',
    tonnage: '1.0T',
    starRating: '5★',
    modelNumber: 'FTKU35UV16',
    price: 38600,
    features: [
      'Power Chill Operation',
      'Econo Mode',
      'Coanda Airflow',
      'PM 2.5 Filter',
      'Wi-Fi Optional'
    ],
    image: "public/lovable-uploads/1a4210eb-3a20-4fd7-9983-a8b981ece7a8.png",
    images: [
      "public/lovable-uploads/1a4210eb-3a20-4fd7-9983-a8b981ece7a8.png",
      "public/lovable-uploads/94100e13-1446-47ff-8bb4-4cd8fb95035f.png",
      "public/lovable-uploads/43b71c61-896e-4271-a7b2-a9a165a9f892.png",
      "public/lovable-uploads/72002498-a99e-40af-8002-2a7eddb8ffc5.png"
    ],
    description: 'DAIKIN 1.0T INV 5* FTKU35UV16 with advanced Japanese technology'
  },
  {
    id: 'lg-split-1-5t-inv-5star',
    type: 'split',
    brand: 'lg',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: 'US-Q19BNZE',
    price: 46000,
    features: [
      'Dual Inverter Compressor',
      'AI Convertible 6-in-1 Cooling',
      'HD Filter with Anti-Virus Protection',
      'Smart Diagnosis',
      '4-Way Swing'
    ],
    image: "public/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
    images: [
      "public/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
      "public/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
      "public/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
      "public/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
      "public/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
    ],
    description: 'LG 1.5T INV 5* US-Q19BNZE with AI technology and superior cooling'
  },
  {
    id: 'daikin-cassette-2t-inv-3star',
    type: 'cassette',
    brand: 'daikin',
    inverter: 'inverter',
    tonnage: '2.0T',
    starRating: '3★',
    modelNumber: 'FCVFQ71',
    price: 82000,
    features: [
      '360° Airflow',
      'Anti-Corrosion Treatment',
      'Individual Flap Control',
      'Fresh Air Intake',
      'Low Noise Operation'
    ],
    image: "public/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png",
    images: [
      "public/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png",
      "public/lovable-uploads/94100e13-1446-47ff-8bb4-4cd8fb95035f.png",
      "public/lovable-uploads/1a4210eb-3a20-4fd7-9983-a8b981ece7a8.png",
      "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
    ],
    description: 'DAIKIN 2.0T INV 3* FCVFQ71 Cassette AC for commercial spaces'
  },
  {
    id: 'voltas-window-1-5t-inv-5star',
    type: 'window',
    brand: 'voltas',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '185V VECTRA PEARL',
    price: 36500,
    features: [
      'High Energy Efficiency',
      'Anti-dust Filter',
      'Sleep Mode',
      'Self Diagnosis',
      'Copper Condenser'
    ],
    image: "public/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
    images: [
      "public/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
      "public/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
      "public/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
      "public/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
      "public/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
    ],
    description: 'VOLTAS 1.5T INV 5* 185V VECTRA PEARL Window AC with modern features'
  },
  /* --- Add these entries to the acProducts array in src/lib/ac-selection-data.ts --- */

  // O GENERAL
  {
    id: 'og-window-0.8t-noninv-3star-09bbwa',
    type: 'window',
    brand: 'o-general',
    inverter: 'non-inverter',
    tonnage: '0.8T',
    starRating: '3★',
    modelNumber: '09BBWA',
    price: 27490,
    features: ['Reliable cooling', 'Energy efficient', 'Durable build'],
    image: '/lovable-uploads/ogeneral-window.png',
    images: [
      "/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
      "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
      "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png",
      "/lovable-uploads/1524253e-afab-4038-9a4e-2af8f24418c1.png"
    ],
    description: 'O GENERAL 0.8T NON INV 3★ 09BBWA Window AC'
  },
  {
    id: 'og-window-1.2t-inv-5star-14chwa',
    type: 'window',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.2T',
    starRating: '5★',
    modelNumber: '14CHWA',
    price: 33640,
    features: ['Inverter technology', 'High star rating', 'Silent operation'],
    image: '/lovable-uploads/ogeneral-window.png',
    images: [
      "/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
      "/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png",
      "/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png",
      "/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
      "/lovable-uploads/2b6a0337-071e-49f0-8853-b8d4ad5c5f6d.png"
    ],
    description: 'O GENERAL 1.2T INV 5★ 14CHWA Window AC'
  },
  {
    id: 'og-window-1.2t-noninv-3star-14bbaa',
    type: 'window',
    brand: 'o-general',
    inverter: 'non-inverter',
    tonnage: '1.2T',
    starRating: '3★',
    modelNumber: '14BBAA',
    price: 30780,
    features: ['Energy efficient', 'Robust design'],
    image: '/lovable-uploads/ogeneral-window.png',
    images: [
      "/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
      "/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
      "/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
    ],
    description: 'O GENERAL 1.2T NON INV 3★ 14BBAA Window AC'
  },
  {
    id: 'og-window-1.5t-inv-5star-18chaa',
    type: 'window',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '18CHAA',
    price: 43590,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/ogeneral-window.png',
    images: [
      "/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
      "/lovable-uploads/97d42845-0d65-42cd-9e69-51af08f84088.png",
      "/lovable-uploads/94100e13-1446-47ff-8bb4-4cd8fb95035f.png",
      "/lovable-uploads/43b71c61-896e-4271-a7b2-a9a165a9f892.png",
      "/lovable-uploads/WhatsApp Image 2025-05-28 at 12.44.07_8c32963b.jpg"
    ],
    description: 'O GENERAL 1.5T INV 5★ 18CHAA Window AC'
  },
  {
    id: 'og-window-1.5t-noninv-3star-18bbaa',
    type: 'window',
    brand: 'o-general',
    inverter: 'non-inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: '18BBAA',
    price: 40750,
    features: ['Powerful cooling', 'Energy saving'],
    image: '/lovable-uploads/ogeneral-window.png',
    images: [
      "/lovable-uploads/og-window-1-5-3star-1.png",
      "/lovable-uploads/og-window-1-5-3star-2.png",
      "/lovable-uploads/og-window-1-5-3star-3.png",
      "/lovable-uploads/og-window-1-5-3star-4.png"
    ],
    description: 'O GENERAL 1.5T NON INV 3★ 18BBAA Window AC'
  },
  {
    id: 'og-window-1.8t-inv-5star-22chaa',
    type: 'window',
    brand: 'o-general',
    inverter: 'inverter',
    tonnage: '1.8T',
    starRating: '5★',
    modelNumber: '22CHAA',
    price: 49260,
    features: ['Large capacity', 'Inverter tech'],
    image: '/lovable-uploads/ogeneral-window.png',
    images: [
      "/lovable-uploads/og-window-1-8-5star-1.png",
      "/lovable-uploads/og-window-1-8-5star-2.png",
      "/lovable-uploads/og-window-1-8-5star-3.png",
      "/lovable-uploads/og-window-1-8-5star-4.png",
      "/lovable-uploads/og-window-1-8-5star-5.png"
    ],
    description: 'O GENERAL 1.8T INV 5★ 22CHAA Window AC'
  },
  {
    id: 'og-window-1.8t-noninv-3star-22bbaa',
    type: 'window',
    brand: 'o-general',
    inverter: 'non-inverter',
    tonnage: '1.8T',
    starRating: '3★',
    modelNumber: '22BBAA',
    price: 46420,
    features: ['High capacity', 'Energy efficient'],
    image: '/lovable-uploads/ogeneral-window.png',
    images: [
      "/lovable-uploads/og-window-1-8-3star-1.png",
      "/lovable-uploads/og-window-1-8-3star-2.png",
      "/lovable-uploads/og-window-1-8-3star-3.png",
      "/lovable-uploads/og-window-1-8-3star-4.png"
    ],
    description: 'O GENERAL 1.8T NON INV 3★ 22BBAA Window AC'
  },

  // MITSUBISHI ELECTRIC AKABISHI
  {
    id: 'mitsubishi-akabishi-1.0t-noninv-3star-ae13',
    type: 'window',
    brand: 'mitsubishi-akabishi',
    inverter: 'non-inverter',
    tonnage: '1.0T',
    starRating: '3★',
    modelNumber: 'AE13',
    price: 29800,
    features: ['Reliable performance', 'Energy saving'],
    image: '/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE13VG/1.png',
    images: [
      "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE13VG/1.png",
      "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE13VG/2.webp",
      "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE13VG/3.webp",
     
    ],
    description: 'MITSUBISHI AKABISHI 1.0T NON INV 3★ AE13 Window AC'
  },
  {
    id: 'mitsubishi-akabishi-1.5t-noninv-3star-ae18sg',
    type: 'window',
    brand: 'mitsubishi-akabishi',
    inverter: 'non-inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'AE18SG',
    price: 31800,
    features: ['Powerful cooling', 'Durable'],
    image: '/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE18VG/1.png',
    images: [
      "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE18VG/1.png",
      "/lovable-uploads/mitsubishi/mitsubishi_elec_AKABISHI/AE18VG/2.webp",
    
    ],
    description: 'MITSUBISHI AKABISHI 1.5T NON INV 3★ AE18SG Window AC'
  },

  // VOLTAS
  {
    id: 'voltas-1.0t-noninv-3star-123vectraplatina',
    type: 'window',
    brand: 'voltas',
    inverter: 'non-inverter',
    tonnage: '1.0T',
    starRating: '3★',
    modelNumber: '123 VECTRA PLATINA',
    price: 27382,
    features: ['High cooling', 'Energy efficient'],
    image: '/lovable-uploads/voltas-window.png',
    images: [
      "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
      "/lovable-uploads/4e7ddae9-0f68-40af-a6e0-27ecaa0e02ca.png",
      "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
      "/lovable-uploads/72002498-a99e-40af-8002-2a7eddb8ffc5.png"
    ],
    description: 'VOLTAS 1.0T NON INV 3★ 123 VECTRA PLATINA Window AC'
  },
  {
    id: 'voltas-1.5t-inv-5star-185vvectrapearl',
    type: 'window',
    brand: 'voltas',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '185V VECTRA PEARL',
    price: 36500,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/voltas-window.png',
    images: [
      "/lovable-uploads/7994dc55-fdbd-440b-8eca-97984f41f39b.png",
      "/lovable-uploads/833f8e8e-835d-435d-9db4-82dc17c80ebb.png",
      "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
      "/lovable-uploads/94100e13-1446-47ff-8bb4-4cd8fb95035f.png",
      "/lovable-uploads/97d42845-0d65-42cd-9e69-51af08f84088.png"
    ],
    description: 'VOLTAS 1.5T INV 5★ 185V VECTRA PEARL Window AC'
  },
  {
    id: 'voltas-1.5t-noninv-3star-183vectrapearl',
    type: 'window',
    brand: 'voltas',
    inverter: 'non-inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: '183 VECTRA PEARL',
    price: 30420,
    features: ['Energy saving', 'Turbo cooling'],
    image: '/lovable-uploads/voltas-window.png',
    images: [
      "/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
      "/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png",
      "/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png"
    ],
    description: 'VOLTAS 1.5T NON INV 3★ 183 VECTRA PEARL Window AC'
  },
  {
    id: 'voltas-2.0t-noninv-2star-242vectraplus',
    type: 'window',
    brand: 'voltas',
    inverter: 'non-inverter',
    tonnage: '2.0T',
    starRating: '2★',
    modelNumber: '242 VECTRA PLUS',
    price: 36104,
    features: ['Large capacity', 'Energy efficient'],
    image: '/lovable-uploads/voltas-window.png',
    images: [
      "/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
      "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
      "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
      "/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png"
    ],
    description: 'VOLTAS 2.0T NON INV 2★ 242 VECTRA PLUS Window AC'
  },

  // BLUE STAR
  {
    id: 'bluestar-1.0t-noninv-3star-wfd312l',
    type: 'window',
    brand: 'blue-star',
    inverter: 'non-inverter',
    tonnage: '1.0T',
    starRating: '3★',
    modelNumber: 'WFD312L',
    price: 27000,
    features: ['Energy efficient', 'Turbo cool'],
    image: '/lovable-uploads/bluestar-window.png',
    images: [
      "/lovable-uploads/bs1-0-3star-1.png",
      "/lovable-uploads/bs1-0-3star-2.png",
      "/lovable-uploads/bs1-0-3star-3.png",
      "/lovable-uploads/bs1-0-3star-4.png"
    ],
    description: 'BLUE STAR 1.0T NON INV 3★ WFD312L Window AC'
  },
  {
    id: 'bluestar-1.5t-inv-5star',
    type: 'window',
    brand: 'blue-star',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '',
    price: 37000,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/bluestar-window.png',
    images: [
      "/lovable-uploads/bs1-5-5star-1.png",
      "/lovable-uploads/bs1-5-5star-2.png",
      "/lovable-uploads/bs1-5-5star-3.png",
      "/lovable-uploads/bs1-5-5star-4.png",
      "/lovable-uploads/bs1-5-5star-5.png"
    ],
    description: 'BLUE STAR 1.5T INV 5★ Window AC'
  },
  {
    id: 'bluestar-1.5t-noninv-3star-wfd318l',
    type: 'window',
    brand: 'blue-star',
    inverter: 'non-inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'WFD318L',
    price: 31200,
    features: ['Energy efficient', 'Turbo cool'],
    image: '/lovable-uploads/bluestar-window.png',
    images: [
      "/lovable-uploads/bs1-5-3star-1.png",
      "/lovable-uploads/bs1-5-3star-2.png",
      "/lovable-uploads/bs1-5-3star-3.png",
      "/lovable-uploads/bs1-5-3star-4.png"
    ],
    description: 'BLUE STAR 1.5T NON INV 3★ WFD318L Window AC'
  },
  {
    id: 'bluestar-2.0t-noninv-3star-wfd324',
    type: 'window',
    brand: 'blue-star',
    inverter: 'non-inverter',
    tonnage: '2.0T',
    starRating: '3★',
    modelNumber: 'WFD324',
    price: 39500,
    features: ['Large capacity', 'Energy efficient'],
    image: '/lovable-uploads/bluestar-window.png',
    images: [
      "/lovable-uploads/bs2-0-3star-1.png",
      "/lovable-uploads/bs2-0-3star-2.png",
      "/lovable-uploads/bs2-0-3star-3.png",
      "/lovable-uploads/bs2-0-3star-4.png",
      "/lovable-uploads/bs2-0-3star-5.png"
    ],
    description: 'BLUE STAR 2.0T NON INV 3★ WFD324 Window AC'
  },

  // CARRIER
  {
    id: 'carrier-1.0t-noninv-3star-estrella-fx',
    type: 'window',
    brand: 'carrier',
    inverter: 'non-inverter',
    tonnage: '1.0T',
    starRating: '3★',
    modelNumber: 'ESTRELLA FX',
    price: 28891,
    features: ['Energy efficient', 'Turbo mode'],
    image: '/lovable-uploads/carrier-window.png',
    images: [
      "/lovable-uploads/carrier1-0-3star-1.png",
      "/lovable-uploads/carrier1-0-3star-2.png",
      "/lovable-uploads/carrier1-0-3star-3.png",
      "/lovable-uploads/carrier1-0-3star-4.png"
    ],
    description: 'CARRIER 1.0T NON INV 3★ ESTRELLA FX Window AC'
  },
  {
    id: 'carrier-1.5t-inv-5star-estrella-fxi',
    type: 'window',
    brand: 'carrier',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: 'ESTRELLA FXI',
    price: 37054,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/carrier-window.png',
    images: [
      "/lovable-uploads/carrier1-5-5star-1.png",
      "/lovable-uploads/carrier1-5-5star-2.png",
      "/lovable-uploads/carrier1-5-5star-3.png",
      "/lovable-uploads/carrier1-5-5star-4.png",
      "/lovable-uploads/carrier1-5-5star-5.png"
    ],
    description: 'CARRIER 1.5T INV 5★ ESTRELLA FXI Window AC'
  },
  {
    id: 'carrier-1.5t-inv-3star-estrella-fxi',
    type: 'window',
    brand: 'carrier',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'ESTRELLA FXI',
    price: 34365,
    features: ['Inverter compressor', 'Energy efficient'],
    image: '/lovable-uploads/carrier-window.png',
    images: [
      "/lovable-uploads/carrier1-5-3star-1.png",
      "/lovable-uploads/carrier1-5-3star-2.png",
      "/lovable-uploads/carrier1-5-3star-3.png",
      "/lovable-uploads/carrier1-5-3star-4.png"
    ],
    description: 'CARRIER 1.5T INV 3★ ESTRELLA FXI Window AC'
  },
  {
    id: 'carrier-1.5t-noninv-3star-esterlla-fx',
    type: 'window',
    brand: 'carrier',
    inverter: 'non-inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'ESTERLLA FX',
    price: 31100,
    features: ['Energy efficient', 'Turbo mode'],
    image: '/lovable-uploads/carrier-window.png',
    images: [
      "/lovable-uploads/carrier1-5-3star-fx-1.png",
      "/lovable-uploads/carrier1-5-3star-fx-2.png",
      "/lovable-uploads/carrier1-5-3star-fx-3.png",
      "/lovable-uploads/carrier1-5-3star-fx-4.png"
    ],
    description: 'CARRIER 1.5T NON INV 3★ ESTERLLA FX Window AC'
  },
  {
    id: 'carrier-2.0t-noninv-3star-esterlla-fx',
    type: 'window',
    brand: 'carrier',
    inverter: 'non-inverter',
    tonnage: '2.0T',
    starRating: '3★',
    modelNumber: 'ESTERLLA FX',
    price: 38495,
    features: ['Large capacity', 'Energy efficient'],
    image: '/lovable-uploads/carrier-window.png',
    images: [
      "/lovable-uploads/carrier2-0-3star-1.png",
      "/lovable-uploads/carrier2-0-3star-2.png",
      "/lovable-uploads/carrier2-0-3star-3.png",
      "/lovable-uploads/carrier2-0-3star-4.png",
      "/lovable-uploads/carrier2-0-3star-5.png"
    ],
    description: 'CARRIER 2.0T NON INV 3★ ESTERLLA FX Window AC'
  },

  // GODREJ
  {
    id: 'godrej-1.5t-inv-5star',
    type: 'window',
    brand: 'godrej',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: '',
    price: 34000,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/godrej-window.png',
    images: [
      "/lovable-uploads/godrej1-5-5star-1.png",
      "/lovable-uploads/godrej1-5-5star-2.png",
      "/lovable-uploads/godrej1-5-5star-3.png",
      "/lovable-uploads/godrej1-5-5star-4.png",
      "/lovable-uploads/godrej1-5-5star-5.png"
    ],
    description: 'GODREJ 1.5T INV 5★ Window AC'
  },
  {
    id: 'godrej-1.5t-noninv-3star',
    type: 'window',
    brand: 'godrej',
    inverter: 'non-inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: '',
    price: 29500,
    features: ['Energy efficient', 'Turbo mode'],
    image: '/lovable-uploads/godrej-window.png',
    images: [
      "/lovable-uploads/godrej1-5-3star-1.png",
      "/lovable-uploads/godrej1-5-3star-2.png",
      "/lovable-uploads/godrej1-5-3star-3.png",
      "/lovable-uploads/godrej1-5-3star-4.png"
    ],
    description: 'GODREJ 1.5T NON INV 3★ Window AC'
  },

  // HITACHI
  {
    id: 'hitachi-1.0t-noninv-2star-raw312hedo',
    type: 'window',
    brand: 'hitachi',
    inverter: 'non-inverter',
    tonnage: '1.0T',
    starRating: '2★',
    modelNumber: 'RAW312HEDO',
    price: 28200,
    features: ['Energy efficient', 'Turbo mode'],
    image: '/lovable-uploads/hitachi-window.png',
    images: [
      "/lovable-uploads/hitachi1-0-2star-1.png",
      "/lovable-uploads/hitachi1-0-2star-2.png",
      "/lovable-uploads/hitachi1-0-2star-3.png",
      "/lovable-uploads/hitachi1-0-2star-4.png"
    ],
    description: 'HITACHI 1.0T NON INV 2★ RAW312HEDO Window AC'
  },
  {
    id: 'hitachi-1.5t-inv-5star-raw518hheo',
    type: 'window',
    brand: 'hitachi',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: 'RAW518HHEO',
    price: 39500,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/hitachi-window.png',
    images: [
      "/lovable-uploads/hitachi1-5-5star-1.png",
      "/lovable-uploads/hitachi1-5-5star-2.png",
      "/lovable-uploads/hitachi1-5-5star-3.png",
      "/lovable-uploads/hitachi1-5-5star-4.png",
      "/lovable-uploads/hitachi1-5-5star-5.png"
    ],
    description: 'HITACHI 1.5T INV 5★ RAW518HHEO Window AC'
  },
  {
    id: 'hitachi-1.5t-inv-3star-raw318hheo',
    type: 'window',
    brand: 'hitachi',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'RAW318HHEO',
    price: 35000,
    features: ['Inverter compressor', 'Energy efficient'],
    image: '/lovable-uploads/hitachi-window.png',
    images: [
      "/lovable-uploads/hitachi1-5-3star-1.png",
      "/lovable-uploads/hitachi1-5-3star-2.png",
      "/lovable-uploads/hitachi1-5-3star-3.png",
      "/lovable-uploads/hitachi1-5-3star-4.png"
    ],
    description: 'HITACHI 1.5T INV 3★ RAW318HHEO Window AC'
  },

  // LG
  {
    id: 'lg-1.5t-inv-5star-uw-q18wwxa-wifi',
    type: 'window',
    brand: 'lg',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: 'UW-Q18WWXA (WI-FI)',
    price: 45700,
    features: ['Wi-Fi enabled', 'Inverter compressor'],
    image: '/lovable-uploads/lg-window.png',
    images: [
      "/lovable-uploads/lg1-5-5star-wifi-1.png",
      "/lovable-uploads/lg1-5-5star-wifi-2.png",
      "/lovable-uploads/lg1-5-5star-wifi-3.png",
      "/lovable-uploads/lg1-5-5star-wifi-4.png",
      "/lovable-uploads/lg1-5-5star-wifi-5.png"
    ],
    description: 'LG 1.5T INV 5★ UW-Q18WWXA (WI-FI) Window AC'
  },
  {
    id: 'lg-1.5t-inv-5star-uw-q18wuza',
    type: 'window',
    brand: 'lg',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: 'UW-Q18WUZA',
    price: 44000,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/lg-window.png',
    images: [
      "/lovable-uploads/1a1c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/2b2c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/3c3c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/4d4c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LG 1.5T INV 5★ UW-Q18WUZA Window AC'
  },
  {
    id: 'lg-1.5t-inv-3star-uw-q18wwxa-wifi',
    type: 'window',
    brand: 'lg',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'UW-Q18WWXA (WI-FI)',
    price: 39500,
    features: ['Wi-Fi enabled', 'Inverter compressor'],
    image: '/lovable-uploads/lg-window.png',
    images: [
      "/lovable-uploads/5e5c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/6f6c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/7g7c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LG 1.5T INV 3★ UW-Q18WWXA (WI-FI) Window AC'
  },
  {
    id: 'lg-1.5t-inv-3star-uw-q18wuxa',
    type: 'window',
    brand: 'lg',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'UW-Q18WUXA',
    price: 38500,
    features: ['Inverter compressor', 'Energy efficient'],
    image: '/lovable-uploads/lg-window.png',
    images: [
      "/lovable-uploads/8h8c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/9i9c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/10j10c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/11k11c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/12l12c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LG 1.5T INV 3★ UW-Q18WUXA Window AC'
  },
  {
    id: 'lg-2.0t-inv-4star-uw-q24wwya-wifi',
    type: 'window',
    brand: 'lg',
    inverter: 'inverter',
    tonnage: '2.0T',
    starRating: '4★',
    modelNumber: 'UW-Q24WWYA (WI-FI)',
    price: 48900,
    features: ['Wi-Fi enabled', 'Large capacity'],
    image: '/lovable-uploads/lg-window.png',
    images: [
      "/lovable-uploads/13m13c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/14n14c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/15o15c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/16p16c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LG 2.0T INV 4★ UW-Q24WWYA (WI-FI) Window AC'
  },

  // LLOYD
  {
    id: 'lloyd-1.0t-noninv-2star-glw12c2ywsew',
    type: 'window',
    brand: 'lloyd',
    inverter: 'non-inverter',
    tonnage: '1.0T',
    starRating: '2★',
    modelNumber: 'GLW12C2YWSEW',
    price: 26500,
    features: ['Energy efficient', 'Turbo mode'],
    image: '/lovable-uploads/lloyd-window.png',
    images: [
      "/lovable-uploads/17q17c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/18r18c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/19s19c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LLOYD 1.0T NON INV 2★ GLW12C2YWSEW Window AC'
  },
  {
    id: 'lloyd-1.0t-noninv-3star-glw12c3xwsew',
    type: 'window',
    brand: 'lloyd',
    inverter: 'non-inverter',
    tonnage: '1.0T',
    starRating: '3★',
    modelNumber: 'GLW12C3XWSEW',
    price: 27738,
    features: ['Energy efficient', 'Turbo mode'],
    image: '/lovable-uploads/lloyd/GLS12C3XWADS/1.avif',
    images: [
      '/lovable-uploads/lloyd/GLS12C3XWADS/1.avif',
      '/lovable-uploads/lloyd/GLS12C3XWADS/2.jpg',
      '/lovable-uploads/lloyd/GLS12C3XWADS/3.jpg',
      '/lovable-uploads/lloyd/GLS12C3XWADS/4.jpg',
      '/lovable-uploads/lloyd/GLS12C3XWADS/5.jpg',
      '/lovable-uploads/lloyd/GLS12C3XWADS/6.webp',
      '/lovable-uploads/lloyd/GLS12C3XWADS/7.webp'
    ],
    description: 'LLOYD 1.0T NON INV 3★ GLW12C3XWSEW Window AC'
  },
  {
    id: 'lloyd-1.5t-inv-5star-glw18c5xwsea',
    type: 'window',
    brand: 'lloyd',
    inverter: 'inverter',
    tonnage: '1.5T',
    starRating: '5★',
    modelNumber: 'GLW18C5XWSEA',
    price: 33405,
    features: ['Inverter compressor', 'High efficiency'],
    image: '/lovable-uploads/lloyd-window.png',
    images: [
      "/lovable-uploads/24x24c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/25y25c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/26z26c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/27a27c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/28b28c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LLOYD 1.5T INV 5★ GLW18C5XWSEA Window AC'
  },
  {
    id: 'lloyd-1.5t-noninv-3star-glw18c3ywsew',
    type: 'window',
    brand: 'lloyd',
    inverter: 'non-inverter',
    tonnage: '1.5T',
    starRating: '3★',
    modelNumber: 'GLW18C3YWSEW',
    price: 29500,
    features: ['Energy efficient', 'Turbo mode'],
    image: '/lovable-uploads/lloyd-window.png',
    images: [
      "/lovable-uploads/29c29c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/30d30c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/31e31c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LLOYD 1.5T NON INV 3★ GLW18C3YWSEW Window AC'
  },
  {
    id: 'lloyd-2.0t-noninv-3star-glw24c3ywsmr',
    type: 'window',
    brand: 'lloyd',
    inverter: 'non-inverter',
    tonnage: '2.0T',
    starRating: '3★',
    modelNumber: 'GLW24C3YWSMR',
    price: 38879,
    features: ['Large capacity', 'Energy efficient'],
    image: '/lovable-uploads/lloyd-window.png',
    images: [
      "/lovable-uploads/32f32c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/33g33c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/34h34c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
      "/lovable-uploads/35i35c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
    ],
    description: 'LLOYD 2.0T NON INV 3★ GLW24C3YWSMR Window AC'
  },


/* --- End of new window AC entries --- */
// --- SPLIT AC PRICES ---

// O GENERAL
{
  id: 'og-split-1.0t-inv-5star-12cgtb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: '12CGTB',
  price: 50200,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/36j36c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/37k37c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/38l38c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/39m39c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.0T INV 5★ 12CGTB Split AC'
},
{
  id: 'og-split-1.0t-inv-5star-12cgaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: '12CGAA',
  price: 50200,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/40n40c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/41o41c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/42p42c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.0T INV 5★ 12CGAA Split AC'
},
{
  id: 'og-split-1.0t-inv-3star-12cpaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: '12CPAA',
  price: 39790,
  features: ['Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/43q43c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/44r44c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/45s45c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/46t46c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/47u47c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.0T INV 3★ 12CPAA Split AC'
},
{
  id: 'og-split-1.0t-inv-3star-12cpab',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: '12CPAB',
  price: 39790,
  features: ['Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/48v48c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/49w49c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/50x50c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.0T INV 3★ 12CPAB Split AC'
},
{
  id: 'og-split-1.14t-noninv-3star-14bmaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '1.14T',
  starRating: '3★',
  modelNumber: '14BMAA',
  price: 42150,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/51y51c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/52z52c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/53a53c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/54b54c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.14T NON INV 3★ 14BMAA Split AC'
},
{
  id: 'og-split-1.5t-inv-5star-18cgtb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: '18CGTB',
  price: 63490,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/55c55c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/56d56c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/57e57c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.5T INV 5★ 18CGTB Split AC'
},
{
  id: 'og-split-1.5t-inv-5star-18cgaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: '18CGAA',
  price: 63490,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/58f58c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/59g59c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/60h60c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/61i61c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.5T INV 5★ 18CGAA Split AC'
},
{
  id: 'og-split-1.5t-inv-5star-18cetb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: '18CETB',
  price: 67250,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/62j62c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/63k63c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/64l64c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.5T INV 5★ 18CETB Split AC'
},
{
  id: 'og-split-1.5t-inv-3star-18cpab',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18CPAB',
  price: 50210,
  features: ['Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/65m65c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/66n66c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/67o67c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/68p68c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.5T INV 3★ 18CPAB Split AC'
},
{
  id: 'og-split-1.5t-inv-3star-18cnaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18CNAA',
  price: 47390,
  features: ['Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/69q69c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/70r70c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/71s71c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.5T INV 3★ 18CNAA Split AC'
},
{
  id: 'og-split-1.5t-noninv-3star-18bmaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18BMAA',
  price: 53050,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/72t72c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/73u73c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/74v74c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/75w75c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.5T NON INV 3★ 18BMAA Split AC'
},
{
  id: 'og-split-1.5t-noninv-3star-18buta',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18BUTA',
  price: 57790,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/76x76c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/77y77c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/78z78c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 1.5T NON INV 3★ 18BUTA Split AC'
},
{
  id: 'og-split-2.0t-inv-5star-24cgtb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: '24CGTB',
  price: 77690,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/79a79c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/80b80c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/81c81c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/82d82c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 2.0T INV 5★ 24CGTB Split AC'
},
{
  id: 'og-split-2.0t-inv-5star-24ggaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: '24GGAA',
  price: 77690,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/83e83c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/84f84c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/85g85c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 2.0T INV 5★ 24GGAA Split AC'
},
{
  id: 'og-split-2.0t-inv-5star-24ceta',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: '24CETA',
  price: 81450,
  features: ['Inverter', 'High efficiency'],
  images: [
    "/lovable-uploads/86h86c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/87i87c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/88j88c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/89k89c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/90l90c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  image: '/lovable-uploads/ogeneral-split.png',
  description: 'O GENERAL 2.0T INV 5★ 24CETA Split AC'
},
{
  id: 'og-split-2.0t-inv-3star-24cpaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24CPAA',
  price: 63428,
  features: ['Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/91m91c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/92n92c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/93o93c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/94p94c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 2.0T INV 3★ 24CPAA Split AC'
},
{
  id: 'og-split-2.0t-inv-3star-24cpab',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24CPAB',
  price: 63428,
  features: ['Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/95q95c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/96r96c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/97s97c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 2.0T INV 3★ 24CPAB Split AC'
},
{
  id: 'og-split-2.0t-noninv-3star-24bmaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24BMAA',
  price: 67250,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/98t98c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/99u99c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/100v100c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/101w101c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/102x102c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 2.0T NON INV 3★ 24BMAA Split AC'
},
{
  id: 'og-split-2.0t-noninv-3star-24buta',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24BUTA',
  price: 72000,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/103y103c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/104z104c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/105a105c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/106b106c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 2.0T NON INV 3★ 24BUTA Split AC'
},
{
  id: 'og-split-2.5t-inv-4star-30ceb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.5T',
  starRating: '4★',
  modelNumber: '30CEB',
  price: 102310,
  features: ['Inverter', 'Large capacity'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/107c107c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/108d108c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/109e109c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 2.5T INV 4★ 30CEB Split AC'
},
{
  id: 'og-split-3.0t-inv-5star-36ceb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '3.0T',
  starRating: '5★',
  modelNumber: '36CEB',
  price: 123190,
  features: ['Inverter', 'Large capacity'],
  image: '/lovable-uploads/ogeneral-split.png',
  images: [
    "/lovable-uploads/110f110c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/111g111c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/112h112c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/113i113c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png",
    "/lovable-uploads/114j114c5e2a-5c5c-4e9c-a5c5-c5c5c5c5c5c5.png"
  ],
  description: 'O GENERAL 3.0T INV 5★ 36CEB Split AC'
},

// MITSUBISHI HEAVY INDUSTRIES
{
  id: 'mitsubishi-heavy-1.1t-inv-5star-srk13yxs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '1.1T',
  starRating: '5★',
  modelNumber: 'SRK13YXS',
  price: 54040,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.webp',
  images: [
    "/lovable-uploads/mh1-1-5star-1.png",
    "/lovable-uploads/mh1-1-5star-2.png",
    "/lovable-uploads/mh1-1-5star-3.png",
    "/lovable-uploads/mh1-1-5star-4.png"
  ],
  description: 'MITSUBISHI HEAVY 1.1T INV 5★ SRK13YXS Split AC'
},
{
  id: 'mitsubishi-heavy-1.0t-inv-3star-srk13yym',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'SRK13YYM',
  price: 49200,
  features: ['Inverter', 'Energy efficient'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.webp',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/2.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/3.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/4.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/5.webp"
  ],
  description: 'MITSUBISHI HEAVY 1.0T INV 3★ SRK13YYM Split AC'
},
{
  id: 'mitsubishi-heavy-1.1t-noninv-2star-srk13crs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.1T',
  starRating: '2★',
  modelNumber: 'SRK13CRS',
  price: 47440,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.png',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.png",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/2.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/3.avif",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/4.webp"
  ],
  description: 'MITSUBISHI HEAVY 1.1T NON INV 2★ SRK13CRS Split AC'
},
{
  id: 'mitsubishi-heavy-1.3t-noninv-2star-srk15cxs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.3T',
  starRating: '2★',
  modelNumber: 'SRK15CXS',
  price: 49640,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK15CXS/1.png',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK15CXS/SRK15CXS.png",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK15CXS/SRK15CXS.webp"
  ],
  description: 'MITSUBISHI HEAVY 1.3T NON INV 2★ SRK15CXS Split AC'
},
{
  id: 'mitsubishi-heavy-1.6t-noninv-3star-srk20cxs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.6T',
  starRating: '3★',
  modelNumber: 'SRK20CXS',
  price: 59760,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CXS/1.webp',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CXS/1.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CXS/2.avif",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CXS/3.webp",
  
  ],
  description: 'MITSUBISHI HEAVY 1.6T NON INV 3★ SRK20CXS Split AC'
},
{
  id: 'mitsubishi-heavy-1.6t-noninv-3star-srk20css',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.6T',
  starRating: '3★',
  modelNumber: 'SRK20CSS',
  price: 61520,
  features: ['Non-Inverter', 'Energy efficient'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CSS/1.webp',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CSS/1.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CSS/2.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20CSS/3.webp",
   
  ],
  description: 'MITSUBISHI HEAVY 1.6T NON INV 3★ SRK20CSS Split AC'
},
{
  id: 'mitsubishi-heavy-1.8t-inv-5star-srk20yym',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '1.8T',
  starRating: '5★',
  modelNumber: 'SRK20YYM',
  price: 75160,
  features: ['Inverter', 'High efficiency'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20YYM/1.jpg',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20YYM/1.jpg",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20YYM/2.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK20YYM/3.webp",
  ],
  description: 'MITSUBISHI HEAVY 1.8T INV 5★ SRK20YYM Split AC'
},
{
  id: 'mitsubishi-heavy-1.95t-noninv-2star-srk24cw',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.95T',
  starRating: '2★',
  modelNumber: 'SRK24CW',
  price: 69000,
  features: ['Non-Inverter', 'Large capacity'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24CW/1.png',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24CW/1.png",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24CW/2.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24CW/3.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24CW/4.webp"
  ],
  description: 'MITSUBISHI HEAVY 1.95T NON INV 2★ SRK24CW Split AC'
},
{
  id: 'mitsubishi-heavy-1.95t-noninv-3star-srk25cwx',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.95T',
  starRating: '3★',
  modelNumber: 'SRK25CWX',
  price: 74280,
  features: ['Non-Inverter', 'Large capacity'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK25CWX/1.jpg',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK25CWX/1.jpg",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK25CWX/2.avif",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK25CWX/3.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK25CWX/4.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK25CWX/5.avif"
  ],
  description: 'MITSUBISHI HEAVY 1.95T NON INV 3★ SRK25CWX Split AC'
},
{
  id: 'mitsubishi-heavy-2.1t-inv-4star-srk24yym',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '2.1T',
  starRating: '4★',
  modelNumber: 'SRK24YYM',
  price: 90991,
  features: ['Inverter', 'Large capacity'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YYM/SRK24YYM.webp',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YYM/SRK24YYM.webp",
  
  ],
  description: 'MITSUBISHI HEAVY 2.1T INV 4★ SRK24YYM Split AC'
},
{
  id: 'mitsubishi-heavy-2.2t-inv-5star-srk24yvs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '2.2T',
  starRating: '5★',
  modelNumber: 'SRK24YVS',
  price: 101560,
  features: ['Inverter', 'Large capacity'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/1.png',
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/1.png",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/2.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/3.png",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/4.png",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/5.jpg"
  ],
  description: 'MITSUBISHI HEAVY 2.2T INV 5★ SRK24YVS Split AC'
},
{
  id: 'mitsubishi-heavy-2.2t-noninv-2star-srk24yvs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '2.2T',
  starRating: '2★',
  modelNumber: 'SRK24YVS',
  price: 77800,
  features: ['Non-Inverter', 'Large capacity'],
  image: '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/1.png',
  images: [
    '/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/1.png',
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/2.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/3.png",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK24YVS/4.png"
  ],
  description: 'MITSUBISHI HEAVY 2.2T NON INV 2★ SRK24YVS Split AC'
},
{
  id: 'mitsubishi-heavy-3.0t-inv-4star-srk100ya',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '3.0T',
  starRating: '4★',
  modelNumber: 'SRK100YA',
  price: 136760,
  features: ['Inverter', 'Large capacity'],
  image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK100YA/1.webp",
  images: [
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK100YA/1.webp",
    "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK100YA/1.webp",
  
  ],
  description: 'MITSUBISHI HEAVY 3.0T INV 4★ SRK100YA Split AC'
},

// ... Continue for all other brands and models as per your provided list...
// (For brevity, only O GENERAL and MITSUBISHI HEAVY INDUSTRIES are shown here. 
// The same format applies for all other brands and models in your list.)

// O GENERAL Split AC Models
{
  id: 'og-split-1t-inv-5star-12cgaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: '12CGAA',
  price: 50200,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/e804a384-717d-4b21-8f27-3926969ddc06.png",
    "public/lovable-uploads/1c3da51e-7837-42fb-9c80-a4a43d253acb.png",
    "public/lovable-uploads/31389003-e760-4a88-b98d-1952c74143ec.png"
  ],
  description: 'O GENERAL 1.0T INV 5* 12CGAA with advanced cooling and energy efficiency'
},
{
  id: 'og-split-1t-inv-3star-12cpab',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: '12CPAB',
  price: 39790,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 1.0T INV 3* 12CPAB with reliable cooling performance'
},
{
  id: 'og-split-1-14t-noninv-3star-14bmaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '1.14T',
  starRating: '3★',
  modelNumber: '14BMAA',
  price: 42150,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 1.14T NON INV 3* 14BMAA with reliable cooling performance'
},
{
  id: 'og-split-1-5t-inv-5star-18cgaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: '18CGAA',
  price: 63490,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis',
    '4-Way Air Direction'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'O GENERAL 1.5T INV 5* 18CGAA perfect for medium to large rooms'
},
{
  id: 'og-split-1-5t-inv-5star-18cetb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: '18CETB',
  price: 67250,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis',
    '4-Way Air Direction',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'O GENERAL 1.5T INV 5* 18CETB with premium features for enhanced comfort'
},
{
  id: 'og-split-1-5t-inv-3star-18cpab',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18CPAB',
  price: 50210,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 1.5T INV 3* 18CPAB with reliable cooling performance'
},
{
  id: 'og-split-1-5t-inv-3star-18cnaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18CNAA',
  price: 47390,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 1.5T INV 3* 18CNAA with reliable cooling performance'
},
{
  id: 'og-split-1-5t-noninv-3star-18bmaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18BMAA',
  price: 53050,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 1.5T NON INV 3* 18BMAA with reliable cooling performance'
},
{
  id: 'og-split-1-5t-noninv-3star-18buta',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '18BUTA',
  price: 57790,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 1.5T NON INV 3* 18BUTA with reliable cooling performance'
},
{
  id: 'og-split-2-0t-inv-5star-24cgtb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: '24CGTB',
  price: 77690,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis',
    '4-Way Air Direction'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'O GENERAL 2.0T INV 5* 24CGTB perfect for large rooms'
},
{
  id: 'og-split-2-0t-inv-5star-24ggaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: '24GGAA',
  price: 77690,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis',
    '4-Way Air Direction'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'O GENERAL 2.0T INV 5* 24GGAA perfect for large rooms'
},
{
  id: 'og-split-2-0t-inv-5star-24ceta',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: '24CETA',
  price: 81450,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis',
    '4-Way Air Direction',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'O GENERAL 2.0T INV 5* 24CETA with premium features for enhanced comfort'
},
{
  id: 'og-split-2-0t-inv-3star-24cpaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24CPAA',
  price: 63428,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 2.0T INV 3* 24CPAA with reliable cooling performance'
},
{
  id: 'og-split-2-0t-inv-3star-24cpab',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24CPAB',
  price: 63428,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 2.0T INV 3* 24CPAB with reliable cooling performance'
},
{
  id: 'og-split-2-0t-noninv-3star-24bmaa',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24BMAA',
  price: 67250,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 2.0T NON INV 3* 24BMAA with reliable cooling performance'
},
{
  id: 'og-split-2-0t-noninv-3star-24buta',
  type: 'split',
  brand: 'o-general',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '24BUTA',
  price: 72000,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/0c6a71d3-919c-4b3f-96dd-09055ff138b8.png",
    "public/lovable-uploads/1873a8be-c9ed-4348-a7bc-ea7b325b29d3.png"
  ],
  description: 'O GENERAL 2.0T NON INV 3* 24BUTA with reliable cooling performance'
},
{
  id: 'og-split-2-5t-inv-4star-30ceb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '2.5T',
  starRating: '4★',
  modelNumber: '30CEB',
  price: 102310,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis',
    '4-Way Air Direction',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'O GENERAL 2.5T INV 4* 30CEB with premium features for enhanced comfort'
},
{
  id: 'og-split-3-0t-inv-5star-36ceb',
  type: 'split',
  brand: 'o-general',
  inverter: 'inverter',
  tonnage: '3.0T',
  starRating: '5★',
  modelNumber: '36CEB',
  price: 123190,
  features: [
    'Digital Inverter Technology',
    'Plasma Air Purifier',
    'Auto Restart',
    'Sleep Mode',
    'Smart Diagnosis',
    '4-Way Air Direction',
    'Premium Design',
    'High Capacity Cooling'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'O GENERAL 3.0T INV 5* 36CEB with premium features for enhanced comfort'
},
{
  id: 'mhi-split-1-1t-inv-5star-srk13yxs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '1.1T',
  starRating: '5★',
  modelNumber: 'SRK13YXS',
  price: 54040,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Allergen Clear Filter'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEAVY 1.1T INV 5* SRK13YXS with premium features for enhanced comfort'
},
{
  id: 'mhi-split-1-0t-inv-3star-srk13yym',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'SRK13YYM',
  price: 49200,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Allergen Clear Filter'
  ],
  image: "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.webp",
  images: [
     "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/1.webp",
     "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/2.webp",
     "/lovable-uploads/mitsubishi/mitsubishi_heavy/SRK13YYM/3.webp"
  ],
  description: 'MITSUBISHI HEAVY 1.0T INV 3* SRK13YYM with reliable cooling performance'
},
{
  id: 'mhi-split-1-1t-noninv-2star-srk13crs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.1T',
  starRating: '2★',
  modelNumber: 'SRK13CRS',
  price: 47440,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEA 1.1T NON INV 2*SRK13CRS with reliable cooling performance'
},
{
  id: 'mhi-split-1-3t-noninv-2star-srk15cxs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.3T',
  starRating: '2★',
  modelNumber: 'SRK15CXS',
  price: 49640,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEA 1.3T NON INV 2*SRK15CXS with reliable cooling performance'
},
{
  id: 'mhi-split-1-6t-noninv-3star-srk20cxs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.6T',
  starRating: '3★',
  modelNumber: 'SRK20CXS',
  price: 59760,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEA 1.6T NON INV 3*SRK20CXS with reliable cooling performance'
},
{
  id: 'mhi-split-1-6t-noninv-3star-srk20css',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.6T',
  starRating: '3★',
  modelNumber: 'SRK20CSS',
  price: 61520,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEA 1.6T NON INV 3*SRK20CSS with reliable cooling performance'
},
{
  id: 'mhi-split-1-8t-inv-5star-srk20yym',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '1.8T',
  starRating: '5★',
  modelNumber: 'SRK20YYM',
  price: 75160,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Allergen Clear Filter'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEAVY 1.8T INV 5* SRK20YYM with premium features for enhanced comfort'
},
{
  id: 'mhi-split-1-95t-noninv-2star-srk24cw',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.95T',
  starRating: '2★',
  modelNumber: 'SRK24CW',
  price: 69000,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBI HEAV 1.95T NON INV 2* SRK24CW with reliable cooling performance'
},
{
  id: 'mhi-split-1-95t-noninv-3star-srk25cwx',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '1.95T',
  starRating: '3★',
  modelNumber: 'SRK25CWX',
  price: 74280,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBI HEA 1.95T NON INV 3* SRK25CWX with reliable cooling performance'
},
{
  id: 'mhi-split-2-1t-inv-4star-srk24yym',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '2.1T',
  starRating: '4★',
  modelNumber: 'SRK24YYM',
  price: 90991,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Allergen Clear Filter'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEAVY 2.1T INV 4* SRK24YYM with premium features for enhanced comfort'
},
{
  id: 'mhi-split-2-2t-inv-5star-srk24yvs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '2.2T',
  starRating: '5★',
  modelNumber: 'SRK24YVS',
  price: 101560,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Allergen Clear Filter',
    'Smart Diagnosis'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEAVY 2.2T INV 5* SRK24YVS with premium features for enhanced comfort'
},
{
  id: 'mhi-split-2-2t-noninv-2star-srk24yvs',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'non-inverter',
  tonnage: '2.2T',
  starRating: '2★',
  modelNumber: 'SRK24YVS',
  price: 77800,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEA 2.2T NON INV 2*SRK24YVS with reliable cooling performance'
},
{
  id: 'mhi-split-3-0t-inv-4star-srk100ya',
  type: 'split',
  brand: 'mitsubishi-heavy',
  inverter: 'inverter',
  tonnage: '3.0T',
  starRating: '4★',
  modelNumber: 'SRK100YA',
  price: 136760,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Allergen Clear Filter',
    'Smart Diagnosis',
    'High Capacity Cooling'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI HEAVY 3.0T INV 4* SRK100YA with premium features for enhanced comfort'
},
{
  id: 'me-split-1-0t-inv-5star-gr13vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: 'GR13VF',
  price: 47045,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Plasma Air Purifier'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.0T INV 5* GR13VF with premium features for enhanced comfort'
},
{
  id: 'me-split-1-0t-inv-5star-gr13vft',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: 'GR13VFT',
  price: 52778,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Plasma Air Purifier',
    'Wi-Fi Connectivity'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.0T INV 5* GR13VFT with premium features and Wi-Fi connectivity'
},
{
  id: 'me-split-1-0t-inv-4star-gn13vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '4★',
  modelNumber: 'GN13VF',
  price: 43808,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.0T INV 4* GN13VF with premium features for enhanced comfort'
},
{
  id: 'me-split-1-0t-inv-3star-jx13vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'JX13VF',
  price: 40610,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.0T INV 3* JX13VF with reliable cooling performance'
},
{
  id: 'me-split-1-0t-inv-2star-jp13vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '2★',
  modelNumber: 'JP13VF',
  price: 38720,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.0T INV 2* JP13VF with reliable cooling performance'
},
{
  id: 'me-split-1-0t-noninv-3star-agz13vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'non-inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'AGZ13VF',
  price: 37200,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELEC 1.0T NON INV 3* AGZ13VF with reliable cooling performance'
},
{
  id: 'me-split-1-0t-noninv-2star-ajz13vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'non-inverter',
  tonnage: '1.0T',
  starRating: '2★',
  modelNumber: 'AJZ13VF',
  price: 34160,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELEC 1.0T NON INV 2* AJZ13VF with reliable cooling performance'
},
{
  id: 'me-split-1-5t-inv-5star-gr18vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'GR18VF',
  price: 58160,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Plasma Air Purifier'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.5T INV 5* GR18VF with premium features for enhanced comfort'
},
{
  id: 'me-split-1-5t-inv-5star-gr18vft',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'GR18VFT',
  price: 65492,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Plasma Air Purifier',
    'Wi-Fi Connectivity'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.5T INV 5* GR18VFT with premium features and Wi-Fi connectivity'
},
{
  id: 'me-split-1-5t-inv-4star-gn18vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '4★',
  modelNumber: 'GN18VF',
  price: 54026,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.5T INV 4* GN18VF with premium features for enhanced comfort'
},
{
  id: 'me-split-1-5t-inv-3star-jx18vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'JX18VF',
  price: 52154,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.5T INV 3* JX18VF with reliable cooling performance'
},
{
  id: 'me-split-1-5t-inv-2star-jp18vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '2★',
  modelNumber: 'JP18VF',
  price: 46616,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.5T INV 2* JP18VF with reliable cooling performance'
},
{
  id: 'me-split-1-5t-noninv-3star-agz18vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'AGZ18VF',
  price: 43496,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELEC 1.5T NON INV 3* AGZ18VF with reliable cooling performance'
},
{
  id: 'me-split-1-5t-noninv-2star-ajz18vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '2★',
  modelNumber: 'AJZ18VF',
  price: 41200,
  features: [
    'Non-Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELEC 1.5T NON INV 2* AJZ18VF with reliable cooling performance'
},
{
  id: 'me-split-1-9t-inv-5star-gr22vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.9T',
  starRating: '5★',
  modelNumber: 'GR22VF',
  price: 65882,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Plasma Air Purifier'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.9T INV 5* GR22VF with premium features for enhanced comfort'
},
{
  id: 'me-split-1-9t-inv-5star-gr22vft',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.9T',
  starRating: '5★',
  modelNumber: 'GR22VFT',
  price: 74072,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design',
    'Plasma Air Purifier',
    'Wi-Fi Connectivity'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.9T INV 5* GR22VFT with premium features and Wi-Fi connectivity'
},
{
  id: 'me-split-1-9t-inv-4star-gn22vf',
  type: 'split',
  brand: 'mitsubishi-electric',
  inverter: 'inverter',
  tonnage: '1.9T',
  starRating: '4★',
  modelNumber: 'GN22VF',
  price: 61046,
  features: [
    'Digital Inverter Technology',
    'Auto Restart',
    'Sleep Mode',
    'Energy Saving Mode',
    'Premium Design'
  ],
  image: "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
  images: [
    "public/lovable-uploads/e9e6f48b-038f-4a14-9b10-baead8c7a7e8.png",
    "public/lovable-uploads/b2a1878a-860e-4e17-a78c-34dbf8285f1f.png",
    "public/lovable-uploads/c542376e-7363-4d8d-9340-b22c64e94789.png"
  ],
  description: 'MITSUBISHI ELECTRIC 1.9T INV 4* GN22VF with premium features for enhanced comfort'
},

// LG AC Products
{
  id: 'lg-split-1t-inv-5star-q14enze',
  type: 'split',
  brand: 'lg',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: 'US-Q14ENZE',
  price: 42500,
  features: [
    'Digital Inverter Technology',
    'Auto Clean',
    'Smart Diagnosis',
    'Dual Inverter Compressor',
    'Low Noise Operation'
  ],
  image: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  images: [
    "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png"
  ],
  description: 'LG 1.0T Inverter 5 Star Split AC with advanced cooling technology'
},
{
  id: 'lg-split-1t-inv-3star-q12cnxe',
  type: 'split',
  brand: 'lg',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'US-Q12CNXE',
  price: 36500,
  features: [
    'Dual Inverter Compressor',
    'HD Filter',
    'Auto Clean',
    'Low Noise Operation'
  ],
  image: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  images: [
    "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png"
  ],
  description: 'LG 1.0T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'lg-split-1.5t-inv-5star-q19bnze',
  type: 'split',
  brand: 'lg',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'US-Q19BNZE',
  price: 46000,
  features: [
    'Dual Inverter Compressor',
    'Anti-Virus Protection',
    'Smart Diagnosis',
    'Auto Clean',
    'Low Noise Operation'
  ],
  image: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  images: [
    "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png"
  ],
  description: 'LG 1.5T Inverter 5 Star Split AC with premium cooling features'
},
{
  id: 'lg-split-1.5t-inv-5star-q19fwze-wifi',
  type: 'split',
  brand: 'lg',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'US-Q19FWZE (WI-FI)',
  price: 50500,
  features: [
    'Wi-Fi Connectivity',
    'Dual Inverter Compressor',
    'Smart ThinQ App Control',
    'Anti-Virus Protection',
    'Auto Clean',
    'Low Noise Operation'
  ],
  image: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  images: [
    "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png"
  ],
  description: 'LG 1.5T Inverter 5 Star Split AC with Wi-Fi connectivity and smart features'
},
{
  id: 'lg-split-1.5t-inv-3star-q18tnxe',
  type: 'split',
  brand: 'lg',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'US-Q18TNXE',
  price: 37800,
  features: [
    'Dual Inverter Compressor',
    'HD Filter',
    'Auto Clean',
    'Low Noise Operation'
  ],
  image: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  images: [
    "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png"
  ],
  description: 'LG 1.5T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'lg-split-1.5t-inv-3star-q18kwxe-wifi',
  type: 'split',
  brand: 'lg',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'US-Q18KWXE (WI-FI)',
  price: 41500,
  features: [
    'Wi-Fi Connectivity',
    'Dual Inverter Compressor',
    'Smart ThinQ App Control',
    'HD Filter',
    'Auto Clean'
  ],
  image: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  images: [
    "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png"
  ],
  description: 'LG 1.5T Inverter 3 Star Split AC with Wi-Fi connectivity and smart features'
},
{
  id: 'lg-split-2t-inv-3star-q24enxe',
  type: 'split',
  brand: 'lg',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: 'US-Q24ENXE',
  price: 56500,
  features: [
    'Dual Inverter Compressor',
    'HD Filter',
    'Auto Clean',
    'Low Noise Operation',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png",
  images: [
    "/lovable-uploads/19ec5cdd-688a-4aa4-8d7f-df035add0390.png"
  ],
  description: 'LG 2.0T Inverter 3 Star Split AC for large rooms with efficient cooling'
},

// VOLTAS AC Products
{
  id: 'voltas-split-1t-inv-5star-125v-vectra-elite',
  type: 'split',
  brand: 'voltas',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: '125V VECTRA ELITE',
  price: 36888,
  features: [
    'Inverter Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis',
    'Sleep Mode'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 1.0T Inverter 5 Star Split AC with Vectra Elite technology'
},
{
  id: 'voltas-split-1t-inv-3star-123v-vectra-elite',
  type: 'split',
  brand: 'voltas',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: '123V VECTRA ELITE',
  price: 31302,
  features: [
    'Inverter Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 1.0T Inverter 3 Star Split AC with Vectra Elite technology'
},
{
  id: 'voltas-split-1t-non-inv-3star-123-vectra-elegant',
  type: 'split',
  brand: 'voltas',
  inverter: 'non-inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: '123 VECTRA ELEGANT',
  price: 32184,
  features: [
    'Fixed Speed Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 1.0T Non-Inverter 3 Star Split AC with Vectra Elegant technology'
},
{
  id: 'voltas-split-1.5t-inv-5star-185v-vectra-prism',
  type: 'split',
  brand: 'voltas',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: '185V VECTRA PRISM',
  price: 41494,
  features: [
    'Inverter Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis',
    'Sleep Mode',
    'High Ambient Cooling'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 1.5T Inverter 5 Star Split AC with Vectra Prism technology'
},
{
  id: 'voltas-split-1.5t-inv-3star-183v-vectra-prime',
  type: 'split',
  brand: 'voltas',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '183V VECTRA PRIME',
  price: 34732,
  features: [
    'Inverter Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 1.5T Inverter 3 Star Split AC with Vectra Prime technology'
},
{
  id: 'voltas-split-1.5t-non-inv-3star-183-vectra-elegant',
  type: 'split',
  brand: 'voltas',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: '183 VECTRA ELEGANT',
  price: 37084,
  features: [
    'Fixed Speed Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 1.5T Non-Inverter 3 Star Split AC with Vectra Elegant technology'
},
{
  id: 'voltas-split-2t-inv-5star-245v-vectra-plus',
  type: 'split',
  brand: 'voltas',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: '245V VECTRA PLUS',
  price: 56586,
  features: [
    'Inverter Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis',
    'Sleep Mode',
    'High Ambient Cooling'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 2.0T Inverter 5 Star Split AC with Vectra Plus technology'
},
{
  id: 'voltas-split-2t-inv-3star-243v-vectra-elite',
  type: 'split',
  brand: 'voltas',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '243V VECTRA ELITE',
  price: 45708,
  features: [
    'Inverter Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 2.0T Inverter 3 Star Split AC with Vectra Elite technology'
},
{
  id: 'voltas-split-2t-non-inv-3star-243-vectra-plus',
  type: 'split',
  brand: 'voltas',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: '243 VECTRA PLUS',
  price: 48746,
  features: [
    'Fixed Speed Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis',
    'High Ambient Cooling'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 2.0T Non-Inverter 3 Star Split AC with Vectra Plus technology'
},
{
  id: 'voltas-split-2.5t-inv-3star-303v-vectra-plus',
  type: 'split',
  brand: 'voltas',
  inverter: 'inverter',
  tonnage: '2.5T',
  starRating: '3★',
  modelNumber: '303V VECTRA PLUS',
  price: 72000,
  features: [
    'Inverter Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis',
    'High Ambient Cooling'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 2.5T Inverter 3 Star Split AC with Vectra Plus technology'
},
{
  id: 'voltas-split-3t-non-inv-36-czv-mega',
  type: 'split',
  brand: 'voltas',
  inverter: 'non-inverter',
  tonnage: '3.0T',
  starRating: '3★',
  modelNumber: '36 CZV MEGA',
  price: 72200,
  features: [
    'Fixed Speed Compressor',
    'Anti-Dust Filter',
    'Copper Condenser',
    'Self Diagnosis',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png",
  images: [
    "/lovable-uploads/8ff31e4e-43c0-4f22-ad82-55bca8c06340.png"
  ],
  description: 'Voltas 3.0T Non-Inverter Split AC with Mega cooling capacity'
},

// HISENSE AC Products
{
  id: 'hisense-split-1t-inv-5star-as-12tr4r5aj',
  type: 'split',
  brand: 'hisense',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: 'AS-12TR4R5AJ',
  price: 33000,
  features: [
    'Inverter Technology',
    'Hi-Density Filter',
    'Smart Mode',
    'Sleep Function',
    'Auto Restart'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 1.0T Inverter 5 Star Split AC with advanced cooling technology'
},
{
  id: 'hisense-split-1t-inv-3star-as-12tr4r3am',
  type: 'split',
  brand: 'hisense',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'AS-12TR4R3AM',
  price: 29000,
  features: [
    'Inverter Technology',
    'Hi-Density Filter',
    'Smart Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 1.0T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'hisense-split-1t-non-inv-3star-as-12tf4r3aj',
  type: 'split',
  brand: 'hisense',
  inverter: 'non-inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'AS-12TF4R3AJ',
  price: 32000,
  features: [
    'Fixed Speed Compressor',
    'Hi-Density Filter',
    'Smart Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 1.0T Non-Inverter 3 Star Split AC with reliable cooling'
},
{
  id: 'hisense-split-1.5t-inv-5star-as-18tr4r3ak1',
  type: 'split',
  brand: 'hisense',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'AS-18TR4R3AK1',
  price: 38000,
  features: [
    'Inverter Technology',
    'Hi-Density Filter',
    'Smart Mode',
    'Sleep Function',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 1.5T Inverter 5 Star Split AC with premium cooling features'
},
{
  id: 'hisense-split-1.5t-inv-3star-as-18tr4r3ak1-3star',
  type: 'split',
  brand: 'hisense',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'AS-18TR4R3AK1',
  price: 31500,
  features: [
    'Inverter Technology',
    'Hi-Density Filter',
    'Smart Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 1.5T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'hisense-split-1.5t-non-inv-3star-as-18tf4r3aj1',
  type: 'split',
  brand: 'hisense',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'AS-18TF4R3AJ1',
  price: 35000,
  features: [
    'Fixed Speed Compressor',
    'Hi-Density Filter',
    'Smart Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 1.5T Non-Inverter 3 Star Split AC with reliable cooling'
},
{
  id: 'hisense-split-2t-inv-5star-as-22tr4r5ai4',
  type: 'split',
  brand: 'hisense',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: 'AS-22TR4R5AI4',
  price: 46000,
  features: [
    'Inverter Technology',
    'Hi-Density Filter',
    'Smart Mode',
    'Sleep Function',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 2.0T Inverter 5 Star Split AC for large rooms with efficient cooling'
},
{
  id: 'hisense-split-2t-inv-3star-as-22tr4r3aj',
  type: 'split',
  brand: 'hisense',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: 'AS-22TR4R3AJ',
  price: 40500,
  features: [
    'Inverter Technology',
    'Hi-Density Filter',
    'Smart Mode',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 2.0T Inverter 3 Star Split AC for large rooms with energy-efficient cooling'
},
{
  id: 'hisense-split-2t-non-inv-3star-as-22tf4r3ai401',
  type: 'split',
  brand: 'hisense',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: 'AS-22TF4R3AI401',
  price: 45000,
  features: [
    'Fixed Speed Compressor',
    'Hi-Density Filter',
    'Smart Mode',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png",
  images: [
    "/lovable-uploads/47dd82e6-33be-4d8e-b007-32a8c50c3375.png"
  ],
  description: 'Hisense 2.0T Non-Inverter 3 Star Split AC for large rooms with reliable cooling'
},

// GODREJ AC Products
{
  id: 'godrej-split-1t-inv-5star',
  type: 'split',
  brand: 'godrej',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: 'GIC 12DINV 5 RWQH',
  price: 32900,
  features: [
    'Inverter Technology',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Sleep Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 1.0T Inverter 5 Star Split AC with advanced cooling technology'
},
{
  id: 'godrej-split-1t-inv-3star',
  type: 'split',
  brand: 'godrej',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'GIC 12DINV 3 RWQH',
  price: 28900,
  features: [
    'Inverter Technology',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Auto Restart'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 1.0T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'godrej-split-1.5t-inv-5star',
  type: 'split',
  brand: 'godrej',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'GIC 18DINV 5 RWQH',
  price: 36500,
  features: [
    'Inverter Technology',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Sleep Mode',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 1.5T Inverter 5 Star Split AC with premium cooling features'
},
{
  id: 'godrej-split-1.5t-inv-3star',
  type: 'split',
  brand: 'godrej',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'GIC 18DINV 3 RWQH',
  price: 31000,
  features: [
    'Inverter Technology',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Auto Restart'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 1.5T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'godrej-split-1.5t-non-inv-3star',
  type: 'split',
  brand: 'godrej',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'GSC 18NTC3 WTA',
  price: 35000,
  features: [
    'Fixed Speed Compressor',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Auto Restart'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 1.5T Non-Inverter 3 Star Split AC with reliable cooling'
},
{
  id: 'godrej-split-2t-inv-5star',
  type: 'split',
  brand: 'godrej',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: 'GIC 24DINV 5 RWQH',
  price: 49000,
  features: [
    'Inverter Technology',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Sleep Mode',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 2.0T Inverter 5 Star Split AC for large rooms with efficient cooling'
},
{
  id: 'godrej-split-2t-inv-3star',
  type: 'split',
  brand: 'godrej',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: 'GIC 24DINV 3 RWQH',
  price: 40500,
  features: [
    'Inverter Technology',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 2.0T Inverter 3 Star Split AC for large rooms with energy-efficient cooling'
},
{
  id: 'godrej-split-2t-non-inv-3star',
  type: 'split',
  brand: 'godrej',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: 'GSC 24NTC3 WTA',
  price: 42500,
  features: [
    'Fixed Speed Compressor',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 2.0T Non-Inverter 3 Star Split AC for large rooms with reliable cooling'
},
{
  id: 'godrej-split-2.5t-inv-3star',
  type: 'split',
  brand: 'godrej',
  inverter: 'inverter',
  tonnage: '2.5T',
  starRating: '3★',
  modelNumber: 'GIC 30DINV 3 RWQH',
  price: 50000,
  features: [
    'Inverter Technology',
    'Anti-bacterial Filter',
    'I-Sense Technology',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png",
  images: [
    "/lovable-uploads/0695482c-4008-45c0-9890-f4ce6044eaab.png"
  ],
  description: 'Godrej 2.5T Inverter 3 Star Split AC for extra large rooms with efficient cooling'
},

// LLOYD AC Products
{
  id: 'lloyd-split-1t-inv-5star-gls12i5fogec',
  type: 'split',
  brand: 'lloyd',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '5★',
  modelNumber: 'GLS12I5FOGEC',
  price: 35000,
  features: [
    'Inverter Technology',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Low Noise Operation',
    'Auto Restart'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 1.0T Inverter 5 Star Split AC with advanced cooling technology'
},
{
  id: 'lloyd-split-1t-inv-3star-gls12i3fosec',
  type: 'split',
  brand: 'lloyd',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'GLS12I3FOSEC',
  price: 31000,
  features: [
    'Inverter Technology',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Auto Restart'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 1.0T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'lloyd-split-1t-non-inv-3star-gls12c3xwads',
  type: 'split',
  brand: 'lloyd',
  inverter: 'non-inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'GLS12C3XWADS',
  price: 32000,
  features: [
    'Fixed Speed Compressor',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Auto Restart'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 1.0T Non-Inverter 3 Star Split AC with reliable cooling'
},
{
  id: 'lloyd-split-1.5t-inv-5star-gls18i5fogew',
  type: 'split',
  brand: 'lloyd',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'GLS18I5FOGEW',
  price: 40000,
  features: [
    'Inverter Technology',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Low Noise Operation',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 1.5T Inverter 5 Star Split AC with premium cooling features'
},
{
  id: 'lloyd-split-1.5t-inv-3star-gls18i3kobbv',
  type: 'split',
  brand: 'lloyd',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'GLS18I3KOBBV',
  price: 34500,
  features: [
    'Inverter Technology',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Auto Restart'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 1.5T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'lloyd-split-1.5t-non-inv-3star-gls18c3ywads',
  type: 'split',
  brand: 'lloyd',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'GLS18C3YWADS',
  price: 36500,
  features: [
    'Fixed Speed Compressor',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Auto Restart'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 1.5T Non-Inverter 3 Star Split AC with reliable cooling'
},
{
  id: 'lloyd-split-2t-inv-5star-gls24i5fwgev',
  type: 'split',
  brand: 'lloyd',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: 'GLS24I5FWGEV',
  price: 52500,
  features: [
    'Inverter Technology',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Low Noise Operation',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 2.0T Inverter 5 Star Split AC for large rooms with efficient cooling'
},
{
  id: 'lloyd-split-2t-inv-3star-gls24i3fwsem',
  type: 'split',
  brand: 'lloyd',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: 'GLS24I3FWSEM',
  price: 45500,
  features: [
    'Inverter Technology',
    'Anti-Viral + PM 2.5 Filter',
    'Golden Fin Evaporator',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png",
  images: [
    "/lovable-uploads/61f614fc-2d7d-41ac-8c3a-78da8cf34f77.png"
  ],
  description: 'Lloyd 2.0T Inverter 3 Star Split AC for large rooms with energy-efficient cooling'
},

// VESTAR AC Products
{
  id: 'vestar-split-1t-inv-3star-vaske123ia15h',
  type: 'split',
  brand: 'vestar',
  inverter: 'inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'VASKE123IA15H',
  price: 28000,
  features: [
    'Inverter Technology',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 1.0T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'vestar-split-1t-non-inv-3star-vaskd123fi3g',
  type: 'split',
  brand: 'vestar',
  inverter: 'non-inverter',
  tonnage: '1.0T',
  starRating: '3★',
  modelNumber: 'VASKD123FI3G',
  price: 31900,
  features: [
    'Fixed Speed Compressor',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 1.0T Non-Inverter 3 Star Split AC with reliable cooling'
},
{
  id: 'vestar-split-1.5t-inv-5star-vaskd185iei2g',
  type: 'split',
  brand: 'vestar',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '5★',
  modelNumber: 'VASKD185IEI2G',
  price: 36500,
  features: [
    'Inverter Technology',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 1.5T Inverter 5 Star Split AC with premium cooling features'
},
{
  id: 'vestar-split-1.5t-inv-3star-vaskd185iei2g-3star',
  type: 'split',
  brand: 'vestar',
  inverter: 'inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'VASKD185IEI2G',
  price: 30500,
  features: [
    'Inverter Technology',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 1.5T Inverter 3 Star Split AC with energy-efficient cooling'
},
{
  id: 'vestar-split-1.5t-non-inv-3star-vaskd183fei2h',
  type: 'split',
  brand: 'vestar',
  inverter: 'non-inverter',
  tonnage: '1.5T',
  starRating: '3★',
  modelNumber: 'VASKD183FEI2H',
  price: 35000,
  features: [
    'Fixed Speed Compressor',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 1.5T Non-Inverter 3 Star Split AC with reliable cooling'
},
{
  id: 'vestar-split-2t-inv-5star-vaskd225iei3g',
  type: 'split',
  brand: 'vestar',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '5★',
  modelNumber: 'VASKD225IEI3G',
  price: 44500,
  features: [
    'Inverter Technology',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart',
    'High Efficiency Cooling'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 2.0T Inverter 5 Star Split AC for large rooms with efficient cooling'
},
{
  id: 'vestar-split-2t-inv-3star-vake223ia27h',
  type: 'split',
  brand: 'vestar',
  inverter: 'inverter',
  tonnage: '2.0T',
  starRating: '3★',
  modelNumber: 'VAKE223IA27H',
  price: 40500,
  features: [
    'Inverter Technology',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 2.0T Inverter 3 Star Split AC for large rooms with energy-efficient cooling'
},
{
  id: 'vestar-split-2t-non-inv-2star-vaskd222fei3h',
  type: 'split',
  brand: 'vestar',
  inverter: 'non-inverter',
  tonnage: '2.0T',
  starRating: '2★',
  modelNumber: 'VASKD222FEI3H',
  price: 41000,
  features: [
    'Fixed Speed Compressor',
    'Anti-Dust Filter',
    'Sleep Mode',
    'Auto Restart',
    'High Capacity Cooling'
  ],
  image: "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png",
  images: [
    "/lovable-uploads/f9296fe5-440f-4f69-93f6-77b88ffc76aa.png"
  ],
  description: 'Vestar 2.0T Non-Inverter 2 Star Split AC for large rooms with reliable cooling'
}
];

// Helper functions for filtering products
export const getProductsByType = (type: ACType): ACProduct[] => {
  return acProducts.filter(product => product.type === type);
};

export const getProductsByTypeAndBrand = (type: ACType, brand: Brand): ACProduct[] => {
  return acProducts.filter(product => product.type === type && product.brand === brand);
};

export const getProductsByTypeAndBrandAndInverter = (type: ACType, brand: Brand, inverter: InverterType): ACProduct[] => {
  return acProducts.filter(product => product.type === type && product.brand === brand && product.inverter === inverter);
};

export const getFullyFilteredProducts = (type: ACType, brand: Brand, inverter: InverterType, tonnage: string, starRating: string): ACProduct[] => {
  return acProducts.filter(product => 
    product.type === type && 
    product.brand === brand && 
    product.inverter === inverter && 
    product.tonnage === tonnage && 
    product.starRating === starRating
  );
};

// Get available options for each step based on previous selections
export const getAvailableBrands = (type: ACType): Brand[] => {
  const products = getProductsByType(type);
  const brandSet = new Set<Brand>();
  products.forEach(product => brandSet.add(product.brand));
  return Array.from(brandSet);
};

export const getAvailableInverterTypes = (type: ACType, brand: Brand): InverterType[] => {
  const products = getProductsByTypeAndBrand(type, brand);
  const inverterSet = new Set<InverterType>();
  products.forEach(product => inverterSet.add(product.inverter));
  return Array.from(inverterSet);
};

export const getAvailableTonnage = (type: ACType, brand: Brand, inverter: InverterType): string[] => {
  const products = getProductsByTypeAndBrandAndInverter(type, brand, inverter);
  const tonnageSet = new Set<string>();
  products.forEach(product => tonnageSet.add(product.tonnage));
  return Array.from(tonnageSet);
};

export const getAvailableStarRatings = (type: ACType, brand: Brand, inverter: InverterType, tonnage: string): string[] => {
  const products = acProducts.filter(product => 
    product.type === type && 
    product.brand === brand && 
    product.inverter === inverter && 
    product.tonnage === tonnage
  );
  
  const starSet = new Set<string>();
  products.forEach(product => starSet.add(product.starRating));
  return Array.from(starSet);
};
