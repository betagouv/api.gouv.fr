---
title: Tarification sociale et solidaire des transports
tagline: AOM, obtenez automatiquement les données nécessaires à l'attribution des tarifs réduits de transports collectifs.
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
- [Exemple d'utilisation](#exemple-d'utilisation)
- [Les API et données utiles](#les-api-et-donnees-utiles)
- [Ils utilisent déjà les API](#ils-utilisent-deja-les-api)
- [Demander un accès aux API](#demander-un-acces-aux-api)

## Simplifier la tarification des transports grâce aux API

Autorités organisatrices de mobilité, en utilisant les API :
- 😀 Pour mettre en oeuvre une **tarification sociale, il n'est plus nécessaire de collecter** : 
   - le statut demandeur d'emploi  ;
   - le certificat de scolarité collège/lycée et le statut élève boursier ;
   - le certificat de scolarité étudiant et le statut étudiant boursier ;
   - le statut bénéficiaire de la complémentaire santé solidaire avec ou sans participation.
- 😃 Pour mettre en oeuvre une **tarification solidaire, il n'est plus nécessaire de demander** : 
   - le quotient familial CAF & MSA ;
   - le revenu fiscal de référence.
- 🖥 Vous pouvez **dématérialiser totalement votre service en ligne** car vos agents n’ont **plus besoin de vérifier les justificatifs**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;
- 👨‍💼 Une **utilisation logicielle au guichet est aussi possible**, tout en évitant le stock des pièces justificatives, les erreurs de saisie et les fraudes.
- 🎯 Enfin, vous **participez à la simplification des démarches pour les citoyens** en mettant en oeuvre le [« Dites-le-nous une fois »](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/), en application de l’[article L113-12 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037313155).

## Exemple d'utilisation
**[Voir une démonstration en ligne](https://api-particulier-demonstrateur.osc-secnum-fr1.scalingo.io/transport/choix-personnage)**

**Un usager demandeur d'emploi souhaite obtenir un titre de transport :**

**Étape 1 :** L'usager se connecte à son espace personnel avec FranceConnect, sur le site de la démarche en ligne. Son statut de demandeur d'emploi est automatiquement reconnu.

> ⚙️ **En arrière plan** : Un appel à l'API statut demandeur d'emploi est effectué et permet de confirmer le statut.

**Étape 2 :** La réduction est automatiquement attribuée. L'usager n'a plus qu'à régler son titre.

Selon la tarification appliquée, différentes API peuvent être utiles et sont détaillées ci-après.

## Les API et données utiles

La définition des besoins de pièces justificatives nécessaires à ce cas d'usage est en cours par un groupe de travail coordonné par la DINUM.

Une première [étude auprès de 20 autorités organisatrices de la mobilité (AOM)](/resources/rapport-gart.pdf) a été effectuée.

**👋 Pour participer à ce groupe de travail, [écrivez-nous ici](mailto:contact@api.gouv.fr?subject=Participation-au-cas-d'usage-transports)**.

### Détail de toutes les données

| Données utiles |  API **avec FranceConnect** | API **sans** FranceConnect |
| --- | --- | --- |
| **Revenu fiscal de référence**, nombre de parts fiscales | ✅ Avec FranceConnect&nbsp;: [API Impôt particulier - DGFIP](/les-api/impot-particulier) | ✅ Sans FranceConnect&nbsp;: [API Impôt particulier - DGFIP](/les-api/impot-particulier) |
| **Quotient familial CAF/MSA** et composition familiale - CNAF & MSA | ⌛️ Avec FranceConnect&nbsp;: _prévu T1 2024_| ✅ Sans FranceConnect&nbsp;: [API Quotient familial CAF du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/cnaf/quotient_familial) |
| **Certificat de scolarité primaire/secondaire et statut élève boursier** - Ministère de l'éducation nationale | ⌛️ Avec FranceConnect&nbsp;: _À venir_    | ✅ Sans FranceConnect&nbsp;: [API statut élève scolarisé du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/education_nationale/statut_eleve_scolarise) |
| **Certificat de scolarité étudiant** d'un établissement de l’enseignement supérieur - MESRI |✅ Avec FranceConnect&nbsp;: [API Statut étudiant - MESRI ](https://api.gouv.fr/les-api/api-statut-etudiant)| ✅ Sans FranceConnect&nbsp;: [API statut étudiant du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/mesri/statut_etudiant)|
| **Statut étudiant boursier** - CNOUS  | ✅ Avec FranceConnect&nbsp;: [API statut étudiant boursier du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier) |  ✅ Sans FranceConnect&nbsp;: [API statut étudiant boursier du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier)|
| **Statut demandeur d'emploi** et catégorie (A,B,C,D) - France Travail  |✅ Avec FranceConnect&nbsp;: [API statut demandeur d'emploi - France Travail ](/les-api/api-statut-demandeur-emploi) |✅ Sans FranceConnect&nbsp;: [API statut demandeur d'emploi du **bouquet API Particulier**](https://particulier.api.gouv.fr/catalogue/pole_emploi/situation)|   
| **Montants des paiements des allocations ou des aides** - France Travail |✅ Avec FranceConnect&nbsp;: [API Indemnités France Travail - France Travail](https://api.gouv.fr/les-api/api-indemnisation-pole-emploi)  | ✅ Sans FranceConnect&nbsp;: [API Indemnités France Travail - France Travail](https://particulier.api.gouv.fr/catalogue/pole_emploi/indemnites) |
| **Statut complémentaire santé solidaire (CSS)**, avec ou sans participation - Direction de la sécurité sociale | ✅ Avec FranceConnect&nbsp;: [API complémentaire santé solidaire](https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire)  | ✅ Sans FranceConnect&nbsp;: [API complémentaire santé solidaire](https://particulier.api.gouv.fr/catalogue/cnaf_msa/complementaire_sante_solidaire)|
| **Statut revenu de solidarité active (RSA)** - Direction de la sécurité sociale | ⌛️ Avec FranceConnect&nbsp;: _prévu T4 2023 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    | ⌛️ Sans FranceConnect&nbsp;: _prévu T4 2023 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    |
| **Statut revenu de solidarité active (RSA)** - Direction de la sécurité sociale | ⌛️ Avec FranceConnect&nbsp;: _prévu T1 2024 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    | ⌛️ Sans FranceConnect&nbsp;: _prévu T1 2024 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_ |
|**L'allocation adulte handicapé (AAH)** - CNAF | ⌛️ Avec FranceConnect&nbsp;: _prévu T1 2024 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    | ⌛️ Sans FranceConnect&nbsp;: _prévu T1 2024 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_ |
|**L' Allocation de soutien familial (ASF)** - CNAF | ⌛️ Avec FranceConnect&nbsp;: _prévu T1 2024 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_    | ⌛️ Sans FranceConnect&nbsp;: _prévu T1 2024 dans le [bouquet API Particulier](https://particulier.api.gouv.fr/catalogue)_ 

### Données utiles de l'API Particulier

En synthèse de ce tableau, avec le bouquet [API Particulier](https://particulier.api.gouv.fr/catalogue) opéré par la DINUM, vous avez accès avec une seule habilitation aux données suivantes :
- Quotient familial CAF & MSA et composition familiale (_Usage sans FranceConnect_)
- Certificat de scolarité étudiant (_Usage avec et sans FranceConnect_)
- Statut étudiant boursier (_Usage avec et sans FranceConnect_)
- Certificat de scolarité primaire/secondaire et statut élève boursier (_Usage avec et sans FranceConnect_)
- Statut demandeur d'emploi (_Usage sans FranceConnect_)
- Montant des paiements versés par France Travail (_Usage sans FranceConnect_)


🔎 En savoir plus sur [les API FranceConnectées](https://api.gouv.fr/guides/api-franceconnectees)

### API intéressantes pour améliorer l'expérience utilisateur

En complément, certaines données (en libre accès) peuvent être utiles pour faciliter le parcours en ligne de vos usagers :

| Base de donnée  | Usage  |
|---------| --------|
| [Etablissements scolaires](https://api.gouv.fr/les-api/api-annuaire-education)  | Permettre aux usagers de sélectionner un établissement scolaire dans une liste   |
| [Base adresse nationale](https://api.gouv.fr/les-api/base-adresse-nationale)  | Permettre l'autocomplétion d'un adresse postale dans un formulaire en ligne       |

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
| Syndicat mixte des mobilités de l'aire Grenobloise | Transports publics |


## Demander un accès aux API

Vous devez formuler une demande d’habilitation auprès de chaque fournisseur de donnée pour les API FranceConnectée ou d’une seule demande pour l'API particulier.

### Justifier votre cadre juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de l'API Particulier et/ou des autres API en justifiant du cadre légal de l'utilisation des données :
- Cadre légal général : l'[Article L114-8 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315) fixe le cadre général qui oblige l’administration à échanger des données lors d’une démarche d’un usager ;
- Cadres légaux spécifiques : 
  - transports en commun** : [Articles L1231-1 et L1231-3 du Code des transports](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000023086525/LEGISCTA000023069255/#LEGISCTA000023085815)
  - transports scolaires : [Article L. 3111-7 du Code des transports](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043343069) et [article L. 214-18 du Code de l'éducation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030999998)
  - Utilisation de la complémentaire santé solidaire comme critère de tarification : [Article L1113-1 du Code des transports](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042005921).
    

### Formulaires de demande d'accès

Les [API disponibles dans l'API Particulier](https://particulier.api.gouv.fr/catalogue) vous intéressent ? Vous n'avez qu'une seule demande d'habilitation à effectuer : 

<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

Vous avez besoin d'autres données distribuées par d'autres fournisseurs ? Il vous faudra faire une demande dédiée par API.

⚠️ Lors de votre demande d’habilitation, vous vous engagez à ne demander que les données strictement nécessaires à la réalisation de la démarche administrative.

🛠 🧰 Avant de faire votre demande d'habilitation, **assurez-vous que votre service informatique ou votre éditeur de logiciel est en mesure d'intégrer des API**. L'API Particulier détaille [ici une liste de prérequis techniques](https://particulier.api.gouv.fr/developpeurs#prerequis-techniques). 
