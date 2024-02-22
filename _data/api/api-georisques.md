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
contact_link: https://www.georisques.gouv.fr/questions-reponses
doc_tech_link: https://www.georisques.gouv.fr/api/v3/api-docs/Api%20de%20G%C3%A9orisques
visits_2019: 3000
rate_limiting_resume: 1000 requêtes/min par IP
last_update: 06/02/2024
---

### Quels sont les risques listés dans l'API Géorisques ?

#### 🌳 Risques naturels

- feux de forêt,
- mouvements de terrain,
- séismes,
- cavités souterraines,
- inondations,
- volcanisme,
- retrait / gonflement des argiles,
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
| AZI         | Liste des Atlas de Zones Inondables (AZI) recensés sur le territoire concerné                                         |
| CATNAT      | Liste des arrêtés de catastrophe naturelle                                                                            |
| Cavites	  | Cette interface est conçue pour diffuser les données sur les cavités souterraines									   |
| DICRIM      | Liste des Documents d'Information Communal sur les Risques Majeurs (DICRIM) sur le territoire concerné                |
| Etats documents PPR  | Liste des différents états d'un document PPR                                                                 |
| Familles risque PPR  | Liste des familles de risques                                                                                |
| Installations Classées	  | Cette interface est conçue pour diffuser les données installations classées de GUNenv à destination de géorisques   |
| Installations Classées CSV  | Cette interface est conçue pour diffuser les données installations classées de GUNenv à destination de géorisque au format CSV |
| MVT| 		   Cette interface est conçue pour diffuser les données sur le mouvement de terrain									   |
| OLD		  | Liste des Obligations Légales de Débroussaillement par code Insee												       |
| PAPI        | Liste des Programmes d'Actions de Prévention des Inondations (PAPI) recensés sur le territoire concerné               |
| PPR         | Liste des documents PPR                                                                                               |
| RADON       | Rechercher les potentiels radon des communes                                                                           |
| Rapport PDF | Cette interface est conçue pour générer un rapport de risque : adresse ou latlon génèrent un rapport à l'adresse. code_insee génère un rapport à la commune  |
| Retrait gonflement des argiles  | Cette interface est conçue pour diffuser les données sur le retrait / gonflement des argiles      |
| Risques     | Liste des types de risques recensés sur le territoire concerné                                                        |
| SIS         | Liste des Secteurs d'Information sur les Sols                                                                         |
| TIM         | Liste des dossier de Transmission d'Information au Maire (TIM) recensés sur le territoire concerné                    |
| TRI         | Liste des Territoires à Risques importants d'Inondation (TRI) recensés sur le territoire concerné - Données Gaspar
| TRI - Zonage réglementaire	  | Liste des Territoires à Risques importants d'Inondation (TRI) recensés sur le territoire concerné - Niveaux de risque   | 
| Zonage Sisimique     | Liste des zonages sismiques                                                                                  |