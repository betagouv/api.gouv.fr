---
title: FranceConnect et les API FranceConnectées
tagline: Identifier les utilisateurs de votre site internet et accéder à certaines données d'identité certifiées. Accéder à des données supplémentaires via les API FranceConnectées
external_site: https://franceconnect.gouv.fr/partenaires
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/franceconnect
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et les entreprises sont habilitées à utiliser l'API FranceConnect ou intégrer le bouton FranceConnect.

      Si vous cherchez à contacter l'équipe FranceConnect, vous pouvez écrire à [support@franceconnect.gouv.fr](mailto:support@franceconnect.gouv.fr)

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Si vous avez vérifié [votre éligibilité](https://franceconnect.gouv.fr/partenaires), vous pouvez demander à [intégrer le bouton FranceConnect](https://datapass.api.gouv.fr/franceconnect).

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/franceconnect">Remplir une demande</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous souhaitez intégrer le bouton FranceConnect, [faites votre demande d’accès](https://datapass.api.gouv.fr/franceconnect).

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/franceconnect">Remplir une demande</Button>
partners:
  - DGFiP
  - Ameli
  - La Poste
  - MobileConnect & Moi
  - MSA
producer: dinum
keywords:
  - Authentification
  - Identification
  - SSO
  - CSS
  - RSA
  - Etudiant
  - DGfiP
  - Prestations sociales
  - Chômage
  - CNAM
  - MESRI
  - Boursier
themes:
  - Particulier
contact_link: support.partenaires@franceconnect.gouv.fr
doc_tech_external: https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service
visits_2019: 5000
uptime: 99.893 # https://uptimerobot.com/dashboard.php#778110642
last_update: 10/12/2019
---

L‘API FranceConnect permet à des administrations, des collectivités ou des entreprises d’ajouter un bouton FranceConnect, pour recueillir des données d’identité fiables et ainsi identifier les utilisateurs de leur service en ligne (en vue d’une entrée en relation ou connexion).

### A quoi ca sert ?

Premièrement, à intégrer le fédérateur d’identité FranceConnect, afin de recueillir des données d’identité vérifiées de vos utilisateurs en vue :

- D’une entrée en relation 100% dématérialisée et 100% sécurisée
- D’une connexion sans identifiant et mot de passe dédié à votre service

Deuxièmement, à accéder à des données supplémentaires grâce aux [API “FranceConnectées” DGFIP, CNAM, SIV...](#api-franceconnectees)

### Les données disponibles via l'API

| API       | Description                                         |Administration   |
| --------- | ----------------------------------------------------|-----------------|
| [API Impôt particulier](https://api.gouv.fr/les-api/impot-particulier)  | Revenus déclarés auprès de l'administration fiscale |DGFiP   |
| [API Indemnités Journalières](https://api.gouv.fr/les-api/api-indemnites-journalieres-cnam)   | Montant des indemnités journalières de l'Assurance Maladie payé à un assuré sur une période|CNAM |
| [API de droits à l'Assurance Maladie](https://api.gouv.fr/les-api/api_ameli_droits_cnam) | Droits d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie |CNAM   |
| [API Statut étudiant](https://api.gouv.fr/les-api/api-statut-etudiant)| Statut de l’nscription dans un établissement de l’enseignment suprérieur |MESRI   |
| [API Statut étudiant boursier](https://api.gouv.fr/les-api/api-statut-etudiant-boursier)                     | Statut d’étudiant boursier  |CNOUS / MESRI            |
| API Prestations sociales (bientôt disponible)    | Inscription au RSA, bénéficiaires de la CSS (complémentaire sociale solidaire) |DSS |
| API Indemnités Pôle Emploi (bientôt disponible)  | Montant des indemnités versée par pôle emploi   |Pôle Emploi                        |

Utiliser l'API FranceConnect pour identifier les utilisateurs de votre site permet également d'accéder à des données d'état civil. C'est ce qu'on appelle **l'identité pivot**.

| Nom       | Description                      |
| --------- | -------------------------------- |
| Nom       | nom de naissance                 |
| Prénoms   | tous les prénoms de l’état civil |
| Naissance | date  et lieu (ville/pays)       |
| Sexe      | Homme / Femme                    |

### Comment ça marche ?

_Schéma de fonctionnement de FranceConnect :_
![Fonctionnement de FranceConnect](/images/divers/franceConnect.png)

- Identifier vos utilisateurs simplement et de façon sécurisée, sans leur demander de compléter des formulaires et de créer et gérer des identifiant/mot de passe dédiés à votre service en ligne.
- Recueillir tout ou partie des données mises à disposition par FranceConnect :
  - Les données d’identité : le nom de naissance, les prénoms, le sexe, la date de naissance, le lieu de naissance (ville et pays). Le nom marital s’il existe et est connu du fournisseur d’identité sélectionné par l’utilisateur.
  - La donnée de contact @mail vérifiée par le fournisseur d’identité.

**NB:** Pour en savoir plus, vous pouvez consulter la <External href="https://partenaires.franceconnect.gouv.fr/documentation">documentation partenaires</External>.

### API FranceConnectées

Certaines API fonctionnent avec FranceConnect et permettent de récupérer tout ou partie des informations des particuliers directement à partir des données d’identité recueillies via FranceConnect. Pour en savoir plus consultez [notre guide](/guides/api-franceconnectees).
