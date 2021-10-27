---
title: API Carto - module Nature
tagline: L'accès simplifié aux données sur les sites et espaces naturels
external_site: https://apicarto.ign.fr
producer: ign
is_open: 1 # -1 means API not open
category: Public
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/nature.yml
partners:
  - INAO
  - Ministère de la cohésion des territoires
keywords:
  - nature
  - forêt
  - patrimoine
  - parc national
  - parc naturel
  - naturel
  - pnr
  - natura 2000
  - carto
  - MNHN
  - API Carto
  - ZNIEFF
themes:
  - Géographie
  - Environnement
visits_2019: 2840
last_update: 27/10/2021
---

L'API Carto - module nature permet d'obtenir les coordonnées géographiques et géométries des objets suivants :

- Sites Natura 2000 (Directive oiseaux),
- Sites Nature 2000 (Directive habitat),
- Réserves naturelles,
- Zones Naturelles d'Intérêt Ecologique Faunistique et Floristique (ZNIEFF 1, ZNIEFF 2).

### Comment fonctionne l'API Carto module Nature ?

Deux modes d'appels sont possibles :

✅ Fournir un point géographique et savoir s'il se situe dans un des espaces naturels décrits ci-dessus ;

✅Fournir l'identifiant d'un des sites ou espaces naturels, et obtenir le point ou la forme de l'objet. Il s'agit de **l'identifiant MNHN** (Muséeum National d'Histoire Naturelle) 

### A propos de l’API Carto

L’API Carto est une API REST compatible avec la spécification OpenAPI permettant d'accéder simplement à des données de référence : urbanisme, cadastre, AOC, codes postaux, etc.
Le format utilisé est JSON/GeoJSON
La projection utilisée est WGS84 (coordonnées en longitude,latitude)

L'API Carto offre des opérations génériques de filtrage simple :
Par attribut sous la forme (?nom_attribut=valeur)
Par intersection géométrique (?geom=géométrie GeoJSON)

Remarques :
Les croisements de données métiers sont réalisés côté client (croisements de données = appels successifs aux API)
Les traitements géométriques métiers (calcul de surface, filtrage des résultats, etc.) sont réalisés côté client à l'aide de bibliothèques de calcul géométrique
