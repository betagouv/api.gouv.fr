---
title: API Carto - module WFS Géoportail
tagline: Rechercher dans tous les flux WFS Géoportail
external_site: https://apicarto.ign.fr
producer: ign
is_open: 1 # -1 means API not open
category: Public
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/wfs-geoportail.yml
partners:
  - INAO
  - Ministère de la cohésion des territoires
keywords:
  - WFS
  - Géoportail
  - Géométrie
  - EPSG:4326
  - WGS84
  - carto
  - API Carto
themes:
  - Géographie
visits_2019: 2840
last_update: 10/11/2021
---

Ce module permet d’intersecter toute couche WFS du géoportail exprimée dans le référentiel géographique WGS84 EPSG:4326 avec la géométrie passée en paramètre.

### Comment fonctionne l'API Carto module WFS Géportail ?

L'API s’appuie sur l’ensemble des flux WFS du géoportail.
Elle permet de récupérer les objets d’un flux intersectant une géométrie passée en paramètre.
La version bêta actuelle ne permet de n’interroger que les flux en WGS84.

Pour des raisons techniques le service demande toujours une clé dans le paramètre apikey. Il est recommandé d'utiliser les clés génériques dont la description est [disponible sur le site géoservices](https://geoservices.ign.fr/services-web-experts). Une prochaine évolution permettra de s'affranchir de cette contrainte.

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
