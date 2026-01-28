'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import AudioCard from '@/app/components/AudioCard';
import Button from '@/app/components/Button';

export default function CataloguePage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock data for audio catalogue
  const allAudios = [
    { id: 1, title: 'Midnight Vibes', creator: 'Ramy Beats', price: 29, genre: 'Hip-Hop', bpm: 95 },
    { id: 2, title: 'Ocean Breeze', creator: 'Lova Studio', price: 24, genre: 'Lo-Fi', bpm: 80 },
    { id: 3, title: 'Electric Dreams', creator: 'Dizo Sounds', price: 35, genre: 'Electronic', bpm: 128 },
    { id: 4, title: 'Tropical Paradise', creator: 'Tsilaon Audio', price: 26, genre: 'Tropical House', bpm: 110 },
    { id: 5, title: 'Urban Pulse', creator: 'Ramy Beats', price: 31, genre: 'Hip-Hop', bpm: 92 },
    { id: 6, title: 'Chill Mode', creator: 'Lova Studio', price: 22, genre: 'Lo-Fi', bpm: 75 },
    { id: 7, title: 'Synthwave Nights', creator: 'Dizo Sounds', price: 38, genre: 'Electronic', bpm: 120 },
    { id: 8, title: 'Malagasy Groove', creator: 'Tsilaon Audio', price: 33, genre: 'Trap', bpm: 140 },
    { id: 9, title: 'Boom Bap Classic', creator: 'Ramy Beats', price: 27, genre: 'Hip-Hop', bpm: 88 },
    { id: 10, title: 'Jazz Lounge', creator: 'Lova Studio', price: 25, genre: 'Jazz', bpm: 70 },
    { id: 11, title: 'Afrobeat Fusion', creator: 'Dizo Sounds', price: 30, genre: 'Afrobeat', bpm: 105 },
    { id: 12, title: 'Ambient Zen', creator: 'Tsilaon Audio', price: 20, genre: 'Ambient', bpm: 60 },
  ];

  const genres = ['Hip-Hop', 'Lo-Fi', 'Electronic', 'Tropical House', 'Trap', 'Jazz', 'Afrobeat', 'Ambient'];
  const priceRanges = [
    { label: 'Tous les prix', value: 'all' },
    { label: '0 - $25', value: '0-25' },
    { label: '$25 - $35', value: '25-35' },
    { label: '$35+', value: '35+' },
  ];

  const filteredAudios = allAudios.filter((audio) => {
    const matchesGenre = selectedGenre === 'all' || audio.genre === selectedGenre;
    const matchesPrice = selectedPrice === 'all' || 
      (selectedPrice === '0-25' && audio.price <= 25) ||
      (selectedPrice === '25-35' && audio.price > 25 && audio.price <= 35) ||
      (selectedPrice === '35+' && audio.price > 35);
    const matchesSearch = searchQuery === '' || 
      audio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      audio.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesPrice && matchesSearch;
  });

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Catalogue audio</h1>
          <p className="text-gray-400">{filteredAudios.length} audios disponibles</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-white font-semibold mb-3">Rechercher</label>
                  <input
                    type="text"
                    placeholder="Titre ou créateur..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                {/* Genre Filter */}
                <div>
                  <label className="block text-white font-semibold mb-3">Genre</label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedGenre('all')}
                      className={`block w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                        selectedGenre === 'all'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Tous les genres
                    </button>
                    {genres.map((genre) => (
                      <button
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        className={`block w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                          selectedGenre === genre
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-white font-semibold mb-3">Prix</label>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setSelectedPrice(range.value)}
                        className={`block w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                          selectedPrice === range.value
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setSelectedGenre('all');
                    setSelectedPrice('all');
                    setSearchQuery('');
                  }}
                >
                  Réinitialiser
                </Button>
              </div>
            </div>

            {/* Main Grid */}
            <div className="lg:col-span-3">
              {filteredAudios.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg mb-4">Aucun audio trouvé</p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSelectedGenre('all');
                      setSelectedPrice('all');
                      setSearchQuery('');
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAudios.map((audio) => (
                    <AudioCard key={audio.id} {...audio} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
