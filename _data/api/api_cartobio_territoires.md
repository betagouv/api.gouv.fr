---
title: API CartoBio - Territoires
tagline: Un accès aux données des parcelles en agriculture biologique pour les acteurs publics territoriaux
producer: agence-bio
category: public
is_open: 1 # 1 means API is fully open
external_site: https://www.data.gouv.fr/fr/datasets/616d6531c2951bbe8bd97771/
keywords:
  - CartoBio
  - Agriculture
  - parcelles
  - Bio
  - Biologique
  - Agence Bio
  - Territoire
contact_link: cartobio@beta.gouv.fr
#doc_tech_external: https://github.com/entrepreneur-interet-general/CartoBio-Presentation/blob/master/docs/api-territoires.md
doc_tech_link: https://cartobio.org/api/v1/documentation/json
partners:
  - Ministère de l’Agriculture et de l’Alimentation
  - Ministère de la Transition Écologique
  - Institut National de l’Origine et de la Qualité (INAO)
  - Organisme Français de la Biodiversité
  - Etalab
  - Beta.gouv
  - Les Organismes de Certification de l’Agriculture Biologique (CEBIO)
themes:
  - Environnement
  - Agriculture
uptime: 100
last_update: 03/11/2021
created_at: 01/07/2021
rate_limiting_resume: illimité
content_intro: |
  CartoBio vise à ouvrir progressivement les données des parcelles conduites en agriculture biologique en France, notamment auprès des acteurs publics territoriaux.

  ### À quoi sert l’API CartoBio - Territoires ?

  Elle permet aux Administrations **territoriales**, aux Organismes **Publics**, et aux acteurs **privés** de récupérer les données des parcelles conduites en agriculture Biologique sur le territoire afin de :

  - Adapter les politiques publiques locales sur les sujets de **l’eau** et de **l’alimentation**
    - Qualité de l’eau
    - Cibler les zones où renforcer le développement de l’agriculture biologique
    - Connaître le potentiel d’alimentation bio et locale
  - Avoir une meilleure connaissance de votre territoire
---

### Données de l’API

La récupération des parcelles bio et de leur assolement de l’année pour une zone géographique se fait par Code EPCI, code INSEE et/ou contour géographique en Shapefile ou GeoJSON. Les informations sont anonymisées.

Voici les données accessibles :

| Donnée                              | Description                     |
| ----------------------------------- | ------------------------------- |
| Contour géographique de la parcelle | Sous forme Shapefile ou GeoJson |
| Assolement de l’année               | Description des cultures        |
| Millésime de la donnée              | Année                           |
| Superficie                          | En hectares, par parcelle       |

#### D'où vient la donnée ?

Les données exposées par l'API sont basées sur les données géographiques des instructions d'aides PAC 2017, 2018 et 2019 — c'est-à-dire du RPG de niveau IV. Ces données sont complétées par les Organismes de Certification lors des contrôles terrain. Ces données représentent environt 80 à 85% de la surface bio connue.
