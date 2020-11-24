---
title: Données temps réel pour les transports en commun
tagline: Mettre à disposition les données temps réel des transports en commun
category: Public
producer: dinum
is_open: 1 # 1 means API is fully open
keywords:
  - temps réel
  - transport
  - gtfs-rt
  - siri-lite
themes:
  - Transport
external_site: https://transport.data.gouv.fr
monitoring_link: http://stats.transport.data.gouv.fr/
contact_link: contact@transport.beta.gouv.fr
doc_tech_link: https://tr.transport.data.gouv.fr/spec
datagouv_uuid:
  - 5f186dca05ac2c31888a2262
visits_2019: 1346
last_update: 10/12/2019
---

L‘Api transport met à disposition les données temps réel des transports en commun.

L'api charge des données théoriques de transport en commun (au format GTFS) ainsi que des données temps réel (au format GTFS-RT) et expose ces données consolidées au format GTFS-RT ainsi que SIRI-LITE.

L'api est utilisée sur le site du [Point d’Accès National aux données de transport](https://transport.data.gouv.fr/) pour permettre de:

- convertir les données en format GTFS-RT vers le format siri-lite ;
- limiter la charge sur les serveurs fournisseurs de données.

[Une documentation](https://doc.transport.data.gouv.fr/producteurs/operateurs-de-transport-regulier-de-personnes/temps-reel-des-transports-en-commun) est disponible pour plus d'information sur les données temps réel.

Le code source est disponible [sur github](https://github.com/etalab/transpo-rt).
