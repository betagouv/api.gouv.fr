---
title: API Registre National du Commerce et des Sociétés
tagline: Le registre public des sociétés françaises immatriculées dans les greffes locales des tribunaux, centralisées à l'INPI.
is_open: 0
account_link: https://data.inpi.fr/register
partners:
  - beta.gouv.fr
  - DINUM
  - Etalab
producer: inpi
keywords:
  - Répertoire
  - open data
  - Entreprises
  - commerces
  - sociétés
  - registres
  - tribunal
  - greffes
  - RNCS
  - IMR
  - actes
  - immatriculation
themes:
  - Entreprise
contact_link: https://www.inpi.fr/fr/contactez-nous
doc_tech_link: https://data.inpi.fr/build/files/swagger-inpi-rncs.yaml
useSwaggerProxy: true
datagouv_uuid:
  - 59785a7888ee385cb8d806af
  - 5964c402c751df0671f823d0
last_update: 16/06/2020
---

L’API RNCS permet d'interroger les informations publiques sur les sociétés françaises immatriculées dans les registres locaux des greffes des tribunaux à compétence commerciale. Ces informations sont centralisées à l'INPI.

### A quoi sert cette API ?

L’API Registre National du Commerce et des Sociétés vous permet d’accéder aux données des sociétés immatriculées à l’INPI grâce à leurs SIREN:

### Données

| Nom de la donnée           | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| actes                      | Rechercher et télécharger un acte au format PDF                        |
| document d’immatriculation |                                                                        |
| compte annuel              | Rechercher et télécharger le compte annuel de la société au format PDF |
| IMR                        | Immatriculations, Modifications, Radiations                            |

### À propos de la version ouverte de cette API, développée par Etalab

Une version totalement libre d’accès de cette API a été créée par Etalab, mais n'a pas dépassé le stade de la version beta. Elle n'est aujourd’hui plus maintenue, et son code est [accessible sur github](https://github.com/etalab/rncs_worker_api_entreprise).

Vous êtes libre de ré-utiliser ce code pour vos projets.
