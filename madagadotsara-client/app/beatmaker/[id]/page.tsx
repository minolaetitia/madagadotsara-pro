'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import AudioCard from '@/app/components/AudioCard';

export default function BeatmakerProfile() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<'beats' | 'about' | 'reviews'>('beats');

  // Mock data - Profile du beatmaker
  const beatmaker = {
    id: 'mada-beats',
    name: 'Mada Beats',
    studio: 'Mada Beats Studio',
    email: 'beatmaker@gdtsara.mg',
    avatar: '🎧',
    coverColor: 'from-purple-600 to-indigo-600',
    bio: "Beatmaker malgache spécialisé dans l'Afrobeat, le Hip-Hop et la fusion Salegy. Créateur de sons uniques qui mélangent modernité et tradition. Mes productions combinent des rythmes modernes avec des sonorités traditionnelles malgaches pour créer une expérience sonore authentique.",
    location: 'Antananarivo, Madagascar',
    memberSince: 'Janvier 2026',
    verified: true,
    genres: ['Hip-Hop', 'Afrobeat', 'Trap', 'Salegy Fusion'],
    stats: {
      totalBeats: 32,
      totalSales: 127,
      followers: 3421,
      rating: 4.9,
      totalReviews: 89,
    },
    socialLinks: {
      instagram: '@madabeats',
      youtube: 'MadaBeatsOfficial',
      soundcloud: 'madabeats',
    },
  };

  const beats = [
    {
      id: 1,
      title: 'Salegy Trap Fusion',
      genre: 'Trap/Salegy',
      bpm: 140,
      key: 'C# Minor',
      price: 150000,
      duration: '3:45',
      plays: 543,
      favorites: 89,
      date: '2026-01-20',
      tags: ['energetic', 'fusion', 'trap', 'traditional'],
      image: '🔥',
    },
    {
      id: 2,
      title: 'Afrobeat Malgache',
      genre: 'Afrobeat',
      bpm: 128,
      key: 'F Major',
      price: 120000,
      duration: '3:12',
      plays: 892,
      favorites: 156,
      date: '2026-01-15',
      tags: ['afrobeat', 'groovy', 'dance', 'party'],
      image: '🎵',
    },
    {
      id: 3,
      title: 'Madagascar Dreams',
      genre: 'Ambient/Chill',
      bpm: 90,
      key: 'G Major',
      price: 100000,
      duration: '4:20',
      plays: 234,
      favorites: 45,
      date: '2026-01-10',
      tags: ['chill', 'ambient', 'relaxing', 'meditation'],
      image: '🌴',
    },
    {
      id: 4,
      title: 'Urban Tana Vibes',
      genre: 'Hip-Hop',
      bpm: 95,
      key: 'A Minor',
      price: 130000,
      duration: '3:28',
      plays: 312,
      favorites: 67,
      date: '2026-01-08',
      tags: ['hip-hop', 'urban', 'street', 'boom-bap'],
      image: '🏙️',
    },
    {
      id: 5,
      title: 'Tropical Island',
      genre: 'Tropical House',
      bpm: 115,
      key: 'D Major',
      price: 140000,
      duration: '3:55',
      plays: 456,
      favorites: 102,
      date: '2026-01-05',
      tags: ['tropical', 'house', 'summer', 'beach'],
      image: '🌊',
    },
    {
      id: 6,
      title: 'Malagasy Drill',
      genre: 'Drill',
      bpm: 145,
      key: 'E Minor',
      price: 160000,
      duration: '2:58',
      plays: 678,
      favorites: 134,
      date: '2026-01-01',
      tags: ['drill', 'dark', 'hard', 'aggressive'],
      image: '💀',
    },
  ];

  const reviews = [
    {
      id: 1,
      buyer: 'Rija Music',
      rating: 5,
      comment: 'Qualité exceptionnelle ! Le beat "Afrobeat Malgache" est exactement ce que je cherchais. Production impeccable et son unique. Je recommande vivement !',
      beat: 'Afrobeat Malgache',
      date: '2026-01-26',
      verified: true,
    },
    {
      id: 2,
      buyer: 'Lova Studio',
      rating: 5,
      comment: 'Excellent travail ! La fusion entre trap et salegy est incroyable. Sound design top niveau.',
      beat: 'Salegy Trap Fusion',
      date: '2026-01-25',
      verified: true,
    },
    {
      id: 3,
      buyer: 'Tiana Records',
      rating: 5,
      comment: 'Beat parfait pour mon projet. Ambiance chill et qualité audio irréprochable.',
      beat: 'Madagascar Dreams',
      date: '2026-01-23',
      verified: true,
    },
    {
      id: 4,
      buyer: 'Nelly Prod',
      rating: 4,
      comment: 'Très bon beat, son professionnel. Juste un petit ajustement nécessaire sur les basses mais rien de grave.',
      beat: 'Urban Tana Vibes',
      date: '2026-01-20',
      verified: true,
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-MG', { 
      style: 'currency', 
      currency: 'MGA',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Profile Header */}
      <section className={`bg-gradient-to-r ${beatmaker.coverColor} py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center text-6xl shadow-2xl flex-shrink-0 border-4 border-white/20">
              {beatmaker.avatar}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{beatmaker.name}</h1>
                {beatmaker.verified && (
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                    ✓ Vérifié
                  </span>
                )}
              </div>
              <p className="text-xl text-white/90 mb-2">{beatmaker.studio}</p>
              <p className="text-white/70 mb-4">📍 {beatmaker.location}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                {beatmaker.genres.map((genre) => (
                  <span
                    key={genre}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-white/90 mb-6">
                <div>
                  <span className="font-bold text-2xl">{beatmaker.stats.totalBeats}</span>
                  <span className="text-sm ml-2">Beats</span>
                </div>
                <div>
                  <span className="font-bold text-2xl">{beatmaker.stats.totalSales}</span>
                  <span className="text-sm ml-2">Ventes</span>
                </div>
                <div>
                  <span className="font-bold text-2xl">{beatmaker.stats.followers}</span>
                  <span className="text-sm ml-2">Followers</span>
                </div>
                <div>
                  <span className="font-bold text-2xl">{beatmaker.stats.rating}</span>
                  <span className="text-sm ml-2">⭐ ({beatmaker.stats.totalReviews} avis)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button variant="primary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  ❤️ Suivre
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  💬 Contacter
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  🔗 Partager
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-800 border-b border-gray-700 px-4 sm:px-6 lg:px-8 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <nav className="flex gap-6 overflow-x-auto">
            {[
              { id: 'beats', label: 'Beats', icon: '🎵', count: beatmaker.stats.totalBeats },
              { id: 'about', label: 'À propos', icon: 'ℹ️' },
              { id: 'reviews', label: 'Avis', icon: '⭐', count: beatmaker.stats.totalReviews },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-white'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
                {tab.count !== undefined && (
                  <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Beats Tab */}
          {activeTab === 'beats' && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Tous les beats</h2>
                <div className="flex gap-3">
                  <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700">
                    <option>Plus récents</option>
                    <option>Plus populaires</option>
                    <option>Prix croissant</option>
                    <option>Prix décroissant</option>
                  </select>
                  <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700">
                    <option>Tous les genres</option>
                    {beatmaker.genres.map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beats.map((beat) => (
                  <Card key={beat.id} className="hover:border-purple-600 transition-colors cursor-pointer group">
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg mb-4 flex items-center justify-center text-6xl relative overflow-hidden">
                      {beat.image}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 text-2xl">
                          ▶
                        </button>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{beat.title}</h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <span>{beat.genre}</span>
                      <span>{beat.duration}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      <span>{beat.bpm} BPM</span>
                      <span>•</span>
                      <span>{beat.key}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {beat.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>👁️ {beat.plays} écoutes</span>
                      <span>❤️ {beat.favorites}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <span className="text-2xl font-bold text-white">
                        {formatCurrency(beat.price)}
                      </span>
                      <Button variant="primary" size="sm">
                        Acheter
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <h2 className="text-2xl font-bold text-white mb-4">À propos de {beatmaker.name}</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {beatmaker.bio}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-700">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Informations</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>📍 {beatmaker.location}</p>
                      <p>📅 Membre depuis {beatmaker.memberSince}</p>
                      <p>✅ Compte vérifié</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Styles musicaux</h3>
                    <div className="flex flex-wrap gap-2">
                      {beatmaker.genres.map((genre) => (
                        <span
                          key={genre}
                          className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-600/50"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Réseaux sociaux</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      📷
                    </div>
                    <div>
                      <p className="text-white font-medium">Instagram</p>
                      <p className="text-gray-400 text-sm">{beatmaker.socialLinks.instagram}</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      ▶️
                    </div>
                    <div>
                      <p className="text-white font-medium">YouTube</p>
                      <p className="text-gray-400 text-sm">{beatmaker.socialLinks.youtube}</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      🔊
                    </div>
                    <div>
                      <p className="text-white font-medium">SoundCloud</p>
                      <p className="text-gray-400 text-sm">{beatmaker.socialLinks.soundcloud}</p>
                    </div>
                  </a>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Statistiques</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <p className="text-3xl font-bold text-purple-400 mb-1">{beatmaker.stats.totalBeats}</p>
                    <p className="text-gray-400 text-sm">Beats publiés</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <p className="text-3xl font-bold text-green-400 mb-1">{beatmaker.stats.totalSales}</p>
                    <p className="text-gray-400 text-sm">Ventes</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <p className="text-3xl font-bold text-blue-400 mb-1">{beatmaker.stats.followers}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <p className="text-3xl font-bold text-yellow-400 mb-1">{beatmaker.stats.rating}/5</p>
                    <p className="text-gray-400 text-sm">Note moyenne</p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Avis clients</h2>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-4xl font-bold text-white">{beatmaker.stats.rating}</span>
                    <div className="text-left">
                      <div className="text-yellow-400 text-xl">{renderStars(Math.round(beatmaker.stats.rating))}</div>
                      <p className="text-gray-400 text-sm">{beatmaker.stats.totalReviews} avis</p>
                    </div>
                  </div>
                </div>
              </div>

              {reviews.map((review) => (
                <Card key={review.id}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-white font-semibold">{review.buyer}</p>
                            {review.verified && (
                              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                                ✓ Achat vérifié
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">Beat: {review.beat}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{review.date}</p>
                      </div>
                      <div className="text-yellow-400 mb-2">{renderStars(review.rating)}</div>
                      <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="text-center py-8">
                <Button variant="outline" size="lg">
                  Voir tous les avis
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
