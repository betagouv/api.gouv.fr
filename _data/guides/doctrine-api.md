---
title: Doctrine des API dans l'administration
tagline: 'Enjeux stratégiques et conseils opérationnels : produire et diffuser ses API'
tags:
image: meta.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api: # empty = this page wont appear in an API page
---

## Pourquoi une doctrine pour les API ?

Élaboré par la DINUM avec les administrateurs ministériels des données, des algorithmes et des codes sources (AMDAC), ce cadre de recommandations précise le cadre d’action et identifie les bonnes pratiques à poursuivre en matière d’usage et d’exposition d’API par les administrations. L’objectif : favoriser le partage de données entre elles et ainsi faciliter les démarches des usagers.

[👉 Voir le cadre interministériel d’administration de la donnée, publié en septembre 2021](https://www.numerique.gouv.fr/actualites/donnees-algorithmes-codes-sources-mobilisation-generale-sans-precedent-15-feuilles-de-route-ministerielles/)

## 6 enjeux stratégiques

**6 enjeux stratégiques ont été identifiés afin de répondre au mieux aux besoins des utilisateurs, qu’il s’agisse d’administrations ou d’usagers, tout en s’intéressant à la gestion du service proposé.**

- [🔭Découvrabilité](#🔭decouvrabilite)
- [🔑 Accès à la donnée](#🔑acces-a-la-donnee)
- [👷🏻‍♂️Exploitation des données](#👷🏻%E2%80%8D♂%EF%B8%8Fexploitation-des-donnees)
- [👌 Qualité de service](#👌-qualite-de-service)
- [🩺 Curation de la donnée](#🩺-curation-de-la-donnee)
- [💶 Modèle économique](#💶-modele-economique)

## 🔭Découvrabilité

### Catalogue de données et services disponibles

#### Recommandation 1

En complément de la description (métadonnées), les données et services publiquement accessibles sont visibles sur un catalogue exposé sur Internet, référencé sur les moteurs de recherche usuels et intelligibles (la description des API au sein du catalogue ou de l’API manager propose un contenu destiné aux opérationnels, fonctionnels comme techniques).

La description d’une donnée doit référencer les API qui l’exposent. L’exemple ci-dessous présente les API disponibles pour la [base Sirene des entreprises et de leurs établissements](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/), sur la page correspondant à ce jeu de données sur data.gouv.fr :

<img src="/images/guides/sirene-data.png"/>

Exemples:

- [api.gouv.fr](http://api.gouv.fr/) vise à référencer toutes les API publiques de l’Etat
- [API Impôt Particulier](https://api.gouv.fr/les-api/impot-particulier) vise à référencer toute la verticale métier des finances publiques
- Documentation fonctionnelle et technique

#### Recommandation 2

A chaque API exposée correspond :

- **Une documentation fonctionnelle** présentant la sémantique des données, leur qualité ainsi que leur source et leurs propriétés usuelles. Elle explicite également le processus de demande d’accès et l’éligibilité des réutilisateurs. Si un catalogue existe, un lien vers la description de la donnée est proposé ;
- **Une documentation technique** présentant les modalités d’interrogation et de récupération de la donnée ;
- **Les conditions générales d’utilisation** précisant les conditions contractuelles d’accès à l’API ;

La description d’une API décrit également **les périodes de validité de l’interface** (cf. principes 7 & 8) et son niveau de service (cf. principes 10 & 11).

<details>
   <summary>Ressources utiles</summary>

[📘 Guide pratique - référencement sur api.gouv.fr](/guides/diffusion-api-guide-pratique#quels-sont-les-prerequis-pour-qu'une-api-puisse-etre-referencee-?)

[📙 Guide Etalab - documenter les données](https://guides.etalab.gouv.fr/qualite/documenter-les-donnees)

</details>

## 🔑Accès à la donnée

### Gestion des habilitations d’accès aux API à accès restreint

#### Recommandation 3

L’accès aux API à accès restreint se fait par demande du réutilisateur (administrations, éditeurs, entreprises…).

Les API peuvent s’appuyer sur un mécanisme d’authentification de l’utilisateur final assurant une gestion des droits au sein de la plateforme qui les fournit. Les dispositifs d’authentification des citoyens, des agents ou des personnes morales conçus par les pouvoirs publics pourront être utilisés, en particulier lorsque le consentement de l’utilisateur est nécessaire pour faire circuler la donnée :

- Pour les personnes physiques : FranceConnect, ProConnect, EduConnect

#### Recommandation 4

Si le droit d’accès n’est pas préétabli, le processus de demande se fait de la manière la plus simple possible pour le réutilisateur.

Dans le cadre de demandes d’accès prévues par la loi et si le demandeur est éligible, une réponse sera transmise aux réutilisateurs **dans un délai recommandé de 15 jours calendaires.** Le code des relations entre le public et l’administration prévoit un délai légal maximum de 30 jours pour répondre à une demande [(article R311-13)](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031370409).

<details>
   <summary>Ressources utiles</summary>

[📘 Guide pratique : Gestion de l'accès à votre API](/guides/diffusion-api-guide-pratique#🔑-gestion-de-l'acces-a-votre-api)

[🔎 DataPass : Délivrer des « Pass » pour accéder à la « Data » produite par l'État.](https://beta.gouv.fr/startups/datapass.html)

</details>

**Bac à sable d'expérimentation public**

#### Recommandation 5

A chaque API devrait correspondre une version “bac à sable”, accessible en fonction du caractère des données ouvertes ou en accès restreint, exposant une version fictive des données et présentant les mêmes modalités techniques d’exposition.

Pour les API ouvertes, le bac à sable potentiel est accessible au grand public, sans demande préalable du réutilisateur. Pour les API à accès restreint, le bac à sable contenant des données fictives pourrait être accessible au réutilisateur après demande d’un jeton au fournisseur de données, bien que cette pratique ne soit pas recommandée.

## 👷🏻‍♂️Exploitation des données

### Utilisation des standards technologiques du moment pour faciliter l’interopérabilité

#### Recommandation 6

Les données et services sont exposés selon des standards techniques communément partagés et adoptés.

En 2022, le principe d’architecture et d’encodage le plus connu et pratiqué est le **standard REST Json** pour les API synchrones.
Il est utilisé par exemple pour les spécifications du standard OpenAPI (https://spec.openapis.org/oas/v3.1.0) ou les standards "API" de l'OGC (https://ogcapi.ogc.org). Concernant les API asynchrones, le principe AsyncAPI est le plus répandu.

> ***👍 Bonne pratique :*** *L’approche « contract first », par opposition à l’approche « code first », est recommandée dans le développement de nouvelles interfaces car elle permet de les stabiliser et de faire travailler plusieurs équipes en parallèle au sein d’une même architecture.*

### Stabilité du modèle des interfaces

#### Recommandation 7

Les données et services sont exposés selon une interface (modalités d’appel et structuration des données échangées) définie pour une période donnée.

Les développements Agile ou nécessitant une évolution prévisible seront rendus identifiables et préciseront une période de validité courte de 1 à 2 mois.

#### Recommandation 8

**Ces périodes de validité de l’interface sont explicitement présentées aux réutilisateurs dans la documentation.** Les modifications prévisibles s’accompagneront de l’actualisation préalable des informations descriptives intégrant des liens vers des communications et guides permettant aux réutilisateurs d’anticiper les évolutions.

Les réutilisateurs pourront basculer durant une période définie et communiquée sur la version modifiée de l’interface. Durant ce laps de temps, deux interfaces cohabiteront, la version précédente dépréciée et la nouvelle version.

Le détail de ces informations sera présenté en détail dans les conditions générales d’utilisation de l’API.

#### Recommandation 9

Toute modification non rétro-compatible impose un versionning en tant que version majeure et une cohabitation de l’ancien et du nouveau modèle pendant une période de recouvrement. **Celle-ci doit être communiquée à l’avance en diffusant le nouveau contrat d’interface de l’API.** A défaut d’information préalable ou d’accord des réutilisateurs, la période de cohabitation sera comprise entre 6 mois et 1 an.

Si une évolution de la donnée interdit le maintien de l’ensemble des fonctionnalités de l’API (exemple : modification d’un schéma avec abandon de certaines informations), il sera indiqué quelles requêtes ou parties du protocole seront maintenues.

## 👌 Qualité de service

### Indications sur le temps de réponse et la tenue en charge

#### Recommandation 10

La charge admise par une API est consultable en toute transparence par les réutilisateurs :

**1. Dans le cas d’une API authentifiée,** la charge est exprimée sous forme de métriques propres à chaque réutilisateur, comme le nombre d’appels sur une période donnée par exemple ;

**2. Dans le cas d’une API non authentifiée,** la charge tenable est exprimée dans son ensemble, tous réutilisateurs confondus ;

**3. Dans le cas d’une infrastructure permettant, via une API, des requêtes complexes, ou servant de nombreuses données,** la charge tenable estimée indiquera les critères utilisés et le caractère estimatif de cette évaluation ;

**4. Dans le cas d’une API sujette à des fortes évolutions en fonction de la saisonnalité,** le temps de réponse maximal sera précisé ainsi que les risques de rupture de service.

#### Recommandation 11

Les temps de réponse moyens et maximaux sont présentés dans la documentation de l’API. Les temps de réponse mesurés ou estimés sont fournis à titre indicatif et non contractuel. Tout autre démarche relève d’un d’accord entre le fournisseur d’API et les réutilisateurs en fonction de leurs cas d’usages.

### Transparence sur la disponibilité de l’API

#### Recommandation 12

L’état de l’API représente sa capacité à être appelée dans les conditions réelles par un réutilisateur. Il est rendu accessible aux réutilisateurs et consultable en temps réel sous forme d’une URL, indiquée dans la description de l’API, permettant de tester que l'API se déclare disponible et requetable. En complément, il est souhaitable de permettre de consulter un historique entre 6 mois et une année.

<details>
   <summary>Exemple pour l'API Particulier</summary>

> <img src="/images/guides/doctrine_dispo_api.png" alt= "disponibilité" style="width:700px"/>
> [Voir la page complète](https://status.api.gouv.fr/)

</details>

### Suivi des consommations des données et services

#### Recommandation 13

Les consommations des API sont enregistrées pour être ensuite restituées aux bénéficiaires (réutilisateur, producteur, API managers ou exploitants).

> ***👍 Bonne pratique :*** *les bénéficiaires ont accès à travers un portail à une restitution en temps réel ou ponctuelle de ces statistiques de consommation des données ainsi que celles des autres bénéficiaires.*

## 🩺 Curation de la donnée

#### Recommandation 14

Les réutilisateurs disposent d’un moyen technique ou organisationnel leur permettant de faire des retours sur la qualité des données vers leur gestionnaire ou via la description des données au sein de leur catalogue d’origine.

Les réutilisateurs disposent également d’un moyen technique ou organisationnel leur permettant de faire des retours sur la qualité des API exposées vers leur fournisseur ou via la description de l’API.

> 💡 ***Exemple :*** *Le dispositif Datapass pouvant être utilisé par les API en accès restreint permet de faire un retour sur la qualité des données disponibles via celles-ci.*

## 💶 Modèle économique

### Gratuité de la donnée, et de l’exposition

#### Recommandation 15

L’accès à la donnée et aux services doit être égalitaire. Les fournisseurs de données cherchent à adapter les modalités d’accès aux besoins des réutilisateurs.

#### Recommandation 16

Les données ainsi que les API sont mises à disposition gratuitement, pour les réutilisateurs uniquement, sauf exceptions devant faire l’objet d’une justification par l’administration productrice.

> 💡 ***Exemple :*** *Dans le cas où des usages nécessiteraient une qualité de service au-dessus de ce que la multitude d’utilisateurs a couramment besoin, comme par exemple une bande passante élevée pour de la donnée temps-réel volumineuse desservie sur quelques organismes, il sera possible d’organiser un système freemium avec une égalité d’accès à des APIs par défaut et des APIs faisant l’objet de redevances pour les usages les plus exigeants.*

## Vous souhaitez distribuer une API ?

<Button href="/guides/diffusion-api-guide-pratique">Accéder au guide pratique</Button>
