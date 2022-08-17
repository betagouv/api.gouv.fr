# api.gouv.fr

[![Build, lint & tests](https://github.com/betagouv/api.gouv.fr/actions/workflows/pre-merge.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/pre-merge.yml)
[![Accessibilité](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-accessibility.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-accessibility.yml)
[![Liens morts](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-broken-links.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/check-broken-links.yml)

**api.gouv.fr** catalogue les API produites par les administrations centrales, les
collectivités territoriales, les établissements publics… Chaque API est
associée à une courte description fonctionnelle, une documentation technique,
les modalités d'accès, d'éventuelles ressources supplémentaires et surtout des
liens vers les services qui l'utilisent.

## Derniers déploiements

[![Deploy - Staging](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-staging.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-staging.yml)

[![Deploy - Production](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-production.yml/badge.svg)](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-production.yml)

## Public visé

api.gouv.fr s'adresse avant tout aux créateurs de services, les consommateurs
d'API. Pour cela, nous facilitons la découverte, la compréhension et l'accès
aux API et à leurs producteurs.

Les fournisseurs, de leur côté, ont avec ce catalogue un moyen simple de faire connaître leurs API.

## Fournisseur d'API ? Envie de référencer une nouvelle API ?

[👉 Ajoutez votre API](https://api.gouv.fr/nouvelle-api) !

## Comment ça marche ?

### Prérequis

[Node.js](https://nodejs.org/en/) >= 16

### Serveur de développement

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1. Installer les dépendances

```bash
npm i
```

2. Variables d’environnement

Afin de configurer le projet correctement, il est conseillé de créer un fichier `.env` avec les variables d’environnement nécessaires à l’application.

`.env` permet de persister les variables d’environnement de développement dans un fichier plutôt que de les définir dans le shell, mais les deux fonctionnent. Cela fonctionne avec [dotenv](https://github.com/motdotla/dotenv) et [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv).

Copier le fichier de configuration

```bash
cp .env.sample .env
```

3. Lancer le serveur de développement

```bash
npm run dev
```

Par défaut, il écoutera sur le port `3000`, pour changer, utiliser `npm run dev -p 4242`.

### Build de production

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
PORT=3000 npm run start
```



### Tests

1. Linter

```bash
npm run lint
```

2. Tests unitaires

```bash
npm run test
```

3. Autres tests

```bash
// a11y
npm run check-accessibility

//404
npm run check-broken-links

// no link to datapass staging
npm run check-no-datapass-staging
```

### Miniatures

Avant chaque commit est lancé un script qui redimmensionne et compresse les images des pages de guides :

```bash
// a11y
npm run create-thumbnail
```

### Preview apps

Chaque pull request est déployé dans des [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) sur [Heroku](https://dashboard.heroku.com/)

### Deploiement

Le déploiement se fait par [Github action](https://github.com/betagouv/api.gouv.fr/actions)

A chaque "merge" sur master : 

- Laissez le déploiement se faire automatiquement sur [staging](https://staging.api.gouv.fr) via l'action [deploy-staging](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-staging.yml)
- Vérifiez vos changements sur [staging](https://staging.api.gouv.fr)
- Lancez manuellement le déploiement sur [production](https://api.gouv.fr) : sur [deploy-production](https://github.com/betagouv/api.gouv.fr/actions/workflows/deploy-production.yml) et cliquez sur "Run workflow" -> "Run workflow"

NB: Si plusieurs déploiements sont déclenchés en même temps, seul le premier va jusqu'au bout. Les autres sont automatiquement interrompus.

