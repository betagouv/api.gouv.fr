---
title: API Identifiants et Référentiels pour l'enseignement supérieur et la recherche (IdRef)
tagline: Récupérer les notices d'autorités du Système Universitaire de Documentation (Sudoc) de l'Enseignement Supérieur et de la Recherche.
is_open: 1 # 1 means API is fully open
external_site: http://documentation.abes.fr/aideidrefdeveloppeur/index.html#WebServiceRest
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
  - Bibliothèque
  - BnF
contact_link: idref@abes.fr
doc_tech_link: https://abes-esr.github.io/openapi/idref.yaml
stat:
  lastXdays: 29
  url: https://status-api.abes.fr/
monitoring_description: |
monitoring_link: https://status-api.abes.fr/
uptime: 99.96
rate_limiting_resume: 1 appel / seconde / IP
rate_limiting_description: |
  L'API est disponible à hauteur de 1 appel par seconde et par adresse IP.
themes:
  - Education
  - Culture
visits_2019: 500
last_update: 28/07/2021
---

### Description

L'API IdRef permet de consulter les données du Système Universitaire de Documentation (Sudoc), qui référence l'ensemble des ouvrages documentaires des bibliothèques universitaires et des établissements de recherche. Plus précisément, l'API contient les données relatives aux **notices d'autorité** (lieux, auteurs...), qui permettent de normaliser les points accès aux **notices bibliographiques** (informations sur les ouvrages). 

### À quoi sert l'API ?

Différents modes d'appels sont possibles : 

- obtenir une liste de notices d'autorité, via un identifiant PPN (Pica production number), au format XML ou RDF,
- obtenir des références bibliographiques, via un identifiant PPN, au format XML ou json, 
- obtenir la liste de tous les identifiants actifs pour les bibliothèques françaises,
- lister les RCR (identifiants des bibliothèques physiques),
- à partir d'un PPN de personne ou de collectivité : obtenir la liste des identifiants d'autres systèmes alignés (BnF, Hal,Orcid,Viaf,Isni,etc.).

L'API est en [licence ouverte](https://www.etalab.gouv.fr/licence-ouverte-open-licence).