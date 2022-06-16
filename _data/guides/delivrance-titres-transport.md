---
title: Tarification sociale et solidaire des transports
tagline: Vous êtes une collectivité, un opérateur ou un éditeur de logiciel ? Appliquez facilement un tarif de vos titres de transport adapté à la situation de vos usagers, en utilisant les données de l'API Particulier.
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

## Simplifier le traitement des dossiers grâce aux API

Les collectivités et les autorités organisatrices de mobilités mettent en œuvre des tarifications sociales et solidaires.

Plusieurs sources de données disponibles par API sont proposées afin d’éviter aux usagers des transports publics d’avoir à justifier de leurs statuts sociaux ou de leurs revenus et simplifier leurs démarches.

Ces API sont principalement utilisées dans la cadre de services ligne qui peuvent, de ce fait, être **complètement dématérialisés sans intervention d’agents.**

**L’usage des ces API permet aussi :**

1. d’obtenir des données sûres et d’éviter les fraudes,
2. de ne pas avoir à contrôler et stocker des pièces justificatives,
3. de diminuer/supprimer les interventions en   en backoffice,
4. d’éviter les erreurs de saisie (de l’usager ou du service traitant).

Une utilisation logicielle au guichet est aussi possible.

## Comment ça marche ?

Les API sont disponibles - que les téléservices utilisent  franceConnect ou non. 

🔎 En savoir plus sur [les API FranceConnectées](https://api.gouv.fr/guides/api-franceconnectees)

Un téléservice peut aussi proposer deux modes de connection, l’un avec FranceConnect, l’autre sans.
Dans ce dernier cas il convient d’utiliser [l’API particulier](https://api.gouv.fr/les-api/api-particulier ).  

**🔍 Consulter [l'étude réalisée par DINUM auprès de 20 AOM](/resources/rapport-gart.pdf) visant à répertorier l'ensemble des besoins de pièces justificatives**

**👋 Pour participer au groupe de travail associé, [vous pouvez écrire ici](mailto:contact@api.gouv.fr?subject=Participation-au-cas-d'usage-transports)**

## Les données disponibles

| Nom       | Description                                         |Statut   |Dispo sans FranceConnect | Administration|
| --------- | --------- |----------------------------------------------------|-----------------|--------- |
| [API Impôt particulier](https://api.gouv.fr/les-api/impot-particulier)  | Revenus déclarés auprès de l'administration fiscale |✅ En production   |[API Impôt particulier](https://api.gouv.fr/les-api/impot-particulier) - [API  particulier](https://api.gouv.fr/les-api/api-particulier)   |DGFiP   |
| [API Indemnités Journalières](https://api.gouv.fr/les-api/api-indemnites-journalieres-cnam)   | Montant des indemnités journalières de l'Assurance Maladie payé à un assuré sur une période|✅ En production   |Non prévu |CNAM |
| [API de droits à l'Assurance Maladie](https://api.gouv.fr/les-api/api_ameli_droits_cnam) | Droits d’un individu ou d’une famille (enfants rattachés), gérés par le régime général de l’Assurance Maladie |✅ En production  |Non prévu |CNAM   |
| [API Statut étudiant](https://api.gouv.fr/les-api/api-statut-etudiant)| Statut de l’inscription dans un établissement de l’enseignement supérieur |✅ En production  |[API  particulier](https://api.gouv.fr/les-api/api-particulier)|MESRI   |
| [API Statut étudiant boursier](https://api.gouv.fr/les-api/api-statut-etudiant-boursier)| Statut d’étudiant boursier  |✅ En production  | [API  particulier](https://api.gouv.fr/les-api/api-particulier) |CNOUS / MESRI                                          |
| API statut demandeur d'emploi   |Statut et catégorie (A,B,C,D)   |⌛️ bientôt disponible |[API  particulier](https://api.gouv.fr/les-api/api-particulier)| Pôle Emploi                        |
| API Indemnités Pôle emploi   | Montant des indemnités versées par pôle emploi   |⌛️ bientôt disponible|⌛️ bientôt disponible |Pôle Emploi                        |
| API Prestations sociales   | Inscription au RSA, bénéficiaires de la CSS (complémentaire sociale solidaire) |⌛️ bientôt disponible   |⌛️ bientôt disponible|DSS |
|API scolarité | attestation de socolarité, apprenti, boursier |Mars 2023  |fin 2022|MEN|
|API quotient familial | Quotient familial, composition familiale|En cours de spécification  | [API  particulier](https://api.gouv.fr/les-api/api-particulier)|CNAF|
|API quotient familial| Quotient familial, composition familiale |  2023|En cours de spécification|MSA|
|API famille nombreuse| carte famille nombreuse |  2023|2023|Ministère des transports|

### Les données disponibles en libre accès

En complément, des données complémentaires sont disponibles en libre accès :

| Donnée  | Utilité                                             |
|---------| --------|
| [Etablissements scolaires](https://api.gouv.fr/les-api/api-annuaire-education)  | Permettre aux usagers de sélectionner un établissement scolaire dans une liste   |
| [Base adresse nationale](https://api.gouv.fr/les-api/base-adresse-nationale)  | Permettre l'autocomplétion d'un adresse postale dans un formulaire en ligne       |
| [Découpage administratif](https://api.gouv.fr/les-api/api-geo)  | Permettre aux usagers de sélectionner une commune dans une liste (ou de l'autocompléter) |

## Comment accéder aux données ?

Vous devez formuler une demande d’habilitation auprès de chaque fournisseur de donnée pour les API FranceConnectée ou d’une seule demande pour l'API particulier.

Pour remplir votre demande, vous aurez besoin :

- de votre numéro SIRET
- du cadre juridique qui vous légitime à demander les données

<details>
  <summary>Précisions sur le cadre juridique</summary>

L’article 114-8 du code des relations entre le public et l’administration oblige l’administration à échanger des données lors d’une démarche d’un usager.

Vous devez donc indiquer le cadre juridique qui vous légitime à instruire une demande d’un usager.

Pour le **transport scolaire** : Les transports scolaires sont des transports réguliers publics régis par l'[article L. 3111-7 du Code des transports](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000023086525&idArticle=LEGIARTI000023070992&dateTexte=&categorieLien=cid)
 et par l'[article L. 214-18 du Code de l'éducation](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000030999998&cidTexte=LEGITEXT000006071191&dateTexte=20170901)

**Transport en commun** :  Article L1231-1 et L1231-3 du code des transports

</details>

<br>

- de la description du service justifiant une simplification pour les citoyens
- des coordonnées de l'équipe
- des coordonnées de votre délégué à la protection des données et responsable de traitement

<Button href="#les-donnees-disponibles">Accéder aux API</Button>

## Les AOM qui l'utilisent déjà

| Autorité | Type de transport |
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
