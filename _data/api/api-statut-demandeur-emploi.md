---
title: API statut demandeur d'emploi
tagline: Vérifier si une personne a le statut de demandeur d'emploi sans lui demander de justificatif
is_open: -1 # -1 means API not open
is_france_connected: 1
access_page:
  - who:
      - Un particulier
      - Un demandeur d'emploi
    is_eligible: -1
    description: |
      Ces informations sont résevées aux administrations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='france-connected-api' question='statutDe' />
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Vous pouvez accéder à l’API uniquement si vous êtes [partenaire de France Connect](https://franceconnect.gouv.fr/partenaires), et pour un cas d’usage autorisé par la loi. Vous devrez fournir le cadre juridique qui vous autorise à utiliser ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-statut-demandeur-emploi">Remplir une demande</Button>
datapass_link: https://datapass.api.gouv.fr/api-statut-demandeur-emploi
producer: pole-emploi
keywords:
  - emploi
  - solidarite
  - chômage
  - démarche
  - justificatif
  - demandeur
  - emploi
  - chômeur
  - social
  - inscription
  - travail
  - catégorie
rate_limiting_resume: 
rate_limiting_description: |
monitoring_link: 
monitoring_description: |
contact_link: https://pole-emploi.io/contact
doc_tech_external: https://api.gouv.fr/guides/documentation-api-statut-pole-emploi
themes:
  - Particulier
  - Emploi
visits_2019: 4000
uptime: 
last_update: 25/08/2022
content_intro: |
  Cette API permet à une administration de vérifier si un individu **authentifié au service avec FranceConnect** est inscrit comme demandeur d’emploi. 

  ### A quoi sert l’API statut demandeur d'emploi ?

  Cette API permet, aux administrations, dans le cadre des démarches en ligne qu'elles mettent en œuvre de savoir si un usager a le statut de demandeur d’emploi.

  Elle permet aux administrations d'accéder à des informations certifiées à la source et ainsi :

  - s’affranchir de demander le téléchargement des pièces justificatives,
  - automatiser le processus de traitement des demandes et de supprimer le contrôle en back-office,
  - d'écarter le risque de fraude documentaire.

  ### Modalités d'accès

  ⚠️ Pour les administrations qui ne proposent pas la connexion via FranceConnect ou pour lesquelles les démarches en ligne sont accessibles également sans FranceConnect, les mêmes données sont **disponibles dans [l'API Particulier](/les-api/api-particulier)**

  ### Quel est le périmètre de l'API ?

  Sont disponibles les données des demandeurs d’emploi inscrits ou ayant été inscrits à Pôle emploi depuis 2010, date d’inscription et de cessation d’inscription le cas échéant.

   

  L’Adresse est celle déclarée par le demandeur lors de son inscription ou suite à une déclaration de changement d’adresse.
---

### Détail sur les données accessibles dans l'API

<details>
  <summary>Paramètres à renseigner par l'utilisateur</summary>

Non applicable : identité pivot France Connect

</details>

<p>

<details>
  <summary>Liste des données</summary>

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Identité                     | Nom, prénom, civilité, date de naissance                                                           |
| Données de contact           | e-mail, téléphone                                                                                  |
| Adresse                      |                                                                                                    |
| Inscription                  | Date d’inscription, date de cessation inscription, catégorie d’inscription                         |

</details>

<p>

<details>
  <summary>Précisions sur les données</summary>
Sont disponibles les données des demandeurs d’emploi inscrits ou
ayant été inscrits à Pôle emploi depuis 2010, date d’inscription et de
cessation d’inscription le cas échéant.


L’Adresse est celle déclarée par le demandeur lors de son inscription ou suite à une déclaration de changement d’adresse.
L’API devrait inclure d’ici fin 2021 des données relatives à l’indemnisation des demandeurs d’emploi.

**Quelles sont les catégories de demandeurs d'emploi ?**

  | Catégorie                    | Description                                                                                        |
  | ---------------------------- | -------------------------------------------------------------------------------------------------- |
  | 1           | Personnes sans emploi, immédiatement disponibles au sens de l'article R. 311-3-3 (article R.5411-9 du CT), tenues d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi à durée indéterminée à plein temps                                                                                  |
  | 2          | Personnes sans emploi, immédiatement disponibles au sens de l'article R. 311-3-3 (article R.5411-9 du CT), tenues d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi à durée indéterminée à temps partiel               |
  | 3          | Personnes sans emploi, immédiatement disponibles au sens de l'article R. 311-3-3 (article R.5411-9 du CT), tenues d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi à durée déterminée temporaire ou saisonnier, y compris de très courte durée      |
  | 4          | Personnes sans emploi, non immédiatement disponibles, à la recherche d'un emploi      |
  | 5          | Personnes pourvues d'un emploi, à la recherche d'un autre emploi    |
  | 6          | Personnes non immédiatement disponibles au sens de l'article R. 311-3-3 (1°) (article R.5411-10 1°) du CT) à la recherche d'un autre emploi, à durée indéterminée à plein temps, tenues d'accomplir des actes positifs de recherche d'emploi |
  | 7          | Personnes non immédiatement disponibles au sens de l'article R. 311-3-3 (1°) (article R.5411-10 1°) du CT) à la recherche d'un autre emploi, à durée indéterminée à temps partiel, tenues d'accomplir des actes positifs de recherche d'emploi      |
  | 8          | Personnes non immédiatement disponibles au sens de l'article R. 311-3-3 (1°) (article R.5411-10 1°) du CT) à la recherche d'un autre emploi, à durée déterminée, temporaire ou saisonnier, y compris de très courte durée, tenues d'accomplir des actes positifs de recherche d'emploi      |

</details>
