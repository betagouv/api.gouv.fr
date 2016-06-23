---
title: GéoAPI
tagline: Interrogez les référentiels géographiques plus facilement
contract: OUVERT
openapi_definition: https://geo.api.gouv.fr/definition.yml
doc_tech: https://sgmap.github.io/geoapi-doc
clients:
  - collectivités
  - ministères
  - entreprises
  - particuliers
partners:
  - Etalab
  - La Poste
  - INSEE
  - OpenStreetMap
owner: DINSIC
category: reference
keywords:
  - Communes
  - Codes postaux
  - Départements
  - Régions
  - EPCI
  - Surface
  - Distance
---

La __GéoAPI__ est une boîte-à-outils __facile à prendre en main__ pour rendre vos applications et bases de données plus intelligentes, en terme de positionnement et de connaissance des territoires.

Grâce à elle vous pouvez notamment :

* Rechercher des communes par nom, code postal ou coordonnées géographiques
* Connaître les groupements auxquels appartient une commune, ainsi que leurs compétences _(bientôt)_
* Savoir si une parcelle appartient à certains zonages (appellations d'origine, quartiers prioritaires…) _(bientôt)_

Les différentes fonctionnalités arrivant progressivement, restez informés en suivant cette page ou [en nous contactant](mailto:geo@api.gouv.fr).


## Derniers changements
* 20/06 : Ajout des départements, des régions, de la population municipale et amélioration de la recherche par nom de commune
* 21/05 : Mise en service de l'API. Recherche de communes par nom, code postal et coordonnées géographiques

## Informations complémentaires

#### Couverture du territoire

France métropolitaine et [DROM](https://fr.wikipedia.org/wiki/D%C3%A9partement_et_r%C3%A9gion_d%27outre-mer).

#### Coordonnées géographiques

Cette API utilise exclusivement des coordonnées géographiques [WGS-84](https://fr.wikipedia.org/wiki/WGS_84).
Elle peut renvoyer des données au format JSON ou  [GeoJSON](http://geojson.org).

#### Qui peut utiliser cette API ?

Tout le monde. Mais si vos besoins sont massifs, [contactez-nous](mailto:geo@api.gouv.fr) au préalable.

#### Données source

[Toutes les données utilisées](https://github.com/sgmap/api-communes#données-sources) sont sous licences Open Data.

#### Contact

geo@api.gouv.fr
