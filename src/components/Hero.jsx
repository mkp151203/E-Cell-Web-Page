import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Button.css';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const backgroundImage = 'https://i.imgur.com/d1PIZNG.jpg';

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsImageLoaded(true);
      setIsTextVisible(true);
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-16">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div
              className={`text-center rounded-md p-8 transition-all duration-1000 transform ${
                isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-300 sm:text-5xl md:text-6xl">
                <span className="block">Transforming Dreams into Reality</span>
                <span className="block text-primary-light">One Start-Up at a Time!</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Welcome to the Entrepreneurial Cell of VIT Bhopal, a dynamic hub dedicated to nurturing and empowering the next generation of entrepreneurs across India. The future of your idea begins here, at the Entrepreneurial Cell of VIT Bhopal - where we don't just promote entrepreneurs, we build success stories.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="container">
                  <a href="#" className="btn">Join Us!</a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;