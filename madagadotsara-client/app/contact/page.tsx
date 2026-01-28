'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import FormInput from '@/app/components/FormInput';
import Card from '@/app/components/Card';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactOptions = [
    { icon: '📧', title: 'Email', description: 'support@madagadotsara.mg', link: 'mailto:support@madagadotsara.mg' },
    { icon: '📞', title: 'Téléphone', description: '+261 (0) 34 XX XX XX', link: 'tel:+261' },
    { icon: '💬', title: 'Chat', description: 'Disponible 24/7', link: '#' },
    { icon: '📍', title: 'Adresse', description: 'Antananarivo, Madagascar', link: '#' },
  ];

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-white">Nous contacter</h1>
          <p className="text-xl text-gray-300">
            Nous sommes là pour répondre à vos questions et vous aider
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                href={option.link}
                className="group"
              >
                <Card hoverable className="text-center cursor-pointer h-full">
                  <p className="text-5xl mb-4 group-hover:scale-110 transition-transform">{option.icon}</p>
                  <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-400">{option.description}</p>
                </Card>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>

                {submitted && (
                  <div className="bg-green-600/20 border border-green-600/50 rounded-lg px-4 py-3 mb-6 text-green-300">
                    ✓ Merci! Votre message a été envoyé avec succès. Nous vous répondrons très bientôt.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="Nom"
                      placeholder="Votre nom"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      label="Email"
                      type="email"
                      placeholder="vous@exemple.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <FormInput
                    label="Sujet"
                    placeholder="Quelle est votre demande?"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Message"
                    textarea
                    rows={6}
                    placeholder="Votre message..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <Button variant="primary" size="lg" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* FAQ Sidebar */}
            <div>
              <Card>
                <h3 className="text-xl font-bold text-white mb-4">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-white mb-1">Comment retirer mes fonds?</p>
                    <p className="text-gray-400 text-sm">Les retraits sont traités chaque lundi via virement bancaire.</p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white mb-1">Quel est le prix minimum?</p>
                    <p className="text-gray-400 text-sm">Le prix minimum d'un beat est de $19.99.</p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white mb-1">Comment signaler un contenu?</p>
                    <p className="text-gray-400 text-sm">Utilisez le bouton "Signaler" sur la page du produit.</p>
                  </div>
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
