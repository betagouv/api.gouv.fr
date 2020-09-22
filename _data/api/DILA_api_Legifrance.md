---
title: Légifrance Bêta
tagline: Réutilisation des données juridiques disponibles sur le site Légifrance # une phrase maximum
owner: Direction de l'information légale et administrative
owner_acronym: DILA
logo: DILA_logo_Simplifie_beta_v3.svg
is_open: 0 # -1 means API not open
account_link: https://developer.aife.economie.gouv.fr/component/apiportal/registration
keywords:
  - Journal officiel
  - Codes
  - Textes consolidés
  - Circulaires et instructions
  - Jurisprudence constitutionnelle
  - Jurisprudence administrative
  - Jurisprudence judiciaire
  - Accords d'entreprise
  - CNIL
  - Accords de branche et conventions collectives
  - Documents administratifs
  - Dossiers législatifs
rate_limiting_resume: quota / jeton
rate_limiting_description: |
  Les appels API sont limités par quotas par jetons d'accès.
contact_link: retours-legifrance-modernise@dila.gouv.fr
doc_tech_link: /swaggers/api-legifrance.json
themes:
  - Administration & législation
visits_2019: 0
datagouv_uuid:
  - 53ae8af9a3a729709f56d50c
last_update: 13/01/2020
---

Afin de faciliter la réutilisation des données juridiques, la DILA met à disposition une API via [le portail PISTE](https://developer.aife.economie.gouv.fr/). Cette API est accessible gratuitement, après inscription.

Cette version de l'API est une version bêta. Elle permet de recueillir vos remarques et vos suggestions d’amélioration ; elle pourra donc évoluer pendant toute la durée du test.

Les données juridiques disponibles via l'API sont celles de la version bêta du site Légifrance. Toutefois, le droit opposable issu du Journal officiel électronique ne sera valablement authentifié que sur le [site legifrance](https://www.legifrance.gouv.fr).
Principales fonctionnalités:

- mise à disposition de l'ensemble des jeux de données de Légifrance
- téléchargement des données et métadonnées
- nombreuses possibilités de filtrage
- format JSON
- recherche avec mots-clés, filtres et critères
- suggestions de résultats pertinents à partir de mots-clés
