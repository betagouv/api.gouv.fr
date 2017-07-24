---
title: Etat piscicole des rivières
tagline: etat-piscicole - Opérations sur l'état piscicole des rivières
contract: OUVERT
openapi_definition: http://hubeau.eaufrance.fr/page/api-poisson
doc_tech: http://hubeau.eaufrance.fr/page/documentation_poisson/
contact: t.vilmus@brgm.fr
clients:
  - particuliers
  - entreprises
  - collectivités
  - ministères
partners:
  - BRGM
owner: AFB
keywords:
  - Poissons
  - Pêche électrique
  - Cours d'eau
  - Etat piscicole
---

L' __API Poissons__ de Hub'Eau permet de connaître les poissons décomptés par pêche électrique dans une rivière.
La source de données est : Informations sur les Milieux Aquatiques pour la Gestion Environnementale (IMAGE), à l'adresse [http://www.image.eaufrance.fr/](http://www.image.eaufrance.fr/)
Il s'agit des données de taille et de poids des poissons pêchés par pêches électriques. Elles proviennent essentiellement de l'AFB (anciennement ONEMA, anciennement CSP).
Les données sont exposées sous la forme d'une API REST, les formats supportés sont : JSON, GeoJSON et CSV.

Dernières évolutions de l'API Etat piscicole de Hub'Eau:

* 04/05/2017 : mise à jour de l'adresse de l'API api.hubeau.fr vers hubeau.eaufrance.fr/api/
* 21/09/2016 : ajout des libellés SANDRE à côté des codes SANDRE dans la réponse
* 08/08/2016 : ajout du paramètre fields, la valeur est une liste des champs souhaités dans la réponse (fonctionnalité expérimentale), par exemple fields=code_station,localisation

Hub'Eau offre un service innovant d'open-data, au travers d'un accès simplifié et fonctionnel à base d'API, garantissant les meilleures performances quant à la disponibilité de la donnée sur l'eau. Hub'Eau s'appuie sur des infrastructures organisées et distribuées : il vise à réaliser un ensemble de composants intelligents assurant un passage « transparent » des formats et standards internes du SIE vers ceux de l’OpenData – données ouvertes - et de la réutilisation publique.

Les autres API disponibles à ce jour sont :

* Indicateurs Eau potable et Assainissement ;
* Piézométrie ;
* Chimie des cours d'eau.
