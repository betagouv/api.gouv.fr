---
title: API Trackdéchets
tagline: Simplifier et fiabiliser la traçabilité des déchets dangereux
external_site: https://trackdechets.beta.gouv.fr/
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      L'API s'adresse aux opérateurs du traitement des déchets.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      L'API est accessible aux administrations dans le cadre de leur mission de gestion des déchets. Vous devez créer un compte sur le site Trackdéchets pour y accéder. 

      <NextSteps />
      <Button href="https://app.trackdechets.beta.gouv.fr/signup">Demander un accès</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Certaines entreprises peuvent utiliser l'API : 
      - les producteur de déchets,
      - les professionnel de la gestion de déchets (collecteurs, installations de tri-transit-regroupement, installation de traitement) 
      - les transporteurs de déchets.
      - les éco-organismes
      - les courtiers et négociants

      <NextSteps />
      <Button href="https://app.trackdechets.beta.gouv.fr/signup">Demander un accès</Button>
partners:
  - DINUM
producer: mtes
keywords:
  - Déchets
  - Tracabilité
  - Risques
  - Dangereux
  - Dématérialisation
  - Ecologie
  - Logistique
  - Bordereaux
  - BSD
contact_link: tech@trackdechets.beta.gouv.fr
doc_tech_external: https://developers.trackdechets.beta.gouv.fr/
themes:
  - Environnement
content_intro: |
  Trackdéchets est un outil numérique qui vise à simplifier et fiabiliser la traçabilité des déchets dangereux. 

  ### A quoi sert l’API Trackdéchets ?

  Le produit Trackdéchets est un outil numérique qui vise à simplifier et fiabiliser la traçabilité des déchets dangereux. Trackdéchets assure un rôle d’interface qui permet le partage d’informations entre les différents acteurs de la chaîne de traçabilité des déchets dangereux.
En intégrant l'API Trackdéchets vous pouvez:
- créer, compléter, modifier, signer et suivre des bordereaux de suivi de déchets (BSD)conformément au cycle de vie réglementaire du BSD
- rechercher des BSD sur lesquels vous auriez les droits
- rechercher et afficher un PDF CERFA du bordereaux de suivi de déchets
- exporter un registre de déchets dangereux incrémenté en temps réel
visits_2019: 2500
last_update: 02/04/2021
---

### Données accessibles dans l'API

L'API Trackdéchets permet d'accéder aux données suivantes (non exhaustif : [voir la liste complète](https://developers.trackdechets.beta.gouv.fr/docs/api-reference))  

| Champ          | Description                            |
| -------------- | -------------------------------------- |
| appendixForms          | Renvoie des BSD candidats à un regroupement dans une annexe 2 |
| siret    | Siret d'un des établissements dont je suis membre   |
| companyInfos	 | informations publiques (extraits de SIRENE et de la base des installations classées pour la protection de l'environnement (ICPE) |
| ecoOrganismes | Renvoie la liste des éco-organismes  |
| wasteCode | Code déchet pour affiner la recherche  |
| forms | Renvoie les BSDs de l'établissement sélectionné  |
| stats | Renvoie des statistiques sur le volume de déchets entrant et sortant |


### En savoir plus

Pour obtenir plus d'informations sur l'API Trackdéchets, [consultez la documentation complète](https://developers.trackdechets.beta.gouv.fr)
