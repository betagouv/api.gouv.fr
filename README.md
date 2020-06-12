# api.gouv.fr

**api.gouv.fr** catalogue les APIs offertes par les administrations centrales, les
collectivités territoriales, les établissements publics… Chaque API est
associée à une courte description fonctionnelle, une documentation technique,
les modalités d'accès, d'éventuelles ressources supplémentaires et surtout des
liens vers les services qui l'utilisent.

## Public visé

api.gouv.fr s'adresse avant tout aux créateurs de services, les consommateurs
d'API. Pour cela, nous facilitons la découverte, la compréhension et l'accès
aux API et à leurs producteurs.

Les fournisseurs, de leur côté, ont avec ce catalogue un moyen simple de faire connaître leurs API.

### Fournisseur d'API ? [Ajoutez votre API](https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-une-api) !

### Réutilisateur d'API ? [Ajoutez votre service](https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-un-service) !

## Installation locale

### Prérequis

- [Node.js](https://nodejs.org/en/) >= 12

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
npm i
```

2. Copier le fichier de configuration

```bash
cp .env.sample .env
```

3. Lancer le serveur de développement

```bash
npm run dev
```

Par défaut, il écoutera sur le port `3000`, pour changer, utiliser `npm run dev -p 4242`.

Afin de configurer le projet correctement, il est conseillé de créer un fichier `.env` avec les variables d’environnement nécessaires à l’application.

`.env` permet de persister les variables d’environnement de développement dans un fichier plutôt que de les définir dans le shell, mais les deux fonctionnent. Cela fonctionne avec [dotenv](https://github.com/motdotla/dotenv) et [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv).

## Déploiement

### Production

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
npm i
```

2. Générer les bundles de production

```bash
npm run build
```

3. Lancer le serveur de production

```bash
PORT=3000 npm start
```

### Développement

Chaque pull request est déployé dans des [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) sur [Heroku](https://dashboard.heroku.com/)
