"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Hours() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div id='Hours' className='px-4 py-12'>
      <motion.div
        ref={ref}
        className='rounded-lg bg-zinc-300 py-12 px-8 md:px-16 lg:px-32 mx-auto max-w-4xl flex flex-col shadow-xl' 
        initial={{ y: 100, opacity: 0 }} 
        animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} 
        transition={{ duration: 0.7, ease: 'easeInOut' }} 
      >
        <div className='flex rounded-lg border border-grisFonce bg-rose justify-center items-center mb-4 shadow-lg'>
          <h1 className='text-xl font-bold'>HORAIRES</h1>
        </div>

        <div className='flex rounded-lg border border-grisFonce bg-rose justify-center items-center mb-4 shadow-lg'>
          <p className='p-4 text-center'>Description des horaires ici.</p>
        </div>

        <div className='flex gap-x-4 justify-center items-center mb-4'>
          <button><img src='/images/instagram.png' className='h-6'/></button>
          <button><img src='/images/tiktok.png' className='h-6'/></button>
        </div>

        <div className='flex flex-col md:flex-row rounded-lg border border-grisFonce bg-rose justify-center items-center mb-4 gap-4 md:gap-8 p-4 shadow-lg'>
          <p>Du lundi au jeudi</p>
          <p>Vendredi et samedi</p>
          <p>Dimanche</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg border border-grisFonce bg-rose mt-6 shadow-lg p-4 gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-bold">Lieu :</h2>
            <p>Adresse</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-bold">Appelle-moi :</h2>
            <p>Téléphone</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
