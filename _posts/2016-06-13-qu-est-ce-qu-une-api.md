---
title: Qu'est-ce qu'une API ?
layout: post
---

Une API est un acronyme anglo-saxon signifiant *Application Programming Interface*. La notion la plus importante est **interface** : une API est en réalité un contrat passé entre deux systèmes informatiques afin qu'ils puissent communiquer ensemble.

Il n'est pas nécessaire d'avoir une API afin que deux programmes puissent communiquer ensemble, un programme peut utiliser une inferface humaine&nbsp;:

> **Sans API&nbsp;:**
> Une application récupère les données météo à Paris en ouvrant la page [meteofrance.com](http://www.meteofrance.com/previsions-meteo-france/paris/75) et en la lisant tel qu'un humain le ferait, méthode qui n'est pas fiable car il n'y a pas de contrat.

> **Avec API&nbsp;:**
> Une application récupère les données météo à Paris en utilisant l'API [infoclimat](http://www.infoclimat.fr/api-previsions-meteo.html?id=2988507&cntry=FR) et qui renvoie une reponse structurée compréhensible par un ordinteur.

Vous les utilisez peut-être déjà sans le savoir&nbsp;:

  * l'API de twitter dans toutes les applications tierces récupérant les tweets
  * l'API de [base adresse nationnale](https://adresse.data.gouv.fr/) pour géocoder une adresse

Cette définition très abstraite mérite une métaphore afin de l'expliciter et comprendre les implications lorsqu'une API est exposée.

## Et la prise électrique ?

Une API peut-être vu comme une prise électrique&nbsp;:  votre lampe est le consommateur d'une resource dont elle a besoin&nbsp;: l'électricité. Mais il y plusieurs choses dont elle n'a pas besoin&nbsp;: l'endroit où elle a été produite, la manière dont elle a été produite (hydrolique, nucléaire&hellip;), la manière dont elle a été transportée jusqu'à votre lampe.

Concrètement, le constructeur de votre lampe a passé un contrat avec votre prise électrique afin de suivre un standard pour récupérer une ressource dont la lampe à besoin. Différents standards ont émergé&nbsp;: la prise française, américaine&hellip; Il en est de même pour les API&nbsp;: REST, SOAP, INSPIRE&hellip;

Ce standard définit le moyen de communication entre les deux systèmes (la lampe et le réseau electrique). Le voltage et l'ampérage est à la main du producteur. Il en est de même pour les API en informatique&nbsp;: les données peuvent être des données personnelles, géographiques ou encore un résultat de simulation. Elles peuvent être en  <abbr title="JavaScript Object Notation">JSON</abbr> ou en <abbr title="Extensible Markup Language">XML</abbr>.

| Interface    | Prise Electrique                 | API                                       |
|--------------|----------------------------------|-------------------------------------------|
| Offre        | électricité                      | Données                                   |
| Complexité cachée   | Origine, moyen de transport      | Origine, moyen de transport               |
| Format       | prise française/prise américaine | REST/SOAP                                 |
| type d'offre | X volt et Y ampère               | Données personnelles/Données Géographique |

## Les bienfaits des API

  * Augmenter la portée de vos services en laissant d'autres administrations, partenaires ou entreprises intégrer et magnifier vos données et fonctionnalités.
  * Economiser de l'argent en permettant à des innovateurs de créer des services impactants pour lesquels vous n'avez peut être pas le temps ou le budget.
  * Créer des marchés en améliorant l'accès aux ressources gouvernementales comme l'économie, la santé, l'éducation ou les ressources géographiques.


#### Sources

  * [Métaphore faite par 18F [Anglais]](https://18f.gsa.gov/2016/04/22/what-is-an-api/)
  * [API dans le gouvernement Américain [Anglais]](https://www.digitalgov.gov/2013/04/30/apis-in-government/)
  * [Réponse sur Quora [Anglais]](https://www.quora.com/What-is-an-API-4)
