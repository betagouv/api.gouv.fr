---
title: scanR, moteur de la recherche et de l'innovation # nom commercial de l'API
tagline: Explorez le monde de la Recherche et de l'Innovation française avec scanR # une phrase maximum
producer: mesri
is_open: 1 # 1 means API is fully open
partners:
keywords: # utilisé dans la recherche
  - recherche
  - innovation
  - laboratoire
  - r&d
  - science
  - publications
  - brevets
  - thèses
  - financement de la recherche
  - science ouverte
  - open access
themes:
  - Education
contact_link: https://scanr.enseignementsup-recherche.gouv.fr/contact
doc_tech_external: https://scanr.enseignementsup-recherche.gouv.fr/docs/overview
monitoring_link: https://scanr-api.enseignementsup-recherche.gouv.fr/api/services/counts
datagouv_uuid:
  - 577cc85ac751df4e1b9901a0
last_update: 01/05/2020
---


### L'api scanR recense 4 types de données :

-   entités liées à la recherche et l’innovation
-  auteurs de travaux de recherche
-   financements
-   publications : thèses de doctorat, articles et autres
- brevets

#### Pour chaque type de données (entités, auteurs, financements et productions),  un index elasticsearch est disponible :
 - scanr-organizations
 - scanr-persons
 - scanr-projects
 - scanr-publications
 - scanr-patents

La page https://scanr.enseignementsup-recherche.gouv.fr/docs/overview détaille les URL et schéma de données des index.

### Un outil d’exploration mais pas d’évaluation
scanR enrichit et structure toutes les données qu’il parvient à récolter, mais ne garantit pas :

 - L’absence d’erreur : Le caractère automatique des traitements engendre inéluctablement des approximations ou des erreurs
 - La complétude des informations : scanR utilise l’information qui est ouverte et disponible et réutilisable. La couverture du paysage ne peut donc être que partielle, en particulier sur les financements. scanR ne doit donc être un aucun cas perçu ou utilisé comme un outil d’évaluation
