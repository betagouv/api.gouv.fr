---
title: AgentConnect
tagline: Simplifiez le quotidien des agents publics de l'Etat en leur permettant d’utiliser un même identifiant et mot de passe pour accéder à leurs services en ligne.
external_site: https://agentconnect.gouv.fr/
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/agent-connect-fs
access_page:
  - who:
      - Un particulier
      - Une entreprise
      - Une collectivité territoriale
    is_eligible: -1
    description: |
      Seules les administrations centrales et les opérateurs de l'Etat sont habilités à utiliser l'API AgentConnect ou intégrer le bouton AgentConnect.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Un ministère (administration centrale ou service déconcentré)
      - Un opérateur de l'Etat
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='france-connected-api' question='agentConnect' />
producer: dinum
keywords:
  - Authentification
  - Identification
  - SSO
  - Agent
  - Logiciel
  - Identité
  - Connexion
  - Mot de passe
  - Identifiants
themes:
  - Administration
contact_link: support.partenaires@agentconnect.gouv.fr
doc_tech_external: https://github.com/france-connect/Documentation-AgentConnect/blob/main/doc-fs.md
visits_2019: 4000
#uptime:
last_update: 20/05/2022
---

L’API AgentConnect permet à des ministères (administrations centrales, services déconcentrés) et à des opérateurs de l’Etat d’ajouter un bouton de connexion AgentConnect pour identifier les agents utilisateurs de leurs applications métiers en ligne à partir de données d’identité fiables.

### À quoi sert AgentConnect ?

AgentConnect s’adresse aux ministères (administrations centrales, services déconcentrés) ainsi qu'aux opérateurs de l’Etat.
Les administrations partenaires fournissent des identités, qui permettent aux agents de s'identifier sur les sites qui ont implémenté le bouton AgentConnect.

### 🔎 À quoi ressemble le parcours ?

1. Je suis agent d’un ministère ou d’un opérateur de l’Etat,
2. Je souhaite accéder à une application métier,
3. Je clique sur le bouton AgentConnect de l'application métier,
4. Je recherche mon ministère / opérateur,
5. Je choisis mon compte parmi ceux proposés,
6. AgentConnect me redirige vers une page de connexion pour saisir mon identifiant et mot de passe,
7. Je suis connecté

### Les données disponibles via l'API

Utiliser l'API AgentConnect pour identifier les agents utilisateurs de votre site permet d'accéder à **l'identité pivot**.

| Nom                       | Valeur                   |Caractère                |Description                                 |
| ------------------------- | -------------------------|-------------------------|--------------------------------------------|
| Nom                       | usual_name               |Obligatoire              |John                                        |
| Prénom                    | given_name               |Obligatoire              |Lennon                                      |
| Mail professionnel        | email                    |Obligatoire              |prenom.nom@administration.fr                |
| Identifiant technique     | uid                      |Obligatoire              |Identifiant unique, spécifique au FI        |

En plus de cette identité pivot, selon votre cas d'usage, vous pouvez aussi avoir accès aux informations complémentaires :

| Nom                       | Valeur                   |Caractère                |Description                                 |
| ------------------------- | ------------------------ |-------------------------|--------------------------------------------|
| SIREN                     | Siren                    |Facultatif               |110 020 013                                 |
| SIRET                     | Siret                    |Facultatif               |110 020 013 00097                           |
| Unité d’affectation       | Organizational_unit      |Facultatif               |Intitulé de la direction, service ou bureau |
| Population d’appartenance | Belonging_population     |Facultatif               |Fonctionnaire, prestataire, contractuel...  |
| Téléphone professionnel   | phone                    |Facultatif               |+33102030405                                |
