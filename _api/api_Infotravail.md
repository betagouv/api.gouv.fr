---
title: Infotravail # nom commercial de l'API
tagline: Recense des jeux de données liés au marché du travail # une phrase maximum
owner: Pôle Emploi  # producteur de l'API
category: Public  # type de donnée exposée, voir api_category dans le fichier _config.yml
contract: OUVERT sous contrat  # peut être "OUVERT" ou "OUVERT sous contrat"
contact:  support@emploi-store-dev.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
doc_tech: https://www.emploi-store-dev.fr/portail-developpeur-cms/home/catalogue-des-api/documentation-des-api/api-infotravail-v1.html # URL de la documentation technique de l'API au format HTML
access_link: https://www.emploi-store-dev.fr/portail-developpeur/detailapicatalogue/57909ba23b2b8d019ee6cc5e # URL d'une page de demande d'accès si l'API est à accès restreint
stat:
  url: https://www.emploi-store-dev.fr/portail-developpeur-cms/stats # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label: Appels  # description d'un appel à l'API
  lastXdays: 8109  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
partners:  # liste de co-producteurs de l'API
  - Pôle Emploi  # texte libre
keywords: # utilisé dans la recherche
  - Travail  # texte libre
  - Marché du travail
  - référentiel
  - Offres 
---

## Description de l'API

L’API Infotravail recense les jeux de données suivants :

- **Informations sur le marché du travail** :
Données sur les recrutements, statistiques sur les offres et la demande d’emploi

- **Offres d’emploi Pôle emploi** : 
Offres d'emploi anonymisées, déposées à Pôle emploi par des recruteurs

- **Référentiel des agences Pôle emploi** :
Localisation, coordonnées (adresse, téléphone, mail), type d’agence (généraliste, cadre, spectacle), horaires d’ouverture

- **Enquête Besoins en Main d’Œuvre (BMO)** :
Projets de recrutement, difficulté de recrutement et saisonnalité des recrutements par ROME et par secteur d’activité

- **Répertoire Opérationnel des Métiers et des Emplois** :
Appellations, définition, accès à l’emploi, conditions d’exercice de l’activité, activités et compétences de base, activités et compétences spécifiques, environnements de travail, mobilité professionnelle

- **Statistiques sur le marché du travail** :
Données statistiques sur la demande d’emploi

Plus d'information sur [l'Emploi Store Développeur](https://www.emploi-store-dev.fr/portail-developpeur-cms/home.html)
