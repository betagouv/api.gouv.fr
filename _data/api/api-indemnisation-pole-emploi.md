---
title: API Indemnisation Pôle emploi
tagline: Connaitre la situation d’indemnisation d’un demandeur d’emploi
is_open: -1 # -1 means API not open
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Vous ne pouvez pas accèder a ces informations.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='france-connected-api' question='indemnisationPe' />
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Vous pouvez accéder à l’API uniquement si vous êtes [partenaire de France Connect](https://franceconnect.gouv.fr/partenaires), et pour un cas d’usage autorisé par la loi. Vous devrez fournir le cadre juridique qui vous autorise à utiliser ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-indemnisation-pole-emploi">Remplir une demande</Button>
datapass_link: https://datapass.api.gouv.fr/api-indemnisation-pole-emploi
producer: pole-emploi
keywords:
  - emploi
  - paiement
  - liste
  - ASS
  - AAH
  - RSA
  - AER
  - ARE
  - ASP
  - RFPE
  - solidarite
  - indemnite
  - montant
  - revenu
  - assurance
  - chômage
  - démarche
  - justificatif
  - demandeur
  - emploi
  - chômeur
  - inscription
  - travail
rate_limiting_resume: 
rate_limiting_description: |
monitoring_link: 
monitoring_description: |
contact_link: https://pole-emploi.io/contact
doc_tech_external: https://pole-emploi.io/data/api/pole-emploi-connect/indemnisations?tabgroup-api=documentation&doc-section=api-doc-section-caracteristiques
themes:
  - Particulier
  - Emploi
visits_2019: 4000
uptime: 
last_update: 09/12/2021
content_intro: |
  Cette API permet à une administration de connaitre les paiements versés par Pôle emploi à un individu inscrit comme demandeur d’emploi depuis sa dernière inscription et qui effectue une démarche après s’être **authentifié au service avec FranceConnect.** 

  ### A quoi sert l’API indemnisation Pôle emploi ?

  Cette API permet, aux administrations, dans le cadre des démarches en ligne qu'elles mettent en œuvre de connaitre la situation d’indemnisation d’un usager demandeur d’emploi.

  Elle permet aux administrations d'accéder à des informations certifiées à la source et ainsi :

  - s’affranchir de demander le téléchargement des pièces justificatives,
  - automatiser le processus de traitement des demandes et de supprimer le contrôle en back-office,
  - d'écarter le risque de fraude documentaire.

  ### Modalités d'accès

  ⚠️ Pour les administrations qui ne proposent pas la connexion via FranceConnect ou pour lesquelles les démarches en ligne sont accessibles également sans FranceConnect, les mêmes données sont **disponibles dans [l'API Particulier](/les-api/api-particulier) (à compter de Mars 2022).**

  Cette API à un intérêt à être mobilisée en complément de l’API Statut demandeur d’emploi qui fait d’ores et déjà partie du bouquet d’API présent dans l’API Particulier et qui permet de savoir si un usager est demandeur d’emploi et de connaitre sa catégorie. La version FranceConnectée de cette API Statut demandeur d’emploi sera disponible à compter de Mars 2022. 

  ### Quel est le périmètre de l'API ?

  Cette API délivre les données d’indemnisation des demandeurs d’emploi toujours inscrits sur les listes de Pôle emploi dans toutes les catégories. 

  Les catégories de situation des demandeurs d’emploi sont les 5 proposées par Pôle emploi: A, B, C, D et E. La répartition permet d'établir une classification selon la disponibilité du demandeur d'emploi.

  <details>
    <summary> Quelles sont les catégories de demandeurs d'emploi ?</summary>
    _Catégories de demandeurs d'emploi :_
    ![Catégories des demandeurs d'emploi](/images/divers/categories-pe.png)
  </details>

---

### Détail sur les données accessibles dans l'API

L'API retourne pour les usagers reconnus comme demandeur d’emploi inscrits la liste des paiements reçus depuis la dernière inscription et ceci par mois et par spécificité de paiement.

| Donnée                                | Description                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Date de paiement                      | Date à laquelle le dernier versement a été fait au demandeur d’emploi                             |
| Montant total perçu                   | Permet d’en connaitre du montant réel perçu par un demandeur d’emploi sur les derniers mois depuis la dernière date connue d’inscription |
| Montant correspondants aux paiements d’allocations | Permet d’en connaitre de la part du montant total lié à une allocation Pôle emploi en situation de recherche ou de formation (ARE, ASP, AER, ASS, RFPE, AFD, RFF, AAP …) |
| Montant correspondant aux paiements d’aide  | Permet d’en connaitre de la part du montant total lié à une aide complémentaire à l’allocation (Aide à la reprise et à la création d’entreprise, Aide à la mobilité, ..)     |
| Montant correspondant à d’autres paiements  | Permet d’en connaitre de la part du montant total lié à d’autres paiements exceptionnels (Prime de Noël, Acompte, Avance, reversement)​  |
