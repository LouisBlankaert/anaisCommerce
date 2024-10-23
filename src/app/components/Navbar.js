"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', closeMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 p-4 flex items-center justify-between z-20 transition-all duration-300 ${isScrolled ? 'bg-rose border-b border-black' : 'bg-transparent'} md:p-6`}>
      <div ref={menuRef} className="ml-4 md:ml-16">
        <button 
          onClick={toggleMenu} 
          className="focus:outline-none flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
          aria-label="Toggle menu" 
          aria-expanded={isOpen}
        >
          <Image 
            src="/images/burger-bar.png" 
            alt="Menu Burger" 
            width={28}
            height={28}
          />
        </button>

        <div
          className={`absolute left-4 md:left-10 top-full bg-zinc-200 rounded-md shadow-lg overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
          style={{ maxHeight: isOpen ? '300px' : '0' }}
        >
          <ul className="p-4 text-brun">
            <li className='p-2 hover:bg-gris hover:text-black rounded-lg'>
              <Link href="/#Card2">Photos</Link>
            </li>
            <hr className='border-rose'/>
            <li className='p-2 hover:bg-gris hover:text-black rounded-lg'>
              <Link href="/#About">A propos</Link>
            </li>
            <hr className='border-rose'/>
            <li className='p-2 hover:bg-gris hover:text-black rounded-lg'>
              <Link href="/#Hours">Horaires</Link>
            </li>
            <hr className='border-rose'/>
          </ul>
        </div>
      </div>

      <div className="flex-grow flex justify-end mr-2 md:mr-14"> 
        <Link href="/">
          <Image 
            src="/images/chat-noir.png"
            alt='chat noir'
            width={32} 
            height={32}
            // Enlève la marge à droite si nécessaire
          />
        </Link>
      </div>

      {/* Suppression de la div cachée pour équilibrer à droite */}
    </nav>
  );
}
