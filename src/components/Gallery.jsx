import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
      title: "Startup Weekend",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
      title: "Mentorship Session",
      category: "Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80",
      title: "Pitch Competition",
      category: "Competition"
    },
    {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
      title: "Team Meeting",
      category: "Community"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      title: "Networking Event",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      title: "Ideation Workshop",
      category: "Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      title: "Innovation Summit",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      title: "Team Building",
      category: "Community"
    }
  ];

  const imagesPerPage = 3;

  

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const navigateCarousel = (direction) => {
    if (direction === 'prev') {
      setCarouselIndex((prev) => (prev === 0 ? Math.ceil(images.length / imagesPerPage) - 1 : prev - 1));
    } else {
      setCarouselIndex((prev) => (prev === Math.ceil(images.length / imagesPerPage) - 1 ? 0 : prev + 1));
    }
  };

  const visibleImages = images.slice(carouselIndex * imagesPerPage, (carouselIndex + 1) * imagesPerPage);

  return (
    <section id='gallery' className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Event Gallery
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Capturing moments of innovation, learning, and growth
          </p>
        </div>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => navigateCarousel('prev')}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleImages.map((image, index) => (
              <motion.div
                key={index + carouselIndex * imagesPerPage}
                className="relative group overflow-hidden rounded-lg shadow-lg h-[300px] cursor-pointer"
                onClick={() => openModal(image, index + carouselIndex * imagesPerPage)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary-light text-sm font-medium">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => navigateCarousel('next')}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === carouselIndex ? 'bg-primary-light' : 'bg-gray-600'}`}
              onClick={() => setCarouselIndex(index)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={closeModal}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary-light transition-colors"
                onClick={closeModal}
              >
                <X size={32} />
              </button>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-light transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft size={48} />
              </button>

              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="relative max-w-7xl max-h-[90vh] mx-auto px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  className="max-h-[85vh] object-contain mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <span className="text-primary-light text-sm font-medium">
                    {images[currentIndex].category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2">
                    {images[currentIndex].title}
                  </h3>
                </div>
              </motion.div>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-light transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight size={48} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;