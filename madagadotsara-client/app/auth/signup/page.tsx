'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import FormInput from '@/app/components/FormInput';
import Card from '@/app/components/Card';

export default function SignupPage() {
  const searchParams = useSearchParams();
  const userType = (searchParams.get('type') || 'buyer') as 'buyer' | 'seller';
  const [selectedType, setSelectedType] = useState<'buyer' | 'seller'>(userType);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    studioName: '',
    genre: '',
    bio: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'Nom complet requis';
    if (!formData.email) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';

    if (selectedType === 'seller') {
      if (!formData.studioName) newErrors.studioName = 'Nom du studio requis';
      if (!formData.genre) newErrors.genre = 'Genre principal requis';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Signup attempt:', { selectedType, ...formData });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: User Type Selection */}
          {selectedType === null ? (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">Créer un compte</h1>
                <p className="text-gray-400 text-lg">Choisissez votre profil pour commencer</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Buyer Option */}
                <Card
                  hoverable
                  className="cursor-pointer p-8 text-center flex flex-col items-center gap-4"
                  onClick={() => setSelectedType('buyer')}
                >
                  <div className="text-6xl">🎧</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Je suis acheteur</h3>
                    <p className="text-gray-400 text-sm">Je cherche des beats et des sons de qualité</p>
                  </div>
                  <Button variant="outline" size="md" className="w-full mt-4">
                    Continuer
                  </Button>
                </Card>

                {/* Seller Option */}
                <Card
                  hoverable
                  className="cursor-pointer p-8 text-center flex flex-col items-center gap-4"
                  onClick={() => setSelectedType('seller')}
                >
                  <div className="text-6xl">🎵</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Je suis beatmaker</h3>
                    <p className="text-gray-400 text-sm">Je veux vendre mes créations sonores</p>
                  </div>
                  <Button variant="outline" size="md" className="w-full mt-4">
                    Continuer
                  </Button>
                </Card>
              </div>
            </div>
          ) : (
            <>
              {/* Form Header */}
              <div className="text-center space-y-4 mb-8">
                <button
                  onClick={() => setSelectedType(null as any)}
                  className="text-purple-400 hover:text-purple-300 flex items-center gap-1 mx-auto"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Retour
                </button>
                <h1 className="text-3xl font-bold text-white">
                  {selectedType === 'buyer' ? 'Créer mon compte acheteur' : 'Créer mon compte beatmaker'}
                </h1>
                <p className="text-gray-400">Inscrivez-vous en quelques étapes</p>
              </div>

              {/* Form Card */}
              <Card>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Common Fields */}
                  <FormInput
                    label="Nom complet"
                    type="text"
                    placeholder="Jean Dupont"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    required
                  />

                  <FormInput
                    label="Email"
                    type="email"
                    placeholder="vous@exemple.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />

                  <FormInput
                    label="Mot de passe"
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    required
                  />

                  <FormInput
                    label="Confirmer le mot de passe"
                    type="password"
                    placeholder="••••••••"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    required
                  />

                  {/* Seller Specific Fields */}
                  {selectedType === 'seller' && (
                    <>
                      <FormInput
                        label="Nom du studio"
                        type="text"
                        placeholder="Ramy Beats Studio"
                        name="studioName"
                        value={formData.studioName}
                        onChange={handleChange}
                        error={errors.studioName}
                        required
                      />

                      <FormInput
                        label="Genre principal"
                        type="text"
                        placeholder="Hip-Hop"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        error={errors.genre}
                        required
                      />

                      <FormInput
                        label="Bio / Présentation (optionnel)"
                        type="text"
                        placeholder="Parlez un peu de vous..."
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        textarea
                        rows={4}
                      />
                    </>
                  )}

                  {/* Terms & Conditions */}
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 mt-1 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-600" required />
                    <span className="text-gray-400 text-sm">
                      J'accepte les{' '}
                      <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                        conditions d'utilisation
                      </Link>
                      {' '}et la{' '}
                      <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Création du compte...' : 'Créer mon compte'}
                  </Button>
                </form>

                {/* Login Link */}
                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                  <p className="text-gray-400">
                    Vous avez déjà un compte?{' '}
                    <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                      Se connecter
                    </Link>
                  </p>
                </div>
              </Card>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
