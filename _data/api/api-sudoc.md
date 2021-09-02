---
title: API Système Universitaire de Documentation (Sudoc)
tagline: Récupérer les notices bibliographiques du Système Universitaire de Documentation (Sudoc) de l'Enseignement Supérieur et de la Recherche.
is_open: 1 # 1 means API is fully open
external_site: http://documentation.abes.fr/sudoc/manuels/administration/aidewebservices/index.html?p=co/WebServicesSudoc.html
#partners:
producer: abes
keywords:
  - Bibliographie
  - Notices
  - Enseignement supérieur
  - Recherche
  - SUDOC
  - Université
  - Documentation
  - Référentiel
  - PPN
  - RCR
  - Cairn
  - BnF
  - ISSN
  - PICA
  - ISBN
  - Bibliothèque
contact_link: sudoc@abes.fr
doc_tech_link: https://abes-esr.github.io/openapi/sudoc.yaml
themes:
  - Education
  - Culture
visits_2019: 500
last_update: 28/07/2021
---

### Description

L'API Sudoc permet de consulter les données du Système Universitaire de Documentation, qui référence l'ensemble des ouvrages documentaires des bibliothèques universitaires et des établissements de recherche. Plus précisément, l'API contient les données relatives aux **notices bibliographiques**. 

### À quoi sert l'API ?

Exemples de modes d'appels : 

- **Livres :** obtenir un identifiant de notice bibliographique (PPN : Pica production number) à partir d'un ISBN (International Standard Book Number),
- **Séries (ex : magazine) :** obtenir un identifiant PPN à partir d'un ISSN (International Standard Serial Number),
- **Articles :** obtenir un identifiant PPN à partir d'un EAN (International Article Number),
- **Correspondances de notices :** obtenir un identifiant PPN à partir de ressources existantes à la BnF, de la Deutsche Nationalbibliothek, Worldcat, Hellenic Academic Libraries Union Catalog (ucatb), Cairn...
- **Localisation des bibliothèques** à partir de l'identifiant d'un ouvrage (PPN),
- **Historique** d'une revue ou d'un périodique, qui permet de lister les notices qui la composent.

L'API est en [licence ouverte](https://www.etalab.gouv.fr/licence-ouverte-open-licence).