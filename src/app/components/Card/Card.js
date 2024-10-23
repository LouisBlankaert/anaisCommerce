"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const images = [
  '/images/chat-noir.png',
  '/images/city.png'
];

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const nextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 500);
  };

  const prevImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsFading(false);
    }, 500);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextImage, 5000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNextImage = () => {
    nextImage();
    resetInterval();
  };

  const handlePrevImage = () => {
    prevImage();
    resetInterval();
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div 
        ref={ref}
        className='flex flex-col items-center justify-center w-full' 
        initial={{ x: -100, opacity: 0 }} 
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
        transition={{ duration: 0.7, ease: 'easeInOut' }} 
      >
        <div className='mt-10 flex flex-col gap-2 items-center'>
            <img 
                src='images/manucure.png'
                alt='manicure main'
                attribute ="flaticons"
                className='w-8 h-8 sm:w-10 sm:h-10'
            />
            <p className="text-sm md:text-md lg:text-lg">Des ongles incroyables</p>
        </div>
        <div className="w-full sm:w-72 md:w-80 lg:w-96 m-5 bg-rose rounded-lg shadow-lg overflow-hidden text-center relative">
        <div className="h-64 sm:h-80 md:h-96 relative">
            <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={`h-full w-full object-cover transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
            />
            <button
            onClick={handlePrevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-2"
            >
            <i className="fi fi-rr-angle-left"></i>
            </button>
            <button
            onClick={handleNextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-2"
            >
            <i className="fi fi-rr-angle-right"></i>
            </button>
        </div>
        </div>
        <button className='flex items-center bg-brun rounded-full p-2 mb-2 text-white hover:bg-yellow-950 transform hover:scale-105 transition-transform duration-200 text-sm sm:text-md md:text-lg'>Réserver maintenant</button>
        </motion.div>
    </div>
  );
}
