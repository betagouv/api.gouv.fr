# api.gouv.fr

**api.gouv.fr** catalogue les API offertes par les administrations centrales, les
collectivités territoriales, les établissements publics… Chaque API est
associée à une courte description fonctionnelle, une documentation technique,
les modalités d'accès, d'éventuelles ressources supplémentaires et surtout des
liens vers les services qui l'utilisent.

[![jekyll](https://img.shields.io/badge/jekyll-v3.7-informational)](https://jekyllrb.com/)

[![ruby](https://img.shields.io/badge/ruby-v2.5.1-informational)](https://ruby-doc.org/stdlib-2.5.1/)


## Public visé

api.gouv.fr s'adresse avant tout aux créateurs de services, les consommateurs
d'API. Pour cela, nous facilitons la découverte, la compréhension et l'accès
aux API et à leurs producteurs.

Les fournisseurs, de leur côté, ont avec ce catalogue un moyen simple de faire connaître leurs API.

### Fournisseur d'API ? [Ajoutez votre API](https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-une-api) !

### Réutilisateur d'API ? [Ajoutez votre service](https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md#ajouter-un-service) !


## Installation locale

Nous utilisons docker, il vous faut donc installer une version au moins égale de :

[![docker-19.03](https://img.shields.io/badge/docker-v19.03-informational)](https://docs.docker.com/engine/installation/)

[![docker-compose-1.25](https://img.shields.io/badge/docker--compose-v1.25-informational)](https://docs.docker.com/compose/install/)

Pour récupérer les sources :

``` sh
git clone https://github.com/betagouv/api.gouv.fr.git
cd api.gouv.fr
```

Pour lancer le serveur en mode dev :

``` sh
docker-compose up
```

Puis il suffit de se rendre sur http://localhost:4000


## Déploiement

### Production

Pour déployer ce site, il suffit de pousser les modifications vers la branche
`master` sur
[github.com/betagouv/api.gouv.fr](https://github.com/betagouv/api.gouv.fr).
Cette branche étant protégée, il convient de faire [des pull
requests](https://help.github.com/articles/using-pull-requests/) car le projet
utilise [GitHub flow](https://guides.github.com/introduction/flow/).

### Développement

Chaque pull request est déployé dans des [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) sur [Heroku](https://dashboard.heroku.com/)

