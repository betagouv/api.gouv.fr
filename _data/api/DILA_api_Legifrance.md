---
title: Légifrance
tagline: Réutilisation des données juridiques disponibles sur le site Légifrance # une phrase maximum
producer: dila
is_open: 0 # -1 means API not open
account_link: https://piste.gouv.fr/registration
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
doc_tech_external: https://piste.gouv.fr/api-catalog-sandbox?filter=legifrance
themes:
  - Administration & législation
visits_2019: 0
datagouv_uuid:
  - 53ae8af9a3a729709f56d50c
last_update: 13/01/2020
---

Afin de faciliter la réutilisation des données juridiques, la DILA met à disposition une API via [le portail PISTE](https://piste.gouv.fr). Cette API est accessible gratuitement, après inscription.

Les données juridiques disponibles via l'API sont celles du site Légifrance. 
Principales fonctionnalités:

- mise à disposition de l'ensemble des jeux de données de Légifrance
- téléchargement des données et métadonnées
- nombreuses possibilités de filtrage
- format JSON
- recherche avec mots-clés, filtres et critères
- suggestions de résultats pertinents à partir de mots-clés

### Accéder aux données

L'utilisation de ces données est soumise :
- à la licence ouverte 2.0 ;
- aux conditions générales d'utilisation de PISTE;
- aux conditions générales d'utilisation de l'API Légifrance ;
- à des quotas détaillés sur le portail PISTE.

Une documentation technique sur chaque méthode de l'API est disponible sur le portail PISTE (Swagger).
De la documentation complémentaire est mise à disposition concernant :
- [Les tris et filtres disponibles dans les différents fonds](https://www.legifrance.gouv.fr/contenu/pied-de-page/open-data-et-api)  ;
- [Des exemples pratiques d'utilisation](https://www.legifrance.gouv.fr/contenu/pied-de-page/open-data-et-api) ;
- Les [définitions principales des termes utilisés dans l'API](https://www.legifrance.gouv.fr/contenu/Media/files/lexique-api-lgf.docx) (exemple : LEGI, NOR, CID, etc.).

