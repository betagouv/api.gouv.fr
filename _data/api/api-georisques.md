---
title: API Géorisques
tagline: Connaître les risques liés à un territoire
is_open: 1 # 1 means API is fully open
external_site: https://www.georisques.gouv.fr/
producer: brgm
keywords:
  - Communes
  - PPRT
  - Risques
  - Prévention
  - Technologique
  - Plan
  - BRGM
  - Géographique
  - Territoire
  - CATNAT
  - PPR
  - PPRI
  - Sisimique
  - Séisme
  - Zonage
themes:
  - Géographie
  - Environnement
content_intro: |
  L'API Géorisques permet d'afficher pour un territoire donné la liste des données et documents relatifs aux risques naturels et technologiques existants.
contact_link: https://assistance.brgm.fr/aide/Georisques
doc_tech_link: https://www.georisques.gouv.fr/api/v1/api-docs
visits_2019: 3000
last_update: 25/01/2022
---

### Quels sont les risques listés dans l'API Géorisques ?

#### 🌳 Risques naturels

- feux de forêt,
- mouvements de terrain,
- séismes,
- cavités souterraines,
- innondations,
- volcanisme,
- retrait ou gonflement des argiles,
- radon,
- avalanches.

#### 🏭 Risques technologiques

- réseaux et canalisations,
- installations classées,
- pollution des sols, SIS et anciens sites industriels,
- registre des Emissions Polluantes.

### Quels sont les types de données renvoyés par l'API Géorisques ?

En fonction du code INSEE ou de la géolocalisation interrogée, l'API permet les requêtes suivantes :

| Donnée      | Description                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| AZI         | Lister les Atlas de Zones Inondables (AZI) recensés sur le territoire concerné                                         |
| CATNAT      | Lister les arrêtés de catastrophe naturelle                                                                            |
| DICRIM      | Lister les Documents d'Information Communal sur les Risques Majeurs (DICRIM) sur le territoire concerné                |
| Etats documents PPR  | Lister les différents états d'un document PPR                                                                 |
| Familles risque PPR  | Lister les familles de risques                                                                                |
| PAPI        | Lister les Programmes d'Actions de Prévention des Inondations (PAPI) recensés sur le territoire concerné               |
| PCS         | Lister les Plans Communaux de Sauvegarde (PCS) recensés sur le territoire concerné                                     |
| PPR         | Lister les documents PPR                                                                                               |
| RADON       | Rechercher les potentiels radon des communes                                                                           |
| Risques     | Lister les types de risques recensés sur le territoire concerné                                                        |
| SIS         | Lister les Secteurs d'Information sur les Sols                                                                         |
| TIM         | Lister les dossier de Transmission d'Information au Maire (TIM) recensés sur le territoire concerné                    |
| TRI         | Lister les Territoires à Risques importants d'Inondation (TRI) recensés sur le territoire concerné                     |
| Zonage Sisimique     | Lister les zonages sismiques                                                                                  |
