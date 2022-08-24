---
title: API DPE logements
tagline: Le recensement des diagnostics de performance énergétique (DPE) des logements par habitation
external_site: https://data.ademe.fr/datasets/dpe-france
is_open: 1 # 1 means API is fully open
producer: ademe
keywords:
  - Performance energétique
  - DPE
  - diagnostics de performance énergétique
  - Professionnels
  - Adresse
  - ADEME
rate_limiting_resume: 10 appels / seconde / IP
themes:
  - Environnement
contact_link: https://www.ademe.fr/content/contacter
doc_tech_link: https://data.ademe.fr/data-fair/api/v1/datasets/dpe-france/api-docs.json
doc_tech_external: https://data.ademe.fr/datasets/dpe-france
datagouv_uuid:
  - 5ee2391763c79811ddfbc86a
last_update: 27/07/2020
---

Le diagnostic de performance énergétique (DPE) renseigne sur la performance énergétique d’un logement ou d’un bâtiment, en évaluant sa consommation d’énergie et son impact en terme d’émissions de gaz à effet de serre.

### À quoi sert l’API DPE logements ?

Cette API donne accès au recensement des diagnostics de performance énergétique (DPE) pour la France entière.

### Données

| Nom de la donnée                  | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| Numéro DPE                        | Numero DPE, méthode de DPE, date du diagnostic |
| Classe énergétique                | de A à G                                       |
| Classe GES (gaz à effet de serre) | de A à G                                       |
| Adresse postale                   | Permet de rechercher un batiment               |
| Information sur l'habitation      | Date de construction, surface, etc.            |

### À propos des diagnostics de performance énergétique

Le contenu et les modalités d’établissement du DPE sont réglementés.

Le DPE décrit le bâtiment ou le logement (surface, orientation, murs, fenêtres, matériaux, etc), ainsi que ses équipements de chauffage, de production d’eau chaude sanitaire, de refroidissement et de ventilation. Il indique, suivant les cas, soit la quantité d’énergie effectivement consommée (sur la base de factures), soit la consommation d’énergie estimée pour une utilisation standardisée du bâtiment ou du logement.

La lecture du DPE est facilitée par deux étiquettes à 7 classes de A à G (A correspondant à la meilleure performance, G à la plus mauvaise) :

- L’étiquette énergie pour connaître la consommation d’énergie primaire ;
- L'étiquette climat pour connaître la quantité de gaz à effet de serre émise.

Le diagnostic de performance énergétique doit être établi par un professionnel indépendant satisfaisant à des critères de compétence et ayant souscrit une assurance.

L’API donne accès à des données simplifiées. Vous pouvez accéder aux <External href="https://files.data.gouv.fr/ademe/dpe-france-entiere.zip">données complètes</External>, issues des bases de données. Leur utilisation est un peu plus complexe et réservée à un public averti.

Les données sont mises à jour régulièrement et accessibles sur le <External href="https://data.ademe.fr/datasets/dpe-france">portail Open Data de l'ADEME</External>.

### À propos de l'Open Data a l’ADEME

Cette API est en Open Data. Elle permet de consulter des données ouvertes, <External href="https://www.etalab.gouv.fr/licence-ouverte-open-licence">sous licence Etalab</External>.
