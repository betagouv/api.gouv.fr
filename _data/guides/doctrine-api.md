---
title: Doctrine des API dans l'administration
tagline: 'Enjeux stratégiques et conseils opérationnels : produire et diffuser ses API'
tags:
image: meta.png
noindex: false # this page will appear on Google
publish: false # this page will appear on /guides page
api: # empty = this page wont appear in an API page
---

## Pourquoi une doctrine pour les API ?

Les données sont au coeur du fonctionnement des administrations et sont maintenant considérées comme un élément stratégique. Elles doivent circuler rapidement et facilement entre les producteurs et les réutilisateurs, pour faciliter la mise en oeuvre des politiques publiques.

Les API permettent cette circulation des données, et cette page présente la doctrine qu'un ensemble d'administrations ont proposée. Elle dresse **des principes fonctionnels immuables, quelles que soient les tendances opérationnelles du moment.**

## 6 enjeux stratégiques

**Les 6 enjeux stratégiques présentés ci-dessous devront veiller à satisfaire constamment un besoin client, que ce soit des administrations, ou des citoyens dont le quotidien sera amélioré à travers l'utilisation des API.**

- [🔭Découvrabilité](#🔭decouvrabilite)
- [🔑 Accès à la donnée](#🔑acces-a-la-donnee)
- [👷🏻‍♂️Exploitation des données](#👷🏻%E2%80%8D♂%EF%B8%8Fexploitation-des-donnees)
- [👌 Qualité de service](#👌-qualite-de-service)
- [🩺 Curation de la donnée](#🩺-curation-de-la-donnee)
- [💶 Modèle économique](#💶-modele-economique)

## 🔭Découvrabilité

### Catalogue de données et services disponibles

#### Principe 1

Les données et services publiquement accessibles sont **visibles sur un catalogue** exposé sur Internet, référencé sur les moteurs de recherches usuels et intelligible (le catalogue propose un contenu destiné aux opérationnels, fonctionnels, comme techniques).

Exemples:

- [api.gouv.fr](http://api.gouv.fr/) vise à référencer toutes les API publiques de l’Etat
- [API Impôt Particulier](https://api.gouv.fr/les-api/impot-particulier) vise à référencer toute la verticale métier des finances publiques
- Documentation fonctionnelle et technique

#### Principe 2

A chaque API exposée correspond une documentation fonctionnelle présentant la sémantique des données, leur cycle de vie, leur qualité ainsi que leur source.

<details>
   <summary>Ressources utiles</summary>

[📘 Guide pratique - référencement sur api.gouv.fr](/guides/diffusion-api-guide-pratique#quels-sont-les-prerequis-pour-qu'une-api-puisse-etre-referencee-?)

[📙 Guide Etalab - documenter les données](https://guides.etalab.gouv.fr/qualite/documenter-les-donnees)

</details>

#### Principe 3

A chaque API exposée correspond une documentation technique présentant les modalités d’interrogation et de récupération de la donnée.

<details>
   <summary>Ressources utiles</summary>

[📘 Guide pratique : Open API Specification et swaggers](/guides/diffusion-api-guide-pratique#open-api,-documentation-et-swaggers)

[💡 Exemple : documentation technique de l'API Géo](https://api.gouv.fr/documentation/api-geo)

</details>

## 🔑Accès à la donnée

### Gestion des habilitations d’accès aux API à accès restreint

#### Principe 4

L’accès aux API à accès restreint se fait par demande du consommateur.

<details>
   <summary>Ressources utiles</summary>

[📘 Guide pratique : Gestion de l'accès à votre API](/guides/diffusion-api-guide-pratique#🔑-gestion-de-l'acces-a-votre-api)

[🔎 DataPass : Délivrer des « Pass » pour accéder à la « Data » produite par l'État.](https://beta.gouv.fr/startups/datapass.html)

</details>

#### Principe 5

Le processus de demande d'accès et l’éligibilité des consommateurs sont explicités dans la documentation fonctionnelle de l’API.

<details>
   <summary>Exemple pour l'API Particulier</summary>

> Sur les fiches api.gouv.fr des API à accès restreint, une page d’information guide le consommateur jusqu’à sa demande d’accès à l’API, en vérifiant son éligibilité.

> <img src="/images/guides/doctrine_eligibilite.png" alt= "eligibilite" style="width:600px"/>

</details>

#### Principe 6

Le processus de demande se fait de manière la plus simple possible pour le consommateur.

### Bac à sable d'expérimentation public

#### Principe 7

A chaque API correspond une version “bac à sable”, exposant une version fictive des données et présentant les mêmes modalités techniques d’exposition.

#### Principe 8

Tant pour les API ouvertes que celles à accès restreint, le bac à sable est accessible au grand public, sans demande préalable du consommateur.

> 🚨 _Attention : bac à sable public n’est pas synonyme de données publiques, et ne représente donc pas une faille de sécurité ! Si exposer la structure de la donnée représente une faille de sécurité, cela dénote d’un problème de conception du système exposant la donnée._

## 👷🏻‍♂️Exploitation des données

### Utilisation des standards technologiques du moment pour faciliter l’interopérabilité

#### Principe 9

Les données et services sont exposés selon des standards techniques communément partagés et adoptés.

> 💡 _En 2021, le standard connu et pratiqué est le standard REST Json._

### Stabilité du modèle des interfaces

#### Principe 10

Les données et services sont exposés selon une interface (modalités d’appel et structuration des données échangées) stable pour une période donnée.

#### Principe 11

Ces périodes de validité de l’interface sont explicitement présentées aux consommateurs dans la documentation.

#### Principe 12

Les modifications s’accompagnent de communications et de guides permettant aux consommateurs de les anticiper.

#### Principe 13

Toute modification de l’interface non rétro-compatible impose une cohabitation de l’ancien et nouveau modèle pendant 1 an minimum.

## 👌 Qualité de service

### Engagements sur le temps de réponse et la tenue en charge

#### Principe 14

La charge tenable par une API est consultable en toute transparence par les consommateurs :

- dans le cas d’une API authentifiée, la charge est exprimée sous forme de métriques propres à chaque consommateur, comme le nombre d’appels sur un période donnée par exemple
- Dans le cas d’une API non authentifiée, la charge tenable est exprimée dans son ensemble, tous consommateurs confondus

#### Principe 15

Les temps de réponse moyens et maximaux sont présentés dans la documentation de l’API.

#### Principe 16

Les consommateurs devront obtenir une réponse à leur demande d'accès aux données dans un délai de 15 jours maximum.

### Transparence sur la disponibilité de l’API

#### Principe 17

L’état de l’API représente sa capacité à être appelée dans les conditions réelles d’un consommateur.

#### Principe 18

L’état de l’API est rendu accessible aux consommateurs.

<details>
   <summary>Exemple pour l'API Particulier</summary>

> <img src="/images/guides/doctrine_dispo_api.png" alt= "disponibilité" style="width:700px"/>

> [Voir la page complète](https://status.particulier.api.gouv.fr/)

</details>

#### Principe 19

L’état de l’API est consultable en temps réel, et pour des dates passées.

### Suivi des consommations des données et services

#### Principe 20

Les consommations de données et services sont enregistrées pour être ensuite restituées aux consommateurs.

#### Principe 21

Les consommateurs ont accès à une restitution en temps réel ou ponctuelle de ces statistiques de consommation des données.

## 🩺 Curation de la donnée

### Mise en place d’une boucle de retour sur la qualité des données

#### Principe 22

Les consommateurs disposent d’un moyen technique ou organisationnel de faire des retours sur la qualité des données et services exposés

## 💶 Modèle économique

### Gratuité de la donnée, et de l’exposition

#### Principe 23

L’accès à la donnée et aux services doit être égalitaire et tourné vers l'usager.

#### Principe 24

Les données ainsi que les API mises à disposition gratuitement devront répondre à un niveau de qualité suffisant pour répondre à la majeure partie des cas d'usage.

#### Principe 25

Les API mises à disposition avec un haut niveau de qualité, pourront faire l'objet d'une redevance, mais cette dernière devra être motivée par un traitement technique différencié avec l'offre gratuite permettant d'objectiver le niveau de qualité supplémentaire proposé aux consommateurs.
