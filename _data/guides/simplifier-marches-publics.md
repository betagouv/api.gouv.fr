---
title: Simplifier la gestion marchés publics
tagline: Utilisez les API pour faciliter les candidatures aux appels d'offre et simplifier l'instruction des dossiers
tags: cas usage, adresse, geo, postal, commune
image: dossier.jpg
noindex: true # this page will appear on Google
publish: false # this page will appear on /guides page
api:
  - API Entreprise
  - API Fichier des Comptes Bancaires et Assimilés (FICOBA)
  - API Sirene
---

## Comment simplifier la gestion des marchés publics grâce aux API ?

Lorsqu’un appel d’offre est lancé par votre administration, des entreprises peuvent y candidater pour proposer leurs prestations.

Dans ce cadre, de nombreux justificatifs sont demandés aux entreprises, et vérifiés par l’administration.
La multiplicité des données traitées nécessite du temps à la fois pour les entreprises candidates et pour les administrations en charge du suivi et de l'instruction des dossiers.

Pour y remédier, [api.gouv.fr](http://api.gouv.fr) référence des API et des bouquets d’API permettant de faciliter l’instruction des dossiers.

### 📨 Faciliter le dépôt des candidatures

Le dépôt des candidatures peut être simplifié, en pré-remplissant les formulaires des entreprises et associations. Les informations les concernant sont automatiquement insérées lorsqu’elles ont entré leur numéro SIRET ou RNA.

### ⏰ Accélérer la construction **du dossier et le travail de l’organisation publique instructrice**

Vous pouvez récupérer les justificatifs nécessaires à l’instruction, sans les réclamer aux entreprises et associations demandeuses.

### 🔄 Assurer le suivi des prestataires

En intégrant les API disponibles, la mise à jour des documents se fait de manière automatique, telle que l’attestation de vigilance.

### ☑️ Vérifier automatiquement le RIB des entreprises

Dans le cadre des appels d’offre émis par les administrations, les entreprises candidates fournissent un relevé d’identité bancaire en anticipation des opérations bancaires inhérentes à leur prestation.

Les administrations sont tenues de vérifier que le RIB saisi est correct, et qu’il est bien rattaché à l’entité juridique qui candidate (SIRET).

L’[API FICOBA](/les-api/api_comptes_bancaires_ficoba) permet d’effectuer cette vérification de manière automatique.

## **Ce que cela change pour vous, administrations**

En intégrant les API dans votre système d’information ou votre site internet :

- ✅ Vous **accédez facilement aux données publiques** nécessaires au suivi et à l'instruction des marchés publics ;
- ✅ Vous n’avez **plus besoin de demander et re-demander certains justificatifs** aux entreprises ;
- ✅ Vous n’avez pas de vérification supplémentaire à réaliser car les **informations sont certifiées à la source**.

## Quelles sont les API nécessaires ?

### API Entreprise : un point d'accès vers un ensemble de données

Le bouquet API Entreprise concentre un ensemble de données, accessibles par API et **provenant de différentes administrations** (URSSAF, Direction Générale des Finances Publiques, INPI...).
Certaines données sont réservées aux administrations, il est nécessaire de demander une habilitation.

<details>
<summary>Voir la liste des données de l'API Entreprise</summary>

Dans le cadre des marchés publics, l'API Entreprise permet d'accéder

<Button href="https://entreprise.api.gouv.fr/cas_usages/marches_publics">Accéder à la liste</Button>

</details>

<br>

<details>
<summary>Demander une habilitation</summary>

L’API Entreprise permet d’accéder à la fois à des données publiques (données de référence sur les entreprises avec [SIRENE](https://api.gouv.fr/les-api/sirene_v3) par exemple), et des données protégées (telles que le chiffre d’affaire).
Les administrations sont autorisées à accéder à l’API dans le cadre de leurs missions de service public, telle que l’attribution des marchés publics.

Pour y accéder, chaque administration doit en faire la demande, et justifier l’utilisation de l’API Entreprise.

<Button href="https://datapass.api.gouv.fr/api-entreprise?demarche=marches_publics">Remplir une demande</Button>

</details>

### API Sirene : les données de référence des entreprises, en accès libre

Si votre administration souhaite simplement permettre aux associations et entreprises candidates de pré-remplir des formulaires, l'API Sirene (par l'INSEE), est accessible librement.

<details>
<summary>En savoir plus sur les données disponibles</summary>

| Donnée            | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| dénomination      | le nom de l'entreprise                                                          |
| SIREN             | le numero unique de l'entreprise                                                |
| SIRET             | le numero unique de l'établissement                                             |
| NAF               | le code NAF ou code APE, un code d'activité suivant la nomenclature de l'INSEE  |
| date              | la date de création et de clôture (si applicable)                               |
| siege social      | Est-ce que cet établissement est le siège social de l'entreprise                |
| forme juridique   | la forme juridique de l'établissement (SARL, SAS, entreprise individuelle etc.) |
| tranche effectifs | la fourchette des effectifs de l'établissement                                  |

</details>

<br>

<details>
<summary>En savoir plus sur l'API Sirene</summary>
<Button href="/les-api/sirene_v3">Accéder à la documentation</Button>
</details>

### API Fichier des Comptes Bancaires et Assimilés (FICOBA)

L'API FICOBA permet de vérifier automatiquement le RIB d'une entreprise

<details>
<summary>En savoir plus sur l'API FICOBA</summary>

**Comment ça marche ?**

🏛  L’entreprise saisit son IBAN

🔎  L’API FICOBA vérifie automatiquement la correspondance IBAN - SIRET

✅  L’IBAN est indiqué comme valide et rattaché au SIRET

✅  L’administration n’a pas besoin de vérifier le RIB
<Button href="/les-api/api_comptes_bancaires_ficoba">Accéder à la documentation</Button>
</details>

<br>

<details>
<summary>Demander une habilitation</summary>

L’API Ficoba est accessible uniquement aux administrations, pour vérifier qu'un RIB saisi par une entreprise est bien rattaché à son SIRET.
Pour y accéder, chaque administration doit en faire la demande, et justifier son utilisation.

<Button href="https://api.gouv.fr/les-api/api_comptes_bancaires_ficoba/demande-acces">Remplir une demande</Button>
</details>
