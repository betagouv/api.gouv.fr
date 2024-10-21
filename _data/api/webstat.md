---
title: Webstat # nom commercial de l'API
tagline: Accédez aux séries économiques de la Banque de France # une phrase maximum
producer: banque-de-france
is_open: 0 # -1 means API not open
account_link: https://webstat.banque-france.fr/signup/ # URL d'une page de demande d'habilitation si l'API est à accès restreint
partners: # liste de co-producteurs de l'API
  - BCE (ECB)
  - FMI (IMF)
keywords: # utilisés pour la recherche
  - banque de france
  - crédit
  - monnaie
  - épargne
  - comptes nationaux financiers
  - balance des paiements
  - conjoncture
  - entreprises
rate_limiting_resume: 5 appels / seconde / jeton
rate_limiting_description: |
  L'API est disponible à hauteur de 5 appels par secondes et par jetons d'accès.
contact_link: support-technique-webstat@banque-france.fr
doc_tech_external: https://webstat.banque-france.fr/fr/pages/guide-migration-api/
themes:
  - Administration & législation
visits_2019: 8
last_update: 20/12/2019
---

[Webstat](http://webstat.banque-france.fr/fr/) est le portail statistique de la Banque de France. L'[API Webstat](https://webstat.banque-france.fr/fr/pages/guide-migration-api/) permet d'accéder à plus de 40.000 séries statistiques de la Banque de France et de ses partenaires institutionnels. Obtenez simplement les données économiques et financières sur les entreprises françaises, la conjoncture régionale, le crédit et l'épargne, la monnaie ou la balance des paiements.
Principales fonctionnalités:

- catalogue des jeux de données et des séries
- téléchargement des données et métadonnées disponibles sur le portail
- nombreuses possibilités de filtrage
- formats JSON, XLSX ou CSV
