---
title: API La Bonne Boite # nom commercial de l'API
tagline: Accédez aux taux de retour à l'emploi par formation  # une phrase maximum
owner: Pôle Emploi  # producteur de l'API
contract: OUVERT sous contrat  # peut être "OUVERT" ou "OUVERT sous contrat"
logo: https://labonneboite.pole-emploi.fr/static/images/logo-lbb.svg  # URL d'un logo de l'API
openapi_definition: # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
contact:  contact@emploi-store-dev.fr #moyen de contact, soit un mail, soit un lien vers formulaire de contact
doc_tech: https://www.emploi-store-dev.fr/portail-developpeur-cms/home/catalogue-des-api/documentation-des-api/api-la-bonne-boite-v1.html  # URL de la documentation technique de l'API au format HTML
access_link: https://www.emploi-store-dev.fr/portail-developpeur/detailapicatalogue/labonneboite  # URL d'une page de demande d'accès si l'API est à accès restreint
stat:
  url: https://www.emploi-store-dev.fr/portail-developpeur-cms/stats  # adresse à laquelle un nombre d'appels à l'API est publié, en content-type application/json
  label: Appels  # description d'un appel à l'API
  lastXdays: 30  # nombre de jours sur lequel les appels à l'API sont comptabilisés
clients:  # types d'entités habilitées à utiliser l'API
  - particuliers  # texte libre en minuscules
  - entreprises  # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
partners:  # liste de co-producteurs de l'API
  - Pôle emploi
  - La Bonne Boite
  # texte libre
keywords: # utilisé dans la recherche
  - Pôle emploi
  - Travail
  - Emploi
  - La Bonne Boite
  - Embauche
  - Entreprise
  - Recrutement
---

## Description de l'API

La Bonne Boite cible les entreprises ayant des perspectives d'embauche élevées et permet d’être plus efficace dans l’envoi de candidatures spontanées. Ce ciblage est obtenu par l'analyse de millions de recrutements sur toutes les entreprises françaises. L’API La Bonne Boite permet de récupérer la liste des entreprises classées par potentiel d'embauche pour un métier (code ROME) et/ou activité (code NAF) donné, pour une localisation donnée.

Vous découvrirez des formats de fichiers supplémentaires, des outils de visualisation et d'autres  API liées à l'emploi sur https://www.emploi-store-dev.fr/
