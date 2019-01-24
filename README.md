api.gouv.fr catalogue les API offertes par les administrations centrales, les collectivités territoriales, les établissements publics… Chaque API est associée à une courte description fonctionnelle, une documentation technique, les modalités d'accès, d'éventuelles ressources supplémentaires et surtout des liens vers les services qui l'utilisent.


## Public visé

api.gouv.fr s'adresse avant tout aux créateurs de services, les consommateurs d'API. Pour cela, nous facilitons la découverte, la compréhension et l'accès aux API et à leurs producteurs.

Les fournisseurs, de leur côté, ont avec ce catalogue un moyen simple de faire connaître leurs API.


### Fournisseur d'API ? [Ajoutez votre API](https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-une-api) !

### Réutilisateur d'API ? [Ajoutez votre service](https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-un-service) !


## Sous-domaines

Le nom de domaine `api.gouv.fr` héberge un catalogue d'API et de services les réutilisant.

Les sous-domaines en `*.api.gouv.fr` hébergent les API cataloguées sur `api.gouv.fr` et maintenues par la <abbr title="Direction interministérielle du numérique et du système d'information et de communication">DINSIC</abbr>.


## Installation locale

Il est nécessaire de récupérer les sources avec la commande :

``` sh
git clone https://github.com/betagouv/api.gouv.fr.git
cd api.gouv.fr
```

Il existe ensuite deux manières de lancer le site sur sa machine :

* Utiliser Jekyll directement.
* Utiliser Docker.

Ces deux méthodes sont indépendantes et détaillées ci-dessous.

### Jekyll

Le site utilise [Jekyll], un générateur de site statique en [Ruby].

#### Dépendances

* [Ruby](https://www.ruby-lang.org/en/downloads/). Il est recommandé d'utiliser un système de virtualisation comme [RVM](https://rvm.io/) ou [RbEnv](https://github.com/rbenv/rbenv). La version à utiliser est : `2.5.1`
 * [bundler](http://bundler.io/). La commande a lancer est : `gem install bundler`

#### Commandes

* `bundle install` pour installer toutes les dépendances nécessaires
* `bundle exec jekyll serve` pour lancer un serveur de développement. Il suffit de se rendre sur l'URL indiquée à l'exécution de la commande.
* `bundle exec jekyll build` pour générer le site dans le répertoire `_site`.
* `bundle update` pour mettre à jour les dépendances et le `Gemfile.lock`

### Docker

#### Dépendances

* [Docker](https://docs.docker.com/engine/installation/) (version > 1.10)
* [docker-compose](https://docs.docker.com/compose/install/) (version > 1.6)

#### Commandes

* `docker-compose up`. Il suffit de se rendre sur l'URL indiquée à l'exécution de la commande.

## Déploiement

### Production

Pour déployer ce site, il suffit de pousser les modifications vers la branche `master` sur [github.com/betagouv/api.gouv.fr](https://github.com/betagouv/api.gouv.fr). Cette branche étant protégée, il convient de faire [des pull requests](https://help.github.com/articles/using-pull-requests/) car le projet utilise [GitHub flow](https://guides.github.com/introduction/flow/).


### Développement

Chaque pull request est déployé dans des [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) sur [Heroku].
Le compte utilisé est le compte de [Thibaut Géry](https://github.com/ThibautGery/)



[Jekyll]: http://jekyllrb.com/
[Ruby]: https://www.ruby-lang.org
[heroku]: https://dashboard.heroku.com/
