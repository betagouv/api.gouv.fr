---
title: scanR, moteur de la recherche et de l'innovation # nom commercial de l'API
tagline: Explorez le monde de la Recherche et de l'Innovation française avec scanR # une phrase maximum
owner: Ministère de l'Enseignement Supérieur, de la Recherche et de l'Innovation # producteur de l'API
owner_acronym: MESRI # acronyme du producteur
contract: OUVERT
logo: logo-scanr-blue.jpg # https://scanr.enseignementsup-recherche.gouv.fr/img/logo-scanr-blue.jpg - Nom du fichier de votre logo à placer dans le dossier /images/api-logo
stat:
clients: # types d'entités habilitées à utiliser l'API
  - particuliers # texte libre en minuscules
  - entreprises # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
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
score:
  detail:
    access:
      is_open: true
    contact:
      link: https://scanr.enseignementsup-recherche.gouv.fr/contact #moyen de contact, soit un mail, soit un lien vers formulaire de contact
    doc_tech:
      link: https://scanr-api.enseignementsup-recherche.gouv.fr/api/v2/api-docs # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
    monitoring:
      link: https://scanr-api.enseignementsup-recherche.gouv.fr/api/services/counts # URL d'une page qui affiche le statut
---

## Description de l'API

### L'api scanR recense 4 types de données :

- 40 000 entités liées à la recherche et l’innovation
- 490 000 auteurs de travaux de recherche
- 87 000 financements
- +2 000 000 productions : thèses de doctorat, publications et brevets

### Pour chaque type de données (entités, auteurs, financements et productions), l'api scanR propose :

- un search, par exemple `POST /v2/publications/search`
- une description détaillée de chaque objet, par exemple `GET /v2/publications/{id}`
- une liste d'objets similaires, par exemple `POST /v2/publications/like`

### Un outil d’exploration mais pas d’évaluation

scanR enrichit et structure toutes les données qu’il parvient à récolter, mais ne garantit pas :

- L’absence d’erreur : Le caractère automatique des traitements engendre inéluctablement des approximations ou des erreurs
- La complétude des informations : scanR utilise l’information qui est ouverte et disponible et réutilisable. La couverture du paysage ne peut donc être que partielle, en particulier sur les financements.
  scanR ne doit donc être un aucun cas perçu ou utilisé comme un outil d’évaluation
