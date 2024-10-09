---
title: ProConnect
tagline: Le solution officielle qui vous identifie en tant que professionnel.
external_site: https://proconnect.gouv.fr/
is_open: -1 # -1 means API not open
datapass_link: https://datapass.api.gouv.fr/agent-connect-fs
access_page:
  - who:
      - Un particulier
    is_eligible: -1
    description: |
      Seules les organisations sont habilitées à utiliser l'API ProConnect ou intégrer le bouton ProConnect.

      <Button href="/rechercher-api">Rechercher une autre API</Button>
  - who:
      - Un ministère (administration centrale ou service déconcentré)
      - Une collectivité territoriale
      - Un opérateur de l'État
      - Une entreprise
    is_eligible: 1
    description: |

      <NextSteps />
      <QuestionTree tree='france-connected-api' question='ProConnect' />
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
doc_tech_external: https://github.com/numerique-gouv/proconnect-documentation/blob/main/doc_fs.md
visits_2019: 4000
#uptime:
last_update: 27/08/2024
---

L’API ProConnect permet à des ministères (administrations centrales, services déconcentrés) des collectivités territoriales, des opérateurs de l’État ou à des entreprises d’ajouter un bouton de connexion ProConnect pour identifier les professionnels en ligne à partir de données d’identité fiables.

### À quoi sert ProConnect ?

ProConnect s’adresse aux organisations.
Les organisations partenaires fournissent des identités qui permettent aux agents de s'identifier sur les sites qui ont implémenté le bouton ProConnect.

### 🔎 À quoi ressemble le parcours ?

1. Je suis pro,
2. Je souhaite accéder à une application métier,
3. Je clique sur le bouton ProConnect de l'application métier,
4. Je rentre mon adresse email,
5. ProConnect me redirige vers une page de connexion pour saisir mon identifiant et mot de passe,
6. La connexion est établie

### Les données disponibles via l'API

Utiliser l'API ProConnect pour identifier les agents utilisateurs de votre site permet d'accéder à **l'identité pivot**.

| Nom                       | Valeur                   |Caractère                |Description                                 |
| ------------------------- | -------------------------|-------------------------|--------------------------------------------|
| Nom                       | usual_name               |Obligatoire              |John                                        |
| Prénom                    | given_name               |Obligatoire              |Lennon                                      |
| Mail professionnel        | email                    |Obligatoire              |prenom.nom@administration.fr                |
| Identifiant technique     | uid                      |Obligatoire              |Identifiant unique, spécifique au FI        |
| SIRET                     | Siret                    |Obligatoire              |110 020 013 00097                           |

En plus de cette identité pivot, selon votre cas d'usage, vous pouvez aussi avoir accès aux informations complémentaires :

| Nom                       | Valeur                   |Caractère                |Description                                 |
| ------------------------- | ------------------------ |-------------------------|--------------------------------------------|
| Unité d’affectation       | Organizational_unit      |Facultatif               |Intitulé de la direction, service ou bureau |
| Population d’appartenance | Belonging_population     |Facultatif               |Fonctionnaire, prestataire, contractuel...  |
| Téléphone professionnel   | phone                    |Facultatif               |+33102030405                                |
