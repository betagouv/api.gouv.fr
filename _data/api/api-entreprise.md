---
title: API Entreprise
tagline: Accédez aux données et aux documents administratifs des entreprises et des associations, afin de simplifier leurs démarches
external_site: https://entreprise.api.gouv.fr/
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/api-entreprise
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et certaines sociétés sont habilitées à utiliser API Entreprise.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous êtes une collectivité ou une administration, vous pouvez remplir une demande d’accès à l’API Entreprise vous-même pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner le cadre juridique (un texte ou délibération/décision)** qui légitime l'entité pour laquelle vous opérez à recevoir ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Seule les **sociétés chargées d’une mission de service public** sont éligibles.

      Lors de votre demande vous devrez **justifier** dans quelle mesure vous rentrez dans ce cadre juridique.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-entreprise">Remplir une demande</Button>
  - who:
      - Un éditeur de logiciel
    is_eligible: 0
    description: |
      Si vous êtes **éditeur de logiciels** et agissez pour le compte d'une administration ou d'une collectivité, vous pouvez remplir vous même une demande d'accès à l'API entreprise pour l'entité que vous représentez.

      Lors de votre demande vous devrez **renseigner le cadre juridique (un texte ou délibération/décision)** qui légitime  l'entité pour laquelle vous opérez à recevoir ces données.

      <NextSteps is_editeur />
      <Button href="https://datapass.api.gouv.fr/api-entreprise">Remplir une demande</Button>
stat:
  lastXdays: 30
  url: https://dashboard.entreprise.api.gouv.fr/api/watchdoge/stats/last_30_days_usage
  label: informations non redemandées aux entreprises
partners:
  - acoss
  - DGFiP
  - CNETP
  - INSEE
  - INFOGREFFE
  - FNTP
  - MSA
  - OPQIBI
  - PRO BTP
  - QUALIBAT
  - Ministère intérieur
  - INPI
  - AGEFIPH
  - Banque de france
  - ADEME
producer: dinum
keywords:
  - Établissement
  - Entreprise
  - Certification
rate_limiting_resume: 2000 appels / 10 minutes / IP
rate_limiting_description: |
  Actuellement, le nombre d’appels aux API Entreprise est limité à 2000 requêtes tranche de 10 minutes par IP. Au delà, l’adresse IP est bannie de nos serveurs, et ces derniers ne répondent alors simplement pas. Si vous pensez être dans cette situation, vous pouvez nous contacter à support@entreprise.api.gouv.fr.
monitoring_link: https://dashboard.entreprise.api.gouv.fr
contact_link: support@entreprise.api.gouv.fr
doc_tech_link: /api/v1/proxy/https%3A%2F%2Fentreprise.api.gouv.fr%2Fv2%2Fopen-api.yml
doc_tech_external: https://entreprise.api.gouv.fr/catalogue/
themes:
  - Entreprise
visits_2019: 12610
last_update: 14/09/2020
content_intro: |
  API Entreprise permet à une administration d'accéder aux données et aux documents administratifs des entreprises et des associations, afin de simplifier leurs démarches.

  ### A quoi sert l’API Entreprise ?

  L'API s'utilise principalement de deux manières :

  - le pré-remplissage de formulaire à destination des entreprises ou des associations
  - la récupération d'une donnée ou d'un document en back office par un agent

  L’API permet - entre autre - de :

  - faciliter la candidature d'une entreprise a un marché public
  - faciliter le dépôt d'un dossier de candidature à une aide publique par une entreprise
---

### Données accessibles dans l'API

L'API Entreprise permet d'accéder simplement aux données de multiples administrations.

Les données générales :

| Donnée                                                                                | Administration                            |
| ------------------------------------------------------------------------------------- | ----------------------------------------- |
| Les informations générales, géographiques et juridiques                               | INSEE                                     |
| Extrait du Registre du Commerce et des Sociétés (RCS)                                 | INFOGREFFE                                |
| Les statuts, la liste des représentants ou encore les délibérations d'une association | Ministère intérieur                       |
| Les actes et statuts des personnes morales et physiques                               | INPI                                      |
| Les conventions collectives                                                           | Fabrique Numérique des Ministères Sociaux |

Les données financières :

| Donnée                                          | Administration   |
| ----------------------------------------------- | ---------------- |
| Le chiffre d'affaire                            | DGFiP            |
| La déclarations de résultat (ou liasse fiscale) | DGFiP            |
| Les 3 derniers bilans annuels                   | Banque de france |
| Les comptes annuels                             | INPI             |

Les attestations sociales et fiscales :

| Donnée                                                         | Administration |
| -------------------------------------------------------------- | -------------- |
| L'attestation fiscale                                          | DGFiP          |
| L'attestation de vigilance                                     | ACOSS          |
| L'attestation de conformité emploi des travailleurs handicapés | AGEFIPH        |
| Les cotisations de sécurité sociale agricole                   | MSA            |
| Les cotisations retraite bâtiment                              | PRO BTP        |
| La carte professionnelle travaux publics                       | FNTP           |
| Les cotisations congés payés & chômage intempéries             | CNETP          |

Les certifications professionnelles :

| Donnée                                                   | Administration |
| -------------------------------------------------------- | -------------- |
| La certification de qualification d'ingénierie           | OPQIBI         |
| Le certificat de qualification bâtiment                  | QUALIBAT       |
| La certification RGE (Reconnu garant de l'environnement) | ADEME          |

La propriété intellectuelle :

| Donnée                                  | Administration |
| --------------------------------------- | -------------- |
| Les brevets, modèles et marques déposés | INPI           |

**NB**: Pour en savoir plus, n'hésitez pas à consulter le <External href='https://entreprise.api.gouv.fr/catalogue/'>catalogue des données disponibles dans l’API Entreprise</External>

**NB**: Certaines données sont accessibles en open data (sans demande d'accès à l'API) via leur propre API et ne nécessitent pas de passer par API Entreprise. C'est notamment le cas de :

- les [données de l'INPI](/les-api/api-rncs)
- les [données de l'ADEME](/les-api/api_professionnels_rge)
- les [données du RNA](/les-api/api_rna)
- les [données de l'INSEE](/guides/quelle-api-sirene) (à l'exception des entreprises <External href="https://www.insee.fr/fr/information/4127417">non-diffusibles</External>)

### En savoir plus

L’<External href="https://entreprise.api.gouv.fr/">API Entreprise</External> est une composante de l’État plateforme, l’accès à l’API Entreprise est modérée et régulée par la DINUM, qui attribue à chaque client des autorisations de récupération d’informations selon la nature des démarches à traiter (Marchés publics, aides publiques,…).
