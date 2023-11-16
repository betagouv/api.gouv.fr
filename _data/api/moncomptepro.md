---
title: MonComptePro
tagline: Identifiez les utilisateurs professionnels du privé ou du public
external_site: https://moncomptepro.beta.gouv.fr/partenaire
is_open: -1 # -1 means API not open
datapass_link: https://moncomptepro.beta.gouv.fr/partenaire
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les administrations et les entreprises sont habilitées à utiliser MonComptePro.

      Si vous cherchez à contacter l'équipe MonComptePro, vous pouvez écrire à [contact@moncomptepro.beta.gouv.fr](mailto:contact@moncomptepro.beta.gouv.fr)

      <Button href="/rechercher-api">Ou vous pouvez rechercher une autre API</Button>
  - who:
      - Une entreprise
    is_eligible: 0
    description: |
      Vous pouvez vérifier votre éligibilité en demandant à [MonComptePro](contact@moncomptepro.beta.gouv.fr) qui vous accompagnera dans vos démarches.

      <NextSteps />
      <Button href="mailto:contact@moncomptepro.beta.gouv.fr">Contacter l'équipe MonComptePro</Button>
  - who:
      - Une collectivité ou une administration
    is_eligible: 1
    description: |
      Si vous souhaitez intégrer MonComptePro, faites votre demande sur le DataPass de MonComptePro.

      <NextSteps />
      <Button href="https://datapass.api.gouv.fr/moncomptepro">Faire la demande DataPass</Button>
partners:
  - DataPass
  - API Entreprise
  - API Particulier
  - HubEE
  - catalogue.data.gouv.fr
producer: dinum
keywords:
  - Authentification
  - Identification
  - SSO
  - Professionnels
  - Agents
  - Collectivités territoriales
  - Privé
  - Entreprises
themes:
  - Professionnels
contact_link: contact@moncomptepro.beta.gouv.fr
doc_tech_external: https://github.com/betagouv/moncomptepro
visits_2019: 5000
uptime: 99.99
last_update: 30/01/2023
content_intro: |
  MonComptePro permet à des administrations, des collectivités, des entreprises ou des organisation d'ajouter un bouton MonComptePro, pour authentifier les professionnels de manière fiable et ainsi identifier les utilisateurs de services en ligne à leur organisation rattachée (en vue d'une connexion).
---

### A quoi ca sert ?

MonComptePro s’adresse aux organisations voulant identifier les professionnels du public ou du privé. Les professionnels sont identifiés avec leur email professionnel et peuvent être authentifiés pour utiliser les sites qui ont implémenté le bouton MonComptePro.

### 🔎 À quoi ressemble le parcours ?

1. Je suis une personne professionnelle, travaillant pour le privé ou pour le public,
2. Je souhaite accéder à une application métier,
3. Je clique sur le bouton MonComptePro de l'application métier,
4. MonComptePro me redirige vers une page de connexion pour saisir mon identifiant et mot de passe,
5. La connexion est établie


### Les données disponibles via l'API

Utiliser l'API AgentConnect pour identifier les agents utilisateurs de votre site permet d'accéder à **l'identité pivot**.

| Nom                       | Valeur                   |Caractère                |Description                                 |
| ------------------------- | -------------------------|-------------------------|--------------------------------------------|
| Mail professionnel        | email                    |Obligatoire              |prenom.nom@organisation.fr                  |
| SIRET                     | Siret                    |Obligatoire              |110 020 013 00097                           |

En plus de cette identité pivot, selon votre cas d'usage, vous pouvez aussi avoir accès aux informations complémentaires :

| Nom                       | Valeur                   |Caractère                |Description                                 |
| ------------------------- | ------------------------ |-------------------------|--------------------------------------------|
| Nom                       | usual_name               |Obligatoire              |John                                        |
| Prénom                    | given_name               |Obligatoire              |Lennon                                      |
| Numéro de téléphone       | phone_number             |Obligatoire              |0102030405                                  |
| SIREN                     | siren                    |Obligatoire              |110 020 013                                 |
| Libéllé organisation      | cached_libelle           |Obligatoire              |Mairie de Paris                             |
