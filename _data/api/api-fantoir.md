---
title: API FANTOIR
tagline: Retrouvez les informations sur les communes et les lieux-dits
is_open: 1 # 1 means API is fully open
#external_site: 
#partners:
producer: ign
keywords:
  - Communes
  - Codes postaux
  - Départements
  - lieu
  - lieu-dit
  - lieu dit
  - adresse
  - voie
  - code postal
  - référentiel
#rate_limiting_resume: 
#rate_limiting_description: |
themes:
  - Géographie
contact_link: adresse@data.gouv.fr
doc_tech_external: https://github.com/BaseAdresseNationale/api-fantoir#api
datagouv_uuid:
  - 53699580a3a729239d204738
last_update: 13/01/2022
---

Cette API permet de naviguer dans le fichier FANTOIR. Ce dernier répertorie pour chaque commune le nom des lieux-dits et des voies, y compris celles situées dans les lotissements et les copropriétés.

### A quoi sert l'API FANTOIR ?

Le Fichier annuaire topographique initialisé réduit (FANTOIR) liste par commune :

- les voies (rues, avenues, …) ;
- les lieux-dits (utilisés surtout dans les zones rurales) ;
- les ensembles immobiliers (voiries situées dans les copropriétés, les lotissements) ;
- les pseudo-voies (par exemple canaux ou stations de métro).

Le fichier FANTOIR contient l’ensemble des références topographiques qu’elles soient annulées ou actives.
Il ne contient aucune donnée cartographique ou géométrique.