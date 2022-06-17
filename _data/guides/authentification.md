---
title: Authentifier des personnes et des organisations
tagline: Vous souhaitez vérifier l'identité d'une personne avant l'accès à un service ou une démarche en ligne ? Vous souhaitez vérifier qu'une organisation est éligible pour un dispositif ? Découvrez les API dédiées à l'authentification.
tags: identité, siret, accès, sécurité, authentification, france connect, santé, pro, openid, territoire
image: auth.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Pro Santé Connect
  - FranceConnect et les API FranceConnectées
  - AgentConnect
  - API Statut Etudiant
  - API Statut étudiant boursier
---

## Dans quel cas l'authentification des personnes ou des organisations est nécessaire ?

### 🙋🏽‍♀️ Démarches administratives des particuliers

Lors d'une démarche administratives, les administrations doivent s'assurer que la personne qui saisit ses informatons en ligne est authentifiée.
Le couple identifiant / mot de passe est une solution mais elle comporte des limites (multiplication des mots de passe), et la gestion de la sécurité des comptes nécessite un investissement humain et technologique conséquent.

**Le bouton France Connect vise à simplifier l'authentification des particuliers**, qui sont de plus en plus nombreux à disposer d'un compte France Connect.

Une fois implémenté par l'administration, il permet non seulement de garantir une authentification sécurisée pour les usagers, mais également de **récupérer les données nécessaires à la démarche** (données fiscales, statut étudiant ou boursier, statut demandeur d'emploi, attestation de droits de la CNAM, etc...)

[🔎 En savoir plus sur FranceConnect les API FranceConnectées](/les-api/franceconnect)

### 🏛 Démarches administratives des entreprises et des associations

Les entreprises et les associations doivent également s'authentifier auprès de l'administration, par exemple dans le cadre de demandes d'aides ou de subventions.

Plutôt que de demander des justificatifs et de les vérifier manuellement, Comptes Territoires permet d'**obtenir l'identité de la structure** : Numéro SIRET, code Commune (COG), Code d'activité (NAF), etc... et de **vérifier automatiquement l'adresse e-mail** (correspondance du nom de domaine et vérification de la réception des e-mails).

*Comptes Territoires sera prochainement disponible sur le catalogue api.gouv.fr*

### 🔐 Accès à des des données ou des logiciels

Certains logiciels et services en ligne sont réservés aux agents de l'Etat, d'autres sont accessibles uniquement aux professionnels de la santé. Lors de la création de compte pour accéder à ces applications, il est possible d'authentifier les utilisateurs de manière sécurisée :

- [AgentConnect](/les-api/agent-connect) pour les agents de l'administration centrale,
- [Pro Santé Connect](/les-api/api-pro-sante-connect) pour les professionnels de la sphère sanitaire et sociale,
- Comptes Territoires pour les agents des collectivités territoriales (à venir).

## Quelles API utiliser pour authentifier des personnes ou des organisations ?

| Population                   | FranceConnect|AgentConnect|Comptes Territoires|ProSantéConnect|
| ---------------------------- | -------------|------------|-----------------|---------------|
| Particuliers                 |      ✅      |❌           |❌               |❌             |
| Professionnels               |      ❌      |✅           |✅               |✅             |
| Professionnels de la santé   |      ❌      |❌           |❌               |✅             |
| Entreprises                  |      ❌      |❌           |✅               |❌             |
| Agents de l'administration centrale |      ❌  | ✅       |❌               |❌             |
| Agents des collectivités territoriales |  ❌    |❌    |✅               |❌             |

## Comment accéder aux API ?

Les API d'authentification sont réservées aux administrations et à leurs éditeurs.

#### [🇫🇷 API FranceConnect](/les-api/franceconnect)

#### [🏛 API Agent Connect](/les-api/agent-connect)

#### [🏥 API Pro Santé Connect](/les-api/api-pro-sante-connect)

#### API Comptes Territoires

*⌛️ Bientôt disponible* 
