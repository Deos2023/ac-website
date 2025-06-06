
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Gallery images 
const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern living room with wall-mounted air conditioner",
    caption: "Sleek wall-mounted AC for modern living spaces"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Bedroom with ceiling mounted AC",
    caption: "Ceiling mounted AC for optimal bedroom cooling"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/6207634/pexels-photo-6207634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Office space with dual AC installation",
    caption: "Dual AC setup for open office spaces"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/5490996/pexels-photo-5490996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Restaurant with multiple AC units",
    caption: "Commercial AC installation for restaurants"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Technician installing AC unit",
    caption: "Professional AC installation service"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Smart home AC control system",
    caption: "Smart control systems for modern ACs"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/5490991/pexels-photo-5490991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Luxury apartment with concealed AC",
    caption: "Concealed AC systems for luxury apartments"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/5824884/pexels-photo-5824884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Family room with AC unit",
    caption: "Family-friendly AC solutions for common areas"
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Installation Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of air conditioner installations across various settings, showcasing our quality work and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-lg hover-lift cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/400x300?text=AC+Installation";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="sm:max-w-4xl bg-black border-gray-800">
            {selectedImage !== null && (
              <div className="flex flex-col items-center">
                <img 
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-h-[70vh] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                  }}
                />
                <p className="text-white mt-4 text-center">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default GalleryPage;
