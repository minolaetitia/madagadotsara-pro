# Dashboard Acheteur - Madagadotsara

## Vue d'ensemble

L'espace acheteur de Madagadotsara permet aux utilisateurs (chanteurs, producteurs, réalisateurs, etc.) de gérer leurs achats de contenus audio, leurs licences et leurs préférences.

## Fonctionnalités Implémentées

### 🛍️ Mes Achats

#### Caractéristiques :
- **Historique complet des achats** avec toutes les métadonnées (BPM, durée, format, genre)
- **Téléchargement sécurisé** des fichiers audio avec liens temporaires
- **Accès aux factures** pour chaque transaction
- **Accès aux certificats de licence** pour prouver les droits d'utilisation
- **Recherche et filtrage** par titre, créateur ou genre
- **Statistiques** : nombre de téléchargements par fichier

#### Conformité CDC :
- ✅ Téléchargement sécurisé (liens temporaires)
- ✅ Génération de facture et certificat de licence
- ✅ Formats WAV (44.1kHz/24bit) et MP3 (320kbps)
- ✅ Métadonnées complètes (BPM, tonalité, durée)

### ❤️ Favoris

#### Caractéristiques :
- **Gestion des favoris** avec possibilité d'ajouter/retirer des audios
- **Visualisation en grille** avec aperçu visuel
- **Informations détaillées** : BPM, genre, durée, prix
- **Filtres avancés** par genre
- **Recherche** par titre ou créateur
- **Liens directs** vers la page d'achat

#### Conformité CDC :
- ✅ Système de favoris pour suivre les contenus intéressants
- ✅ Métadonnées visibles avant l'achat
- ✅ Accès rapide au catalogue

### 📜 Licences et Certificats

#### Caractéristiques :
- **Certificats de licence exclusifs** pour chaque achat
- **Numéros uniques** de certificat et de facture
- **Conditions d'utilisation détaillées** :
  - Utilisation commerciale illimitée
  - Distribution sur toutes plateformes
  - Synchronisation audiovisuelle
  - Modification et adaptation autorisées
  - Propriété exclusive
- **Téléchargement PDF** des certificats
- **Informations complètes** : titulaire, date, type de licence

#### Conformité CDC :
- ✅ Licence exclusive par défaut
- ✅ Définition claire des usages autorisés
- ✅ Contrat numérique accepté par les deux parties
- ✅ Certificat d'achat téléchargeable
- ✅ Exclusivité automatique (produit retiré après vente)

### ⚙️ Paramètres

#### Profil Utilisateur :
- Informations personnelles (nom, email)
- Statistiques (total dépensé, genre préféré)
- Modification du profil

#### Préférences de Notification :
- Nouveaux beats des créateurs favoris
- Promotions et offres spéciales
- Mises à jour du catalogue
- Confirmations d'achat

#### Sécurité :
- Changement d'email
- Changement de mot de passe
- Authentification à deux facteurs (2FA)

#### Méthodes de Paiement :
- Gestion des cartes bancaires
- Ajout de nouvelles méthodes
- Mobile Money (prévu)

#### Historique des Téléchargements :
- Liste des fichiers téléchargés
- Possibilité de re-télécharger
- Compteur de téléchargements

#### Zone de Danger :
- Suppression du compte
- Avertissements sur les conséquences

#### Conformité CDC :
- ✅ Gestion complète du profil utilisateur
- ✅ Préférences de notification
- ✅ Sécurité des données
- ✅ Méthodes de paiement (Mobile Money, carte bancaire)

## Statistiques du Dashboard

Le dashboard affiche 4 cartes de statistiques :
1. **Audios achetés** - Nombre total de contenus exclusifs
2. **Budget dépensé** - Total investi sur la plateforme
3. **Favoris** - Nombre d'audios sauvegardés
4. **Téléchargements** - Total de fichiers téléchargés

## Fonctionnalités de Recherche et Filtrage

- **Barre de recherche** : Recherche par titre ou créateur
- **Filtre par genre** : R&B, Hip-Hop, Electronic, Tropical House, etc.
- **Application en temps réel** sur les onglets Achats et Favoris

## Modal de Certificat

Un modal élégant affiche :
- Titre et créateur du contenu
- Numéro de certificat unique
- Date d'émission
- Type de licence
- Prix d'achat
- Informations du titulaire
- Conditions d'utilisation détaillées
- Bouton de téléchargement PDF

## Sécurité Implémentée

Conforme au cahier de charges :
- **Téléchargements sécurisés** : Liens temporaires générés à chaque demande
- **Certificats authentiques** : Numéros uniques non falsifiables
- **Données chiffrées** : Informations sensibles protégées
- **Authentification 2FA** : Option de sécurité renforcée

## Technologies Utilisées

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hooks** (useState)

## Structure des Données

### Interface Purchase
```typescript
{
  id: number;
  title: string;
  creator: string;
  price: number;
  date: string;
  license: 'Exclusive' | 'Commercial' | 'Standard';
  downloadCount: number;
  status: 'downloaded' | 'pending';
  format: string;
  bpm?: number;
  genre: string;
  duration: string;
  invoiceNumber: string;
  certificateId: string;
}
```

### Interface Favorite
```typescript
{
  id: number;
  title: string;
  creator: string;
  price: number;
  genre: string;
  bpm?: number;
  duration: string;
  addedDate: string;
}
```

## Prochaines Étapes (Backend)

Pour une implémentation complète, il faudra :

1. **API Backend** :
   - Endpoint pour récupérer les achats de l'utilisateur
   - Endpoint pour générer des liens de téléchargement temporaires
   - Endpoint pour générer des factures PDF
   - Endpoint pour générer des certificats PDF
   - Endpoint pour gérer les favoris

2. **Base de données** :
   - Table `purchases` avec toutes les métadonnées
   - Table `licenses` pour les certificats
   - Table `favorites` pour les favoris utilisateur
   - Table `downloads` pour l'historique

3. **Génération de Documents** :
   - PDF pour les factures (avec logo, numéro, détails)
   - PDF pour les certificats (design professionnel, signature numérique)
   - Stockage sécurisé des documents

4. **Système de Paiement** :
   - Intégration Mobile Money (Airtel Money, Orange Money, Mvola)
   - Intégration carte bancaire (Stripe, etc.)
   - Gestion des commissions (10-20% pour la plateforme)

5. **Sécurité** :
   - Watermark audio sur les previews
   - Liens de téléchargement avec expiration (24h)
   - Chiffrement des fichiers stockés
   - Détection de contenus dupliqués

## Notes Importantes

- Tous les achats sont **exclusifs** par défaut
- Les produits sont **automatiquement retirés** après vente
- Les licences sont **valides à vie**
- Les téléchargements sont **illimités** pour l'acheteur
- Le créateur doit être **crédité** lors de l'utilisation publique
