---
title: Offres d'emploi # nom commercial de l'API
tagline: Restitué en temps réel les offres d'emploi actives déposées à Pôle emploi  # une phrase maximum
owner: Pôle Emploi  # producteur de l'API
category: Public  # type de donnée exposée, voir api_category dans le fichier _config.yml
contract: OUVERT sous contrat  # peut être "OUVERT" ou "OUVERT sous contrat"
contact:  support@emploi-store-dev.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
doc_tech: https://www.emploi-store-dev.fr/portail-developpeur-cms/home/catalogue-des-api/documentation-des-api/api-offres-demploi-v1.html # URL de la documentation technique de l'API au format HTML
access_link: https://www.emploi-store-dev.fr/portail-developpeur/detailapicatalogue/59438edb243a5f952c5d9e8c  # URL d'une page de demande d'accès si l'API est à accès restreint
stat:
  url: https://www.emploi-store-dev.fr/portail-developpeur-cms/stats # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label: Appels  # description d'un appel à l'API
  lastXdays: 440 169  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
partners:  # liste de co-producteurs de l'API
  - Pôle Emploi  # texte libre
keywords: # utilisé dans la recherche
  - Offres # texte libre
---

## Description de l'API

L'API Offres d'emploi restitue en temps réel les offres d'emploi actives déposées à Pôle emploi. Elle vous permet de développer des solutions personnalisées de recherche d'emploi pour votre site ou votre application.

Deux ressources sont exposées pour :

- rechercher une offre à partir d'une combinaison de critères (géographique, métier, langue, etc.) et récupérer une liste de résultats paginée,
- consulter le détail d'une offre à partir de son identifiant.
