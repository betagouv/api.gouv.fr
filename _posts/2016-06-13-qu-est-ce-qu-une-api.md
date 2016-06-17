---
title: Qu'est-ce qu'une API ?
layout: post
---

Une API est un acronyme anglo-saxon signifiant *Application Programming Interface*. La notion la plus importante est **interface** : une API est en réalité un contrat passé entre deux systèmes informatiques afin qu'ils puissent communiquer ensemble.

Les entreprises françaises utilisent par exemple tous les mois une API&nbsp;: celle de la [Déclaration Sociale Nominative](http://www.dsn-info.fr/api-dsn.htm). Les entreprises ne communiquent plus les données de leur employés manuellement aux Administrations sociales. Elles utilisent directement des API pour déposer les déclarations (DSN) automatiquement depuis leur logiciel de paie.

Cette définition très abstraite mérite une métaphore afin de l'expliciter et comprendre les implications lorsqu'une API est exposée.

## Et la prise électrique ?

Une API peut-être vue comme une prise électrique&nbsp;:  votre lampe est le consommateur d'une resource dont elle a besoin, l'électricité. Mais il y a plusieurs choses qu’elle n’a pas besoin de savoir&nbsp;: l'endroit où électricité a été produite, la manière dont elle a été produite (hydraulique, nucléaire&hellip;), la manière dont elle a été transportée jusqu'à votre lampe. Toute cette compléxité a été masquée à la lampe.

Concrètement, le constructeur de votre lampe a passé un contrat avec votre prise électrique afin de suivre un standard pour récupérer une ressource dont la lampe à besoin. Différents standards de communication ont émergé&nbsp;: la prise française, américaine&hellip; Il en est de même pour les API&nbsp;: <abbr title="Hypertext Transfer Protocol">HTTP</abbr>, <abbr  title="Hypertext Transfer Protocol Secure">HTTPS</abbr>&hellip;

Pour résumer cette comparaison, voici un tableau présentant les différentes caractéristiques d'une prise électrique et leurs contreparties pour une API

|                    | Prise Electrique                 | API                                       |
|--------------------|----------------------------------|-------------------------------------------|
| Offre              | électricité                      | données                                   |
| Complexité cachée  | origine, moyen de transport      | origine, moyen de transport               |
| Connexion          | prise française/prise américaine | HTTP/HTTPS                                |

## Les avantages pour le producteur d'API

  * Augmenter la portée des services en laissant d'autres Administrations, partenaires ou entreprises intégrer et tirer parti des données ainsi que des fonctionnalités;
  * Economiser de l'argent en permettant à des innovateurs de créer des services impactants pour lesquels les Administrations n'ont peut être pas le temps ou le budget;
  * Créer des marchés en améliorant l'accès aux ressources gouvernementales comme l'économie, la santé, l'éducation ou les ressources géographiques.

## Les avantages pour le consommateur d'API

  * Proposer des services plus complets à l'usager en limitant la saisie d'information;
  * Economiser de l'argent en permettant de mettre en commun certaines briques logicielles.

#### Pour aller plus loin

  * [Métaphore faite par 18F [Anglais]](https://18f.gsa.gov/2016/04/22/what-is-an-api/)
  * [API dans le gouvernement Américain [Anglais]](https://www.digitalgov.gov/2013/04/30/apis-in-government/)
  * [Réponse sur Quora [Anglais]](https://www.quora.com/What-is-an-API-4)
  * [Voir toutes les API]({{ site.baseurl }}/api)
