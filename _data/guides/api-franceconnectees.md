---
title: Les API FranceConnectées
tagline: 'Tout savoir sur les API FranceConnectées : comment ça marche, quel intérêt, les API FranceConnectées disponibles et à venir'
tags:
image: meta.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Impôt particulier
  - API de droits à l'Assurance Maladie
  - API Statut Etudiant
  - API Statut étudiant boursier
  - API Indemnités journalières de la CNAM
  - API Indemnisation Pôle emploi
  - API statut demandeur d'emploi
---

FranceConnect permet au citoyen de s'authentifier à de nombreux services de l'administration. Ce dispositif permet d'utiliser un compte existant sur impots.fr ou ameli.fr par exemple, afin d'accéder à tous les services de l'administration (<External href="https://franceconnect.gouv.fr/partenaires">en savoir plus sur FranceConnect</External>).

Les API FranceConnectées sont des API qui permettent de transmettre - en plus des données d'identité transmises par FranceConnect - d'autres données personnelles du citoyen lorsqu'il utilise FranceConnect dans sa démarche.

Une API FranceConnecté s'utilise obligatoirement avec FranceConnect. C'est-à-dire que dans votre service numérique, l'utilisateur devra se FranceConnecter pour obtenir les données de l'API.

## En quoi ça change tout ?

Les API FranceConnectées simplifient le parcours d'un citoyen à ses démarches, car elles lui évitent la saisie de données personnelles utilisées comme clé d'appel aux API (par exemple : le _numéro fiscal_ sert de clé d'appel pour les API fiscales et doit être saisi par l'utilisateur si la démarche n'utilise pas d'API FranceConnectée). C'est l'identité pivot fournie par FranceConnect qui fait office de clé d'appel pour une API FranceConnectée, le citoyen n'a donc rien à saisir.

Le parcours classique d'un citoyen dans une démarche :

- 👤 Connexion par son compte associé à la démarche
- 🔍 Recherche de la clé d'appel dans ses documents personnels (par exemple _le numéro fiscal_)
- 🗝 Saisie de la clé d'appel
- 👩‍💻 Récupération de données par API

Le parcours grâce aux API FranceConnectées :

- 🇫🇷 Connexion par FranceConnect
- ✅ Récupération de données grâce aux API FranceConnectées

Les API FranceConnectées simplifient :

| La démarche du citoyen                      | Le traitement de l'agent                                        |
| ------------------------------------------- | --------------------------------------------------------------- |
| Des démarches simplifiées et accélérées     | Les délais de traitement sont instantanés                       |
| Plus aucune pièces justificatives à fournir | Plus de pièces justificatives à traiter et à stocker            |
| Plus d'erreur de saisie possible            | Plus de fraude possible car la donnée est certifiée à la source |

### Un cas pratique : la demande d'Aide Juridictionnelle

<Quote  logo="/images/api-logo/mj.png" title='Ministère de la Justice'>
L'aide juridictionnelle est une prise en charge par l'État des frais judiciaires, réservée aux revenus les plus modestes. Grâce à la vérification des revenus avec l'API Impot Particulier FranceConnectée, ce sont 1,2 millions de formulaires CERFA qui seront soumis en ligne en lieu et place d'un dossier papier !
</Quote>

### La feuille de route des API FranceConnectées

| Nom       | Description                                         |Statut   |Dispo sans FranceConnect | Administration|
| --------- | --------- |----------------------------------------------------|-----------------|--------- |
| [API Impôt particulier](https://api.gouv.fr/les-api/impot-particulier)  | Revenus déclarés auprès de l'administration fiscale |✅ En production   |[API Impôt particulier](https://api.gouv.fr/les-api/impot-particulier) - [API  particulier](https://api.gouv.fr/les-api/api-particulier)   |DGFiP   |
| [API Indemnités Journalières](https://api.gouv.fr/les-api/api-indemnites-journalieres-cnam)   | Montant des indemnités journalières de l'Assurance Maladie payé à un assuré sur une période|✅ En production   |Non prévu |CNAM |
| [API de droits à l'Assurance Maladie](https://api.gouv.fr/les-api/api_ameli_droits_cnam) | Droits d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie |✅ En production  |Non prévu |CNAM   |
| [API Statut étudiant](https://api.gouv.fr/les-api/api-statut-etudiant)| Statut de l’inscription dans un établissement de l’enseignement supérieur |✅ En production  |[API  particulier](https://api.gouv.fr/les-api/api-particulier)|MESRI   |
| [API Statut étudiant boursier](https://api.gouv.fr/les-api/api-statut-etudiant-boursier)| Statut d’étudiant boursier  |✅ En production  | [API  particulier](https://api.gouv.fr/les-api/api-particulier) |CNOUS / MESRI                                          |
| [API statut demandeur d'emploi](/les-api/api-statut-demandeur-emploi)   |Statut et catégorie (A,B,C,D)   |✅ En production |[API  particulier](https://api.gouv.fr/les-api/api-particulier)| Pôle Emploi                        |
| [API Indemnités Pôle emploi](/les-api/api-indemnisation-pole-emploi)   | Montant des indemnités versées par pôle emploi   |✅ En production|⌛️ bientôt disponible |Pôle Emploi                        |
| API Prestations sociales   | Inscription au RSA, bénéficiaires de la CSS (complémentaire sociale solidaire) |⌛️ bientôt disponible   |⌛️ bientôt disponible|DSS |
|API scolarité | attestation de socolarité, apprenti, boursier |Mars 2023  |fin 2022|MEN|
|API quotient familial | Quotient familial, composition familiale|En cours de spécification  | [API  particulier](https://api.gouv.fr/les-api/api-particulier)|CNAF|
|API quotient familial| Quotient familial, composition familiale |  2023|En cours de spécification|MSA|
|API famille nombreuse| carte famille nombreuse |  2023|2023|Ministère des transports|

### Comment ça marche ?

_Schéma de fonctionnement des API FranceConnectées :_
![Fonctionnement des API FranceConnectées](https://franceconnect.gouv.fr/images/how-it-works-data.svg)

## Comment accéder aux API FranceConnectées ?

Les API FranceConnectées ne sont accessibles qu’aux administrations publiques, collectivités territoriales ou entreprises privées en situation de mission de service public. Elles nécessitent de :

1. Avoir FranceConnect [sur son téléservice](https://franceconnect.gouv.fr/partenaires)
2. Faire une demande d'habilitation à l’API FranceConnectée en question
3. Brancher l’API
4. 🎉 Commencer à dématérialiser 🥳
