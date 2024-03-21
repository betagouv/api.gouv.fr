---
title: API Marché du travail
tagline: Accédez à toutes les données statistiques essentielles pour bien évaluer la situation de l’emploi sur un territoire. L’API vous permet de comprendre les tensions sur les métiers ainsi que la dynamique globale d’un territoire.
producer: france-travail
category: Public
is_open: 0 # -1 means API not open
account_link: https://francetravail.io/login
external_site: https://francetravail.io/data/api
partners:
  - France Travail
keywords:
  - Travail
  - Emploi
  - Marché du travail
  - Compétences
  - ACOSS
  - CCMSA
  - Mobilité professionnelle
  - Territoires
contact_link: support@pole-emploi.io
doc_tech_external: https://francetravail.io/data/api/marche-travail
datagouv_uuid:
  - 593156ff88ee38351b503df3
themes:
  - Emploi
visits_2019: 1500
last_update: 29/12/2022
---

Cette API est issue du site [Data Emploi](https://dataemploi.pole-emploi.fr/accueil).
Il permet de  trouver les informations essentielles pour décrypter le marché du travail sur les territoires

### A quoi sert l'API Marché du travail ?

L'API fournit toutes les données statistiques essentielles pour bien évaluer la situation de l'emploi sur un territoire. Elle permet de comprendre les tensions sur les métiers, ainsi que la dynamique globale d'un territoire.

### Quelles sont les données disponibles dans l'API ?

L'API Marché du travail données spécifiques de France Travail relatives aux demandeurs et aux offres d'emploi :

- Nombre de demandeurs d'emploi inscrits en fin de trimestre par métier et par compétence
- Nombre de demandeurs d'emploi nouveaux inscrits au cours du trimestre et des 12 derniers mois
- Offres enregistrées au cours du trimestre et des 12 derniers mois par métier, secteur et compétence
- Embauches par métier recherché par les demandeurs d'emploi et par secteur
- Indicateur global de dynamique de l’emploi sur le territoire sélectionné
- Difficultés de recrutement

Cette API intègre un indicateur de dynamisme du territoire. Ce dernier est issu d’une méthode d’Intelligence artificielle prospective qui mesure le dynamisme anticipé de l’évolution des effectifs salariés et des embauches sur le territoire au cours du prochain trimestre.  

L'API intègre également un indicateur de difficulté de recrutement pour les entreprises. Cet indicateur décrit la perspective des métiers, secteurs et compétences en tension selon une gradation allant de très faible à très élevée.

Afin d’indiquer la difficulté de recrutement pour les entreprises, Data Emploi utilise l’indicateur élaboré par la Dares et France Travail pour mesurer les tensions sur le marché du travail. Il s’agit d’estimer, pour un métier donné et sur une zone géographique donnée, la difficulté ou non à recruter.

Pour mieux comprendre les facteurs à l’origine de difficultés éventuelles de recrutement pour les entreprises, France Travail et la Dares ont également élaboré six indicateurs d’éclairage complémentaires qu’il convient d’avoir en tête pour analyse l'indicateur de difficulté :

- l’intensité d’embauches,
- les conditions de travail contraignantes,
- la non-durabilité de l’emploi,
- le manque de main-d’œuvre disponible,
- le lien entre la spécialité de formation et le métier
- l'inadéquation géographique

Ces indicateurs complémentaires visent à qualifier l’origine potentielle des difficultés de recrutement. Ils sont présentés sur une échelle allant de 1 (tendant à réduire le niveau de tension) à 5 (tendant à un fort niveau de tension).

### Informations complémentaires

Les sources sont l'INSEE, l'ACOSS et CCMSA.  

La fréquence de mise à jour de cette API est trimestrielle.
