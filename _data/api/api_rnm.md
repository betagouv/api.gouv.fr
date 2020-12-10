---
title: API Répertoire National des Métiers
tagline: Le registre public des entreprises artisanales
is_open: 1 # 1 means API is fully open
clients:
  - citoyens
  - entreprises
  - administrations
partners:
  - DINUM
  - Etalab
producer: cma-france
keywords:
  - Répertoire
  - Métiers
  - Registre
  - Artisanat
  - CMA France
  - SIREN
  - RNM
themes:
  - Entreprise
contact_link: contact@api-rnm.artisanat.fr
rate_limiting_resume: 2000 appels / 10 minutes / IP
doc_tech_link: https://api-rnm.artisanat.fr/v2/openapi.json
doc_tech_external: https://api-rnm.artisanat.fr/v2/
last_update: 07/09/2020
---

L’API Répertoire National des Métiers permet d'interroger le répertoire des entreprises artisanales françaises, enregistrées auprès des Chambres des métiers et de l'Artisanat

### A quoi sert cette API ?

Intégrer l’API Répertoire National des Métiers dans votre système d’information permet de récuperer les données d'une entreprise artisanale enregistré auprès des Chambres des métiers, grâce à son SIREN :

- Générer un extrait pdf pour une entreprise en fournissant le SIREN
- Renvoyer un fichier json des données de l'entreprise en fournissant le SIREN
- Renvoyer la fiche de l'entreprise en fournissant le SIREN (format html)

### Données accessibles dans l'API

| Nom                    | Description                                      |
| ---------------------- | ------------------------------------------------ |
| SIREN                  | Le numero SIREN de l'entreprise                  |
| Nom                    | Sigle ou Dénomination sociale de l'entreprise    |
| Adresse                | Adresse de l'entreprise, département et région   |
| Date d'immatriculation | Date d'immatriculation au répertoire des métiers |
| Forme juridique        |                                                  |
| Autre                  | Nombre de salariés, informations du fondateur    |
