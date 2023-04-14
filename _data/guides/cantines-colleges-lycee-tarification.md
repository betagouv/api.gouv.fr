---
title: Tarification cantine des collèges et lycées
tagline: Départements et régions, simplifiez les démarches des familles en calculant automatiquement leur tarif de restauration scolaire pour les collégiens et lycéens.
tags: cas usage, api particulier, quotient familial dématérialisé, tarification restauration scolaire, cantine collège, cantine lycée
image: portail_famille.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

<details>
   <summary>Comment fonctionne la tarification des cantines dans les collèges et lycées ?</summary>

Les départements sont en charge des cantines des collèges, et les régions, des cantines des lycées. Dans ce cadre, ce sont ces collectivités qui fixent les tarifs de la restauration scolaire et qui peuvent décider d'appliquer une tarification sociale sur la base du quotient familial des familles.

Pour en savoir plus, consulter cette page de [Service-Public.fr](https://www.service-public.fr/particuliers/vosdroits/F24569)

</details>


## Table des matières

- [Simplifier la tarification des cantines au collège et lycée grâce à l'API Particulier](#simplifier-la-tarification-des-cantines-au-college-et-lycee-grace-a-l-api-particulier)
- [Les données utiles](#les-donnees-utiles)
  - [Exemple d'application](#exemple-d-application)
  - [Liste des éditeurs](#les-editeurs-connectes-a-l-api-particulier)
- [Demander un accès à l'API Particulier](#demander-un-acces-a-l-api-particulier)

## Simplifier la tarification des cantines au collège et lycée grâce à l'API Particulier

Département et région, en intégrant l'API Particulier dans votre système d'information :

- 😃 les familles peuvent obtenir une **tarification solidaire et sociale immédiate et automatique** pour la cantine des collèges et lycées, permise grâce à la liaison avec les données de l'API Particulier dont notamment le quotient familial CAF ;

- ⏰ Vous accélérez le traitement des dossiers car vos agents n’ont **pas de vérifications supplémentaires à réaliser**, les informations obtenues par l'API sont certifiées 🔎 ;

- 🎯 Enfin, vous **participez activement à la simplification des démarches pour les citoyens** en mettant en place le [« Dites-le-nous une fois »](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/) : vous ne demandez plus aux familles une information qu’elles ont déjà donnée ou que l’administration connaît déjà.
Vous vous mettez ainsi **en conformité avec la législation** et, plus particulièrement l’[article L113-12 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037313155).

## Les données utiles

L'API Particulier est un bouquet d'API délivrant des informations administratives des particuliers issues de différents fournisseurs de données, dont notamment la CNAF.

Avec l'API Particulier, vous aurez notamment accès au quotient familial CAF nécessaire au calcul de la tarification solidaire.

<Button href="https://particulier.api.gouv.fr/catalogue/cnaf/quotient_familial">Découvrir l'API Quotient familial CAF sur API Particulier</Button>


| API de l'API Particulier | Données fournies  | Utilité pour ce cas d'usage |
| --- | --- |
| [API Quotient familial CAF](https://particulier.api.gouv.fr/catalogue/cnaf/quotient_familial) - CNAF - opérée par la DINUM | Quotient familial CAF, composition familiale  | ✅ Utile |
| [API Statut étudiant](https://particulier.api.gouv.fr/catalogue/mesr/statut_etudiant) - Mesr - opérée par la DINUM | Statut étudiant | ❌ inutile |
| [API Statut étudiant boursier ](https://particulier.api.gouv.fr/catalogue/cnous/statut_etudiant_boursier) - Cnous - opérée par la DINUM | Statut étudiant boursier, échelon de bourse | ❌ inutile |
| [API Statut demandeur d'emploi](https://particulier.api.gouv.fr/catalogue/pole_emploi/situation) - Pôle emploi - opérée par la DINUM | Statut demandeur d'emploi | 🆗 Utile selon votre système de tarification |


## Exemple d'application

**### **Un parent souhaite inscrire son enfant à la cantine du lycée depuis le site de sa région connecté à l'API Particulier** :

1. Le parent se connecte à son espace personnel sur le site de la région, il clique sur la démarche dédiée à l'inscription cantine scolaire et **renseigne son numéro d'allocataire et son code postal**.

> ⚙️ **En arrière plan** : Un appel à l'API quotient familial CAF du bouquet API Particulier est effectué et permet de récupérer le quotient familial du mois en cours.

2. La tarification de la cantine scolaire est automatiquement calculée en fonction du quotient familial. Le parent n'a plus qu'à terminer l'inscription.

## Les éditeurs connectés à l'API Particulier

Les éditeurs suivants sont déjà connectés à l'API Particulier :

TODO

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [api-particulier@api.gouv.fr](mailto:api-particulier@api.gouv.fr)

<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

## Demander un accès à l'API Particulier

### Justifier votre cadre juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de l'API Particulier en justifiant du cadre légal de l'utilisation des données :

- Cadre légal général : l'[Article L114-8 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315) fixe le cadre général qui oblige l’administration à échanger des données lors d’une démarche d’un usager ;

- Cadre légal spécifique aux téléservices : En tant que collectivités territoriales vous avez donc un droit d'accès à certaines données dans le cadre de demandes, services pro-actifs et déclarations usagers. 
L'[Arrêté du 04/07/13 sur les téléservices](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027697207/#:~:text=Dans%20les%20r%C3%A9sum%C3%A9s-,Arr%C3%AAt%C3%A9%20du%204%20juillet%202013%20autorisant%20la%20mise%20en%20%C5%93uvre,publiques%20locales%20dont%20ils%20sont) détaille à l'article 1 la liste des démarches par secteur. Aidez-vous de cet arrêté pour justifier de votre cadre légal.

- Justificatif des données nécessaires au calcul de la tarification : Il est indispensable de **fournir l'acte/ la délibération** qui fixe les conditions tarifaires et qui permettra d'apprécier finement le droit d'accès à chaque donnée.

### Formulaires de demande d'accès

Vous souhaitez demander un accès à l'[API Particulier](https://particulier.api.gouv.fr/catalogue) ? Déposez votre demande d'habilitation :

<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

⚠️ Lors de votre demande d’habilitation, vous vous engagez à ne demander que les données strictement nécessaires à la réalisation de la démarche administrative.
