# api.gouv.fr

**api.gouv.fr** catalogue les API offertes par les administrations centrales, les
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

- [Node.js](https://nodejs.org/en/) >= 8
- [yarn](https://yarnpkg.com) (mais fonctionne également avec npm)

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
yarn
```

2. Lancer le serveur de développement

```bash
yarn dev
```

Par défaut, il écoutera sur le port `3000`, pour changer, utiliser `yarn dev -p 4242`.

Afin de configurer le projet correctement, il est conseillé de créer un fichier `.env` avec les variables d’environnement nécessaires à l’application.

`.env` permet de persister les variables d’environnement de développement dans un fichier plutôt que de les définir dans le shell, mais les deux fonctionnent. Cela fonctionne avec [dotenv](https://github.com/motdotla/dotenv) et [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv).

Un fichier d’example existe : `.env.example`. Pour obtenir une configuration de base :

```bash
cp .env.sample .env
```

## Déploiement

### Production

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
yarn
```

2. Générer les bundles de production

```bash
yarn build
```

3. Lancer le serveur de production

```bash
yarn start
```

### Développement

Chaque pull request est déployé dans des [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) sur [Heroku](https://dashboard.heroku.com/)
