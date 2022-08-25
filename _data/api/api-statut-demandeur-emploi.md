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

    <details>
        <summary> Quelles sont les catégories de demandeurs d'emploi ?</summary>
    Les catégories de situation des demandeurs d’emploi sont les 5 proposées par Pôle emploi: A, B, C, D et E. La répartition permet d'établir une classification selon la disponibilité du demandeur d'emploi.

    - A : Personne sans emploi, tenue d'accomplir des actes positifs de recherche d'emploi, à la recherche d'un emploi quel que soit le type de contrat (CDI,CDD, à temps plein, à temps partiel, temporaire ou saisonnier) ;
    - B : Personne ayant exercé une activité réduite de 78 heures maximum par mois, tenue d'accomplir des actes positifs de recherche d'emploi ;
    - C : Personne ayant exercé une activité réduite de plus de 78 heures par mois, tenue d'accomplir des actes positifs de recherche d'emploi ;
    - D : Personne sans emploi, qui n'est pas immédiatement disponible, et qui n'est pas tenue d'accomplir des actes positifs de recherche d'emploi (demandeur d'emploi en formation, en maladie, etc.) ;
    - E : Personne pourvue d'un emploi, et qui n'est pas tenue d'accomplir des actes positifs de recherche d'emploi.

    </details>

  L’Adresse est celle déclarée par le demandeur lors de son inscription ou suite à une déclaration de changement d’adresse.
---

### Détail sur les données accessibles dans l'API

L'API retourne pour les usagers reconnus comme demandeur d’emploi inscrits la liste des paiements reçus depuis la dernière inscription et ceci par mois et par spécificité de paiement.

| Donnée                       | Description                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| Données de contact           | e-mail, téléphone                                                                                  |
| Adresse                      | Adresse du domicile déclaré par le demandeur                                                       |
| Inscription                  | Date d’inscription, date de cessation inscription, catégorie d’inscription                         |
