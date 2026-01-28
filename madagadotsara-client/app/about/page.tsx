import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Card from '@/app/components/Card';

export default function AboutPage() {
  const values = [
    { title: 'Authenticité', description: 'Soutenir les créateurs malgaches authentiques et talentués' },
    { title: 'Qualité', description: 'Garantir des contenus audio de haute qualité professionnelle' },
    { title: 'Sécurité', description: 'Protéger les droits d\'auteur et les transactions de nos utilisateurs' },
    { title: 'Innovation', description: 'Proposer une plateforme moderne et intuitive' },
  ];

  const team = [
    { name: 'Jean Rakoto', role: 'Fondateur & CEO', avatar: '👨‍💼' },
    { name: 'Marie Andriamampoinimerina', role: 'CTO', avatar: '👩‍💻' },
    { name: 'Romain Razafindrakoto', role: 'Head of Content', avatar: '👨‍🎵' },
    { name: 'Sophie Naitanitany', role: 'Community Manager', avatar: '👩‍💼' },
  ];

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-white">À propos de Madagadotsara</h1>
          <p className="text-xl text-gray-300">
            La plateforme révolutionnaire pour les créateurs sonores malgaches
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-6">Notre mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Madagadotsara a été créée avec une vision claire : donner une plateforme légitime et sécurisée aux beatmakers et créateurs audio malgaches. 
              Nous croyons que les talents musicaux malgaches méritent une reconnaissance mondiale et des revenus justes pour leurs créations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Notre objectif est de créer un écosystème où les créateurs peuvent vendre leurs œuvres en toute confiance, 
              et où les acheteurs trouvent des contenus audio de qualité supérieure avec des garanties légales complètes.
            </p>
          </Card>

          {/* Values Grid */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title}>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <Card>
            <h2 className="text-3xl font-bold text-white mb-8">Nos réalisations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-purple-400 mb-2">1,200+</p>
                <p className="text-gray-400">Beats disponibles</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400 mb-2">340+</p>
                <p className="text-gray-400">Créateurs</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400 mb-2">5,000+</p>
                <p className="text-gray-400">Clients actifs</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-purple-400 mb-2">$500K+</p>
                <p className="text-gray-400">Revenus distribués</p>
              </div>
            </div>
          </Card>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Notre équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="text-center">
                  <p className="text-6xl mb-4">{member.avatar}</p>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
