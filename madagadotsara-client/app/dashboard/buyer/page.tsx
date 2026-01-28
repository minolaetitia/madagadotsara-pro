'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import Link from 'next/link';

interface Purchase {
  id: number;
  title: string;
  creator: string;
  price: number;
  date: string;
  license: 'Exclusive' | 'Commercial' | 'Standard';
  downloadCount: number;
  status: 'downloaded' | 'pending';
  format: string;
  bpm?: number;
  genre: string;
  duration: string;
  invoiceNumber: string;
  certificateId: string;
}

interface Favorite {
  id: number;
  title: string;
  creator: string;
  price: number;
  genre: string;
  bpm?: number;
  duration: string;
  addedDate: string;
}

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState<'purchases' | 'favorites' | 'licenses' | 'settings'>('purchases');
  const [selectedPurchase, setSelectedPurchase] = useState<Purchase | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState<string>('all');

  // Mock data - Enhanced with more details per CDC
  const purchases: Purchase[] = [
    {
      id: 1,
      title: 'Midnight Vibes',
      creator: 'Ramy Beats',
      price: 29,
      date: '2024-01-20',
      license: 'Exclusive',
      downloadCount: 1,
      status: 'downloaded',
      format: 'WAV (44.1kHz/24bit)',
      bpm: 85,
      genre: 'R&B',
      duration: '3:24',
      invoiceNumber: 'INV-2024-001',
      certificateId: 'CERT-MDS-001-2024',
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
      format: 'WAV (44.1kHz/24bit)',
      bpm: 128,
      genre: 'Hip-Hop',
      duration: '2:56',
      invoiceNumber: 'INV-2024-002',
      certificateId: 'CERT-MDS-002-2024',
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
      format: 'WAV (44.1kHz/24bit)',
      bpm: 95,
      genre: 'Tropical House',
      duration: '4:12',
      invoiceNumber: 'INV-2024-003',
      certificateId: 'CERT-MDS-003-2024',
    },
  ];

  const favorites: Favorite[] = [
    { 
      id: 1, 
      title: 'Electric Dreams', 
      creator: 'Dizo Sounds', 
      price: 35, 
      genre: 'Electronic',
      bpm: 140,
      duration: '3:45',
      addedDate: '2024-01-25',
    },
    { 
      id: 2, 
      title: 'Tropical Paradise', 
      creator: 'Tsilaon Audio', 
      price: 26, 
      genre: 'Tropical House',
      bpm: 118,
      duration: '4:02',
      addedDate: '2024-01-24',
    },
    { 
      id: 3, 
      title: 'Synthwave Nights', 
      creator: 'Dizo Sounds', 
      price: 38, 
      genre: 'Electronic',
      bpm: 120,
      duration: '3:33',
      addedDate: '2024-01-22',
    },
  ];

  // User profile data
  const userProfile = {
    name: 'Jean Rakoto',
    email: 'jean.rakoto@example.com',
    memberSince: 'Janvier 2024',
    totalSpent: 84,
    totalPurchases: 3,
    favoriteGenre: 'Hip-Hop',
  };

  const stats = [
    { label: 'Audios achetés', value: userProfile.totalPurchases.toString(), icon: '🎵', description: 'Contenus exclusifs' },
    { label: 'Budget dépensé', value: `$${userProfile.totalSpent}`, icon: '💳', description: 'Total investi' },
    { label: 'Favoris', value: favorites.length.toString(), icon: '❤️', description: 'Audios sauvegardés' },
    { label: 'Téléchargements', value: purchases.reduce((sum, p) => sum + p.downloadCount, 0).toString(), icon: '⬇️', description: 'Fichiers téléchargés' },
  ];

  const genres = ['all', ...Array.from(new Set([...purchases.map(p => p.genre), ...favorites.map(f => f.genre)]))];

  const filteredPurchases = purchases.filter(p => 
    (filterGenre === 'all' || p.genre === filterGenre) &&
    (searchTerm === '' || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.creator.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredFavorites = favorites.filter(f => 
    (filterGenre === 'all' || f.genre === filterGenre) &&
    (searchTerm === '' || f.title.toLowerCase().includes(searchTerm.toLowerCase()) || f.creator.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Function to handle secure download
  const handleDownload = (purchaseId: number) => {
    // In production, this would generate a temporary secure link
    console.log(`Generating secure download link for purchase ${purchaseId}`);
    alert('Téléchargement sécurisé en cours... (lien temporaire généré)');
  };

  // Function to view certificate
  const viewCertificate = (purchase: Purchase) => {
    setSelectedPurchase(purchase);
  };

  // Function to download invoice
  const downloadInvoice = (invoiceNumber: string) => {
    console.log(`Downloading invoice ${invoiceNumber}`);
    alert('Téléchargement de la facture...');
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard Acheteur</h1>
              <p className="text-gray-400">Bienvenue, {userProfile.name} 👋</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Membre depuis</p>
              <p className="text-white font-semibold">{userProfile.memberSince}</p>
            </div>
          </div>
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
                <p className="text-gray-500 text-xs mt-1">{stat.description}</p>
              </Card>
            ))}
          </div>

          {/* Search and Filter Bar */}
          {(activeTab === 'purchases' || activeTab === 'favorites') && (
            <Card>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Rechercher par titre ou créateur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600"
                  />
                </div>
                <select
                  value={filterGenre}
                  onChange={(e) => setFilterGenre(e.target.value)}
                  className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-600"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'Tous les genres' : genre}
                    </option>
                  ))}
                </select>
              </div>
            </Card>
          )}

          {/* Purchases Tab */}
          {activeTab === 'purchases' && (
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Mes achats</h2>
                <p className="text-gray-400 text-sm">{filteredPurchases.length} audio(s)</p>
              </div>
              {filteredPurchases.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">
                    {searchTerm || filterGenre !== 'all' ? 'Aucun résultat trouvé' : "Vous n'avez pas encore acheté d'audios"}
                  </p>
                  <Link href="/catalogue">
                    <Button variant="primary" size="lg">
                      Découvrir le catalogue
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredPurchases.map((purchase) => (
                    <div key={purchase.id} className="bg-gray-700/30 border border-gray-700 rounded-lg p-6 hover:border-purple-600 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                            🎵
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-lg mb-1">{purchase.title}</h3>
                            <p className="text-purple-400 text-sm mb-2">Par {purchase.creator}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                🎼 {purchase.genre}
                              </span>
                              {purchase.bpm && (
                                <span className="flex items-center gap-1">
                                  🥁 {purchase.bpm} BPM
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                ⏱️ {purchase.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                📁 {purchase.format}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right ml-4">
                          <p className="font-bold text-white text-xl mb-1">${purchase.price}</p>
                          <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-600/50">
                            {purchase.license}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-700 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Acheté le {purchase.date}</span>
                          <span>•</span>
                          <span>Téléchargé {purchase.downloadCount}x</span>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleDownload(purchase.id)}
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                          >
                            <span>⬇️</span>
                            Télécharger
                          </button>
                          <button 
                            onClick={() => downloadInvoice(purchase.invoiceNumber)}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            📄 Facture
                          </button>
                          <button 
                            onClick={() => viewCertificate(purchase)}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            📜 Licence
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Mes favoris</h2>
                <p className="text-gray-400 text-sm">{filteredFavorites.length} audio(s)</p>
              </div>
              {filteredFavorites.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">
                    {searchTerm || filterGenre !== 'all' ? 'Aucun résultat trouvé' : 'Aucun favori pour le moment'}
                  </p>
                  <Link href="/catalogue">
                    <Button variant="primary" size="lg">
                      Explorer le catalogue
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFavorites.map((favorite) => (
                    <div key={favorite.id} className="bg-gray-700/30 border border-gray-700 rounded-lg overflow-hidden hover:border-purple-600 transition-colors group">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center relative">
                        <svg className="w-16 h-16 text-purple-300 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 3a1 1 0 00-1.196-.15l-16 10a1 1 0 000 1.696l16 10A1 1 0 0018 17V3z" />
                        </svg>
                        <button className="absolute top-3 right-3 w-10 h-10 bg-red-600/80 hover:bg-red-700 rounded-full flex items-center justify-center text-xl transition-colors">
                          ❤️
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white mb-1 truncate">{favorite.title}</h3>
                        <p className="text-purple-400 text-sm mb-3">{favorite.creator}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-400">
                          <span className="px-2 py-1 bg-gray-700 rounded">🎼 {favorite.genre}</span>
                          {favorite.bpm && (
                            <span className="px-2 py-1 bg-gray-700 rounded">🥁 {favorite.bpm} BPM</span>
                          )}
                          <span className="px-2 py-1 bg-gray-700 rounded">⏱️ {favorite.duration}</span>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                          <span className="text-purple-400 font-bold text-lg">${favorite.price}</span>
                          <Link href={`/audio/${favorite.id}`}>
                            <Button variant="primary" size="sm">
                              Acheter
                            </Button>
                          </Link>
                        </div>
                        
                        <p className="text-gray-500 text-xs mt-2">Ajouté le {favorite.addedDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          )}

          {/* Licenses Tab */}
          {activeTab === 'licenses' && (
            <div className="space-y-6">
              <Card>
                <h2 className="text-2xl font-bold text-white mb-6">Mes licences et certificats</h2>
                <p className="text-gray-400 mb-6">
                  Chaque achat sur Madagadotsara vous garantit une licence exclusive. 
                  Conservez ces documents pour prouver vos droits d'utilisation.
                </p>

                <div className="space-y-4">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="bg-gray-700/30 border border-gray-700 rounded-lg p-5 hover:border-purple-600 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-lg mb-1">{purchase.title}</h3>
                          <p className="text-purple-400 text-sm mb-3">Par {purchase.creator}</p>
                          
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <p className="text-gray-500 mb-1">N° de certificat</p>
                              <p className="text-white font-mono">{purchase.certificateId}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 mb-1">N° de facture</p>
                              <p className="text-white font-mono">{purchase.invoiceNumber}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 mb-1">Date d'achat</p>
                              <p className="text-white">{purchase.date}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 mb-1">Type de licence</p>
                              <p className="text-white">{purchase.license}</p>
                            </div>
                          </div>
                        </div>

                        <div className="ml-4">
                          <span className="inline-block px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/50">
                            ✓ Licence valide
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-700">
                        <details className="group">
                          <summary className="cursor-pointer text-purple-400 hover:text-purple-300 text-sm font-medium mb-2 flex items-center gap-2">
                            <span>📋 Conditions d'utilisation</span>
                            <span className="text-xs text-gray-500">(cliquez pour afficher)</span>
                          </summary>
                          <div className="mt-3 p-4 bg-gray-800/50 rounded-lg text-sm text-gray-300 space-y-2">
                            <p className="font-semibold text-white mb-2">Licence Exclusive - Droits accordés :</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                              <li>Utilisation commerciale illimitée (musique, vidéo, streaming)</li>
                              <li>Distribution sur toutes plateformes (Spotify, YouTube, etc.)</li>
                              <li>Synchronisation audiovisuelle (publicité, cinéma, TV)</li>
                              <li>Modification et adaptation autorisées</li>
                              <li>Propriété exclusive - Ce contenu ne peut plus être vendu à d'autres</li>
                            </ul>
                            <p className="text-yellow-400 mt-3 text-xs">
                              ⚠️ Important : Vous devez créditer le créateur "{purchase.creator}" lors de l'utilisation publique.
                            </p>
                          </div>
                        </details>

                        <div className="flex gap-2 mt-3">
                          <button 
                            onClick={() => viewCertificate(purchase)}
                            className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            📜 Télécharger le certificat
                          </button>
                          <button 
                            onClick={() => downloadInvoice(purchase.invoiceNumber)}
                            className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            📄 Télécharger la facture
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-blue-600/10 border-blue-600/50">
                <h3 className="text-lg font-bold text-blue-400 mb-3">💡 À propos des licences exclusives</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Sur Madagadotsara, tous les achats sont exclusifs. Une fois qu'un audio est acheté, 
                  il est automatiquement retiré de la plateforme et vous en devenez l'unique propriétaire.
                </p>
                <p className="text-gray-400 text-xs">
                  Cette exclusivité garantit que votre création reste unique et protège votre investissement.
                </p>
              </Card>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* User Profile */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Profil utilisateur</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full flex items-center justify-center text-3xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg">{userProfile.name}</h4>
                      <p className="text-gray-400 text-sm">{userProfile.email}</p>
                      <p className="text-gray-500 text-xs mt-1">Membre depuis {userProfile.memberSince}</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Modifier le profil
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-gray-700/30 rounded-lg">
                      <p className="text-gray-400 text-sm mb-1">Total dépensé</p>
                      <p className="text-white font-bold text-xl">${userProfile.totalSpent}</p>
                    </div>
                    <div className="p-3 bg-gray-700/30 rounded-lg">
                      <p className="text-gray-400 text-sm mb-1">Genre préféré</p>
                      <p className="text-white font-bold text-xl">{userProfile.favoriteGenre}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Notification Preferences */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Préférences de notification</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer p-3 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <input 
                      type="checkbox" 
                      defaultChecked 
                      className="w-5 h-5 bg-gray-700 border-2 border-gray-600 rounded text-purple-600 focus:ring-2 focus:ring-purple-600" 
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">Nouveaux beats de mes créateurs favoris</span>
                      <p className="text-gray-400 text-xs mt-1">Soyez alerté quand vos artistes préférés ajoutent du contenu</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-3 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <input 
                      type="checkbox" 
                      defaultChecked 
                      className="w-5 h-5 bg-gray-700 border-2 border-gray-600 rounded text-purple-600 focus:ring-2 focus:ring-purple-600" 
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">Promotions et offres spéciales</span>
                      <p className="text-gray-400 text-xs mt-1">Recevez des offres exclusives et réductions</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-3 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 bg-gray-700 border-2 border-gray-600 rounded text-purple-600 focus:ring-2 focus:ring-purple-600" 
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">Mises à jour du catalogue</span>
                      <p className="text-gray-400 text-xs mt-1">Nouveautés et contenus recommandés</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-3 hover:bg-gray-700/30 rounded-lg transition-colors">
                    <input 
                      type="checkbox" 
                      defaultChecked 
                      className="w-5 h-5 bg-gray-700 border-2 border-gray-600 rounded text-purple-600 focus:ring-2 focus:ring-purple-600" 
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">Confirmations d'achat</span>
                      <p className="text-gray-400 text-xs mt-1">Reçus et certificats de licence par email</p>
                    </div>
                  </label>
                </div>
              </Card>

              {/* Account Security */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Sécurité du compte</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <div>
                      <p className="text-white font-medium">Adresse email</p>
                      <p className="text-gray-400 text-sm">{userProfile.email}</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Modifier
                    </Button>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <div>
                      <p className="text-white font-medium">Mot de passe</p>
                      <p className="text-gray-400 text-sm">Dernière modification il y a 3 mois</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Changer
                    </Button>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-white font-medium">Authentification à deux facteurs</p>
                      <p className="text-gray-400 text-sm">Sécurisez davantage votre compte</p>
                    </div>
                    <Button variant="primary" size="sm">
                      Activer
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Payment Methods */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Méthodes de paiement</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg border border-gray-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center text-xl">
                      💳
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Carte Visa •••• 4242</p>
                      <p className="text-gray-400 text-sm">Expire 12/2025</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Gérer
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full">
                    + Ajouter une méthode de paiement
                  </Button>
                </div>
              </Card>

              {/* Download History */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Historique des téléchargements</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Tous vos fichiers restent disponibles indéfiniment. Les liens de téléchargement sont sécurisés et temporaires.
                </p>
                <div className="space-y-2">
                  {purchases.slice(0, 3).map((purchase) => (
                    <div key={purchase.id} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{purchase.title}</p>
                        <p className="text-gray-400 text-xs">Téléchargé {purchase.downloadCount}x</p>
                      </div>
                      <button 
                        onClick={() => handleDownload(purchase.id)}
                        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors"
                      >
                        Re-télécharger
                      </button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Danger Zone */}
              <Card className="border-red-600/50 bg-red-600/10">
                <h3 className="text-xl font-bold text-red-400 mb-4">Zone de danger</h3>
                <p className="text-gray-300 mb-2">Supprimer votre compte supprimera :</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
                  <li>Toutes vos données personnelles</li>
                  <li>Votre historique d'achats</li>
                  <li>Vos favoris et préférences</li>
                </ul>
                <p className="text-yellow-400 text-sm mb-4">
                  ⚠️ Attention : Vos licences et droits d'utilisation restent valides mais vous ne pourrez plus télécharger les fichiers.
                </p>
                <Button variant="outline" className="text-red-400 border-red-600 hover:bg-red-600/10">
                  Supprimer mon compte
                </Button>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 sm:px-6 lg:px-8 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-8 h-16">
          {(['purchases', 'favorites', 'licenses', 'settings'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-full px-4 border-b-2 transition-colors font-medium capitalize ${
                activeTab === tab
                  ? 'border-purple-600 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'purchases' && '🛍️ Mes achats'}
              {tab === 'favorites' && '❤️ Favoris'}
              {tab === 'licenses' && '📜 Licences'}
              {tab === 'settings' && '⚙️ Paramètres'}
            </button>
          ))}
        </div>
      </section>

      <Footer />

      {/* Spacer for fixed tabs */}
      <div className="h-16"></div>

      {/* Certificate Modal */}
      {selectedPurchase && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPurchase(null)}
        >
          <div 
            className="bg-gray-800 rounded-xl max-w-2xl w-full p-8 border-2 border-purple-600 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Certificat de Licence</h2>
              <button 
                onClick={() => setSelectedPurchase(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-6 rounded-lg border border-purple-600/30 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedPurchase.title}</h3>
                <p className="text-purple-400 text-lg">Par {selectedPurchase.creator}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 p-3 rounded">
                  <p className="text-gray-400 text-sm mb-1">Certificat N°</p>
                  <p className="text-white font-mono font-bold">{selectedPurchase.certificateId}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded">
                  <p className="text-gray-400 text-sm mb-1">Date d'émission</p>
                  <p className="text-white font-bold">{selectedPurchase.date}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded">
                  <p className="text-gray-400 text-sm mb-1">Type de licence</p>
                  <p className="text-white font-bold">{selectedPurchase.license}</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded">
                  <p className="text-gray-400 text-sm mb-1">Prix d'achat</p>
                  <p className="text-white font-bold">${selectedPurchase.price}</p>
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded mb-4">
                <p className="text-gray-400 text-sm mb-2">Titulaire de la licence</p>
                <p className="text-white font-bold text-lg">{userProfile.name}</p>
                <p className="text-gray-400 text-sm">{userProfile.email}</p>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-xs text-gray-400 text-center">
                  Ce certificat atteste que le titulaire possède les droits exclusifs d'utilisation 
                  de ce contenu audio conformément aux termes de la licence Exclusive de Madagadotsara.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => {
                  console.log('Downloading certificate PDF...');
                  alert('Téléchargement du certificat PDF...');
                }}
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                📥 Télécharger le PDF
              </button>
              <button 
                onClick={() => setSelectedPurchase(null)}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
