---
title: API Aides financières à la rénovation énergetique (Simul’Aid€s)
tagline: Interrogez la liste des aides financières à la rénovation énergétique des bâtiments
external_site: https://portals.koumoul.com/datasets/simulaides-dispositifs-2019-10?portalId=Zjis3jaRI
is_open: 1 # 1 means API is fully open
producer: ademe
keywords:
  - region
  - departements
  - Simul’Aid€s
  - rénovation
  - énergie
  - énergetique
  - finance
  - aide
  - ADEME
rate_limiting_resume: 10 appels / seconde / IP
themes:
  - Environnement
contact_link: https://www.ademe.fr/content/contacter
doc_tech_link: https://koumoul.com/s/data-fair/api/v1/datasets/simulaides-dispositifs-2019-10/api-docs.json
datagouv_uuid:
  - 5dd24d4a8b4c4146823e23f3
last_update: 27/07/2020
---

L'API Aides financières à la rénovation énergetique permet d'interroger la liste des dispositifs d’aides financières, identifiées par les conseillers du réseau FAIRE et disponible via l'outil <External href="https://www.faire.gouv.fr/aides-de-financement/simulaides">Simul’Aid€s</External>

### Données

| Nom de la donnée         | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| Intitulé                 | Nom de l'aide                                                    |
| Descriptif               | de A à G                                                         |
| Date de validité         | Début et fin de validité de l'aide                               |
| Condition                | La condition utilisée par Simul'Aid€s                            |
| Financeur                | L'entité qui finance l'aide                                      |
| Information géographique | code commune, code département et code région selon le financeur |

### À propos de Simul'Aid€s

L’outil, proposé dans la France entière, y compris l’outremer, est encore en cours de déploiement en Bourgogne-Franche Comté, Aura et Pays de Loire ce qui explique une « sous-représentation » de certaines régions dans la base de données mise à disposition. Il est disponible sous forme d'IFRAME (contact : <a href='mailto:simulaides@ademe.fr'>simulaides@ademe.fr</a>)

Cette liste est accompagnée [d'un lexique des données Simul'Aid€s](https://koumoul.com/static/ademe/Lexique%20des%20donnees%20Simulaides.pdf) afin d’en faciliter la compréhension.

Vous pouvez également consulter la [la moyenne des coûts de travaux](https://portals.koumoul.com/datasets/couts-des-travaux-de-renovation-energetique?portalId=Zjis3jaRI), saisis par les ménages.

Les données sont mises à jour 3 fois / an (mars, juillet et novembre).

### À propos de l'Open Data a l’ADEME

Cette API est en Open Data. Elle permet de consulter des données ouvertes, <External href="https://www.etalab.gouv.fr/licence-ouverte-open-licence">sous licence Etalab</External>.
