"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <img className="h-10 w-auto" src="/logo.svg" alt="Logo" />
                <span className="ml-2 text-xl font-bold text-primary">Instituto de Salud</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-secondary px-3 py-2 font-medium">Inicio</Link>
            <Link href="/about" className="text-gray-800 hover:text-secondary px-3 py-2 font-medium">Nosotros</Link>
            <Link href="/courses" className="text-gray-800 hover:text-secondary px-3 py-2 font-medium">Cursos</Link>
            <Link href="/contact" className="text-gray-800 hover:text-secondary px-3 py-2 font-medium">Contacto</Link>
            <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md font-medium transition-colors">
              Inscríbete ahora
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">Inicio</Link>
            <Link href="/about" className="block text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">Nosotros</Link>
            <Link href="/courses" className="block text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">Cursos</Link>
            <Link href="/contact" className="block text-gray-800 hover:text-primary px-3 py-2 rounded-md font-medium">Contacto</Link>
            <button className="w-full mt-2 bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md font-medium transition-colors">
              Inscríbete ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
