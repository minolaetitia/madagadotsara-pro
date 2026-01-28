'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import FormInput from '@/app/components/FormInput';

export default function BeatmakerDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'uploads' | 'analytics' | 'revenue' | 'settings'>('overview');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    genre: '',
    bpm: '',
    key: '',
    price: '',
    license: 'exclusive',
    description: '',
    tags: '',
    usage: [] as string[],
  });

  // Mock data - Compte beatmaker@gdtsara.mg
  const beatmakerInfo = {
    name: 'Mada Beats',
    email: 'beatmaker@gdtsara.mg',
    studio: 'Mada Beats Studio',
    memberSince: 'Janvier 2026',
    verified: true,
  };

  const stats = [
    { label: 'Revenus totaux', value: '4 850 000 Ar', change: '+18%', icon: '💰' },
    { label: 'Beats publiés', value: '32', change: '+5', icon: '🎵' },
    { label: 'Ventes totales', value: '127', change: '+23', icon: '📊' },
    { label: 'Note moyenne', value: '4.9/5', change: '+0.3', icon: '⭐' },
  ];

  const myBeats = [
    {
      id: 1,
      title: 'Salegy Trap Fusion',
      genre: 'Trap/Salegy',
      bpm: 140,
      key: 'C# Minor',
      status: 'published',
      price: 150000,
      sales: 15,
      revenue: 2250000,
      date: '2026-01-20',
      plays: 543,
      favorites: 89,
      license: 'Exclusive',
    },
    {
      id: 2,
      title: 'Afrobeat Malgache',
      genre: 'Afrobeat',
      bpm: 128,
      key: 'F Major',
      status: 'published',
      price: 120000,
      sales: 23,
      revenue: 2760000,
      date: '2026-01-15',
      plays: 892,
      favorites: 156,
      license: 'Exclusive',
    },
    {
      id: 3,
      title: 'Madagascar Dreams',
      genre: 'Ambient/Chill',
      bpm: 90,
      key: 'G Major',
      status: 'published',
      price: 100000,
      sales: 8,
      revenue: 800000,
      date: '2026-01-10',
      plays: 234,
      favorites: 45,
      license: 'Exclusive',
    },
    {
      id: 4,
      title: 'Urban Tana Vibes',
      genre: 'Hip-Hop',
      bpm: 95,
      key: 'A Minor',
      status: 'pending',
      price: 130000,
      sales: 0,
      revenue: 0,
      date: '2026-01-25',
      plays: 12,
      favorites: 3,
      license: 'Exclusive',
    },
  ];

  const recentSales = [
    { 
      id: 1, 
      beatTitle: 'Afrobeat Malgache', 
      buyer: 'Rija Music', 
      amount: 120000, 
      commission: 12000,
      net: 108000,
      date: '2026-01-27 14:30',
      license: 'Exclusive'
    },
    { 
      id: 2, 
      beatTitle: 'Salegy Trap Fusion', 
      buyer: 'Lova Studio', 
      amount: 150000, 
      commission: 15000,
      net: 135000,
      date: '2026-01-27 10:15',
      license: 'Exclusive'
    },
    { 
      id: 3, 
      beatTitle: 'Madagascar Dreams', 
      buyer: 'Tiana Records', 
      amount: 100000, 
      commission: 10000,
      net: 90000,
      date: '2026-01-26 16:45',
      license: 'Exclusive'
    },
  ];

  const recentActivity = [
    { id: 1, type: 'sale', message: 'Vente de "Afrobeat Malgache"', amount: '120 000 Ar', time: 'Il y a 2 heures' },
    { id: 2, type: 'favorite', message: '15 nouveaux favoris sur "Salegy Trap Fusion"', amount: '', time: 'Il y a 4 heures' },
    { id: 3, type: 'review', message: 'Nouvel avis 5 étoiles sur "Madagascar Dreams"', amount: '', time: 'Il y a 6 heures' },
    { id: 4, type: 'sale', message: 'Vente de "Salegy Trap Fusion"', amount: '150 000 Ar', time: 'Il y a 1 jour' },
    { id: 5, type: 'validation', message: '"Urban Tana Vibes" en cours de validation', amount: '', time: 'Il y a 1 jour' },
  ];

  const genres = ['Hip-Hop', 'Trap', 'Afrobeat', 'RnB', 'Pop', 'Electronic', 'Salegy', 'Ambient', 'Drill', 'Reggae'];
  const keys = ['C Major', 'C Minor', 'D Major', 'D Minor', 'E Major', 'E Minor', 'F Major', 'F Minor', 'G Major', 'G Minor', 'A Major', 'A Minor', 'B Major', 'B Minor'];
  const usageOptions = ['Commercial', 'Streaming', 'Cinéma', 'Publicité', 'YouTube', 'Radio'];

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Upload beat:', uploadForm);
    // Logique d'upload ici
    setShowUploadModal(false);
  };

  const handleUsageToggle = (usage: string) => {
    setUploadForm(prev => ({
      ...prev,
      usage: prev.usage.includes(usage) 
        ? prev.usage.filter(u => u !== usage)
        : [...prev.usage, usage]
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-MG', { 
      style: 'currency', 
      currency: 'MGA',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-3xl">
                🎧
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-4xl font-bold text-white">Dashboard Beatmaker</h1>
                  {beatmakerInfo.verified && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">✓ Vérifié</span>
                  )}
                </div>
                <p className="text-gray-300">Bienvenue, {beatmakerInfo.name}</p>
                <p className="text-gray-400 text-sm">{beatmakerInfo.email}</p>
              </div>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowUploadModal(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              + Uploader un Beat
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-gray-800 border-b border-gray-700 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex gap-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
              { id: 'uploads', label: 'Mes Beats', icon: '🎵' },
              { id: 'analytics', label: 'Statistiques', icon: '📈' },
              { id: 'revenue', label: 'Revenus', icon: '💰' },
              { id: 'settings', label: 'Paramètres', icon: '⚙️' },
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
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-green-400 text-sm font-semibold">
                      {stat.change.startsWith('+') ? '↗' : '↘'} {stat.change}
                    </p>
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
                            {activity.type === 'favorite' && <span>❤️</span>}
                            {activity.type === 'validation' && <span>⏳</span>}
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

                {/* Studio Info */}
                <Card className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30">
                  <h3 className="text-lg font-bold text-white mb-4">Informations Studio</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm">Nom du studio</p>
                      <p className="text-white font-semibold">{beatmakerInfo.studio}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Genre principal</p>
                      <p className="text-white font-semibold">Hip-Hop / Trap</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Membre depuis</p>
                      <p className="text-white font-semibold">{beatmakerInfo.memberSince}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Total écoutes</p>
                      <p className="text-white font-semibold">1,681 plays</p>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <Button variant="secondary" size="md" className="w-full mb-2">
                        Éditer le profil
                      </Button>
                      <Button variant="outline" size="md" className="w-full">
                        Voir profil public
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Sales */}
              <Card>
                <h2 className="text-xl font-bold text-white mb-4">Ventes récentes</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Beat</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Acheteur</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Montant</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Commission (10%)</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Net</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentSales.map((sale) => (
                        <tr key={sale.id} className="border-b border-gray-800">
                          <td className="py-3 px-4">
                            <p className="text-white font-medium">{sale.beatTitle}</p>
                            <p className="text-gray-400 text-sm">{sale.license}</p>
                          </td>
                          <td className="py-3 px-4 text-gray-300">{sale.buyer}</td>
                          <td className="py-3 px-4 text-white font-medium">{formatCurrency(sale.amount)}</td>
                          <td className="py-3 px-4 text-red-400">-{formatCurrency(sale.commission)}</td>
                          <td className="py-3 px-4 text-green-400 font-semibold">{formatCurrency(sale.net)}</td>
                          <td className="py-3 px-4 text-gray-400 text-sm">{sale.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </>
          )}

          {/* Uploads Tab - Mes Beats */}
          {activeTab === 'uploads' && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Mes Beats</h2>
                <div className="flex gap-3">
                  <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700">
                    <option>Tous les statuts</option>
                    <option>Publié</option>
                    <option>En attente</option>
                    <option>Rejeté</option>
                  </select>
                  <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700">
                    <option>Tous les genres</option>
                    {genres.map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {myBeats.map((beat) => (
                  <Card key={beat.id} className="hover:border-purple-600 transition-colors">
                    <div className="flex items-center gap-6">
                      {/* Beat Cover */}
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                        🎵
                      </div>

                      {/* Beat Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{beat.title}</h3>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                              <span>{beat.genre}</span>
                              <span>•</span>
                              <span>{beat.bpm} BPM</span>
                              <span>•</span>
                              <span>{beat.key}</span>
                              <span>•</span>
                              <span>{beat.license}</span>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            beat.status === 'published' ? 'bg-green-500/20 text-green-400' :
                            beat.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {beat.status === 'published' ? '✓ Publié' :
                             beat.status === 'pending' ? '⏳ En attente' :
                             '✗ Rejeté'}
                          </span>
                        </div>

                        <div className="grid grid-cols-5 gap-4 mt-4">
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Prix</p>
                            <p className="text-white font-semibold">{formatCurrency(beat.price)}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Ventes</p>
                            <p className="text-white font-semibold">{beat.sales}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Revenus</p>
                            <p className="text-green-400 font-semibold">{formatCurrency(beat.revenue)}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Écoutes</p>
                            <p className="text-white font-semibold">{beat.plays}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs mb-1">Favoris</p>
                            <p className="text-white font-semibold">{beat.favorites} ❤️</p>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">
                          ▶ Écouter
                        </Button>
                        <Button variant="secondary" size="sm">
                          ✏️ Modifier
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-400 border-red-400 hover:bg-red-500/10">
                          🗑️ Retirer
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Statistiques détaillées</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Ventes par mois */}
                <Card>
                  <h3 className="text-lg font-bold text-white mb-4">Ventes par mois</h3>
                  <div className="space-y-3">
                    {[
                      { month: 'Janvier 2026', sales: 23, revenue: 2890000 },
                      { month: 'Décembre 2025', sales: 31, revenue: 3850000 },
                      { month: 'Novembre 2025', sales: 18, revenue: 2340000 },
                      { month: 'Octobre 2025', sales: 25, revenue: 3120000 },
                    ].map((item) => (
                      <div key={item.month} className="flex items-center justify-between py-3 border-b border-gray-800">
                        <div>
                          <p className="text-white font-medium">{item.month}</p>
                          <p className="text-gray-400 text-sm">{item.sales} ventes</p>
                        </div>
                        <p className="text-green-400 font-semibold">{formatCurrency(item.revenue)}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Beats les plus populaires */}
                <Card>
                  <h3 className="text-lg font-bold text-white mb-4">Beats les plus populaires</h3>
                  <div className="space-y-3">
                    {myBeats.slice(0, 4).sort((a, b) => b.plays - a.plays).map((beat, index) => (
                      <div key={beat.id} className="flex items-center gap-3 py-2">
                        <span className="text-2xl font-bold text-purple-500">#{index + 1}</span>
                        <div className="flex-1">
                          <p className="text-white font-medium">{beat.title}</p>
                          <p className="text-gray-400 text-sm">{beat.plays} écoutes • {beat.sales} ventes</p>
                        </div>
                        <span className="text-green-400 font-semibold">{formatCurrency(beat.revenue)}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Genres les plus vendus */}
                <Card>
                  <h3 className="text-lg font-bold text-white mb-4">Genres les plus vendus</h3>
                  <div className="space-y-3">
                    {[
                      { genre: 'Afrobeat', sales: 23, percentage: 40 },
                      { genre: 'Hip-Hop', sales: 18, percentage: 32 },
                      { genre: 'Trap/Salegy', sales: 15, percentage: 26 },
                      { genre: 'Ambient', sales: 8, percentage: 14 },
                    ].map((item) => (
                      <div key={item.genre}>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-white font-medium">{item.genre}</p>
                          <p className="text-gray-400 text-sm">{item.sales} ventes ({item.percentage}%)</p>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Performances */}
                <Card>
                  <h3 className="text-lg font-bold text-white mb-4">Performances</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Taux de conversion</span>
                      <span className="text-white font-semibold">12.4%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Prix moyen</span>
                      <span className="text-white font-semibold">{formatCurrency(125000)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Temps moyen avant vente</span>
                      <span className="text-white font-semibold">5.2 jours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Taux de satisfaction</span>
                      <span className="text-green-400 font-semibold">98%</span>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* Revenue Tab */}
          {activeTab === 'revenue' && (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Gestion des revenus</h2>

              {/* Revenue Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30">
                  <p className="text-gray-400 text-sm mb-2">Solde disponible</p>
                  <p className="text-4xl font-bold text-white mb-2">{formatCurrency(4365000)}</p>
                  <Button variant="primary" size="md" className="mt-4 w-full bg-green-600 hover:bg-green-700">
                    Retirer les fonds
                  </Button>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">En cours de traitement</p>
                  <p className="text-3xl font-bold text-yellow-400 mb-2">{formatCurrency(485000)}</p>
                  <p className="text-gray-400 text-sm">Disponible le 05 Fév 2026</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Total retiré</p>
                  <p className="text-3xl font-bold text-white mb-2">{formatCurrency(12500000)}</p>
                  <p className="text-gray-400 text-sm">Depuis Janvier 2026</p>
                </Card>
              </div>

              {/* Historique des retraits */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Historique des retraits</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Montant</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Méthode</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Statut</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-semibold">Transaction ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: '2026-01-20', amount: 3500000, method: 'Mobile Money (MVola)', status: 'completed', id: 'WD-20260120-001' },
                        { date: '2026-01-10', amount: 4200000, method: 'Mobile Money (Airtel Money)', status: 'completed', id: 'WD-20260110-001' },
                        { date: '2025-12-28', amount: 4800000, method: 'Virement bancaire (BNI)', status: 'completed', id: 'WD-20251228-001' },
                      ].map((withdrawal) => (
                        <tr key={withdrawal.id} className="border-b border-gray-800">
                          <td className="py-3 px-4 text-gray-300">{withdrawal.date}</td>
                          <td className="py-3 px-4 text-white font-semibold">{formatCurrency(withdrawal.amount)}</td>
                          <td className="py-3 px-4 text-gray-300">{withdrawal.method}</td>
                          <td className="py-3 px-4">
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                              ✓ Complété
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-400 text-sm font-mono">{withdrawal.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Informations de paiement */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Méthodes de paiement</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                        📱
                      </div>
                      <div>
                        <p className="text-white font-semibold">Mobile Money - MVola</p>
                        <p className="text-gray-400 text-sm">+261 34 ** *** 89</p>
                      </div>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                      Par défaut
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        📱
                      </div>
                      <div>
                        <p className="text-white font-semibold">Mobile Money - Airtel Money</p>
                        <p className="text-gray-400 text-sm">+261 33 ** *** 45</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Modifier</Button>
                  </div>
                  <Button variant="secondary" size="md" className="w-full">
                    + Ajouter une méthode de paiement
                  </Button>
                </div>
              </Card>
            </>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <>
              <h2 className="text-2xl font-bold text-white mb-6">Paramètres</h2>

              <div className="grid grid-cols-1 gap-6">
                {/* Informations du profil */}
                <Card>
                  <h3 className="text-xl font-bold text-white mb-4">Informations du profil</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="Nom du studio"
                      type="text"
                      defaultValue={beatmakerInfo.studio}
                    />
                    <FormInput
                      label="Email"
                      type="email"
                      defaultValue={beatmakerInfo.email}
                      disabled
                    />
                    <FormInput
                      label="Nom d'artiste"
                      type="text"
                      defaultValue={beatmakerInfo.name}
                    />
                    <FormInput
                      label="Téléphone"
                      type="tel"
                      placeholder="+261 34 00 000 00"
                    />
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Bio / Description
                      </label>
                      <textarea
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600"
                        rows={4}
                        placeholder="Parlez de votre style, votre expérience..."
                        defaultValue="Beatmaker malgache spécialisé dans l'Afrobeat, le Hip-Hop et la fusion Salegy. Créateur de sons uniques qui mélangent modernité et tradition."
                      />
                    </div>
                  </div>
                  <Button variant="primary" size="md" className="mt-4">
                    Sauvegarder les modifications
                  </Button>
                </Card>

                {/* Paramètres de vente */}
                <Card>
                  <h3 className="text-xl font-bold text-white mb-4">Paramètres de vente</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Prix par défaut
                      </label>
                      <FormInput
                        type="number"
                        placeholder="120000"
                        defaultValue="120000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Type de licence par défaut
                      </label>
                      <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600">
                        <option>Exclusive</option>
                        <option>Non-exclusive</option>
                        <option>Premium</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Activation automatique</p>
                        <p className="text-gray-400 text-sm">Publier automatiquement après validation</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5" defaultChecked />
                    </div>
                  </div>
                </Card>

                {/* Notifications */}
                <Card>
                  <h3 className="text-xl font-bold text-white mb-4">Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Nouvelle vente', description: 'Être notifié lors d\'une vente', checked: true },
                      { label: 'Nouveaux avis', description: 'Recevoir les avis des acheteurs', checked: true },
                      { label: 'Favoris', description: 'Être notifié quand un beat est ajouté aux favoris', checked: false },
                      { label: 'Newsletter', description: 'Recevoir les nouveautés de la plateforme', checked: true },
                    ].map((notif) => (
                      <div key={notif.label} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{notif.label}</p>
                          <p className="text-gray-400 text-sm">{notif.description}</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5" defaultChecked={notif.checked} />
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Sécurité */}
                <Card>
                  <h3 className="text-xl font-bold text-white mb-4">Sécurité</h3>
                  <div className="space-y-4">
                    <Button variant="secondary" size="md" className="w-full">
                      Changer le mot de passe
                    </Button>
                    <Button variant="outline" size="md" className="w-full">
                      Activer l'authentification à deux facteurs
                    </Button>
                    <Button variant="outline" size="md" className="w-full text-red-400 border-red-400 hover:bg-red-500/10">
                      Supprimer le compte
                    </Button>
                  </div>
                </Card>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Uploader un Beat</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="p-6 space-y-6">
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Fichier audio *
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-600 transition-colors cursor-pointer">
                  <div className="text-4xl mb-2">🎵</div>
                  <p className="text-white font-medium mb-1">Glissez votre fichier ici</p>
                  <p className="text-gray-400 text-sm mb-3">ou cliquez pour parcourir</p>
                  <p className="text-gray-500 text-xs">WAV (44.1kHz/24bit min) ou MP3 (320kbps min)</p>
                  <Button variant="secondary" size="md" className="mt-4">
                    Choisir un fichier
                  </Button>
                </div>
              </div>

              {/* Beat Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Titre du beat *"
                  type="text"
                  placeholder="Ex: Afrobeat Malgache"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({...uploadForm, title: e.target.value})}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Genre *
                  </label>
                  <select
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600"
                    value={uploadForm.genre}
                    onChange={(e) => setUploadForm({...uploadForm, genre: e.target.value})}
                    required
                  >
                    <option value="">Sélectionner un genre</option>
                    {genres.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <FormInput
                  label="BPM *"
                  type="number"
                  placeholder="Ex: 128"
                  value={uploadForm.bpm}
                  onChange={(e) => setUploadForm({...uploadForm, bpm: e.target.value})}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Tonalité *
                  </label>
                  <select
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600"
                    value={uploadForm.key}
                    onChange={(e) => setUploadForm({...uploadForm, key: e.target.value})}
                    required
                  >
                    <option value="">Sélectionner une tonalité</option>
                    {keys.map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
                <FormInput
                  label="Prix (Ar) *"
                  type="number"
                  placeholder="Ex: 120000"
                  value={uploadForm.price}
                  onChange={(e) => setUploadForm({...uploadForm, price: e.target.value})}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Type de licence *
                  </label>
                  <select
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600"
                    value={uploadForm.license}
                    onChange={(e) => setUploadForm({...uploadForm, license: e.target.value})}
                    required
                  >
                    <option value="exclusive">Exclusive</option>
                    <option value="non-exclusive">Non-exclusive</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600"
                  rows={4}
                  placeholder="Décrivez l'ambiance, les instruments utilisés, l'utilisation recommandée..."
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm({...uploadForm, description: e.target.value})}
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Tags (séparés par des virgules)
                </label>
                <FormInput
                  type="text"
                  placeholder="Ex: afrobeat, energetic, party, tropical"
                  value={uploadForm.tags}
                  onChange={(e) => setUploadForm({...uploadForm, tags: e.target.value})}
                />
              </div>

              {/* Usages autorisés */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-3">
                  Usages autorisés *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {usageOptions.map((usage) => (
                    <button
                      key={usage}
                      type="button"
                      onClick={() => handleUsageToggle(usage)}
                      className={`px-4 py-3 rounded-lg border-2 transition-colors ${
                        uploadForm.usage.includes(usage)
                          ? 'bg-purple-600 border-purple-600 text-white'
                          : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-purple-600'
                      }`}
                    >
                      {usage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 p-4 bg-gray-900 rounded-lg">
                <input type="checkbox" className="mt-1 w-5 h-5" required />
                <p className="text-sm text-gray-400">
                  Je certifie être l'unique propriétaire de ce beat et ne pas avoir utilisé de samples non licenciés. 
                  J'accepte les <Link href="/terms" className="text-purple-400 hover:underline">conditions d'utilisation</Link> de Madagadotsara.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setShowUploadModal(false)}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  Uploader le beat
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
