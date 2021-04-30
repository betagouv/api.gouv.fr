---
title: API Gallica Recherche
tagline: Rechercher dans les documents numériques de la Bibliothèque nationale de France
producer: bnf
category: public
is_open: 1
external_site: http://api.bnf.fr/api-gallica-de-recherche
keywords:
  - Bibliothèque
  - Gallica
  - Document
  - Recherche
  - BNF
contact_link: gallica@bnf.fr
doc_tech_external: http://api.bnf.fr/api-gallica-de-recherche
themes:
  - Culture
last_update: 17/09/2020
---

L'API Recherche permet d'interroger le fonds de la bibliothèque numérique de la BnF, [Gallica](https://gallica.bnf.fr/). Les documents résultats d'une requête peuvent ensuite être exploités par le moyen de l'[API Document](/les-api/api_gallica_document).

### A quoi sert-elle ?

L’API Recherche s'interface avec le moteur de recherche de Gallica et permet d'interroger ce dernier selon les mêmes critères que ceux disponibles dans l'application web Gallica (recherche dans les métadonnées bibliographiques, le texte océrisé, etc.).

Cette API est utilisée par les systèmes d'information internes de la BnF mais aussi par des applications tierces (voir en particulier les exemples référencés sur api.bnf.fr et Gallica Studio).

### Données de l’API

Cette API se décline en deux services :

- un service de recherche selon le [protocole standard SRU](http://www.loc.gov/standards/sru/sru-1-2.html). Il s'agit d'un service web renvoyant un flot XML présentant les documents résultats d'une requête.
- un service d'affinage de recherche, qui permet de filtrer les résultats d'une requête SRU en fonction de critères prédéfinis (des facettes).

### Conditions d’utilisation

L’API est gérée par la Bibliothèque nationale de France. Son accès est ouvert sans restriction, sauf en cas d'usage abusif.

Les conditions de réutilisation des documents numériques de Gallica sont [décrites ici](https://gallica.bnf.fr/edit/conditions-dutilisation-des-contenus-de-gallica).

Les métadonnées descriptives des documents numériques de Gallica sont placées [sous la licence ouverte de l’Etat](https://www.bnf.fr/fr/conditions-de-reutilisations-des-donnees-de-la-bnf)
