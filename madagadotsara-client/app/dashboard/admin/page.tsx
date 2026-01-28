'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'vendors' | 'content' | 'disputes'>('overview');

  // Mock data
  const stats = [
    { label: 'Utilisateurs totaux', value: '1,234', change: '+12%', icon: '👥' },
    { label: 'Vendeurs vérifiés', value: '340', change: '+5%', icon: '🎵' },
    { label: 'Audios publiés', value: '1,200', change: '+45%', icon: '📻' },
    { label: 'Revenus totaux', value: '$45,230', change: '+25%', icon: '💰' },
  ];

  const pendingVendors = [
    { id: 1, name: 'Studio Nova', email: 'contact@nova.mg', genre: 'Electronic', date: '2024-01-20' },
    { id: 2, name: 'Rory Beats', email: 'rory@beats.mg', genre: 'Hip-Hop', date: '2024-01-19' },
    { id: 3, name: 'Jazz Production', email: 'info@jazz.mg', genre: 'Jazz', date: '2024-01-18' },
  ];

  const pendingContent = [
    { id: 1, title: 'Midnight Vibes 2', creator: 'Ramy Beats', status: 'review', date: '2024-01-20' },
    { id: 2, title: 'Tech Dreams', creator: 'Studio Nova', status: 'review', date: '2024-01-19' },
    { id: 3, title: 'Jazz Night', creator: 'Jazz Production', status: 'flagged', date: '2024-01-18' },
  ];

  const disputes = [
    {
      id: 1,
      issue: 'Problème de droit d\'auteur',
      reporter: 'User123',
      defendant: 'Ramy Beats',
      status: 'open',
      date: '2024-01-20',
    },
    {
      id: 2,
      issue: 'Qualité insuffisante',
      reporter: 'User456',
      defendant: 'Lova Studio',
      status: 'resolved',
      date: '2024-01-15',
    },
  ];

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400">Gestion de la plateforme Madagadotsara</p>
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
                    <p className="text-3xl mb-2">{stat.icon}</p>
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-green-400 text-sm font-semibold">{stat.change}</p>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Platform Activity */}
                <Card>
                  <h2 className="text-xl font-bold text-white mb-4">Activité récente</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">Nouveaux vendeurs</span>
                      <span className="text-white font-semibold">+12</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-300">Audios téléchargés</span>
                      <span className="text-white font-semibold">+45</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">Transactions</span>
                      <span className="text-white font-semibold">234</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-300">Litige ouverts</span>
                      <span className="text-red-400 font-semibold">3</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-300">Contenu signalé</span>
                      <span className="text-yellow-400 font-semibold">2</span>
                    </div>
                  </div>
                </Card>

                {/* System Health */}
                <Card>
                  <h2 className="text-xl font-bold text-white mb-4">Santé du système</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Serveur API</span>
                        <span className="text-green-400 font-semibold">Opérationnel</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-600 w-[92%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Stockage</span>
                        <span className="text-green-400 font-semibold">45%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 w-[45%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Bande passante</span>
                        <span className="text-yellow-400 font-semibold">73%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-600 w-[73%]"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* Vendors Tab */}
          {activeTab === 'vendors' && (
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6">Vendeurs en attente</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Nom</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Email</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Genre</th>
                      <th className="text-left px-4 py-3 text-gray-400 font-semibold">Date</th>
                      <th className="text-center px-4 py-3 text-gray-400 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingVendors.map((vendor) => (
                      <tr key={vendor.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                        <td className="px-4 py-3 text-white font-medium">{vendor.name}</td>
                        <td className="px-4 py-3 text-gray-400">{vendor.email}</td>
                        <td className="px-4 py-3 text-gray-400">{vendor.genre}</td>
                        <td className="px-4 py-3 text-gray-400">{vendor.date}</td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Button variant="primary" size="sm">
                              Approuver
                            </Button>
                            <Button variant="secondary" size="sm">
                              Rejeter
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6">Contenu en attente de validation</h2>
              <div className="space-y-3">
                {pendingContent.map((item) => (
                  <div key={item.id} className="bg-gray-700/30 border border-gray-700 rounded-lg p-4 flex items-center justify-between hover:border-purple-600 transition-colors">
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.creator} • {item.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'review'
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'bg-red-600/20 text-red-400'
                      }`}>
                        {item.status === 'review' ? 'En révision' : 'Signalé'}
                      </span>
                      <Button variant="primary" size="sm">
                        Approuver
                      </Button>
                      <Button variant="secondary" size="sm">
                        Rejeter
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Disputes Tab */}
          {activeTab === 'disputes' && (
            <Card>
              <h2 className="text-2xl font-bold text-white mb-6">Litiges en cours</h2>
              <div className="space-y-3">
                {disputes.map((dispute) => (
                  <div key={dispute.id} className="bg-gray-700/30 border border-gray-700 rounded-lg p-4 hover:border-purple-600 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white mb-1">{dispute.issue}</h3>
                        <p className="text-gray-400 text-sm">
                          {dispute.reporter} vs {dispute.defendant} • {dispute.date}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        dispute.status === 'open'
                          ? 'bg-red-600/20 text-red-400'
                          : 'bg-green-600/20 text-green-400'
                      }`}>
                        {dispute.status === 'open' ? 'Ouvert' : 'Résolu'}
                      </span>
                    </div>
                    {dispute.status === 'open' && (
                      <div className="flex gap-2">
                        <Button variant="primary" size="sm">
                          Examiner
                        </Button>
                        <Button variant="secondary" size="sm">
                          Contacter les parties
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Tabs */}
      <section className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-8 h-16">
          {(['overview', 'vendors', 'content', 'disputes'] as const).map((tab) => (
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
              {tab === 'vendors' && 'Vendeurs'}
              {tab === 'content' && 'Contenu'}
              {tab === 'disputes' && 'Litiges'}
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
