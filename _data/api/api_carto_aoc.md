---
title: API Carto - module AOC
tagline: L'accès simplifié aux données de zonages AOC de l'INAO
external_site: https://apicarto.ign.fr/
producer: ign
is_open: 1 # 1 means API is fully open
category: Public
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/aoc.yml
partners:
  - INAO
  - Ministère de la cohésion des territoires
keywords:
  - poste
  - géomarketing
  - vin
  - inao
  - viticulture
  - Géoportail
  - API Carto
themes:
  - Géographie
visits_2019: 2840
last_update: 19/05/2020
rate_limiting_resume: 2M appels / an / jeton
rate_limiting_description: |
  Pour les usages grand public, l'utilisation est gratuite dans la limite de 2M requêtes par an (10 000 pour un usage professionnel).
---

L'API Carto - module AOC permet d'obtenir les AOC/IGP viticoles de l’INAO intersectant une géométrie GeoJSON.
Les données sources sont les délimitations parcellaire des AOC Viticoles de l’INAO.

L'utilisation d'API Carto - module AOC est gratuite pour l'Etat et ses EPA, les collectivités, les EPCI à fiscalité propre et les SDIS décision n°2018/241 de l'institut).

Les données AOC accessibles via API Carto - module AOC sont sous licence ouverte.

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
