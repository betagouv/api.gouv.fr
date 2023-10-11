---
title: Guide de migration des API entreprise.data.gouv.fr
tagline: Découvrez les API alternatives aux API entreprise.data.gouv.fr
tags: cas usage, api sirene, ETALAB, api entreprise, INSEE, open data
image: code.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - API Sirene
  - API Registre National du Commerce et des Sociétés
  - API Recherche d’entreprises
---

Vous utilisez les API entreprise.data.gouv.fr ? Ce projet était une expérimentation qui se termine. Le service va fermer le 1er Septembre 2022.

En effet, les API du projet étaient non-officielles. La plupart d'entre elles ayant à présent des alternatives officielles, le projet n’a plus lieu d’être.

Les API qui constituaient entreprise.data.gouv.fr, vont être soit décommissionnées, soit transférées à l'administration la plus pertinente. Découvrez comment migrer vers des API alternatives.

| API entreprise.data.gouv.fr                                                                     | API alternative                                                   |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [Recherche d’entreprise](#recherche-d’entreprise)                                               | [API Recherche d’Entreprises](/les-api/api-recherche-entreprises) |
| [Base Sirene](#base-sirene)                                                                     | [API Sirene V3](/les-api/sirene_v3)                               |
| [Registre National du Commerce et des Sociétés](#registre-national-du-commerce-et-des-societes) | [API RNCS](/les-api/api-rncs)                                     |
| [Répertoire National des Associations](#repertoire-national-des-associations)                   | -                                                                 |
| [Répertoire National des Métiers](#repertoire-national-des-metiers)                             | API maintenue : vous pouvez continuer à l’utiliser                |

Dans le cas des API décommissionnées, les utilisateurs des anciennes API ont 3 mois à compter du 1er Juin 2022 pour migrer leurs téléservices vers les API alternatives.

Toutes les API alternatives sont officielles et gratuites.

### Recherche d’entreprise

<details>
<summary>**voir les routes concernées**</summary>
<br/>
- recherche texte : _/api/sirene/v1/full_text/_
- recherche autour d’un point : _/api/sirene/v1/near_point_

Ces routes permettaient de construire facilement un moteur de recherche, faire de la siretisation de donnée ou de rechercher une entreprise sur un fond de carte.

</details>

#### API alternative :

La [DINUM](/producteurs/dinum) publie une nouvelle API : [l'API Recherche d’Entreprises](/les-api/api-recherche-entreprises).

C'est l'API utilisée par le moteur de recherche du site [Annuaire des Entreprises](https://annuaire-entreprises.data.gouv.fr).

Elle propose une recherche texte puissante et une recherche géographique. Elle présente une différence notable avec l’ancienne API entreprise.data.gouv.fr : **elle retourne une liste de siren** et non pas de siret.

### Base sirene

<details>
<summary>**voir les routes concernées**</summary>
<br/>
- recherche de siren : _/api/sirene/v1/siren/_ et _/api/sirene/v1/siren/_
- recherche de siret : _/api/sirene/v3/unites_legales/_ et _/api/sirene/v1/siret/_

Ces routes permettaient de faire du remplissage automatique de formulaires avec des champs de la base Sirene tels que l'adresse, la raison sociale, où le code NAF.

</details>

#### API alternative :

[L’Insee](/producteurs/insee) maintient la version officielle de [l'API Sirene V3](/les-api/sirene_v3).

C'est l'API la plus à jour possible pour accéder au contenu de la base sirene.

**NB** : attention, l'Insee impose des quotas d'appels plus bas qu’entreprise.data.gouv.fr. Nénamoins, l'Insee relève ces quotas pour les administrations qui utilise l'API pour une mission de service publique. Si vous êtes une administration allez sur la [page de l’API Sirene](/les-api/sirene_v3) et contactez l'équipe.

### Registre National du Commerce et des Sociétés

#### voir les Routes concernées :

<details>
<summary>**voir les routes concernées**</summary>
<br/>
- recherche de siren : _api/rncs/v1/fiches_identite/_

Cette route permettait d’accéder au contenu du Registre National du Commerce et des Sociétés pour une entreprise qui y est inscrite. Elle permettait aussi de produire un PDF avec tous les éléments du RNCS.

</details>

#### API alternative :

[L’Inpi](/producteurs/inpi) maintient la version officielle de [l'API RNCS](/les-api/api-rncs).

C'est l'API la plus à jour possible pour accéder au contenu du RNCS.

### Répertoire National des Associations

<details>
<summary>**voir les routes concernées**</summary>
<br/>
- recherche texte d’une association : _/api/rna/v1/full_text/_
- recherche de siret : _/api/rna/v1/id/_
- recherche de numéro rna : _/api/rna/v1/siret/_

Ces routes permettaient de faire du remplissage automatique de formulaires avec des champs du RNA tels que le numéro RNA etc.

</details>

L’API RNA est décommissionnée, à ce jour il n'hesite pas d'alternative.

### Répertoire National des Métiers

<details>
<summary>**voir les routes concernées**</summary>
<br/>
- recherche de siren : _api-rnm.artisanat.fr/v2/entreprises/_

Cette route permet d’accéder au contenu du Répertoire National des Métiers pour une entreprise qui y est inscrite.

</details>

[L’API RNM](/les-api/api_rnm) n’est pas décommissionnée. Elle est maintenue par [CMA-France](/producteurs/cma-france).
