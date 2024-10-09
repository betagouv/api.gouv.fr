---
title: Authentifier des personnes et des organisations
tagline: Vous souhaitez vérifier l'identité d'une personne avant l'accès à un service ou une démarche en ligne ? Vous souhaitez vérifier qu'une organisation est éligible pour un dispositif ? Découvrez les API dédiées à l'authentification.
tags: identité, siret, accès, sécurité, authentification, france connect, santé, pro, openid, territoire
image: auth.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Pro Santé Connect
  - FranceConnect et les API FranceConnectées
  - ProConnect
  - API Statut Etudiant
  - API Statut étudiant boursier
---

## Dans quel cas l'authentification des personnes ou des organisations est nécessaire ?

### 🙋🏽‍♀️ Démarches administratives des particuliers

Lors d'une démarche administrative, les administrations doivent s'assurer que la personne qui saisit ses informations en ligne est authentifiée.
Le couple identifiant / mot de passe est une solution, mais elle comporte des limites (multiplication des mots de passe), et la gestion de la sécurité des comptes nécessite un investissement humain et technologique conséquent.

**Le bouton France Connect vise à simplifier l'authentification des particuliers**, qui sont de plus en plus nombreux à disposer d'un compte France Connect.

Une fois implémenté par l'administration, il permet non seulement de garantir une authentification sécurisée pour les usagers, mais également de **récupérer les données nécessaires à la démarche** (données fiscales, statut étudiant ou boursier, statut demandeur d'emploi, attestation de droits de la CNAM, etc...)

[🔎 En savoir plus sur FranceConnect les API FranceConnectées](/les-api/franceconnect)

### 🏛️ Connecter des professionnels

Certaines applications veulent pouvoir identifier des professionnels, que ce soit par exemple pour des démarches, du logiciel bureautique, des accès à des données.

Plutôt que de demander des justificatifs et de les vérifier manuellement, ProConnect permet d'**obtenir l'identité de la structure** : Numéro SIRET, code Commune (COG), Code d'activité (NAF), etc... et de **vérifier automatiquement l'adresse e-mail** (correspondance du nom de domaine et vérification de la réception des e-mails).

- [ProConnect](/les-api/agent-connect) pour les professionnels,
- [Pro Santé Connect](/les-api/api-pro-sante-connect) pour les professionnels de la sphère sanitaire et sociale


## Quelles API utiliser pour authentifier des personnes ou des organisations ?

| Population                             | FranceConnect | ProConnect | ProSantéConnect |
|----------------------------------------|---------------|--------------|-----------------|
| Particuliers                           | ✅             | ❌           | ❌               |
| Professionnels                         | ❌             | ✅            | ✅               |
| Professionnels de la santé             | ❌             | ✅            | ✅               |
| Entreprises                            | ❌             | ✅            | ❌               |
| Agents de l'administration centrale    | ❌             | ✅            | ❌               |
| Agents des collectivités territoriales | ❌             | ✅            | ❌               |


## Comment accéder aux API ?

Les API d’authentification sont réservées aux administrations et à leurs éditeurs.

#### [🇫🇷 API FranceConnect](/les-api/franceconnect)

#### [🏛️ API ProConnect](/les-api/agent-connect)

#### [🏥 API Pro Santé Connect](/les-api/api-pro-sante-connect)
