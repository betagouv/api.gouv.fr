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

Les communes et intercommunalités mettent à disposition des habitants un portail famille permettant d'accéder à des services en ligne pour gérer l'inscription et la facturation des services proposés par la collectivité : la crèche, l'halte-garderie, les centres de loisirs, la restauration scolaire, les goûters, les études, le conservatoire, l'atelier beaux-arts etc..

Ce type de portail permet généralement de réserver et payer en ligne les factures liées aux activités péri- et extrascolaires, de suivre les paiements et de gérer les informations liées au compte de la famille. La tarification de ces activités est adaptée aux ressources de la famille.

Selon la politique tarifaire choisie, le calcul des tarifs est réalisé grâce au quotient familial de la Caisse d’allocations familiales (CAF) et/ou l'avis d'imposition (DGFIP) fournis par les citoyens.

</details>

## Table des matières

- [Simplifier les démarches du portail famille grâce aux API](#simplifier-les-demarches-du-portail-famille-grace-aux-api)
- [Les API et données utiles](#les-api-et-donnees-utiles)
- [Améliorer votre portail famille avec l'API Particulier](#ameliorer-votre-portail-famille-avec-l'api-particulier)
  - [Exemple d'utilisation](#exemple-d'utilisation)
  - [Liste des éditeurs](#liste-des-editeurs)
- [Demander un accès aux API](#demander-un-acces-aux-api)

## Simplifier les démarches du portail famille grâce aux API 

Communes et intercommunalités, en intégrant des API dans votre portail famille :
- 😃 Pour instruire les dossiers, **il n'est plus nécessaire de demander aux familles de renseigner** : 
   - leur quotient familial CAF ;
   - leur revenu fiscal de référence.
- ⏰ Vous accélérez le traitement des dossiers car vos agents n’ont **pas à vérifier les données saisies et les pièces justificatives fournies**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;
- 🎯 Enfin, vous **participez à la simplification des démarches pour les citoyens** en mettant en oeuvre le « Dites-le-nous une fois », en application de l’[article L114-8 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315).

## Les API et données utiles

| API utiles | Données disponibles |  Peut s'utiliser avec FranceConnect |
| --- | --- | --- |
| Bouquet [API Particulier](https://particulier.api.gouv.fr/catalogue) - opéré par la DINUM | Quotient familial CAF, composition familiale| ⚙️ Certaines API sont disponibles avec FranceConnect |
| [API Impôt particulier](/les-api/impot-particulier) - DGFIP | Revenu fiscal de référence, nombre de parts fiscales | ✅ |

⚠️ Les données de l’API Impôt particulier ne permettent pas de calculer les tarifs en établissement d'accueil du jeune enfant (crèche, multi-accueil, halte-garderie…). **Elles ne doivent donc pas être utilisées pour le calcul des participations familiales en Eaje.** Une API spécifique est en cours de préparation.

## Améliorer votre portail famille avec l'API Particulier

L'API Particulier est un bouquet d'API délivrant des informations administratives des particuliers issues de différents fournisseurs de données.

Avec l'API Particulier, vous avez notamment accès au quotient familial CAF, au statut élève scolarisé et boursier, au statut étudiant et étudiant boursier, au statut demandeur d'emploi...

<Button href="https://particulier.api.gouv.fr/catalogue">Découvrir l'API Particulier</Button>

### Exemple d'utilisation

**Un parent souhaite inscrire son enfant à la cantine, sur le portail famille de sa commune connecté à l'API Particulier.**

Prenons le cas d'une tarification sociale progressive de la cantine scolaire basée sur le quotient familial, avec une tarification aménagée pour les demandeurs d'emploi :

**Étape 1 :** Le parent se connecte à son espace personnel sur le portail famille, il clique sur la démarche dédiée à l'inscription cantine scolaire et **renseigne son numéro d'allocataire CAF et son code postal**.

> ⚙️ **En arrière plan** : Un appel à l'API quotient familial CAF du bouquet API Particulier est effectué et permet de récupérer le quotient familial du mois en cours.

**Étape 2 :** Le parent est automatiquement positionné dans la grille tarifaire de la collectivité. Le parent n'a plus qu'à terminer l'inscription.


### Liste des éditeurs

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
| Cosoluce                     | Fluo                          |
Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [api-particulier@api.gouv.fr](mailto:api-particulier@api.gouv.fr)

## Demander un accès aux API

### Justifier votre cadre juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de l'API Particulier et/ou des autres API en justifiant du cadre légal de l'utilisation des données :
- Cadre légal général : l'[Article L114-8 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315) fixe le cadre général qui oblige l’administration à échanger des données lors d’une démarche d’un usager ;
- Cadre légal spécifique aux téléservices : En tant que collectivités territoriales vous avez donc un droit d'accès à certaines données dans le cadre de demandes, services pro-actifs et déclarations usagers. 
L'[Arrêté du 04/07/13 sur les téléservices](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027697207/#:~:text=Dans%20les%20r%C3%A9sum%C3%A9s-,Arr%C3%AAt%C3%A9%20du%204%20juillet%202013%20autorisant%20la%20mise%20en%20%C5%93uvre,publiques%20locales%20dont%20ils%20sont) détaille à l'article 1 la liste des démarches par secteur. Aidez-vous de cet arrêté pour justifier de votre cadre légal.
- Fournir **la délibération** qui fixe les critères de la tarification.

### Formulaires de demande d'accès

Les [API disponibles dans l'API Particulier](https://particulier.api.gouv.fr/catalogue) vous intéressent ? Vous n'avez qu'une seule demande d'habilitation à effectuer : 

<Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande API Particulier</Button>

Vous avez besoin des données fiscales ? Il vous faudra faire une [demande d'habilitation dédiée auprès de la DGFIP](/les-api/impot-particulier).

⚠️ Lors de votre demande d’habilitation, vous vous engagez à ne demander que les données strictement nécessaires à la réalisation de la démarche administrative.

🛠 🧰 Avant de faire votre demande d'habilitation, **assurez-vous que votre service informatique ou votre éditeur de logiciel est en mesure d'intégrer des API**. L'API Particulier détaille [ici une liste de prérequis techniques](https://particulier.api.gouv.fr/developpeurs#prerequis-techniques). 
