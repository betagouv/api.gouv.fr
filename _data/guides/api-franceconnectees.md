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
| Des démarches simplifiées et accélérées     | Les délais de traitement sont instantannés                      |
| Plus aucune pièces justificatives à fournir | Plus de pièces justificatives à traiter et à stocker            |
| Plus d'erreur de saisie possible            | Plus de fraude possible car la donnée est certifiée à la source |

### Un cas pratique : la demande d'Aide Juridictionnelle

<Quote  logo="/images/api-logo/mj.png" title='Ministère de la Justice'>
L'aide juridictionnelle est une prise en charge par l'État des frais judiciaires, réservée aux revenus les plus modestes. Grâce à la vérification des revenus avec l'API Impot Particulier FranceConnectée, ce sont 1,2 millions de formulaires CERFA qui seront soumis en ligne en lieu et place d'un dossier papier !
</Quote>

### Les données disponibles par API FranceConnectées

| Nom                        | Description                                                                                   | API                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Revenu fiscal de référence | Les revenus déclarés auprès de l'administration fiscale                                       | [API Impôt particulier](/les-api/impot-particulier)               |
| Adresse fiscale            | L'adresse déclarée auprès de l'administration fiscale                                         | [API Impôt particulier](/les-api/impot-particulier)               |
| Nombre de parts fiscales   |                                                                                               | [API Impôt particulier](/les-api/impot-particulier)               |
| bénéficiaires              | Les bénéficiaires de l'individu connecté via FranceConnect                                    | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| caisse                     | L'organisme de rattachement du bénéficiaire (régime, centre de gestion, adresse de la caisse) | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| niveau de couverture       | Droits de base, droits à une complémentaire santé solidaire, présence d'un médecin traitant   | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| motifs d’exonération       | Uniquement accessible aux établissements de soins                                             | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |
| médecin traitant           | Uniquement accessible aux établissements de soins                                             | [API de droits Assurance Maladie](/les-api/api_ameli_droits_cnam) |

### Comment ça marche ?

_Schéma de fonctionnement des API FranceConnectées :_
![Fonctionnement des API FranceConnectées](https://franceconnect.gouv.fr/images/how-it-works-data.svg)

### La feuille de route des API FranceConnectées

#### 📅 3e trimestre 2021

- API Statut Etudiant : _est-ce qu'un particulier est actuellement étudiant, et les dates d'étude associées ?_
- API Statut Boursier : _est-ce qu'un particulier est actuellement boursier ?_

#### 📅 4e trimestre 2021

- API Indemnités Pôle emploi : _quel montant des indemnités Pôle emploi est perçu par un citoyen ?_
- API Statut complémentaire santé solidaire (ex-CMU) : _est-ce qu'un particulier reçoit la complémentaire santé solidaire ?_

#### 📅 2022

- API Quotient Familial CNAF : _quel est le montant du quotient familial d'un particulier ?_
- API Statut Demandeur d'emploi : _est-ce qu'un particulier est actuellement demandeur d’emploi ?_

## Comment accéder aux API FranceConnectées ?

Les API FranceConnectées ne sont accessibles qu’aux administrations publiques, collectivités territoriales ou entreprises privées en situation de mission de service public. Elles nécessitent de :

1. Avoir FranceConnect sur son téléservice
2. Faire une demande d'accès à l’API FranceConnectée en question
3. Brancher l’API
4. 🎉 Commencer à dématérialiser 🥳
