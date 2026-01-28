'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Button from '@/app/components/Button';
import FormInput from '@/app/components/FormInput';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = 'Email requis';
    if (!password) newErrors.password = 'Mot de passe requis';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would authenticate the user
      console.log('Login attempt:', { email, password });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-white">Connexion</h1>
              <p className="text-gray-400">Accédez à votre compte Madagadotsara</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                label="Email"
                type="email"
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                required
              />

              <FormInput
                label="Mot de passe"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                required
              />

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
                  <input type="checkbox" className="w-4 h-4 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-purple-600 cursor-pointer" />
                  Se souvenir de moi
                </label>
                <Link href="/auth/forgot-password" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Mot de passe oublié?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Connexion en cours...' : 'Se connecter'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">Ou</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="secondary" size="md" className="w-full gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.555.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.268.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.193 20 14.433 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </Button>
              <Button variant="secondary" size="md" className="w-full gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15.545 6.558a9.42 9.42 0 01.139 1.626c0 2.889-2.868 5.303-6.364 5.303-1.025 0-2.01-.171-2.945-.505 1.024 1.279 2.555 2.134 4.304 2.134 3.496 0 6.365-2.414 6.365-5.303 0-.583-.054-1.15-.16-1.702a.6.6 0 00-.557-.478l-.023-.002a.6.6 0 00-.577.466l-.001.015z" />
                </svg>
                Google
              </Button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-400">
              Pas encore inscrit?{' '}
              <Link href="/auth/signup" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
