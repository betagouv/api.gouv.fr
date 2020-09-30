---
title: API Adresse (Base Adresse Nationale)
tagline: Interrogez la base de données de l’intégralité des adresses du territoire français
external_site: https://adresse.data.gouv.fr
is_open: 1 # 1 means API is fully open
partners:
  - La poste
  - IGN
owner: Direction interministérielle du numérique
owner_acronym: DINUM
stat:
  lastXdays: 7
  url: https://api-adresse.data.gouv.fr/analytics/stats.json
  label: Adresses géocodées
  path:
    - queries_week
keywords:
  - Carte
  - Adresse
  - GPS
  - Code postal
rate_limiting_resume: 10 appels / seconde / IP
rate_limiting_description: |
  L'API unitaire est disponible à hauteur de 10 appels par seconde et par adresse IP.
  Le géocodage de masse (CSV) est disponible à hauteur d'un appel simultané par adresse IP.
themes:
  - Géographie
additional_css: api
contact_link: adresse@data.gouv.fr
doc_tech_external: https://adresse.data.gouv.fr/api
content_intro: |
  L' API Adresse fait partie de la boîte-à-outils API Géo. Elle permet d'interroger facilement la Base Adresse Nationale.

  ### A quoi sert l'API Adresse ?

  En intégrant l'API dans votre système d'information, vous pouvez facilement rechercher une adresse et :

  - faire de l'autocomplétion et de la vérification d'adresse
  - géolocaliser une adresse sur une carte
  - faire une recherche géographique inversée (trouver la rue la plus proche de coordonnées géographiques)
datagouv_uuid:
  - 5530fbacc751df5ff937dddb
visits_2019: 6460
uptime: 100 # https://uptimerobot.com/dashboard.php#778110635
last_update: 10/12/2019
---

### Données disponibles

| Nom              | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| type             | type de résultat trouvé : rue, numéro de plaque, lieu-dit, commune |
| numéro de plaque | numéro avec indice de répétition éventuel (bis, ter, A, B)         |
| nom              | numéro éventuel et nom de voie ou lieu dit                         |
| code postal      | code postal                                                        |
| code de ville    | code INSEE de la commune                                           |
| commune          | nom de la commune                                                  |
| arrondissement   | nom de l’arrondissement (Paris/Lyon/Marseille)                     |
| context          | n° de département, nom de département et de région                 |

### En savoir plus

La base <External href='https://adresse.data.gouv.fr'>Adresse Nationale</External> est constituée par la collaboration entre:

- des acteurs nationaux tels que l'[IGN](http://ign.fr/) et [La Poste](http://legroupe.laposte.fr/),
- des acteurs locaux tels que les collectivités, les communes, les SDIS,
- des citoyens par exemple à travers le projet [OpenStreetMap](http://osm.org) et l'association [OpenStreetMap France](http://openstreetmap.fr/).

Le projet est co-gouverné par [l'Administrateur Général des Données](http://www.modernisation.gouv.fr/laction-publique-se-transforme/en-ouvrant-les-donnees-publiques/administrateur-general-des-donnees-chief-data-officer-interview-henri-verdier) et le [Conseil National de l'Information Géographique](http://cnig.gouv.fr).
