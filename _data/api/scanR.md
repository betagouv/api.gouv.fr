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
doc_tech_link: https://scanr-api.enseignementsup-recherche.gouv.fr/api/v2/api-docs
monitoring_link: https://scanr-api.enseignementsup-recherche.gouv.fr/api/services/counts
datagouv_uuid:
  - 577cc85ac751df4e1b9901a0
last_update: 01/05/2020
---

### Description de l'API

#### L'api scanR recense 4 types de données :

- 40 000 entités liées à la recherche et l’innovation
- 490 000 auteurs de travaux de recherche
- 87 000 financements
- +2 000 000 productions : thèses de doctorat, publications et brevets

#### Pour chaque type de données (entités, auteurs, financements et productions), l'api scanR propose :

- un search, par exemple `POST /v2/publications/search`
- une description détaillée de chaque objet, par exemple `GET /v2/publications/{id}`
- une liste d'objets similaires, par exemple `POST /v2/publications/like`

#### Un outil d’exploration mais pas d’évaluation

scanR enrichit et structure toutes les données qu’il parvient à récolter, mais ne garantit pas :

- L’absence d’erreur : Le caractère automatique des traitements engendre inéluctablement des approximations ou des erreurs
- La complétude des informations : scanR utilise l’information qui est ouverte et disponible et réutilisable. La couverture du paysage ne peut donc être que partielle, en particulier sur les financements.
  scanR ne doit donc être un aucun cas perçu ou utilisé comme un outil d’évaluation
