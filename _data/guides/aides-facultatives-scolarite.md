---
title: Aides facultatives à la scolarité
tagline: Simplifiez l'attribution des aides facultatives pour les élèves et des étudiants.
tags: cas usage, api particulier, ecole, collège, lycée, université, bourse, boursier, subvention
image: scolarite.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
related_guides:
api:
  - API Particulier
  - API Statut Etudiant
  - API Statut étudiant boursier
  - API Impôt particulier
---

<details>
   <summary>Qu'est-ce que les aides facultatives à la scolarité ?</summary>

Les communes, départements et régions ont mis en place des aides sociales pour aider les familles à financer la scolarité des enfants ou des étudiants.

Ces aides facultatives prennent différentes formes : aide financière, fourniture de matériel informatique, bon d’achat pour des livres. Elle sont conditionnées à certains critères sociaux.

Pour en bénéficier, il convient de justifier que l'élève ou l'étudiant concerné est bien scolarisé et parfois de fournir un justificatif de revenu ou de bourse. 
</details>

## Table des matières

- [Simplifier l'attribution des aides facultatives à la scolarité grâce aux API](#simplifier-l'attribution-des-aides-facultatives-a-la-scolarite-grace-aux-api)
- [Les API et données utiles](#les-api-et-donnees-utiles)
- [Améliorer la délivrance des aides facultatives avec l'API Particulier](#ameliorer-la-delivrance-des-aides-facultatives-avec-l'api-particulier)
  - [Exemple d'utilisation](#exemple-d'utilisation)
  - [Ils utilisent l'API Particulier](#ils-utilisent-l'api-particulier)
- [Demander un accès aux API](#demander-un-acces-aux-api)

## Simplifier l'attribution des aides facultatives à la scolarité grâce aux API 

Collectivités, en intégrant des API dans vos formulaires en ligne :
- 😃 Pour instruire les dossiers, **il n'est plus nécessaire de collecter** : 
   - les certificats de scolarité des élèves et/ou carte d'étudiant  ;
   - les justificatifs de bourse ;
   - les justificatifs de revenus.
- 🖥 Vous pouvez automatiser le traitement des dossiers, les agents n’auront **plus à vérifier les pièces justificatives fournies**, les informations obtenues par les API sous-mentionnées sont certifiées 🔎 ;
- 🎯 Enfin, vous **participez à la simplification des démarches pour les citoyens** en mettant en oeuvre le « Dites-le-nous une fois », en application de l’[article L114-8 du Code des relations entre le public et l’administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315).


## Les API et données utiles

| API utiles | Données disponibles |  Peut s'utiliser avec FranceConnect |
| --- | --- | --- |
| Bouquet [API Particulier](https://particulier.api.gouv.fr/catalogue) - opéré par la DINUM | Statut élève scolarisé et boursier, statut étudiant et étudiant boursier, quotient familial CAF | ⚙️ Certaines API sont disponibles avec FranceConnect |
| [API Impôt particulier](/les-api/impot-particulier) - DGFIP | Revenu fiscal de référence, nombre de parts fiscales | ✅ |


## Améliorer la délivrance des aides facultatives avec l'API Particulier

L'API Particulier est un bouquet d'API délivrant des informations administratives des particuliers issues de différents fournisseurs de données.

Avec l'API Particulier, vous avez notamment accès au quotient familial CAF, au statut élève scolarisé et boursier, au statut étudiant et étudiant boursier, au statut demandeur d'emploi...

<Button href="https://particulier.api.gouv.fr/catalogue">Découvrir l'API Particulier</Button>

### Exemple d'utilisation

**Un parent souhaite bénéficier de la fourniture d'un ordinateur pour son enfant scolarisé, depuis le portail de son département connecté à l'API Particulier.**

**Étape 1 :** Le parent se connecte à son espace personnel, il clique sur la démarche de demande d'un ordinateur pour les études de son enfant, il **renseigne le nom, prénom, sexe, date de naissance et établissement scolaire de son enfant**.

> ⚙️ **En arrière plan** : Un appel à l'API élève scolarisé du bouquet API Particulier est effectué et permet de vérifier que l'élève est bien scolarisé.

**Étape 2 :** Le parent n'a pas besoin de fournir le certificat de scolarité, la vérification a été faite automatiquement. L'attribution d'un ordinateur étant conditionnée selon les revenus, le parent **renseigne son numéro d'allocataire CAF, son code postal**.

> ⚙️ **En arrière plan** : Un appel à l'API quotient familial CAF du bouquet API Particulier est effectué et permet de récupérer le quotient familial du mois en cours.

**Étape 3 :** La famille est identifiée comme éligible à l'aide. Le parent n'a plus qu'à confirmer sa demande. Du côté du département, les agents n'auront pas à vérifier les informations renseignées car celles-ci sont certifiées.


### Ils utilisent l'API Particulier

<Quote logo="/images/guides/logo-dep-drome.png" link='https://www.ladrome.fr/mon-quotidien/education/le-departement-aide/' who='Département de la Drôme' title='Bourse départementale des collèges'>
Nous utilisons l'API Particulier pour délivrer des bourses aux collégiens. Cette aide est soumise à un barème dépendant des ressources de la famille.
L'API Particulier est utilisée actuellement pour récupérer le quotient familial CAF et la composition de la famille.
</Quote>


<Quote logo="/images/guides/logo-dep-haute-savoie.png" link='https://actu.hautesavoie.fr/explorez-actu/le-pret-etudiant-il-est-encore-temps' who='Département de la Haute-Savoie' title='Délivrer des prêts étudiants'>
Nous utilisons l'API Particulier pour connaître le quotient familial d'un étudiant ou de ses parents (s'il en est dépendant fiscalement) afin de vérifier l'éligibilité de sa demande de prêt.
</Quote>

## Demander un accès aux API

### Justifier votre cadre juridique

L'utilisation des données est encadrée légalement. Vous devez formuler une demande auprès de l'API Particulier et/ou des autres API en justifiant du cadre légal de l'utilisation des données :
- Cadre légal général : l'[Article L114-8 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045213315) fixe le cadre général qui oblige l’administration à échanger des données lors d’une démarche d’un usager ;
- Cadre réglementaire qui permet à la collectivité de mettre en place l'aide.
- Fournir **la délibération** qui justifie les données nécessaires à l'attribution de l'aide.

### Formulaires de demande d'accès

Les [API disponibles dans l'API Particulier](https://particulier.api.gouv.fr/catalogue) vous intéressent ? Vous n'avez qu'une seule demande d'habilitation à effectuer : 

<Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande API Particulier</Button>

Vous avez besoin des données fiscales ? Il vous faudra faire une [demande d'habilitation dédiée auprès de la DGFIP](/les-api/impot-particulier).

⚠️ Lors de votre demande d’habilitation, vous vous engagez à ne demander que les données strictement nécessaires à la réalisation de la démarche administrative.

🛠 🧰 Avant de faire votre demande d'habilitation, **assurez-vous que votre service informatique ou votre éditeur de logiciel est en mesure d'intégrer des API**. L'API Particulier détaille [ici une liste de prérequis techniques](https://particulier.api.gouv.fr/developpeurs#prerequis-techniques). 