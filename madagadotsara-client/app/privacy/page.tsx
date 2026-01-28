import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Card from '@/app/components/Card';

export default function PrivacyPage() {
  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Politique de confidentialité</h1>
          <p className="text-gray-400">Dernière mise à jour : Janvier 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <div className="prose prose-invert max-w-none space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  Madagadotsara ("nous", "notre", "nos") exploite le site Web Madagadotsara. Cette page vous informe de nos politiques concernant la collecte, l'utilisation et la divulgation des données personnelles lorsque vous utilisez notre Service et les options dont vous disposez concernant ces données.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Collecte et utilisation des données</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nous collectons plusieurs types de données à des fins différentes pour fournir et améliorer notre Service :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Données d'identification (nom, email, numéro de téléphone)</li>
                  <li>Données de paiement (informations bancaires, historique des transactions)</li>
                  <li>Données de profil (photo, bio, préférences musicales)</li>
                  <li>Données d'utilisation (pages visitées, temps passé, téléchargements)</li>
                  <li>Données de localisation (pays, région)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Sécurité des données</h2>
                <p className="text-gray-300 leading-relaxed">
                  La sécurité de vos données est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est 100% sécurisée. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons pas garantir sa sécurité absolue.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Droits des utilisateurs</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Vous avez le droit de :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Accéder à vos données personnelles</li>
                  <li>Corriger les données inexactes</li>
                  <li>Demander la suppression de vos données</li>
                  <li>Vous opposer à certains traitements</li>
                  <li>Retirer votre consentement à tout moment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience et analyser l'utilisation de notre service. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à support@madagadotsara.mg
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
