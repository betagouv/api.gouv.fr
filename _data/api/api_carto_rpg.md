---
title: API Carto - module RPG
tagline: L'accès simplifié aux informations du registre parcellaire graphique
external_site: https://apicarto.ign.fr
producer: ign
is_open: 1 
category: Public
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/rpg.yml
partners:
  - INAO
  - Ministère de la cohésion des territoires
keywords:
  - poste
  - géomarketing
  - parcellaire
  - communes
  - parcelles
  - rge
  - Géoportail
  - API Carto
themes:
  - Géographie
visits_2019: 2840
last_update: 19/05/2020
#rate_limiting_resume:
#rate_limiting_description: |
---

Le service d’interrogation du RPG permet d’obtenir des informations du registre parcellaire graphique intersectant une géométrie (ponctuelle ou surfacique).

Toutes les réponses sont au format GeoJSON et de type FeatureCollection.

Toutes les requêtes du module RPG peuvent se faire en POST ou en GET.

Sur cette page, vous pouvez uniquement tester les modules avec des requêtes en GET.

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
