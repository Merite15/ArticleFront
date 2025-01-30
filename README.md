# ArticleFront

Ce projet est une application frontend construite avec Vue 3, TypeScript, Pinia et Vue Router. Il consomme une API Laravel pour la gestion des articles et des catégories.

## Prérequis

Avant d'installer et d'exécuter ce projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [pnpm](https://pnpm.io/)

## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-utilisateur/article-front.git
   ```
2. Accédez au dossier du projet :
   ```sh
   cd article-front
   ```
3. Installez les dépendances :
   ```sh
   pnpm install
   ```

## Configuration

Avant de lancer l'application, créez un fichier `.env` à la racine du projet et ajoutez votre URL d'API :

```env
VITE_API_URL=http://localhost:8000/api
```

## Démarrage du projet

Lancez l'application en mode développement avec :

```sh
pnpm dev
```

L'application sera accessible à l'adresse `http://localhost:5173/`.

## Compilation et mise en production

Pour compiler et optimiser le projet pour la production :

```sh
pnpm build
```

Les fichiers de production seront générés dans le dossier `dist`.

## Structure des dossiers

Voici la structure des dossiers principaux du projet :

```
article-front/
├── src/
│   ├── components/        # Composants réutilisables
│   ├── pages/             # Pages Vue
│   ├── stores/            # Stores Pinia (gestion d'état)
│   ├── utils/             # Fonctions utilitaires
│   ├── router/            # Configuration du router Vue
│   ├── assets/            # Fichiers statiques et styles
│   ├── App.vue            # Composant principal
│   ├── main.ts            # Point d'entrée de l'application
│   └── env.d.ts           # Définition des types pour les variables d'environnement
├── public/                # Fichiers publics (favicon, index.html)
├── .env                   # Configuration des variables d'environnement
├── tsconfig.json          # Configuration TypeScript
├── vite.config.ts         # Configuration Vite
└── package.json           # Dépendances et scripts
```

## Fonctionnalités

- Affichage de la liste des articles avec filtrage par catégorie et titre
- Affichage du détail d'un article
- Gestion de l'état avec Pinia
- Navigation avec Vue Router
- Gestion du chargement (loading) pour les requêtes API

## API

L'application consomme une API Laravel accessible via `VITE_API_URL`. Les routes principales utilisées sont :

- `GET /articles` : Récupérer la liste des articles
- `GET /articles/{id}` : Récupérer un article spécifique
- `GET /categories` : Récupérer la liste des catégories

## Réponses aux questions techniques

### Combien de temps avez-vous passé sur le test de codage ?

J'ai passé environ 2 heures à travailler sur ce test.

### Que rajouteriez-vous à votre solution si vous aviez plus de temps ?

Si j'avais plus de temps, j'ajouterais :

- Une pagination pour la liste des articles
- Des tests unitaires avec Vitest
- Une meilleure gestion des erreurs et des messages utilisateur

### Si vous n'avez pas passé beaucoup de temps sur le test, expliquez ce que vous ajouteriez.

Je me concentrerais principalement sur l'amélioration de l'UX avec des animations et une meilleure gestion des chargements.

### Comment traqueriez-vous un problème de performance en production ? Avez-vous déjà eu à le faire ?

Pour identifier un problème de performance en production, j'utiliserais :

- Les outils de monitoring comme Sentry ou Datadog
- L'inspection des requêtes réseau avec DevTools
- L'analyse des performances avec Lighthouse et Web Vitals

### Quels design patterns et principes d'ingénierie logicielle avez-vous utilisés dans votre solution ?

- **Separation of Concerns (SoC)** : Pinia pour la gestion de l'état, Vue Router pour la navigation
- **Single Responsibility Principle (SRP)** : Chaque composant a une seule responsabilité
- **API Layer Abstraction** : Centralisation des appels API via `fetchData`

## Contributeurs

Si vous souhaitez contribuer, veuillez créer une branche, apporter vos modifications et soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.
