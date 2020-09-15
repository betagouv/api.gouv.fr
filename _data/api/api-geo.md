---
title: API Géo
tagline: Interrogez les référentiels géographiques plus facilement
is_open: 1 # 1 means API is fully open
external_site: https://geo.api.gouv.fr
partners:
  - Etalab
  - INSEE
  - OpenStreetMap
owner: Direction interministérielle du numérique
owner_acronym: DINUM
keywords:
  - Communes
  - Codes postaux
  - Départements
  - Régions
  - EPCI
rate_limiting_resume: 50 appels / seconde / IP
rate_limiting_description: |
  L'API est disponible à hauteur de 50 appels par seconde et par adresse IP.
themes:
  - Géographie
stat:
  lastXdays: 7
  url: https://geo.api.gouv.fr/stats.json
  label: recherches effectuées
  path:
    - last7DaysQueries
contact_link: geo@api.gouv.fr
doc_tech_link: https://geo.api.gouv.fr/definition.yml
uptime: 100 # https://uptimerobot.com/dashboard#777757460
visits_2019: 26602
last_update: 17/01/2020
---

L' **API Géo** est une boîte-à-outils **facile à prendre en main** pour rendre vos applications et bases de données plus intelligentes, en terme de positionnement et de connaissance des territoires.

Grâce à elle vous pouvez notamment :

- Rechercher des communes par nom, code postal ou coordonnées géographiques
- Connaître les groupements auxquels appartient une commune, ainsi que leurs compétences _(bientôt)_
- Savoir si une parcelle appartient à certains zonages (appellations d'origine, quartiers prioritaires…) _(bientôt)_

Les différentes fonctionnalités arrivant progressivement, restez informés en suivant cette page ou [en nous contactant](mailto:geo@api.gouv.fr).

### Couverture du territoire

France métropolitaine et [DROM](https://fr.wikipedia.org/wiki/D%C3%A9partement_et_r%C3%A9gion_d%27outre-mer).

### Coordonnées géographiques

Cette API utilise exclusivement des coordonnées géographiques [WGS-84](https://fr.wikipedia.org/wiki/WGS_84).
Elle peut renvoyer des données au format JSON ou [GeoJSON](http://geojson.org).

### Données source

[Toutes les données utilisées](https://github.com/etalab/api-communes#données-sources) sont sous licences Open Data.
