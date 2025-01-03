import React from 'react';

export default function Fond() {
  return (
    <div className="relative">
      <img 
          src='/images/ongles.png' // Chemin relatif à partir du dossier public
          alt="manucure"
          className='h-screen w-full object-cover' // Utilise object-cover pour éviter la déformation
      />
      <div className='absolute inset-0 bg-black opacity-50'></div> {/* Couche sombre */}
      <div className='flex items-center justify-center absolute inset-0 z-5 text-white text-4xl font-bold'>
          Bonjour ! {/* Texte de description */}
      </div>
    </div>
  );
}
