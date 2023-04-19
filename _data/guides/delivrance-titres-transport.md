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
- [Exemple d'application](#exemple-d-application)
- [Les API et données utiles](#les-api-et-donnees-utiles)
- [Ils utilisent déjà les API](#ils-utilisent-déjà-les-api)
- [Demander un accès aux API](#demander-un-acces-aux-api)

## Simplifier la tarification des transports grâce aux API

Collectivités et opérateurs, en intégrant des API dans vos systèmes d'information :

- 😃 les usagers peuvent obtenir une **tarification solidaire et sociale immédiate et automatique** de leur titre de transport, permise grâce à la liaison avec les données de différentes API délivrant les statuts sociaux et ressources de l'usager ;

- ⏰ Vous pouvez **dématérialiser totalement votre service en ligne** de délivrance de titre car vos agents n’ont **plus besoin de vérifier les justificatifs**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;

- 👨‍💼 Une **utilisation logicielle au guichet est aussi possible**, tout en évitant le stock des pièces justificatives, les erreurs de saisie et les fraudes.

- 🎯 Enfin, vous **participez activement à la simplification des démarches pour les citoyens** en mettant en oeuvre le [« Dites-le-nous une fois »](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/), en application de l’[article L113-12 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037313155).

## Exemple d'application

**Un usager demandeur d'emploi souhaite obtenir un titre de transport :**

1. L'usager se connecte à son espace personnel, avec ou sans FranceConnect, sur le site de la démarche en ligne. Le formulaire lui propose plusieurs statuts, il clique sur "demandeur d'emploi" et **renseigne son identifiant pôle emploi**.

> ⚙️ **En arrière plan** : Un appel à l'API statut demandeur d'emploi est effectué et permet de confirmer le statut.

2. La tarification du titre de transport est automatiquement calculée. L'usager n'a plus qu'à régler son titre.

Selon la tarification appliquée, différentes API peuvent être utiles et sont détaillées ci-après.

## Les API et données utiles

La DINUM a réalisé une [étude auprès de 20 autorités organisatrices de la mobilité (AOM)](/resources/rapport-gart.pdf) pour répertorier l'ensemble des besoins de pièces justificatives**.

**👋 Pour participer au groupe de travail associé, [vous pouvez écrire ici](mailto:contact@api.gouv.fr?subject=Participation-au-cas-d'usage-transports)**

### Détail de toutes les données

| Données utiles |  API **avec FranceConnect** | API **sans** FranceConnect |
| --- | --- | --- |
| **Revenu fiscal de référence**, nombre de parts fiscales | ✅ Avec FranceConnect&nbsp;: [API Impôt particulier - DGFIP](/les-api/impot-particulier) | ✅ Sans FranceConnect&nbsp;: [API Impôt particulier - DGFIP](/les-api/impot-particulier) |
| **Quotient familial CAF/MSA** et composition familiale | ⚙️ Avec FranceConnect&nbsp;: _en cours de spécification_ | ✅ Sans FranceConnect&nbsp;: [API Quotient familial CAF du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/cnaf/quotient_familial) |
| **Montant indemnités journalières de l'assuré** par l'assurance maladie |✅ Avec FranceConnect&nbsp;: [API Indemnités Journalières - CNAM](https://api.gouv.fr/les-api/api-indemnites-journalieres-cnam)   | ❌ Sans FranceConnect&nbsp;: _non-prévu_ |
| **Droits d’un individu ou d’une famille** (enfants rattachés), gérés par le régime général de l’Assurance Maladie |✅ Avec FranceConnect&nbsp;: [API de droits à l'Assurance Maladie - CNAM](https://api.gouv.fr/les-api/api_ameli_droits_cnam)  | ❌ Sans FranceConnect&nbsp;: _non-prévu_ |
| **Statut élève collège et lycée scolarisé** et statut boursier - Ministère de l'éducation nationale | ⌛️ Avec FranceConnect&nbsp;: prévu T2 2023    | ✅ Sans FranceConnect&nbsp;: [API statut élève scolarisé du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/pole_emploi/situation) |
| **Statut étudiant** d'un établissement de l’enseignement supérieur - MESRI |✅ Avec FranceConnect&nbsp;: [API Statut étudiant - MESRI ](https://api.gouv.fr/les-api/api-statut-etudiant)| ✅ Sans FranceConnect&nbsp;: [API statut étudiant du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/mesr/statut_etudiant)|
| **Statut étudiant boursier** - CNOUS  | ✅ Avec FranceConnect&nbsp;: [API statut étudiant boursier du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier) |  ✅ Sans FranceConnect&nbsp;: [API statut étudiant boursier du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier)|
| **Statut demandeur d'emploi** et catégorie (A,B,C,D) - Pôle emploi  |✅ Avec FranceConnect&nbsp;: [API statut demandeur d'emploi - Pôle Emploi ](/les-api/api-statut-demandeur-emploi) |✅ Sans FranceConnect&nbsp;: [API statut demandeur d'emploi du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/pole_emploi/situation)|   
| **Montants des paiements des allocations ou des aides** - Pôle emploi |✅ Avec FranceConnect&nbsp;: [API Indemnités Pôle emploi - Pôle Emploi](/les-api/api-indemnisation-pole-emploi)  | ⌛️ Sans FranceConnect&nbsp;: _prévu T2 2023 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_ |
| **Statut complémentaire santé solidaire (CSS)**, avec ou sans participation - Direction de la sécurité sociale | ⌛️ Avec FranceConnect&nbsp;: _prévu T2 2023 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    | ⌛️ Sans FranceConnect&nbsp;: _prévu T2 2023 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    |
| **Statut revenu de solidarité active (RSA)** - Direction de la sécurité sociale | ⌛️ Avec FranceConnect&nbsp;: _prévu T2 2023 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    | ⌛️ Sans FranceConnect&nbsp;: _prévu T4 2023 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    |
| **Carte famille nombreuse** - Ministère des transports |  ⌛️ Avec FranceConnect&nbsp;: _prévu T1 2024_ | ⌛️ Sans FranceConnect&nbsp;: _prévu T1 2024_ |

### Données utiles de l'API Particulier

En synthèse de ce tableau, avec le bouquet [API Particulier](https://particulier.api.gouv.fr/catalogue) opéré par la DINUM, vous avez accès avec une seule habilitation aux données suivantes :
- Quotient familial CAF et composition familiale (_Usage sans FranceConnect_)
- Statut étudiant dans un établissement de l’enseignement supérieur (_Usage avec et sans FranceConnect_)
- Statut étudiant boursier (_Usage avec et sans FranceConnect_)
- Statut élève scolarisé et élève boursier (_Usage avec et sans FranceConnect_)
- Statut demandeur d'emploi (_Usage sans FranceConnect_)


🔎 En savoir plus sur [les API FranceConnectées](https://api.gouv.fr/guides/api-franceconnectees)

### API intéressantes pour améliorer l'expérience utilisateur

En complément, certaines données (en libre accès) peuvent être utiles pour faciliter le parcours en ligne de vos usagers :

| Base de donnée  | Usage  |
|---------| --------|
| [Etablissements scolaires](https://api.gouv.fr/les-api/api-annuaire-education)  | Permettre aux usagers de sélectionner un établissement scolaire dans une liste   |
| [Base adresse nationale](https://api.gouv.fr/les-api/base-adresse-nationale)  | Permettre l'autocomplétion d'un adresse postale dans un formulaire en ligne       |
| [Découpage administratif](https://api.gouv.fr/les-api/api-geo)  | Permettre aux usagers de sélectionner une commune dans une liste (ou de l'autocompléter) |


## Ils utilisent déjà les API

De nombreuses autorités d'organisation de la mobilité (AOM) utilisent déjà des API et ont ainsi dématérialisé la tarification de leurs titres de transport : 

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