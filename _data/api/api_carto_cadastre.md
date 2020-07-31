---
title: API Carto - module Cadastre
tagline: L'accès simplifié aux données de cadastre
external_site: https://apicarto.ign.fr
owner: Institut national de l’information géographique et forestière
owner_acronym: IGN
is_open: -1 # -1 means API not open
access_condition: OUVERT (sous contrat pour certaines données)
access_link: http://professionnels.ign.fr/
access_description: |
  <p>Vous devez demander une clé Géoportail pour accéder aux données. Lors de votre demande de clé, vous devez commander les flux “Ressources WFS Géoportail - BD PARCELLAIRE®” ci-dessous:</p>
  <ul><li>bdpv_COMMUNE</li>
  <li>bdpv_DIVCAD</li>
  <li>bdpv_LOCALISANT</li>
  <li>bdpv_PARCELLE</li></ul>
category: Public
logo: look4-geoportail.jpg
contact_link: contact.geoservices@ign.fr
doc_tech_link: https://apicarto.ign.fr/api/doc/cadastre.yml
clients:
  - développeurs
  - entreprises
  - organismes publics
  - collectivités territoriales
  - ministères
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

### Conditions d'utilisation

Ce service repose sur l’appel à des services WFS de l’API Géoportail. Pour utiliser une clé Géoportail sur le serveur API Carto, il faut passer une clé IGN en paramètre sous le nom apikey.

Pour obtenir une clé Geoportail, vous devez vous connecter au site : http://professionnels.ign.fr/. Lors de votre demande de clé Geoportail, vous devez commander les flux “Ressources WFS Géoportail - BD PARCELLAIRE®” ci-dessous:

- bdpv_COMMUNE
- bdpv_DIVCAD
- bdpv_LOCALISANT
- bdpv_PARCELLE

Les dates de mise à jour de la BD PARCELLAIRE sont accessibles sur le [Géoportail](<https://www.geoportail.gouv.fr/carte?c=3.935401397390178,46.560407124677226&z=6&l0=ORTHOIMAGERY.ORTHOPHOTOS::GEOPORTAIL:OGC:WMTS(0.39;h)&l1=CADASTRALPARCELS.GRAPHE::GEOPORTAIL:OGC:WMS(1)&permalink=yes>) ainsi que via des web services :
https://wxs.ign.fr/metadata/geoportail/v/wms?service=WMS&request=GetCapabilities
https://wxs.ign.fr/metadata/geoportail/wfs?service=WFS&request=GetCapabilities

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
