---
title: Doctrine des API dans l'administration
tagline: 'Enjeux stratégiques et conseils opérationnels : produire et diffuser ses API'
tags:
image: meta.png
---

# Contexte

Les données sont au coeur du fonctionnement des administrations et sont maintenant considérées comme un élément stratégique. Les données ne sont plus seulement utilisées par les métiers en charge de leur production mais intéressent de nombreuses administrations dans le cadre de la mise en oeuvre de leurs missions de service public.
Les récentes annonces du Premier ministre dans le cadre du dernier Comité Interministériel pour la Transformation Publique (CITP) s'inscrivent pleinement dans cette ambition. Les données doivent circuler rapidement et facilement entre les producteurs et les réutilisateurs.

Toutefois, force est de constater qu'il persiste encore un grand nombre de freins liés à l'hétérogénéité des pratiques ministérielles en matière d'échange de données.

Cette page présente une stratégie interministérielle en matière de circulation des données par API et a fait l'objet de groupes de travail avec certaines administrations pilotes :

- Secrétariat Général des ministères économiques et fianciers,
- Direction du Numérique des ministères sociaux,
- Direction du Numérique du ministère de l'Intérieur,
- Direction du Numérique du ministère de la Justice,
- Direction Interministérielle du Numérique.

Le but de la stratégie est de s’abstraire des implémentations concrètes des API, en dressant des principes fonctionnels immuables, quelles que soient les tendances opérationnelles du moment.


# 6 enjeux stratégiques

**Les 6 enjeux stratégiques présentés ci-dessous devront veiller à satisfaire constamment un besoin client, que ce soit des administrations, ou des citoyens dont le quotidien sera amélioré à travers l'utilisation des API.**

 * **[🔭Découvrabilité](#🔭decouvrabilite)**
    * [Catalogue de données et services disponibles](#catalogue-de-donnees-et-services-disponibles) 
 * **[🔑 Accès à la donnée](#🔑acces-a-la-donnee)**
    * [Gestion des habilitations d’accès aux API à accès restreint](#gestion-des-habilitations-d’acces-aux-api-a-acces-restreint)
    * [Bac à sable d'expérimentation public](#bac-a-sable-d'experimentation-public) 
 * **[👷🏻‍♂️Exploitation des données](#👷🏻%E2%80%8D♂%EF%B8%8Fexploitation-des-donnees)**
    * [Utilisation des standards technologiques du moment pour faciliter l’interopérabilité](#utilisation-des-standards-technologiques-du-moment-pour-faciliter-l’interoperabilite)
    * [Stabilité du modèle des interfaces](#stabilite-du-modele-des-interfaces) 
 * **[👌 Qualité de service](#👌-qualite-de-service)**
    * [Engagements sur le temps de réponse et la tenue en charge](#engagements-sur-le-temps-de-reponse-et-la-tenue-en-charge)
    * [Transparence sur la disponibilité de l’API](#transparence-sur-la-disponibilite-de-l’api)
    * [Suivi des consommations des données et services](#suivi-des-consommations-des-donnees-et-services)
 * **[💶 Modèle économique](#💶-modele-economique)**
    * [Gratuité de la donnée, et de l’exposition](#gratuite-de-la-donnee,-et-de-l’exposition)


## 🔭Découvrabilité
### Catalogue de données et services disponibles 

#### Principe 1 
Les données et services publiquement accessibles sont **visibles sur un catalogue** exposé sur Internet, référencé sur les moteurs de recherches usuels et intelligible (le catalogue propose un contenu destiné aux opérationnels, fonctionnels, comme techniques).

Exemples:

- [api.gouv.fr](http://api.gouv.fr/) vise à référencer toutes les API publiques de l’Etat
- [api.impots.gouv.fr](http://api.impots.gouv.fr/) vise à référencer toute la verticale métier des finances publiques
- Documentation fonctionnelle et technique

#### Principe 2 
A chaque API exposée correspond une documentation fonctionnelle présentant la sémantique des données, leur cycle de vie, leur qualité ainsi que leur source.

#### Principe 3
A chaque API exposée correspond une documentation technique présentant les modalités d’interrogation et de récupération de la donnée.

## 🔑Accès à la donnée
### Gestion des habilitations d’accès aux API à accès restreint 

#### Principe 4 
L’accès aux API à accès restreint se fait par demande du consommateur.

#### Principe 5
Le processus de demande d'accès et l’éligibilité des consommateurs sont explicités dans la documentation fonctionnelle de l’API.

#### Principe 6
Le processus de demande se fait de manière la plus simple possible pour le consommateur.

Exemple : sur les fiches api.gouv.fr des API à accès restreint, une page d’information guide le consommateur jusqu’à sa demande d’accès à l’API, en vérifiant son éligibilité.

> <img src="/images/guides/doctrine_eligibilite.png" alt= "eligibilite" style="width:600px"/> 

### Bac à sable d'expérimentation public

#### Principe 7
A chaque API correspond une version “bac à sable”, exposant une version fictive des données et présentant les mêmes modalités techniques d’exposition.

#### Principe 8
Tant pour les API ouvertes que celles à accès restreint, le bac à sable est accessible au grand public, sans demande préalable du consommateur. 

> 🚨 *Attention : bac à sable public n’est pas synonyme de données publiques, et ne représente donc pas une faille de sécurité ! Si exposer la structure de la donnée représente une faille de sécurité, cela dénote d’un problème de conception du système exposant la donnée.*

## 👷🏻‍♂️Exploitation des données
### Utilisation des standards technologiques du moment pour faciliter l’interopérabilité

#### Principe 9
Les données et services sont exposés selon des standards techniques communément partagés et adoptés.

> 💡 *Ce point sera amplement détaillé lors des discussions opérationnelles. En 2021, le standard connu et pratiqué est le standard REST Json.*

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

[Exemple pour l'API Particulier](https://status.particulier.api.gouv.fr/)
<img src="/images/guides/doctrine_dispo_api.png" alt= "disponibilité" style="width:700px"/> 

#### Principe 19 
L’état de l’API est consultable en temps réel, et pour des dates passées.

### Suivi des consommations des données et services

#### Principe 20 
Les consommations de données et services sont enregistrées pour être ensuite restituées aux consommateurs.

#### Principe 21 
Les consommateurs ont accès à une restitution en temps réel ou ponctuelle de ces statistiques de consommation des données.

## 💶 Modèle économique

### Gratuité de la donnée, et de l’exposition

#### Principe 23
L’accès à la donnée et aux services doit être égalitaire et tourné vers l'usager. 

#### Principe 24 
Les données ainsi que les API mises à disposition gratuitement devront répondre à un niveau de qualité suffisant pour répondre à la majeure partie des cas d'usage. 

#### Principe 25 
Les API mises à disposition avec un haut niveau de qualité, pourront faire l'objet d'une redevance, mais cette dernière devra être motivée par un traitement technique différencié avec l'offre gratuite permettant d'objectiver le niveau de qualité supplémentaire proposé aux consommateurs.

# Conclusion

L'ambition portée par le Gouvernement en matière de circulation des données doit se traduire par la co-construction d'une stratégie interministérielle en la matière. La démultiplication des dispositifs en matière d'exposition et de circulation de donnée complexifie le travail des fournisseurs de services et rend difficile l'appropriation de bonnes pratiques par les fournisseurs de données.

Dès lors que les principes fondamentaux de la stratégie d'échange de données de l'Etat par API seront partagés par l'ensemble des ministères, la DINUM engagera une deuxième phase de travail permettant d'orchestrer la déclinaison opérationnelle de cette stratégie, en s'appuyant sur les bonnes pratiques ministérielles, les outils mutualisés ainsi que les bonnes volontés de l'ensemble des ministère souhaitant co-construire cette merveilleuse politique publique.