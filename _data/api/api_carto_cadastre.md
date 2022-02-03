---
title: API Carto - module Cadastre
tagline: L'accès simplifié aux données de cadastre
external_site: https://apicarto.ign.fr
producer: ign
is_open: 1 
category: Public
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/cadastre.yml
partners:
  - INAO
  - Ministère de la cohésion des territoires
keywords:
  - poste
  - géomarketing
  - zonages
  - cadastre
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

L'API Carto - module cadastre permet d'obtenir les informations suivantes issues de la BD PARCELLAIRE :

- Obtenir les géométries pour une commune
- Obtenir les divisions parcellaires d’une commune
- Obtenir la géométrie d’une parcelle cadastrale
- Obtenir le centroïde d’une parcelle ou d’une commune (localisants)

Les dates de mise à jour de la BD PARCELLAIRE sont accessibles sur le <External href"https://www.geoportail.gouv.fr/carte">Géoportail</External> ainsi que via des web services :

- https://wxs.ign.fr/metadata/geoportail/v/wms?service=WMS&request=GetCapabilities
- https://wxs.ign.fr/metadata/geoportail/wfs?service=WFS&request=GetCapabilities

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
