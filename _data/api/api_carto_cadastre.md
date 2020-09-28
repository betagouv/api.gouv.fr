---
title: API Carto - module Cadastre
tagline: L'accès simplifié aux données de cadastre
external_site: https://apicarto.ign.fr
owner: Institut national de l’information géographique et forestière
owner_acronym: IGN
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
      - Une entreprise
      - Un organisme public
      - Une collectivité territoriale
      - Un ministère
    is_eligible: 1
    description: |
      Vous devez demander une clé Géoportail pour accéder aux données.

      Lors de votre demande de clé, vous devez commander les flux “Ressources WFS Géoportail - BD PARCELLAIRE®” ci-dessous:

      - bdpv_COMMUNE
      - bdpv_DIVCAD
      - bdpv_LOCALISANT
      - bdpv_PARCELLE

      <Button href="http://professionnels.ign.fr/">Faire une demande d'accès</Button>
category: Public
logo: look4-geoportail.jpg
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
rate_limiting_resume: 2M appels / an / jeton
rate_limiting_description: |
  Pour les usages grand public, l'utilisation est gratuite dans la limite de 2M requêtes par an (10 000 pour un usage professionnel).
---

L'API Carto - module cadastre permet d'obtenir les les informations suivantes issues de la BD PARCELLAIRE :

- Obtenir les géométries pour une commune
- Obtenir les divisions parcellaires d’une commune
- Obtenir la géométrie d’une parcelle cadastrale
- Obtenir le centroïde d’une parcelle ou d’une commune (localisants)

Les dates de mise à jour de la BD PARCELLAIRE sont accessibles sur le <External href"https://www.geoportail.gouv.fr/carte">Géoportail</External> ainsi que via des web services :

- https://wxs.ign.fr/metadata/geoportail/v/wms?service=WMS&request=GetCapabilities
- https://wxs.ign.fr/metadata/geoportail/wfs?service=WFS&request=GetCapabilities

L'utilisation d'API Carto - module cadastre est gratuite pour l'Etat et ses EPA, les collectivités, les EPCI à fiscalité propre et les SDIS ([décision n°2018/241](http://www.ign.fr/institut/sites/all/files/2018.241_tarification_geoservices_ign.pdf) de l'institut).

Les droits et obligations liés à la réutilisation des ressources en ligne sous licence IGN sont détaillées [ici](http://professionnels.ign.fr/doc/CGU-ressourcesgeoportail.pdf)

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
