'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import AudioCard from './components/AudioCard';

export default function Home() {
  // Mock data for featured creators
  const featuredCreators = [
    { id: 1, name: 'Ramy Beats', avatar: '🎵', count: 24 },
    { id: 2, name: 'Lova Studio', avatar: '🎧', count: 18 },
    { id: 3, name: 'Dizo Sounds', avatar: '🎼', count: 31 },
    { id: 4, name: 'Tsilaon Audio', avatar: '🔊', count: 15 },
  ];

  // Mock data for featured audio
  const featuredAudio = [
    { id: 1, title: 'Midnight Vibes', creator: 'Ramy Beats', price: 50000, genre: 'Hip-Hop', bpm: 95 },
    { id: 2, title: 'Ocean Breeze', creator: 'Lova Studio', price: 40000, genre: 'Lo-Fi', bpm: 80 },
    { id: 3, title: 'Electric Dreams', creator: 'Dizo Sounds', price: 60000, genre: 'Electronic', bpm: 128 },
    { id: 4, title: 'Tropical Paradise', creator: 'Tsilaon Audio', price: 45000, genre: 'Tropical House', bpm: 110 },
  ];

  const categories = [
    { id: 1, name: 'Beats', icon: '🎵', count: 345 },
    { id: 2, name: 'Instrumentales', icon: '🎸', count: 287 },
    { id: 3, name: 'Effets Sonores', icon: '🔊', count: 156 },
    { id: 4, name: 'Ambiances', icon: '🌊', count: 124 },
  ];

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="text-white">La marketplace officielle des </span>
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                créations sonores malgaches
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Découvrez et achetez des beats, instrumentales et effets sonores de qualité professionnelle créés par les meilleurs beatmakers malgaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/catalogue">
                <Button variant="primary" size="lg">
                  Explorer les beats
                </Button>
              </Link>
              <Link href="/auth/signup?type=seller">
                <Button variant="outline" size="lg">
                  Devenir vendeur
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">1200+</div>
                <div className="text-gray-400 text-sm">Audios disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">340+</div>
                <div className="text-gray-400 text-sm">Créateurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5000+</div>
                <div className="text-gray-400 text-sm">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Parcourez par catégorie</h2>
            <p className="text-gray-400">Trouvez exactement ce dont vous avez besoin</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/catalogue?category=${category.name.toLowerCase()}`}>
                <Card hoverable className="text-center cursor-pointer h-full flex flex-col items-center justify-center gap-4">
                  <div className="text-5xl">{category.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{category.name}</h3>
                    <p className="text-gray-400 text-sm">{category.count} audios</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Audio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">À l'affiche</h2>
              <p className="text-gray-400">Les meilleures créations du moment</p>
            </div>
            <Link href="/catalogue">
              <Button variant="outline">
                Voir tous les audios
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAudio.map((audio) => (
              <AudioCard key={audio.id} {...audio} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Créateurs mis en avant</h2>
            <p className="text-gray-400">Découvrez les talents derrière les beats</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredCreators.map((creator) => (
              <Card key={creator.id} hoverable className="text-center">
                <div className="text-6xl mb-4">{creator.avatar}</div>
                <h3 className="font-semibold text-white text-lg mb-1">{creator.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{creator.count} audios</p>
                <Button variant="outline" size="sm" className="w-full">
                  Visiter
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-purple-800/20 border-y border-purple-800/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Prêt à commencer?</h2>
          <p className="text-xl text-gray-300">
            Rejoignez des milliers de créateurs et de producteurs qui utilisent Madagadotsara
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/auth/signup?type=seller">
              <Button variant="primary" size="lg">
                Je suis beatmaker
              </Button>
            </Link>
            <Link href="/auth/signup?type=buyer">
              <Button variant="secondary" size="lg">
                Je cherche des beats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
