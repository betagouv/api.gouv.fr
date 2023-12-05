---
title: Aides des centres communaux d'action sociale (CCAS)
tagline: CCAS, simplifiez le dépôt et l'instruction des dossiers d'aides sociales grâce à l'API Particulier.
tags: cas usage, api particulier, CCAS
image: dossier.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Particulier
---

<details>
   <summary>Quelle est la mission des centres communaux d'action sociale ?</summary>

Les centres communaux d'action sociale (CCAS) sont amenés à instruire de nombreux dossiers d'obtention d'aide sociale pour leurs usagers : aide sociale légale, aide alimentaire, chèque énergie, aide au bus, etc..

Ces dossiers utilisent généralement les données d’état-civil, l'adresse, le quotient familial de la Caisse d’allocations familiales (CAF), la composition du foyer, l'avis d'imposition.

</details>


## Table des matières

- [Simplifier la délivrance d'aides sociales en CCAS grâce aux API](#simplifier-la-delivrance-d'aides-sociales-en-ccas-grace-aux-api)
- [Les API et données utiles](#les-api-et-donnees-utiles)
- [Améliorer votre service avec l'API Particulier](#ameliorer-votre-service-avec-l'api-particulier)
  - [Ils utilisent l'API Particulier](#ils-utilisent-l'api-particulier)
  - [Liste des éditeurs](#liste-des-editeurs)
- [Demander un accès aux API](#demander-un-acces-aux-api)

## Simplifier la délivrance d'aides sociales en CCAS grâce aux API

CCAS, en intégrant des API dans vos outils en backoffice :
- 😃 Pour aider les citoyens à réaliser leurs démarches, **les agents sur place n'ont plus besoin de collecter** :
   - le statut demandeur d'emploi  ;
   - le certificat de scolarité collège/lycée et le statut élève boursier ;
   - le certificat de scolarité étudiant et le statut étudiant boursier ;
   - le statut bénéficiaire de la complémentaire santé solidaire avec ou sans participation ;
   - le quotient familial CAF ;
   - le revenu fiscal de référence.
- ⏰ Vous accélérez le traitement des dossiers car vos agents n’ont **pas à vérifier les données saisies et les pièces justificatives fournies**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;
- 🎯 Enfin, vous **participez à la simplification des démarches pour les citoyens** en mettant en oeuvre le « Dites-le-nous une fois », en application de l’[article L114-8 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315).



## Les API et données utiles

| API utiles | Données disponibles |  Peut s'utiliser avec FranceConnect |
| --- | --- | --- |
| [API Impôt particulier](/les-api/impot-particulier) - DGFIP | Revenu fiscal de référence, nombre de parts fiscales | ✅ |
| Bouquet [API Particulier](https://particulier.api.gouv.fr/catalogue) - opéré par la DINUM | Quotient familial CAF, composition familiale, statut boursier élève, statut boursier étudiant, statut demandeur d'emploi, statut complémentaire santé solidaire| ⚙️ Certaines API sont disponibles avec FranceConnect |


## Améliorer votre service avec l'API Particulier

L'API Particulier est un bouquet d'API délivrant des informations administratives des particuliers issues de différents fournisseurs de données.

Avec l'API Particulier, vous avez notamment accès au quotient familial CAF, au statut élève scolarisé et boursier, au statut étudiant et étudiant boursier, au statut demandeur d'emploi...

<Button href="https://particulier.api.gouv.fr/catalogue">Découvrir l'API Particulier</Button>

### Ils utilisent l'API Particulier

<Quote logo="/images/guides/sitiv.png" link='https://www.sitiv.fr/Actualites/L-action-sociale-des-villes-du-SITIV-integre-le-dispositif-Dites-le-nous-une-fois' who='Le SITIV' title='membre du réseau Déclic'>
Le principe du "Dites-le nous une fois" (...) permet aux citoyens de ne pas avoir à donner leur consentement mais d'être simplement informés de l'utilisation de leurs pièces.
C'est dans ce cadre que le SITIV intègre directement au logiciel métier les informations des usagers (...) Les saisies dans les dossiers usagers sont ainsi facilitées et certifiées.
</Quote>

### Liste des éditeurs

Les éditeurs suivants proposent des logiciels utiles aux CCAS et sont déjà connectés à l'API Particulier :

| Éditeur | Nom de la solution       |
| ------- | ------------------------ |
| ArcheMC2| ArcheMC2 Social          |
| Arpège  | Sonate Opus              |

Vous êtes un éditeur et vous souhaitez apparaître dans cette liste ? Écrivez-nous à [api-particulier@api.gouv.fr](mailto:api-particulier@api.gouv.fr)



## Demander un accès aux API

### Justifier votre cadre juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de l'API Particulier et/ou des autres API en justifiant du cadre légal de l'utilisation des données :
- Cadre légal général : l'[Article L114-8 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315) fixe le cadre général qui oblige l’administration à échanger des données lors d’une démarche d’un usager ;
- Cadre légal spécifique aux téléservices : En tant que collectivités territoriales vous avez donc un droit d'accès à certaines données dans le cadre de demandes, services pro-actifs et déclarations usagers. 
L'[Arrêté du 04/07/13 sur les téléservices](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000027697207/#:~:text=Dans%20les%20r%C3%A9sum%C3%A9s-,Arr%C3%AAt%C3%A9%20du%204%20juillet%202013%20autorisant%20la%20mise%20en%20%C5%93uvre,publiques%20locales%20dont%20ils%20sont) détaille à l'article 1 la liste des démarches par secteur. Aidez-vous de cet arrêté pour justifier de votre cadre légal.
- Justificatif des données nécessaires au calcul de la tarification : Il est indispensable de **fournir l'acte/ la délibération** qui fixe les conditions tarifaires et qui permettra d'apprécier finement le droit d'accès à chaque donnée.

### Formulaires de demande d'accès

Les [API disponibles dans l'API Particulier](https://particulier.api.gouv.fr/catalogue) vous intéressent ? Vous n'avez qu'une seule demande d'habilitation à effectuer : 

<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas">Remplir une demande API Particulier</Button>

Vous avez besoin des données de revenu de la DGFIP ? Il vous faudra faire une [demande d'habilitation dédiée](/les-api/impot-particulier).

⚠️ Lors de votre demande d’habilitation, vous vous engagez à ne demander que les données strictement nécessaires à la réalisation de la démarche administrative.

🛠 🧰 Avant de faire votre demande d'habilitation, **assurez-vous que votre service informatique ou votre éditeur de logiciel est en mesure d'intégrer des API**. L'API Particulier détaille [ici une liste de prérequis techniques](https://particulier.api.gouv.fr/developpeurs#prerequis-techniques). 
