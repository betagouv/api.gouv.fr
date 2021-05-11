---
title: Les API FranceConnectées
tagline: Tout savoir sur les API FranceConnectées : comment ça marche, quel intérêt, les API FranceConnectées disponibles et à venir
tags: 
image: portail_famille.jpg
api:
  - API Impot Particulier
  - API Droits CNAM
---

Pour rappel : FranceConnect est un moyen pour le citoyen de s'authentifier à de nombreux services de l'administration. Ce dispositif permet de n'avoir qu'un compte à retenir pour tous les services de l'administration. <External href="https://franceconnect.gouv.fr/partenaires">En savoir plus sur FranceConnect</a>.

Les API FranceConnectées sont des API qui permettent de transmettre - en plus des données d'identité transmises par FranceConnect - d'autres données d'administrations au moment de la FranceConnection du citoyen à sa démarche.

Une API FranceConnecté s'utilise obligatoirement avec FranceConnect. C'est-à-dire que dans votre service numérique, l'utilisateur devra se FranceConnecter pour obtenir les données de l'API.

## Pourquoi c'est génial

Les API FranceConnectées simplifient le parcours d'un citoyen à ses démarches, car elles évitent la saisie par le citoyen d'une clé d'appel aux API (par exemple : le numéro fiscal est la clef d'appel des API fiscales). C'est l'identité pivot de FranceConnect qui fait office de clé d'appel.

Le parcours classique d'un citoyen dans une démarche : 
1️⃣ → Authentification
2️⃣ → Saisie d'une clé d'appel (par exemple *le numéro fiscal*)
🤖 → Récupération de données par API

Le parcours grâce aux API FranceConnectées : 
1️⃣ → FranceConnection
🤖 → Récupération de données grâce aux API FranceConnectées

Les API FranceConnectées permettent ainsi :
- de simplifier le parcours d'une démarche en retirant des étapes devenues inutiles
- d'éviter au citoyen d'avoir à connaître sa clé d'appel
- de réaliser le "Dites-le-nous Une fois" et d'éviter de renseigner de nouveau des données déjà détenues par une autre administration
- de limiter le dépôt de pièce jointe et le travail de validation des agents : la donnée est certifiée à la source et les erreurs de saisies sont impossibles


## Un exemple avec l'Aide Juridictionnelle

L'aide juridictionnelle est une prise en charge par l'État des frais liés à une procédure judiciaire.

Cette aide est destinée aux personnes qui veulent faire valoir leurs droits en justice, mais qui n'ont pas les moyens de financer les frais liés à la procédure judiciaire.

Pour obtenir l'aide juridictionnelle, vous devez remplir les 3 conditions suivantes :
1. Ne pas avoir une assurance protection juridique qui couvre la totalité de vos frais de justice
2. Être de nationalité française ou européenne, ou résider de manière habituelle en France (un court séjour est exclu)
3. Avoir un revenu fiscal de référence et une valeur de patrimoine mobilier et immobilier inférieurs à certains plafonds

Cette troisième condition est vérifiée dans le parcours grâce à l'API Impot Particulier FranceConnectée, permettant d'automatiser la récupération du revenu fiscal de référence.

Ce parcours dématérialisé avec FranceConnect et une API FranceConnectée vient remplacer les 1,2 millions de dossiers CERFA papier remplis en 2019... !

### Comment ça marche

_Schéma de fonctionnement des API FranceConnectées :_
![Fonctionnement des API FranceConnectées](https://franceconnect.gouv.fr/images/how-it-works-data.svg)

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

Le RGPD s'applique, en particulier la minimisation des données demandées.

### La feuille de route des API FranceConnectées

- API Statut Etudiant - T3 2021
- API Statut Boursier - T3 2021
- API Statut Demandeur d'emploi - T4 2021
- API Quotient Familial CNAF - T4 2021
- API Secu - T4 2021

### Comment accéder aux API FranceConnectées

Les API FranceConnectées ne sont accessibles qu’à certaines organisations. Elles nécessitent : 
- une habilitation à l'API FranceConnectée dont les données sont nécessaires à la simplification de la démarche
- d'avoir FranceConnect intégré à la démarche
- d'être une administration publique, une collectivité territoriale ou une entreprise privée en situation de mission de service public

