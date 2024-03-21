---
title: API Indemnisation France Travail
tagline: Accédez au type de ressources perçues par un utilisateur inscrit sur le site de France Travail.
is_open: -1 # -1 means API not open
is_france_connected: 1
access_page:
  - who:
      - Un particulier
      - Un demandeur d'emploi
    is_eligible: -1
    description: |
      L’usage de cette API est **uniquement reservé aux acteurs publics**. En tant que particulier, vous ne pouvez pas y accéder.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Une administration
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='is_bouquet_api_parteprise' question='indemnisationPe' />
  - who:
      - Une entreprise ou une association
    is_eligible: 0
    description: |
      Vous pouvez accéder à l’API uniquement si vous êtes [partenaire de France Connect](https://franceconnect.gouv.fr/partenaires), et pour un cas d’usage autorisé par la loi. Vous devrez fournir le cadre juridique qui vous autorise à utiliser ces données.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/api-indemnisation-pole-emploi">Remplir une demande</Button>
datapass_link: https://datapass.api.gouv.fr/api-indemnisation-pole-emploi
producer: france-travail
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
  - social
  - inscription
  - travail
rate_limiting_resume: 
rate_limiting_description: |
monitoring_link: 
monitoring_description: |
contact_link: https://francetravail.io/contact
doc_tech_external: https://api.gouv.fr/guides/documentation-api-indemnisation
themes:
  - Particulier
  - Emploi
visits_2019: 4000
uptime: 
last_update: 25/08/2022
content_intro: |
  Cette API permet à une administration de connaitre les paiements versés par France Travail à un individu inscrit comme demandeur d’emploi depuis sa dernière inscription et qui effectue une démarche après s’être **authentifié au service avec FranceConnect.** 

  ### A quoi sert l’API indemnisation France Travail ?

  Cette API permet, aux administrations, dans le cadre des démarches en ligne qu'elles mettent en œuvre de connaitre la situation d’indemnisation d’ un usager demandeur d’emploi par type de paiement et par mois depuis sa dernière inscription à France Travail.

  Elle permet aux administrations d'accéder à des informations certifiées à la source et ainsi :

  - s’affranchir de demander le téléchargement des pièces justificatives,
  - automatiser le processus de traitement des demandes et de supprimer le contrôle en back-office,
  - d'écarter le risque de fraude documentaire.

  ### Modalités d'accès

  ⚠️ Pour les administrations qui ne proposent pas la connexion via FranceConnect ou pour lesquelles les démarches en ligne sont accessibles également sans FranceConnect, les mêmes données sont **disponibles dans [l'API Particulier](/les-api/api-particulier) dont vous pouvez lire <External href="https://particulier.api.gouv.fr/catalogue/pole_emploi/indemnites">la documentation sur le site dédié</External>.**

  Cette API à un intérêt à être mobilisée en complément de [l'API statut demandeur d'emploi, version FranceConnectée](/les-api/api-statut-demandeur-emploi). 

  ### Quel est le périmètre de l'API ?

  Cette API délivre les données d’indemnisation des demandeurs d’emploi toujours inscrits sur les listes de France Travail dans toutes les catégories. 

---

### Détail sur les données accessibles dans l'API

<details>
<summary>Paramètres d'appel</summary>
Non applicable : identité pivot France Connect
</details>
<br>
<details>
<summary>Liste des données</summary>
| Donnée                                | Description                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Date de paiement                      | Date à laquelle le dernier versement a été fait au demandeur d’emploi                             |
| Montant total perçu                   | Permet d’en connaitre du montant réel perçu par un demandeur d’emploi sur les derniers mois depuis la dernière date connue d’inscription |
| Montant correspondants aux paiements d’allocations | Permet d’en connaitre de la part du montant total lié à une allocation France Travail en situation de recherche ou de formation (ARE, ASP, AER, ASS, RFPE, AFD, RFF, AAP …) |
| Montant correspondant aux paiements d’aide  | Permet d’en connaitre de la part du montant total lié à une aide complémentaire à l’allocation (Aide à la reprise et à la création d’entreprise, Aide à la mobilité, ..)     |
| Montant correspondant à d’autres paiements  | Permet d’en connaitre de la part du montant total lié à d’autres paiements exceptionnels (Prime de Noël, Acompte, Avance, reversement)​  |
</details>
<br>
<details>
<summary>Précisions sur les donnéesl</summary>
L'API retourne pour les usagers reconnus comme demandeur d’emploi inscrits la liste des paiements reçus depuis la dernière inscription et ceci par mois et par spécificité de paiement.
</details>

