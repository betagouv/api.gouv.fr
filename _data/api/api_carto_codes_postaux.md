---
title: API Carto - module Codes Postaux
tagline: L'accès simplifié aux codes postaux
external_site: https://apicarto.ign.fr
producer: ign
is_open: 1 # 1 means API is fully open
category: Public
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/codes-postaux.yml
partners:
  - INAO
  - Ministère de la cohésion des territoires
keywords:
  - poste
  - codes postaux
  - géomarketing
  - rge
  - Géoportail
  - API Carto
themes:
  - Géographie
visits_2019: 2840
last_update: 19/05/2020
---

L'API Carto - module codes postaux permet de récupérer les communes associées à un code postal donné.
Voir https://github.com/etalab/codes-postaux#codes-postaux pour plus d’information sur les sources de données.

L'utilisation d'API Carto - module codes postaux est ouverte.
Les données accessibles via API Carto - module codes postaux sont sous licence ouverte.

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
