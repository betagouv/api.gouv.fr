---
title: API Carto
tagline: "L'accès simplifié aux données de référence : urbanisme, zonages AOC de l'INAO, codes postaux, identifiants de parcelles BD Parcellaire,..."
external_site : https://apicarto.ign.fr
owner: IGN Géoportail
contract: OUVERT (sous contrat pour certaines données)
category: Public
logo: look4-geoportail.jpg
score:
  detail:
    contact:
      link: contact.geoservices@ign.fr
    doc_tech:
      external: https://apicarto.ign.fr/api/doc
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
  - codes postaux
  - géomarketing
  - vin
  - inao
  - viticulture
  - zonages
  - urbanisme
  - cadastre
  - parcellaire
  - communes
  - parcelles
  - rge
  - Géoportail
  - API Carto
---

L’API Carto est une API REST compatible avec la spécification OpenAPI permettant d'accéder simplement à des données de référence : urbanisme, cadastre, AOC, codes postaux, etc.
Le format utilisé est JSON/GeoJSON
La projection utilisée est WGS84 (coordonnées en longitude,latitude)

L'API Carto offre des opérations génériques de filtrage simple :
Par attribut sous la forme (?nom_attribut=valeur)
Par intersection géométrique (?geom=géométrie GeoJSON)
Remarques :
Les croisements de données métiers sont réalisés côté client (croisements de données = appels successifs aux API)
Les traitements géométriques métiers (calcul de surface, filtrage des résultats, etc.) sont réalisés côté client à l'aide de bibliothèques de calcul géométrique

# API Carto - module AOC

L'API Carto - module AOC permet d'obtenir les AOC viticoles de l’INAO intersectant une géométrie GeoJSON.
Les données sources sont les Délimitation Parcellaire des AOC Viticoles de l’INAO.

## Appellations

Récupération des zones d'AOC qui intersectent la géométrie concernée.

## Conditions d'accès

L'utilisation d'API Carto - module AOC est gratuite pour l'Etat et ses EPA, les collectivités, les EPCI à fiscalité propre et les SDIS ([décision n°2018/241](http://www.ign.fr/institut/sites/all/files/2018.241_tarification_geoservices_ign.pdf) de l'institut).
Pour les autres utilisateurs, et dans un contexte d'usage grand public, l'utilisation est gratuite dans la limite de 2M requêtes par an (10 000 pour un usage professionnel).
Les données AOC accessibles via API Carto - module AOC sont sous licence ouverte.

# API Carto - module codes postaux

L'API Carto - module codes postaux permet de récupérer les communes associées à un code postal donné.
Voir https://github.com/etalab/codes-postaux#codes-postaux pour plus d’information sur les sources de données.

## Codes postaux

Récupération des communes associées à un code postal donné

## Conditions d'accès

L'utilisation d'API Carto - module codes postaux est ouverte.
Les données accessibles via API Carto - module codes postaux sont sous licence ouverte.


# API Carto - module cadastre

L'API Carto - module cadastre permet d'obtenir les les informations suivantes issues de la BD PARCELLAIRE :

- Obtenir les géométries pour une commune
- Obtenir les divisions parcellaires d’une commune
- Obtenir la géométrie d’une parcelle cadastrale
- Obtenir le centroïde d’une parcelle ou d’une commune (localisants)

## Communes

Récupération de la géométrie d'une commune.

## Divisions

Récupération d'informations sur les divisions parcellaires d'une commune.

## Parcelles

Récupération d'informations sur les parcelles cadastrales d'une commune.

## Localisants

Récupération d'informations sur les parcelles dans les zones non vecteur (issues du PCI image).

## Conditions d'utilisation

Ce service repose sur l’appel à des services WFS de l’API Géoportail. Pour utiliser une clé Géoportail sur le serveur API Carto, il faut passer une clé IGN en paramètre sous le nom apikey.
Pour obtenir une clé Geoportail, vous devez vous connecter au site : http://professionnels.ign.fr/. Lors de votre demande de clé Geoportail, vous devez commander les flux “Ressources WFS Géoportail - BD PARCELLAIRE®” ci-dessous:

- bdpv_COMMUNE
- bdpv_DIVCAD
- bdpv_LOCALISANT
- bdpv_PARCELLE

Les dates de mise à jour de la BD PARCELLAIRE sont accessibles sur le [Géoportail](https://www.geoportail.gouv.fr/carte?c=3.935401397390178,46.560407124677226&z=6&l0=ORTHOIMAGERY.ORTHOPHOTOS::GEOPORTAIL:OGC:WMTS(0.39;h)&l1=CADASTRALPARCELS.GRAPHE::GEOPORTAIL:OGC:WMS(1)&permalink=yes) ainsi que via des web services :
https://wxs.ign.fr/metadata/geoportail/v/wms?service=WMS&request=GetCapabilities
https://wxs.ign.fr/metadata/geoportail/wfs?service=WFS&request=GetCapabilities


L'utilisation d'API Carto - module cadastre est gratuite pour l'Etat et ses EPA, les collectivités, les EPCI à fiscalité propre et les SDIS ([décision n°2018/241](http://www.ign.fr/institut/sites/all/files/2018.241_tarification_geoservices_ign.pdf) de l'institut).
Pour les autres utilisateurs, et dans un contexte d'usage grand public, l'utilisation est gratuite dans la limite de 2M requêtes par an (10 000 pour un usage professionnel).
Les droits et obligations liés à la réutilisation des ressources en ligne sous licence IGN sont détaillées [ici]( http://professionnels.ign.fr/doc/CGU-ressourcesgeoportail.pdf)

# API CARTO - module urbanisme du Géoportail de l'urbanisme (GPU)

Le service d’interrogation du GPU permet d’obtenir les différentes informations d’urbanisme intersectant une géométrie (ponctuelle ou surfacique).
Ces informations sont celles disponibles en consultation et en téléchargement sur le [Géoportail de l'urbanisme](https://geoportail-urbanisme.gouv.fr).

## Communes

Récupération des informations sur une commune (est au règlement national d'urbanisme (RNU) ? est supprimée ?)

## Documents d'urbanisme (PLU, POS, CC, PSMV)

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

## Servitudes d'utilité publique (SUP)

- Récupération des actes des servitudes d’utilité publique
- Récupération des assiettes surfaciques, liénaires ou ponctuelles de servitudes d’utilité publique

## Conditions d'utilisation

Les données servies par l'API urbanisme sont en licence ouverte.
L'API urbanisme est en usage libre.
