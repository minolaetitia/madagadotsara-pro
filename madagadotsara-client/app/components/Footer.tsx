import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-bold">Madagadotsara</span>
            </div>
            <p className="text-gray-400 text-sm">
              La marketplace officielle des créations sonores malgaches.
            </p>
          </div>

          {/* Produits */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produits</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/catalogue" className="hover:text-purple-400 transition-colors">
                  Beats
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-purple-400 transition-colors">
                  Instrumentales
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-purple-400 transition-colors">
                  Effets sonores
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-purple-400 transition-colors">
                  Aide
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="hover:text-purple-400 transition-colors">
                  Licences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Madagadotsara. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
