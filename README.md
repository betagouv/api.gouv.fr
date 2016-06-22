# Api.gouv.fr

> Le site public listant les API au sein du Système d'Information des Services Publics Français


## Public visé

1. **Administrations** (Collectivités, Ministères, etc) souhaitant fournir des services aux citoyens français.
2. **Structure de droit privé** (entreprise, association…) souhaitant fournir des services.
3. **Administrations** proposant des données au travers d'API.

### Fournisseur d'API ? [Ajoutez votre API](https://github.com/sgmap/api.gouv.fr/blob/gh-pages/CONTRIBUTING.md#ajouter-une-api) !

### Réutilisateur d'API ? [Ajoutez votre service](https://github.com/sgmap/api.gouv.fr/blob/gh-pages/CONTRIBUTING.md#ajouter-un-service) !


## `api.gouv.fr`

Ce nom de domaine héberge :
  * une présentation des différentes API proposées par l'État et les administrations
  * une présentation des services utilisant des API présentées

## Installation locale

Il est nécessaire de récupérer les sources avec la commande :

``` sh
git clone https://github.com/sgmap/api.gouv.fr.git
cd api.gouv.fr
```

Il existe ensuite deux manières de lancer le site sur sa machine :
 * Il est possible d'utiliser Jekyll directement
 * Il est possible d'utiliser Docker

Ces deux méthodes sont indépendantes et détaillées ci-dessous.

### jekyll

Le site utilise [Jekyll], un générateur de site statique en [Ruby].

#### Dépendances

 * [Ruby](https://www.ruby-lang.org/en/downloads/). Il est recommandé d'utiliser un système de virtualisation comme [RVM](https://rvm.io/) ou [RbEnv](https://github.com/rbenv/rbenv). La version à utiliser est : `2.2.3`
 * la gem `github-pages` qui contient jekyll ainsi que les plugins sont disponibles sur github : `gem install github-pages -v 2.4.8`

#### Commandes

 * `jekyll serve` pour lancer un serveur de développement. Il suffit de se rendre sur l'URL indiquée
 * `jekyll build` pour générer le site dans le répertoire `_site`

### Docker

#### Dépendances

  * [Docker](https://docs.docker.com/engine/installation/)  (version > 1.10)
  * [Docker-compose](https://docs.docker.com/compose/install/) (version > 1.6)

#### Commandes

 * `docker-compose up`, Il suffit de se rendre sur l'URL indiquée

## Déploiement

Pour déployer ce site, il suffit de pousser les modifications vers la branche `gh-pages` sur [github.com/sgmap/api.gouv.fr](https://github.com/sgmap/api.gouv.fr). Cette branche étant protégée, il convient de faire [des pull requests](https://help.github.com/articles/using-pull-requests/) car le projet utilise [github flow](https://guides.github.com/introduction/flow/).


[Jekyll]: http://jekyllrb.com/
[Ruby]: https://www.ruby-lang.org
