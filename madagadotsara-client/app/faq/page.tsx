'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Card from '@/app/components/Card';

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Pour les acheteurs',
      items: [
        {
          q: 'Comment puis-je acheter un beat?',
          a: 'Accédez au catalogue, trouvez le beat que vous aimez, cliquez sur "Acheter", confirmez les conditions de licence et procédez au paiement. Vous pourrez ensuite télécharger votre beat.',
        },
        {
          q: 'Qu\'est-ce qu\'une licence exclusive?',
          a: 'Une licence exclusive signifie que vous serez le seul à pouvoir utiliser ce beat. Le créateur le retire de la vente après votre achat.',
        },
        {
          q: 'Puis-je utiliser le beat commercialement?',
          a: 'Oui, nos licences incluent l\'utilisation commerciale. Vous pouvez l\'utiliser dans vos productions musicales commerciales.',
        },
        {
          q: 'Comment puis-je télécharger mon certificat de licence?',
          a: 'Allez à votre dashboard, consultez vos achats, et cliquez sur le bouton "Certificat" pour télécharger votre preuve d\'achat.',
        },
        {
          q: 'Y a-t-il une limite de téléchargements?',
          a: 'Non, vous pouvez télécharger votre beat autant de fois que vous le souhaitez après l\'achat.',
        },
      ],
    },
    {
      category: 'Pour les vendeurs',
      items: [
        {
          q: 'Comment puis-je commencer à vendre des beats?',
          a: 'Inscrivez-vous en tant que vendeur, complétez votre profil de studio, téléchargez vos beats avec leurs métadonnées, et attendez l\'approbation de notre équipe.',
        },
        {
          q: 'Quels formats de fichiers sont acceptés?',
          a: 'Nous acceptons les fichiers WAV, MP3 et FLAC. Pour la meilleure qualité, nous recommandons le WAV 24bit/48kHz.',
        },
        {
          q: 'Quel est le prix minimum/maximum?',
          a: 'Le prix minimum est de $19.99 et il n\'y a pas de limite maximale. Vous fixez le prix que vous jugez approprié pour votre travail.',
        },
        {
          q: 'Quand serai-je payé?',
          a: 'Les paiements sont traités chaque lundi pour les ventes de la semaine précédente. Les fonds sont transférés sur votre compte bancaire.',
        },
        {
          q: 'Quel pourcentage de commission prenez-vous?',
          a: 'Nous prenons 20% de commission sur chaque vente. Vous recevez 80% du montant de la vente.',
        },
        {
          q: 'Comment sont validés mes beats?',
          a: 'Notre équipe d\'experts écoute chaque beat pour vérifier la qualité audio, l\'absence de plagiat, et la conformité avec nos règles. La validation prend généralement 2-3 jours.',
        },
      ],
    },
    {
      category: 'Paiements et revenus',
      items: [
        {
          q: 'Quels modes de paiement acceptez-vous?',
          a: 'Nous acceptons les cartes de crédit (Visa, Mastercard), PayPal, et les virements bancaires pour Madagascar.',
        },
        {
          q: 'Est-ce sûr de payer par carte?',
          a: 'Oui, tous les paiements sont traités par Stripe, un processeur de paiement PCI-DSS certifié offrant un chiffrement SSL 256-bit.',
        },
        {
          q: 'Comment puis-je retirer mes revenus?',
          a: 'Allez à votre dashboard > Paramètres > Informations bancaires. Entrez vos coordonnées bancaires et les paiements seront transférés automatiquement.',
        },
        {
          q: 'Y a-t-il un montant minimum pour retirer?',
          a: 'Oui, le montant minimum à retirer est de $50. Les paiements en dessous de ce montant seront cumulés jusqu\'à atteindre ce seuil.',
        },
      ],
    },
    {
      category: 'Juridique et droits d\'auteur',
      items: [
        {
          q: 'Comment sont protégés mes droits d\'auteur?',
          a: 'Tous les beats sont enregistrés sur notre plateforme avec les métadonnées de l\'auteur. Les acheteurs reçoivent un certificat légal d\'achat.',
        },
        {
          q: 'Que se passe-t-il en cas de plagiat?',
          a: 'Si du plagiat est détecté, le beat est retiré immédiatement et le créateur peut faire face à des sanctions, y compris la suppression de son compte.',
        },
        {
          q: 'Puis-je vendre le même beat plusieurs fois?',
          a: 'Non. Chaque beat est vendu en licence exclusive, ce qui signifie qu\'il ne peut être vendu qu\'une fois.',
        },
      ],
    },
    {
      category: 'Support technique',
      items: [
        {
          q: 'Mon téléchargement a échoué, que faire?',
          a: 'Accédez à votre dashboard, consultez vos achats, et cliquez sur "Retélécharger". Si le problème persiste, contactez notre support.',
        },
        {
          q: 'Je n\'arrive pas à me connecter, comment puis-je réinitialiser mon mot de passe?',
          a: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Vous recevrez un lien de réinitialisation par email.',
        },
        {
          q: 'Comment signaler un problème ou un bug?',
          a: 'Vous pouvez nous contacter directement via support@madagadotsara.mg avec une description détaillée du problème.',
        },
      ],
    },
  ];

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-white">Questions fréquemment posées</h1>
          <p className="text-xl text-gray-300">
            Trouvez les réponses à vos questions sur Madagadotsara
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-white mb-4 pb-4 border-b border-gray-700">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => {
                  const globalIndex = sectionIndex * 100 + itemIndex;
                  const isOpen = openItem === globalIndex;

                  return (
                    <Card
                      key={itemIndex}
                      hoverable
                      className="cursor-pointer p-0"
                      onClick={() => setOpenItem(isOpen ? null : globalIndex)}
                    >
                      <div className="p-6 flex items-start justify-between gap-4">
                        <h3 className="text-white font-semibold text-lg flex-1 text-left">{item.q}</h3>
                        <span className={`text-purple-400 text-2xl font-bold flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </div>
                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-300 border-t border-gray-700 pt-4">
                          {item.a}
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <Card className="bg-purple-600/10 border-purple-600/50 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Vous n'avez pas trouvé votre réponse?</h2>
            <p className="text-gray-300 mb-6">
              Notre équipe de support est disponible 24/7 pour répondre à vos questions. N'hésitez pas à nous contacter.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
            >
              Contactez le support
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
