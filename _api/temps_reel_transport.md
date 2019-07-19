---
title: Données temps réel pour les transports
tagline: Mettre à disposition les données temps réel des transports en commun
category: Public
owner: DINSIC
clients:
  - particuliers
  - entreprises
keywords:
  - temps réel
  - transport
  - gtfs-rt
  - siri-lite
external_site: https://transport.data.gouv.fr
score:
  detail:
    access:
      is_open: true
    monitoring:
      link: http://stats.transport.data.gouv.fr/
    contact:
      link: contact@transport.beta.gouv.fr
    doc_tech:
      link: https://tr.transport.data.gouv.fr/spec
---

## Description de l'API

[Api](http://tr.transport.data.gouv.fr/) simple de mise à disposition de données temps réel pour les transports en commun.

L'api charge des données théoriques de transport en commun (au format GTFS) ainsi que des données temps réel (au format GTFS-RT) et expose ces données consolidées au format GTFS-RT ainsi que SIRI-LITE.

L'api est utilisée sur le site du [Point d’Accès National aux données de transport](https://transport.data.gouv.fr/) pour permettre de:
* convertir les données en format GTFS-RT vers le format siri-lite ;
* limiter la charge sur les serveurs fournisseurs de données.

[Une documentation](https://doc.transport.data.gouv.fr/producteurs/temps-reel-des-transports-en-commun) est disponible pour plus d'information sur les données temps réel.

Le code source est disponible [sur github](https://github.com/etalab/transpo-rt).
