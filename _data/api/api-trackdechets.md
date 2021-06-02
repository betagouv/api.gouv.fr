---
title: API Tracabilité des déchets dangereux - Trackdéchets
tagline: Traçer les déchets dangereux grâce aux Bordereaux de Suivi de Déchets (BSD)
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
rate_limiting_resume: 1000 appels / minute
rate_limiting_description: |
  Pour des raisons de sécurité, le nombre de requêtes par adresse IP est limitée à 1000 par minute. Passé cette limite, les requêtes aboutiront avec un status 429 (Too Many Requests).
uptime: 100
monitoring_link: https://status.trackdechets.beta.gouv.fr/
monitoring_description: |
  Une supervision du service en temps réel est disponible à cette adresse.
content_intro: |
  Trackdéchets vise à simplifier et fiabiliser la traçabilité des déchets dangereux en facilitant la recherche et la gestion des Bordereaux de Suivi de Déchets (BSD).

  ### A quoi sert l’API Trackdéchets ?

  Grâce a l'API de Trackdéchets, les différents acteurs de la chaîne de traçabilité des déchets dangereux peuvent :

  - créer, compléter, modifier, signer et suivre des bordereaux de suivi de déchets (BSD) conformément au cycle de vie réglementaire
  - rechercher des Bordereaux de Suivi de Déchets (BSD) sur lesquels ils ont des droits
  - rechercher et afficher un PDF CERFA du Bordereaux de Suivi de Déchets (BSD)
  - exporter un registre de déchets dangereux incrémenté en temps réel
visits_2019: 2500
last_update: 02/04/2021
---

### Données accessibles dans l'API

Parmi les principales données, ont peut citer :

| Champ         | Description                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| forms         | Retourne la liste des BSDs où figure une entreprise donnée, sous conditions d’avoir les droits d’accès                                         |
| companyInfos  | Informations publiques d’une entrerprise donnée (récépissé transporteur, liste des agréments d’un éco-organisme, informations de contact, etc. |
| ecoOrganismes | Retourne la liste des éco-organismes agréés pour la collecte de certains types de déchets.                                                     |

Vous pouvez consulter la [liste complète](https://developers.trackdechets.beta.gouv.fr/docs/api-reference)).

### En savoir plus

Pour obtenir plus d'informations sur l'API Trackdéchets, [consultez la documentation complète](https://developers.trackdechets.beta.gouv.fr)
