---
title: API Carto - module Géoportail de l'Urbanisme (GPU)
tagline: L'accès simplifié aux données de référence d’urbanisme
external_site: https://apicarto.ign.fr
is_open: 1 # 1 means API is fully open
category: Public
producer: ign
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/gpu.yml
partners:
  - INAO
  - Ministère de la cohésion des territoires
keywords:
  - poste
  - géomarketing
  - urbanisme
  - cadastre
  - communes
  - rge
  - Géoportail
  - API Carto
themes:
  - Géographie
visits_2019: 2840
last_update: 19/05/2020
---

### API CARTO - module urbanisme du Géoportail de l'urbanisme (GPU)

Le service d’interrogation du GPU permet d’obtenir les différentes informations d’urbanisme intersectant une géométrie (ponctuelle ou surfacique).
Ces informations sont celles disponibles en consultation et en téléchargement sur le [Géoportail de l'urbanisme](https://www.geoportail-urbanisme.gouv.fr/).

#### Communes

Récupération des informations sur une commune (est au règlement national d'urbanisme (RNU) ? est supprimée ?)

#### Documents d'urbanisme (PLU, POS, CC, PSMV)

- Récupération de l'emprise d'un document
- Récupération des zonages d’un document d’urbanisme
- Récupération des secteurs d’une carte communale
- Récupération des prescriptions surfaciques, linéaires ou ponctuelles d’un document d’urbanisme
- Récupération des informations surfacique, linéaires ou ponctuelles d’un document d’urbanisme

Glossaire (voir un glossaire complet [ici](https://www.geoportail-urbanisme.gouv.fr/glossaire/)) :
PLU : plan local d'urbanisme ;
POS : plan d'occupation des sols ;
CC : carte communale ;
PSMV : plan de sauvegarde et de mise en valeur

#### Servitudes d'utilité publique (SUP)

- Récupération des actes des servitudes d’utilité publique
- Récupération des assiettes surfaciques, liénaires ou ponctuelles de servitudes d’utilité publique

#### Conditions d'utilisation

Les données servies par l'API urbanisme sont en licence ouverte.
L'API urbanisme est en usage libre.

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
