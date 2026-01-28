'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

type TabType = 'overview' | 'admins' | 'settings' | 'finances' | 'logs' | 'users';

interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'suspended';
  lastActive: string;
}

interface SystemLog {
  id: number;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  user: string;
  timestamp: string;
}

interface Transaction {
  id: number;
  type: 'purchase' | 'withdrawal' | 'commission';
  amount: number;
  user: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);

  // Mock data
  const platformStats = [
    { label: 'Revenus totaux', value: '$125,430', change: '+32%', icon: '💰', color: 'green' },
    { label: 'Commissions collectées', value: '$25,086', change: '+28%', icon: '💼', color: 'purple' },
    { label: 'Utilisateurs actifs', value: '2,847', change: '+15%', icon: '👥', color: 'blue' },
    { label: 'Transactions (7j)', value: '342', change: '+12%', icon: '📊', color: 'yellow' },
  ];

  const admins: Admin[] = [
    { id: 1, name: 'Jean Rakoto', email: 'jean@admin.mg', role: 'Admin Principal', status: 'active', lastActive: 'Il y a 2 min' },
    { id: 2, name: 'Marie Ratsimba', email: 'marie@admin.mg', role: 'Modérateur', status: 'active', lastActive: 'Il y a 1h' },
    { id: 3, name: 'Paul Randria', email: 'paul@admin.mg', role: 'Support', status: 'active', lastActive: 'Il y a 3h' },
    { id: 4, name: 'Sophie Rasolofo', email: 'sophie@admin.mg', role: 'Modérateur', status: 'suspended', lastActive: 'Il y a 2 jours' },
  ];

  const systemLogs: SystemLog[] = [
    { id: 1, type: 'success', message: 'Nouveau vendeur validé: Studio Nova', user: 'Jean Rakoto', timestamp: '2024-01-28 14:32' },
    { id: 2, type: 'warning', message: 'Tentative de connexion suspecte détectée', user: 'System', timestamp: '2024-01-28 13:15' },
    { id: 3, type: 'info', message: 'Mise à jour du système effectuée', user: 'System', timestamp: '2024-01-28 12:00' },
    { id: 4, type: 'error', message: 'Échec de paiement pour transaction #3421', user: 'Payment Gateway', timestamp: '2024-01-28 11:45' },
    { id: 5, type: 'success', message: 'Commission configurée: 15%', user: 'Jean Rakoto', timestamp: '2024-01-28 10:30' },
  ];

  const recentTransactions: Transaction[] = [
    { id: 3421, type: 'purchase', amount: 45.00, user: 'User123', date: '2024-01-28', status: 'completed' },
    { id: 3420, type: 'commission', amount: 6.75, user: 'Madagadotsara', date: '2024-01-28', status: 'completed' },
    { id: 3419, type: 'withdrawal', amount: 150.00, user: 'Ramy Beats', date: '2024-01-27', status: 'pending' },
    { id: 3418, type: 'purchase', amount: 35.00, user: 'Producer456', date: '2024-01-27', status: 'completed' },
    { id: 3417, type: 'commission', amount: 5.25, user: 'Madagadotsara', date: '2024-01-27', status: 'completed' },
  ];

  const systemSettings = {
    platformCommission: 15,
    minAudioQualityWav: '44.1kHz / 24 bits',
    minAudioQualityMp3: '320kbps',
    maxFileSize: '500 MB',
    watermarkEnabled: true,
    autoModeration: true,
    maintenanceMode: false,
  };

  const getLogIcon = (type: SystemLog['type']) => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
    }
  };

  const getLogColor = (type: SystemLog['type']) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      case 'info': return 'text-blue-400';
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">👑</span>
            <h1 className="text-4xl font-bold text-white">Super-Admin Dashboard</h1>
          </div>
          <p className="text-gray-300">Administration complète de la plateforme Madagadotsara</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Platform Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {platformStats.map((stat) => (
                  <Card key={stat.label}>
                    <p className="text-3xl mb-2">{stat.icon}</p>
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <p className={`text-${stat.color}-400 text-sm font-semibold`}>{stat.change}</p>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card>
                <h2 className="text-xl font-bold text-white mb-4">Actions rapides</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="primary" onClick={() => setActiveTab('admins')}>
                    👥 Gérer les administrateurs
                  </Button>
                  <Button variant="primary" onClick={() => setActiveTab('settings')}>
                    ⚙️ Paramètres système
                  </Button>
                  <Button variant="primary" onClick={() => setActiveTab('finances')}>
                    💰 Rapports financiers
                  </Button>
                </div>
              </Card>

              {/* System Health & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <h2 className="text-xl font-bold text-white mb-4">Santé du système</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Serveur API</span>
                        <span className="text-green-400 font-semibold">✓ Opérationnel</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-600 w-[98%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Base de données</span>
                        <span className="text-green-400 font-semibold">✓ Opérationnel</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-600 w-[95%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Stockage utilisé</span>
                        <span className="text-yellow-400 font-semibold">67%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-600 w-[67%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Bande passante</span>
                        <span className="text-green-400 font-semibold">42%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 w-[42%]"></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h2 className="text-xl font-bold text-white mb-4">Activité récente</h2>
                  <div className="space-y-3">
                    {systemLogs.slice(0, 5).map((log) => (
                      <div key={log.id} className="flex items-start gap-3 py-2 border-b border-gray-700 last:border-0">
                        <span className="text-2xl">{getLogIcon(log.type)}</span>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${getLogColor(log.type)}`}>{log.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{log.user} • {log.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* Admins Management Tab */}
          {activeTab === 'admins' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Gestion des administrateurs</h2>
                <Button variant="primary" onClick={() => setShowAddAdminModal(true)}>
                  + Ajouter un administrateur
                </Button>
              </div>

              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Nom</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Email</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Rôle</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Statut</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Dernière activité</th>
                        <th className="text-center px-4 py-3 text-gray-400 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admins.map((admin) => (
                        <tr key={admin.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 text-white font-medium">{admin.name}</td>
                          <td className="px-4 py-3 text-gray-400">{admin.email}</td>
                          <td className="px-4 py-3 text-gray-400">{admin.role}</td>
                          <td className="px-4 py-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              admin.status === 'active'
                                ? 'bg-green-600/20 text-green-400'
                                : 'bg-red-600/20 text-red-400'
                            }`}>
                              {admin.status === 'active' ? 'Actif' : 'Suspendu'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-400 text-sm">{admin.lastActive}</td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <Button variant="secondary" size="sm">
                                Modifier
                              </Button>
                              <Button variant="secondary" size="sm">
                                {admin.status === 'active' ? 'Suspendre' : 'Activer'}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Admin Permissions */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Rôles et permissions</h3>
                <div className="space-y-4">
                  <div className="bg-gray-700/30 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">👑 Super-Admin</h4>
                    <p className="text-gray-400 text-sm mb-2">Accès complet à toutes les fonctionnalités</p>
                    <div className="flex flex-wrap gap-2">
                      {['Gestion des admins', 'Paramètres système', 'Finances', 'Logs', 'Tout'].map((perm) => (
                        <span key={perm} className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-700/30 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">🛡️ Admin Principal</h4>
                    <p className="text-gray-400 text-sm mb-2">Gestion des utilisateurs et du contenu</p>
                    <div className="flex flex-wrap gap-2">
                      {['Validation vendeurs', 'Modération contenu', 'Gestion litiges', 'Rapports'].map((perm) => (
                        <span key={perm} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-700/30 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">👮 Modérateur</h4>
                    <p className="text-gray-400 text-sm mb-2">Modération du contenu uniquement</p>
                    <div className="flex flex-wrap gap-2">
                      {['Validation contenu', 'Signalements', 'Messages'].map((perm) => (
                        <span key={perm} className="px-2 py-1 bg-green-600/20 text-green-400 rounded text-xs">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-700/30 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">💬 Support</h4>
                    <p className="text-gray-400 text-sm mb-2">Support utilisateur</p>
                    <div className="flex flex-wrap gap-2">
                      {['Messages', 'Tickets', 'FAQ'].map((perm) => (
                        <span key={perm} className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* System Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Paramètres système</h2>

              {/* Commission Settings */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">💰 Commissions de la plateforme</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Commission standard</p>
                      <p className="text-gray-400 text-sm">Pourcentage prélevé sur chaque vente</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        defaultValue={systemSettings.platformCommission}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg w-24"
                      />
                      <span className="text-white">%</span>
                      <Button variant="primary" size="sm">Modifier</Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Audio Quality Settings */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">🎵 Qualité audio minimale</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <div>
                      <p className="text-white font-medium">Format WAV</p>
                      <p className="text-gray-400 text-sm">Qualité minimale requise pour les fichiers WAV</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-semibold">{systemSettings.minAudioQualityWav}</span>
                      <Button variant="secondary" size="sm">Modifier</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <div>
                      <p className="text-white font-medium">Format MP3</p>
                      <p className="text-gray-400 text-sm">Qualité minimale requise pour les fichiers MP3</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-semibold">{systemSettings.minAudioQualityMp3}</span>
                      <Button variant="secondary" size="sm">Modifier</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-white font-medium">Taille maximale</p>
                      <p className="text-gray-400 text-sm">Taille maximale autorisée par fichier</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-purple-400 font-semibold">{systemSettings.maxFileSize}</span>
                      <Button variant="secondary" size="sm">Modifier</Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Security & Features */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">🔒 Sécurité et fonctionnalités</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <div>
                      <p className="text-white font-medium">Watermark audio</p>
                      <p className="text-gray-400 text-sm">Ajouter un watermark sur les previews audio</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={systemSettings.watermarkEnabled} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <div>
                      <p className="text-white font-medium">Modération automatique</p>
                      <p className="text-gray-400 text-sm">Analyse automatique du contenu uploadé</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={systemSettings.autoModeration} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-white font-medium">Mode maintenance</p>
                      <p className="text-gray-400 text-sm">Désactiver temporairement la plateforme</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={systemSettings.maintenanceMode} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                </div>
              </Card>

              {/* Backup & Export */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">💾 Sauvegarde et export</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="primary">
                    📥 Exporter les données
                  </Button>
                  <Button variant="primary">
                    🔄 Créer une sauvegarde
                  </Button>
                  <Button variant="secondary">
                    📊 Télécharger les rapports
                  </Button>
                  <Button variant="secondary">
                    🗄️ Voir les sauvegardes
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Finances Tab */}
          {activeTab === 'finances' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Rapports financiers</h2>

              {/* Financial Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Revenus ce mois</p>
                  <p className="text-3xl font-bold text-white mb-2">$45,230</p>
                  <p className="text-green-400 text-sm font-semibold">+25% vs mois dernier</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Commissions collectées</p>
                  <p className="text-3xl font-bold text-white mb-2">$6,784</p>
                  <p className="text-green-400 text-sm font-semibold">15% de commission</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Retraits en attente</p>
                  <p className="text-3xl font-bold text-white mb-2">$12,450</p>
                  <p className="text-yellow-400 text-sm font-semibold">7 demandes</p>
                </Card>
              </div>

              {/* Recent Transactions */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Transactions récentes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">ID</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Type</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Montant</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Utilisateur</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Date</th>
                        <th className="text-left px-4 py-3 text-gray-400 font-semibold">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 text-gray-400">#{transaction.id}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              transaction.type === 'purchase' ? 'bg-blue-600/20 text-blue-400' :
                              transaction.type === 'withdrawal' ? 'bg-yellow-600/20 text-yellow-400' :
                              'bg-purple-600/20 text-purple-400'
                            }`}>
                              {transaction.type === 'purchase' ? 'Achat' :
                               transaction.type === 'withdrawal' ? 'Retrait' : 'Commission'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-white font-medium">${transaction.amount.toFixed(2)}</td>
                          <td className="px-4 py-3 text-gray-400">{transaction.user}</td>
                          <td className="px-4 py-3 text-gray-400">{transaction.date}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              transaction.status === 'completed' ? 'bg-green-600/20 text-green-400' :
                              transaction.status === 'pending' ? 'bg-yellow-600/20 text-yellow-400' :
                              'bg-red-600/20 text-red-400'
                            }`}>
                              {transaction.status === 'completed' ? 'Complété' :
                               transaction.status === 'pending' ? 'En attente' : 'Échoué'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Commission Breakdown */}
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Répartition des commissions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-400">Ventes audio</span>
                    <span className="text-white font-semibold">$5,234</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-400">Abonnements premium</span>
                    <span className="text-white font-semibold">$1,120</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-400">Frais de service</span>
                    <span className="text-white font-semibold">$430</span>
                  </div>
                  <div className="flex items-center justify-between py-2 pt-4">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-white font-bold text-xl">$6,784</span>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* System Logs Tab */}
          {activeTab === 'logs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Logs système</h2>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">
                    Filtrer
                  </Button>
                  <Button variant="secondary" size="sm">
                    Exporter
                  </Button>
                </div>
              </div>

              <Card>
                <div className="space-y-3">
                  {systemLogs.map((log) => (
                    <div key={log.id} className="flex items-start gap-3 p-3 bg-gray-700/30 border border-gray-700 rounded-lg hover:border-purple-600 transition-colors">
                      <span className="text-2xl">{getLogIcon(log.type)}</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <p className={`font-medium ${getLogColor(log.type)}`}>{log.message}</p>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            log.type === 'success' ? 'bg-green-600/20 text-green-400' :
                            log.type === 'warning' ? 'bg-yellow-600/20 text-yellow-400' :
                            log.type === 'error' ? 'bg-red-600/20 text-red-400' :
                            'bg-blue-600/20 text-blue-400'
                          }`}>
                            {log.type.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{log.user} • {log.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Log Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Succès</p>
                  <p className="text-3xl font-bold text-green-400">1,234</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Avertissements</p>
                  <p className="text-3xl font-bold text-yellow-400">45</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Erreurs</p>
                  <p className="text-3xl font-bold text-red-400">12</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Informations</p>
                  <p className="text-3xl font-bold text-blue-400">567</p>
                </Card>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Gestion des utilisateurs</h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Rechercher un utilisateur..."
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64"
                  />
                  <Button variant="secondary" size="sm">
                    Rechercher
                  </Button>
                </div>
              </div>

              {/* User Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Utilisateurs totaux</p>
                  <p className="text-3xl font-bold text-white">2,847</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Acheteurs actifs</p>
                  <p className="text-3xl font-bold text-blue-400">1,234</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Vendeurs vérifiés</p>
                  <p className="text-3xl font-bold text-green-400">340</p>
                </Card>
                <Card>
                  <p className="text-gray-400 text-sm mb-2">Comptes suspendus</p>
                  <p className="text-3xl font-bold text-red-400">23</p>
                </Card>
              </div>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Actions en masse</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="secondary">
                    📧 Envoyer un email groupé
                  </Button>
                  <Button variant="secondary">
                    🔔 Notification push
                  </Button>
                  <Button variant="secondary">
                    📊 Exporter la liste
                  </Button>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Filtres avancés</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <option>Type d&apos;utilisateur</option>
                    <option>Acheteur</option>
                    <option>Vendeur</option>
                    <option>Beatmaker</option>
                  </select>
                  <select className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <option>Statut</option>
                    <option>Actif</option>
                    <option>Inactif</option>
                    <option>Suspendu</option>
                  </select>
                  <select className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <option>Date d&apos;inscription</option>
                    <option>Dernière semaine</option>
                    <option>Dernier mois</option>
                    <option>Dernière année</option>
                  </select>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Tabs - Fixed at bottom */}
      <section className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto">
          {[
            { id: 'overview', label: '📊 Aperçu', icon: '📊' },
            { id: 'admins', label: '👥 Administrateurs', icon: '👥' },
            { id: 'settings', label: '⚙️ Paramètres', icon: '⚙️' },
            { id: 'finances', label: '💰 Finances', icon: '💰' },
            { id: 'logs', label: '📝 Logs', icon: '📝' },
            { id: 'users', label: '👤 Utilisateurs', icon: '👤' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`h-16 px-4 border-b-2 transition-colors font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-purple-600 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <Footer />

      {/* Spacer for fixed tabs */}
      <div className="h-16"></div>

      {/* Add Admin Modal */}
      {showAddAdminModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Ajouter un administrateur</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                  placeholder="Ex: Jean Rakoto"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
                  placeholder="email@admin.mg"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Rôle</label>
                <select className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg">
                  <option>Admin Principal</option>
                  <option>Modérateur</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="primary" onClick={() => setShowAddAdminModal(false)}>
                  Ajouter
                </Button>
                <Button variant="secondary" onClick={() => setShowAddAdminModal(false)}>
                  Annuler
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </main>
  );
}
