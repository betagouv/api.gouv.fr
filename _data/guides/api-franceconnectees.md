---
title: Les API FranceConnectées
tagline: 'Tout savoir sur les API FranceConnectées : comment ça marche, quel intérêt, les API FranceConnectées disponibles et à venir'
tags:
image: portail_famille.jpg
api:
  - API Impôt particulier
  - API de droits à l'Assurance Maladie
---

FranceConnect permet au citoyen de s'authentifier à de nombreux services de l'administration. Ce dispositif permet de n'avoir qu'un compte à retenir pour tous les services de l'administration (<External href="https://franceconnect.gouv.fr/partenaires">en savoir plus sur FranceConnect</External>).

Les API FranceConnectées sont des API qui permettent de transmettre - en plus des données d'identité transmises par FranceConnect - d'autres données d'administrations au moment de la FranceConnection du citoyen à sa démarche.

Une API FranceConnecté s'utilise obligatoirement avec FranceConnect. C'est-à-dire que dans votre service numérique, l'utilisateur devra se FranceConnecter pour obtenir les données de l'API.

## En quoi ça change tout ?

Les API FranceConnectées simplifient le parcours d'un citoyen à ses démarches, car elles évitent la saisie par le citoyen d'une clé d'appel aux API (par exemple : le _numéro fiscal_ sert de clef d'appel pour les API fiscales). C'est l'identité pivot de FranceConnect qui fait office de clé d'appel.

Le parcours classique d'un citoyen dans une démarche :

- 👤 Authentification
- 🔍 Recherche de la clef d'appel dans ses documents personnels (par exemple _le numéro fiscal_)
- 🗝 Saisie de la clé d'appel
- 👩‍💻 Récupération de données par API

Le parcours grâce aux API FranceConnectées :

- 🇫🇷 FranceConnection
- ✅ Récupération de données grâce aux API FranceConnectées

Les API FranceConnectées simplifient :

| La démarche du citoyen                      | Le traitement de l'agent                                        |
| ------------------------------------------- | --------------------------------------------------------------- |
| Des démarches simplifiées et accélérées     | Les délais de traitement sont instantannés                      |
| Plus aucune pièces justificatives à fournir | Plus de pièces justificatives à traiter et à stocker            |
| Plus d'erreur de frappe possible            | Plus de fraude possible car la donnée est certifiée à la source |

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

- API Statut Etudiant : _est-ce qu'un particulier est actuellement étudiant (et les dates associées) ?_
- API Statut Boursier : _est-ce qu'un particulier est actuellement boursier_

#### 📅 4e trimestre 2021

- API Statut Demandeur d'emploi : _est-ce qu'un particulier est actuellement demandeur d’emploi ?_
- API Quotient Familial CNAF : _quel est le montant du quotient familial d'un particulier ?_
- API Secu : _quelles sont les dernières ressources percues par un particulier ?_

## Comment accéder aux API FranceConnectées ?

Les API FranceConnectées ne sont accessibles qu’aux administrations publiques, collectivités territoriales ou entreprises privées en situation de mission de service public. Elles nécessitent de :

1. Avoir FranceConnect sur son téléservice
2. Faire une demande d'accès à l’API FranceConnectée en question
3. Brancher l’API
4. 🎉 Commencer à dématérialiser 🥳
