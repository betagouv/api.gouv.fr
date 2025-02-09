---
title: API Fichier des décès
tagline: 'Accédez au fichier des décès survenus depuis 1970'
external_site: https://deces.matchid.io/
producer: ministere-interieur
is_open: 1 # 1 means API is fully open
contact_link: matchid.project@gmail.com
doc_tech_external: https://deces.matchid.io/deces/api/v1/docs/
keywords:
  - décès
  - mort
  - fichier
  - etat civil
  - insee
  - mairie
  - lieu
  - nom
  - personne
  - acte
  - généalogie
  - identité
  - medecin
  - matchID
themes:
  - Particulier
last_update: 02/09/2022
---

Le moteur de recherche matchID permet une recherche rapide des personnes dont le décès a été enregistré depuis 1970, dans le fichier de l'INSEE : soit plus de 26 millions d'enregistrements.

## A quoi sert l’API Fichier des décès ?

L’API Fichier des décès permet de rechercher des personnes décédées, et retourne les données suivantes :

| Ensemble de données         | Description                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Identité                    | nom, prénom |
| Naissance                   | date, sexe, commune, code INSEE, département, pays |
| Décès                       | date, commune, code INSEE, département, pays |
| Acte de décès               | numéro de l'acte, lien vers l'acte |

La recherche peut s'effectuer de manière simple (avec saisie d'un nom), ou bien en mode multi-critères, avec une possibilité de tri des résultats.

#### 🔎 [Accéder au moteur de recherche](https://deces.matchid.io/search)

## Précisions sur l'API

L'API a été intiée par le Ministère de l'Intérieur, puis développée dans le cadre du programme [Entrepreneurs d'intérêt général](https://entrepreneur-interet-general.etalab.gouv.fr/).

👉 Elle est aujoud'hui en [open source et maintenue par une équipe de bénévoles](https://github.com/matchID-project).
