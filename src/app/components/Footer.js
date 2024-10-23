import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brun text-white py-10 px-4 md:py-20">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-10">
        <div className="flex space-x-8 md:space-x-12">
          <button><img src="/images/instagram.png" alt="logo instagram" className="w-10 h-10 md:w-12 md:h-12"/></button>
          <button><img src="/images/tiktok.png" alt="logo tiktok" className="w-10 h-10 md:w-12 md:h-12" /></button>
        </div>
        <p className="text-center text-sm md:text-base">
          &copy; {new Date().getFullYear()} Anais. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
