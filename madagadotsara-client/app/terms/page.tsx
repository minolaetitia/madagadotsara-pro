import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Card from '@/app/components/Card';

export default function TermsPage() {
  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-800 border-b border-gray-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Conditions d'utilisation</h1>
          <p className="text-gray-400">Dernière mise à jour : Janvier 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <div className="prose prose-invert max-w-none space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptation des conditions</h2>
                <p className="text-gray-300 leading-relaxed">
                  En accédant et en utilisant le site Web Madagadotsara, vous acceptez d'être lié par ces conditions d'utilisation et vous acceptez d'être soumis à la présente politique. Si vous n'acceptez pas de respecter ces conditions d'utilisation, veuillez ne pas utiliser ce service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Comptes utilisateur</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Vous êtes responsable du maintien de la confidentialité de votre compte et de votre mot de passe et de la restriction de l'accès à votre ordinateur ou appareil. Vous acceptez d'être responsable de toutes les activités qui se produisent sous votre compte ou mot de passe.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Les créateurs de contenu conservent tous les droits d'auteur de leurs créations. En vendant un beat, le créateur transfère une licence d'exploitation au buyer, conformément à nos conditions de licence.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Restrictions d'utilisation</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Vous ne devez pas :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Violer les droits d'auteur ou les droits de propriété intellectuelle</li>
                  <li>Distribuer ou partager le contenu avec d'autres sans autorisation</li>
                  <li>Utiliser le contenu à des fins commerciales sans licence</li>
                  <li>Modifier ou dériver le contenu sans permission</li>
                  <li>Utiliser des bots ou des scripts pour accéder à la plateforme</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Paiements et remboursements</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Les paiements sont traités de manière sécurisée. Une fois un beat acheté et téléchargé, aucun remboursement ne peut être demandé sauf en cas d'erreur technique.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation de responsabilité</h2>
                <p className="text-gray-300 leading-relaxed">
                  Madagadotsara ne sera pas responsable des dommages indirects, accidentels ou consécutifs résultant de l'utilisation de ce service, y compris la perte de bénéfices ou de données.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Modifications des conditions</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Votre utilisation continue du service après de telles modifications signifie votre acceptation des termes modifiés.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                  Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à support@madagadotsara.mg
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
