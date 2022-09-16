---
title: API Services Publics Plus - Structures
tagline: Accédez à la liste des structures administratives qui sont en contact direct avec les usagers du service public.
external_site: https://www.plus.transformation.gouv.fr/
is_open: 1 # 1 means API is fully open
producer: ditp
keywords:
  - Service public
  - Organisations
  - Code postal
  - Accueil
  - Relations
  - CRM
  - Usager
  - Adresse
  - Territoire
themes:
  - Administration
contact_link: assistance-utilisateur-spplus.ditp@modernisation.gouv.fr
doc_tech_external: https://data-ditpservicespublicsplus.opendatasoft.com/api/v2/console
datagouv_uuid:
  - 62225f6a523b5729143b138c
last_update: 16/09/2022
visit_2019: 500
---

Le programme Services Publics Plus lancé par le Gouvernement a pour but de contribuer à améliorer la qualité du service rendu et développer la confiance entre l’administration et les usagers.

### À quoi sert l’API Service Public Plus - Structures ?

Cette API liste les structures des différentes administrations en relation avec les usagers. Elle permet d'enrichir ou d'intégrer un référentiel existant, par exemple sur un service d'annuaire. 

Plus de 14000 structures sont listées dans l'API

### Qu'est-ce qu'une structure ?

Il s'agit de l'entité organisationnelle publique en relation avec l’usager ou située hiérarchiquement au-dessus :

C’est l’entité opérationnelle à laquelle sont rattachés les utilisateurs habilités à intervenir sur la plateforme [Services Publics +](https://www.plus.transformation.gouv.fr), notamment pour apporter une réponse aux expériences des usagers. Elles sont organisées dans une arborescence hiérarchisée au sein de chaque réseau. 

Par exemple, le réseau CNAF dispose d’une structure CAF (niveau N), d’une structure CAF du Gard (niveau N-1), d’une structure CAF de l’Hérault (niveau N-1), etc.

### Données

Liste des champs obligatoires présents dans l'API Structures :

| Nom de la donnée           | Description                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| Code SP+ de la structure   | Identifiant unique utilisé par DITP pour distinguer les différentes structures entre elles     |
| Intitulé de la typologie   | Typologie de la structure. Exemple : Services des impôts aux particuliers                      |
| Intitulé de la structure   | Nom de la structure                                                                            |
| Code postal de la structure| Exemple : 69000                                                                                |
| Ville de la structure      | Exemple : Lyon                                                                                 |
