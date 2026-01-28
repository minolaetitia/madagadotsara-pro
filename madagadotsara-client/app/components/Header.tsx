'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Madagadotsara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/catalogue" className="text-gray-300 hover:text-white transition-colors">
              Catalogue
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="md">
                Connexion
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="primary" size="md">
                Inscription
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-700 space-y-2">
            <Link href="/catalogue" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
              Catalogue
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
              À propos
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
              Contact
            </Link>
            <div className="flex gap-2 pt-2">
              <Link href="/auth/login" className="flex-1">
                <Button variant="ghost" size="sm" className="w-full">
                  Connexion
                </Button>
              </Link>
              <Link href="/auth/signup" className="flex-1">
                <Button variant="primary" size="sm" className="w-full">
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
