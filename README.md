# Api.gouv.fr

> Le site public listant les API au sein du gouvernement Français


## Public visé

1. ** Administrations **(Collectivités, Ministères, etc) souhaitant fournir des services aux citoyens français
2. ** Entreprise privé ** souhaitant fournir des services
3. **Administrations** proposant des données au travers d'API.


### Tu développes une API au sein de l'adminsitration [Ajoute ton API](https://github.com/sgmap/api.gouv.fr/blob/gh-pages/CONTRIBUTING.md) !


## `api.gouv.fr`

Ce nom de domaine héberge une présentation des différentes API proposé par l'État et ses administrations

## Installation local

Il est nécessaire de récupérer les sources avec la commande

``` sh
git clone https://github.com/sgmap/api.gouv.fr.git
cd api.gouv.fr
```

### jekyll

Le site utilise [Jekyll], un générateur de site statique en [Ruby].

#### Dépendances

 * [Ruby](https://www.ruby-lang.org/en/downloads/). Il est recommandé d'utiliser un système de virtualisation comme [RVM](https://rvm.io/) ou [RbEnv](https://github.com/rbenv/rbenv)
 * la gem `github-pages` qui contient jekyll ainsi que les plugins disponibles sur github : `gem install github-pages`

#### Commandes
 * `jekyll serve` pour lancer un serveur de développement. Il suffit de se rendre sur [localhost:4000/api.gouv.fr](http://localhost:4000/api.gouv.fr/)
 * `jekyll build` pour générer le site dans le répertoire `_site`
### Docker

#### Dépendances
  * [Docker](https://docs.docker.com/engine/installation/)  (version > 1.10)
  * [Docker-compose](https://docs.docker.com/compose/install/) (version > 1.6)

#### Commandes
 * `docker-compose up`, Il suffit de se rendre sur [localhost:4000/api.gouv.fr](http://localhost:4000/api.gouv.fr/)

## Déploiement

Pour déployer ce site, il de pousser les modifications vers la branche `gh-pages` sur [github.com/sgmap/api.gouv.fr](https://github.com/sgmap/api.gouv.fr). Cette branche étant protégée, il convient de faire [des pull requests](https://help.github.com/articles/using-pull-requests/) car le project utilise [github flow](https://guides.github.com/introduction/flow/)


[Jekyll]: http://jekyllrb.com/
[Ruby]: https://www.ruby-lang.org
