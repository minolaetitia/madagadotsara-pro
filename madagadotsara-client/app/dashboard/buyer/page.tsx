'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import Link from 'next/link';

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState<'purchases' | 'favorites' | 'settings'>('purchases');

  // Mock data
  const purchases = [
    {
      id: 1,
      title: 'Midnight Vibes',
      creator: 'Ramy Beats',
      price: 29,
      date: '2024-01-20',
      license: 'Exclusive',
      downloadCount: 1,
      status: 'downloaded',
    },
    {
      id: 2,
      title: 'Urban Pulse',
      creator: 'Ramy Beats',
      price: 31,
      date: '2024-01-18',
      license: 'Exclusive',
      downloadCount: 2,
      status: 'downloaded',
    },
    {
      id: 3,
      title: 'Ocean Breeze',
      creator: 'Lova Studio',
      price: 24,
      date: '2024-01-15',
      license: 'Exclusive',
      downloadCount: 1,
      status: 'downloaded',
    },
  ];

  const favorites = [
    { id: 1, title: 'Electric Dreams', creator: 'Dizo Sounds', price: 35, genre: 'Electronic' },
    { id: 2, title: 'Tropical Paradise', creator: 'Tsilaon Audio', price: 26, genre: 'Tropical House' },
    { id: 3, title: 'Synthwave Nights', creator: 'Dizo Sounds', price: 38, genre: 'Electronic' },
  ];

  const stats = [
    { label: 'Audios achetés', value: '3', icon: '🎵' },
    { label: 'Budget dépensé', value: '$84', icon: '💳' },
    { label: 'Favoris', value: '3', icon: '❤️' },
    { label: 'Téléchargements', value: '4', icon: '⬇️' },
  ];

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard Acheteur</h1>
          <p className="text-gray-400">Bienvenue dans votre bibliothèque audio</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <p className="text-4xl mb-2">{stat.icon}</p>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* Purchases Tab */}
          {activeTab === 'purchases' && (
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6">Mes achats</h2>
              {purchases.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">Vous n'avez pas encore acheté d'audios</p>
                  <Link href="/catalogue">
                    <Button variant="primary" size="lg">
                      Découvrir le catalogue
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="bg-gray-700/30 border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:border-purple-600 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg flex items-center justify-center text-lg">
                          🎵
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{purchase.title}</h3>
                          <div className="flex gap-2 text-sm text-gray-400">
                            <span>{purchase.creator}</span>
                            <span>•</span>
                            <span>{purchase.date}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-white">${purchase.price}</p>
                          <p className="text-xs text-gray-400">{purchase.license}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium">
                            Télécharger
                          </button>
                          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">
                            Certificat
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6">Mes favoris</h2>
              {favorites.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400">Aucun favori pour le moment</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map((favorite) => (
                    <div key={favorite.id} className="bg-gray-700/30 border border-gray-700 rounded-lg p-4 hover:border-purple-600 transition-colors">
                      <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-12 h-12 text-purple-300 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 3a1 1 0 00-1.196-.15l-16 10a1 1 0 000 1.696l16 10A1 1 0 0018 17V3z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-1">{favorite.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{favorite.creator}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                        <span className="text-purple-400 font-bold">${favorite.price}</span>
                        <Link href={`/audio/${favorite.id}`}>
                          <Button variant="primary" size="sm">
                            Acheter
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Préférences de notification</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 bg-gray-700 border border-gray-600 rounded" />
                    <span className="text-white">Nouveaux beats de mes créateurs favoris</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 bg-gray-700 border border-gray-600 rounded" />
                    <span className="text-white">Promotions et offres spéciales</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 bg-gray-700 border border-gray-600 rounded" />
                    <span className="text-white">Mises à jour du catalogue</span>
                  </label>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Compte</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400 text-sm">user@example.com</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Changer
                    </Button>
                  </div>
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <p className="text-white font-medium">Mot de passe</p>
                      <p className="text-gray-400 text-sm">Dernière modification il y a 3 mois</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Changer
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="border-red-600/50 bg-red-600/10">
                <h3 className="text-xl font-bold text-red-400 mb-4">Zone de danger</h3>
                <p className="text-gray-300 mb-4">Supprimer votre compte supprimera tous vos données définitivement.</p>
                <Button variant="outline" className="text-red-400 border-red-600 hover:bg-red-600/10">
                  Supprimer mon compte
                </Button>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-8 h-16">
          {(['purchases', 'favorites', 'settings'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-full px-4 border-b-2 transition-colors font-medium capitalize ${
                activeTab === tab
                  ? 'border-purple-600 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'purchases' && 'Mes achats'}
              {tab === 'favorites' && 'Favoris'}
              {tab === 'settings' && 'Paramètres'}
            </button>
          ))}
        </div>
      </section>

      <Footer />

      {/* Spacer for fixed tabs */}
      <div className="h-16"></div>
    </main>
  );
}
