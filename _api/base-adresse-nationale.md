---
title: Base Adresse Nationale
tagline: "Un référentiel national ouvert : de l'adresse à la coordonnée géographique"
external_site: https://adresse.data.gouv.fr
contract: OUVERT
clients:
  - particuliers
  - entreprises
  - collectivités
  - ministères
partners:
  - La poste
  - IGN
owner: Etalab (DINSIC)
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
additional_css: api
score:
  detail:
    access:
      is_open: true
    contact:
      link: adresse@data.gouv.fr
    doc_tech:
      external: https://adresse.data.gouv.fr/api
    rate_limiting:
      description: |
        <p>L'API unitaire est disponible à hauteur de 10 appels par seconde et par adresse IP.</p>
        <p>Le géocodage de masse (CSV) est disponible à hauteur d'un appel simultané par adresse IP.</p>
---

Pour que les services d'urgence arrivent au bon endroit, pour vous permettre de réaliser une analyse cartographique en quelques clics ou encore pour que les opérateurs publics et privés coordonnent mieux leurs chantiers, ce référentiel, véritable enjeu de souveraineté pour la France, est la première alliance entre l'État et la société civile.

La Base Adresse Nationale est une base de données qui a pour but de référencer l'intégralité des adresses du territoire français.

Elle est constituée par la collaboration entre:

 * des acteurs nationaux tels que l'[IGN](http://ign.fr/) et [La Poste](http://legroupe.laposte.fr/),
 * des acteurs locaux tels que les collectivités, les communes, les SDIS,
 * des citoyens par exemple à travers le projet [OpenStreetMap](http://osm.org) et l'association [OpenStreetMap France](http://openstreetmap.fr/).

Le projet est co-gouverné par [l'Administrateur Général des Données](http://www.modernisation.gouv.fr/laction-publique-se-transforme/en-ouvrant-les-donnees-publiques/administrateur-general-des-donnees-chief-data-officer-interview-henri-verdier) et le [Conseil National de l'Information Géographique](http://cnig.gouv.fr).
