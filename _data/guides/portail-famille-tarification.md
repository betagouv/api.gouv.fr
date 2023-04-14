---
title: Portail famille des communes
tagline: Communes et intercommunalités, simplifiez les démarches des familles en calculant automatiquement leur tarif de restauration scolaire, de crèches ou d'activités périscolaires ou municipales.
tags: cas usage, api particulier, portail famille, quotient familial dématérialisé, tarification restauration scolaire, tarification activités périscolaires
image: portail_famille.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

<details>
   <summary>Qu'est-ce qu'un portail famille ?</summary>

De plus en plus de communes et intercommunalités mettent à disposition des habitants un portail famille permettant d'accéder à des services en ligne pour gérer les activités de l'ensemble de la famille : la crèche, l'halte-garderie, les centres de loisirs, la restauration scolaire, les goûters, les études, le conservatoire, l'atelier beaux-arts etc..

Ce type de portail permet généralement de réserver et payer en ligne les factures liées aux activités péri- et extrascolaires, de suivre les paiements et de gérer les informations liées au compte de la famille. La tarification de ces activités peut être sociale ou solidaire, c'est-à-dire adaptée en fonction du statut ou des ressources de la famille.

En général, le calcul des tarifs utilise le quotient familial de la Caisse d’allocations familiales (CAF) et/ou l'avis d'imposition (DGFIP) fournis par les citoyens.

</details>

# Table des matières

- [Une simplification des démarches du portail famille grâce aux API](#une-simplification-des-démarches-du-portail-famille-grâce-aux-API)
- [Liste des API utiles](#liste-des-api-utiles)
- [Améliorer votre portail famille avec API Particulier](#ameliorer-votre-portail-famille-avec-api-particulier)
  - [Exemple d'application](#exemple-d-application)
  - [Liste des éditeurs](#les-editeurs-proposant-des-portails-famille-connectes-a-l-api-particulier)
- [Demander un accès aux API](#demander-un-accès-aux-api)

## Une simplification des démarches du portail famille grâce aux API 

Communes et intercommunalités, en intégrant des API dans votre portail famille :

- 😃 les familles peuvent obtenir une **tarification solidaire et sociale immédiate et automatique**, permise grâce à la liaison avec les données de l'API Particulier et de la DGFIP ;

- ⏰ Vous accélérez le traitement des dossiers car vos agents n’ont **pas de vérifications supplémentaires à réaliser**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;

- 🎯 Enfin, vous **participez activement à la simplification des démarches pour les citoyens en mettant en place le [« Dites-le-nous une fois »](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/) : vous ne demandez plus aux familles une information qu’elles ont déjà donnée ou que l’administration connaît déjà.
Vous vous mettez ainsi **en conformité avec la législation** et, plus particulièrement l’[Article L113-12 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037313155).

## Liste des API utiles

| API utiles | Données disponibles |  API utilisable avec France Connect |
| --- | --- | --- |
| [API Impôt particulier - DGFIP](/les-api/impot-particulier) | Revenu fiscal de référence, nombre de parts fiscales | ✅ |
| [API Statut demandeur d'emploi - Pôle emploi](/les-api/api-statut-demandeur-emploi) | Statut demandeur d'emploi | ✅ |
| [API Indemnisation Pôle emploi - Pôle emploi](/les-api/api-indemnisation-pole-emploi) | Indémnités pôle emploi | ✅ |
| Bouquet [API Particulier](https://particulier.api.gouv.fr/catalogue) | Quotient familial CAF, composition familiale ; statut demandeur d'emploi ; statut étudiant, statut étudiant boursier et échelon ; statut élève scolarisé et échelon de bourse | ⚙️ Partiellement FranceConnecté |

## Améliorer votre portail famille API Particulier

L'API Particulier est un bouquet d'API délivrant des informations administratives des particuliers issues de différents fournisseurs de données.

Avec l'API Particulier, vous avez notamment accès au statut demandeur d'emploi, au statut élève scolarisé, au statut étudiant, aux échelons de bourses, et au quotient familial CAF.

<Button href="https://particulier.api.gouv.fr/catalogue">Découvrir l'API Particulier</Button>

### Exemple d'application

#### Un parent souhaite inscrire son enfant à la cantine, sur le portail famille de sa commune connecté à l'API Particulier.

Prenons le cas d'une tarification sociale progressive de la cantine scolaire basée sur le quotient familial, avec une tarification aménagée pour les demandeurs d'emploi :

1. Le parent se connecte à son espace personnel sur le portail famille, il clique sur la démarche dédiée à l'inscription cantine scolaire et **renseigne son numéro d'allocataire et son code postal**.

> ⚙️ **En arrière plan** : Un appel à l'API quotient familial CAF du bouquet API Particulier est effctué et permet de récupérer le quotient familial du mois en cours.

2. La tarification de la cantine scolaire est automatiquement calculée en fonction du quotient familial. Le parent n'a plus qu'à terminer l'inscription.

3. Dans le cas d'une tarification aménagée pour les demandeurs d'emploi, ce même parent renseigne son identifiant pôle emploi dans le portail famille. 

> ⚙️ **En arrière plan** : Un appel à l'API statut demandeur d'emploi du bouquet API Particulier est effectué et permet de confirmer le statut et de vérifier l'identité.

Selon la tarification appliquée par votre commune ou intercommunalité, différentes API peuvent être utiles et sont détaillées ci-après.

#### Témoignage de la ville de TODO

LOREM IPSUM TODO

### Les éditeurs proposant des portails famille connectés à l'API Particulier

Les éditeurs suivants proposent des portails famille et sont déjà connectés à l'API Particulier :

| Éditeur                      | Nom de la solution            |
| ---------------------------- | ----------------------------- |
| Agora Plus                   | Agor@Famille Premium          |
| Ciril Group                  | Civil Enfance                 |
| JVS                          | Parascol – MonEspaceFamille   |
| Arpège                       | Concerto                      |
| NFI Nord France Informatique |                               |
| Entr'ouvert                  | Publik                        |
| Berger Levrault              | BL Enfance                    |
| Jdéalise                     | Cantine de France             |
| Mushroom                     | CityFamily                    |
| TeamNet                      | Axel                          |
| Abelium                      | Domino Web                    |
| Waigéo                       | MyPérischool                  |
| AIGA                         | iNoé                          |
| Qiis                         | eTicket                       |
| JVS-Mairistem                | Parascol                      |
| 3D Ouest                     | P3D Ouest                     |
| Amiciel                      | Malice                        |

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [api-particulier@api.gouv.fr](mailto:api-particulier@api.gouv.fr)

<br/>
<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

## Demander un accès aux API

### Justifier votre cadre juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de l'API Particulier et/ou des autres API en justifiant du cadre légal de l'utilisation des données :

- Cadre légal général : l'[Article L114-8 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315) fixe le cadre général des échanges de données au sein de l'administration ;

- Cadre légal spécifique aux téléservices : En tant que collectivités territoriales vous avez donc un droit d'accès à certaines données dans le cadre de demandes, services pro-actifs et déclarations usagers. 
L'[Arrêté du 04/07/13 sur les téléservices](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027697207/#:~:text=Dans%20les%20r%C3%A9sum%C3%A9s-,Arr%C3%AAt%C3%A9%20du%204%20juillet%202013%20autorisant%20la%20mise%20en%20%C5%93uvre,publiques%20locales%20dont%20ils%20sont) détaille à l'article 1 la liste des démarches par secteur. Aidez-vous de cet arrêté pour justifier de votre cadre légal.

- Justificatif des données nécessaires au calcul de la tarification : Il est indispensable de **fournir l'acte/ la délibération** qui fixe les conditions tarifaires et qui permettra d'apprécier finement le droit d'accès à chaque donnée.

### Formulaires de demande d'accès

Les [API disponibles dans l'API Particulier](https://particulier.api.gouv.fr/catalogue) vous intéressent ? Vous n'avez qu'une seule demande d'habilitation à effectuer : 

<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

Vous avez besoin du revenu fiscal de référence pour votre tarification ? Il vous faudra faire une demande dédiée auprès de l'[API Impôt Particulier de la DGFIP](/les-api/impot-particulier).