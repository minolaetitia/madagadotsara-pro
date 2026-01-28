'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import FormInput from '@/app/components/FormInput';

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'uploads' | 'analytics' | 'settings'>('overview');
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Mock data
  const stats = [
    { label: 'Revenus totaux', value: '$2,450', change: '+12%' },
    { label: 'Audios publiés', value: '24', change: '+3' },
    { label: 'Téléchargements', value: '342', change: '+45' },
    { label: 'Note moyenne', value: '4.8/5', change: '+0.2' },
  ];

  const uploads = [
    {
      id: 1,
      title: 'Midnight Vibes',
      genre: 'Hip-Hop',
      bpm: 95,
      status: 'published',
      price: 29,
      downloads: 124,
      revenue: '$3,596',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Urban Pulse',
      genre: 'Hip-Hop',
      bpm: 92,
      status: 'published',
      price: 31,
      downloads: 87,
      revenue: '$2,697',
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'Synthwave Dreams',
      genre: 'Electronic',
      bpm: 120,
      status: 'pending',
      price: 35,
      downloads: 0,
      revenue: '$0',
      date: '2024-01-20',
    },
  ];

  const recentActivity = [
    { id: 1, type: 'sale', message: 'Vente de "Midnight Vibes"', amount: '$29', time: 'Il y a 2 heures' },
    { id: 2, type: 'review', message: 'Nouvel avis 5 étoiles sur "Urban Pulse"', amount: '', time: 'Il y a 4 heures' },
    { id: 3, type: 'download', message: 'Téléchargement de "Midnight Vibes"', amount: '', time: 'Il y a 6 heures' },
    { id: 4, type: 'sale', message: 'Vente de "Urban Pulse"', amount: '$31', time: 'Il y a 1 jour' },
  ];

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard Vendeur</h1>
              <p className="text-gray-400">Bienvenue, Ramy Beats</p>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowUploadModal(true)}
            >
              + Télécharger un audio
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Stats Grid */}
          {activeTab === 'overview' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label}>
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-green-400 text-sm font-semibold">{stat.change}</p>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <Card className="lg:col-span-2">
                  <h2 className="text-xl font-bold text-white mb-4">Activité récente</h2>
                  <div className="space-y-3">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-600/20 border border-purple-600/50 rounded-lg flex items-center justify-center">
                            {activity.type === 'sale' && <span>💳</span>}
                            {activity.type === 'review' && <span>⭐</span>}
                            {activity.type === 'download' && <span>⬇️</span>}
                          </div>
                          <div>
                            <p className="text-white font-medium">{activity.message}</p>
                            <p className="text-gray-400 text-sm">{activity.time}</p>
                          </div>
                        </div>
                        {activity.amount && <span className="text-green-400 font-semibold">{activity.amount}</span>}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <h3 className="text-lg font-bold text-white mb-4">Informations</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm">Studio</p>
                      <p className="text-white font-semibold">Ramy Beats Studio</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Genre principal</p>
                      <p className="text-white font-semibold">Hip-Hop</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Membre depuis</p>
                      <p className="text-white font-semibold">Janvier 2023</p>
                    </div>
                    <Button variant="secondary" size="md" className="w-full">
                      Éditer le profil
                    </Button>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* Uploads Tab */}
          {activeTab === 'uploads' && (
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Mes audios</h2>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setShowUploadModal(true)}
                >
                  + Ajouter un audio
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Titre</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Genre</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">BPM</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Statut</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Téléchargements</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Revenus</th>
                      <th className="text-center px-4 py-3 text-gray-400 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploads.map((upload) => (
                      <tr key={upload.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="px-4 py-3 text-white font-medium">{upload.title}</td>
                        <td className="px-4 py-3 text-gray-400">{upload.genre}</td>
                        <td className="px-4 py-3 text-gray-400">{upload.bpm}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            upload.status === 'published'
                              ? 'bg-green-600/20 text-green-400'
                              : 'bg-yellow-600/20 text-yellow-400'
                          }`}>
                            {upload.status === 'published' ? 'Publié' : 'En attente'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-white">{upload.downloads}</td>
                        <td className="px-4 py-3 text-white font-semibold">{upload.revenue}</td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button className="text-gray-400 hover:text-white transition-colors">
                              ✏️
                            </button>
                            <button className="text-gray-400 hover:text-red-400 transition-colors">
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <h2 className="text-xl font-bold text-white mb-4">Revenus mensuels</h2>
                <div className="h-64 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-400">
                  Graphique des revenus (API backend requise)
                </div>
              </Card>
              <Card>
                <h2 className="text-xl font-bold text-white mb-4">Téléchargements par genre</h2>
                <div className="h-64 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-400">
                  Graphique des genres (API backend requise)
                </div>
              </Card>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6">Paramètres du profil</h2>
              <div className="space-y-6">
                <FormInput
                  label="Nom du studio"
                  placeholder="Ramy Beats Studio"
                />
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="studio@example.com"
                />
                <FormInput
                  label="Bio"
                  textarea
                  placeholder="Parlez un peu de votre studio..."
                />
                <FormInput
                  label="Compte bancaire"
                  placeholder="IBAN..."
                />
                <Button variant="primary" size="lg">
                  Sauvegarder les modifications
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-8 h-16">
          {(['overview', 'uploads', 'analytics', 'settings'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-full px-4 border-b-2 transition-colors font-medium capitalize ${
                activeTab === tab
                  ? 'border-purple-600 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'overview' && 'Aperçu'}
              {tab === 'uploads' && 'Mes audios'}
              {tab === 'analytics' && 'Analytique'}
              {tab === 'settings' && 'Paramètres'}
            </button>
          ))}
        </div>
      </section>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Télécharger un nouvel audio</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center cursor-pointer hover:border-purple-600 transition-colors">
                <svg className="w-12 h-12 text-gray-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6" />
                </svg>
                <p className="text-gray-300 font-medium">Cliquez ou glissez un fichier audio</p>
                <p className="text-gray-500 text-sm">MP3, WAV ou FLAC (max 50MB)</p>
              </div>

              <FormInput label="Titre du beat" placeholder="ex: Midnight Vibes" />
              <FormInput label="Genre" placeholder="ex: Hip-Hop" />
              <FormInput label="BPM" type="number" placeholder="95" />
              <FormInput label="Prix ($)" type="number" placeholder="29" />
              <FormInput label="Description" textarea placeholder="Décrivez votre création..." />

              <div className="flex gap-3 pt-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                  onClick={() => setShowUploadModal(false)}
                >
                  Annuler
                </Button>
                <Button variant="primary" size="lg" className="flex-1">
                  Télécharger
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      <Footer />

      {/* Spacer for fixed tabs */}
      <div className="h-16"></div>
    </main>
  );
}
