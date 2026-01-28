'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import AudioPlayer from '@/app/components/AudioPlayer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function AudioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [showLicenseTerms, setShowLicenseTerms] = useState(false);

  // Unwrap the params Promise
  const { id } = React.use(params);

  // Mock data - In a real app, this would come from an API
  // Différentes musiques selon l'ID
  const audioDatabase: Record<string, any> = {
    '1': {
      id: '1',
      title: 'Midnight Vibes',
      creator: 'Ramy Beats',
      creatorAvatar: '🎵',
      price: 29,
      genre: 'Hip-Hop',
      bpm: 95,
      duration: 180,
      key: 'A Minor',
      scale: 'Minor',
      mood: 'Dark, Atmospheric',
      usage: 'Rap/Hip-Hop',
      license: 'Exclusive',
      downloads: 324,
      rating: 4.8,
      reviews: 42,
      description: 'Un beat sombre et atmosphérique parfait pour les productions rap modernes. Combinaison de synths profonds et de drums trap.',
      tags: ['Trap', 'Dark', 'Atmospheric', 'Modern'],
      files: {
        preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        full: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      },
    },
    '2': {
      id: '2',
      title: 'Ocean Breeze',
      creator: 'Lova Studio',
      creatorAvatar: '🎧',
      price: 25,
      genre: 'Lo-Fi',
      bpm: 80,
      duration: 195,
      key: 'C Major',
      scale: 'Major',
      mood: 'Chill, Relaxing',
      usage: 'Lo-Fi/Chill',
      license: 'Standard',
      downloads: 456,
      rating: 4.9,
      reviews: 67,
      description: 'Un beat lo-fi relaxant avec des sonorités océaniques. Parfait pour créer une ambiance chill et décontractée.',
      tags: ['Lo-Fi', 'Chill', 'Relaxing', 'Ocean'],
      files: {
        preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        full: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      },
    },
    '3': {
      id: '3',
      title: 'Electric Dreams',
      creator: 'Dizo Sounds',
      creatorAvatar: '🎼',
      price: 35,
      genre: 'Electronic',
      bpm: 128,
      duration: 210,
      key: 'G Minor',
      scale: 'Minor',
      mood: 'Energetic, Futuristic',
      usage: 'EDM/Electronic',
      license: 'Premium',
      downloads: 289,
      rating: 4.7,
      reviews: 38,
      description: 'Un morceau électronique énergique avec des synthés puissants et des drops explosifs. Idéal pour les productions EDM.',
      tags: ['Electronic', 'EDM', 'Energetic', 'Synth'],
      files: {
        preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        full: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      },
    },
    '4': {
      id: '4',
      title: 'Tropical Paradise',
      creator: 'Tsilaon Audio',
      creatorAvatar: '🔊',
      price: 28,
      genre: 'Tropical House',
      bpm: 110,
      duration: 190,
      key: 'D Major',
      scale: 'Major',
      mood: 'Happy, Uplifting',
      usage: 'Pop/Tropical',
      license: 'Standard',
      downloads: 512,
      rating: 4.9,
      reviews: 85,
      description: 'Un beat tropical house ensoleillé avec des vibes caribéennes. Parfait pour des productions estivales et entraînantes.',
      tags: ['Tropical', 'House', 'Summer', 'Uplifting'],
      files: {
        preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        full: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      },
    },
  };

  const audio = audioDatabase[id] || audioDatabase['1'];

  const licenseTerms = [
    'Licence d\'exploitation exclusive',
    'Droits de revente inclus',
    'Utilisation commerciale autorisée',
    'Certificat de propriété inclus',
    'Support 24/7 fourni',
  ];

  const handlePurchase = () => {
    if (!showLicenseTerms) {
      setShowLicenseTerms(true);
    } else {
      setIsPurchased(true);
      // In a real app, this would trigger payment processing
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/catalogue" className="text-purple-400 hover:text-purple-300 mb-8 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour au catalogue
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="inline-block bg-purple-600/20 border border-purple-600/50 rounded-full px-3 py-1 text-sm text-purple-300 mb-4">
                  {audio.genre}
                </div>
                <h1 className="text-4xl font-bold text-white mb-3">{audio.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{audio.creatorAvatar}</span>
                    <div>
                      <p className="font-semibold text-white">{audio.creator}</p>
                      <p className="text-gray-400 text-sm">{audio.downloads} téléchargements</p>
                    </div>
                  </div>
                  <div className="border-l border-gray-700 pl-4">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(audio.rating) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">{audio.rating} ({audio.reviews} avis)</p>
                  </div>
                </div>
              </div>

              {/* Audio Player */}
              <AudioPlayer 
                title={audio.title} 
                artist={audio.creator} 
                audioUrl={isPurchased ? audio.files.full : audio.files.preview}
                isPreview={!isPurchased} 
              />

              {/* Description */}
              <Card>
                <h2 className="text-xl font-bold text-white mb-3">À propos</h2>
                <p className="text-gray-300 mb-6">{audio.description}</p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Tonalité</p>
                    <p className="font-semibold text-white">{audio.key}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Mode</p>
                    <p className="font-semibold text-white">{audio.scale}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">BPM</p>
                    <p className="font-semibold text-white">{audio.bpm}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Ambiance</p>
                    <p className="font-semibold text-white">{audio.mood}</p>
                  </div>
                </div>
              </Card>

              {/* Tags */}
              <Card>
                <h3 className="text-white font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {audio.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Reviews Section */}
              <Card>
                <h3 className="text-white font-semibold mb-4">Avis clients</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="pb-4 border-b border-gray-700 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">👤</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-white">Client {i}</p>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, j) => (
                                <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">Excellent beat! Exactement ce que je cherchais pour mon projet.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <div className="space-y-6">
                  {/* Price */}
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Prix</p>
                    <p className="text-4xl font-bold text-purple-400">${audio.price}</p>
                  </div>

                  {/* License Info */}
                  <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold text-sm">{audio.license}</p>
                        <p className="text-gray-300 text-xs">Licence d'exploitation complète</p>
                      </div>
                    </div>
                  </div>

                  {/* License Terms */}
                  {showLicenseTerms && (
                    <Card className="bg-gray-700/50 border-gray-600">
                      <h4 className="text-white font-semibold mb-3 text-sm">Conditions de licence</h4>
                      <ul className="space-y-2">
                        {licenseTerms.map((term) => (
                          <li key={term} className="flex gap-2 text-xs text-gray-300">
                            <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {term}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )}

                  {/* Purchase Button */}
                  {!isPurchased ? (
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={handlePurchase}
                    >
                      {showLicenseTerms ? 'Confirmer l\'achat' : 'Acheter'}
                    </Button>
                  ) : (
                    <div className="bg-green-600/20 border border-green-600/50 rounded-lg px-4 py-3 text-center">
                      <p className="text-green-400 font-semibold">✓ Achat confirmé!</p>
                      <p className="text-green-300 text-sm mt-1">Télécharger la version complète</p>
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                      </svg>
                      Fichier WAV 24bit/48kHz
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                      </svg>
                      Certificat de propriété
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                      </svg>
                      Support 24/7
                    </div>
                  </div>

                  {/* Creator Info */}
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full"
                  >
                    Voir le profil du créateur
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
