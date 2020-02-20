---
title: Webstat # nom commercial de l'API
tagline: Accédez aux séries économiques de la Banque de France # une phrase maximum
owner: Banque de France # producteur de l'API
logo: webstat.png # FILENAME d'un logo de l'API
clients: # types d'entités habilitées à utiliser l'API
  - particuliers # texte libre en minuscules
  - entreprises # ajoutez ou supprimez des types d'entités
  - collectivités
  - ministères
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
themes: 
  - Administration & législation
score:
  detail:
    access:
      description: OUVERT sous contrat
      link: https://developer.webstat.banque-france.fr/user/register # URL d'une page de demande d'accès si l'API est à accès restreint
    rate_limiting:
      description: |
        <p>L'API est disponible à hauteur de 5 appels par secondes et par jetons d'accès.</p>
    contact:
      link: https://developer.webstat.banque-france.fr/contact #moyen de contact, soit un mail, soit un lien vers formulaire de contact
    doc_tech:
      link: https://developer.webstat.banque-france.fr/ibm_apim/swaggerjson/d2Vic3RhdC1iYW5xdWUtZGUtZnJhbmNlLWZyX3YxOjEuMC4wXzQ3MDE%2C # URL de la documentation au format OpenAPI <https://github.com/OAI/OpenAPI-Specification>
visits_2019: 8
last_update: 20/12/2019
---

[Webstat](http://webstat.banque-france.fr/fr/) est le portail statistique de la Banque de France. L'[API Webstat](https://developer.webstat.banque-france.fr) permet d'accéder à plus de 35.000 séries statistiques de la Banque de France et de ses partenaires institutionnels. Obtenez simplement les données économiques et financières sur les entreprises françaises, la conjoncture régionale, le crédit et l'épargne, la monnaie ou la balance des paiements.
Principales fonctionnalités:

- catalogue des jeux de données et des séries
- téléchargement des données et métadonnées disponibles sur le portail
- nombreuses possibilités de filtrage
- formats JSON, XML ou CSV
