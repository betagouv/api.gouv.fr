---
title: Tarification des transports
tagline: Collectivités et opérateurs, appliquez facilement un tarif des titres de transport adapté à la situation de vos usagers.
tags: cas usage, api particulier, transport
image: transport.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
  - FranceConnect et les API FranceConnectées
  - API Statut Etudiant
  - API Statut étudiant boursier
---

## Table des matières

- [Simplifier la tarification des transports grâce aux API](#simplifier-la-tarification-des-transports-grace-aux-api)
- [Les API et données utiles](#les-api-et-donnees-utiles)
(#les-editeurs-connectes-a-l-api-particulier)
- [Ils utilisent déjà les API](#ils-utilisent-déjà-les-api)
- [Demander un accès aux API](#demander-un-acces-aux-api)

## Simplifier la tarification des transports grâce aux API

Collectivités et opérateurs, en intégrant des API dans vos systèmes d'information :

- 😃 les usagers peuvent obtenir une **tarification solidaire et sociale immédiate et automatique** de leur titre de transport, permise grâce à la liaison avec les données de différentes API délivrant les statuts sociaux et ressources de l'usager ;

- ⏰ Vous pouvez **dématérialiser totalement votre service en ligne** de délivrance de titre car vos agents n’ont **plus besoin de vérifier les justificatifs**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;

- 👨‍💼 Une **utilisation logicielle au guichet est aussi possible**, tout en évitant le stock des pièces justificatives, les erreurs de saisie et les fraudes.

- 🎯 Enfin, vous **participez activement à la simplification des démarches pour les citoyens** en mettant en place le [« Dites-le-nous une fois »](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/) : vous ne demandez plus aux usagers une information qu’ils ont déjà donnée ou que l’administration connaît déjà.
Vous vous mettez ainsi **en conformité avec la législation** et, plus particulièrement l’[article L113-12 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037313155).

## Les API et données utiles

La DINUM a réalisé une [étude auprès de 20 autorités organisatrices de la mobilité (AOM)](/resources/rapport-gart.pdf) pour répertorier l'ensemble des besoins de pièces justificatives**.

**👋 Pour participer au groupe de travail associé, [vous pouvez écrire ici](mailto:contact@api.gouv.fr?subject=Participation-au-cas-d'usage-transports)**


De nombreux justificatifs sont d'ores et déjà disponibles par API et votre téléservice peut proposer deux modes de connection, l’un avec FranceConnect, l’autre sans.
Dans ce dernier cas il conviendra d’utiliser [l’API particulier](https://api.gouv.fr/les-api/api-particulier ).


| Nom       | Description         |Statut   |Dispo sans FranceConnect | Administration|
| --------- | --------- |----------------------------------------------------|-----------------|--------- |
| [API Impôt particulier](https://api.gouv.fr/les-api/impot-particulier)  | Revenus déclarés auprès de l'administration fiscale |✅ Disponible   |[API Impôt particulier](https://api.gouv.fr/les-api/impot-particulier) -  |DGFiP   |
| [API Indemnités Journalières](https://api.gouv.fr/les-api/api-indemnites-journalieres-cnam)   | Montant des indemnités journalières de l'Assurance Maladie payé à un assuré sur une période|✅ Disponible   |Non prévu |CNAM |
| [API de droits à l'Assurance Maladie](https://api.gouv.fr/les-api/api_ameli_droits_cnam) | Droits d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie |✅ Disponible  |Non prévu |CNAM   |
| [API Statut étudiant](https://api.gouv.fr/les-api/api-statut-etudiant)| Statut de l’inscription dans un établissement de l’enseignement supérieur |✅ Disponible  |[API  particulier](https://api.gouv.fr/les-api/api-particulier)|MESRI   |
| [API Statut étudiant boursier](https://api.gouv.fr/les-api/api-statut-etudiant-boursier)| Statut d’étudiant boursier  |✅ Disponible  | [API  particulier](https://api.gouv.fr/les-api/api-particulier) |CNOUS / MESRI                                          |
| API statut demandeur d'emploi   |Statut et catégorie (A,B,C,D)   |⌛️ bientôt disponible |[API  particulier](https://api.gouv.fr/les-api/api-particulier)| Pôle Emploi                        |
| API Indemnités Pôle emploi   | Montant des indemnités versées par pôle emploi   |⌛️ bientôt disponible|⌛️ bientôt disponible |Pôle Emploi                        |
| API Prestations sociales   | Inscription au RSA, bénéficiaires de la CSS (complémentaire sociale solidaire) |⌛️ bientôt disponible   |⌛️ bientôt disponible|DSS |
|API scolarité | attestation de socolarité, apprenti, boursier |Mars 2023  |fin 2022|MEN|
|API quotient familial | Quotient familial, composition familiale|En cours de spécification  | [API  particulier](https://api.gouv.fr/les-api/api-particulier)|CNAF|
|API quotient familial| Quotient familial, composition familiale |  2023|En cours de spécification|MSA|
|API famille nombreuse| carte famille nombreuse |  2023|2023|Ministère des transports|


🔎 En savoir plus sur [les API FranceConnectées](https://api.gouv.fr/guides/api-franceconnectees)


En complément, certaines données (en libre accès) peuvent être utile pour faciliter le parcours en ligne de vos usagers :

| Base de donnée  | Usage  |
|---------| --------|
| [Etablissements scolaires](https://api.gouv.fr/les-api/api-annuaire-education)  | Permettre aux usagers de sélectionner un établissement scolaire dans une liste   |
| [Base adresse nationale](https://api.gouv.fr/les-api/base-adresse-nationale)  | Permettre l'autocomplétion d'un adresse postale dans un formulaire en ligne       |
| [Découpage administratif](https://api.gouv.fr/les-api/api-geo)  | Permettre aux usagers de sélectionner une commune dans une liste (ou de l'autocompléter) |

## Ils utilisent déjà les API

De nombreuses autorités d'organisation de la mobilité utilisent déjà des API et ont ainsi dématérialisé la tarification de leurs titres de transport : 

| AOM | Type de transport  |
| --- | --- |
| Transports Agglomération Montpellier | Transports publics |
| Commune d'Issoire   | Transports scolaires |
| Région Provence-Alpes-Côte-d'Azur | Transports publics |
| Syndicat des Mobilités Pays Basque-Adour | Transports publics |
| Bordeaux Métropole   | Transports publics |
| Syndicat Mixte des Mobilités de l'Aire Grenobloise | Transports publics |
| Grand Angoulême | transports scolaires |
| Département de la Gironde  | Transport scolaire adapté |
| CA du Grand Cognac | transports scolaires |
| Région Nouvelle Aquitaine  | Tarifications transports |
| Autorité organisatrice des mobilités des territoires lyonnais | Transports publics |
| Île de France Mobilités | Transports publics |


## Demander un accès aux API

Vous devez formuler une demande d’habilitation auprès de chaque fournisseur de donnée pour les API FranceConnectée ou d’une seule demande pour l'API particulier.

### Justifier votre cadre juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de l'API Particulier et/ou des autres API en justifiant du cadre légal de l'utilisation des données :


- Cadre légal général : l'[Article L114-8 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315) fixe le cadre général qui oblige l’administration à échanger des données lors d’une démarche d’un usager ;

- Cadre légal spécifique aux transports scolaires : Les transports scolaires sont des transports réguliers publics régis par l'[article L. 3111-7 du Code des transports](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043343069)
 et par l'[article L. 214-18 du Code de l'éducation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030999998)

- Cadre légal spécifique aux transport en commun** :  [Articles L1231-1 et L1231-3 du Code des transports](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000023086525/LEGISCTA000023069255/#LEGISCTA000023085815)


### Formulaires de demande d'accès

Les [API disponibles dans l'API Particulier](https://particulier.api.gouv.fr/catalogue) vous intéressent ? Vous n'avez qu'une seule demande d'habilitation à effectuer : 

<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

Vous avez besoin d'autres données distribuées par d'autres fournisseurs ? Il vous faudra faire une demande dédiée par API.

⚠️ Lors de votre demande d’habilitation, vous vous engagez à ne demander que les données strictement nécessaires à la réalisation de la démarche administrative.