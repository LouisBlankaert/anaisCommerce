"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div id="About" className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 py-12'>
      <motion.div 
        ref={ref}
        className='flex flex-col items-start justify-center max-w-md mx-auto' 
        initial={{ x: -100, opacity: 0 }} 
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} 
        transition={{ duration: 0.7, ease: 'easeInOut' }} 
      >
        <div className='flex flex-col'>
          <p className='font-bold text-xl'>A propos de</p>
          <h1 className='font-bold text-2xl mb-4'>Anais</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </motion.div>
      
      <motion.div 
        ref={ref}
        className='flex justify-center items-center' 
        initial={{ x: 100, opacity: 0 }} 
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
        transition={{ duration: 0.7, ease: 'easeInOut' }} 
      >
        <img 
          src='/images/city.png'
          alt=''
          className='h-96 rounded-xl object-cover'
        />
      </motion.div>
    </div>
  );
}
