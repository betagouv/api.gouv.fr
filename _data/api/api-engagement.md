---
title: API Engagement
tagline: Accéder aux missions de bénévolat et de volontariat partout en France
external_site: https://api-engagement.beta.gouv.fr/
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et certaines sociétés sont habilitées à publier leurs annonces sur l'API Engagement.
      En revanche, il vous est possible de consulter les annonces sur [JeVeuxAider.gouv.fr](https://www.jeveuxaider.gouv.fr/) ou [le portail Service Civique](https://www.service-civique.gouv.fr/jeunes-volontaires/?gclsrc=aw.ds)

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous êtes une collectivité ou une administration, vous pouvez remplir une demande d’habilitation à l’API Engagement vous-même pour l'entité que vous représentez.

      C'est cette demande d'habilitation qui vous permet à la fois de poster des annonces, ou de diffuser un flux d'annonces.

      <NextSteps />
      <Button href="https://doc.api-engagement.beta.gouv.fr/getting-started/create-your-account">Demander un accès</Button>
  - who:
      - Une entreprise
    is_eligible: 1
    description: |
      Les entreprises peuvent publier des annonces et les diffuser via l'API Engagement.

      <NextSteps />
      <Button href="https://doc.api-engagement.beta.gouv.fr/getting-started/create-your-account">Demander un accès</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 1
    description: |
      Les éditeurs de logiciels peuvent publier des annonces et les diffuser via l'API Engagement.

      <NextSteps is_editeur />
      <Button href="https://doc.api-engagement.beta.gouv.fr/getting-started/create-your-account">Demander un accès</Button>
partners:
  - DINUM
producer: menj
keywords:
  - Engagement
  - Annonce
  - Civique
  - Offres
  - Volontariat
  - Bénévolat
  - Associations
contact_link: contact@api-engagement.beta.gouv.fr
doc_tech_external: https://doc.api-engagement.beta.gouv.fr/
themes:
  - Emploi
content_intro: |
  L'API Engagement permet aux organisations de publier et diffuser des annonces de bénévolat et de volontariat.

  ### A quoi sert l’API Engagement ?

  L’API Engagement facilite la diffusion des missions de bénévolat et de volontariat partout en France. C’est un service public numérique gratuit qui permet aux plateformes d’engagement publiques et privées de mettre en commun leurs missions. L'API permet ainsi d'augmenter la visibilité des annonces et le taux d’occupation des places offertes aux potentiels bénévoles et volontaires.

  Concrètement, chaque plateforme peut intégrer l’API pour diffuser ses missions vers les autres plateformes partenaires d'une part, et récupérer les missions disponibles sur les autres plateformes selon des critères spécifiques comme la localisation, le domaine d’action, etc. Le tableau de bord de l’API permet à chaque partenaire de configurer les flux de missions entrant/sortant et de mesurer la contribution de chaque plateforme en missions et en trafic.
visits_2019: 2000
last_update: 25/03/2021
---

### Données accessibles dans l'API

L'API Engagement permet de publier les données suivantes pour chaque annonce :

Les champs requis :

| Champ          | Description                            |
| -------------- | -------------------------------------- |
| title          | Titre de votre mission                 |
| description    | La description de votre mission        |
| clientId       | L'identifiant interne de votre mission |
| applicationUrl | L'url vers votre annonce               |

Les champs générés par l'API :

L'api génère automatiquement les champs suivant :

- publisherId :
- publisherName
- publisherLogo
- publisherUrl :
- statusCode ( ACCEPTED OR REFUSED )
- statusComment : Un commentaire sur le pourquoi la mission a été refusée
- createdAt : La date de creation de la mission
- updatedAt : La date de la dernière mise a jour de la mission

Les champs optionnels

| Champ                     | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| organizationUrl           | L'url de l'organisation qui cherche un bénévole                                     |
| organizationId            | ID unique de l'organisation qui la distingue des autres organisations de votre flux |
| organizationFullAddress   | L'adresse complete de l'organisation                                                |
| organizationType          | Association type ( 1901, 1905, ou autre)                                            |
| organizationDescription   | Description de l'organisation                                                       |
| postedAt                  | Date a laquelle la mission a été postée                                             |
| startAt                   | Date de début de la mission                                                         |
| endAt                     | Date de fin de la mission                                                           |
| adresse                   | Adresse de la mission.                                                              |
| postalCode                | Code postale de la mission                                                          |
| departmentName            | Nom du département de la mission                                                    |
| departmentCode            | Code du département (ex : 84)                                                       |
| reducedMobilityAccessible | Is accessible to mobility reduced people                                            |
| openToMinors              | Is available for 16+ years old                                                      |
| city                      | Ville de la mission                                                                 |
| region                    | Région de la mission                                                                |
| region                    | Pays de la mission. Valeur par défaut : France                                      |
| region                    | Longitude et latitude de la mission                                                 |
| country                   | L'url vers votre annonce                                                            |
| location                  | L'url vers votre annonce                                                            |
| places                    | Nombre de places restantes non attribuées : Valeur par défaut :1                    |
| domain                    | Domaine de la mission.                                                              |
| activity                  | l'activité faite lors de la mission                                                 |
| remote                    | Si la mission est en présentiel, a distance ou flexible ( no, possible, full )      |

### En savoir plus

Pour obtenir plus d'informations sur l'API Engagement, [contactez l’équipe](mailto:contact@api-engagement.beta.gouv.fr)
